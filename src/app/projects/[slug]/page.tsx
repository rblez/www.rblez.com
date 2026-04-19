import { projects } from "#site/content";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MDXContent } from "@/components/mdx-content";
import { SiGithub } from "@icons-pack/react-simple-icons";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug.replace("projects/", ""),
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => {
    const cleanSlug = p.slug.replace("projects/", "");
    return cleanSlug === slug;
  });

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => {
    const cleanSlug = p.slug.replace("projects/", "");
    return cleanSlug === slug;
  });

  if (!project || !project.published) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      <Header />

      <article className="max-w-4xl mx-auto px-4 pt-24 pb-8 sm:pt-28 sm:pb-12 w-full flex-1">
        {/* Header del proyecto */}
        <header className="mb-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a proyectos
          </Link>

          {/* Imagen del proyecto */}
          {project.image && project.image.trim() !== "" ? (
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-black/10 to-white/10 dark:from-white/10 dark:to-black/10 mb-8">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 960px"
              />
            </div>
          ) : (
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-black/10 to-white/10 dark:from-white/10 dark:to-black/10 mb-8 flex items-center justify-center">
              <svg className="w-16 h-16 text-black/20 dark:text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-black dark:text-white">
            {project.title}
          </h1>

          <p className="text-lg text-black/60 dark:text-white/60 mb-6">
            {project.description}
          </p>

          {/* Links y Stack */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <SiGithub size={18} />
                Proyecto
              </a>
            )}
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-black/20 dark:border-white/20 text-black dark:text-white text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                <i className="ri-global-line text-base"></i>
                Sitio web
              </a>
            )}
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-sm bg-black/10 dark:bg-white/10 text-black/60 dark:text-white/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Contenido del proyecto */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <MDXContent code={project.body} />
        </div>
      </article>

      <Footer />
    </div>
  );
}
