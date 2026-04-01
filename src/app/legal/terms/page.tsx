import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      <Header />

      <div className="max-w-3xl mx-auto px-4 pt-24 pb-8 sm:pt-28 sm:pb-12 w-full flex-1">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black dark:text-white">
          Terms of Service
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-black/60 dark:text-white/60 mb-8">
            Última actualización: 1 de abril, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              1. Aceptación de los términos
            </h2>
            <p className="text-black/60 dark:text-white/60">
              Al acceder y usar este sitio web, aceptas estar obligado por estos Términos de Servicio. 
              Si no estás de acuerdo con estos términos, por favor no uses este sitio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              2. Uso del sitio
            </h2>
            <p className="text-black/60 dark:text-white/60">
              Este sitio es para uso personal e informativo. No puedes usar este sitio para:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2 text-black/60 dark:text-white/60">
              <li>Actividades ilegales o no autorizadas</li>
              <li>Violar derechos de propiedad intelectual</li>
              <li>Transmitir malware o código malicioso</li>
              <li>Interferir con el funcionamiento del sitio</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              3. Contenido
            </h2>
            <p className="text-black/60 dark:text-white/60">
              Todo el contenido de este sitio (texto, gráficos, logos, imágenes) es propiedad del 
              autor y está protegido por leyes de derechos de autor.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              4. Limitación de responsabilidad
            </h2>
            <p className="text-black/60 dark:text-white/60">
              Este sitio se proporciona "tal cual" sin garantías de ningún tipo. No somos responsables 
              de daños directos, indirectos o consecuentes derivados del uso de este sitio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              5. Modificaciones
            </h2>
            <p className="text-black/60 dark:text-white/60">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios 
              entrarán en vigor inmediatamente después de su publicación.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              6. Contacto
            </h2>
            <p className="text-black/60 dark:text-white/60">
              Para preguntas sobre estos términos, contáctanos en:{' '}
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
