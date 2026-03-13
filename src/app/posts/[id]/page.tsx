import { notFound } from "next/navigation";
import { getPosts } from "../../get-posts";
import postsData from "../../posts.json";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return postsData.posts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const post = postsData.posts.find((p) => p.id === id);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - rblez`,
    description: post.title,
    openGraph: {
      title: `${post.title} - rblez`,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.title,
      site: "@rblezX",
      creator: "@rblezX",
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { id } = await params;
  const post = postsData.posts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  let MDXContent;
  try {
    MDXContent = (await import(`../../../../posts/${id}.mdx`)).default;
  } catch (error) {
    notFound();
  }

  if (!MDXContent) {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500">{post.date}</p>
      </header>
      <div className="prose dark:prose-invert max-w-none">
        <MDXContent />
      </div>
    </article>
  );
}
