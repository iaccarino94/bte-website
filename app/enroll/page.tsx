import type { Metadata } from "next";
import EnrollForm from "@/components/EnrollForm";

export const metadata: Metadata = {
  title: "Enroll For Classes",
  description:
    "Apply for the BTE electrical apprenticeship program. Complete the enrollment application to get started — no cost to apprentices.",
};

export default function EnrollPage() {
  return (
    <>
      <div className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Enroll For Classes</h1>
          <p className="text-white/80 text-xl max-w-2xl">
            Complete the application below to begin the enrollment process. All fields marked
            with <span className="text-crimson font-bold">*</span> are required. A member of
            our staff will follow up to confirm your placement.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8 bg-offwhite rounded-lg p-6 border border-gray-200">
          <h2 className="font-semibold text-navy mb-2">Before You Apply</h2>
          <ul className="space-y-2 text-charcoal text-sm leading-relaxed list-disc list-inside">
            <li>
              You must be employed by, or in the process of being hired by, a contractor
              signatory to the IBEW collective bargaining agreement.
            </li>
            <li>
              The apprenticeship program is provided at <strong>no cost</strong> to the apprentice.
              Employer contributions fund your training.
            </li>
            <li>
              If you have questions before applying, call us at{" "}
              <a href="tel:5164877830" className="text-navy font-medium hover:underline">
                (516) 487-7830
              </a>{" "}
              or{" "}
              <a href="tel:5164415855" className="text-navy font-medium hover:underline">
                (516) 441-5855
              </a>
              .
            </li>
          </ul>
        </div>

        <EnrollForm />
      </div>
    </>
  );
}
