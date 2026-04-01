import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      <Header />

      <div className="max-w-3xl mx-auto px-4 pt-24 pb-8 sm:pt-28 sm:pb-12 w-full flex-1">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black dark:text-white">
          Disclaimer
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-black/60 dark:text-white/60 mb-8">
            Última actualización: 1 de abril, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              1. Propósito informativo
            </h2>
            <p className="text-black/60 dark:text-white/60">
              Todo el contenido de este sitio es solo para fines informativos y educativos. 
              No proporcionamos asesoramiento profesional.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              2. Sin garantías
            </h2>
            <p className="text-black/60 dark:text-white/60">
              La información se proporciona "tal cual" sin garantías de ningún tipo, expresas o 
              implícitas. No garantizamos que la información sea precisa, completa o actualizada.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              3. Enlaces externos
            </h2>
            <p className="text-black/60 dark:text-white/60">
              Este sitio puede contener enlaces a sitios web de terceros. No tenemos control sobre 
              el contenido de esos sitios y no asumimos responsabilidad por ellos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              4. Resultados no garantizados
            </h2>
            <p className="text-black/60 dark:text-white/60">
              Cualquier resultado mencionado en este sitio no garantiza resultados similares. 
              Los resultados dependen de muchos factores individuales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              5. Responsabilidad limitada
            </h2>
            <p className="text-black/60 dark:text-white/60">
              En ningún caso seremos responsables de daños directos, indirectos, incidentales o 
              consecuentes derivados del uso de este sitio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              6. Contacto
            </h2>
            <p className="text-black/60 dark:text-white/60">
              Para preguntas sobre este disclaimer, contáctanos en:{' '}
              <a href="mailto:rblez@proton.me" className="text-blue-600 dark:text-blue-400 hover:underline">
                rblez@proton.me
              </a>
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
