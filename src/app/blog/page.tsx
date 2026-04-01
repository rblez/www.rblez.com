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
          Articles about technology, development, and more.
        </p>

        {publishedPosts.length === 0 ? (
          <p className="text-black/60 dark:text-white/60">
            No posts yet. Check back soon!
          </p>
        ) : (
          <div className="grid gap-8">
            {publishedPosts.map((post) => {
              const cleanSlug = post.slug.replace("blog/", "");
              return (
                <article
                  key={post.slug}
                  className="group p-6 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all"
                >
                  <Link href={`/blog/${cleanSlug}`}>
                    <h2 className="text-xl font-semibold text-black dark:text-white mb-2 group-hover:text-black/80 dark:group-hover:text-white/80 transition-colors">
                      {post.title}
                    </h2>
                    {post.description && (
                      <p className="text-sm text-black/60 dark:text-white/60 mb-4">
                        {post.description}
                      </p>
                    )}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-black/40 dark:text-white/40">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
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
