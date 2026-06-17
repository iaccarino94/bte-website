import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency School Closing",
  description:
    "Current emergency school closing status for BTE Fund classes. Check here before coming to class on days with severe weather or other emergencies.",
};

// STATUS OPTIONS: "open" | "closed" | "delayed"
// Change this value and redeploy to update the public status.
const STATUS: "open" | "closed" | "delayed" = "open";

const statusConfig = {
  open: {
    label: "CLASSES IN SESSION",
    subtext: "There are no emergency closings at this time. All classes are proceeding as scheduled.",
    bgColor: "bg-green-700",
    borderColor: "border-green-600",
    textColor: "text-green-50",
    badgeBg: "bg-green-100",
    badgeText: "text-green-800",
    icon: "✓",
  },
  closed: {
    label: "SCHOOL CLOSED",
    subtext: "Classes are cancelled today due to an emergency or severe weather. Do not come to school. Check back here for updates.",
    bgColor: "bg-crimson",
    borderColor: "border-red-600",
    textColor: "text-red-50",
    badgeBg: "bg-red-100",
    badgeText: "text-red-800",
    icon: "✕",
  },
  delayed: {
    label: "DELAYED OPENING",
    subtext: "Classes are starting late today. Check the details below for the updated start time.",
    bgColor: "bg-amber-600",
    borderColor: "border-amber-500",
    textColor: "text-amber-50",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-800",
    icon: "⏱",
  },
};

const config = statusConfig[STATUS];

export default function EmergencyClosingPage() {
  return (
    <>
      {/* Hero status block */}
      <div className={`${config.bgColor} py-20`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6 text-white">{config.icon}</div>
          <h1 className={`text-4xl sm:text-5xl font-black tracking-tight mb-4 ${config.textColor}`}>
            {config.label}
          </h1>
          <p className={`text-xl leading-relaxed max-w-2xl mx-auto ${config.textColor} opacity-90`}>
            {config.subtext}
          </p>
          <p className={`mt-6 text-sm ${config.textColor} opacity-60`}>
            Last updated: [Timestamp placeholder — update manually or via CMS]
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Instructions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-navy mb-4">What To Do</h2>
          <div className="bg-offwhite rounded-lg p-6 space-y-4 text-charcoal leading-relaxed">
            <p>
              In the event of severe weather, a building emergency, or another condition
              that requires cancelling or delaying classes, the status on this page will
              be updated as early as possible — typically before 6:00 AM on the affected day.
            </p>
            <p>
              <strong className="text-navy">Check this page first</strong> before
              travelling to class on any day with severe weather. Do not rely solely on
              phone calls or word-of-mouth — this page reflects the most current official status.
            </p>
            <p>
              If you have questions or cannot access this site, you may call the office at{" "}
              <a href="tel:5164877830" className="text-navy font-medium hover:underline">
                (516) 487-7830
              </a>{" "}
              or{" "}
              <a href="tel:5164415855" className="text-navy font-medium hover:underline">
                (516) 441-5855
              </a>
              .
            </p>
          </div>
        </section>

        {/* Recent closing history placeholder */}
        <section>
          <h2 className="text-2xl font-bold text-navy mb-4">Recent Closings</h2>
          <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
            {[
              { date: "[Date placeholder]", reason: "[Reason placeholder — e.g., Severe weather — snow emergency]", status: "Closed" },
              { date: "[Date placeholder]", reason: "[Reason placeholder]", status: "Delayed Opening" },
            ].map((entry, i) => (
              <div key={i} className="px-6 py-4 flex items-center gap-4">
                <div className="flex-1">
                  <p className="font-medium text-navy text-sm">{entry.date}</p>
                  <p className="text-charcoal text-sm mt-0.5">{entry.reason}</p>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded ${
                  entry.status === "Closed"
                    ? "bg-crimson/10 text-crimson"
                    : "bg-amber-100 text-amber-800"
                }`}>
                  {entry.status}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-gray-400 italic">
            Placeholder entries — replace with actual closing history.
          </p>
        </section>
      </div>
    </>
  );
}
