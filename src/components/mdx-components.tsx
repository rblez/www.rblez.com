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
  const baseStyles = "inline-flex items-center justify-center font-display uppercase tracking-wider rounded-lg transition-colors";

  const variantStyles = {
    primary: "bg-black hover:bg-black/90 text-white dark:bg-white dark:hover:bg-white/90 dark:text-black",
    secondary: "bg-black/10 hover:bg-black/20 text-black dark:bg-white/10 dark:hover:bg-white/20 dark:text-white",
    outline: "border-2 border-black text-black hover:bg-black/5 dark:border-white dark:text-white dark:hover:bg-white/10",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
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
    info: "bg-black/5 border-black/20 dark:bg-white/5 dark:border-white/20",
    warning: "bg-amber-50 border-amber-200 dark:bg-amber-950/30 dark:border-amber-800",
    error: "bg-red-50 border-red-200 dark:bg-red-950/30 dark:border-red-800",
    success: "bg-green-50 border-green-200 dark:bg-green-950/30 dark:border-green-800",
    tip: "bg-black/5 border-black/20 dark:bg-white/5 dark:border-white/20",
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
    <div className="my-6 rounded-lg overflow-hidden border border-black/10 dark:border-white/10">
      {(title || filename) && (
        <div className="flex items-center justify-between px-4 py-2 bg-black/5 dark:bg-white/5 border-b border-black/10 dark:border-white/10">
          {filename && (
            <span className="text-xs text-black/50 dark:text-white/50 font-mono">
              <i className="ri-file-code-line mr-1" />
              {filename}
            </span>
          )}
          {title && (
            <span className="text-xs text-black/50 dark:text-white/50">{title}</span>
          )}
          {language && (
            <span className="text-xs text-black/40 dark:text-white/40 uppercase">{language}</span>
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
    <div className="my-6 overflow-x-auto rounded-lg border border-black/10 dark:border-white/10">
      <table className="w-full border-collapse text-sm">
        {children}
      </table>
    </div>
  );
};

interface VideoProps {
  src: string;
  title?: string;
  className?: string;
}

const Video: React.FC<VideoProps> = ({ src, title, className = "" }) => {
  return (
    <div className={`my-8 ${className}`}>
      <video
        src={src}
        title={title}
        controls
        className="w-full rounded-lg border border-black/10 dark:border-white/10"
      >
        {title && <track kind="captions" label={title} />}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

interface YouTubeProps {
  videoId: string;
  title?: string;
}

const YouTube: React.FC<YouTubeProps> = ({ videoId, title = "YouTube video" }) => {
  return (
    <div className="my-8 aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        className="w-full h-full rounded-lg border border-black/10 dark:border-white/10"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

interface IframeProps {
  src: string;
  title?: string;
  height?: string;
  className?: string;
}

const Iframe: React.FC<IframeProps> = ({ src, title, height = "400px", className = "" }) => {
  return (
    <div className={`my-8 ${className}`}>
      <iframe
        src={src}
        title={title}
        className={`w-full rounded-lg border border-black/10 dark:border-white/10 ${className}`}
        style={{ height }}
        allowFullScreen
      />
    </div>
  );
};

interface HRProps {
  className?: string;
}

const HR: React.FC<HRProps> = ({ className = "" }) => {
  return <hr className={`my-10 border-black/10 dark:border-white/10 ${className}`} />;
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
          <p className="text-sm text-black/50 dark:text-white/50 text-center mt-3">{props.alt}</p>
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
    h5: (props) => (
      <h5 className="text-base font-semibold mt-6 mb-2 [&>a]:text-inherit [&>a]:hover:underline [&>a]:no-underline" {...props} />
    ),
    h6: (props) => (
      <h6 className="text-sm font-semibold mt-4 mb-2 [&>a]:text-inherit [&>a]:hover:underline [&>a]:no-underline" {...props} />
    ),
    // Text elements
    p: (props) => (
      <p className="text-base leading-7 mb-6" {...props} />
    ),
    strong: (props) => <strong className="font-semibold text-black dark:text-white" {...props} />,
    em: (props) => <em className="italic" {...props} />,
    del: (props) => <del className="text-black/50 dark:text-white/50 line-through" {...props} />,
    code: (props) => (
      <code
        className="px-1.5 py-0.5 rounded text-sm bg-black/10 dark:bg-white/10 text-black dark:text-white font-mono"
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
          className="text-black dark:text-white hover:underline font-medium inline-flex items-center gap-1"
        />
      );
    },
    // Blockquote
    blockquote: (props) => (
      <blockquote
        {...props}
        className="border-l-4 border-black/20 dark:border-white/20 pl-5 py-2 my-6 italic text-black/70 dark:text-white/70 bg-black/5 dark:bg-white/5 rounded-r-lg"
      />
    ),
    // Horizontal rule
    hr: HR,
    // Table
    table: Table,
    th: (props) => (
      <th
        className="px-4 py-3 text-left font-semibold bg-black/5 dark:bg-white/5 border-b border-black/10 dark:border-white/10"
        {...props}
      />
    ),
    td: (props) => (
      <td
        className="px-4 py-3 border-b border-black/5 dark:border-white/5"
        {...props}
      />
    ),
    // Custom components
    Button,
    Callout,
    CodeBlock,
    Video,
    YouTube,
    Iframe,
    // Steps for numbered lists with icons
    Step: ({ children, number }: { children: React.ReactNode; number?: number }) => (
      <div className="flex gap-4 mb-6">
        {number && (
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black/10 dark:bg-white/10 text-black dark:text-white flex items-center justify-center font-bold text-sm">
            {number}
          </span>
        )}
        <div className="flex-1">{children}</div>
      </div>
    ),
    // Card component
    Card: ({ children, title, href }: { children: React.ReactNode; title?: string; href?: string }) => (
      <div className={`my-6 p-6 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-shadow ${href ? 'cursor-pointer' : ''}`}>
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
    // Image with caption
    Figure: ({ children }: { children: React.ReactNode }) => (
      <figure className="my-8">
        {children}
      </figure>
    ),
    Figcaption: ({ children }: { children: React.ReactNode }) => (
      <figcaption className="text-sm text-black/50 dark:text-white/50 text-center mt-3">
        {children}
      </figcaption>
    ),
  };
}
