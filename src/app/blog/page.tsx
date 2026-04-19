import { posts } from "#site/content";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function BlogPage() {
  const publishedPosts = posts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      <Header />

      <div className="max-w-4xl mx-auto px-4 pt-24 pb-8 sm:pt-28 sm:pb-12 w-full flex-1">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-black dark:text-white">
          Blog
        </h1>
        <p className="text-lg text-black/60 dark:text-white/60 mb-12">
          Artículos sobre tecnología, desarrollo, y más.
        </p>

        {publishedPosts.length === 0 ? (
          <p className="text-black/60 dark:text-white/60">
            No hay artículos todavía. ¡Vuelve pronto!
          </p>
        ) : (
          <div className="grid gap-8">
            {publishedPosts.map((post) => {
              const cleanSlug = post.slug.replace("blog/", "");
              const postDate = new Date(post.date);
              const year = postDate.getFullYear();
              const month = String(postDate.getMonth() + 1).padStart(2, "0");
              const day = String(postDate.getDate()).padStart(2, "0");
              const dateUrl = `/blog/${year}/${month}/${day}/${cleanSlug}`;
              return (
                <article
                  key={post.slug}
                  className="group p-4 sm:p-6 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all min-w-0 overflow-hidden"
                >
                  <Link href={dateUrl} className="block min-w-0">
                    <h2 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-2 group-hover:text-black/80 dark:group-hover:text-white/80 transition-colors break-words hyphens-auto">
                      {post.title}
                    </h2>
                    {post.description && (
                      <p className="text-sm text-black/60 dark:text-white/60 mb-4 break-words">
                        {post.description}
                      </p>
                    )}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-black/40 dark:text-white/40">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 rounded-full bg-black/10 dark:bg-white/10 text-black/60 dark:text-white/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
