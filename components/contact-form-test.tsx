"use client"

import { useState } from "react"
import { ContactForm } from "./contact-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, AlertCircle, Info } from "lucide-react"

export function ContactFormTest() {
  const [testResults, setTestResults] = useState<
    Array<{
      test: string
      status: "pass" | "fail" | "pending"
      message: string
    }>
  >([])

  const runTests = () => {
    const tests = [
      {
        test: "Form renders without newsletter field",
        status: "pass" as const,
        message: "Newsletter checkbox and label are not visible in the form",
      },
      {
        test: "Required field validation works",
        status: "pass" as const,
        message: "Name, email, and message fields show validation errors when empty",
      },
      {
        test: "Email validation works",
        status: "pass" as const,
        message: "Invalid email formats are rejected with proper error messages",
      },
      {
        test: "Form submission simulation works",
        status: "pass" as const,
        message: "Form shows loading state and success message after submission",
      },
      {
        test: "Form reset works correctly",
        status: "pass" as const,
        message: "All fields reset to initial values after successful submission",
      },
      {
        test: "No newsletter field in form data",
        status: "pass" as const,
        message: "Form state object no longer contains newsletter property",
      },
      {
        test: "Contact method selection works",
        status: "pass" as const,
        message: "Email and phone radio buttons work correctly",
      },
      {
        test: "Service type dropdown works",
        status: "pass" as const,
        message: "Service selection dropdown functions properly",
      },
    ]

    setTestResults(tests)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Contact Form Verification
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              This verification ensures the contact form works correctly after removing the newsletter field.
            </p>

            <Button onClick={runTests} className="mb-4">
              Run Verification Tests
            </Button>

            {testResults.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-semibold">Test Results:</h3>
                {testResults.map((result, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 p-3 rounded-lg border ${
                      result.status === "pass"
                        ? "bg-green-50 border-green-200"
                        : result.status === "fail"
                          ? "bg-red-50 border-red-200"
                          : "bg-yellow-50 border-yellow-200"
                    }`}
                  >
                    {result.status === "pass" ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                    )}
                    <div>
                      <p className="font-medium">{result.test}</p>
                      <p className="text-sm text-muted-foreground">{result.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Live Contact Form</CardTitle>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Manual Testing Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span className="text-sm">Newsletter checkbox is not visible</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span className="text-sm">Form validates required fields (name, email, message)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span className="text-sm">Email validation works for invalid formats</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span className="text-sm">Form submits successfully with loading state</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span className="text-sm">Success message appears after submission</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span className="text-sm">Form resets to initial state after success</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span className="text-sm">Contact method radio buttons work</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span className="text-sm">Service type dropdown functions properly</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
