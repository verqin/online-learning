export interface CompletionNotification {
  userId: string
  userFullName: string
  userEmail: string
  userWhatsapp: string
  courseId: string
  courseName: string
  courseLevel: "certificate" | "diploma"
  startDate: string
  completionDate: string
  examScore: number
  country: string
  city: string
  certificateId: string
  completedAt: string
}

export function notifyAdminOfCompletion(notification: Omit<CompletionNotification, 'completedAt'>) {
  const fullNotification: CompletionNotification = {
    ...notification,
    completedAt: new Date().toISOString(),
  }

  // Store completion notification in localStorage for admin dashboard
  const completions = JSON.parse(
    localStorage.getItem("course_completions") || "[]"
  )
  completions.push(fullNotification)
  localStorage.setItem("course_completions", JSON.stringify(completions))

  // In a real app, this would send to backend/Supabase
  console.log("Course completion notification:", fullNotification)

  return fullNotification
}

export function getCourseCompletions() {
  return JSON.parse(localStorage.getItem("course_completions") || "[]")
}

export function generateCertificateId(): string {
  return `CERT-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
}
