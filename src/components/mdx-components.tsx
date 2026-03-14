import Link from "next/link";
import Image from "next/image";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    img: (props) => (
      <div className="relative w-full my-8">
        <Image
          {...props}
          className="rounded-lg object-contain"
          width={props.width || 800}
          height={props.height || 450}
          alt={props.alt || ""}
          sizes="(max-width: 768px) 100vw, 800px"
        />
        {props.alt && (
          <p className="text-sm text-gray-500 text-center mt-2">{props.alt}</p>
        )}
      </div>
    ),
    h1: (props) => (
      <h1 className="text-3xl font-bold mt-8 mb-4 [&>a]:text-inherit [&>a]:hover:underline" {...props} />
    ),
    h2: (props) => (
      <h2 className="text-2xl font-semibold mt-8 mb-4 [&>a]:text-inherit [&>a]:hover:underline" {...props} />
    ),
    h3: (props) => (
      <h3 className="text-xl font-semibold mt-6 mb-3 [&>a]:text-inherit [&>a]:hover:underline" {...props} />
    ),
    p: (props) => (
      <p className="text-base leading-7 mb-6" {...props} />
    ),
    ul: (props) => (
      <ul className="list-disc list-outside ml-6 mb-6 space-y-2" {...props} />
    ),
    ol: (props) => (
      <ol className="list-decimal list-outside ml-6 mb-6 space-y-2" {...props} />
    ),
    li: (props) => (
      <li className="text-base leading-7" {...props} />
    ),
    a: (props) => {
      const href = props.href || "";
      const isExternal = href.startsWith("http");
      return (
        <Link
          {...props}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-blue-600 hover:underline dark:text-blue-400 font-medium"
        />
      );
    },
    blockquote: (props) => (
      <blockquote
        {...props}
        className="border-l-2 border-gray-300 dark:border-gray-600 pl-4 my-6 italic text-gray-700 dark:text-gray-300"
      />
    ),
    strong: (props) => <strong className="font-semibold" {...props} />,
    hr: () => <hr className="my-8 border-gray-200 dark:border-gray-700" />,
    em: (props) => <em className="italic" {...props} />,
  };
}
