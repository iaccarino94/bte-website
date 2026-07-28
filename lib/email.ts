import { Resend } from "resend";

export const OFFICE_EMAIL = "office@bteducationfund.org";

// TEMP: forced to Resend's sandbox sending address to isolate the
// mail.bteducationfund.org delivery issue from the form/CAPTCHA/backend logic.
// Revert to "BTE Website <noreply@mail.bteducationfund.org>" once resolved.
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "BTE Website <onboarding@resend.dev>";

let client: Resend | null = null;

function getClient(): Resend {
  if (!client) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not set");
    }
    client = new Resend(apiKey);
  }
  return client;
}

export async function sendOfficeEmail(options: {
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<boolean> {
  try {
    const { error } = await getClient().emails.send({
      from: FROM_EMAIL,
      to: OFFICE_EMAIL,
      subject: options.subject,
      text: options.text,
      replyTo: options.replyTo,
    });
    if (error) {
      console.error("Resend returned an error", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Failed to send email via Resend", err);
    return false;
  }
}

/** Strips control characters so user input can't inject extra headers/lines into a subject. */
export function sanitizeForSubject(value: string, maxLength = 120): string {
  return value.replace(/[\r\n\t]/g, " ").trim().slice(0, maxLength);
}
