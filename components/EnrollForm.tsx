"use client";

import { useState } from "react";
import TurnstileWidget from "./TurnstileWidget";
import {
  CLASSIFICATION_OPTIONS,
  ETHNICITY_OPTIONS,
  GENDER_OPTIONS,
  HONEYPOT_FIELD,
  RACE_OPTIONS,
  VETERAN_OPTIONS,
} from "@/lib/formOptions";

type Status = "idle" | "submitting" | "success" | "error";

const initialForm = {
  first_name: "",
  last_name: "",
  dob: "",
  email: "",
  phone: "",
  cell_phone: "",
  address: "",
  city: "",
  state: "NY",
  zip: "",
  employer_name: "",
  ethnicity: "",
  race: "",
  gender: "",
  is_veteran: "",
  requested_classification: "",
  [HONEYPOT_FIELD]: "",
};

export default function EnrollForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/enroll", {
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
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setErrorMessage("Something went wrong. Please check your connection and try again.");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full border border-gray-300 rounded px-4 py-2.5 text-charcoal text-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy";

  const labelClass = "block text-sm font-medium text-charcoal mb-1";

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Application Received</h3>
        <p className="text-green-700 leading-relaxed mb-2">
          Thank you for submitting your enrollment application. Our staff will review
          your information and contact you shortly to confirm your placement.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-green-800 underline hover:no-underline"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative space-y-8">
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

      {/* Personal Information */}
      <fieldset>
        <legend className="text-lg font-bold text-navy mb-4 pb-2 border-b border-gray-200 w-full">
          Personal Information
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="first_name" className={labelClass}>
              First Name <span className="text-crimson">*</span>
            </label>
            <input id="first_name" name="first_name" type="text" required maxLength={100} value={form.first_name} onChange={handleChange} placeholder="Jane" className={inputClass} />
          </div>
          <div>
            <label htmlFor="last_name" className={labelClass}>
              Last Name <span className="text-crimson">*</span>
            </label>
            <input id="last_name" name="last_name" type="text" required maxLength={100} value={form.last_name} onChange={handleChange} placeholder="Smith" className={inputClass} />
          </div>
          <div>
            <label htmlFor="dob" className={labelClass}>
              Date of Birth <span className="text-crimson">*</span>
            </label>
            <input id="dob" name="dob" type="date" required max={new Date().toISOString().slice(0, 10)} value={form.dob} onChange={handleChange} className={inputClass} />
          </div>
        </div>
      </fieldset>

      {/* Contact Information */}
      <fieldset>
        <legend className="text-lg font-bold text-navy mb-4 pb-2 border-b border-gray-200 w-full">
          Contact Information
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className={labelClass}>
              Email Address <span className="text-crimson">*</span>
            </label>
            <input id="email" name="email" type="email" required maxLength={254} value={form.email} onChange={handleChange} placeholder="jane@example.com" className={inputClass} />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone Number <span className="text-crimson">*</span>
            </label>
            <input id="phone" name="phone" type="tel" required maxLength={20} value={form.phone} onChange={handleChange} placeholder="(516) 000-0000" className={inputClass} />
          </div>
          <div>
            <label htmlFor="cell_phone" className={labelClass}>
              Cell Phone
            </label>
            <input id="cell_phone" name="cell_phone" type="tel" maxLength={20} value={form.cell_phone} onChange={handleChange} placeholder="(516) 000-0000" className={inputClass} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="address" className={labelClass}>
              Street Address <span className="text-crimson">*</span>
            </label>
            <input id="address" name="address" type="text" required maxLength={200} value={form.address} onChange={handleChange} placeholder="123 Main St" className={inputClass} />
          </div>
          <div>
            <label htmlFor="city" className={labelClass}>
              City <span className="text-crimson">*</span>
            </label>
            <input id="city" name="city" type="text" required maxLength={100} value={form.city} onChange={handleChange} className={inputClass} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="state" className={labelClass}>
                State <span className="text-crimson">*</span>
              </label>
              <input id="state" name="state" type="text" required maxLength={50} value={form.state} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label htmlFor="zip" className={labelClass}>
                ZIP <span className="text-crimson">*</span>
              </label>
              <input id="zip" name="zip" type="text" required maxLength={10} value={form.zip} onChange={handleChange} placeholder="11000" className={inputClass} />
            </div>
          </div>
        </div>
      </fieldset>

      {/* Employment */}
      <fieldset>
        <legend className="text-lg font-bold text-navy mb-4 pb-2 border-b border-gray-200 w-full">
          Employment
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="employer_name" className={labelClass}>
              Employer Name
            </label>
            <input id="employer_name" name="employer_name" type="text" maxLength={200} value={form.employer_name} onChange={handleChange} placeholder="ABC Electrical Co. (leave blank if none yet)" className={inputClass} />
          </div>
          <div>
            <label htmlFor="requested_classification" className={labelClass}>
              Requested Classification <span className="text-crimson">*</span>
            </label>
            <select id="requested_classification" name="requested_classification" required value={form.requested_classification} onChange={handleChange} className={inputClass}>
              <option value="">Select one</option>
              {CLASSIFICATION_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>
      </fieldset>

      {/* EEO Information */}
      <fieldset>
        <legend className="text-lg font-bold text-navy mb-4 pb-2 border-b border-gray-200 w-full">
          Demographic Information
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="ethnicity" className={labelClass}>
              Ethnicity <span className="text-crimson">*</span>
            </label>
            <select id="ethnicity" name="ethnicity" required value={form.ethnicity} onChange={handleChange} className={inputClass}>
              <option value="">Select one</option>
              {ETHNICITY_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="race" className={labelClass}>
              Race <span className="text-crimson">*</span>
            </label>
            <select id="race" name="race" required value={form.race} onChange={handleChange} className={inputClass}>
              <option value="">Select one</option>
              {RACE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="gender" className={labelClass}>
              Gender <span className="text-crimson">*</span>
            </label>
            <select id="gender" name="gender" required value={form.gender} onChange={handleChange} className={inputClass}>
              <option value="">Select one</option>
              {GENDER_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="is_veteran" className={labelClass}>
              Veteran Status <span className="text-crimson">*</span>
            </label>
            <select id="is_veteran" name="is_veteran" required value={form.is_veteran} onChange={handleChange} className={inputClass}>
              <option value="">Select one</option>
              {VETERAN_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>
      </fieldset>

      <div className="bg-offwhite rounded-lg p-4 text-xs text-charcoal leading-relaxed">
        By submitting this form, you consent to being contacted by BTE Fund staff regarding
        your enrollment application. Your information will not be shared with third parties.
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
        className="w-full sm:w-auto bg-gold text-navy font-bold px-10 py-4 rounded text-base hover:bg-gold-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Submitting…" : "Submit Enrollment Application"}
      </button>
    </form>
  );
}
