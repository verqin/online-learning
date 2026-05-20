import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

// Only initialize if we have the URL and anon key
// supabaseAdmin will only be available at runtime with service role key
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export const supabaseAdmin = supabaseUrl && supabaseServiceRoleKey
  ? createClient(supabaseUrl, supabaseServiceRoleKey)
  : null

// Helper function to ensure supabase is initialized
function getSupabaseClient() {
  if (!supabase) {
    throw new Error('Supabase client not initialized. Check environment variables.')
  }
  return supabase
}

/**
 * User Profile Management Functions
 * Uses Supabase Auth (auth.users) with profiles table
 */

export async function getProfileByUserId(userId: string) {
  try {
    const client = getSupabaseClient()
    const { data, error } = await client
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()

    if (error && error.code !== 'PGRST116') {
      console.error('[v0] Error fetching profile:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('[v0] Error in getProfileByUserId:', error)
    return null
  }
}

export async function getProfileByEmail(email: string) {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('email', email)
      .single()

    if (error && error.code !== 'PGRST116') {
      console.error('[v0] Error fetching profile by email:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('[v0] Error in getProfileByEmail:', error)
    return null
  }
}

export async function createProfile(userId: string, profileData: {
  email: string
  fullName: string
  schoolName?: string
  signupType: 'academia' | 'standard'
  country?: string
  city?: string
  phone?: string
  whatsappNumber?: string
}) {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .insert([
        {
          id: userId,
          email: profileData.email,
          full_name: profileData.fullName,
          school_name: profileData.schoolName,
          signup_type: profileData.signupType,
          country: profileData.country,
          city: profileData.city,
          phone: profileData.phone,
          whatsapp_number: profileData.whatsappNumber,
          is_admin: false,
          is_active: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ])
      .select()

    if (error) {
      console.error('[v0] Error creating profile:', error)
      return null
    }

    return data?.[0]
  } catch (error) {
    console.error('[v0] Error in createProfile:', error)
    return null
  }
}

export async function updateProfile(userId: string, updates: Partial<any>) {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .update({
        ...updates,
        updated_at: new Date(),
      })
      .eq('id', userId)
      .select()

    if (error) {
      console.error('[v0] Error updating profile:', error)
      return null
    }

    return data?.[0]
  } catch (error) {
    console.error('[v0] Error in updateProfile:', error)
    return null
  }
}

/**
 * Course Management Functions
 */

export async function getCourses(limit?: number) {
  try {
    const client = getSupabaseClient()
    let query = client.from('courses').select('*')

    if (limit) {
      query = query.limit(limit)
    }

    const { data, error } = await query

    if (error) {
      console.error('[v0] Error fetching courses:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('[v0] Error in getCourses:', error)
    return []
  }
}

export async function getCourseById(courseId: string) {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('id', courseId)
      .single()

    if (error && error.code !== 'PGRST116') {
      console.error('[v0] Error fetching course:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('[v0] Error in getCourseById:', error)
    return null
  }
}

export async function searchCourses(searchTerm: string) {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .ilike('title', `%${searchTerm}%`)
      .limit(20)

    if (error) {
      console.error('[v0] Error searching courses:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('[v0] Error in searchCourses:', error)
    return []
  }
}

/**
 * Enrollment Management Functions
 */

export async function enrollInCourse(userId: string, courseId: string) {
  try {
    const { data, error } = await supabase
      .from('enrollments')
      .insert([
        {
          user_id: userId,
          course_id: courseId,
          enrolled_at: new Date(),
          status: 'in-progress',
          progress: 0,
        },
      ])
      .select()

    if (error) {
      console.error('[v0] Error creating enrollment:', error)
      return null
    }

    return data?.[0]
  } catch (error) {
    console.error('[v0] Error in enrollInCourse:', error)
    return null
  }
}

export async function getUserEnrollments(userId: string) {
  try {
    const { data, error } = await supabase
      .from('enrollments')
      .select('*, courses(*)')
      .eq('user_id', userId)
      .order('enrolled_at', { ascending: false })

    if (error) {
      console.error('[v0] Error fetching enrollments:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('[v0] Error in getUserEnrollments:', error)
    return []
  }
}

export async function updateEnrollmentProgress(enrollmentId: string, progress: number) {
  try {
    const { data, error } = await supabase
      .from('enrollments')
      .update({
        progress: Math.min(100, Math.max(0, progress)),
        updated_at: new Date(),
      })
      .eq('id', enrollmentId)
      .select()

    if (error) {
      console.error('[v0] Error updating enrollment:', error)
      return null
    }

    return data?.[0]
  } catch (error) {
    console.error('[v0] Error in updateEnrollmentProgress:', error)
    return null
  }
}

export async function completeEnrollment(enrollmentId: string, examScore: number) {
  try {
    const { data, error } = await supabase
      .from('enrollments')
      .update({
        completed_at: new Date(),
        status: 'completed',
        exam_score: examScore,
        progress: 100,
      })
      .eq('id', enrollmentId)
      .select()

    if (error) {
      console.error('[v0] Error completing enrollment:', error)
      return null
    }

    return data?.[0]
  } catch (error) {
    console.error('[v0] Error in completeEnrollment:', error)
    return null
  }
}

export async function getUserProgress(userId: string, courseId: string) {
  try {
    const { data, error } = await supabase
      .from('enrollments')
      .select('id, progress, status, completed_at')
      .eq('user_id', userId)
      .eq('course_id', courseId)
      .single()

    if (error && error.code !== 'PGRST116') {
      console.error('[v0] Error fetching user progress:', error)
      return null
    }

    // If no enrollment found, return 0 progress
    if (error?.code === 'PGRST116' || !data) {
      return { progress_percentage: 0, status: 'not-started' }
    }

    return {
      progress_percentage: data.progress || 0,
      status: data.status || 'in-progress',
      completed_at: data.completed_at,
    }
  } catch (error) {
    console.error('[v0] Error in getUserProgress:', error)
    return null
  }
}

/**
 * Certificate Management Functions
 */

export async function issueCertificate(userId: string, courseId: string, certificateType: 'certificate' | 'diploma', pdfUrl?: string) {
  try {
    const verificationCode = `CERT-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    const { data, error } = await supabase
      .from('certificates')
      .insert([
        {
          user_id: userId,
          course_id: courseId,
          certificate_type: certificateType,
          verification_code: verificationCode,
          pdf_url: pdfUrl,
          issue_date: new Date(),
          is_valid: true,
        },
      ])
      .select()

    if (error) {
      console.error('[v0] Error issuing certificate:', error)
      return null
    }

    return data?.[0]
  } catch (error) {
    console.error('[v0] Error in issueCertificate:', error)
    return null
  }
}

export async function getUserCertificates(userId: string) {
  try {
    const { data, error } = await supabase
      .from('certificates')
      .select('*, courses(*)')
      .eq('user_id', userId)
      .eq('is_valid', true)
      .order('issue_date', { ascending: false })

    if (error) {
      console.error('[v0] Error fetching certificates:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('[v0] Error in getUserCertificates:', error)
    return []
  }
}

/**
 * Payment Management Functions
 */

export async function createPayment(paymentData: {
  userId: string
  courseId?: string
  certificateId?: string
  amount: number
  currency?: string
  paymentMethod: string
  transactionId: string
}) {
  try {
    const { data, error } = await supabase
      .from('payments')
      .insert([
        {
          user_id: paymentData.userId,
          course_id: paymentData.courseId,
          certificate_id: paymentData.certificateId,
          amount: paymentData.amount,
          currency: paymentData.currency || 'USD',
          payment_method: paymentData.paymentMethod,
          transaction_id: paymentData.transactionId,
          status: 'completed',
          payment_date: new Date(),
        },
      ])
      .select()

    if (error) {
      console.error('[v0] Error creating payment:', error)
      return null
    }

    return data?.[0]
  } catch (error) {
    console.error('[v0] Error in createPayment:', error)
    return null
  }
}

/**
 * Notification Management Functions
 */

export async function createNotification(notificationData: {
  userId: string
  type: string
  title: string
  message?: string
  actionUrl?: string
  data?: any
}) {
  try {
    const { data, error } = await supabase
      .from('notifications')
      .insert([
        {
          user_id: notificationData.userId,
          type: notificationData.type,
          title: notificationData.title,
          message: notificationData.message,
          action_url: notificationData.actionUrl,
          data: notificationData.data,
          is_read: false,
          created_at: new Date(),
        },
      ])
      .select()

    if (error) {
      console.error('[v0] Error creating notification:', error)
      return null
    }

    return data?.[0]
  } catch (error) {
    console.error('[v0] Error in createNotification:', error)
    return null
  }
}

export async function getUserNotifications(userId: string, unreadOnly = false) {
  try {
    let query = supabase
      .from('notifications')
      .select('*')
      .eq('user_id', userId)

    if (unreadOnly) {
      query = query.eq('is_read', false)
    }

    const { data, error } = await query.order('created_at', { ascending: false })

    if (error) {
      console.error('[v0] Error fetching notifications:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('[v0] Error in getUserNotifications:', error)
    return []
  }
}

/**
 * 2FA Management Functions
 */

export async function create2FACode(userId: string, expiryMinutes = 10) {
  try {
    const code = Math.random().toString().slice(2, 8).padStart(6, '0')
    const expiryTime = new Date(Date.now() + expiryMinutes * 60 * 1000)

    const { data, error } = await supabase
      .from('two_fa_codes')
      .insert([
        {
          user_id: userId,
          code: code,
          purpose: 'login',
          is_used: false,
          expires_at: expiryTime,
        },
      ])
      .select()

    if (error) {
      console.error('[v0] Error creating 2FA code:', error)
      return null
    }

    return { code: data?.[0]?.code, id: data?.[0]?.id }
  } catch (error) {
    console.error('[v0] Error in create2FACode:', error)
    return null
  }
}

export async function verify2FACode(userId: string, code: string) {
  try {
    const { data, error } = await supabase
      .from('two_fa_codes')
      .select('*')
      .eq('user_id', userId)
      .eq('code', code)
      .eq('is_used', false)
      .gt('expires_at', new Date().toISOString())
      .single()

    if (error && error.code === 'PGRST116') {
      console.log('[v0] 2FA code not found or expired')
      return null
    }

    if (error) {
      console.error('[v0] Error verifying 2FA code:', error)
      return null
    }

    // Mark as used
    await supabase
      .from('two_fa_codes')
      .update({ is_used: true })
      .eq('id', data.id)

    return data
  } catch (error) {
    console.error('[v0] Error in verify2FACode:', error)
    return null
  }
}

/**
 * Admin Functions
 */

export async function setAdminStatus(userId: string, isAdmin: boolean) {
  try {
    const { data, error } = await supabaseAdmin
      .from('profiles')
      .update({ is_admin: isAdmin })
      .eq('id', userId)
      .select()

    if (error) {
      console.error('[v0] Error updating admin status:', error)
      return null
    }

    return data?.[0]
  } catch (error) {
    console.error('[v0] Error in setAdminStatus:', error)
    return null
  }
}

export async function logErrorEvent(errorData: {
  userId?: string
  endpoint: string
  errorType: string
  errorMessage: string
  statusCode?: number
  requestData?: any
  stackTrace?: string
}) {
  try {
    await getSupabaseClient().from('error_logs').insert([
      {
        user_id: errorData.userId,
        endpoint: errorData.endpoint,
        error_type: errorData.errorType,
        error_message: errorData.errorMessage,
        status_code: errorData.statusCode,
        request_data: errorData.requestData,
        stack_trace: errorData.stackTrace,
      },
    ])
  } catch (error) {
    console.error('[v0] Error logging error event:', error)
  }
}
