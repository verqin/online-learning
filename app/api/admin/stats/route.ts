import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-client'

/**
 * API endpoint to fetch admin dashboard statistics
 * GET /api/admin/stats
 * Returns: { totalUsers, totalPayments, totalCertificates, totalRevenue }
 */
export async function GET(request: NextRequest) {
  try {
    if (!supabaseAdmin) {
      console.error('[v0] Supabase admin client not initialized')
      return NextResponse.json(
        {
          totalUsers: 0,
          totalPayments: 0,
          totalCertificates: 0,
          totalRevenue: 0,
        },
        { status: 200 }
      )
    }

    // Fetch total users from profiles table
    const { count: userCount, error: userError } = await supabaseAdmin
      .from('profiles')
      .select('*', { count: 'exact', head: true })

    if (userError) {
      console.error('[v0] Error fetching user count:', userError)
    }

    // Fetch total payments from payments table
    const { data: payments, error: paymentError } = await supabaseAdmin
      .from('payments')
      .select('amount')

    if (paymentError) {
      console.error('[v0] Error fetching payments:', paymentError)
    }

    // Fetch total certificates from certificates table
    const { count: certificateCount, error: certError } = await supabaseAdmin
      .from('certificates')
      .select('*', { count: 'exact', head: true })
      .eq('is_valid', true)

    if (certError) {
      console.error('[v0] Error fetching certificates:', certError)
    }

    // Calculate total revenue
    const totalRevenue = (payments || []).reduce((sum, payment) => sum + (payment.amount || 0), 0)

    return NextResponse.json(
      {
        totalUsers: userCount || 0,
        totalPayments: (payments || []).length,
        totalCertificates: certificateCount || 0,
        totalRevenue: totalRevenue,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Error in admin stats:', error)
    return NextResponse.json(
      {
        totalUsers: 0,
        totalPayments: 0,
        totalCertificates: 0,
        totalRevenue: 0,
        error: 'Failed to fetch statistics',
      },
      { status: 500 }
    )
  }
}
