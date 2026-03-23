"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { MDXContent } from "@/components/mdx-content";
import type { Post } from "#site/content";

interface BlogPostClientProps {
  post: Post;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const [menuOpen, setMenuOpen] = useState(false);

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
            <Link
              href="/me"
              className="block text-4xl font-bold text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Me
            </Link>
            <Link
              href="/stack"
              className="block text-4xl font-bold text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Stack
            </Link>
          </nav>
        </div>
      </div>

      <div className="min-h-screen bg-white dark:bg-black relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px]" />

        <article className="max-w-2xl mx-auto px-4 py-8 sm:py-12 relative">
          {/* Header */}
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

              {/* Right: Hamburger + GitHub */}
              <div className="flex items-center gap-1">
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

          <header className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2 sm:mb-3">{post.title}</h1>
            <p className="text-sm text-black/50 dark:text-white/50">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </header>
          <div className="prose dark:prose-invert max-w-none text-black dark:text-white">
            <MDXContent code={post.body} />
          </div>
        </article>
      </div>
    </>
  );
}
