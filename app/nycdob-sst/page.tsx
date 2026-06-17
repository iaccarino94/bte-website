import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NYC DOB Site Safety Training (SST)",
  description:
    "Information about NYC Department of Buildings mandatory Site Safety Training (SST) requirements and how BTE Fund provides this training.",
};

export default function NycdobSstPage() {
  return (
    <>
      <div className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">NYC DOB Site Safety Training</h1>
          <p className="text-white/80 text-xl max-w-2xl">
            Mandatory training for construction workers and supervisors on New York City
            job sites — available through BTE Fund.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* What is SST */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-navy mb-6">What Is NYC DOB SST?</h2>
          <div className="max-w-3xl space-y-4 text-charcoal leading-relaxed text-lg">
            <p>
              The New York City Department of Buildings (NYC DOB) Site Safety Training (SST)
              program establishes mandatory safety training requirements for workers and
              supervisors on covered construction sites in New York City.
            </p>
            <p>
              Under Local Law 196, most workers on sites that require a construction
              superintendent, site safety coordinator, or site safety manager must complete
              a specified number of OSHA and site-specific safety hours to remain compliant.
            </p>
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-navy mb-6">Training Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-offwhite rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-navy text-lg mb-3">Construction Workers</h3>
              <div className="text-6xl font-black text-navy/20 leading-none mb-2">40</div>
              <p className="text-charcoal text-sm leading-relaxed">
                <strong className="text-navy">40 hours</strong> of site safety training are
                required to obtain an SST Card. The 40 hours include OSHA 10-Hour
                construction training plus additional site safety elective hours.
              </p>
            </div>
            <div className="bg-navy rounded-xl p-6 text-white">
              <h3 className="font-bold text-gold text-lg mb-3">Supervisors</h3>
              <div className="text-6xl font-black text-white/20 leading-none mb-2">62</div>
              <p className="text-white/80 text-sm leading-relaxed">
                <strong className="text-gold">62 hours</strong> of site safety training are
                required for supervisors to obtain an SST Supervisor Card. The 62 hours
                include OSHA 30-Hour construction training plus additional site safety hours.
              </p>
            </div>
          </div>
        </section>

        {/* How BTE provides SST */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-navy mb-6">Training Through BTE Fund</h2>
          <div className="max-w-3xl space-y-4 text-charcoal leading-relaxed">
            <p>
              BTE Fund offers OSHA 10-Hour and OSHA 30-Hour construction safety courses
              throughout the year for apprentices and journeypersons. Completing these
              courses through BTE counts toward your SST Card requirements under Local
              Law 196.
            </p>
            <p>
              Course availability varies by semester. Registered apprentices are encouraged
              to complete their OSHA requirements early in the program. Check the{" "}
              <Link href="/calendar" className="text-navy underline hover:text-gold transition-colors">
                School Calendar
              </Link>{" "}
              for upcoming course dates or contact our office to schedule.
            </p>
            <p>
              For questions about which courses count toward SST requirements, or to
              obtain documentation of completed training, contact the office directly.
            </p>
          </div>
        </section>

        {/* SST Card info */}
        <section className="mb-12 bg-offwhite rounded-xl p-8">
          <h2 className="text-2xl font-bold text-navy mb-4">The SST Card</h2>
          <div className="max-w-2xl space-y-3 text-charcoal text-sm leading-relaxed">
            <p>
              After completing the required training hours, workers apply for an SST Card
              through the NYC DOB online portal. The card must be obtained from an approved
              SST card provider using certificates from your completed training courses.
            </p>
            <p>
              Keep all training certificates — you will need them to document your hours
              when applying for your SST Card. BTE will provide certificates for all
              courses completed through our program.
            </p>
            <p>
              For detailed information about card requirements, covered sites, and
              the official NYC DOB portal, visit the{" "}
              <a
                href="https://www.nyc.gov/site/buildings/industry/site-safety-training.page"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy underline hover:text-gold transition-colors"
              >
                NYC Department of Buildings SST page
              </a>
              .
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-navy rounded-xl p-8 text-white text-center">
          <h2 className="text-xl font-bold mb-3">Questions About SST Requirements?</h2>
          <p className="text-white/80 mb-6">
            Contact our office to find out when the next OSHA course is scheduled or
            to request documentation of prior training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5164877830"
              className="inline-flex items-center justify-center bg-gold text-navy font-bold px-6 py-3 rounded text-sm hover:bg-gold-dark transition-colors"
            >
              Call (516) 487-7830
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white/40 text-white font-semibold px-6 py-3 rounded text-sm hover:border-white hover:bg-white/10 transition-colors"
            >
              Send Us a Message
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
