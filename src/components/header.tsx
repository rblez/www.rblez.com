"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiGithub } from "@icons-pack/react-simple-icons";

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export function Header({ menuOpen, setMenuOpen }: HeaderProps) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/me", label: "Me" },
    { href: "/stack", label: "Stack" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu - Full Screen */}
      <div className={`fixed inset-0 bg-white dark:bg-black z-50 transform transition-transform duration-300 lg:hidden ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
          >
            <i className="ri-close-line text-3xl"></i>
          </button>
          <nav className="text-center space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-4xl font-bold transition-colors ${
                  pathname === link.href
                    ? "text-black dark:text-white"
                    : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <header className="mb-8 sm:mb-12">
        <div className="flex items-center justify-between mb-4">
          {/* Left: Logo */}
          <Link href="/me" className="w-8 h-8">
            <Image
              src="/isotipe.svg"
              alt="rblez"
              width={32}
              height={32}
              className="w-full h-full brightness-0 invert"
            />
          </Link>

          {/* Right: Desktop Nav + Hamburger + GitHub */}
          <div className="flex items-center gap-1">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 mr-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium overflow-hidden group ${
                    pathname === link.href
                      ? "text-black dark:text-white"
                      : "text-black/60 dark:text-white/60"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-black dark:bg-white transition-all duration-300 ${
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Mobile Hamburger - 2 lines animated */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden p-2 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Menu"
            >
              <div className="w-5 relative flex flex-col justify-center">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[5px]' : '-translate-y-[2px]'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0 rotate-45' : 'opacity-100 translate-y-[2px]'}`}></span>
              </div>
            </button>

            {/* GitHub Repo */}
            <a
              href="https://github.com/rblez/rblez.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
              aria-label="GitHub Repo"
            >
              <SiGithub size={22} />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
