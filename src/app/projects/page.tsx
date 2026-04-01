import { projects } from "#site/content";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ProjectsPage() {
  const publishedProjects = projects
    .filter((project) => project.published)
    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      <Header />

      <div className="max-w-6xl mx-auto px-4 pt-24 pb-8 sm:pt-28 sm:pb-12 w-full flex-1">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-black dark:text-white">
          Projects
        </h1>
        <p className="text-lg text-black/60 dark:text-white/60 mb-12">
          Projects I have been working on.
        </p>

        {publishedProjects.length === 0 ? (
          <p className="text-black/60 dark:text-white/60">
            No projects yet. Check back soon!
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {publishedProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug.replace("projects/", "")}`}
                className="group"
              >
                <article className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all">
                  <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-black/10 to-white/10 dark:from-white/10 dark:to-black/10">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-black/20 dark:text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-lg font-semibold text-black dark:text-white group-hover:text-black/80 dark:group-hover:text-white/80 transition-colors">
                        {project.title}
                      </h2>
                      {project.featured && (
                        <span className="px-2 py-0.5 rounded-full text-xs bg-black dark:bg-white text-white dark:text-black">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-black/60 dark:text-white/60 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-md text-xs bg-black/10 dark:bg-white/10 text-black/60 dark:text-white/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 3 && (
                        <span className="px-2 py-1 rounded-md text-xs bg-black/10 dark:bg-white/10 text-black/60 dark:text-white/60">
                          +{project.stack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
