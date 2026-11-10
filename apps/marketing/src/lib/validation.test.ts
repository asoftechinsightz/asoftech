import { contactFormSchema } from "@asoftech/validation";
import { describe, expect, it } from "vitest";

describe("contactFormSchema", () => {
  it("accepts a valid enquiry payload", () => {
    const result = contactFormSchema.safeParse({
      name: "Priya Sharma",
      email: "priya@example.com",
      company: "Example Corp",
      phone: "",
      interest: "growthedge360",
      message:
        "We want to discuss GrowthEdge360 for our SMB sales team and current CRM workflow.",
      consent: true,
    });
    expect(result.success).toBe(true);
  });

  it("rejects CareerEdge360-unrelated missing consent", () => {
    const result = contactFormSchema.safeParse({
      name: "Alex",
      email: "alex@example.com",
      interest: "general",
      message: "Too short",
      consent: false,
    });
    expect(result.success).toBe(false);
  });
});
