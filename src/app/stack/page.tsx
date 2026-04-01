"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiVercel,
  SiGithub,
  SiPython,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiCloudflare,
  SiCursor,
  SiGit,
  SiVite,
  SiPnpm,
  SiNpm,
  SiSupabase,
  SiGithubactions,
  SiFastapi,
  SiBun,
  SiDiscord,
  SiTelegram,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";

const techCategories = [
  {
    name: "Frontend",
    techs: [
      { name: "React", icon: SiReact, description: "Main UI library" },
      { name: "Next.js", icon: SiNextdotjs, description: "React framework" },
      { name: "TypeScript", icon: SiTypescript, description: "Type safety" },
      { name: "Tailwind CSS", icon: SiTailwindcss, description: "Utility-first styles" },
    ],
  },
  {
    name: "Backend",
    techs: [
      { name: "Node.js", icon: SiNodedotjs, description: "JavaScript runtime" },
      { name: "Python", icon: SiPython, description: "Versatile language" },
      { name: "FastAPI", icon: SiFastapi, description: "Fast Python API" },
    ],
  },
  {
    name: "Serverless & Cloud",
    techs: [
      { name: "Vercel", icon: SiVercel, description: "Deploy & CI/CD" },
      { name: "Cloudflare", icon: SiCloudflare, description: "Edge & CDN" },
      { name: "Supabase", icon: SiSupabase, description: "Backend as a Service" },
    ],
  },
  {
    name: "IA & ML",
    techs: [],
  },
  {
    name: "Coding Tools",
    techs: [
      { name: "Cursor", icon: SiCursor, description: "AI-powered editor" },
      { name: "Git", icon: SiGit, description: "Version control" },
      { name: "GitHub", icon: SiGithub, description: "Repositories" },
      { name: "GitHub Actions", icon: SiGithubactions, description: "CI/CD" },
      { name: "Vite", icon: SiVite, description: "Fast build tool" },
      { name: "pnpm", icon: SiPnpm, description: "Package manager" },
      { name: "npm", icon: SiNpm, description: "Package registry" },
      { name: "Bun", icon: SiBun, description: "Fast runtime" },
    ],
  },
  {
    name: "DevOps & Infra",
    techs: [
      { name: "Docker", icon: SiDocker, description: "Containers" },
    ],
  },
  {
    name: "Database",
    techs: [
      { name: "PostgreSQL", icon: SiPostgresql, description: "Relational SQL" },
      { name: "MongoDB", icon: SiMongodb, description: "NoSQL" },
    ],
  },
  {
    name: "Monitoring",
    techs: [],
  },
  {
    name: "Security",
    techs: [],
  },
  {
    name: "Mobile",
    techs: [],
  },
  {
    name: "Desktop",
    techs: [],
  },
];

export default function StackPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = selectedCategory
    ? techCategories.filter((cat) => cat.name === selectedCategory)
    : techCategories;

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      <Header />

      <div className="max-w-6xl mx-auto px-4 pt-24 pb-8 sm:pt-28 sm:pb-12 w-full flex-1">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-black dark:text-white">
          Tech Stack
        </h1>
        <p className="text-lg text-black/60 dark:text-white/60 mb-8">
          All the technologies I use to build digital products.
        </p>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
              selectedCategory === null
                ? "bg-black dark:bg-white text-white dark:text-black"
                : "bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60 hover:bg-black/10 dark:hover:bg-white/10"
            }`}
          >
            All
          </button>
          {techCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                selectedCategory === category.name
                  ? "bg-black dark:bg-white text-white dark:text-black"
                  : "bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60 hover:bg-black/10 dark:hover:bg-white/10"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        {filteredCategories.map((category) => (
          <section key={category.name} className="mb-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {category.techs.map((tech) => (
                <div
                  key={tech.name}
                  className="group p-6 border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all"
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <tech.icon size={32} />
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

      <Footer />
    </div>
  );
}
