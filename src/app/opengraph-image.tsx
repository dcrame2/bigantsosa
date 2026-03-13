import { ImageResponse } from "next/og";

export const alt = "BigAntSosa – Streamer · Gamer · F1 Enthusiast";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
          backgroundColor: "#0a0a0f",
        }}
      >
        {/* Dark background with subtle gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, #0a0a0f 0%, #12121a 40%, #0a0a0f 100%)",
            display: "flex",
          }}
        />

        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0,240,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.03) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            display: "flex",
          }}
        />

        {/* Neon cyan glow orb - top right */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 450,
            height: 450,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,240,255,0.12) 0%, rgba(0,240,255,0) 70%)",
            display: "flex",
          }}
        />

        {/* Purple glow orb - bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: -120,
            left: -80,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.1) 0%, rgba(139,92,246,0) 70%)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 80px",
          }}
        >
          {/* Top accent line - neon gradient */}
          <div
            style={{
              width: 80,
              height: 4,
              background: "linear-gradient(90deg, #00f0ff, #8b5cf6)",
              borderRadius: 2,
              marginBottom: 28,
              display: "flex",
            }}
          />

          {/* Subtitle */}
          <div
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "#00f0ff",
              textTransform: "uppercase" as const,
              letterSpacing: 6,
              marginBottom: 16,
              display: "flex",
            }}
          >
            Streamer · Gamer · F1 Enthusiast
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.05,
              marginBottom: 20,
              display: "flex",
            }}
          >
            BigAntSosa
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 24,
              fontWeight: 500,
              color: "#e2e8f0",
              lineHeight: 1.5,
              marginBottom: 40,
              maxWidth: 700,
              display: "flex",
            }}
          >
            Chicago guy streaming for fun. Gaming, F1, Marathon Running, and
            vibes.
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: 48,
            }}
          >
            {[
              { num: "2x", label: "Marathons" },
              { num: "LIVE", label: "Thu · Fri · Sat" },
              { num: "CHI", label: "Chicago" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "16px 24px",
                  borderRadius: 12,
                  border: "1px solid rgba(0,240,255,0.15)",
                  background: "rgba(0,240,255,0.05)",
                }}
              >
                <div
                  style={{
                    fontSize: 30,
                    fontWeight: 900,
                    color: "#00f0ff",
                    display: "flex",
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#94a3b8",
                    textTransform: "uppercase" as const,
                    letterSpacing: 2,
                    display: "flex",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side decorative element - large ">" terminal cursor */}
        <div
          style={{
            position: "absolute",
            right: 80,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: 280,
            fontWeight: 900,
            color: "rgba(0,240,255,0.06)",
            display: "flex",
            fontFamily: "monospace",
          }}
        >
          {">"}
        </div>

        {/* Bottom accent bar - neon gradient */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background:
              "linear-gradient(90deg, #00f0ff, #8b5cf6, #ff3e3e, #00f0ff)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
