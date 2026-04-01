"use client";

import Image from "next/image";
import Link from "next/link";
import { SiProtonmail } from "@icons-pack/react-simple-icons";

const navLinks = [
  { name: "Blog", href: "/blog" },
  { name: "Stack", href: "/stack" },
  { name: "Projects", href: "/projects" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-black/10 dark:border-white/10">
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

            {/* Right: Contact */}
            <div className="flex items-center gap-2">
              <a
                href="mailto:rblez@proton.me"
                className="inline-flex items-center justify-center px-3 py-1.5 rounded-lg bg-black dark:bg-white text-white dark:text-black text-[10px] sm:text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity"
              >
                <SiProtonmail size={12} />
              </a>
            </div>
          </div>
        </div>
      </header>
  );
}
