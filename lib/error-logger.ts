'use client'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface ErrorLog {
  endpoint: string
  error_message: string
  error_type: string
  status_code?: number
  user_id?: string
  timestamp: string
  metadata?: Record<string, any>
}

export async function logError(error: ErrorLog) {
  try {
    const { data, error: supabaseError } = await supabase
      .from('error_logs')
      .insert([error])

    if (supabaseError) {
      console.error('[Error Logger] Supabase error:', supabaseError)
    }

    return data
  } catch (err) {
    console.error('[Error Logger] Failed to log error:', err)
  }
}

export async function logApiError(
  endpoint: string,
  error: Error | string,
  statusCode?: number,
  metadata?: Record<string, any>
) {
  const errorMessage = typeof error === 'string' ? error : error.message
  const errorType = typeof error === 'string' ? 'unknown' : error.constructor.name

  return logError({
    endpoint,
    error_message: errorMessage,
    error_type: errorType,
    status_code: statusCode,
    timestamp: new Date().toISOString(),
    metadata,
  })
}

export async function getErrorStats(days: number = 7) {
  try {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)

    const { data, error } = await supabase
      .from('error_logs')
      .select('*')
      .gte('timestamp', startDate.toISOString())
      .order('timestamp', { ascending: false })

    if (error) throw error

    // Calculate statistics
    const errorsByEndpoint: Record<string, number> = {}
    const errorsByType: Record<string, number> = {}
    const errorsByDay: Record<string, number> = {}

    data?.forEach((log: ErrorLog) => {
      // Count by endpoint
      errorsByEndpoint[log.endpoint] = (errorsByEndpoint[log.endpoint] || 0) + 1

      // Count by error type
      errorsByType[log.error_type] = (errorsByType[log.error_type] || 0) + 1

      // Count by day
      const day = log.timestamp.split('T')[0]
      errorsByDay[day] = (errorsByDay[day] || 0) + 1
    })

    return {
      total_errors: data?.length || 0,
      errors_by_endpoint: errorsByEndpoint,
      errors_by_type: errorsByType,
      errors_by_day: errorsByDay,
    }
  } catch (error) {
    console.error('[Error Logger] Failed to get error stats:', error)
    return null
  }
}
