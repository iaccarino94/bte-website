import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Other Programs",
  description:
    "Beyond the core apprenticeship, BTE offers safety training, code update courses, journeyperson upgrade programs, and specialty certifications.",
};

const programs = [
  {
    title: "OSHA Safety Training",
    description:
      "OSHA 10-hour and OSHA 30-hour construction safety courses. Required for many job sites and employers — completed in-house for the convenience of our members.",
    badge: "Safety",
  },
  {
    title: "NEC Code Update Courses",
    description:
      "Continuing education on each new edition of the National Electrical Code. Ensures journeypersons remain current with code changes that affect their daily work.",
    badge: "Code",
  },
  {
    title: "Journeyperson Upgrade Training",
    description:
      "Advanced courses for licensed electricians seeking to deepen expertise in specific areas — including commercial lighting controls, photovoltaic systems, and industrial installations.",
    badge: "Upgrade",
  },
  {
    title: "First Aid & CPR",
    description:
      "American Heart Association-certified First Aid and CPR/AED training. Offered periodically throughout the year for apprentices and journeypersons alike.",
    badge: "Safety",
  },
  {
    title: "Fire Alarm Systems",
    description:
      "Specialized instruction on the installation, testing, and maintenance of fire alarm and life-safety systems, including NFPA 72 requirements.",
    badge: "Specialty",
  },
  {
    title: "NYC DOB Site Safety Training (SST)",
    description:
      "Mandatory NYC Department of Buildings Site Safety Training for workers and supervisors on job sites over a certain size. See our dedicated SST page for details.",
    badge: "NYC",
    link: "/nycdob-sst",
    linkLabel: "Learn more about NYCDOB SST →",
  },
];

export default function OtherProgramsPage() {
  return (
    <>
      <div className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Other Programs</h1>
          <p className="text-white/80 text-xl max-w-2xl">
            Beyond the core apprenticeship, BTE offers continuing education, safety
            certifications, and specialty training for journeypersons and employers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="font-bold text-navy text-lg leading-snug">{program.title}</h2>
                <span className="text-xs font-semibold bg-navy/10 text-navy px-2 py-1 rounded ml-2 flex-shrink-0">
                  {program.badge}
                </span>
              </div>
              <p className="text-charcoal text-sm leading-relaxed flex-1">{program.description}</p>
              {program.link && (
                <Link
                  href={program.link}
                  className="mt-4 text-navy text-sm font-medium hover:underline"
                >
                  {program.linkLabel}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="bg-offwhite rounded-xl p-8 lg:p-12">
          <h2 className="text-2xl font-bold text-navy mb-4">Scheduling & Registration</h2>
          <div className="max-w-2xl space-y-4 text-charcoal leading-relaxed">
            <p>
              Course availability and scheduling for supplemental programs varies by semester.
              Check the{" "}
              <Link href="/calendar" className="text-navy underline hover:text-gold transition-colors">
                School Calendar
              </Link>{" "}
              for upcoming dates, or contact our office to ask about a specific course.
            </p>
            <p>
              Some courses may have prerequisites or require employer authorization. Our
              staff can help you determine which programs you qualify for and how to register.
            </p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-navy text-white font-semibold px-6 py-3 rounded text-sm hover:bg-navy-dark transition-colors"
            >
              Contact Us to Register
            </Link>
            <Link
              href="/calendar"
              className="inline-flex items-center justify-center border border-navy text-navy font-semibold px-6 py-3 rounded text-sm hover:bg-navy hover:text-white transition-colors"
            >
              View School Calendar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
