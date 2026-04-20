"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen, ArrowLeft, User, Mail, Phone, MapPin } from "lucide-react"
import { GoogleSignInButton } from "@/components/auth/google-signin-button"

export default function SignupPage() {
  const [signupType, setSignupType] = useState<"academia" | "standard" | null>(null)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
    country: "",
    city: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    // Validate password strength
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters")
      setIsLoading(false)
      return
    }

    // Simulate API call to create account
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Automatically sign in the user by storing session
    localStorage.setItem("isLoggedIn", "true")
    localStorage.setItem("userEmail", formData.email)
    localStorage.setItem("userName", formData.fullName)
    localStorage.setItem("signupType", signupType || "standard")
    localStorage.setItem("joinDate", new Date().toISOString().split('T')[0])
    localStorage.setItem("userPhone", formData.mobileNumber)
    localStorage.setItem("userCountry", formData.country)
    localStorage.setItem("userCity", formData.city)

    // Redirect to dashboard (auto-logged in)
    window.location.href = "/dashboard"
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex flex-col items-center justify-center gap-2 mb-4">
            <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg bg-white border-2 border-gray-100">
              <img
                src="/edusanna-logo-new.png"
                alt="Edusanna Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold gradient-text">EDUSANNA</h2>
              <p className="text-xs text-blue-600">Elevate Your Mind</p>
            </div>
          </div>
          <h1 className="text-xl font-bold text-blue-900 mb-1">Create Your Account</h1>
          <p className="text-sm text-blue-700">Join thousands of learners transforming their lives</p>
        </div>

        {/* Signup Type Selection */}
        {!signupType ? (
          <Card className="glass-card-light shadow-lg border-blue-100">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl gradient-text">Choose Your Learning Path</CardTitle>
              <p className="text-sm text-gray-600 mt-2">Select the option that best fits your goals</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <button
                onClick={() => setSignupType("academia")}
                className="w-full p-6 rounded-lg border-2 border-blue-300 bg-blue-50 hover:bg-blue-100 transition-all text-left"
              >
                <h3 className="font-bold text-lg text-blue-900 mb-2">Academia Plan</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Structured learning path</li>
                  <li>✓ Monthly assignments & feedback</li>
                  <li>✓ Instructor support included</li>
                  <li>✓ Academic certificates</li>
                </ul>
                <p className="text-xs text-blue-600 font-semibold mt-3">Best for students & professionals</p>
              </button>

              <button
                onClick={() => setSignupType("standard")}
                className="w-full p-6 rounded-lg border-2 border-gray-300 bg-gray-50 hover:bg-gray-100 transition-all text-left"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-2">Standard Plan</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Self-paced learning</li>
                  <li>✓ Lifetime course access</li>
                  <li>✓ Free learning materials</li>
                  <li>✓ Completion certificates</li>
                </ul>
                <p className="text-xs text-gray-600 font-semibold mt-3">Best for casual learners</p>
              </button>
            </CardContent>
          </Card>
        ) : (
          <Card className="glass-card-light shadow-lg border-blue-100">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center mb-2">
                <button
                  onClick={() => setSignupType(null)}
                  className="absolute left-6 text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  ← Back
                </button>
                <CardTitle className="text-xl gradient-text">
                  {signupType === "academia" ? "Academia" : "Standard"} Sign Up
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              {error && (
                <div className="mb-4 p-4 bg-red-100 border border-red-400 rounded-lg">
                  <p className="text-red-700 text-sm font-medium">{error}</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="flex items-center text-blue-900 mb-2">
                  <User className="w-4 h-4 mr-2" />
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="h-12 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="flex items-center text-blue-900 mb-2">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="password" className="text-blue-900 mb-2 block">
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="h-12 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <Label htmlFor="confirmPassword" className="text-blue-900 mb-2 block">
                    Confirm
                  </Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="h-12 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Confirm"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="mobileNumber" className="flex items-center text-blue-900 mb-2">
                  <Phone className="w-4 h-4 mr-2" />
                  Mobile Number (with country code)
                </Label>
                <Input
                  id="mobileNumber"
                  name="mobileNumber"
                  type="tel"
                  required
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="h-12 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="+263 780 901 929"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="country" className="flex items-center text-blue-900 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    Country
                  </Label>
                  <Input
                    id="country"
                    name="country"
                    type="text"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="h-12 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Zimbabwe"
                  />
                </div>
                <div>
                  <Label htmlFor="city" className="text-blue-900 mb-2 block">
                    City
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="h-12 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Harare"
                  />
                </div>
              </div>

              <Button type="submit" disabled={isLoading} className="w-full premium-button h-12 text-lg mt-6">
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-blue-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-blue-600">Or sign up with</span>
              </div>
            </div>

            <GoogleSignInButton />

            <div className="text-center mt-6">
              <p className="text-blue-700">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Sign In
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
        )}
      </div>
    </div>
  )
}
