import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(120, "Name is too long"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid work email")
    .max(160, "Email is too long"),
  company: z
    .string()
    .trim()
    .max(160, "Company name is too long")
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .trim()
    .max(40, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  interest: z.enum(
    [
      "general",
      "growthedge360",
      "careeredge360",
      "cyberedge360",
      "opsedge360",
      "services",
      "careers",
      "partnership",
    ],
    { required_error: "Please select a topic" },
  ),
  message: z
    .string()
    .trim()
    .min(20, "Please share a bit more detail (at least 20 characters)")
    .max(4000, "Message is too long"),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "Please confirm we may contact you about this enquiry",
    }),
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const interestOptions: { value: ContactFormValues["interest"]; label: string }[] = [
  { value: "general", label: "General enquiry" },
  { value: "growthedge360", label: "GrowthEdge360" },
  { value: "careeredge360", label: "CareerEdge360" },
  { value: "cyberedge360", label: "CyberEdge360" },
  { value: "opsedge360", label: "OpsEdge360" },
  { value: "services", label: "Services / consulting" },
  { value: "careers", label: "Careers" },
  { value: "partnership", label: "Partnership" },
];
