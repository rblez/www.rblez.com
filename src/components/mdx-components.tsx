import Link from "next/link";
import Image from "next/image";
import type { MDXComponents } from "mdx/types";
import React from "react";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-colors";
  
  const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950",
  };
  
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return <span className={combinedClassName}>{children}</span>;
};

interface CalloutProps {
  type?: "info" | "warning" | "error" | "success" | "tip";
  children: React.ReactNode;
  title?: string;
}

const Callout: React.FC<CalloutProps> = ({ type = "info", children, title }) => {
  const typeStyles = {
    info: "bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800",
    warning: "bg-amber-50 border-amber-200 dark:bg-amber-950/30 dark:border-amber-800",
    error: "bg-red-50 border-red-200 dark:bg-red-950/30 dark:border-red-800",
    success: "bg-green-50 border-green-200 dark:bg-green-950/30 dark:border-green-800",
    tip: "bg-purple-50 border-purple-200 dark:bg-purple-950/30 dark:border-purple-800",
  };

  const icons = {
    info: "ri-information-line",
    warning: "ri-alert-line",
    error: "ri-error-warning-line",
    success: "ri-checkbox-circle-line",
    tip: "ri-lightbulb-line",
  };

  const defaultTitles = {
    info: "Info",
    warning: "Warning",
    error: "Error",
    success: "Success",
    tip: "Tip",
  };

  return (
    <div className={`border-l-4 rounded-r-lg p-4 my-6 ${typeStyles[type]}`}>
      <div className="flex items-center gap-2 mb-2 font-semibold">
        <i className={`${icons[type]} text-lg`} />
        <span>{title || defaultTitles[type]}</span>
      </div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
};

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
  title?: string;
  filename?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, language, title, filename }) => {
  return (
    <div className="my-6 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      {(title || filename) && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          {filename && (
            <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
              <i className="ri-file-code-line mr-1" />
              {filename}
            </span>
          )}
          {title && (
            <span className="text-xs text-gray-500 dark:text-gray-400">{title}</span>
          )}
          {language && (
            <span className="text-xs text-gray-400 dark:text-gray-500 uppercase">{language}</span>
          )}
        </div>
      )}
      <div className="overflow-x-auto">
        {children}
      </div>
    </div>
  );
};

interface TableProps {
  children: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        {children}
      </table>
    </div>
  );
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Images
    img: (props) => (
      <div className="my-8">
        <Image
          {...props}
          className="rounded-lg object-contain shadow-lg"
          width={props.width || 800}
          height={props.height || 450}
          alt={props.alt || ""}
          sizes="(max-width: 768px) 100vw, 800px"
        />
        {props.alt && (
          <p className="text-sm text-gray-500 text-center mt-3">{props.alt}</p>
        )}
      </div>
    ),
    // Headings
    h1: (props) => (
      <h1 className="text-3xl font-bold mt-12 mb-6 [&>a]:text-inherit [&>a]:hover:underline [&>a]:no-underline" {...props} />
    ),
    h2: (props) => (
      <h2 className="text-2xl font-semibold mt-10 mb-4 [&>a]:text-inherit [&>a]:hover:underline [&>a]:no-underline" {...props} />
    ),
    h3: (props) => (
      <h3 className="text-xl font-semibold mt-8 mb-3 [&>a]:text-inherit [&>a]:hover:underline [&>a]:no-underline" {...props} />
    ),
    h4: (props) => (
      <h4 className="text-lg font-semibold mt-6 mb-2 [&>a]:text-inherit [&>a]:hover:underline [&>a]:no-underline" {...props} />
    ),
    // Text elements
    p: (props) => (
      <p className="text-base leading-7 mb-6" {...props} />
    ),
    strong: (props) => <strong className="font-semibold text-gray-900 dark:text-white" {...props} />,
    em: (props) => <em className="italic" {...props} />,
    del: (props) => <del className="text-gray-500 line-through" {...props} />,
    code: (props) => (
      <code
        className="px-1.5 py-0.5 rounded text-sm bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-mono"
        {...props}
      />
    ),
    pre: (props) => (
      <pre className="my-4" {...props} />
    ),
    // Lists
    ul: (props) => (
      <ul className="list-disc list-outside ml-6 mb-6 space-y-2" {...props} />
    ),
    ol: (props) => (
      <ol className="list-decimal list-outside ml-6 mb-6 space-y-2" {...props} />
    ),
    li: (props) => (
      <li className="text-base leading-7" {...props} />
    ),
    // Links
    a: (props) => {
      const href = props.href || "";
      const isExternal = href.startsWith("http");
      return (
        <Link
          {...props}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-blue-600 hover:underline dark:text-blue-400 font-medium inline-flex items-center gap-1"
        />
      );
    },
    // Blockquote
    blockquote: (props) => (
      <blockquote
        {...props}
        className="border-l-4 border-gray-300 dark:border-gray-600 pl-5 py-2 my-6 italic text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 rounded-r-lg"
      />
    ),
    // Horizontal rule
    hr: () => <hr className="my-10 border-gray-200 dark:border-gray-700" />,
    // Table
    table: Table,
    th: (props) => (
      <th
        className="px-4 py-3 text-left font-semibold bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
        {...props}
      />
    ),
    td: (props) => (
      <td
        className="px-4 py-3 border-b border-gray-100 dark:border-gray-800"
        {...props}
      />
    ),
    // Custom components
    Button,
    Callout,
    CodeBlock,
    // Steps for numbered lists with icons
    Step: ({ children, number }: { children: React.ReactNode; number?: number }) => (
      <div className="flex gap-4 mb-6">
        {number && (
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
            {number}
          </span>
        )}
        <div className="flex-1">{children}</div>
      </div>
    ),
    // Card component
    Card: ({ children, title, href }: { children: React.ReactNode; title?: string; href?: string }) => (
      <div className={`my-6 p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-shadow ${href ? 'cursor-pointer' : ''}`}>
        {title && (
          <h3 className="text-lg font-semibold mb-3">{title}</h3>
        )}
        {href ? (
          <a href={href} className="block" target={href.startsWith("http") ? "_blank" : undefined}>
            {children}
          </a>
        ) : (
          children
        )}
      </div>
    ),
  };
}
