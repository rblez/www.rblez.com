import { notFound } from "next/navigation";
import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-content";
import BlogPostClient from "./blog-post-client";
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
      slug: post.slug.replace(/^blog\//, '').split("/"),
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const slugPath = `blog/${slug.join("/")}`;
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const slugPath = `blog/${slug.join("/")}`;
  const post = posts.find((p) => p.slug === slugPath);

  if (!post || !post.published) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}
