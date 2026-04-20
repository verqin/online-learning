import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase-client'

/**
 * Admin analytics API endpoint
 * GET /api/admin/analytics
 * Returns comprehensive analytics data
 */
export async function GET(request: NextRequest) {
  try {
    // Verify admin authorization
    const adminSession = request.cookies.get('admin_session')
    if (!adminSession) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Get all analytics data
    const [
      usersCount,
      coursesCount,
      enrollmentsCount,
      certificatesCount,
      paymentsData,
      errorLogsCount,
    ] = await Promise.all([
      getUsersCount(),
      getCoursesCount(),
      getEnrollmentsCount(),
      getCertificatesCount(),
      getPaymentsData(),
      getErrorLogsCount(),
    ])

    // Calculate metrics
    const totalRevenue = paymentsData.completedPayments.reduce((sum: number, p: any) => sum + (p.amount || 0), 0)
    const averageTransactionValue = paymentsData.totalPayments > 0 ? totalRevenue / paymentsData.totalPayments : 0
    const completionRate = enrollmentsCount.total > 0 ? (enrollmentsCount.completed / enrollmentsCount.total) * 100 : 0
    const errorRate = (errorLogsCount / (enrollmentsCount.total || 1)) * 100

    return NextResponse.json(
      {
        timestamp: new Date(),
        users: {
          total: usersCount.total,
          active: usersCount.active,
          academia: usersCount.academia,
          standard: usersCount.standard,
        },
        courses: {
          total: coursesCount,
        },
        enrollments: {
          total: enrollmentsCount.total,
          active: enrollmentsCount.active,
          completed: enrollmentsCount.completed,
        },
        certificates: {
          total: certificatesCount.certificates,
          diplomas: certificatesCount.diplomas,
        },
        payments: {
          total: paymentsData.totalPayments,
          completed: paymentsData.completedPayments.length,
          pending: paymentsData.pendingPayments,
          failed: paymentsData.failedPayments,
          totalRevenue: totalRevenue,
          averageTransaction: averageTransactionValue,
        },
        performance: {
          completionRate: Math.round(completionRate),
          errorRate: Math.round(errorRate),
          errorCount: errorLogsCount,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Error fetching analytics:', error)
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    )
  }
}

async function getUsersCount() {
  try {
    const { data: allUsers } = await supabase
      .from('users')
      .select('id, is_active, signup_type')

    const total = allUsers?.length || 0
    const active = allUsers?.filter((u) => u.is_active).length || 0
    const academia = allUsers?.filter((u) => u.signup_type === 'academia').length || 0
    const standard = allUsers?.filter((u) => u.signup_type === 'standard').length || 0

    return { total, active, academia, standard }
  } catch (error) {
    console.error('[v0] Error in getUsersCount:', error)
    return { total: 0, active: 0, academia: 0, standard: 0 }
  }
}

async function getCoursesCount() {
  try {
    const { count } = await supabase
      .from('courses')
      .select('*', { count: 'exact', head: true })
      .eq('is_active', true)

    return count || 0
  } catch (error) {
    console.error('[v0] Error in getCoursesCount:', error)
    return 0
  }
}

async function getEnrollmentsCount() {
  try {
    const { data: enrollments } = await supabase
      .from('enrollments')
      .select('id, status')

    const total = enrollments?.length || 0
    const active = enrollments?.filter((e) => e.status === 'active').length || 0
    const completed = enrollments?.filter((e) => e.status === 'completed').length || 0

    return { total, active, completed }
  } catch (error) {
    console.error('[v0] Error in getEnrollmentsCount:', error)
    return { total: 0, active: 0, completed: 0 }
  }
}

async function getCertificatesCount() {
  try {
    const { data: certs } = await supabase
      .from('certificates')
      .select('id, certificate_type')

    const certificates = certs?.filter((c) => c.certificate_type === 'certificate').length || 0
    const diplomas = certs?.filter((c) => c.certificate_type === 'diploma').length || 0

    return { certificates, diplomas }
  } catch (error) {
    console.error('[v0] Error in getCertificatesCount:', error)
    return { certificates: 0, diplomas: 0 }
  }
}

async function getPaymentsData() {
  try {
    const { data: payments } = await supabase
      .from('payments')
      .select('id, amount, payment_status')

    const completedPayments = payments?.filter((p) => p.payment_status === 'completed') || []
    const pendingPayments = payments?.filter((p) => p.payment_status === 'pending').length || 0
    const failedPayments = payments?.filter((p) => p.payment_status === 'failed').length || 0

    return {
      totalPayments: payments?.length || 0,
      completedPayments,
      pendingPayments,
      failedPayments,
    }
  } catch (error) {
    console.error('[v0] Error in getPaymentsData:', error)
    return {
      totalPayments: 0,
      completedPayments: [],
      pendingPayments: 0,
      failedPayments: 0,
    }
  }
}

async function getErrorLogsCount() {
  try {
    const { count } = await supabase
      .from('error_logs')
      .select('*', { count: 'exact', head: true })

    return count || 0
  } catch (error) {
    console.error('[v0] Error in getErrorLogsCount:', error)
    return 0
  }
}
