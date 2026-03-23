"use client";

import { useState } from "react";
import { posts } from "#site/content";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

const publishedPosts = posts
  .filter((post) => post.published)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function Blog() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden pb-16">
      {/* Liquid Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-black/5 dark:bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-black/5 dark:bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] bg-black/3 dark:bg-white/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12 relative flex-1 flex flex-col">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-8">Blog</h1>

        <section className="space-y-4 sm:space-y-6 flex-1">
          {publishedPosts.map((post) => {
            const cleanSlug = post.slug.replace(/^blog\//, '');
            return (
              <article key={post.slug} className="group">
                <Link href={`/blog/${cleanSlug}`} className="block">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h2 className="text-base sm:text-lg font-semibold text-black dark:text-white group-hover:underline">
                        {post.title}
                      </h2>
                    </div>
                    <time className="text-xs text-black/50 dark:text-white/50 whitespace-nowrap">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </Link>
              </article>
            );
          })}
        </section>
      </div>

      <Footer />
    </div>
  );
}
