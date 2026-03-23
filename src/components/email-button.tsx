"use client";

import { SiProtonmail } from "@icons-pack/react-simple-icons";

export function EmailButton() {
  return (
    <a
      href="mailto:rblez@proton.me"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Email"
    >
      <SiProtonmail size={28} />
    </a>
  );
}
