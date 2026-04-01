import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "rblez | Solopreneur Building Digital Products",
  description: "Solopreneur focused on building, launching, and monetizing digital products with simplicity, speed, and real-world utility.",
  openGraph: {
    title: "rblez | Solopreneur",
    description: "Building digital products with simplicity, speed, and real-world utility.",
    type: "profile",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      <Header />

      <div className="max-w-6xl mx-auto px-4 pt-20 pb-8 sm:pt-24 sm:pb-12 w-full flex-1">
        {/* Profile Section with Sticky Avatar */}
        <section className="grid md:grid-cols-[auto_1fr] gap-8 lg:gap-12">
          {/* Sticky Avatar Column */}
          <div className="hidden md:block">
            <div className="sticky top-32">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-white/20 dark:from-white/20 dark:to-black/20 rounded-full blur-2xl" />
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-black/5 dark:border-white/5">
                  <Image
                    src="/ray.png"
                    alt="Ray - rblez"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="mt-6">
                <h1 className="text-2xl font-bold text-black dark:text-white">
                  Ray (rblez)
                </h1>
                <p className="text-sm text-black/60 dark:text-white/60">
                  Solopreneur
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Avatar (not sticky) */}
          <div className="md:hidden mb-8">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-white/20 dark:from-white/20 dark:to-black/20 rounded-full blur-2xl" />
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-black/5 dark:border-white/5">
                  <Image
                    src="/obito.png"
                    alt="Ray - rblez"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-black dark:text-white">
                  Ray (rblez)
                </h1>
                <p className="text-sm text-black/60 dark:text-white/60">
                  Solopreneur
                </p>
              </div>
            </div>
          </div>

          {/* About Text Column */}
          <div className="max-w-2xl">
            <div className="space-y-6 text-black/70 dark:text-white/70 leading-relaxed">
              <p className="text-base sm:text-lg">
                I'm Ray, also known as <strong className="text-black dark:text-white font-semibold">rblez</strong> — a solopreneur focused on building, launching, and monetizing digital products with a clear emphasis on simplicity, speed, and real-world utility.
              </p>

              <p className="text-base sm:text-lg">
                I work independently, handling the entire lifecycle of a product: from idea and validation to design, development, distribution, and sales. I don't separate roles — I integrate them. This allows me to move faster, make decisions without friction, and stay fully aligned with the end goal: <em className="text-black dark:text-white">creating products that work and generate results</em>.
              </p>

              <p className="text-base sm:text-lg">
                My approach is rooted in <strong className="text-black dark:text-white font-semibold">minimalism</strong>. I avoid unnecessary complexity, both in technology and in strategy. I believe most products fail not because of lack of features, but because they try to do too much without solving a clear problem. Because of that, I focus on building lean, functional solutions that can be tested and improved quickly.
              </p>

              <p className="text-base sm:text-lg">
                I'm not interested in building for the sake of building. Every project I work on is tied to a bigger objective: creating sustainable income streams and long-term independence through technology. That means prioritizing:
              </p>

              <ul className="list-disc ml-6 space-y-2 text-base sm:text-lg">
                <li>Validation over perfection</li>
                <li>Distribution over aesthetics</li>
                <li>Execution over endless planning</li>
              </ul>

              <p className="text-base sm:text-lg">
                A key part of my focus is working within <strong className="text-black dark:text-white font-semibold">constrained environments</strong>. Instead of seeing limitations as obstacles, I treat them as design inputs. This has led me to explore alternative systems — such as WhatsApp-based sales flows and crypto-powered transactions — as practical solutions for real-world problems where traditional infrastructure is limited or unavailable.
              </p>

              <p className="text-base sm:text-lg">
                I'm particularly interested in <strong className="text-black dark:text-white font-semibold">simple distribution models</strong>. I don't rely on complex marketing funnels or large-scale paid acquisition. Instead, I look for direct, low-friction ways to connect products with users — systems that are easy to deploy, easy to manage, and effective in generating conversions.
              </p>

              <p className="text-base sm:text-lg">
                I also continuously refine my tools and workflows. I don't commit to a fixed stack or ideology. I use what works, discard what doesn't, and optimize for efficiency at every step. <em className="text-black dark:text-white">Adaptability is a core principle</em> in how I operate.
              </p>

              <p className="text-base sm:text-lg">
                Working alone has shaped the way I think. It forces clarity, accountability, and focus. There's no room for overengineering or unnecessary decisions — everything must serve a purpose. This constraint has helped me develop a mindset centered on ownership and responsibility, where outcomes depend entirely on execution.
              </p>

              <p className="text-base sm:text-lg">
                I value:
              </p>

              <ul className="list-disc ml-6 space-y-2 text-base sm:text-lg">
                <li>Results over opinions</li>
                <li>Clarity over hype</li>
                <li>Consistency over short bursts of motivation</li>
              </ul>

              <p className="text-base sm:text-lg">
                I don't aim to follow trends or replicate what others are doing. Instead, I focus on building systems that are practical, repeatable, and capable of generating leverage over time.
              </p>

              <p className="text-base sm:text-lg font-semibold text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
                I'm not trying to build everything. I'm building what works — and improving it relentlessly.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
