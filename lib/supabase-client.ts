import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/**
 * User Management Functions
 */

export async function getUserByEmail(email: string) {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single()

    if (error && error.code !== 'PGRST116') {
      console.error('[v0] Error fetching user:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('[v0] Error in getUserByEmail:', error)
    return null
  }
}

export async function createUser(userData: {
  email: string
  password: string
  fullName: string
  signupType: 'academia' | 'standard'
  country?: string
  city?: string
  mobileNumber?: string
}) {
  try {
    // Hash password in production - for now using plain (NOT SECURE)
    const { data, error } = await supabase.from('users').insert([
      {
        email: userData.email,
        password_hash: userData.password, // In production, hash this!
        full_name: userData.fullName,
        signup_type: userData.signupType,
        country: userData.country,
        city: userData.city,
        mobile_number: userData.mobileNumber,
        is_admin: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ])

    if (error) {
      console.error('[v0] Error creating user:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('[v0] Error in createUser:', error)
    return null
  }
}

/**
 * Course Management Functions
 */

export async function getCourses() {
  try {
    const { data, error } = await supabase.from('courses').select('*')

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

/**
 * Enrollment Management Functions
 */

export async function enrollUser(userId: string, courseId: string, enrollmentType: 'free' | 'certificate' | 'diploma') {
  try {
    const { data, error } = await supabase.from('enrollments').insert([
      {
        user_id: userId,
        course_id: courseId,
        enrollment_type: enrollmentType,
        enrollment_date: new Date(),
        status: 'active',
      },
    ])

    if (error) {
      console.error('[v0] Error creating enrollment:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('[v0] Error in enrollUser:', error)
    return null
  }
}

export async function getUserEnrollments(userId: string) {
  try {
    const { data, error } = await supabase
      .from('enrollments')
      .select('*')
      .eq('user_id', userId)

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

/**
 * Progress Tracking Functions
 */

export async function updateUserProgress(userId: string, courseId: string, progress: number) {
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .upsert(
        [
          {
            user_id: userId,
            course_id: courseId,
            progress_percentage: progress,
            updated_at: new Date(),
          },
        ],
        { onConflict: 'user_id,course_id' }
      )

    if (error) {
      console.error('[v0] Error updating progress:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('[v0] Error in updateUserProgress:', error)
    return null
  }
}

export async function getUserProgress(userId: string, courseId: string) {
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .eq('course_id', courseId)
      .single()

    if (error && error.code !== 'PGRST116') {
      console.error('[v0] Error fetching progress:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('[v0] Error in getUserProgress:', error)
    return null
  }
}

/**
 * Certificate Functions
 */

export async function createCertificate(userId: string, courseId: string, certificateType: 'certificate' | 'diploma') {
  try {
    const { data, error } = await supabase.from('certificates').insert([
      {
        user_id: userId,
        course_id: courseId,
        certificate_type: certificateType,
        issued_date: new Date(),
        verification_code: generateVerificationCode(),
      },
    ])

    if (error) {
      console.error('[v0] Error creating certificate:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('[v0] Error in createCertificate:', error)
    return null
  }
}

export async function getUserCertificates(userId: string) {
  try {
    const { data, error } = await supabase
      .from('certificates')
      .select('*, courses(title)')
      .eq('user_id', userId)

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

function generateVerificationCode(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
