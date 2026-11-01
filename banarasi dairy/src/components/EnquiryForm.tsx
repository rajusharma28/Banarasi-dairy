import { useId, useState } from "react";
import { BUSINESS, waLink } from "../data/business";
import { CheckIcon, WhatsAppIcon } from "./Icons";
import { cn } from "../utils/cn";

type Fields = {
  name: string;
  phone: string;
  orderEnquiry: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { name: "", phone: "", orderEnquiry: "", message: "" };

const ENQUIRY_OPTIONS = [
  "Fresh sweets enquiry",
  "Bulk order enquiry",
  "Gift & festival packing",
  "Special sweet order",
  "Home delivery enquiry",
  "Other enquiry",
];

function validate(values: Fields): Errors {
  const errors: Errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  const digits = values.phone.replace(/\D/g, "");
  if (!digits) {
    errors.phone = "Please enter your phone number.";
  } else if (digits.length < 10 || digits.length > 12) {
    errors.phone = "Please enter a valid 10-digit phone number.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Please tell us a little more about your enquiry (at least 10 characters).";
  }

  return errors;
}

/**
 * Customer enquiry form with client-side validation.
 * There is no backend on this site, so a validated enquiry is
 * handed straight to WhatsApp — the channel the shop uses to
 * take orders. No false "we have received your message" claim.
 */
export function EnquiryForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState<Fields | null>(null);
  const formId = useId();

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSubmitted(values);
    }
  };

  const composedMessage = submitted
    ? `Hello Banarasi Dudh Dairy, I would like to place an enquiry.

Name: ${submitted.name}
Phone: ${submitted.phone}
Enquiry type: ${submitted.orderEnquiry || "General enquiry"}

Message: ${submitted.message}`
    : "";

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-champagne bg-white p-7 shadow-soft sm:p-9"
        role="status"
        aria-live="polite"
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-maroon text-champagne">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-2xl text-maroon">Thank you, {submitted.name.split(" ")[0]}!</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          Your enquiry details are ready. Send them to the shop on WhatsApp and our team will get back to
          you with availability, packing and delivery details.
        </p>

        <div className="mt-6 rounded-xl border border-champagne bg-cream p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Your enquiry</p>
          <pre className="mt-3 whitespace-pre-wrap font-body text-sm leading-relaxed text-ink">
            {composedMessage}
          </pre>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={waLink(BUSINESS.contacts[0].phone, composedMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-maroon px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-burgundy"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Send on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmitted(null);
              setValues(EMPTY);
            }}
            className="inline-flex items-center justify-center rounded-full border border-maroon/25 px-6 py-3.5 text-sm font-semibold text-maroon transition-colors hover:bg-maroon hover:text-cream"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-champagne bg-white p-6 shadow-soft sm:p-8"
    >
      <h3 className="text-xl text-maroon">Send an Enquiry</h3>
      <p className="mt-2 text-sm text-ink-soft">
        Fill in the form below and we will connect with you on WhatsApp to confirm your order.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field
          id={`${formId}-name`}
          label="Name"
          error={errors.name}
          required
          value={values.name}
          onChange={update("name")}
          placeholder="Your name"
          autoComplete="name"
        />
        <Field
          id={`${formId}-phone`}
          label="Phone Number"
          error={errors.phone}
          required
          value={values.phone}
          onChange={update("phone")}
          placeholder="10-digit mobile number"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
        />
        <div className="sm:col-span-2">
          <label
            htmlFor={`${formId}-order`}
            className="block text-sm font-medium text-ink"
          >
            Order Enquiry
          </label>
          <select
            id={`${formId}-order`}
            value={values.orderEnquiry}
            onChange={update("orderEnquiry")}
            className="mt-2 w-full rounded-xl border border-champagne bg-cream/60 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold focus:bg-white"
          >
            <option value="">Select an enquiry type (optional)</option>
            {ENQUIRY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${formId}-message`} className="block text-sm font-medium text-ink">
            Message <span className="text-maroon">*</span>
          </label>
          <textarea
            id={`${formId}-message`}
            value={values.message}
            onChange={update("message")}
            rows={4}
            placeholder="Tell us which sweets you need, the quantity and the date."
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? `${formId}-message-error` : undefined}
            className={cn(
              "mt-2 w-full resize-y rounded-xl border bg-cream/60 px-4 py-3 text-sm text-ink outline-none transition-colors focus:bg-white",
              errors.message ? "border-maroon focus:border-maroon" : "border-champagne focus:border-gold",
            )}
          />
          {errors.message ? (
            <p id={`${formId}-message-error`} className="mt-2 text-xs font-medium text-maroon">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-maroon px-7 py-4 text-sm font-semibold text-cream shadow-soft transition-all duration-300 hover:bg-burgundy hover:shadow-lift sm:w-auto"
      >
        <WhatsAppIcon className="h-4 w-4" />
        Submit Enquiry
      </button>

      <p className="mt-4 text-xs leading-relaxed text-ink-soft">
        This form does not process online orders or payments. Your enquiry is sent to the shop on WhatsApp
        for confirmation.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  inputMode,
  autoComplete,
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  inputMode?: "numeric" | "text" | "tel";
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label} {required ? <span className="text-maroon">*</span> : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        inputMode={inputMode}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "mt-2 w-full rounded-xl border bg-cream/60 px-4 py-3 text-sm text-ink outline-none transition-colors focus:bg-white",
          error ? "border-maroon focus:border-maroon" : "border-champagne focus:border-gold",
        )}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-xs font-medium text-maroon">
          {error}
        </p>
      ) : null}
    </div>
  );
}
