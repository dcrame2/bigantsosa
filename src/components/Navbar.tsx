"use client";

import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Content", href: "#content" },
  { label: "Socials", href: "#socials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-dark-900/80 border-b border-neon/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-xl font-black tracking-tighter text-white group-hover:text-neon transition-colors">
              BIG<span className="text-neon">ANT</span>SOSA
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-neon transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-neon after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.twitch.tv/bigantsosa"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple text-white text-sm font-bold rounded-lg hover:bg-purple/80 transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
            >
              Watch Live
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-400 hover:text-neon transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-neon/10 mt-2 pt-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-gray-400 hover:text-neon transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.twitch.tv/bigantsosa"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 px-4 py-2 bg-purple text-white text-sm font-bold rounded-lg text-center"
            >
              Watch Live
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
