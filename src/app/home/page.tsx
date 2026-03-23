"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  SiX,
  SiInstagram,
  SiFacebook,
  SiBluesky,
  SiThreads,
  SiDevdotto,
  SiTelegram,
  SiCursor,
  SiClaude,
} from "@icons-pack/react-simple-icons";

interface Tool {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  category: string;
  description: string;
  color?: string;
}

const tools: Tool[] = [
  // Frontend
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend", description: "Framework React para producción" },
  { name: "React", icon: SiReact, category: "Frontend", description: "Librería UI declarativa" },
  { name: "Framer", icon: SiFramer, category: "Frontend", description: "Animaciones y prototipos" },
  { name: "TypeScript", icon: SiTypescript, category: "Frontend", description: "JavaScript con tipos" },
  { name: "Tailwind", icon: SiTailwindcss, category: "Frontend", description: "CSS utility-first" },
  
  // Backend
  { name: "Python", icon: SiPython, category: "Backend", description: "Lenguaje versátil" },
  { name: "Node.js", icon: SiNodedotjs, category: "Backend", description: "JS en el servidor" },
  { name: "FastAPI", icon: SiFastapi, category: "Backend", description: "APIs modernas" },
  { name: "Supabase", icon: SiSupabase, category: "Backend", description: "Backend como servicio" },
  { name: "MongoDB", icon: SiMongodb, category: "Backend", description: "Base de datos NoSQL" },
  { name: "Clerk", icon: SiClerk, category: "Backend", description: "Autenticación simple" },
  
  // Deploy & DevOps
  { name: "Vercel", icon: SiVercel, category: "Deploy", description: "Deploy frontend" },
  { name: "Railway", icon: SiRailway, category: "Deploy", description: "Cloud platform" },
  { name: "Docker", icon: SiDocker, category: "Deploy", description: "Contenedores" },
  { name: "GitHub", icon: SiGithub, category: "Deploy", description: "Control de versiones" },
  
  // AI & Tools
  { name: "OpenRouter", icon: SiOpenrouter, category: "AI", description: "API de modelos AI" },
  { name: "Claude", icon: SiClaude, category: "AI", description: "AI asistente" },
  { name: "Cursor", icon: SiCursor, category: "AI", description: "Editor con AI" },
  
  // Communication
  { name: "Resend", icon: SiResend, category: "Communication", description: "Email API" },
];

const categories = ["Todos", "Frontend", "Backend", "Deploy", "AI", "Communication"];

const socialLinks = [
  { name: "X", icon: SiX, url: "https://x.com/rblezX" },
  { name: "GitHub", icon: SiGithub, url: "https://github.com/rblez" },
  { name: "Telegram", icon: SiTelegram, url: "https://t.me/rblez" },
  { name: "Instagram", icon: SiInstagram, url: "https://instagram.com/rblez" },
  { name: "Facebook", icon: SiFacebook, url: "https://facebook.com/rblez" },
  { name: "Bluesky", icon: SiBluesky, url: "https://bsky.app/profile/rblez.com" },
  { name: "Threads", icon: SiThreads, url: "https://threads.net/@rblez" },
  { name: "Dev.to", icon: SiDevdotto, url: "https://dev.to/rblez" },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredTools = activeCategory === "Todos" 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#1a1a1a] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 relative">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div className="w-10 h-10">
            <Image
              src="/isotipe.svg"
              alt="rblez"
              width={40}
              height={40}
              className="w-full h-full brightness-0 invert"
            />
          </div>

          <nav className="flex gap-3">
            {socialLinks.slice(0, 2).map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label={social.name}
              >
                <social.icon size={24} />
              </a>
            ))}
          </nav>
        </header>

        {/* Profile Section */}
        <section className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl ring-4 ring-gray-100 dark:ring-gray-800">
              <Image
                src="/ray.png"
                alt="Ray - rblez"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Ray (rblez)
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            Vibecoder de Cuba 🇨
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 max-w-md mx-auto leading-relaxed">
            Desarrollador apasionado por crear experiencias digitales únicas. 
            Me encanta explorar nuevas tecnologías y compartir lo que aprendo.
          </p>
        </section>

        {/* CTA Buttons */}
        <section className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:scale-105 shadow-lg shadow-gray-900/20"
          >
            <i className="ri-article-line"></i>
            Blog
          </Link>
        </section>

        {/* Social Links */}
        <section className="flex justify-center gap-2 mb-12 flex-wrap">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white transition-all hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl"
              aria-label={social.name}
            >
              <social.icon size={22} />
            </a>
          ))}
        </section>

        {/* Stack Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold mb-2">Stack Tecnológico</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Las herramientas que uso para crear magia
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
            {filteredTools.map((tool) => (
              <div
                key={tool.name}
                className="group p-4 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all hover:shadow-lg hover:shadow-gray-900/5 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center gap-2">
                  <tool.icon 
                    size={36} 
                    className="text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-200" 
                  />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                    {tool.name}
                  </span>
                  <span className="text-[10px] text-gray-400 dark:text-gray-500 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {tool.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Tools count */}
          <p className="text-center text-xs text-gray-400 dark:text-gray-600 mt-6">
            {filteredTools.length} {filteredTools.length === 1 ? 'herramienta' : 'herramientas'}
            {activeCategory !== "Todos" && ` en ${activeCategory}`}
          </p>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2026 rblez. Todos los derechos reservados.</p>
            <p>Hecho con ❤️ en Cuba</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
