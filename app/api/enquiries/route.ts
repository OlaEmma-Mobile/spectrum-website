import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

type EnquiryPayload = {
  formType?: string;
  page?: string;
  fields?: Record<string, string>;
  tracking?: Record<string, string>;
};

const ENQUIRY_FILE = path.join(process.cwd(), "data", "enquiries.ndjson");

async function persistEnquiry(payload: EnquiryPayload) {
  await mkdir(path.dirname(ENQUIRY_FILE), { recursive: true });
  const record = {
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
    ...payload,
  };
  await appendFile(ENQUIRY_FILE, `${JSON.stringify(record)}\n`, "utf8");
  return record;
}

async function sendNotificationEmail(
  record: Awaited<ReturnType<typeof persistEnquiry>>
) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const toEmail = process.env.ENQUIRY_TO_EMAIL ?? "info@spectrumpservices.co.uk";
  const fromEmail =
    process.env.ENQUIRY_FROM_EMAIL ?? "Spectrum Enquiries <onboarding@resend.dev>";

  const fieldLines = Object.entries(record.fields ?? {})
    .map(([key, value]) => `<li><strong>${key}</strong>: ${value}</li>`)
    .join("");
  const trackingLines = Object.entries(record.tracking ?? {})
    .map(([key, value]) => `<li><strong>${key}</strong>: ${value}</li>`)
    .join("");

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `New ${record.formType ?? "website"} enquiry`,
      html: `
        <h2>New enquiry received</h2>
        <p><strong>ID:</strong> ${record.id}</p>
        <p><strong>Page:</strong> ${record.page ?? "Unknown"}</p>
        <p><strong>Submitted:</strong> ${record.submittedAt}</p>
        <h3>Form fields</h3>
        <ul>${fieldLines || "<li>No fields submitted</li>"}</ul>
        <h3>Attribution</h3>
        <ul>${trackingLines || "<li>No attribution data</li>"}</ul>
      `,
    }),
  });
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as EnquiryPayload;
    const fields = payload.fields ?? {};
    const hasAnyUsefulValue = Object.values(fields).some(
      (value) => value.trim().length > 0
    );

    if (!hasAnyUsefulValue) {
      return NextResponse.json(
        { error: "Please complete at least one field before submitting." },
        { status: 400 }
      );
    }

    const record = await persistEnquiry(payload);
    await sendNotificationEmail(record);

    return NextResponse.json({ ok: true, id: record.id });
  } catch {
    return NextResponse.json(
      { error: "Unable to save enquiry right now. Please try again." },
      { status: 500 }
    );
  }
}
