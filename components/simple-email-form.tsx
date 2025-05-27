"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function SimpleEmailForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Option 1: Direct mailto (opens email client)
      const subject = `Contact from ${formData.name}`
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      const mailtoUrl = `mailto:builddogllc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

      // Option 2: Using a simple form service
      const response = await fetch("https://formsubmit.co/builddogllc@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New contact from ${formData.name}`,
          _captcha: "false",
        }),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        // Fallback to mailto
        window.location.href = mailtoUrl
        setStatus("success")
      }
    } catch (error) {
      console.error("Error:", error)
      // Fallback to mailto
      const subject = `Contact from ${formData.name}`
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      const mailtoUrl = `mailto:builddogllc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.location.href = mailtoUrl
      setStatus("success")
    }

    setIsSubmitting(false)
  }

  if (status === "success") {
    return (
      <div className="text-center p-6 bg-green-50 rounded-lg">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-600">Thank you for your message. We'll get back to you soon!</p>
        <Button onClick={() => setStatus("idle")} variant="outline" className="mt-4">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
          required
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
          required
        />
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
          required
          rows={4}
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
