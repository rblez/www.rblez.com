import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "rblez | Solopreneur Construyendo Productos Digitales",
  description: "Solopreneur enfocado en construir, lanzar y monetizar productos digitales con simplicidad, velocidad y utilidad real.",
  openGraph: {
    title: "rblez | Solopreneur",
    description: "Construyendo productos digitales con simplicidad, velocidad y utilidad real.",
    type: "profile",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      <Header />

      <div className="max-w-6xl mx-auto px-4 pt-20 pb-8 sm:pt-24 sm:pb-12 w-full flex-1">
        {/* Profile Section with Sticky Avatar */}
        <section className="grid md:grid-cols-[auto_1fr] gap-8 lg:gap-12">
          {/* Sticky Avatar Column */}
          <div className="hidden md:block">
            <div className="sticky top-32">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-white/20 dark:from-white/20 dark:to-black/20 rounded-full blur-2xl" />
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-black/5 dark:border-white/5">
                  <Image
                    src="/ray.png"
                    alt="Ray - rblez"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="mt-6">
                <h1 className="text-2xl font-bold text-black dark:text-white">
                  Ray (rblez)
                </h1>
                <p className="text-sm text-black/60 dark:text-white/60">
                  Solopreneur
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Avatar (not sticky) */}
          <div className="md:hidden mb-8">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-white/20 dark:from-white/20 dark:to-black/20 rounded-full blur-2xl" />
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-black/5 dark:border-white/5">
                  <Image
                    src="/ray.png"
                    alt="Ray - rblez"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-black dark:text-white">
                  Ray (rblez)
                </h1>
                <p className="text-sm text-black/60 dark:text-white/60">
                  Solopreneur
                </p>
              </div>
            </div>
          </div>

          {/* About Text Column */}
          <div className="max-w-2xl">
            <div className="space-y-6 text-black/70 dark:text-white/70 leading-relaxed">
              <p className="text-base sm:text-lg">
                Soy Ray, también conocido como <strong className="text-black dark:text-white font-semibold">rblez</strong> — un solopreneur enfocado en construir, lanzar y monetizar productos digitales con énfasis en simplicidad, velocidad y utilidad real.
              </p>

              <p className="text-base sm:text-lg">
                Trabajo de forma independiente, manejando todo el ciclo de vida de un producto: desde la idea y validación hasta el diseño, desarrollo, distribución y ventas. No separo roles — los integro. Esto me permite moverme más rápido, tomar decisiones sin fricción y mantenerme alineado con el objetivo final: <em className="text-black dark:text-white">crear productos que funcionen y generen resultados</em>.
              </p>

              <p className="text-base sm:text-lg">
                Mi enfoque está arraigado en el <strong className="text-black dark:text-white font-semibold">minimalismo</strong>. Evito la complejidad innecesaria, tanto en tecnología como en estrategia. Creo que la mayoría de productos fracasan no por falta de características, sino por intentar hacer demasiado sin resolver un problema claro. Por eso me enfoco en construir soluciones funcionales y eficientes que puedan probarse y mejorarse rápidamente.
              </p>

              <p className="text-base sm:text-lg">
                No me interesa construir por construir. Cada proyecto en el que trabajo está vinculado a un objetivo mayor: crear fuentes de ingreso sostenibles e independencia a largo plazo a través de la tecnología. Eso significa priorizar:
              </p>

              <ul className="list-disc ml-6 space-y-2 text-base sm:text-lg">
                <li>Validación sobre perfección</li>
                <li>Distribución sobre estética</li>
                <li>Ejecución sobre planificación interminable</li>
              </ul>

              <p className="text-base sm:text-lg">
                Una parte clave de mi enfoque es trabajar dentro de <strong className="text-black dark:text-white font-semibold">entornos con restricciones</strong>. En lugar de ver las limitaciones como obstáculos, las trato como insumos de diseño. Esto me ha llevado a explorar sistemas alternativos — como flujos de ventas basados en WhatsApp y transacciones con cripto — como soluciones prácticas para problemas reales donde la infraestructura tradicional es limitada o no está disponible.
              </p>

              <p className="text-base sm:text-lg">
                Me interesan particularmente los <strong className="text-black dark:text-white font-semibold">modelos de distribución simples</strong>. No dependo de embudos de marketing complejos o adquisición pagada a gran escala. En su lugar, busco formas directas y de baja fricción para conectar productos con usuarios — sistemas que sean fáciles de implementar, fáciles de gestionar y efectivos para generar conversiones.
              </p>

              <p className="text-base sm:text-lg">
                También refinó continuamente mis herramientas y flujos de trabajo. No me comprometo con un stack fijo o ideología. Uso lo que funciona, descarto lo que no, y optimizo para la eficiencia en cada paso. <em className="text-black dark:text-white">La adaptabilidad es un principio fundamental</em> en cómo opero.
              </p>

              <p className="text-base sm:text-lg">
                Trabajar solo ha moldeado mi forma de pensar. Fuerza claridad, responsabilidad y enfoque. No hay espacio para sobreingeniería o decisiones innecesarias — todo debe servir a un propósito. Esta restricción me ha ayudado a desarrollar una mentalidad centrada en la propiedad y responsabilidad, donde los resultados dependen enteramente de la ejecución.
              </p>

              <p className="text-base sm:text-lg">
                Valoro:
              </p>

              <ul className="list-disc ml-6 space-y-2 text-base sm:text-lg">
                <li>Resultados sobre opiniones</li>
                <li>Claridad sobre hype</li>
                <li>Consistencia sobre ráfagas cortas de motivación</li>
              </ul>

              <p className="text-base sm:text-lg">
                No busco seguir tendencias o replicar lo que otros hacen. En su lugar, me enfoco en construir sistemas que sean prácticos, repetibles y capaces de generar apalancamiento con el tiempo.
              </p>

              <p className="text-base sm:text-lg font-semibold text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
                No intento construirlo todo. Estoy construyendo lo que funciona — y mejorándolo implacablemente.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
