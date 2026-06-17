"use client";

import { useState } from "react";

type Status = "idle" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire to backend in a later phase
    console.log("Contact form submission:", form);
    setStatus("success");
    setForm({ name: "", email: "", phone: "", message: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full border border-gray-300 rounded px-4 py-2.5 text-charcoal text-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
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
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className="w-full border border-gray-300 rounded px-4 py-2.5 text-charcoal text-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
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
          value={form.phone}
          onChange={handleChange}
          placeholder="(516) 000-0000"
          className="w-full border border-gray-300 rounded px-4 py-2.5 text-charcoal text-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
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
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          className="w-full border border-gray-300 rounded px-4 py-2.5 text-charcoal text-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy resize-y"
        />
      </div>

      {status === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded px-4 py-3 text-sm">
          Thank you for reaching out! We&apos;ll be in touch shortly.
          <br />
          <span className="text-green-600 text-xs">(Note: Form submission is not yet connected to a backend. This is a placeholder confirmation.)</span>
        </div>
      )}

      <button
        type="submit"
        className="w-full sm:w-auto bg-navy text-white font-semibold px-8 py-3 rounded hover:bg-navy-dark transition-colors text-sm"
      >
        Send Message
      </button>
    </form>
  );
}
