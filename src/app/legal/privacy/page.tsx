import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      <Header />

      <div className="max-w-3xl mx-auto px-4 pt-24 pb-8 sm:pt-28 sm:pb-12 w-full flex-1">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black dark:text-white">
          Privacy Policy
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-black/60 dark:text-white/60 mb-8">
            Última actualización: 1 de abril, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              1. Información que recopilamos
            </h2>
            <p className="text-black/60 dark:text-white/60">
              Este sitio no recopila información personal identificable. Podemos usar servicios de 
              terceros que pueden recopilar información anónima para análisis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              2. Cookies
            </h2>
            <p className="text-black/60 dark:text-white/60">
              Este sitio puede usar cookies para mejorar la experiencia del usuario. Las cookies son 
              pequeños archivos de texto que se almacenan en tu dispositivo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              3. Servicios de terceros
            </h2>
            <p className="text-black/60 dark:text-white/60">
              Este sitio puede usar servicios de terceros como:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2 text-black/60 dark:text-white/60">
              <li>Vercel (hosting)</li>
              <li>GitHub (control de versiones)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              4. Newsletter
            </h2>
            <p className="text-black/60 dark:text-white/60">
              Si te suscribes al newsletter, recopilaremos tu dirección de correo electrónico. 
              Puedes darte de baja en cualquier momento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              5. Tus derechos
            </h2>
            <p className="text-black/60 dark:text-white/60">
              Tienes derecho a:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2 text-black/60 dark:text-white/60">
              <li>Acceder a tus datos personales</li>
              <li>Corregir datos inexactos</li>
              <li>Solicitar la eliminación de datos</li>
              <li>Darte de baja del newsletter</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              6. Contacto
            </h2>
            <p className="text-black/60 dark:text-white/60">
              Para preguntas sobre privacidad, contáctanos en:{' '}
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
