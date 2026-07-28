import { NextResponse } from "next/server";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { sendOfficeEmail, sanitizeForSubject } from "@/lib/email";
import {
  isValidEmail,
  optionalPhone,
  optionalString,
  oneOf,
  requiredPastDate,
  requiredPhone,
  requiredString,
  requiredZip,
} from "@/lib/validation";
import {
  CLASSIFICATION_OPTIONS,
  ETHNICITY_OPTIONS,
  GENDER_OPTIONS,
  HONEYPOT_FIELD,
  RACE_OPTIONS,
  VETERAN_OPTIONS,
} from "@/lib/formOptions";

export async function POST(request: Request) {
  const ip = getClientIp(request);

  if (!checkRateLimit("enroll", ip)) {
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

  // Bots that fill hidden fields are silently accepted without sending mail.
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

  const firstName = requiredString(body.first_name, 100);
  const lastName = requiredString(body.last_name, 100);
  const address = requiredString(body.address, 200);
  const city = requiredString(body.city, 100);
  const state = requiredString(body.state, 50);
  const zip = requiredZip(body.zip);
  const phone = requiredPhone(body.phone);
  const cellPhone = optionalPhone(body.cell_phone);
  const email = isValidEmail(body.email) ? body.email : null;
  const dob = requiredPastDate(body.dob);
  const employerName = optionalString(body.employer_name, 200);
  const ethnicity = oneOf(body.ethnicity, ETHNICITY_OPTIONS);
  const race = oneOf(body.race, RACE_OPTIONS);
  const gender = oneOf(body.gender, GENDER_OPTIONS);
  const isVeteran = oneOf(body.is_veteran, VETERAN_OPTIONS);
  const requestedClassification = oneOf(body.requested_classification, CLASSIFICATION_OPTIONS);

  const missing =
    !firstName ||
    !lastName ||
    !address ||
    !city ||
    !state ||
    !zip ||
    !phone ||
    !email ||
    !dob ||
    !ethnicity ||
    !race ||
    !gender ||
    !isVeteran ||
    !requestedClassification;

  if (missing) {
    return NextResponse.json(
      { error: "Please complete all required fields correctly and try again." },
      { status: 400 }
    );
  }

  const subject = `New Enrollment Application — ${sanitizeForSubject(firstName)} ${sanitizeForSubject(lastName)}`;

  const text = [
    "New enrollment application submitted through the website.",
    "",
    `First Name: ${firstName}`,
    `Last Name: ${lastName}`,
    `Date of Birth: ${dob}`,
    "",
    `Address: ${address}`,
    `City: ${city}`,
    `State: ${state}`,
    `ZIP: ${zip}`,
    "",
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Cell Phone: ${cellPhone || "(none given)"}`,
    "",
    `Employer Name: ${employerName || "(none given)"}`,
    `Requested Classification: ${requestedClassification}`,
    "",
    `Ethnicity: ${ethnicity}`,
    `Race: ${race}`,
    `Gender: ${gender}`,
    `Veteran: ${isVeteran}`,
    "",
    `Submitted from IP: ${ip}`,
  ].join("\n");

  const sent = await sendOfficeEmail({ subject, text, replyTo: email });
  if (!sent) {
    return NextResponse.json(
      { error: "Something went wrong sending your application. Please call our office instead." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
