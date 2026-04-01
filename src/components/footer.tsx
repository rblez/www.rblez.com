import Link from "next/link";
import {
  SiX,
  SiGithub,
  SiTelegram,
  SiInstagram,
  SiBluesky,
  SiThreads,
  SiReddit,
} from "@icons-pack/react-simple-icons";

const legalLinks = [
  { name: "Terms", href: "/legal/terms" },
  { name: "Privacy", href: "/legal/privacy" },
  { name: "Disclaimer", href: "/legal/disclaimer" },
  { name: "Cookies", href: "/legal/cookies" },
];

const socialLinks = [
  { name: "X", icon: SiX, url: "https://x.com/rblezX" },
  { name: "GitHub", icon: SiGithub, url: "https://github.com/rblez" },
  { name: "Telegram", icon: SiTelegram, url: "https://t.me/rblez" },
  { name: "Instagram", icon: SiInstagram, url: "https://instagram.com/rblez.build" },
  { name: "Bluesky", icon: SiBluesky, url: "https://bsky.app/profile/rblez.bsky.social" },
  { name: "Threads", icon: SiThreads, url: "https://threads.net/@rblez.build" },
  { name: "Reddit", icon: SiReddit, url: "https://reddit.com/user/rblez" },
];

export function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/stack"
                  className="text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                >
                  Stack
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:rblez@proton.me"
                  className="text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                >
                  rblez@proton.me
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/10 dark:border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-xs text-black/40 dark:text-white/40">© 2026 rblez. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
