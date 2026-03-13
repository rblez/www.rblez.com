export function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-500">
      <p>
        © {new Date().getFullYear()} rblez. Built with{" "}
        <a
          href="https://nextjs.org"
          className="text-gray-700 underline hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://mdxjs.com"
          className="text-gray-700 underline hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          MDX
        </a>
        .
      </p>
    </footer>
  );
}
