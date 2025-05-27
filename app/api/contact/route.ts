import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Extract form data
    const { name, email, phone, serviceType, message, preferredContact } = body

    // Create email content
    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Service Interest: ${serviceType || "Not specified"}
Preferred Contact: ${preferredContact}

Message:
${message}

---
Submitted at: ${new Date().toLocaleString()}
    `

    // Send email notification using Resend
    await resend.emails.send({
      from: "onboarding@resend.dev", // Using Resend's default domain
      to: "builddogllc@gmail.com", // Your email address
      subject: `New Contact Form Submission from ${name}`,
      text: emailContent,
      replyTo: email,
    })

    console.log("Contact form submission processed and email sent")

    return NextResponse.json({ success: true, message: "Form submitted successfully" })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ success: false, message: "Failed to submit form" }, { status: 500 })
  }
}
