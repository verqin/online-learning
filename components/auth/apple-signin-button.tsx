"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Apple } from "lucide-react"

export function AppleSignInButton() {
  return (
    <Button
      onClick={() => signIn("apple", { callbackUrl: "/" })}
      variant="outline"
      className="w-full dark:bg-black dark:text-white dark:hover:bg-gray-900"
    >
      <Apple className="mr-2 h-4 w-4" />
      Continue with Apple
    </Button>
  )
}
