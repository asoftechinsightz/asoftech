"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  interestOptions,
  type ContactFormValues,
} from "@asoftech/validation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { cx } from "@/lib/utils";

const fieldClass =
  "mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 text-sm text-ink shadow-sm outline-none transition focus:border-electric focus:ring-2 focus:ring-electric/20";

export function ContactForm({
  defaultInterest = "general",
}: {
  defaultInterest?: ContactFormValues["interest"];
}) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      interest: defaultInterest,
      message: "",
      consent: undefined,
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    setServerMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) {
        throw new Error(data.message || "Unable to submit enquiry");
      }
      setStatus("success");
      setServerMessage(
        data.message ||
          "Thank you. Your enquiry has been received and our team will follow up.",
      );
      reset({
        name: "",
        email: "",
        company: "",
        phone: "",
        interest: defaultInterest,
        message: "",
        consent: undefined,
      });
    } catch (error) {
      setStatus("error");
      setServerMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or email us directly.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
      aria-describedby={status !== "idle" ? "form-status" : undefined}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-navy">
            Full name
          </label>
          <input
            id="name"
            autoComplete="name"
            className={fieldClass}
            {...register("name")}
          />
          {errors.name ? (
            <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-navy">
            Work email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            {...register("email")}
          />
          {errors.email ? (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="text-sm font-medium text-navy">
            Company <span className="font-normal text-slate-brand">(optional)</span>
          </label>
          <input
            id="company"
            autoComplete="organization"
            className={fieldClass}
            {...register("company")}
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-navy">
            Phone <span className="font-normal text-slate-brand">(optional)</span>
          </label>
          <input
            id="phone"
            autoComplete="tel"
            className={fieldClass}
            {...register("phone")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="text-sm font-medium text-navy">
          I am interested in
        </label>
        <select id="interest" className={fieldClass} {...register("interest")}>
          {interestOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.interest ? (
          <p className="mt-1 text-xs text-red-600">{errors.interest.message}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-navy">
          How can we help?
        </label>
        <textarea
          id="message"
          rows={5}
          className={cx(fieldClass, "resize-y")}
          {...register("message")}
        />
        {errors.message ? (
          <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
        ) : null}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-navy/30 text-electric focus:ring-electric"
          {...register("consent")}
        />
        <label htmlFor="consent" className="text-sm text-slate-brand">
          I agree that AsoftechInsightz may contact me about this enquiry. See
          our{" "}
          <a href="/privacy-policy" className="text-electric underline-offset-2 hover:underline">
            Privacy Policy
          </a>
          .
        </label>
      </div>
      {errors.consent ? (
        <p className="text-xs text-red-600">{errors.consent.message}</p>
      ) : null}

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending…" : "Send enquiry"}
      </Button>

      {status !== "idle" ? (
        <p
          id="form-status"
          role="status"
          className={cx(
            "text-sm",
            status === "success" ? "text-emerald-700" : "text-red-600",
          )}
        >
          {serverMessage}
        </p>
      ) : null}
    </form>
  );
}
