"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SiNextdotjs,
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
  SiProtonmail,
  SiCloudflare,
  SiModelcontextprotocol,
} from "@icons-pack/react-simple-icons";

interface Tool {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  category: string;
  description: string;
}

const tools: Tool[] = [
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend", description: "Framework React para producción" },
  { name: "Framer", icon: SiFramer, category: "Frontend", description: "Animaciones y prototipos" },
  { name: "TypeScript", icon: SiTypescript, category: "Frontend", description: "JavaScript con tipos" },
  { name: "Tailwind", icon: SiTailwindcss, category: "Frontend", description: "CSS utility-first" },
  
  { name: "Python", icon: SiPython, category: "Backend", description: "Lenguaje versátil" },
  { name: "Node.js", icon: SiNodedotjs, category: "Backend", description: "JS en el servidor" },
  { name: "FastAPI", icon: SiFastapi, category: "Backend", description: "APIs modernas" },
  { name: "Supabase", icon: SiSupabase, category: "Backend", description: "Backend como servicio" },
  { name: "MongoDB", icon: SiMongodb, category: "Backend", description: "Base de datos NoSQL" },
  { name: "Clerk", icon: SiClerk, category: "Backend", description: "Autenticación simple" },
  
  { name: "Vercel", icon: SiVercel, category: "Deploy", description: "Deploy frontend" },
  { name: "Railway", icon: SiRailway, category: "Deploy", description: "Cloud platform" },
  { name: "Docker", icon: SiDocker, category: "Deploy", description: "Contenedores" },
  { name: "GitHub", icon: SiGithub, category: "Deploy", description: "Control de versiones" },
  
  { name: "OpenRouter", icon: SiOpenrouter, category: "AI", description: "API de modelos AI" },
  { name: "Claude", icon: SiClaude, category: "AI", description: "AI asistente" },
  { name: "Cursor", icon: SiCursor, category: "AI", description: "Editor con AI" },
  
  { name: "Proton Mail", icon: SiProtonmail, category: "Security", description: "Email encriptado" },
  { name: "Cloudflare", icon: SiCloudflare, category: "Security", description: "Seguridad y CDN" },
  { name: "MCP", icon: SiModelcontextprotocol, category: "Security", description: "Model Context Protocol" },
  
  { name: "Resend", icon: SiResend, category: "Communication", description: "Email API" },
];

const categories = ["Todos", "Frontend", "Backend", "Deploy", "AI", "Security", "Communication"];

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
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      {/* Liquid Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-black/5 dark:bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-black/5 dark:bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] bg-black/3 dark:bg-white/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 relative">
        {/* Header */}
        <header className="flex items-center justify-between mb-16">
          <div className="w-10 h-10">
            <Image
              src="/isotipe.svg"
              alt="rblez"
              width={40}
              height={40}
              className="w-full h-full brightness-0 invert"
            />
          </div>

          <nav className="flex gap-1">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-all hover:scale-110"
                aria-label={social.name}
              >
                <social.icon size={20} />
              </a>
            ))}
          </nav>
        </header>

        {/* Profile Section */}
        <section className="text-center mb-16">
          <div className="inline-block mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-white/20 dark:from-white/20 dark:to-black/20 rounded-full blur-3xl" />
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden">
                <Image
                  src="/ray.png"
                  alt="Ray - rblez"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover grayscale"
                  priority
                />
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-black dark:text-white">
            Ray (rblez)
          </h1>
          <p className="text-lg text-black/60 dark:text-white/60 mb-4">
            Vibecoder de Cuba
          </p>
          <p className="text-sm text-black/50 dark:text-white/50 max-w-md mx-auto leading-relaxed">
            Desarrollador apasionado por crear experiencias digitales únicas. 
            Me encanta explorar nuevas tecnologías y compartir lo que aprendo.
          </p>
        </section>

        {/* CTA Buttons */}
        <section className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-black/80 dark:hover:bg-white/80 transition-all hover:scale-105"
          >
            <i className="ri-article-line"></i>
            Blog
          </Link>
        </section>

        {/* Stack Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-xl font-bold text-black dark:text-white mb-2">
              Stack Tecnológico
            </h2>
            <p className="text-sm text-black/50 dark:text-white/50">
              Las herramientas que uso para crear magia
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
              <div
                key={tool.name}
                className="group flex flex-col items-center gap-2"
              >
                <tool.icon 
                  size={40} 
                  className="text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-white group-hover:scale-110 transition-all duration-200" 
                />
                <span className="text-[10px] font-medium text-black/60 dark:text-white/60 text-center group-hover:text-black dark:group-hover:text-white transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>

          {/* Tools count */}
          <p className="text-center text-xs text-black/30 dark:text-white/30 mt-8">
            {filteredTools.length} {filteredTools.length === 1 ? 'herramienta' : 'herramientas'}
            {activeCategory !== "Todos" && ` en ${activeCategory}`}
          </p>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-black/10 dark:border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-black/40 dark:text-white/40">
            <p>© 2026 rblez. Todos los derechos reservados.</p>
            <p>Hecho en Cuba</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
