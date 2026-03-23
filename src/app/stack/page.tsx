"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  SiNextdotjs,
  SiReact,
  SiFramer,
  SiSupabase,
  SiPython,
  SiNodedotjs,
  SiFastapi,
  SiVercel,
  SiRailway,
  SiOpenrouter,
  SiGithub,
  SiDocker,
  SiResend,
  SiClerk,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiProtonmail,
  SiCloudflare,
  SiCursor,
  SiClaude,
  SiModelcontextprotocol,
} from "@icons-pack/react-simple-icons";

const categories = ["All", "Frontend", "Backend", "Deploy", "AI", "Security", "Communication"];

const toolsByCategory = {
  Frontend: [
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiReact, name: "React" },
    { icon: SiFramer, name: "Framer" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiTailwindcss, name: "Tailwind" },
  ],
  Backend: [
    { icon: SiPython, name: "Python" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiFastapi, name: "FastAPI" },
    { icon: SiSupabase, name: "Supabase" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiClerk, name: "Clerk" },
  ],
  Deploy: [
    { icon: SiVercel, name: "Vercel" },
    { icon: SiRailway, name: "Railway" },
    { icon: SiDocker, name: "Docker" },
    { icon: SiGithub, name: "GitHub" },
  ],
  AI: [
    { icon: SiOpenrouter, name: "OpenRouter" },
    { icon: SiClaude, name: "Claude" },
    { icon: SiCursor, name: "Cursor" },
  ],
  Security: [
    { icon: SiProtonmail, name: "Proton Mail" },
    { icon: SiCloudflare, name: "Cloudflare" },
    { icon: SiModelcontextprotocol, name: "MCP" },
  ],
  Communication: [
    { icon: SiResend, name: "Resend" },
  ],
};

export default function Stack() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTools = activeCategory === "All"
    ? Object.values(toolsByCategory).flat()
    : toolsByCategory[activeCategory as keyof typeof toolsByCategory];

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden pb-16">
      {/* Liquid Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-black/5 dark:bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-black/5 dark:bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] bg-black/3 dark:bg-white/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12 relative">
        <Header menuOpen={false} setMenuOpen={() => {}} />

        {/* Stack Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-xl font-bold text-black dark:text-white mb-2">
              Tech Stack
            </h2>
            <p className="text-sm text-black/50 dark:text-white/50">
              Tools I use to create magic
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-black dark:bg-white text-white dark:text-black"
                    : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4 sm:gap-6">
            {filteredTools.map((tool) => (
              <a
                key={tool.name}
                href="#"
                className="group flex flex-col items-center gap-2"
              >
                <tool.icon
                  size={40}
                  className="text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-white group-hover:scale-110 transition-all duration-200"
                />
                <span className="text-[10px] font-medium text-black/60 dark:text-white/60 text-center group-hover:text-black dark:group-hover:text-white transition-colors">
                  {tool.name}
                </span>
              </a>
            ))}
          </div>

          {/* Tools count */}
          <p className="text-center text-xs text-black/30 dark:text-white/30 mt-8">
            {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'}
            {activeCategory !== "All" && ` in ${activeCategory}`}
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
