"use client";

import { useState } from "react";
import TurnstileWidget from "./TurnstileWidget";
import { HONEYPOT_FIELD } from "@/lib/formOptions";

type Status = "idle" | "submitting" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
  [HONEYPOT_FIELD]: "",
};

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState(initialForm);
  const [turnstileToken, setTurnstileToken] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, turnstileToken }),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(initialForm);
      setTurnstileToken("");
    } catch {
      setErrorMessage("Something went wrong. Please check your connection and try again.");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full border border-gray-300 rounded px-4 py-2.5 text-charcoal text-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy";

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 rounded px-4 py-3 text-sm">
        Thank you for reaching out! We&apos;ll be in touch shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative space-y-5">
      {/* Honeypot — hidden from real users, left off-screen rather than display:none */}
      <div className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
        <label htmlFor={HONEYPOT_FIELD}>Leave this field blank</label>
        <input
          id={HONEYPOT_FIELD}
          name={HONEYPOT_FIELD}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form[HONEYPOT_FIELD]}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
            Full Name <span className="text-crimson">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={150}
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
            Email Address <span className="text-crimson">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          maxLength={20}
          value={form.phone}
          onChange={handleChange}
          placeholder="(516) 000-0000"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">
          Message <span className="text-crimson">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          className={`${inputClass} resize-y`}
        />
      </div>

      <TurnstileWidget onToken={setTurnstileToken} />

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded px-4 py-3 text-sm">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting" || !turnstileToken}
        className="w-full sm:w-auto bg-navy text-white font-semibold px-8 py-3 rounded hover:bg-navy-dark transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
