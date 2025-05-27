import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    console.log("Quote form API route called")

    const body = await request.json()
    console.log("Quote data received:", {
      firstName: body.firstName,
      lastName: body.lastName,
      service: body.service,
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

    console.log("Attempting to send quote email via Web3Forms...")

    // Send email using Web3Forms
    const web3formsResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "bec21d86-d2e6-4b7e-9cf4-bdeb6ae2bf54",
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        lead_source: leadSource,
        service: service,
        project_details: projectDetails || "Not provided",
        timeline: timeline,
        address: address,
        city: city,
        state: state,
        zip: zip,
        budget: budget,
        marketing_consent: marketing ? "Yes" : "No",
        subject: `New Quote Request from ${firstName} ${lastName} - ${service}`,
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
      console.log("Quote email sent successfully via Web3Forms:", result)
      return NextResponse.json({ success: true, message: "Quote request submitted successfully" })
    } else {
      console.error("Web3Forms error:", result)
      return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
    }
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
