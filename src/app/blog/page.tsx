import { posts } from "#site/content";
import Image from "next/image";
import Link from "next/link";

const publishedPosts = posts
  .filter((post) => post.published)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-[#0a0a0a] dark:to-[#111] relative flex flex-col">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12 relative flex-1 flex flex-col">
        <header className="mb-8 sm:mb-12">
          <div className="flex items-center justify-between mb-4">
            <Link href="/home" className="w-8 h-8">
              <Image
                src="/isotipe.svg"
                alt="rblez"
                width={32}
                height={32}
                className="w-full h-full brightness-0 invert"
              />
            </Link>

            <nav className="flex gap-4 text-sm">
              <a
                href="https://x.com/rblezX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                aria-label="Twitter"
              >
                <i className="ri-twitter-x-line text-lg"></i>
              </a>
              <a
                href="https://github.com/rblez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                aria-label="GitHub"
              >
                <i className="ri-github-fill text-lg"></i>
              </a>
            </nav>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold">Blog</h1>
        </header>

        <section className="space-y-4 sm:space-y-6 flex-1">
          {publishedPosts.map((post) => {
            // Eliminar el prefijo 'blog/' del slug para la URL
            const cleanSlug = post.slug.replace(/^blog\//, '');
            return (
              <article key={post.slug} className="group">
                <Link href={`/blog/${cleanSlug}`} className="block">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h2 className="text-base sm:text-lg font-semibold group-hover:underline">
                        {post.title}
                      </h2>
                    </div>
                    <time className="text-xs text-gray-500 whitespace-nowrap">
                      {new Date(post.date).toLocaleDateString("es-ES", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </Link>
              </article>
            );
          })}
        </section>

        <footer className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-center text-sm text-gray-500">
            <p>© 2026 rblez. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
