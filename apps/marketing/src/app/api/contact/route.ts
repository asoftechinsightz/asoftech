import { contactFormSchema } from "@asoftech/validation";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON payload" },
      { status: 400 },
    );
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "Validation failed",
        issues: parsed.error.flatten(),
      },
      { status: 400 },
    );
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "asoftech-marketing-contact",
          submittedAt: new Date().toISOString(),
          ...parsed.data,
        }),
      });
      if (!response.ok) {
        console.error("Contact webhook failed", await response.text());
        return NextResponse.json(
          {
            message:
              "We could not deliver your enquiry right now. Please email contact@asoftechinsightz.com.",
          },
          { status: 502 },
        );
      }
    } catch (error) {
      console.error("Contact webhook error", error);
      return NextResponse.json(
        {
          message:
            "We could not deliver your enquiry right now. Please email contact@asoftechinsightz.com.",
        },
        { status: 502 },
      );
    }
  } else {
    console.info("[contact-form]", {
      submittedAt: new Date().toISOString(),
      ...parsed.data,
    });
  }

  return NextResponse.json({
    message:
      "Thank you. Your enquiry has been received. Our team will follow up shortly.",
  });
}
