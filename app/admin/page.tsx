"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AdminPage() {
  const router = useRouter()

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin") === "true"

    if (isAdmin) {
      router.push("/admin/dashboard")
    } else {
      router.push("/login")
    }
  }, [router])

  return null
}
