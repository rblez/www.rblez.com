import Link from "next/link";
import { getPosts } from "./get-posts";
import { PostsList } from "./posts-list";

export const revalidate = 300;

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <header className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold">rblez</h1>
          <Link
            href="/about"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            About
          </Link>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          Personal blog by Ray. Writing about web development, technology, and
          more.
        </p>
        <div className="mt-4 flex gap-4 text-sm">
          <a
            href="https://x.com/rblezX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            Twitter
          </a>
          <a
            href="https://github.com/rblez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            GitHub
          </a>
        </div>
      </header>

      <PostsList posts={posts} />
    </div>
  );
}
