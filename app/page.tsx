import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Building Trades Educational Benefit Fund",
  description:
    "The Building Trades Educational Benefit Fund (BTE) provides a five-year paid electrical apprenticeship program in New York — no cost to apprentices.",
};

function HeroSection() {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(45deg, #F5C518 0px, #F5C518 1px, transparent 1px, transparent 40px)",
        }} />
      </div>

      {/* Hero image placeholder */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">
            New York Electrical Apprenticeship
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Powering New York&apos;s<br />
            <span className="text-gold">Electrical Workforce</span>
          </h1>
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
            A five-year paid apprenticeship at no cost to you. Earn while you learn under
            licensed journeypersons, with classroom instruction backed by NYSDOL registration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/enroll"
              className="inline-flex items-center justify-center bg-gold text-navy font-bold px-8 py-4 rounded text-base hover:bg-gold-dark transition-colors"
            >
              Enroll For Classes
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white/40 text-white font-semibold px-8 py-4 rounded text-base hover:border-white hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Hero photo placeholder bar */}
      <div className="relative bg-charcoal/30 py-3 text-center">
        <p className="text-white/40 text-xs italic">
          [Hero photo placeholder — provide image file to replace]
        </p>
      </div>
    </section>
  );
}

function WhatWeDoSection() {
  const pillars = [
    {
      icon: "⚡",
      title: "Hands-On Training",
      body: "Apprentices complete 1,600–2,000 hours of on-the-job training each year alongside a licensed journeyperson electrician — real work on real job sites from day one.",
    },
    {
      icon: "📚",
      title: "Related Instruction",
      body: "Approximately 180 hours of classroom and lab instruction each year covering electrical theory, code, safety, and trade mathematics — all at no cost to the apprentice.",
    },
    {
      icon: "📈",
      title: "Paid Progression",
      body: "Wages start at a percentage of the journeyperson rate and increase each year as you advance. By completion, you're earning full journeyperson pay.",
    },
    {
      icon: "🏛️",
      title: "NYSDOL Registered",
      body: "The program is registered with the New York State Department of Labor. We also help signatory contractors register their own apprenticeship programs with the state.",
    },
  ];

  return (
    <section className="py-20 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">What We Do</h2>
          <p className="text-charcoal text-lg max-w-2xl mx-auto">
            BTE administers a comprehensive electrical apprenticeship program that combines
            structured classroom learning with supervised on-the-job experience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="font-bold text-navy text-lg mb-2">{p.title}</h3>
              <p className="text-charcoal text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoWeServeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">Who We Serve</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-navy text-lg mb-2">Apprentices</h3>
                <p className="text-charcoal leading-relaxed">
                  Individuals entering or currently enrolled in the electrical trade through
                  an employer signatory to Local 363-A, USWU. The BTE Fund covers the cost of your
                  instruction — you just show up ready to learn.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg mb-2">Employers & Contractors</h3>
                <p className="text-charcoal leading-relaxed">
                  Electrical contractors who are signatory to the Local 363-A, USWU collective
                  bargaining agreement. We assist employers in registering apprenticeship programs
                  with NYSDOL and meeting their training obligations under the agreement.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg mb-2">Journeypersons</h3>
                <p className="text-charcoal leading-relaxed">
                  Licensed electricians seeking code update courses, upgrade training,
                  safety certifications, and continuing education. See our{" "}
                  <Link href="/other-programs" className="text-navy underline hover:text-gold transition-colors">
                    Other Programs
                  </Link>{" "}
                  page for details.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-navy rounded-lg p-8 text-white">
            <h3 className="font-bold text-gold text-xl mb-6">Program at a Glance</h3>
            <ul className="space-y-4">
              {[
                ["Duration", "5 years (10 semesters)"],
                ["Cost to Apprentice", "No cost — fully funded"],
                ["Classroom Hours", "~180 hours/year"],
                ["OJT Hours", "1,600–2,000 hours/year"],
                ["Starting Wage", "Percentage of journeyperson rate"],
                ["Certification", "NYSDOL Registered Apprenticeship"],
              ].map(([label, value]) => (
                <li key={label} className="flex gap-3 items-start">
                  <span className="text-gold font-bold text-lg leading-none mt-0.5">—</span>
                  <div>
                    <span className="font-semibold text-white">{label}: </span>
                    <span className="text-white/80">{value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowToApplySection() {
  const steps = [
    {
      step: "01",
      title: "Check Eligibility",
      body: "You must be employed by a contractor signatory to the Local 363-A, USWU collective bargaining agreement, or be in the process of obtaining employment.",
    },
    {
      step: "02",
      title: "Submit Your Application",
      body: "Complete the enrollment form on this site or contact our office directly. Provide your contact information and employment details.",
    },
    {
      step: "03",
      title: "Intake & Placement",
      body: "Our staff will review your application and contact you to confirm your placement in the appropriate year of instruction.",
    },
    {
      step: "04",
      title: "Start Classes",
      body: "Attend your scheduled classes each semester while continuing your on-the-job training. Advance each year as you complete your hours and coursework.",
    },
  ];

  return (
    <section className="py-20 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">How to Apply</h2>
          <p className="text-charcoal text-lg max-w-xl mx-auto">
            Getting started is straightforward. Here&apos;s the process from first contact to first class.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="relative bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="text-5xl font-black text-navy/10 leading-none mb-3">{s.step}</div>
              <h3 className="font-bold text-navy text-base mb-2">{s.title}</h3>
              <p className="text-charcoal text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/enroll"
            className="inline-flex items-center justify-center bg-gold text-navy font-bold px-10 py-4 rounded text-base hover:bg-gold-dark transition-colors"
          >
            Start Your Application
          </Link>
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="bg-navy py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Ready to Start Your Career in the Electrical Trade?
        </h2>
        <p className="text-white/80 text-lg mb-8">
          Contact our office or submit an enrollment application today.
          Our staff is here to answer your questions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/enroll"
            className="inline-flex items-center justify-center bg-gold text-navy font-bold px-8 py-4 rounded text-base hover:bg-gold-dark transition-colors"
          >
            Enroll For Classes
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border-2 border-white/40 text-white font-semibold px-8 py-4 rounded text-base hover:border-white hover:bg-white/10 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <WhoWeServeSection />
      <HowToApplySection />
      <CtaBanner />
    </>
  );
}
