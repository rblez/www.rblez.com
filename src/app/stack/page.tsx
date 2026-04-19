"use client";

import {
  JavaScript,
  TypeScript,
  Python,
  PostgreSQL,
  Nextjs,
  Vite,
  TailwindCSS,
  Nodejs,
  FastAPI,
  Supabase,
  Cloudflare,
  Git,
} from "@ridemountainpig/svgl-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface Tech {
  name: string;
  description: string;
  Icon?: React.ComponentType<{ className?: string }>;
  logo?: string;
  logoDark?: string;
}

// Mix: svgl-react + SVGL API URLs - all in one list
const techs: Tech[] = [
  // Lenguajes
  { name: "JavaScript", Icon: JavaScript, description: "Lenguaje web" },
  { name: "TypeScript", Icon: TypeScript, description: "JS tipado" },
  { name: "Python", Icon: Python, description: "Backend y scripts" },
  { name: "JSON", logo: "https://svgl.app/json.svg", description: "Formato de datos" },
  // Bases de datos
  { name: "PostgreSQL", Icon: PostgreSQL, description: "SQL relacional" },
  { name: "MongoDB", logo: "https://svgl.app/mongodb.svg", description: "NoSQL documental" },
  { name: "Supabase", Icon: Supabase, description: "Backend + PostgreSQL" },
  // Frontend
  { name: "React", logo: "https://svgl.app/react.svg", description: "Biblioteca UI" },
  { name: "Next.js", Icon: Nextjs, description: "Framework React" },
  { name: "Vite", Icon: Vite, description: "Build tool" },
  { name: "Tailwind CSS", Icon: TailwindCSS, description: "Estilos" },
  // Backend
  { name: "Node.js", Icon: Nodejs, description: "Runtime JS" },
  { name: "Express.js", logo: "https://svgl.app/expressjs.svg", logoDark: "https://svgl.app/expressjs-dark.svg", description: "Framework Node" },
  { name: "FastAPI", Icon: FastAPI, description: "Framework Python" },
  { name: "Auth.js", logo: "https://svgl.app/nextauth.svg", logoDark: "https://svgl.app/nextauth-dark.svg", description: "Autenticación" },
  // Hosting
  { name: "Vercel", logo: "https://svgl.app/vercel.svg", logoDark: "https://svgl.app/vercel-dark.svg", description: "Deploy frontend" },
  { name: "Cloudflare", Icon: Cloudflare, description: "Edge + DNS" },
  { name: "AWS", logo: "https://svgl.app/aws.svg", logoDark: "https://svgl.app/aws-dark.svg", description: "Cloud computing" },
  { name: "Google Cloud", logo: "https://svgl.app/googlecloud.svg", description: "Cloud platform" },
  { name: "Contabo", logo: "https://svgl.app/contabo.svg", description: "VPS hosting" },
  // Herramientas
  { name: "Git", Icon: Git, description: "Control de versiones" },
  { name: "GitHub", logo: "https://svgl.app/github.svg", logoDark: "https://svgl.app/github-dark.svg", description: "Repositorios" },
  { name: "NVM", logo: "https://svgl.app/nvm.svg", description: "Node version manager" },
  { name: "NPM", logo: "https://svgl.app/npm.svg", description: "Package manager" },
  { name: "PNPM", logo: "https://svgl.app/pnpm.svg", description: "Package manager" },
  { name: "MCP", logo: "https://svgl.app/mcp.svg", description: "Model Context Protocol" },
];

export default function StackPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      <Header />

      <div className="max-w-6xl mx-auto px-4 pt-20 pb-8 sm:pt-24 sm:pb-12 w-full flex-1">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-black dark:text-white">
          Stack
        </h1>
        <p className="text-lg text-black/60 dark:text-white/60 mb-8">
          Tecnologías que uso para construir productos digitales.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {techs.map((tech) => (
                  <a
                    key={tech.name}
                    href={`https://www.google.com/search?q=${tech.name}+technology`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-4 border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all"
                  >
                    {/* Link icon - bottom right on hover */}
                    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <i className="ri-external-link-line text-xs text-black/40 dark:text-white/40"></i>
                    </div>
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center relative">
                        {tech.Icon ? (
                          <tech.Icon className="w-8 h-8" />
                        ) : tech.logo ? (
                          <>
                            <img
                              src={tech.logo}
                              alt={tech.name}
                              className={`w-8 h-8 object-contain ${tech.logoDark ? 'dark:hidden' : ''}`}
                            />
                            {tech.logoDark && (
                              <img
                                src={tech.logoDark}
                                alt={tech.name}
                                className="w-8 h-8 object-contain hidden dark:block absolute"
                              />
                            )}
                          </>
                        ) : null}
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
                  </a>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
