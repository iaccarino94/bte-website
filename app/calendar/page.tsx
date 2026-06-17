import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "School Calendar",
  description:
    "BTE Fund school calendar — semester dates, class schedules, and important dates for the electrical apprenticeship program.",
};

// Placeholder calendar data — replace with real dates
const calendarData = [
  {
    semester: "Fall 2025",
    period: "September 8 – December 19, 2025",
    items: [
      { date: "[Date TBD]", event: "Fall semester begins — all year groups" },
      { date: "[Date TBD]", event: "OSHA 10-Hour Safety Course" },
      { date: "[Date TBD]", event: "No classes — Election Day" },
      { date: "[Date TBD]", event: "No classes — Thanksgiving recess" },
      { date: "[Date TBD]", event: "Last day of fall semester" },
    ],
  },
  {
    semester: "Spring 2026",
    period: "January 12 – May 22, 2026",
    items: [
      { date: "[Date TBD]", event: "Spring semester begins — all year groups" },
      { date: "[Date TBD]", event: "NEC Code Update Course" },
      { date: "[Date TBD]", event: "No classes — Presidents' Day" },
      { date: "[Date TBD]", event: "No classes — Spring recess" },
      { date: "[Date TBD]", event: "Year 5 final exams" },
      { date: "[Date TBD]", event: "Completion ceremony — Year 5 graduates" },
      { date: "[Date TBD]", event: "Last day of spring semester" },
    ],
  },
  {
    semester: "Summer 2026",
    period: "June – August 2026",
    items: [
      { date: "[Date TBD]", event: "Make-up classes / incomplete OJT processing" },
      { date: "[Date TBD]", event: "First Aid & CPR certification course" },
      { date: "[Date TBD]", event: "No classes — Independence Day" },
      { date: "[Date TBD]", event: "Summer session ends" },
    ],
  },
];

export default function CalendarPage() {
  return (
    <>
      <div className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">School Calendar</h1>
          <p className="text-white/80 text-xl max-w-2xl">
            Semester dates, class schedules, and important dates for enrolled apprentices.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-5 py-4 mb-10 text-sm text-amber-800">
          <strong>Placeholder calendar.</strong> Real dates and class schedules will be confirmed and updated here.
          If you have an urgent scheduling question, please{" "}
          <Link href="/contact" className="underline hover:no-underline">contact our office</Link>.
        </div>

        <div className="space-y-12">
          {calendarData.map((semester) => (
            <div key={semester.semester}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-5">
                <h2 className="text-2xl font-bold text-navy">{semester.semester}</h2>
                <span className="text-charcoal text-sm bg-offwhite px-3 py-1 rounded-full">
                  {semester.period}
                </span>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="text-left px-5 py-3 font-semibold w-1/3">Date</th>
                      <th className="text-left px-5 py-3 font-semibold">Event</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {semester.items.map((item, i) => (
                      <tr key={i} className="even:bg-offwhite hover:bg-gold/5 transition-colors">
                        <td className="px-5 py-3 text-charcoal font-medium">{item.date}</td>
                        <td className="px-5 py-3 text-charcoal">{item.event}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-navy rounded-xl text-white">
          <h3 className="font-bold text-lg mb-2">Emergency School Closings</h3>
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            In the event of severe weather or other emergencies, class cancellations will
            be posted on the Emergency School Closing page as early as possible.
          </p>
          <Link
            href="/emergency-closing"
            className="inline-flex items-center text-gold text-sm font-semibold hover:underline"
          >
            Check Emergency Closing Status →
          </Link>
        </div>
      </div>
    </>
  );
}
