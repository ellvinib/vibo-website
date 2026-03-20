import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";

  let name: string;
  let email: string;
  let company: string;
  let subject: string;
  let message: string;

  if (contentType.includes("application/json")) {
    const body = await request.json();
    name = body.name;
    email = body.email;
    company = body.company;
    subject = body.subject;
    message = body.message;
  } else {
    const formData = await request.formData();
    name = formData.get("name") as string;
    email = formData.get("email") as string;
    company = (formData.get("company") as string) || "";
    subject = formData.get("subject") as string;
    message = formData.get("message") as string;
  }

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Naam, e-mail, onderwerp en bericht zijn verplicht." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Ongeldig e-mailadres." },
      { status: 400 }
    );
  }

  const notificationEmail = process.env.CONTACT_EMAIL || "info@vibo-it.nl";
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          subject,
          message,
          timestamp: new Date().toISOString(),
          source: "vibo-website",
        }),
      });
    } catch (error) {
      console.error("Webhook delivery failed:", error);
    }
  }

  console.log(
    `[Contact Form] New submission from ${name} <${email}> | Subject: ${subject} | To: ${notificationEmail}`
  );

  return NextResponse.json({
    success: true,
    message: "Bedankt voor uw bericht! Wij nemen zo snel mogelijk contact met u op.",
  });
}
