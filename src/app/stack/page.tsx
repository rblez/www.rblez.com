"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiGithub,
  SiVercel,
  SiCloudflare,
  SiSupabase,
  SiProtonmail,
  SiResend,
  SiClerk,
} from "@icons-pack/react-simple-icons";
import { BetterAuthDark, OpenCodeDark, QwenDark, VisualStudioCode } from "@ridemountainpig/svgl-react";
import { style } from "motion/react-client";
import { color } from "motion";

const techCategories = [
  {
    name: "Frontend",
    techs: [
      { name: "React", icon: SiReact, description: "UI Library" },
      { name: "Next.js", icon: SiNextdotjs, description: "React Framework" },
      { name: "Tailwind CSS", icon: SiTailwindcss, description: "Styling" },
    ],
  },
  {
    name: "Backend & Database",
    techs: [
      { name: "Supabase", icon: SiSupabase, description: "Backend as a Service" },
      { name: "MongoDB", icon: SiMongodb, description: "NoSQL Database" },
    ],
  },
  {
    name: "Auth",
    techs: [
      { name: "Clerk", icon: SiClerk, description: "Authentication" },
      { name: "Better Auth", icon: BetterAuthDark, description: "Auth Framework" },
    ],
  },
  {
    name: "Email",
    techs: [
      { name: "ProtonMail", icon: SiProtonmail, description: "Secure Email" },
      { name: "Resend", icon: SiResend, description: "Email API" },
    ],
  },
  {
    name: "Infrastructure",
    techs: [
      { name: "Vercel", icon: SiVercel, description: "Deploy & Hosting" },
      { name: "Cloudflare", icon: SiCloudflare, description: "Edge & CDN" },
      { name: "GitHub", icon: SiGithub, description: "Version Control" },
    ],
  },
  {
    name: "AI & Tools",
    techs: [
      { name: "Qwen", icon: QwenDark, description: "AI Model" },
      { name: "OpenCode", icon: OpenCodeDark, description: "Code Editor" },
    ],
  },
];

export default function StackPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      <Header />

      <div className="max-w-6xl mx-auto px-4 pt-20 pb-8 sm:pt-24 sm:pb-12 w-full flex-1">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-black dark:text-white">
          Tech Stack
        </h1>
        <p className="text-lg text-black/60 dark:text-white/60 mb-8">
          Technologies I use to build digital products.
        </p>

        <div className="grid gap-12">
          {techCategories.map((category) => (
            <section key={category.name}>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {category.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="group p-4 border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all"
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center text-black dark:text-white">
                        {typeof tech.icon === "function" && tech.icon.toString().includes("svg") ? (
                          <tech.icon className="w-8 h-8" />
                        ) : (
                          <tech.icon size={32} />
                        )}
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-black dark:text-white">
                          {tech.name}
                        </h3>
                        <p className="text-xs text-black/60 dark:text-white/60 mt-1">
                          {tech.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
