import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function RBlezClubPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      <Header />

      <div className="max-w-4xl mx-auto px-4 pt-24 pb-8 sm:pt-28 sm:pb-12 w-full flex-1">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-black dark:text-white">
            rblezClub
          </h1>
          <p className="text-lg text-black/60 dark:text-white/60 max-w-2xl mx-auto">
            El club exclusivo para desarrolladores y creadores que quieren llevar sus proyectos al siguiente nivel.
          </p>
        </div>

        {/* Hero Section */}
        <div className="p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-black/5 to-white/5 dark:from-white/5 dark:to-black/5 mb-12">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
            🎯 Únete al Club
          </h2>
          <p className="text-black/60 dark:text-white/60 mb-6">
            Accede a contenido exclusivo, recursos premium y una comunidad de desarrolladores apasionados.
          </p>
          <Link
            href="/newsletter"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium hover:opacity-90 transition-opacity"
          >
            Suscribirse ahora
          </Link>
        </div>

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-black dark:text-white mb-6">
            Beneficios
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Contenido exclusivo", desc: "Artículos y tutoriales solo para miembros" },
              { title: "Recursos premium", desc: "Plantillas, componentes y herramientas" },
              { title: "Comunidad privada", desc: "Acceso al Discord exclusivo" },
              { title: "Early access", desc: "Primer acceso a nuevos proyectos" },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="p-4 rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5"
              >
                <h3 className="font-medium text-black dark:text-white mb-1">
                  {benefit.title}
                </h3>
                <p className="text-sm text-black/60 dark:text-white/60">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
