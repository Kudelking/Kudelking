import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    console.log("Contact form API route called")

    const body = await request.json()
    console.log("Form data received:", { ...body, email: body.email ? "***@***.***" : "none" })

    // Extract form data
    const { name, email, phone, serviceType, message, preferredContact } = body

    // Validate required fields
    if (!name || !email || !message) {
      console.log("Missing required fields")
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    console.log("Attempting to send email via Resend...")

    // Send email notification using Resend
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["builddogllc@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service Interest:</strong> ${serviceType || "Not specified"}</p>
        <p><strong>Preferred Contact:</strong> ${preferredContact}</p>
        <h3>Message:</h3>
        <p>${message}</p>
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `,
      replyTo: email,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
    }

    console.log("Email sent successfully:", data)
    return NextResponse.json({ success: true, message: "Form submitted successfully", emailId: data?.id })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit form",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
