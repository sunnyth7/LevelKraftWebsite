import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Alle Felder sind erforderlich" },
        { status: 400 }
      );
    }

    // TODO: Implement actual email sending
    // Example: Send email via SendGrid, Resend, or other service
    // await sendEmail({
    //   to: "support@levelkraft.de",
    //   subject: `Kontaktanfrage von ${name}`,
    //   body: `Name: ${name}\nE-Mail: ${email}\nNachricht: ${message}`,
    // });

    console.log("Contact form submission:", { name, email, message });

    return NextResponse.json(
      { success: true, message: "Nachricht erfolgreich gesendet" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten" },
      { status: 500 }
    );
  }
}
