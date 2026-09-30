"use client";

import { useRef, useState } from "react";
import type { ChangeEvent, DragEvent, FormEvent, ReactNode } from "react";
import { ENQUIRY_SERVICES } from "@/lib/content";
import { SUPPORT_EMAIL } from "@/lib/site";
// import { Kicker } from "./ui";

type Errors = Partial<
  Record<"name" | "company" | "email" | "service" | "phone" | "details" | "attachments", string>
>;

const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20MB per PDF

function isPdfFile(file: File): boolean {
  return file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
}

function validateAttachment(file: File | null): string | undefined {
  if (!file) return undefined;
  if (!isPdfFile(file)) {
    return "Only a PDF file can be attached.";
  }
  if (file.size > MAX_FILE_SIZE) {
    return "The PDF must be 20MB or smaller.";
  }
  return undefined;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

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

  const name = String(data.get("name") || "").trim();
  if (!name) {
    errors.name = "Full name is required.";
  } else if (name.length < 2) {
    errors.name = "Full name must be at least 2 characters.";
  }

  const company = String(data.get("company") || "").trim();
  if (!company) {
    errors.company = "Company name is required.";
  } else if (company.length < 2) {
    errors.company = "Company name must be at least 2 characters.";
  }

  const email = String(data.get("email") || "").trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    errors.email = "Email address is required.";
  } else if (!emailRegex.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  const phone = String(data.get("phone") || "").trim();
  const phoneDigits = phone.replace(/\D/g, "");
  const phoneRegex = /^[+]?[\d\s\-().]{7,25}$/;
  if (!phone) {
    errors.phone = "Phone number is required.";
  } else if (!phoneRegex.test(phone) || phoneDigits.length < 7 || phoneDigits.length > 15) {
    errors.phone = "Please enter a valid phone number (7 to 15 digits).";
  }

  const service = String(data.get("service") || "").trim();
  if (!service) {
    errors.service = "Please select a service.";
  }

  const details = String(data.get("details") || "").trim();
  if (!details) {
    errors.details = "Please describe your project or equipment requirements.";
  } else if (details.length < 10) {
    errors.details = "Please provide more details (minimum 10 characters).";
  }

  const attachmentEntry = data.get("attachments");
  const attachment = attachmentEntry instanceof File && attachmentEntry.size > 0 ? attachmentEntry : null;
  const attachmentError = validateAttachment(attachment);
  if (attachmentError) {
    errors.attachments = attachmentError;
  }

  return errors;
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [service, setService] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [attachment, setAttachment] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFormChange(event: FormEvent<HTMLFormElement>) {
    const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    // "attachments" re-validates itself live in handleAttachmentChange — clearing
    // it here too could wipe out a still-applicable error.
    if (target?.name && target.name !== "attachments" && errors[target.name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [target.name]: undefined }));
    }
  }

  // Keeps the real <input type="file"> in sync so FormData(form) picks up
  // the file added by drag-and-drop, not just one chosen through the dialog.
  function syncInputFile(file: File | null) {
    const input = fileInputRef.current;
    if (!input) return;
    const transfer = new DataTransfer();
    if (file) transfer.items.add(file);
    input.files = transfer.files;
  }

  function setSingleAttachment(file: File) {
    setAttachment(file);
    setErrors((prev) => ({ ...prev, attachments: validateAttachment(file) }));
    syncInputFile(file);
  }

  function handleAttachmentChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0];
    if (file) setSingleAttachment(file);
  }

  function removeAttachment() {
    setAttachment(null);
    setErrors((prev) => ({ ...prev, attachments: undefined }));
    syncInputFile(null);
  }

  function handleDragOver(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  function handleDragEnter(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      setIsDragging(false);
    }
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);

    const dropped = Array.from(event.dataTransfer.files || []);
    const pdf = dropped.find(isPdfFile);

    if (!pdf) {
      if (dropped.length > 0) {
        setErrors((prev) => ({ ...prev, attachments: "Only a PDF file can be attached." }));
      }
      return;
    }

    setSingleAttachment(pdf);
  }

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

    // FormData (not JSON) so the selected PDF files travel with the request.
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: data,
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
          Thank you. A TestWatt engineer will review your enquiry and respond within one
          business day. For urgent matters, contact{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> directly.
        </p>
      </div>
    );
  }

  return (
    <div className="contact-form-wrap">
      <div className="contact-form-wrap__header">
        {/* <Kicker>Enquiry Form</Kicker> */}
        <h2 className="contact-form-wrap__title">Enquiry Form</h2>
      </div>

      <form onSubmit={handleSubmit} onChange={handleFormChange} noValidate>
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
          <FormField label="Phone Number" id="phone" type="tel" required error={errors.phone} />
        </div>

        <FormField label="What do you need?" id="service" required error={errors.service}>
          <select
            id="service"
            name="service"
            required
            value={service}
            onChange={(event) => {
              setService(event.target.value);
              if (errors.service) {
                setErrors((prev) => ({ ...prev, service: undefined }));
              }
            }}
            className={`form-field__select${service ? "" : " form-field__select--placeholder"
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

        <FormField label="Describe your requirement" id="details" required error={errors.details}>
          <textarea
            id="details"
            name="details"
            rows={3}
            required
            aria-describedby={errors.details ? "details-error" : undefined}
            aria-invalid={errors.details ? "true" : undefined}
            placeholder=""
            className={`form-field__textarea${errors.details ? " form-field__input--error" : ""}`}
          />
        </FormField>

        <FormField label="Upload PDF" id="attachments" error={errors.attachments}>
          <div
            className={`form-field__dropzone${isDragging ? " form-field__dropzone--active" : ""}${errors.attachments ? " form-field__dropzone--error" : ""
              }`}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                fileInputRef.current?.click();
              }
            }}
          >
            <input
              ref={fileInputRef}
              id="attachments"
              name="attachments"
              type="file"
              accept="application/pdf,.pdf"
              onChange={handleAttachmentChange}
              onClick={(event) => event.stopPropagation()}
              aria-describedby={errors.attachments ? "attachments-error" : "attachments-hint"}
              aria-invalid={errors.attachments ? "true" : undefined}
              className="form-field__dropzone-input"
            />
            <span className="form-field__dropzone-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
              </svg>
            </span>
            <span className="form-field__dropzone-text">
              <strong>Click to upload</strong> or drag and drop a PDF here
            </span>
            <span id="attachments-hint" className="form-field__hint">
              One PDF file, up to 20MB.
            </span>
          </div>

          {attachment && (
            <ul className="form-field__file-list" aria-label="Selected PDF file">
              <li className="form-field__file-item">
                <span className="form-field__file-name">{attachment.name}</span>
                <span className="form-field__file-size">{formatFileSize(attachment.size)}</span>
                <button
                  type="button"
                  className="form-field__file-remove"
                  onClick={removeAttachment}
                  aria-label={`Remove ${attachment.name}`}
                >
                  &times;
                </button>
              </li>
            </ul>
          )}
        </FormField>

        {submitError && (
          <p className="form-field__error" role="alert">
            {submitError}
          </p>
        )}

        <button type="submit" disabled={sending} className="btn btn-primary btn-lg btn-full">
          {sending ? "Sending..." : "Submit Enquiry"}
        </button>

        <p className="form-consent">
          By submitting this form you consent to TestWatt processing your details to
          respond to your enquiry.
        </p>
      </form>
    </div>
  );
}
