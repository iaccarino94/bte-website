import { NextResponse } from "next/server";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { sendOfficeEmail, sanitizeForSubject } from "@/lib/email";
import { isValidEmail, optionalPhone, optionalString, requiredString } from "@/lib/validation";
import { HONEYPOT_FIELD } from "@/lib/formOptions";

export async function POST(request: Request) {
  const ip = getClientIp(request);

  if (!checkRateLimit("contact", ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (optionalString(body[HONEYPOT_FIELD], 200).length > 0) {
    return NextResponse.json({ ok: true });
  }

  const turnstileOk = await verifyTurnstileToken(body.turnstileToken, ip);
  if (!turnstileOk) {
    return NextResponse.json(
      { error: "Spam verification failed. Please try again." },
      { status: 400 }
    );
  }

  const name = requiredString(body.name, 150);
  const email = isValidEmail(body.email) ? body.email : null;
  const phone = optionalPhone(body.phone);
  const message = requiredString(body.message, 5000);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please complete all required fields correctly and try again." },
      { status: 400 }
    );
  }

  const subject = `New Contact Form Submission — ${sanitizeForSubject(name)}`;

  const text = [
    "New contact form submission from the website.",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "(none given)"}`,
    "",
    "Message:",
    message,
    "",
    `Submitted from IP: ${ip}`,
  ].join("\n");

  const sent = await sendOfficeEmail({ subject, text, replyTo: email });
  if (!sent) {
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please call our office instead." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
