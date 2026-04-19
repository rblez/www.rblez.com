import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden flex items-center justify-center">
      {/* Liquid Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-black/5 dark:bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-black/5 dark:bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-md mx-auto px-4 text-center relative">
        <div className="w-16 h-16 mx-auto mb-8">
          <Image
            src="/isotipe.svg"
            alt="rblez"
            width={64}
            height={64}
            className="w-full h-full brightness-0 invert opacity-50"
          />
        </div>
        
        <h1 className="text-6xl font-bold text-black/20 dark:text-white/20 mb-4">
          404
        </h1>
        <p className="text-lg text-black/60 dark:text-white/60 mb-8">
          Página no encontrada
        </p>
        
        <Link 
          href="/?s=404"
          className="inline-flex items-center justify-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-black/80 dark:hover:bg-white/80 transition-all hover:scale-105"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
