import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "School Calendar",
  description:
    "BTE Fund school calendar — semester dates, class schedules, and important dates for the electrical apprenticeship program.",
};

// Recomputes "Next Up" on a refresh instead of only at build time.
export const revalidate = 3600;

type CalendarEntryKind = "milestone" | "holiday" | "recess";

type CalendarEntry = {
  date: string;
  event: string;
  kind: CalendarEntryKind;
  start: string; // ISO yyyy-mm-dd
  end: string; // ISO yyyy-mm-dd
};

const ACADEMIC_YEAR = "2026–2027 Academic Year";
const ACADEMIC_YEAR_RANGE = "August 31, 2026 – June 3, 2027";

const calendarEntries: CalendarEntry[] = [
  { date: "August 31, 2026", event: "First Day of Classes", kind: "milestone", start: "2026-08-31", end: "2026-08-31" },
  { date: "September 7, 2026", event: "Labor Day (Closed)", kind: "holiday", start: "2026-09-07", end: "2026-09-07" },
  { date: "September 21, 2026", event: "Yom Kippur (Closed)", kind: "holiday", start: "2026-09-21", end: "2026-09-21" },
  { date: "September 24, 2026", event: "Closed", kind: "holiday", start: "2026-09-24", end: "2026-09-24" },
  { date: "October 12, 2026", event: "Columbus Day (Closed)", kind: "holiday", start: "2026-10-12", end: "2026-10-12" },
  { date: "November 3, 2026", event: "Election Day (Closed)", kind: "holiday", start: "2026-11-03", end: "2026-11-03" },
  { date: "November 11, 2026", event: "Veterans Day (Closed)", kind: "holiday", start: "2026-11-11", end: "2026-11-11" },
  { date: "November 19, 2026", event: "Closed", kind: "holiday", start: "2026-11-19", end: "2026-11-19" },
  { date: "November 26, 2026", event: "Thanksgiving (Closed)", kind: "holiday", start: "2026-11-26", end: "2026-11-26" },
  { date: "December 24, 2026 – January 1, 2027", event: "Winter Recess", kind: "recess", start: "2026-12-24", end: "2027-01-01" },
  { date: "January 18, 2027", event: "MLK Day (Closed)", kind: "holiday", start: "2027-01-18", end: "2027-01-18" },
  { date: "February 15–19, 2027", event: "Mid-Winter Recess", kind: "recess", start: "2027-02-15", end: "2027-02-19" },
  { date: "March 9, 2027", event: "Eid al-Fitr (Closed)", kind: "holiday", start: "2027-03-09", end: "2027-03-09" },
  { date: "March 18, 2027", event: "Closed", kind: "holiday", start: "2027-03-18", end: "2027-03-18" },
  { date: "March 26, 2027", event: "Closed", kind: "holiday", start: "2027-03-26", end: "2027-03-26" },
  { date: "April 22–30, 2027", event: "Spring Break", kind: "recess", start: "2027-04-22", end: "2027-04-30" },
  { date: "May 12, 2027", event: "Closed", kind: "holiday", start: "2027-05-12", end: "2027-05-12" },
  { date: "May 17, 2027", event: "Eid al-Adha (Closed)", kind: "holiday", start: "2027-05-17", end: "2027-05-17" },
  { date: "May 31, 2027", event: "Memorial Day (Closed)", kind: "holiday", start: "2027-05-31", end: "2027-05-31" },
  { date: "June 3, 2027", event: "Last Day of Classes", kind: "milestone", start: "2027-06-03", end: "2027-06-03" },
  { date: "June 10, 2027", event: "Closed (administrative/staff closure, after last day)", kind: "holiday", start: "2027-06-10", end: "2027-06-10" },
];

const BADGE_STYLES: Record<CalendarEntryKind, string> = {
  milestone: "bg-gold text-navy",
  holiday: "bg-navy text-white",
  recess: "bg-white text-charcoal border border-gray-300",
};

const DOT_STYLES: Record<CalendarEntryKind, string> = {
  milestone: "bg-gold ring-gold/30",
  holiday: "bg-navy ring-navy/20",
  recess: "bg-white border-2 border-gray-300 ring-transparent",
};

function badgeLabel(entry: CalendarEntry): string {
  if (entry.kind === "milestone") {
    return entry.event.startsWith("First") ? "First Day" : "Last Day";
  }
  if (entry.kind === "recess") return "Recess";
  return "Closed";
}

function monthLabel(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

function withMonthBoundaries(entries: CalendarEntry[]) {
  const seenMonths = new Set<string>();
  return entries.map((entry) => {
    const month = monthLabel(entry.start);
    const showMonth = !seenMonths.has(month);
    seenMonths.add(month);
    return { entry, month, showMonth };
  });
}

const calendarRows = withMonthBoundaries(calendarEntries);

export default function CalendarPage() {
  const today = new Date();
  const nextUpIndex = calendarEntries.findIndex(
    (entry) => new Date(`${entry.end}T23:59:59`) >= today
  );

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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-10">
          <h2 className="text-2xl font-bold text-navy">{ACADEMIC_YEAR}</h2>
          <span className="text-charcoal text-sm bg-offwhite px-3 py-1 rounded-full">
            {ACADEMIC_YEAR_RANGE}
          </span>
        </div>

        <div className="relative">
          <div className="absolute left-[6px] top-1 bottom-1 w-0.5 bg-gray-200" />

          <div>
            {calendarRows.map(({ entry, month, showMonth }, i) => {
              const isNext = i === nextUpIndex;
              const isMilestone = entry.kind === "milestone";

              return (
                <div key={i}>
                  {showMonth && (
                    <div className="pl-8 sm:pl-9 pt-2 pb-2 first:pt-0">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-charcoal/40">
                        {month}
                      </span>
                    </div>
                  )}
                  <div className="relative pl-8 sm:pl-9 pb-7 last:pb-0">
                    <span
                      className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full ring-4 ring-white shadow-sm ${DOT_STYLES[entry.kind]}`}
                    />
                    <div
                      className={
                        isMilestone
                          ? "bg-gold/10 border border-gold/40 rounded-lg px-4 py-3"
                          : ""
                      }
                    >
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span
                          className={`inline-flex items-center text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${BADGE_STYLES[entry.kind]}`}
                        >
                          {badgeLabel(entry)}
                        </span>
                        {isNext && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 ring-1 ring-emerald-300">
                            Next Up
                          </span>
                        )}
                      </div>
                      <p className={isMilestone ? "font-bold text-navy text-lg" : "font-semibold text-navy"}>
                        {entry.event}
                      </p>
                      <p className="text-charcoal/70 text-sm mt-0.5">{entry.date}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
