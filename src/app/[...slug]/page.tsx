import { notFound } from "next/navigation";
import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-content";
import { Header } from "@/components/header";
import type { Metadata } from "next";

interface CatchAllPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  return posts
    .filter((post) => post.published)
    .map((post) => ({
      slug: post.slug.split("/"),
    }));
}

export async function generateMetadata({ params }: CatchAllPageProps): Promise<Metadata> {
  const { slug } = await params;
  const slugPath = slug.join("/");
  const post = posts.find((p) => p.slug === slugPath);

  if (!post) {
    return {
      title: "Not Found",
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

export default async function CatchAllPage({ params }: CatchAllPageProps) {
  const { slug } = await params;
  const slugPath = slug.join("/");
  const post = posts.find((p) => p.slug === slugPath);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-[#0a0a0a] dark:to-[#111] relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <article className="max-w-2xl mx-auto px-4 py-8 sm:py-12 relative">
        <Header />
        <header className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3">{post.title}</h1>
          <p className="text-sm text-gray-500">
            {new Date(post.date).toLocaleDateString("en-US", {
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
