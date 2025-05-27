"use client"

import Link from "next/link"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle, ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  // Add progress indicator state
  const [formStep, setFormStep] = useState(1)
  const totalSteps = 3

  // Form data state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    leadSource: "Website",
    service: "",
    projectDetails: "",
    timeline: "",
    address: "",
    city: "",
    state: "MD",
    zip: "",
    budget: "",
    marketing: false,
  })

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

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const validateField = (name: string, value: string) => {
    let error = ""

    switch (name) {
      case "firstName":
      case "lastName":
        if (!value.trim()) {
          error = `${name === "firstName" ? "First" : "Last"} name is required`
        }
        break
      case "email":
        if (!value.trim()) {
          error = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email"
        }
        break
      case "phone":
        if (!value.trim()) {
          error = "Phone number is required"
        }
        break
      case "service":
        if (!value) {
          error = "Please select a service"
        }
        break
      case "timeline":
        if (!value) {
          error = "Please select a timeline"
        }
        break
      case "address":
        if (!value.trim()) {
          error = "Address is required"
        }
        break
      case "city":
        if (!value.trim()) {
          error = "City is required"
        }
        break
      case "zip":
        if (!value.trim()) {
          error = "ZIP code is required"
        }
        break
      case "budget":
        if (!value) {
          error = "Please select a budget range"
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

  // Validate current step
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}
    let isValid = true

    // Mark all relevant fields as touched based on the current step
    const relevantFields: Record<string, boolean> = {}

    if (step === 1) {
      ;["firstName", "lastName", "email", "phone"].forEach((field) => {
        relevantFields[field] = true
        if (!validateField(field, formData[field as keyof typeof formData] as string)) {
          isValid = false
        }
      })
    }

    if (step === 2) {
      ;["service", "timeline"].forEach((field) => {
        relevantFields[field] = true
        if (!validateField(field, formData[field as keyof typeof formData] as string)) {
          isValid = false
        }
      })
    }

    if (step === 3) {
      ;["address", "city", "zip", "budget"].forEach((field) => {
        relevantFields[field] = true
        if (!validateField(field, formData[field as keyof typeof formData] as string)) {
          isValid = false
        }
      })
    }

    setTouched((prev) => ({ ...prev, ...relevantFields }))
    return isValid
  }

  // Enhance the handleSubmit function to record the lead source
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateStep(3)) return

    setIsSubmitting(true)

    try {
      // Submit to our API route
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        // Redirect to thank you page
        window.location.href = "/thank-you"
      } else {
        console.error("Failed to submit quote request")
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error("Error submitting quote request:", error)
      setIsSubmitting(false)
    }
  }

  // Add functions to navigate form steps
  const nextStep = () => {
    if (validateStep(formStep)) {
      setFormStep((prev) => Math.min(prev + 1, totalSteps))
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const prevStep = () => {
    setFormStep((prev) => Math.max(prev - 1, 1))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8 animate-fade-in">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Your quote request has been submitted successfully. We'll get back to you within 24 hours with a detailed
          estimate for your project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" onClick={() => setIsSubmitted(false)} className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Submit Another Request
          </Button>
          <Button asChild>
            <Link href="/portfolio" className="flex items-center gap-2">
              View Our Portfolio
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Progress indicators */}
      <div className="flex items-center justify-between mb-8 px-1">
        {[...Array(totalSteps)].map((_, i) => (
          <div key={i} className="flex items-center">
            <div
              className={cn(
                "h-10 w-10 rounded-full flex items-center justify-center font-medium text-sm transition-colors",
                formStep > i + 1
                  ? "bg-primary text-primary-foreground"
                  : formStep === i + 1
                    ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                    : "bg-muted text-muted-foreground",
              )}
            >
              {formStep > i + 1 ? <CheckCircle className="h-5 w-5" /> : i + 1}
            </div>
            {i < totalSteps - 1 && (
              <div className={cn("h-1 w-10 sm:w-16 mx-1", formStep > i + 1 ? "bg-primary" : "bg-muted")}></div>
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Personal Info */}
      {formStep === 1 && (
        <div className="space-y-6 animate-fade-in">
          <div className="border-b pb-4 mb-6">
            <h3 className="text-xl font-semibold">Tell us about yourself</h3>
            <p className="text-muted-foreground text-sm mt-1">
              We need your contact information to provide you with a quote.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className={cn(errors.firstName && touched.firstName ? "text-red-500" : "")}>
                First Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cn(errors.firstName && touched.firstName ? "border-red-500 focus:ring-red-500" : "")}
                aria-invalid={errors.firstName && touched.firstName ? "true" : "false"}
              />
              {errors.firstName && touched.firstName && (
                <p className="text-sm text-red-500 flex items-center gap-1 animate-fade-in">
                  <AlertCircle className="h-3 w-3" /> {errors.firstName}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className={cn(errors.lastName && touched.lastName ? "text-red-500" : "")}>
                Last Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cn(errors.lastName && touched.lastName ? "border-red-500 focus:ring-red-500" : "")}
                aria-invalid={errors.lastName && touched.lastName ? "true" : "false"}
              />
              {errors.lastName && touched.lastName && (
                <p className="text-sm text-red-500 flex items-center gap-1 animate-fade-in">
                  <AlertCircle className="h-3 w-3" /> {errors.lastName}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email" className={cn(errors.email && touched.email ? "text-red-500" : "")}>
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cn(errors.email && touched.email ? "border-red-500 focus:ring-red-500" : "")}
                aria-invalid={errors.email && touched.email ? "true" : "false"}
              />
              {errors.email && touched.email && (
                <p className="text-sm text-red-500 flex items-center gap-1 animate-fade-in">
                  <AlertCircle className="h-3 w-3" /> {errors.email}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className={cn(errors.phone && touched.phone ? "text-red-500" : "")}>
                Phone <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cn(errors.phone && touched.phone ? "border-red-500 focus:ring-red-500" : "")}
                aria-invalid={errors.phone && touched.phone ? "true" : "false"}
              />
              {errors.phone && touched.phone && (
                <p className="text-sm text-red-500 flex items-center gap-1 animate-fade-in">
                  <AlertCircle className="h-3 w-3" /> {errors.phone}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="leadSource">How did you hear about us?</Label>
            <Select
              name="leadSource"
              value={formData.leadSource}
              onValueChange={(value) => handleSelectChange("leadSource", value)}
            >
              <SelectTrigger id="leadSource">
                <SelectValue placeholder="Select source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Website">Web Search</SelectItem>
                <SelectItem value="Social">Social Media</SelectItem>
                <SelectItem value="Referral">Friend/Family Referral</SelectItem>
                <SelectItem value="HomeAdvisor">HomeAdvisor</SelectItem>
                <SelectItem value="Houzz">Houzz</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="pt-6">
            <Button type="button" className="w-full relative overflow-hidden group" onClick={nextStep}>
              Continue to Project Details
              <span className="absolute right-4 transition-transform duration-300 group-hover:translate-x-1">
                <ChevronRight className="h-4 w-4" />
              </span>
            </Button>
          </div>
        </div>
      )}

      {/* Step 2: Project Info */}
      {formStep === 2 && (
        <div className="space-y-6 animate-fade-in">
          <div className="border-b pb-4 mb-6">
            <h3 className="text-xl font-semibold">Tell us about your project</h3>
            <p className="text-muted-foreground text-sm mt-1">
              Help us understand what you're looking to achieve with your space.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service" className={cn(errors.service && touched.service ? "text-red-500" : "")}>
              Service Interested In <span className="text-red-500">*</span>
            </Label>
            <Select
              name="service"
              value={formData.service}
              onValueChange={(value) => handleSelectChange("service", value)}
            >
              <SelectTrigger
                id="service"
                className={cn(errors.service && touched.service ? "border-red-500 focus:ring-red-500" : "")}
              >
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="accent-walls">Accent Walls</SelectItem>
                <SelectItem value="board-batten">Board & Batten</SelectItem>
                <SelectItem value="roman-plaster">Roman Plaster</SelectItem>
                <SelectItem value="limewash">Limewash Walls</SelectItem>
                <SelectItem value="brick">Brick Interior Walls</SelectItem>
                <SelectItem value="fireplace">Fireplace Build-Outs</SelectItem>
                <SelectItem value="media-wall">TV Media Walls</SelectItem>
                <SelectItem value="ceiling">Decorative Ceilings</SelectItem>
                <SelectItem value="wallpaper">Wallpaper Installation</SelectItem>
                <SelectItem value="other">Other (Please Specify)</SelectItem>
              </SelectContent>
            </Select>
            {errors.service && touched.service && (
              <p className="text-sm text-red-500 flex items-center gap-1 animate-fade-in">
                <AlertCircle className="h-3 w-3" /> {errors.service}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="projectDetails">Project Details</Label>
            <Textarea
              id="projectDetails"
              name="projectDetails"
              placeholder="Please describe your project, including dimensions, current wall condition, and any specific design ideas."
              rows={4}
              value={formData.projectDetails}
              onChange={handleChange}
              className="resize-none"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="timeline" className={cn(errors.timeline && touched.timeline ? "text-red-500" : "")}>
              Project Timeline <span className="text-red-500">*</span>
            </Label>
            <Select
              name="timeline"
              value={formData.timeline}
              onValueChange={(value) => handleSelectChange("timeline", value)}
            >
              <SelectTrigger
                id="timeline"
                className={cn(errors.timeline && touched.timeline ? "border-red-500 focus:ring-red-500" : "")}
              >
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">As Soon As Possible</SelectItem>
                <SelectItem value="1-2-weeks">1-2 Weeks</SelectItem>
                <SelectItem value="1-month">Within a Month</SelectItem>
                <SelectItem value="flexible">Flexible / Not Sure Yet</SelectItem>
              </SelectContent>
            </Select>
            {errors.timeline && touched.timeline && (
              <p className="text-sm text-red-500 flex items-center gap-1 animate-fade-in">
                <AlertCircle className="h-3 w-3" /> {errors.timeline}
              </p>
            )}
          </div>
          <div className="pt-6 flex gap-4">
            <Button
              type="button"
              variant="outline"
              className="w-1/2 flex items-center justify-center gap-2"
              onClick={prevStep}
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </Button>
            <Button type="button" className="w-1/2 relative overflow-hidden group" onClick={nextStep}>
              Continue
              <span className="absolute right-4 transition-transform duration-300 group-hover:translate-x-1">
                <ChevronRight className="h-4 w-4" />
              </span>
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Location & Budget */}
      {formStep === 3 && (
        <div className="space-y-6 animate-fade-in">
          <div className="border-b pb-4 mb-6">
            <h3 className="text-xl font-semibold">Location & Budget</h3>
            <p className="text-muted-foreground text-sm mt-1">
              Help us understand where the project will be located and your budget range.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className={cn(errors.address && touched.address ? "text-red-500" : "")}>
              Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              onBlur={handleBlur}
              className={cn(errors.address && touched.address ? "border-red-500 focus:ring-red-500" : "")}
              aria-invalid={errors.address && touched.address ? "true" : "false"}
            />
            {errors.address && touched.address && (
              <p className="text-sm text-red-500 flex items-center gap-1 animate-fade-in">
                <AlertCircle className="h-3 w-3" /> {errors.address}
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="city" className={cn(errors.city && touched.city ? "text-red-500" : "")}>
                City <span className="text-red-500">*</span>
              </Label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cn(errors.city && touched.city ? "border-red-500 focus:ring-red-500" : "")}
                aria-invalid={errors.city && touched.city ? "true" : "false"}
              />
              {errors.city && touched.city && (
                <p className="text-sm text-red-500 flex items-center gap-1 animate-fade-in">
                  <AlertCircle className="h-3 w-3" /> {errors.city}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Select value={formData.state} onValueChange={(value) => handleSelectChange("state", value)} name="state">
                <SelectTrigger id="state">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DC">Washington DC</SelectItem>
                  <SelectItem value="MD">Maryland</SelectItem>
                  <SelectItem value="VA">Virginia</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="zip" className={cn(errors.zip && touched.zip ? "text-red-500" : "")}>
                ZIP Code <span className="text-red-500">*</span>
              </Label>
              <Input
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cn(errors.zip && touched.zip ? "border-red-500 focus:ring-red-500" : "")}
                aria-invalid={errors.zip && touched.zip ? "true" : "false"}
              />
              {errors.zip && touched.zip && (
                <p className="text-sm text-red-500 flex items-center gap-1 animate-fade-in">
                  <AlertCircle className="h-3 w-3" /> {errors.zip}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="budget" className={cn(errors.budget && touched.budget ? "text-red-500" : "")}>
              Budget Range <span className="text-red-500">*</span>
            </Label>
            <Select
              name="budget"
              value={formData.budget}
              onValueChange={(value) => handleSelectChange("budget", value)}
            >
              <SelectTrigger
                id="budget"
                className={cn(errors.budget && touched.budget ? "border-red-500 focus:ring-red-500" : "")}
              >
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-1000">Under $1,000</SelectItem>
                <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                <SelectItem value="5000-plus">$5,000+</SelectItem>
                <SelectItem value="not-sure">Not Sure / Need Guidance</SelectItem>
              </SelectContent>
            </Select>
            {errors.budget && touched.budget && (
              <p className="text-sm text-red-500 flex items-center gap-1 animate-fade-in">
                <AlertCircle className="h-3 w-3" /> {errors.budget}
              </p>
            )}
          </div>
          <div className="flex items-start space-x-2 pt-2">
            <Checkbox
              id="marketing"
              name="marketing"
              checked={formData.marketing}
              onCheckedChange={(checked) => handleCheckboxChange("marketing", checked === true)}
            />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="marketing"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to receive occasional emails about special offers and design inspiration
              </Label>
            </div>
          </div>
          <div className="pt-6 flex gap-4">
            <Button
              type="button"
              variant="outline"
              className="w-1/2 flex items-center justify-center gap-2"
              onClick={prevStep}
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </Button>
            <Button type="submit" className="w-1/2 relative overflow-hidden group" disabled={isSubmitting}>
              <span
                className={cn(
                  "flex items-center justify-center gap-2 transition-all duration-300",
                  isSubmitting ? "opacity-0" : "opacity-100",
                )}
              >
                Get My Free Quote
              </span>
              {isSubmitting && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="h-5 w-5 animate-spin" />
                </span>
              )}
            </Button>
          </div>
        </div>
      )}

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to our{" "}
        <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-foreground transition-colors">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  )
}
