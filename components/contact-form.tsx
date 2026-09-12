"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { ENQUIRY_SERVICES } from "@/lib/content";
import { SUPPORT_EMAIL } from "@/lib/site";
import { Kicker } from "./ui";

type Errors = Partial<Record<"name" | "company" | "email" | "service", string>>;

function FormField({
  label,
  id,
  type = "text",
  required = false,
  error,
  children,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  error?: string;
  children?: ReactNode;
}) {
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-field__label">
        {label}
        {required && (
          <span className="form-field__required" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children ?? (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          className={`form-field__input${error ? " form-field__input--error" : ""}`}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={error ? "true" : undefined}
        />
      )}
      {error && (
        <span id={`${id}-error`} className="form-field__error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

function validate(form: HTMLFormElement): Errors {
  const data = new FormData(form);
  const errors: Errors = {};

  if (!String(data.get("name")).trim()) errors.name = "Full name is required.";
  if (!String(data.get("company")).trim()) errors.company = "Company is required.";

  const email = String(data.get("email")).trim();
  if (!email) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!String(data.get("service"))) errors.service = "Please select a service.";

  return errors;
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [service, setService] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    const found = validate(form);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }

    setErrors({});
    setSending(true);
    setSubmitError("");

    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone") || "",
          service: data.get("service"),
          details: data.get("details") || "",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "Failed to submit enquiry. Please try again.");
      }

      setSent(true);
    } catch (error) {
      const err = error as { message?: string };
      console.error("Submission error:", error);
      setSubmitError(err?.message || "Failed to send enquiry. Please try again later.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="form-success">
        <div className="form-success__icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 13l4 4L19 7"
              stroke="#fff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="form-success__title">Enquiry Received</h3>
        <p className="form-success__body">
          Thank you. A Test Watt engineer will review your enquiry and respond within one
          business day. For urgent matters, contact{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> directly.
        </p>
      </div>
    );
  }

  return (
    <div className="contact-form-wrap">
      <div className="contact-form-wrap__header">
        <Kicker>Enquiry Form</Kicker>
        <h2 className="contact-form-wrap__title">Send an Enquiry</h2>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <FormField label="Full Name" id="name" required error={errors.name} />
          <FormField label="Company" id="company" required error={errors.company} />
        </div>

        <div className="form-row">
          <FormField
            label="Email Address"
            id="email"
            type="email"
            required
            error={errors.email}
          />
          <FormField label="Phone Number" id="phone" type="tel" />
        </div>

        <FormField label="What do you need?" id="service" required error={errors.service}>
          <select
            id="service"
            name="service"
            required
            value={service}
            onChange={(event) => setService(event.target.value)}
            className={`form-field__select${
              service ? "" : " form-field__select--placeholder"
            }${errors.service ? " form-field__input--error" : ""}`}
            aria-describedby={errors.service ? "service-error" : undefined}
            aria-invalid={errors.service ? "true" : undefined}
          >
            <option value="" disabled>
              Select a service…
            </option>
            {ENQUIRY_SERVICES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="Details" id="details">
          <textarea
            id="details"
            name="details"
            rows={6}
            placeholder="Describe your equipment (make, model, rating), site location, and what you need. The more context you provide, the more specific our proposal can be."
            className="form-field__textarea"
          />
        </FormField>

        {submitError && (
          <p className="form-field__error" role="alert">
            {submitError}
          </p>
        )}

        <button type="submit" disabled={sending} className="btn btn-primary btn-lg btn-full">
          {sending ? "Sending..." : "Send Enquiry"}
        </button>

        <p className="form-consent">
          By submitting this form you consent to Test Watt processing your details to
          respond to your enquiry.
        </p>
      </form>
    </div>
  );
}
