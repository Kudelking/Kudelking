import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    console.log("Quote form API route called")

    const body = await request.json()
    console.log("Quote data received:", {
      firstName: body.firstName,
      lastName: body.lastName,
      service: body.service,
      email: body.email ? "***@***.***" : "none",
    })

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

    // Validate required fields
    if (!firstName || !lastName || !email || !service || !timeline || !address || !city || !zip || !budget) {
      console.log("Missing required fields in quote form")
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    console.log("Attempting to send quote email via Resend...")

    // Send email notification using Resend
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["builddogllc@gmail.com"],
      subject: `New Quote Request from ${firstName} ${lastName} - ${service}`,
      html: `
        <h2>New Quote Request</h2>
        
        <h3>Contact Information:</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Lead Source:</strong> ${leadSource}</p>
        
        <h3>Project Details:</h3>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Project Details:</strong> ${projectDetails || "Not provided"}</p>
        
        <h3>Location:</h3>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>ZIP:</strong> ${zip}</p>
        
        <h3>Budget:</h3>
        <p><strong>Budget Range:</strong> ${budget}</p>
        
        <h3>Marketing:</h3>
        <p><strong>Opted in for marketing emails:</strong> ${marketing ? "Yes" : "No"}</p>
        
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `,
      replyTo: email,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
    }

    console.log("Quote email sent successfully:", data)
    return NextResponse.json({ success: true, message: "Quote request submitted successfully", emailId: data?.id })
  } catch (error) {
    console.error("Error processing quote request:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit quote request",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
