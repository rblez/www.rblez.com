import Image from "next/image";
import isotipe from "../../../public/isotipe.svg";

export const metadata = {
  title: "About - rblez",
  description: "About Ray (rblez) - Developer and creator",
  openGraph: {
    title: "About - rblez",
    description: "About Ray (rblez) - Developer and creator",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "About - rblez",
    description: "About Ray (rblez) - Developer and creator",
    site: "@rblezX",
    creator: "@rblezX",
  },
};

export default function About() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-12">
      <header className="mb-12">
        <div className="flex items-center gap-6 mb-6">
          <Image
            src={isotipe}
            alt="rblez"
            width={96}
            height={96}
            className="w-24 h-24"
          />
          <h1 className="text-4xl font-bold">About</h1>
        </div>
      </header>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed">
          I'm Ray, also known as <strong>rblez</strong>. I'm a developer
          passionate about building great web experiences.
        </p>

        <p className="text-lg leading-relaxed">
          I owe much of my career to the Web and Open Source. I spent my early
          days learning and experimenting with web technologies, driven by
          curiosity and the desire to create things that matter.
        </p>

        <p className="text-lg leading-relaxed">
          This blog is where I share my thoughts, experiences, and learnings
          about web development, technology, and more.
        </p>

        <h2>What I Do</h2>

        <ul>
          <li>
            Building web applications with modern technologies like Next.js and
            React
          </li>
          <li>Exploring new tools and frameworks to improve developer experience</li>
          <li>Contributing to open source projects</li>
          <li>Writing about my journey and insights</li>
        </ul>

        <h2>Connect</h2>

        <p>
          You can find me on{" "}
          <a
            href="https://x.com/rblezX"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter (@rblezX)
          </a>{" "}
          where I share updates and thoughts about development.
        </p>

        <blockquote>
          <p>
            "The web is the most important platform of our time." — I believe in
            building for everyone, everywhere.
          </p>
        </blockquote>

        <p>
          Thanks for visiting my corner of the internet. Feel free to explore
          the blog and reach out if you'd like to connect.
        </p>

        <p>— Ray</p>
      </div>
    </article>
  );
}
