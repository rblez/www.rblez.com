"use client";

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

const logos = [
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiReact, name: "React" },
  { icon: SiFramer, name: "Framer" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiPython, name: "Python" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiFastapi, name: "FastAPI" },
  { icon: SiSupabase, name: "Supabase" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiClerk, name: "Clerk" },
  { icon: SiVercel, name: "Vercel" },
  { icon: SiRailway, name: "Railway" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiOpenrouter, name: "OpenRouter" },
  { icon: SiClaude, name: "Claude" },
  { icon: SiCursor, name: "Cursor" },
  { icon: SiProtonmail, name: "Proton Mail" },
  { icon: SiCloudflare, name: "Cloudflare" },
  { icon: SiModelcontextprotocol, name: "MCP" },
  { icon: SiResend, name: "Resend" },
];

export function StackedLogos() {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4 sm:gap-6">
      {logos.map((logo) => (
        <a
          key={logo.name}
          href="#"
          className="group flex flex-col items-center gap-2"
        >
          <logo.icon
            size={40}
            className="text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-white group-hover:scale-110 transition-all duration-200"
          />
          <span className="text-[10px] font-medium text-black/60 dark:text-white/60 text-center group-hover:text-black dark:group-hover:text-white transition-colors">
            {logo.name}
          </span>
        </a>
      ))}
    </div>
  );
}
