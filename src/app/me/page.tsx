"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SiX,
  SiGithub,
  SiTelegram,
  SiInstagram,
  SiFacebook,
  SiBluesky,
  SiThreads,
  SiDevdotto,
} from "@icons-pack/react-simple-icons";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const socialLinks = [
  { name: "X", icon: SiX, url: "https://x.com/rblezX" },
  { name: "GitHub", icon: SiGithub, url: "https://github.com/rblez" },
  { name: "Telegram", icon: SiTelegram, url: "https://t.me/rblezX" },
  { name: "Instagram", icon: SiInstagram, url: "https://instagram.com/rblez.build" },
  { name: "Facebook", icon: SiFacebook, url: "https://www.facebook.com/profile.php?id=61586051213241" },
  { name: "Bluesky", icon: SiBluesky, url: "https://bsky.app/profile/rblez.bsky.social" },
  { name: "Threads", icon: SiThreads, url: "https://threads.net/@rblez.build" },
  { name: "Dev.to", icon: SiDevdotto, url: "https://dev.to/rblez" },
];

export default function Me() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden pb-16">
      {/* Liquid Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-black/5 dark:bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-black/5 dark:bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] bg-black/3 dark:bg-white/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12 relative">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* Profile Section */}
        <section className="grid sm:grid-cols-[auto_1fr] gap-8 items-center mb-16">
          <div className="flex justify-center sm:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-white/20 dark:from-white/20 dark:to-black/20 rounded-full blur-3xl" />
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-black/5 dark:border-white/5">
                <Image
                  src="/isotipo.png"
                  alt="Ray - rblez"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-black dark:text-white">
              Ray (rblez)
            </h1>
            <p className="text-lg text-black/60 dark:text-white/60 mb-4">
              Vibecoder
            </p>
            <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed max-w-lg">
              Developer passionate about creating unique digital experiences. 
              I love exploring new technologies, experimenting with artificial intelligence, 
              and building tools that solve real problems. Always learning, always creating.
            </p>
          </div>
        </section>

        {/* Social Links */}
        <section className="flex justify-center gap-1 sm:gap-2 mb-16 flex-wrap">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-all hover:scale-110"
              aria-label={social.name}
            >
              <social.icon size={24} />
            </a>
          ))}
        </section>
      </div>

      <Footer />
    </div>
  );
}
