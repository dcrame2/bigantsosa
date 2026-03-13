import Image from "next/image";

export default function InstaCal() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-instacal/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628] border border-instacal/20">
          {/* Glow effects */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-instacal/10 blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-instacal/5 blur-[120px]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 sm:p-12 lg:p-16">
            {/* Text side */}
            <div>
              {/* Sponsor badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-instacal/10 border border-instacal/30 mb-6">
                <span className="text-xs font-bold text-instacal uppercase tracking-wider">
                  Presented by
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                Insta<span className="text-instacal">Cal</span>
              </h2>

              <p className="text-xl text-gray-300 font-medium mb-2">
                AI-Powered Nutrition. Simplified.
              </p>

              <p className="text-gray-400 leading-relaxed mb-8 max-w-lg">
                Stop guessing what you&apos;re eating. Just snap a photo of your meal and InstaCal
                instantly breaks down your calories, macros, and nutrition using AI. Whether you&apos;re
                bulking, cutting, or just trying to eat smarter &mdash; this app makes tracking effortless.
                It&apos;s like having a nutritionist in your pocket.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Snap a photo, get instant calorie & macro breakdown",
                  "Track protein, carbs, fat & sugar at a glance",
                  "Activity log keeps you accountable daily",
                  "Social features to share progress with friends",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-instacal mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.theinstacal.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-instacal text-white font-bold rounded-xl text-lg hover:bg-instacal/80 transition-all hover:shadow-[0_0_30px_rgba(26,109,212,0.4)]"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Download Free
                </a>
                <a
                  href="https://www.theinstacal.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-instacal/30 text-instacal font-bold rounded-xl text-lg hover:bg-instacal/10 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  Website
                </a>
              </div>
            </div>

            {/* Phone mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative float-animation">
                {/* Phone frame */}
                <div className="relative w-[260px] sm:w-[290px] rounded-[3rem] border-[6px] border-gray-700 bg-black p-1 shadow-[0_0_40px_rgba(26,109,212,0.25)]">
                  {/* Notch / Dynamic Island */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-b-2xl z-10" />
                  {/* Screen */}
                  <div className="rounded-[2.4rem] overflow-hidden">
                    <Image
                      src="/instacal-screenshot.png"
                      alt="InstaCal App - AI Calorie Tracker"
                      width={390}
                      height={844}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Home indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[80px] h-[4px] bg-gray-600 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
