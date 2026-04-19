'use client'

import posthog from 'posthog-js'
import { useEffect } from 'react'

export function initPostHog() {
  if (typeof window !== 'undefined') {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY

    if (!key) {
      console.warn('[PostHog] Missing NEXT_PUBLIC_POSTHOG_KEY environment variable')
      return
    }

    posthog.init(key, {
      api_host: 'https://us.i.posthog.com',
      person_profiles: 'identified_only',
      loaded: (ph) => {
        if (process.env.NODE_ENV === 'development') {
          ph.debug()
        }
      },
    })
  }
}

export function trackEvent(
  eventName: string,
  properties?: Record<string, any>
) {
  if (typeof window !== 'undefined' && posthog) {
    try {
      posthog.capture(eventName, {
        timestamp: new Date().toISOString(),
        ...properties,
      })
    } catch (error) {
      console.error('[PostHog] Error tracking event:', eventName, error)
    }
  }
}

export function setUserProperties(userId: string, properties: Record<string, any>) {
  if (typeof window !== 'undefined' && posthog) {
    try {
      posthog.identify(userId, {
        ...properties,
      })
    } catch (error) {
      console.error('[PostHog] Error setting user properties:', error)
    }
  }
}

export function trackPageView(pageName: string, properties?: Record<string, any>) {
  trackEvent('page_view', {
    page_name: pageName,
    ...properties,
  })
}

export function trackCourseStarted(courseId: string, courseName: string, courseType: string) {
  trackEvent('course_started', {
    course_id: courseId,
    course_name: courseName,
    course_type: courseType,
  })
}

export function trackCourseCompleted(courseId: string, courseName: string, duration: number) {
  trackEvent('course_completed', {
    course_id: courseId,
    course_name: courseName,
    duration_seconds: duration,
  })
}

export function trackPaymentButtonClicked(courseId: string, amount: number) {
  trackEvent('payment_button_clicked', {
    course_id: courseId,
    amount: amount,
  })
}

export function trackPaymentSuccessful(paymentId: string, amount: number, courseId: string) {
  trackEvent('payment_successful', {
    payment_id: paymentId,
    amount: amount,
    course_id: courseId,
  })
}

export function trackCertificateGenerated(certificateId: string, studentName: string, courseName: string) {
  trackEvent('certificate_generated', {
    certificate_id: certificateId,
    student_name: studentName,
    course_name: courseName,
  })
}

export function trackAdminNotifyClicked(subject: string) {
  trackEvent('notify_admin_clicked', {
    subject: subject,
  })
}
