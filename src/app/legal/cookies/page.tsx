import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      <Header />

      <div className="max-w-3xl mx-auto px-4 pt-24 pb-8 sm:pt-28 sm:pb-12 w-full flex-1">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black dark:text-white">
          Cookie Policy
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-black/60 dark:text-white/60 mb-8">
            Última actualización: 1 de abril, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              1. ¿Qué son las cookies?
            </h2>
            <p className="text-black/60 dark:text-white/60">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando 
              visitas un sitio web. Se usan ampliamente para hacer que los sitios web funcionen 
              correctamente y proporcionar información a los propietarios del sitio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              2. Cookies que usamos
            </h2>
            <p className="text-black/60 dark:text-white/60 mb-4">
              Este sitio puede usar los siguientes tipos de cookies:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2 text-black/60 dark:text-white/60">
              <li>
                <strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio
              </li>
              <li>
                <strong>Cookies de análisis:</strong> Nos ayudan a entender cómo usas el sitio
              </li>
              <li>
                <strong>Cookies de preferencias:</strong> Recuerdan tus configuraciones
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              3. Cookies de terceros
            </h2>
            <p className="text-black/60 dark:text-white/60">
              Algunos servicios de terceros que usamos pueden colocar cookies en tu dispositivo:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2 text-black/60 dark:text-white/60">
              <li>Vercel Analytics (análisis de tráfico)</li>
              <li>GitHub (integración de repositorios)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              4. Gestionar cookies
            </h2>
            <p className="text-black/60 dark:text-white/60 mb-4">
              Puedes controlar y eliminar las cookies como desees. La mayoría de los navegadores 
              te permiten:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2 text-black/60 dark:text-white/60">
              <li>Ver qué cookies están almacenadas</li>
              <li>Eliminar todas las cookies</li>
              <li>Bloquear cookies de sitios específicos</li>
              <li>Bloquear cookies de terceros</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              5. Efectos de deshabilitar cookies
            </h2>
            <p className="text-black/60 dark:text-white/60">
              Si deshabilitas las cookies, algunas funciones del sitio pueden no estar disponibles 
              o no funcionar correctamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              6. Contacto
            </h2>
            <p className="text-black/60 dark:text-white/60">
              Para preguntas sobre cookies, contáctanos en:{' '}
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
