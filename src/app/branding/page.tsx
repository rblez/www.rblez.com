"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SiReact, SiVuedotjs, SiSvelte, SiAstro } from "@icons-pack/react-simple-icons";

const colors = [
  { name: "Black", value: "#000000", description: "Primary" },
  { name: "White", value: "#FFFFFF", description: "Background" },
  { name: "Neutral 100", value: "#F5F5F5", description: "Light" },
  { name: "Neutral 900", value: "#171717", description: "Dark" },
];

const fonts = [
  {
    name: "GT Sectra",
    usage: "Display (H1-H6)",
    license: "Commercial license required",
    formats: [".ttf", ".otf", ".woff2"],
  },
  {
    name: "GT Cinetype",
    usage: "Sans (Body, UI)",
    license: "Commercial license required",
    formats: [".ttf", ".otf", ".woff2"],
  },
  {
    name: "GT Cinetype Mono",
    usage: "Code, technical elements",
    license: "Commercial license required",
    formats: [".ttf", ".otf", ".woff2"],
  },
];

const isotipoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="368" height="368" preserveAspectRatio="xMidYMid meet" viewBox="0 0 276 276"><path fill="#000" d="M141.65 39.55C124.8 42.2 105.9 47.9 84.75 56.7L74 61.2l.65 54.65c.35 30.05.75 54.8.9 55 .15.15 4.5-3.85 9.6-8.9 16.6-16.35 31.8-28.35 47.6-37.45 9.25-5.35 12.25-5.6 4.05-.4-47.85 30.6-94.15 89.1-94.2 119.15-.05 18.85 12.15 17.2 49.2-6.55 32.35-20.8 40.95-25 50.85-25.15 11.2-.1 13.1 4.9 6.35 17.2l-3.95 7.25h63.8l1.5-4.75c8.7-27.05 13.45-56.95 10.7-67.2-4.9-17.85-19.25-14.95-70.55 14.1C126.3 191.9 109 200.8 109 199.5c0-.2 3.95-2.5 8.75-5.1 83.4-45 111.6-75.3 103.85-111.55-7.55-35.4-35.05-50.25-79.95-43.3"/></svg>`;

const reactComponent = `import React from 'react';

export function RBlezLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 276 276"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        fill="currentColor"
        d="M141.65 39.55C124.8 42.2 105.9 47.9 84.75 56.7L74 61.2l.65 54.65c.35 30.05.75 54.8.9 55 .15.15 4.5-3.85 9.6-8.9 16.6-16.35 31.8-28.35 47.6-37.45 9.25-5.35 12.25-5.6 4.05-.4-47.85 30.6-94.15 89.1-94.2 119.15-.05 18.85 12.15 17.2 49.2-6.55 32.35-20.8 40.95-25 50.85-25.15 11.2-.1 13.1 4.9 6.35 17.2l-3.95 7.25h63.8l1.5-4.75c8.7-27.05 13.45-56.95 10.7-67.2-4.9-17.85-19.25-14.95-70.55 14.1C126.3 191.9 109 200.8 109 199.5c0-.2 3.95-2.5 8.75-5.1 83.4-45 111.6-75.3 103.85-111.55-7.55-35.4-35.05-50.25-79.95-43.3"
      />
    </svg>
  );
}`;

const vueComponent = `<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 276 276"
    :class="class || 'w-8 h-8'"
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      fill="currentColor"
      d="M141.65 39.55C124.8 42.2 105.9 47.9 84.75 56.7L74 61.2l.65 54.65c.35 30.05.75 54.8.9 55 .15.15 4.5-3.85 9.6-8.9 16.6-16.35 31.8-28.35 47.6-37.45 9.25-5.35 12.25-5.6 4.05-.4-47.85 30.6-94.15 89.1-94.2 119.15-.05 18.85 12.15 17.2 49.2-6.55 32.35-20.8 40.95-25 50.85-25.15 11.2-.1 13.1 4.9 6.35 17.2l-3.95 7.25h63.8l1.5-4.75c8.7-27.05 13.45-56.95 10.7-67.2-4.9-17.85-19.25-14.95-70.55 14.1C126.3 191.9 109 200.8 109 199.5c0-.2 3.95-2.5 8.75-5.1 83.4-45 111.6-75.3 103.85-111.55-7.55-35.4-35.05-50.25-79.95-43.3"
    />
  </svg>
</template>`;

const svelteComponent = `<script lang="ts">
  export let class: string = 'w-8 h-8';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 276 276"
  class={class}
  preserveAspectRatio="xMidYMid meet"
>
  <path
    fill="currentColor"
    d="M141.65 39.55C124.8 42.2 105.9 47.9 84.75 56.7L74 61.2l.65 54.65c.35 30.05.75 54.8.9 55 .15.15 4.5-3.85 9.6-8.9 16.6-16.35 31.8-28.35 47.6-37.45 9.25-5.35 12.25-5.6 4.05-.4-47.85 30.6-94.15 89.1-94.2 119.15-.05 18.85 12.15 17.2 49.2-6.55 32.35-20.8 40.95-25 50.85-25.15 11.2-.1 13.1 4.9 6.35 17.2l-3.95 7.25h63.8l1.5-4.75c8.7-27.05 13.45-56.95 10.7-67.2-4.9-17.85-19.25-14.95-70.55 14.1C126.3 191.9 109 200.8 109 199.5c0-.2 3.95-2.5 8.75-5.1 83.4-45 111.6-75.3 103.85-111.55-7.55-35.4-35.05-50.25-79.95-43.3"
  />
</svg>`;

const astroComponent = `---
interface Props {
  class?: string;
}

const { class: className = 'w-8 h-8' } = Astro.props;
---

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 276 276"
  class={className}
  preserveAspectRatio="xMidYMid meet"
>
  <path
    fill="currentColor"
    d="M141.65 39.55C124.8 42.2 105.9 47.9 84.75 56.7L74 61.2l.65 54.65c.35 30.05.75 54.8.9 55 .15.15 4.5-3.85 9.6-8.9 16.6-16.35 31.8-28.35 47.6-37.45 9.25-5.35 12.25-5.6 4.05-.4-47.85 30.6-94.15 89.1-94.2 119.15-.05 18.85 12.15 17.2 49.2-6.55 32.35-20.8 40.95-25 50.85-25.15 11.2-.1 13.1 4.9 6.35 17.2l-3.95 7.25h63.8l1.5-4.75c8.7-27.05 13.45-56.95 10.7-67.2-4.9-17.85-19.25-14.95-70.55 14.1C126.3 191.9 109 200.8 109 199.5c0-.2 3.95-2.5 8.75-5.1 83.4-45 111.6-75.3 103.85-111.55-7.55-35.4-35.05-50.25-79.95-43.3"
  />
</svg>`;

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

export default function BrandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      <Header />

      <div className="max-w-6xl mx-auto px-4 pt-24 pb-8 sm:pt-28 sm:pb-12 w-full flex-1">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-black dark:text-white">
          Branding
        </h1>
        <p className="text-lg text-black/60 dark:text-white/60 mb-12">
          Visual identity, brand assets, and usage guidelines.
        </p>

        {/* Isotipo */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-black dark:text-white mb-6">
            Isotipo
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="p-8 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center">
              <div className="w-32 h-32 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 276 276"
                  className="w-full h-full"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    fill="currentColor"
                    d="M141.65 39.55C124.8 42.2 105.9 47.9 84.75 56.7L74 61.2l.65 54.65c.35 30.05.75 54.8.9 55 .15.15 4.5-3.85 9.6-8.9 16.6-16.35 31.8-28.35 47.6-37.45 9.25-5.35 12.25-5.6 4.05-.4-47.85 30.6-94.15 89.1-94.2 119.15-.05 18.85 12.15 17.2 49.2-6.55 32.35-20.8 40.95-25 50.85-25.15 11.2-.1 13.1 4.9 6.35 17.2l-3.95 7.25h63.8l1.5-4.75c8.7-27.05 13.45-56.95 10.7-67.2-4.9-17.85-19.25-14.95-70.55 14.1C126.3 191.9 109 200.8 109 199.5c0-.2 3.95-2.5 8.75-5.1 83.4-45 111.6-75.3 103.85-111.55-7.55-35.4-35.05-50.25-79.95-43.3"
                  />
                </svg>
              </div>
            </div>
            <div className="p-8 rounded-xl border border-black/10 dark:border-white/10 bg-black dark:bg-white flex items-center justify-center">
              <div className="w-32 h-32 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 276 276"
                  className="w-full h-full"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    fill="currentColor"
                    d="M141.65 39.55C124.8 42.2 105.9 47.9 84.75 56.7L74 61.2l.65 54.65c.35 30.05.75 54.8.9 55 .15.15 4.5-3.85 9.6-8.9 16.6-16.35 31.8-28.35 47.6-37.45 9.25-5.35 12.25-5.6 4.05-.4-47.85 30.6-94.15 89.1-94.2 119.15-.05 18.85 12.15 17.2 49.2-6.55 32.35-20.8 40.95-25 50.85-25.15 11.2-.1 13.1 4.9 6.35 17.2l-3.95 7.25h63.8l1.5-4.75c8.7-27.05 13.45-56.95 10.7-67.2-4.9-17.85-19.25-14.95-70.55 14.1C126.3 191.9 109 200.8 109 199.5c0-.2 3.95-2.5 8.75-5.1 83.4-45 111.6-75.3 103.85-111.55-7.55-35.4-35.05-50.25-79.95-43.3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Descargas */}
          <div className="p-6 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
              Download Isotipo
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <a
                href="/isotipo.svg"
                download="rblez-isotipo.svg"
                className="flex items-center gap-3 p-4 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              >
                <i className="ri-file-svg-line text-xl"></i>
                <div>
                  <p className="font-medium text-black dark:text-white">SVG</p>
                  <p className="text-xs text-black/60 dark:text-white/60">Scalable vector</p>
                </div>
              </a>
              <a
                href="/isotipo.png"
                download="rblez-isotipo.png"
                className="flex items-center gap-3 p-4 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              >
                <i className="ri-image-line text-xl"></i>
                <div>
                  <p className="font-medium text-black dark:text-white">PNG</p>
                  <p className="text-xs text-black/60 dark:text-white/60">Raster with transparency</p>
                </div>
              </a>
              <button
                onClick={() => copyToClipboard(isotipoSvg)}
                className="flex items-center gap-3 p-4 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              >
                <i className="ri-code-s-slash-line text-xl"></i>
                <div>
                  <p className="font-medium text-black dark:text-white">Raw SVG</p>
                  <p className="text-xs text-black/60 dark:text-white/60">Copy to clipboard</p>
                </div>
              </button>
            </div>

            {/* Framework Components */}
            <h4 className="text-sm font-semibold text-black dark:text-white mb-3">
              Framework Components
            </h4>
            <div className="grid gap-3">
              <div className="p-4 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <SiReact size={20} />
                    <span className="font-medium text-black dark:text-white">React</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(reactComponent)}
                    className="text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:opacity-90 transition-opacity shadow-md"
                  >
                    <i className="ri-file-copy-line mr-1"></i>
                    Copy
                  </button>
                </div>
                <pre className="text-xs text-gray-300 dark:text-gray-400 overflow-x-auto bg-gray-900 dark:bg-gray-950 rounded-lg p-4 -mx-4">
                  <code className="language-tsx">{reactComponent}</code>
                </pre>
              </div>

              <div className="p-4 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <SiVuedotjs size={20} />
                    <span className="font-medium text-black dark:text-white">Vue</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(vueComponent)}
                    className="text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 text-white font-medium hover:opacity-90 transition-opacity shadow-md"
                  >
                    <i className="ri-file-copy-line mr-1"></i>
                    Copy
                  </button>
                </div>
                <pre className="text-xs text-gray-300 dark:text-gray-400 overflow-x-auto bg-gray-900 dark:bg-gray-950 rounded-lg p-4 -mx-4">
                  <code className="language-vue">{vueComponent}</code>
                </pre>
              </div>

              <div className="p-4 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <SiSvelte size={20} />
                    <span className="font-medium text-black dark:text-white">Svelte</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(svelteComponent)}
                    className="text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium hover:opacity-90 transition-opacity shadow-md"
                  >
                    <i className="ri-file-copy-line mr-1"></i>
                    Copy
                  </button>
                </div>
                <pre className="text-xs text-gray-300 dark:text-gray-400 overflow-x-auto bg-gray-900 dark:bg-gray-950 rounded-lg p-4 -mx-4">
                  <code className="language-svelte">{svelteComponent}</code>
                </pre>
              </div>

              <div className="p-4 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <SiAstro size={20} />
                    <span className="font-medium text-black dark:text-white">Astro</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(astroComponent)}
                    className="text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium hover:opacity-90 transition-opacity shadow-md"
                  >
                    <i className="ri-file-copy-line mr-1"></i>
                    Copy
                  </button>
                </div>
                <pre className="text-xs text-gray-300 dark:text-gray-400 overflow-x-auto bg-gray-900 dark:bg-gray-950 rounded-lg p-4 -mx-4">
                  <code className="language-astro">{astroComponent}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Colors */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-black dark:text-white mb-6">
            Colors
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {colors.map((color) => (
              <div
                key={color.name}
                className="p-4 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5"
              >
                <div
                  className="h-20 rounded-lg mb-3 border border-black/10"
                  style={{ backgroundColor: color.value }}
                />
                <p className="font-medium text-black dark:text-white text-sm">
                  {color.name}
                </p>
                <p className="text-xs text-black/60 dark:text-white/60 font-mono">
                  {color.value}
                </p>
                <p className="text-xs text-black/40 dark:text-white/40 mt-1">
                  {color.description}
                </p>
              </div>
            ))}
          </div>

          {/* Note about colors */}
          <div className="mt-6 p-4 rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
            <p className="text-sm text-black/60 dark:text-white/60">
              <strong className="text-black dark:text-white">Note:</strong> The design uses an exclusively monochromatic palette.
              Colors are applied via CSS variables and Tailwind classes to support automatic light and dark mode.
            </p>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-black dark:text-white mb-6">
            Typography
          </h2>
          <div className="space-y-6">
            {fonts.map((font) => (
              <div
                key={font.name}
                className="p-6 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white">
                      {font.name}
                    </h3>
                    <p className="text-sm text-black/60 dark:text-white/60">
                      {font.usage}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {font.formats.map((format) => (
                      <span
                        key={format}
                        className="px-2 py-1 rounded text-xs bg-black/10 dark:bg-white/10 text-black/60 dark:text-white/60"
                      >
                        {format}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-amber-600 dark:text-amber-400">
                  <i className="ri-error-warning-line mr-1"></i>
                  {font.license}
                </p>
              </div>
            ))}
          </div>

          {/* Note about fonts */}
          <div className="mt-6 p-4 rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <i className="ri-information-line mr-1"></i>
              <strong>Important:</strong> GT fonts (GT Sectra, GT Cinetype) are protected by commercial license.
              For personal or commercial use, you must purchase the corresponding license at{" "}
              <a
                href="https://www.grillitype.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium"
              >
                Grilli Type
              </a>
              .
            </p>
          </div>
        </section>

        {/* Brand Usage */}
        <section>
          <h2 className="text-xl font-semibold text-black dark:text-white mb-6">
            Brand Usage
          </h2>
          <div className="space-y-4">
            <div className="p-6 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
              <h3 className="font-semibold text-black dark:text-white mb-2">
                <i className="ri-checkbox-circle-line mr-2 text-green-600 dark:text-green-400"></i>
                Allowed Usage
              </h3>
              <ul className="text-sm text-black/60 dark:text-white/60 space-y-1 list-disc ml-5">
                <li>Personal projects and portfolios</li>
                <li>Educational content and tutorials</li>
                <li>Official collaborations with rblez</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
              <h3 className="font-semibold text-black dark:text-white mb-2">
                <i className="ri-close-circle-line mr-2 text-red-600 dark:text-red-400"></i>
                Prohibited Usage
              </h3>
              <ul className="text-sm text-black/60 dark:text-white/60 space-y-1 list-disc ml-5">
                <li>Commercial products without authorization</li>
                <li>Identity impersonation</li>
                <li>Illegal or harmful content</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
