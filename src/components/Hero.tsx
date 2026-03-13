"use client";

import { useEffect, useState } from "react";

const titles = [
  "Streamer",
  "Gamer",
  "F1 Enthusiast",
  "Marathon Runner",
  "Chicago Native",
];

export default function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const title = titles[currentTitle];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayed === title) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setCurrentTitle((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayed(
        isDeleting ? title.slice(0, displayed.length - 1) : title.slice(0, displayed.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentTitle]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Hero bg gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neon/5 via-transparent to-transparent" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-neon/3 blur-[200px]" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Main title - staggered letter reveal */}
        <h1
          className={`text-[13vw] sm:text-8xl lg:text-9xl font-black tracking-tighter mb-6 whitespace-nowrap transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-10 blur-sm"
          }`}
        >
          {"BIG".split("").map((letter, i) => (
            <span
              key={`b${i}`}
              className="inline-block text-white transition-all duration-500"
              style={{
                transitionDelay: mounted ? `${300 + i * 80}ms` : "0ms",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0) rotateX(0)" : "translateY(40px) rotateX(90deg)",
              }}
            >
              {letter}
            </span>
          ))}
          {"ANT".split("").map((letter, i) => (
            <span
              key={`a${i}`}
              className="inline-block text-neon neon-text transition-all duration-500"
              style={{
                transitionDelay: mounted ? `${540 + i * 80}ms` : "0ms",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0) rotateX(0)" : "translateY(40px) rotateX(90deg)",
              }}
            >
              {letter}
            </span>
          ))}
          {"SOSA".split("").map((letter, i) => (
            <span
              key={`s${i}`}
              className="inline-block text-white transition-all duration-500"
              style={{
                transitionDelay: mounted ? `${780 + i * 80}ms` : "0ms",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0) rotateX(0)" : "translateY(40px) rotateX(90deg)",
              }}
            >
              {letter}
            </span>
          ))}
        </h1>

        {/* Typing subtitle */}
        <div
          className={`h-12 flex items-center justify-center mb-8 transition-all duration-700 delay-[1200ms] ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-xl sm:text-2xl font-mono text-neon/80 bg-neon/5 px-4 py-1 rounded-lg border border-neon/10">
            <span className="text-gray-500 mr-1">&gt;</span>
            {displayed}
            <span className="text-neon animate-pulse font-bold">_</span>
          </span>
        </div>

        {/* Tagline */}
        <p
          className={`text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 transition-all duration-700 delay-[1400ms] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Chicago guy streaming for fun. Gaming, F1, marathon running, and vibes.
          <br className="hidden sm:block" />
          Catch the energy live.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-[1600ms] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="https://www.twitch.tv/bigantsosa"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-purple text-white font-bold rounded-xl text-lg hover:bg-purple/80 transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] flex items-center gap-3"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
            </svg>
            Watch on Twitch
          </a>
          <a
            href="https://www.youtube.com/@BigAntSosa"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-neon/30 text-neon font-bold rounded-xl text-lg hover:bg-neon/10 transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] flex items-center gap-3"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
