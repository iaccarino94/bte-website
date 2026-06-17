import Link from "next/link";

const affiliatedFunds = [
  { label: "Electrician's Retirement Fund", href: "https://www.electretirementfund.org" },
  { label: "Building Trades Annuity Fund", href: "https://www.btannuityfund.org" },
  { label: "Building Trades Welfare Fund", href: "https://www.btwelfarefund.org" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Identity */}
          <div>
            <h3 className="font-semibold text-gold mb-3 text-sm uppercase tracking-wider">
              BTE Fund
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Building Trades Educational Benefit Fund<br />
              An ERISA-regulated electrical apprenticeship training fund<br />
              serving New York.
            </p>
            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              607 Sunrise Hwy, 2nd Floor<br />
              Bellmore, NY 11710
            </p>
            <p className="mt-3 text-white/70 text-sm">
              <a href="tel:5164877830" className="hover:text-white transition-colors">
                (516) 487-7830
              </a>
              <br />
              <a href="tel:5164415855" className="hover:text-white transition-colors">
                (516) 441-5855
              </a>
            </p>
            <p className="mt-3 text-white/60 text-xs">
              Mon – Fri &nbsp;·&nbsp; 9:00 AM – 5:00 PM
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-gold mb-3 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/enroll" className="hover:text-white transition-colors">Enroll For Classes</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/calendar" className="hover:text-white transition-colors">School Calendar</Link></li>
              <li><Link href="/emergency-closing" className="hover:text-white transition-colors">Emergency Closing</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Affiliated funds */}
          <div>
            <h3 className="font-semibold text-gold mb-3 text-sm uppercase tracking-wider">
              Affiliated Funds
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              {affiliatedFunds.map((fund) => (
                <li key={fund.href}>
                  <a
                    href={fund.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {fund.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://www.dickinsongrp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Plan Administrator (Dickinson Group)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/20">
          <p className="text-white/60 text-xs leading-relaxed mb-4">
            The information provided on this website is for informational purposes only and is not a
            substitute for the Funds' Plan documents. If there are any differences between the
            information on this website and the Funds' Plan documents or other rules and regulations
            governing the Plans, the Funds' Plan documents and other rules and regulations will
            always govern. Links to provider websites are included for your benefit; the providers
            are solely responsible for the content of their own websites.
          </p>
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} Building Trades Educational Benefit Fund. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
