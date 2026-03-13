const socials = [
  {
    name: "Twitch",
    handle: "bigantsosa",
    url: "https://www.twitch.tv/bigantsosa",
    color: "from-[#9146FF] to-[#772CE8]",
    hoverGlow: "hover:shadow-[0_0_40px_rgba(145,70,255,0.4)]",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
      </svg>
    ),
    description: "Catch live streams every Thu, Fri & Sat",
  },
  {
    name: "YouTube",
    handle: "@BigAntSosa",
    url: "https://www.youtube.com/@BigAntSosa",
    color: "from-[#FF0000] to-[#CC0000]",
    hoverGlow: "hover:shadow-[0_0_40px_rgba(255,0,0,0.4)]",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    description: "Clips, shorts & gaming highlights",
  },
  {
    name: "Instagram",
    handle: "@ant.livetv",
    url: "https://www.instagram.com/ant.livetv/",
    color: "from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    hoverGlow: "hover:shadow-[0_0_40px_rgba(221,42,123,0.4)]",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    description: "Behind the scenes & daily vibes",
  },
  {
    name: "TikTok",
    handle: "@bigantsosa",
    url: "https://www.tiktok.com/@bigantsosa",
    color: "from-[#00f2ea] to-[#ff0050]",
    hoverGlow: "hover:shadow-[0_0_40px_rgba(0,242,234,0.3)]",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
    description: "Quick clips & trending content",
  },
];

export default function Socials() {
  return (
    <section id="socials" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-neon text-sm font-bold uppercase tracking-[0.3em]">
            Connect
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2">
            Find Me <span className="text-neon">Everywhere</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon to-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* Social cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-6 rounded-2xl bg-dark-800/50 border border-white/5 card-hover ${social.hoverGlow} overflow-hidden`}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="mb-4 text-white/70 group-hover:text-white transition-colors">
                  {social.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{social.name}</h3>
                <p className="text-sm text-neon/70 font-medium mb-3">{social.handle}</p>
                <p className="text-xs text-gray-500">{social.description}</p>
              </div>

              {/* Arrow */}
              <div className="absolute top-6 right-6 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
