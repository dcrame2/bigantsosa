export default function About() {
  const stats = [
    { label: "Marathon Runner", value: "x2", sublabel: "3rd this year" },
    { label: "Platform", value: "XBOX", sublabel: "Gaming" },
    { label: "Home", value: "CHI", sublabel: "Chicago" },
  ];

  const interests = [
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Gaming",
      description: "Arc Raiders, Resident Evil, and whatever hits different. Grinding ranked or vibing in co-op.",
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Formula 1",
      description: "Die-hard F1 fan. Race weekends are sacred. If you know, you know.",
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Running",
      description: "2x marathon finisher, training for the 3rd. The grind doesn't stop at the desk.",
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Vibes & Party",
      description: "Chicago nightlife, good music, good people. The stream energy carries over IRL.",
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-neon text-sm font-bold uppercase tracking-[0.3em]">
            Who is
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2">
            Big<span className="text-neon">Ant</span>Sosa
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon to-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* Bio */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-400 leading-relaxed">
            Chicago native streaming for the love of it. Whether it&apos;s dropping into
            <span className="text-neon font-semibold"> Arc Raiders</span>, catching
            <span className="text-red-hot font-semibold"> F1 </span>
            race weekends, or lacing up for marathon training &mdash; it&apos;s all about the energy.
            Pulling up to the stream means you&apos;re part of the crew. No gatekeeping, just good times.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex-1 text-center p-5 sm:p-6 rounded-2xl bg-dark-800/50 border border-neon/10 neon-border"
            >
              <div className="text-3xl sm:text-4xl font-black text-neon">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mt-1">{stat.label}</div>
              <div className="text-xs text-gray-500 mt-0.5">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Interest cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl bg-dark-800/50 border border-white/5 card-hover hover:border-neon/30"
            >
              <div className="text-neon mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
