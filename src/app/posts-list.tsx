"use client";

import Link from "next/link";

interface Post {
  id: string;
  date: string;
  title: string;
  views?: number;
  viewsFormatted?: string;
}

export function PostsList({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-2">
      {posts.map((post) => {
        const year = new Date(post.date).getFullYear();

        return (
          <div key={post.id} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-800">
            <Link
              href={`/posts/${post.id}`}
              className="text-gray-900 dark:text-gray-100 hover:underline"
            >
              {post.title}
            </Link>
            <span className="text-sm text-gray-500">{year}</span>
          </div>
        );
      })}
    </div>
  );
}
