import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about the BTE electrical apprenticeship program — eligibility, cost, schedule, pay, and more.",
};

const faqs = [
  {
    question: "What is the Building Trades Educational Benefit Fund?",
    answer:
      "The Building Trades Educational Benefit Fund (BTE) is an ERISA-regulated jointly-trusteed fund that administers electrical apprenticeship training for members of Local 363-A, United Service Workers Union (USWU) — part of IUJAT (International Union of Journeymen and Allied Trades) — and the contractors who employ them in New York. The fund covers the cost of related instruction for enrolled apprentices.",
  },
  {
    question: "Who is eligible to participate in the apprenticeship program?",
    answer:
      "To be eligible, you must be employed by an electrical contractor that is signatory to the Local 363-A, USWU collective bargaining agreement, or be in the process of securing such employment. Your employer makes contributions to the fund on your behalf, which covers the cost of your training.",
  },
  {
    question: "How much does the program cost the apprentice?",
    answer:
      "Nothing. The cost of classroom instruction is fully covered by employer contributions to the BTE Fund. Apprentices attend classes at no personal expense. You are paid for your on-the-job training hours as a regular employee.",
  },
  {
    question: "How long is the apprenticeship program?",
    answer:
      "The program is five years (ten semesters). Each year consists of approximately 180 hours of related classroom instruction and 1,600 to 2,000 hours of on-the-job training under a licensed journeyperson electrician.",
  },
  {
    question: "What is the pay rate for apprentices?",
    answer:
      "Apprentice wages are set as a percentage of the journeyperson electrician rate established in the collective bargaining agreement. The percentage increases each year as you advance through the program — so your pay grows as your skills grow. By the time you complete all five years, you earn full journeyperson wages.",
  },
  {
    question: "What subjects are covered in the classroom portion?",
    answer:
      "Coursework covers electrical theory, the National Electrical Code (NEC), blueprint reading, motor controls, conduit bending, load calculations, fire alarm systems, safety practices, and trade mathematics, among other topics. The curriculum advances in complexity each year.",
  },
  {
    question: "Is the program approved or recognized by the state?",
    answer:
      "Yes. The apprenticeship program is registered with the New York State Department of Labor (NYSDOL) as a recognized apprenticeship program. BTE also assists signatory contractors in registering their own apprenticeship programs with NYSDOL.",
  },
  {
    question: "What is on-the-job training (OJT)?",
    answer:
      "OJT is the work experience component of the apprenticeship. You are employed by a signatory contractor and work under the direct supervision of a licensed journeyperson electrician on actual job sites. This is where you develop real-world competency. OJT hours are tracked and must be completed each year to advance.",
  },
  {
    question: "Do I need prior electrical experience to apply?",
    answer:
      "Not necessarily. The program is designed to train individuals from the ground up. However, some basic aptitude for mathematics and mechanical work is helpful. Contact our office if you have questions about your specific background.",
  },
  {
    question: "Can I transfer into the program from another apprenticeship?",
    answer:
      "Transfers from other registered apprenticeship programs may be possible depending on your progress and the comparability of prior coursework and OJT hours. Contact our office directly to discuss your situation.",
  },
  {
    question: "What happens after I complete the five-year program?",
    answer:
      "Upon successful completion of all coursework and OJT requirements, you become a licensed journeyperson electrician. You can continue your career with a signatory contractor, pursue journeyperson upgrade courses, or explore supervisory and specialty training through our other programs.",
  },
  {
    question: "How do I apply or enroll?",
    answer:
      "You can submit an enrollment application online through the Enroll For Classes page on this site, or contact our office by phone to get started. Have your employer contact information ready, as we will verify your employment with a signatory contractor.",
  },
];

export default function FaqPage() {
  return (
    <>
      <div className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-white/80 text-xl max-w-2xl">
            Answers to common questions about our electrical apprenticeship program,
            eligibility, pay, and more.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FaqAccordion items={faqs} />

        <div className="mt-12 bg-navy rounded-xl p-8 text-white text-center">
          <h2 className="text-xl font-bold mb-3">Still have questions?</h2>
          <p className="text-white/80 mb-6">
            Our staff is happy to help. Give us a call or send a message.
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
