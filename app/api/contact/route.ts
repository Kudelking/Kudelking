import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    console.log("Contact form API route called")

    const body = await request.json()
    console.log("Form data received:", { name: body.name, email: body.email ? "***@***.***" : "none" })

    // Extract form data
    const { name, email, phone, serviceType, message, preferredContact } = body

    // Validate required fields
    if (!name || !email || !message) {
      console.log("Missing required fields")
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    console.log("Attempting to send email via Web3Forms...")

    // Send email using Web3Forms
    const web3formsResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "bec21d86-d2e6-4b7e-9cf4-bdeb6ae2bf54",
        name: name,
        email: email,
        phone: phone || "Not provided",
        service_interest: serviceType || "Not specified",
        preferred_contact: preferredContact,
        message: message,
        subject: `New Contact Form Submission from ${name}`,
        from_name: "Accent Walls Pro Website",
        to: "builddogllc@gmail.com",
        replyto: email,
        // Additional Web3Forms options
        botcheck: false,
        redirect: false,
      }),
    })

    const result = await web3formsResponse.json()

    if (web3formsResponse.ok && result.success) {
      console.log("Email sent successfully via Web3Forms:", result)
      return NextResponse.json({ success: true, message: "Form submitted successfully" })
    } else {
      console.error("Web3Forms error:", result)
      return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
    }
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
