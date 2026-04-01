"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiProtonmail } from "@icons-pack/react-simple-icons";

const navLinks = [
  { name: "Blog", href: "/blog" },
  { name: "Stack", href: "/stack" },
  { name: "Projects", href: "/projects" },
  { name: "Branding", href: "/branding" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar - Language Notice */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black dark:bg-white text-white dark:text-black text-xs py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.148" />
              </svg>
              <span>EN / ES</span>
            </span>
            <span className="text-white/60 dark:text-black/60">|</span>
            <span>This site is in English</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="fixed top-8 left-0 right-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-black/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left: Logo */}
            <Link href="/" className="w-8 h-8">
              <Image
                src="/isotipe.svg"
                alt="rblez"
                width={32}
                height={32}
                className="w-full h-full brightness-0 invert"
              />
            </Link>

            {/* Center: Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm uppercase tracking-wider text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right: Contact + Mobile Menu */}
            <div className="flex items-center gap-2">
              <a
                href="mailto:rblez@proton.me"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <SiProtonmail size={16} />
              </a>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-black/10 dark:border-white/10 mt-2">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm uppercase tracking-wider text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
