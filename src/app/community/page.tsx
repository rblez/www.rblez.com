import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const communityLinks = [
  {
    name: "rblezClub",
    description: "Únete al club exclusivo de desarrolladores y creadores.",
    icon: "🎯",
    href: "/rblezclub",
  },
  {
    name: "Newsletter",
    description: "Recibe actualizaciones semanales sobre nuevos contenidos y proyectos.",
    icon: "📧",
    href: "/newsletter",
  },
  {
    name: "Discord",
    description: "Únete a nuestro servidor de Discord para conversar en tiempo real.",
    icon: "💬",
    href: "/discord",
  },
  {
    name: "GitHub",
    description: "Explora mis repositorios y contribuye a proyectos open source.",
    icon: "🐙",
    href: "/github",
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      <Header />

      <div className="max-w-4xl mx-auto px-4 pt-24 pb-8 sm:pt-28 sm:pb-12 w-full flex-1">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-black dark:text-white">
          Community
        </h1>
        <p className="text-lg text-black/60 dark:text-white/60 mb-12">
          Conecta con otros desarrolladores y sé parte de la comunidad.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {communityLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group p-6 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all hover:scale-[1.02]"
            >
              <div className="text-4xl mb-4">{link.icon}</div>
              <h2 className="text-xl font-semibold text-black dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {link.name}
              </h2>
              <p className="text-sm text-black/60 dark:text-white/60">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
