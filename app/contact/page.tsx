import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Building Trades Educational Benefit Fund. Call us or send a message and we'll respond promptly.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/80 text-xl max-w-2xl">
            Have questions about enrollment, the apprenticeship program, or your training
            schedule? We&apos;re here to help.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-navy mb-4">Office Information</h2>
              <div className="space-y-4 text-charcoal text-sm leading-relaxed">
                <div>
                  <p className="font-semibold text-navy mb-1">Address</p>
                  <p>
                    [Address Placeholder]<br />
                    New York, NY 00000
                  </p>
                  <p className="text-xs text-gray-400 mt-1 italic">Address will be confirmed — placeholder for now</p>
                </div>
                <div>
                  <p className="font-semibold text-navy mb-1">Phone</p>
                  <a href="tel:5164877830" className="block hover:text-navy transition-colors">
                    (516) 487-7830
                  </a>
                  <a href="tel:5164415855" className="block hover:text-navy transition-colors">
                    (516) 441-5855
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-4">Office Hours</h2>
              <div className="space-y-1 text-charcoal text-sm">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="font-medium">[Hours TBD]</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday – Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2 italic">Office hours will be confirmed — placeholder for now</p>
            </div>

            <div className="bg-offwhite rounded-lg p-5">
              <h3 className="font-semibold text-navy text-sm mb-2">Plan Administrator</h3>
              <p className="text-charcoal text-sm leading-relaxed">
                For plan document inquiries, contribution questions, or administrative
                matters, contact our plan administrator:
              </p>
              <a
                href="https://www.dickinsongrp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-navy text-sm font-medium hover:underline"
              >
                Dickinson Group →
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-navy mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
