"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/enroll", label: "Enroll For Classes", cta: true },
  { href: "/faq", label: "FAQ" },
  { href: "/calendar", label: "School Calendar" },
  { href: "/gallery", label: "Photo Gallery" },
  { href: "/other-programs", label: "Other Programs" },
  { href: "/nycdob-sst", label: "NYCDOB SST" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/emergency-closing", label: "Emergency Closing", alert: true },
  { href: "/contact", label: "Contact Us" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-navy sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="BTE Fund logo"
              width={44}
              height={44}
              className="rounded-full bg-white p-0.5"
              priority
            />
            <span className="text-white font-semibold text-sm leading-tight hidden sm:block">
              Building Trades<br />Educational Fund
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => {
              if (link.cta) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="ml-2 bg-gold text-navy font-semibold px-4 py-2 rounded text-sm hover:bg-gold-dark transition-colors"
                  >
                    {link.label}
                  </Link>
                );
              }
              if (link.alert) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 rounded text-sm font-medium transition-colors text-crimson hover:bg-white/10 ${
                      pathname === link.href ? "bg-white/10" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded text-sm font-medium transition-colors text-white/90 hover:text-white hover:bg-white/10 ${
                    pathname === link.href ? "bg-white/10 text-white" : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2 rounded hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-navy-dark border-t border-white/10">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {links.map((link) => {
              if (link.cta) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="bg-gold text-navy font-semibold px-4 py-3 rounded text-sm text-center mt-1"
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded text-sm font-medium transition-colors ${
                    link.alert
                      ? "text-crimson hover:bg-white/10"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  } ${pathname === link.href ? "bg-white/10" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
