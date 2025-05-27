"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [result, setResult] = useState("")
  const [formData, setFormData] = useState({
    access_key: "bec21d86-d2e6-4b7e-9cf4-bdeb6ae2bf54",
    subject: "New Contact Form Submission from Accent Walls Pro",
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
    preferredContact: "email",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setTouched((prev) => ({ ...prev, [name]: true }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    validateField(name, formData[name as keyof typeof formData] as string)
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    setTouched((prev) => ({ ...prev, [name]: true }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateField = (name: string, value: string) => {
    let error = ""

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required"
        }
        break
      case "email":
        if (!value.trim()) {
          error = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email"
        }
        break
      case "message":
        if (!value.trim()) {
          error = "Message is required"
        } else if (value.trim().length < 10) {
          error = "Message must be at least 10 characters"
        }
        break
      default:
        break
    }

    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }))
      return false
    }

    return true
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}
    let isValid = true

    // Mark all fields as touched
    const allTouched: Record<string, boolean> = {}
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true
    })
    setTouched(allTouched)

    // Validate required fields
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
      isValid = false
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    try {
      setFormState("submitting")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      console.log(data)

      setResult(data.message)

      if (data.success) {
        setFormState("success")
        // Reset form after successful submission
        setFormData({
          access_key: "bec21d86-d2e6-4b7e-9cf4-bdeb6ae2bf54",
          subject: "New Contact Form Submission from Accent Walls Pro",
          name: "",
          email: "",
          phone: "",
          serviceType: "",
          message: "",
          preferredContact: "email",
        })
        setTouched({})
        setErrors({})

        // Redirect to thank you page after 2 seconds
        setTimeout(() => {
          window.location.href = "/thank-you"
        }, 2000)
      } else {
        console.log(data)
        setFormState("error")
      }
    } catch (error) {
      console.log(error)
      setFormState("error")
      setResult("Something went wrong!")
    }

    // Clear result and status after 5 seconds
    setTimeout(() => {
      setResult("")
      setFormState("idle")
    }, 5000)
  }

  return (
    <form onSubmit={submitForm} className="space-y-6">
      {formState === "success" && (
        <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-start mb-6 animate-fade-in">
          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
          <div>
            <h3 className="text-green-800 font-medium">Message sent successfully!</h3>
            <p className="text-green-700 text-sm mt-1">
              {result || "Thank you for contacting us. We'll get back to you within 24 hours."}
            </p>
          </div>
        </div>
      )}

      {formState === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-start mb-6 animate-fade-in">
          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3" />
          <div>
            <h3 className="text-red-800 font-medium">Something went wrong</h3>
            <p className="text-red-700 text-sm mt-1">
              {result || "Please try again or contact us directly at (240) 426-7900."}
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className={cn(errors.name && touched.name ? "text-red-500" : "")}>
            Full Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="John Smith"
            className={cn(errors.name && touched.name ? "border-red-500 focus:ring-red-500" : "")}
            aria-invalid={errors.name && touched.name ? "true" : "false"}
          />
          {errors.name && touched.name && (
            <p className="text-sm text-red-500 flex items-center gap-1 animate-fade-in">
              <AlertCircle className="h-3 w-3" /> {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className={cn(errors.email && touched.email ? "text-red-500" : "")}>
            Email Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="john@example.com"
            className={cn(errors.email && touched.email ? "border-red-500 focus:ring-red-500" : "")}
            aria-invalid={errors.email && touched.email ? "true" : "false"}
          />
          {errors.email && touched.email && (
            <p className="text-sm text-red-500 flex items-center gap-1 animate-fade-in">
              <AlertCircle className="h-3 w-3" /> {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(301) 555-1234"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="serviceType">Service Interest</Label>
          <Select value={formData.serviceType} onValueChange={(value) => handleSelectChange("serviceType", value)}>
            <SelectTrigger id="serviceType">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="accent-walls">Accent Walls</SelectItem>
              <SelectItem value="board-and-batten">Board & Batten</SelectItem>
              <SelectItem value="roman-plaster">Roman Plaster</SelectItem>
              <SelectItem value="limewash-walls">Limewash Walls</SelectItem>
              <SelectItem value="fireplace-buildouts">Fireplace Build-Outs</SelectItem>
              <SelectItem value="media-walls">Media Walls</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className={cn(errors.message && touched.message ? "text-red-500" : "")}>
          Message <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Tell us about your project..."
          rows={5}
          className={cn("resize-none", errors.message && touched.message ? "border-red-500 focus:ring-red-500" : "")}
          aria-invalid={errors.message && touched.message ? "true" : "false"}
        />
        {errors.message && touched.message && (
          <p className="text-sm text-red-500 flex items-center gap-1 animate-fade-in">
            <AlertCircle className="h-3 w-3" /> {errors.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label>Preferred Contact Method</Label>
        <div className="flex flex-wrap gap-4 mt-2">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="email-contact"
              name="preferredContact"
              value="email"
              checked={formData.preferredContact === "email"}
              onChange={handleChange}
              className="h-4 w-4 text-primary focus:ring-primary"
            />
            <Label htmlFor="email-contact" className="font-normal">
              Email
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="phone-contact"
              name="preferredContact"
              value="phone"
              checked={formData.preferredContact === "phone"}
              onChange={handleChange}
              className="h-4 w-4 text-primary focus:ring-primary"
            />
            <Label htmlFor="phone-contact" className="font-normal">
              Phone
            </Label>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full relative overflow-hidden group" disabled={formState === "submitting"}>
        <span
          className={cn(
            "flex items-center justify-center gap-2 transition-all duration-300",
            formState === "submitting" ? "opacity-0" : "opacity-100",
          )}
        >
          Send Message
        </span>
        {formState === "submitting" && (
          <span className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="h-5 w-5 animate-spin" />
          </span>
        )}
        <span className="absolute bottom-0 left-0 h-1 bg-white/20 transition-all duration-300 group-hover:w-full w-0"></span>
      </Button>
    </form>
  )
}
