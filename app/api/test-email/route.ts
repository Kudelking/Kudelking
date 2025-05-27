import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET() {
  try {
    console.log("Testing Resend API...")

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["builddogllc@gmail.com"],
      subject: "Test Email from Accent Walls Pro",
      html: `
        <h2>Test Email</h2>
        <p>This is a test email to verify that Resend is working correctly.</p>
        <p>If you receive this email, the integration is successful!</p>
        <hr>
        <p><small>Sent at: ${new Date().toLocaleString()}</small></p>
      `,
    })

    if (error) {
      console.error("Resend test error:", error)
      return NextResponse.json({ success: false, error }, { status: 500 })
    }

    console.log("Test email sent successfully:", data)
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error testing Resend:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
