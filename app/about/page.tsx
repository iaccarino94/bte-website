import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the Building Trades Educational Benefit Fund — our mission, our five-year electrical apprenticeship program, and our role in New York's building trades.",
};

function PageHeader() {
  return (
    <div className="bg-navy py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Us</h1>
        <p className="text-white/80 text-xl max-w-2xl">
          The Building Trades Educational Benefit Fund has been training the next generation
          of New York electricians for decades.
        </p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-navy mb-6">Our Mission</h2>
          <div className="max-w-3xl space-y-4 text-charcoal leading-relaxed text-lg">
            <p>
              The Building Trades Educational Benefit Fund (BTE) is a multiemployer ERISA
              trust fund established by and for signatory electrical contractors. BTE
              operates on the <strong className="text-navy">employer/management side</strong> of
              the industry — we are not a union and are not union-administered.
            </p>
            <p>
              BTE works alongside Local 363-A, United Service Workers Union (USWU) — part
              of IUJAT (International Union of Journeymen and Allied Trades) — as the
              management-side training fund under the collective bargaining agreement.
              Local 363-A represents the workers; BTE represents the employers&apos; training
              obligations under that agreement.
            </p>
            <p>
              We believe that a skilled electrical workforce is the backbone of a safe and
              productive construction industry. Our mission is to ensure every apprentice
              who comes through our program leaves as a highly qualified, code-compliant,
              safety-conscious electrician — ready for a lifelong career in the trade.
            </p>
          </div>
        </section>

        {/* The Program */}
        <section className="mb-16 bg-offwhite rounded-xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-navy mb-6">The Apprenticeship Program</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-5 text-charcoal leading-relaxed">
              <p>
                Our flagship program is a <strong className="text-navy">five-year registered electrical apprenticeship</strong>,
                recognized and registered with the New York State Department of Labor
                (NYSDOL). The program is structured in annual levels, each combining
                classroom instruction with supervised on-the-job training.
              </p>
              <p>
                <strong className="text-navy">Classroom instruction</strong> runs approximately
                180 hours per year, covering electrical theory, the National Electrical Code
                (NEC), blueprint reading, safety practices, motor controls, and more.
                All instruction is provided at no cost to the apprentice.
              </p>
              <p>
                <strong className="text-navy">On-the-job training (OJT)</strong> consists of
                1,600 to 2,000 hours per year, performed under the direct supervision of a
                licensed journeyman electrician. This hands-on experience is what truly
                develops trade competency.
              </p>
              <p>
                <strong className="text-navy">Wages</strong> are set in accordance with the
                collective bargaining agreement and increase as apprentices advance through
                the program.
              </p>
              <p>
                BTE directly administers its own NYSDOL-registered apprenticeship program.
                Separately, BTE also helps individual signatory employers register and
                administer their own NYSDOL-approved apprenticeship programs. Apprentices
                may be enrolled through either path — the related instruction and curriculum
                are the same.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { year: "Year 1", focus: "Foundations — basic wiring, safety, tools, NEC introduction" },
                { year: "Year 2", focus: "Residential & commercial wiring, conduit installation" },
                { year: "Year 3", focus: "Motor controls, load calculations, more complex circuits" },
                { year: "Year 4", focus: "High-voltage systems, fire alarm, advanced NEC application" },
                { year: "Year 5", focus: "Capstone skills, code compliance, exam prep" },
              ].map(({ year, focus }) => (
                <div key={year} className="bg-white rounded-lg p-4 border border-gray-100 flex gap-4">
                  <div className="bg-navy text-gold font-bold text-sm px-3 py-1 rounded self-start whitespace-nowrap">
                    {year}
                  </div>
                  <p className="text-charcoal text-sm leading-relaxed">{focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ERISA & Fund Structure */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-navy mb-6">Fund Structure & Governance</h2>
          <div className="max-w-3xl space-y-4 text-charcoal leading-relaxed">
            <p>
              BTE is a jointly-trusteed benefit fund governed under the Employee Retirement
              Income Security Act of 1974 (ERISA). The fund is administered by a Board of
              Trustees composed of equal employer and union representation, as required by
              the Taft-Hartley Act.
            </p>
            <p>
              Employer contributions to the fund are made pursuant to the collective
              bargaining agreement between signatory contractors and Local 363-A, USWU. These
              contributions fund the operating costs of the apprenticeship programs,
              including instructor salaries, facility costs, and instructional materials.
            </p>
            <p>
              BTE also operates under the name <strong className="text-navy">Building Trades
              Employers&apos; Educational Association (BTEEA)</strong> — this is the same entity,
              used because BTEEA is the name under which the fund holds its approvals and
              accreditation from NYSDOL, NYSED, and NYCDOB. BTE&apos;s signatory employer
              contractors are organized through{" "}
              <a href="https://www.bieca.net" target="_blank" rel="noopener noreferrer" className="text-navy underline hover:text-gold transition-colors">
                BIECA (Building Industry Electrical Contractors Association)
              </a>
              .
            </p>
            <p>
              Day-to-day administrative functions are handled by our plan administrator,{" "}
              <a
                href="https://www.dickinsongrp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy underline hover:text-gold transition-colors"
              >
                Dickinson Group
              </a>
              . The fund&apos;s official Plan Documents govern all program rules and eligibility.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy rounded-xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in Joining the Program?</h2>
          <p className="text-white/80 mb-8 text-lg">
            Contact our office with questions or submit an enrollment application to get started.
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
        </section>
      </div>
    </>
  );
}
