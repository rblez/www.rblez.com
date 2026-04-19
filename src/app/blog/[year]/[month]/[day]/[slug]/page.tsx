import { posts } from "#site/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MDXContent } from "@/components/mdx-content";
import { ArticleSchema, BreadcrumbSchema } from "@/components/structured-data";

interface BlogPostPageProps {
  params: Promise<{
    year: string;
    month: string;
    day: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return posts.map((post) => {
    const date = new Date(post.date);
    const cleanSlug = post.slug.replace("blog/", "");
    return {
      year: date.getFullYear().toString(),
      month: String(date.getMonth() + 1).padStart(2, "0"),
      day: String(date.getDate()).padStart(2, "0"),
      slug: cleanSlug,
    };
  });
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug.replace("blog/", "") === slug);

  if (!post) {
    return {
      title: "Artículo no encontrado",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author || "Ray"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { year, month, day, slug } = await params;
  const post = posts.find((p) => p.slug.replace("blog/", "") === slug);

  if (!post || !post.published) {
    notFound();
  }

  const datePath = `${year}/${month}/${day}`;
  const fullUrl = `https://rblez.com/blog/${datePath}/${slug}`;

  const breadcrumbItems = [
    { name: "Inicio", url: "https://rblez.com" },
    { name: "Blog", url: "https://rblez.com/blog" },
    { name: post.title, url: fullUrl },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      <ArticleSchema
        title={post.title}
        description={post.description}
        slug={`blog/${datePath}/${slug}`}
        date={post.date}
        tags={post.tags || []}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Header />

      <article className="max-w-3xl mx-auto px-4 pt-24 pb-8 sm:pt-28 sm:pb-12 w-full flex-1">
        {/* Header del post */}
        <header className="mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al blog
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-black dark:text-white">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-black/60 dark:text-white/60">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.author && (
              <>
                <span>•</span>
                <span>{post.author}</span>
              </>
            )}
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs bg-black/10 dark:bg-white/10 text-black/60 dark:text-white/60"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Contenido del post */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <MDXContent code={post.body} />
        </div>
      </article>

      <Footer />
    </div>
  );
}
