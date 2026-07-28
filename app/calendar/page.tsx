import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "School Calendar",
  description:
    "BTE Fund school calendar — semester dates, class schedules, and important dates for the electrical apprenticeship program.",
};

type CalendarEntryKind = "milestone" | "holiday" | "recess";

type CalendarEntry = {
  date: string;
  event: string;
  kind: CalendarEntryKind;
};

const ACADEMIC_YEAR = "2026–2027 Academic Year";
const ACADEMIC_YEAR_RANGE = "August 31, 2026 – June 3, 2027";

const calendarEntries: CalendarEntry[] = [
  { date: "August 31, 2026", event: "First Day of Classes", kind: "milestone" },
  { date: "September 7, 2026", event: "Labor Day (Closed)", kind: "holiday" },
  { date: "September 21, 2026", event: "Yom Kippur (Closed)", kind: "holiday" },
  { date: "September 24, 2026", event: "Closed", kind: "holiday" },
  { date: "October 12, 2026", event: "Columbus Day (Closed)", kind: "holiday" },
  { date: "November 3, 2026", event: "Election Day (Closed)", kind: "holiday" },
  { date: "November 11, 2026", event: "Veterans Day (Closed)", kind: "holiday" },
  { date: "November 19, 2026", event: "Closed", kind: "holiday" },
  { date: "November 26, 2026", event: "Thanksgiving (Closed)", kind: "holiday" },
  { date: "December 24, 2026 – January 1, 2027", event: "Winter Recess", kind: "recess" },
  { date: "January 18, 2027", event: "MLK Day (Closed)", kind: "holiday" },
  { date: "February 15–19, 2027", event: "Mid-Winter Recess", kind: "recess" },
  { date: "March 9, 2027", event: "Eid al-Fitr (Closed)", kind: "holiday" },
  { date: "March 18, 2027", event: "Closed", kind: "holiday" },
  { date: "March 26, 2027", event: "Closed", kind: "holiday" },
  { date: "April 22–30, 2027", event: "Spring Break", kind: "recess" },
  { date: "May 12, 2027", event: "Closed", kind: "holiday" },
  { date: "May 17, 2027", event: "Eid al-Adha (Closed)", kind: "holiday" },
  { date: "May 31, 2027", event: "Memorial Day (Closed)", kind: "holiday" },
  { date: "June 3, 2027", event: "Last Day of Classes", kind: "milestone" },
  { date: "June 10, 2027", event: "Closed (administrative/staff closure, after last day)", kind: "holiday" },
];

export default function CalendarPage() {
  return (
    <>
      <div className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">School Calendar</h1>
          <p className="text-white/80 text-xl max-w-2xl">
            Key dates for the {ACADEMIC_YEAR.toLowerCase()}, including holidays and recess periods.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-8">
          <h2 className="text-2xl font-bold text-navy">{ACADEMIC_YEAR}</h2>
          <span className="text-charcoal text-sm bg-offwhite px-3 py-1 rounded-full">
            {ACADEMIC_YEAR_RANGE}
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
              {calendarEntries.map((entry, i) => {
                if (entry.kind === "milestone") {
                  return (
                    <tr key={i} className="bg-gold/10 border-l-4 border-gold">
                      <td className="px-5 py-3 font-bold text-navy">{entry.date}</td>
                      <td className="px-5 py-3">
                        <span className="inline-flex items-center gap-2 font-bold text-navy">
                          {entry.event}
                          <span className="bg-gold text-navy text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full">
                            {entry.event.startsWith("First") ? "Start" : "End"}
                          </span>
                        </span>
                      </td>
                    </tr>
                  );
                }
                if (entry.kind === "recess") {
                  return (
                    <tr key={i} className="bg-offwhite">
                      <td className="px-5 py-3 text-charcoal font-semibold">{entry.date}</td>
                      <td className="px-5 py-3 text-charcoal font-semibold">{entry.event}</td>
                    </tr>
                  );
                }
                return (
                  <tr key={i} className="hover:bg-gold/5 transition-colors">
                    <td className="px-5 py-3 text-charcoal">{entry.date}</td>
                    <td className="px-5 py-3 text-charcoal">{entry.event}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
