import Image from "next/image";

// To add real thumbnails: go to each YouTube Short, grab the video ID from the URL
// e.g. youtube.com/shorts/ABC123xyz -> id is "ABC123xyz"
// Thumbnail URL: https://i.ytimg.com/vi/{VIDEO_ID}/oar2.jpg (vertical shorts thumbnail)
// Link: https://www.youtube.com/shorts/{VIDEO_ID}

const videos = [
  {
    title: "Thoughts on RE9 Requiem",
    id: "IXvo_JJZgrw",
    game: "Resident Evil 9",
  },
  {
    title: "The IL Toro on Stella Montis is actually broken",
    id: "Dx85l841_2Y",
    game: "Arc Raiders",
  },
  {
    title: "Team Thought They Can Rat Us...",
    id: "xMmXhHwikeA",
    game: "Arc Raiders",
  },
  {
    title: "Getting called out by age verification in RE Requiem",
    id: "432bmpD2BMg",
    game: "Resident Evil 9",
  },
  {
    title: "Loser raider gets mad",
    id: "eLLqIFvJhDo",
    game: "Arc Raiders",
  },
  {
    title: "Checking Out New Controlled Access Zone",
    id: "e-jS_JE_iPo",
    game: "Arc Raiders",
  },
];

export default function Content() {
  return (
    <section id="content" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-neon text-sm font-bold uppercase tracking-[0.3em]">
            Latest drops
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2">
            Recent <span className="text-neon">Content</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon to-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {videos.map((video, index) => {
            const hasVideo = video.id !== "";
            const thumbnailUrl = hasVideo
              ? `https://i.ytimg.com/vi/${video.id}/oar2.jpg`
              : null;
            const videoUrl = hasVideo
              ? `https://www.youtube.com/shorts/${video.id}`
              : "https://www.youtube.com/@BigAntSosa/shorts";

            return (
              <a
                key={index}
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl border border-white/5 overflow-hidden card-hover bg-dark-800/50 block"
              >
                {/* Thumbnail */}
                <div className="aspect-[9/14] relative overflow-hidden bg-dark-700">
                  {hasVideo && thumbnailUrl ? (
                    <Image
                      src={thumbnailUrl}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-dark-600 to-dark-800">
                      <svg
                        className="w-16 h-16 text-neon/20 group-hover:text-neon/40 transition-colors"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Play button on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Game tag */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/90 px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm border border-white/10">
                      {video.game}
                    </span>
                  </div>

                  {/* Shorts badge */}
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-red-600/90 backdrop-blur-sm">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25z" />
                      </svg>
                      <span className="text-[9px] font-bold text-white">Short</span>
                    </div>
                  </div>

                  {/* Title at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 drop-shadow-lg">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@BigAntSosa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-neon/30 text-neon font-bold rounded-xl hover:bg-neon/10 transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            See All Videos on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
