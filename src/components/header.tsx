import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
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
  );
}
