"use client";

import { useState } from "react";

type Status = "idle" | "success";

const initialForm = {
  firstName: "",
  lastName: "",
  dob: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "NY",
  zip: "",
  employed: "",
  contractorName: "",
  bookNumber: "",
  programYear: "",
  hearAbout: "",
  comments: "",
};

export default function EnrollForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire to backend in a later phase
    console.log("Enrollment form submission:", form);
    setStatus("success");
    setForm(initialForm);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        <p className="text-green-600 text-sm">
          (Note: Form submission is not yet connected to a backend. This is a placeholder
          confirmation. Your data was logged to the browser console only.)
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
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Personal Information */}
      <fieldset>
        <legend className="text-lg font-bold text-navy mb-4 pb-2 border-b border-gray-200 w-full">
          Personal Information
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="firstName" className={labelClass}>
              First Name <span className="text-crimson">*</span>
            </label>
            <input id="firstName" name="firstName" type="text" required value={form.firstName} onChange={handleChange} placeholder="Jane" className={inputClass} />
          </div>
          <div>
            <label htmlFor="lastName" className={labelClass}>
              Last Name <span className="text-crimson">*</span>
            </label>
            <input id="lastName" name="lastName" type="text" required value={form.lastName} onChange={handleChange} placeholder="Smith" className={inputClass} />
          </div>
          <div>
            <label htmlFor="dob" className={labelClass}>
              Date of Birth <span className="text-crimson">*</span>
            </label>
            <input id="dob" name="dob" type="date" required value={form.dob} onChange={handleChange} className={inputClass} />
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
            <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@example.com" className={inputClass} />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone Number <span className="text-crimson">*</span>
            </label>
            <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="(516) 000-0000" className={inputClass} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="address" className={labelClass}>
              Street Address <span className="text-crimson">*</span>
            </label>
            <input id="address" name="address" type="text" required value={form.address} onChange={handleChange} placeholder="123 Main St" className={inputClass} />
          </div>
          <div>
            <label htmlFor="city" className={labelClass}>
              City <span className="text-crimson">*</span>
            </label>
            <input id="city" name="city" type="text" required value={form.city} onChange={handleChange} className={inputClass} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="state" className={labelClass}>State</label>
              <input id="state" name="state" type="text" value={form.state} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label htmlFor="zip" className={labelClass}>
                ZIP <span className="text-crimson">*</span>
              </label>
              <input id="zip" name="zip" type="text" required value={form.zip} onChange={handleChange} placeholder="11000" className={inputClass} />
            </div>
          </div>
        </div>
      </fieldset>

      {/* Eligibility */}
      <fieldset>
        <legend className="text-lg font-bold text-navy mb-4 pb-2 border-b border-gray-200 w-full">
          Employment &amp; Eligibility
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="sm:col-span-2">
            <label htmlFor="employed" className={labelClass}>
              Are you currently employed by a Local 363-A, USWU signatory electrical contractor?{" "}
              <span className="text-crimson">*</span>
            </label>
            <select id="employed" name="employed" required value={form.employed} onChange={handleChange} className={inputClass}>
              <option value="">Select one</option>
              <option value="yes">Yes</option>
              <option value="no">No — I am seeking employment</option>
              <option value="pending">In process of being hired</option>
            </select>
          </div>
          <div>
            <label htmlFor="contractorName" className={labelClass}>
              Employer / Contractor Name
            </label>
            <input id="contractorName" name="contractorName" type="text" value={form.contractorName} onChange={handleChange} placeholder="ABC Electrical Co." className={inputClass} />
          </div>
          <div>
            <label htmlFor="bookNumber" className={labelClass}>
              Local 363-A Member Number (if applicable)
            </label>
            <input id="bookNumber" name="bookNumber" type="text" value={form.bookNumber} onChange={handleChange} className={inputClass} />
          </div>
        </div>
      </fieldset>

      {/* Program */}
      <fieldset>
        <legend className="text-lg font-bold text-navy mb-4 pb-2 border-b border-gray-200 w-full">
          Program Information
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="programYear" className={labelClass}>
              Applying for which program year? <span className="text-crimson">*</span>
            </label>
            <select id="programYear" name="programYear" required value={form.programYear} onChange={handleChange} className={inputClass}>
              <option value="">Select one</option>
              <option value="new">New applicant (Year 1)</option>
              <option value="year2">Year 2</option>
              <option value="year3">Year 3</option>
              <option value="year4">Year 4</option>
              <option value="year5">Year 5</option>
              <option value="transfer">Transfer from another program</option>
              <option value="unsure">Not sure — please advise</option>
            </select>
          </div>
          <div>
            <label htmlFor="hearAbout" className={labelClass}>
              How did you hear about us?
            </label>
            <select id="hearAbout" name="hearAbout" value={form.hearAbout} onChange={handleChange} className={inputClass}>
              <option value="">Select one</option>
              <option value="employer">My employer / contractor</option>
              <option value="local363a">Local 363-A / USWU</option>
              <option value="friend">Friend or family member</option>
              <option value="online">Online search</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="comments" className={labelClass}>
              Additional Information or Questions
            </label>
            <textarea id="comments" name="comments" rows={4} value={form.comments} onChange={handleChange} placeholder="Anything else you'd like us to know..." className={`${inputClass} resize-y`} />
          </div>
        </div>
      </fieldset>

      <div className="bg-offwhite rounded-lg p-4 text-xs text-charcoal leading-relaxed">
        By submitting this form, you consent to being contacted by BTE Fund staff regarding
        your enrollment application. Your information will not be shared with third parties.
        This site does not yet transmit form data to a server — submission will be connected
        to our intake system in a future update.
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto bg-gold text-navy font-bold px-10 py-4 rounded text-base hover:bg-gold-dark transition-colors"
      >
        Submit Enrollment Application
      </button>
    </form>
  );
}
