"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const mainLinks = [
  { name: "Blog", href: "/blog", description: "Artículos sobre tecnología y desarrollo" },
  { name: "Stack", href: "/stack", description: "Mi stack tecnológico" },
  { name: "Projects", href: "/projects", description: "Proyectos en los que trabajo" },
  { name: "Branding", href: "/branding", description: "Identidad visual y marca" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      <Header />

      <div className="max-w-6xl mx-auto px-4 pt-24 pb-8 sm:pt-28 sm:pb-12 w-full flex-1">
        {/* Profile Section */}
        <section className="grid md:grid-cols-[auto_1fr] gap-8 items-center mb-16 mt-8">
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-white/20 dark:from-white/20 dark:to-black/20 rounded-full blur-3xl" />
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-black/5 dark:border-white/5">
                <Image
                  src="/obito.png"
                  alt="Ray"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-black dark:text-white">
              Ray
            </h1>
            <p className="text-lg text-black/60 dark:text-white/60 mb-4">
              Solopreneur
            </p>
            <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed max-w-lg">
              Developer passionate about creating unique digital experiences.
              I love exploring new technologies, experimenting with artificial intelligence,
              and building tools that solve real problems. Always learning, always creating.
            </p>
          </div>
        </section>


        {/* Main Navigation Links */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {mainLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group p-4 border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all hover:scale-[1.02]"
            >
              <h2 className="text-lg font-semibold text-black dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {link.name}
              </h2>
              <p className="text-sm text-black/60 dark:text-white/60">
                {link.description}
              </p>
            </Link>
          ))}
        </section>
      </div>

      <Footer />
    </div>
  );
}
