import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Extract form data
    const {
      firstName,
      lastName,
      email,
      phone,
      leadSource,
      service,
      projectDetails,
      timeline,
      address,
      city,
      state,
      zip,
      budget,
      marketing,
    } = body

    // Create email content
    const emailContent = `
New Quote Request

CONTACT INFORMATION:
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Lead Source: ${leadSource}

PROJECT DETAILS:
Service: ${service}
Timeline: ${timeline}
Project Details: ${projectDetails || "Not provided"}

LOCATION:
Address: ${address}
City: ${city}
State: ${state}
ZIP: ${zip}

BUDGET:
Budget Range: ${budget}

MARKETING:
Opted in for marketing emails: ${marketing ? "Yes" : "No"}

---
Submitted at: ${new Date().toLocaleString()}
    `

    // Send email notification using Resend
    await resend.emails.send({
      from: "onboarding@resend.dev", // Using Resend's default domain
      to: "builddogllc@gmail.com", // Your email address
      subject: `New Quote Request from ${firstName} ${lastName} - ${service}`,
      text: emailContent,
      replyTo: email,
    })

    console.log("Quote request processed and email sent")

    return NextResponse.json({ success: true, message: "Quote request submitted successfully" })
  } catch (error) {
    console.error("Error processing quote request:", error)
    return NextResponse.json({ success: false, message: "Failed to submit quote request" }, { status: 500 })
  }
}
