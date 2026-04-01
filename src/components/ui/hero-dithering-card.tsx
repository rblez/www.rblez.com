"use client"

import { ArrowRight } from "lucide-react"
import { useState, Suspense, lazy } from "react"

const Dithering = lazy(() => 
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

interface HeroDitheringCardProps {
  title?: string
  subtitle?: string
  description?: string
  ctaText?: string
  badgeText?: string
  onCtaClick?: () => void
}

export function HeroDitheringCard({
  title = "Your words, delivered perfectly.",
  subtitle = "AI-Powered Writing",
  description = "Join 2,847 founders using the only AI that understands the nuance of your voice.",
  ctaText = "Start Typing",
  badgeText = "New",
  onCtaClick,
}: HeroDitheringCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-12 w-full flex justify-center items-center px-4 md:px-6">
      <div 
        className="w-full max-w-7xl relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-[48px] border border-black/10 dark:border-white/10 bg-white dark:bg-black shadow-sm min-h-[600px] md:min-h-[600px] flex flex-col items-center justify-center duration-500">
          <Suspense fallback={<div className="absolute inset-0 bg-black/5 dark:bg-white/5" />}>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30 dark:opacity-20">
              <Dithering
                colorBack="#00000000"
                colorFront="#000000"
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.6 : 0.2}
                className="size-full"
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
            
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-1.5 text-sm font-medium text-black dark:text-white backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black dark:bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black dark:bg-white"></span>
              </span>
              {badgeText}
            </div>

            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-black dark:text-white mb-8 leading-[1.05]">
              {title.split("\n")[0]}{" "}
              <br />
              <span className="text-black/80 dark:text-white/80">
                {title.split("\n")[1] || "delivered perfectly."}
              </span>
            </h2>
            
            <p className="text-black/60 dark:text-white/60 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              {description}
            </p>

            <button 
              onClick={onCtaClick}
              className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-black dark:bg-white px-12 text-base font-medium text-white dark:text-black transition-all duration-300 hover:bg-black/90 dark:hover:bg-white/90 hover:scale-105 active:scale-95 hover:ring-4 hover:ring-black/20 dark:hover:ring-white/20"
            >
              <span className="relative z-10">{ctaText}</span>
              <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
