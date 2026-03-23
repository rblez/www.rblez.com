import { notFound } from "next/navigation";
import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-content";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  return posts
    .filter((post) => post.published)
    .map((post) => ({
      // Eliminar el prefijo 'blog/' del slug para la URL
      slug: post.slug.replace(/^blog\//, '').split("/"),
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const slugPath = `blog/${slug.join("/")}`;
  const post = posts.find((p) => p.slug === slugPath);

  if (!post) {
    return {
      title: "No encontrado",
    };
  }

  return {
    title: `${post.title} - rblez`,
    description: post.description,
    openGraph: {
      title: `${post.title} - rblez`,
      type: "article",
      publishedTime: post.date,
      images: ["/x.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      site: "@rblezX",
      creator: "@rblezX",
      images: ["/x.png"],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const slugPath = `blog/${slug.join("/")}`;
  const post = posts.find((p) => p.slug === slugPath);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-[#0a0a0a] dark:to-[#111] relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

      <article className="max-w-2xl mx-auto px-4 py-8 sm:py-12 relative">
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
        </header>
        <header className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3">{post.title}</h1>
          <p className="text-sm text-gray-500">
            {new Date(post.date).toLocaleDateString("es-ES", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </header>
        <div className="prose dark:prose-invert max-w-none">
          <MDXContent code={post.body} />
        </div>
      </article>
    </div>
  );
}
