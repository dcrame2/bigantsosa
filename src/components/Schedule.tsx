"use client";

const schedule = [
  {
    day: "Thursday",
    time: "7PM - 10PM",
    vibe: "Warm-up night. Chill vibes, good games.",
    color: "from-neon/20 to-neon/5",
    borderColor: "border-neon/30",
    dotColor: "bg-neon",
  },
  {
    day: "Friday",
    time: "8PM - 12AM",
    vibe: "Friday night energy. Late night grind.",
    color: "from-purple/20 to-purple/5",
    borderColor: "border-purple/30",
    dotColor: "bg-purple",
  },
  {
    day: "Saturday",
    time: "5PM - 12AM",
    vibe: "The main event. Full session, full energy.",
    color: "from-red-hot/20 to-red-hot/5",
    borderColor: "border-red-hot/30",
    dotColor: "bg-red-hot",
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="relative py-24 sm:py-32">
      {/* Divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-neon text-sm font-bold uppercase tracking-[0.3em]">
            When to catch me
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2">
            Stream <span className="text-neon">Schedule</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon to-purple mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-md mx-auto">
            All times Central (Chicago). Pull up, say what&apos;s good in chat.
          </p>
        </div>

        {/* Schedule cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {schedule.map((item) => (
            <div
              key={item.day}
              className={`relative group p-8 rounded-2xl bg-gradient-to-b ${item.color} border ${item.borderColor} card-hover overflow-hidden`}
            >
              {/* Background pulse */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                {/* Day dot */}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`w-3 h-3 rounded-full ${item.dotColor}`} />
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Weekly
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white mb-2">{item.day}</h3>
                <div className="text-3xl font-black text-white/90 mb-4 tracking-tight">
                  {item.time}
                </div>
                <p className="text-sm text-gray-400">{item.vibe}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timezone note */}
        <div className="text-center mt-10">
          <a
            href="https://www.twitch.tv/bigantsosa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-neon/70 hover:text-neon transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
            </svg>
            Turn on notifications so you never miss a stream
          </a>
        </div>
      </div>
    </section>
  );
}
