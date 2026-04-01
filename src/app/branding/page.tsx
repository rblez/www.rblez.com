"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SiGithub, SiReact } from "@icons-pack/react-simple-icons";

const colors = [
  { name: "Black", value: "#000000", description: "Primary" },
  { name: "White", value: "#FFFFFF", description: "Background" },
  { name: "Neutral 100", value: "#F5F5F5", description: "Light" },
  { name: "Neutral 900", value: "#171717", description: "Dark" },
];

const fonts = [
  {
    name: "GT Sectra",
    usage: "Display (H1-H6)",
    license: "Licencia comercial requerida",
    formats: [".ttf", ".otf", ".woff2"],
  },
  {
    name: "GT Cinetype",
    usage: "Sans (Cuerpo, UI)",
    license: "Licencia comercial requerida",
    formats: [".ttf", ".otf", ".woff2"],
  },
  {
    name: "GT Cinetype Mono",
    usage: "Código, elementos técnicos",
    license: "Licencia comercial requerida",
    formats: [".ttf", ".otf", ".woff2"],
  },
];

export default function BrandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      <Header />

      <div className="max-w-6xl mx-auto px-4 pt-24 pb-8 sm:pt-28 sm:pb-12 w-full flex-1">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-black dark:text-white">
          Branding
        </h1>
        <p className="text-lg text-black/60 dark:text-white/60 mb-12">
          Identidad visual, assets de marca y guías de uso.
        </p>

        {/* Isotipo */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-black dark:text-white mb-6">
            Isotipo
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="p-8 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center">
              <div className="w-32 h-32">
                {/* Placeholder isotipo - reemplazar con imagen real */}
                <div className="w-full h-full bg-black rounded-lg" />
              </div>
            </div>
            <div className="p-8 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center">
              <div className="w-32 h-32">
                {/* Placeholder isotipo dark */}
                <div className="w-full h-full bg-white rounded-lg border border-black/10" />
              </div>
            </div>
          </div>

          {/* Descargas */}
          <div className="p-6 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
              Descargar Isotipo
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <a
                href="/isotipo.svg"
                download="rblez-isotipo.svg"
                className="flex items-center gap-3 p-4 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              >
                <SiGithub size={24} />
                <div>
                  <p className="font-medium text-black dark:text-white">SVG</p>
                  <p className="text-xs text-black/60 dark:text-white/60">Vector escalable</p>
                </div>
              </a>
              <a
                href="/isotipo.png"
                download="rblez-isotipo.png"
                className="flex items-center gap-3 p-4 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className="w-4 h-4 bg-black/60 rounded-sm" />
                </div>
                <div>
                  <p className="font-medium text-black dark:text-white">PNG</p>
                  <p className="text-xs text-black/60 dark:text-white/60">Raster con transparencia</p>
                </div>
              </a>
              <button
                onClick={() => {
                  // Aquí iría la lógica para copiar el componente React
                  navigator.clipboard.writeText(`<Image src="/isotipo.svg" alt="rblez" width={32} height={32} />`);
                }}
                className="flex items-center gap-3 p-4 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              >
                <SiReact size={24} />
                <div>
                  <p className="font-medium text-black dark:text-white">React</p>
                  <p className="text-xs text-black/60 dark:text-white/60">Componente</p>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Colores */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-black dark:text-white mb-6">
            Colores
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {colors.map((color) => (
              <div
                key={color.name}
                className="p-4 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5"
              >
                <div
                  className="h-20 rounded-lg mb-3 border border-black/10"
                  style={{ backgroundColor: color.value }}
                />
                <p className="font-medium text-black dark:text-white text-sm">
                  {color.name}
                </p>
                <p className="text-xs text-black/60 dark:text-white/60 font-mono">
                  {color.value}
                </p>
                <p className="text-xs text-black/40 dark:text-white/40 mt-1">
                  {color.description}
                </p>
              </div>
            ))}
          </div>

          {/* Nota sobre colores */}
          <div className="mt-6 p-4 rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
            <p className="text-sm text-black/60 dark:text-white/60">
              <strong className="text-black dark:text-white">Nota:</strong> El diseño utiliza exclusivamente una paleta monocromática. 
              Los colores se aplican mediante variables CSS y clases de Tailwind para soportar modo claro y oscuro automáticamente.
            </p>
          </div>
        </section>

        {/* Tipografía */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-black dark:text-white mb-6">
            Tipografía
          </h2>
          <div className="space-y-6">
            {fonts.map((font) => (
              <div
                key={font.name}
                className="p-6 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white">
                      {font.name}
                    </h3>
                    <p className="text-sm text-black/60 dark:text-white/60">
                      {font.usage}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {font.formats.map((format) => (
                      <span
                        key={format}
                        className="px-2 py-1 rounded text-xs bg-black/10 dark:bg-white/10 text-black/60 dark:text-white/60"
                      >
                        {format}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-amber-600 dark:text-amber-400">
                  ⚠️ {font.license}
                </p>
              </div>
            ))}
          </div>

          {/* Nota sobre fuentes */}
          <div className="mt-6 p-4 rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Importante:</strong> Las fuentes GT (GT Sectra, GT Cinetype) están protegidas por licencia comercial. 
              Para uso personal o comercial, debes adquirir la licencia correspondiente en{" "}
              <a
                href="https://www.grillitype.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium"
              >
                Grilli Type
              </a>
              .
            </p>
          </div>
        </section>

        {/* Uso de marca */}
        <section>
          <h2 className="text-xl font-semibold text-black dark:text-white mb-6">
            Uso de Marca
          </h2>
          <div className="space-y-4">
            <div className="p-6 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
              <h3 className="font-semibold text-black dark:text-white mb-2">
                ✅ Uso permitido
              </h3>
              <ul className="text-sm text-black/60 dark:text-white/60 space-y-1 list-disc ml-5">
                <li>Proyectos personales y portafolios</li>
                <li>Contenido educativo y tutoriales</li>
                <li>Colaboraciones oficiales con rblez</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
              <h3 className="font-semibold text-black dark:text-white mb-2">
                ❌ Uso no permitido
              </h3>
              <ul className="text-sm text-black/60 dark:text-white/60 space-y-1 list-disc ml-5">
                <li>Productos comerciales sin autorización</li>
                <li>Suplantación de identidad</li>
                <li>Contenido ilegal o dañino</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
