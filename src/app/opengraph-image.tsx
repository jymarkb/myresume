import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Jay Mark Borja — Full-Stack Web Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "linear-gradient(135deg, #0a0f1c 0%, #0f1729 50%, #0a0f1c 100%)",
          color: "#f5f7fa",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* glow accents */}
        <div
          style={{
            position: "absolute",
            top: -200,
            left: -200,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(34, 211, 238, 0.18)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            right: -200,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(168, 130, 255, 0.15)",
            filter: "blur(80px)",
          }}
        />

        {/* top: brand mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 28,
            fontFamily: "monospace",
            color: "#22d3ee",
            fontWeight: 700,
          }}
        >
          {"<jb/>"}
          <span style={{ color: "#94a3b8", fontWeight: 400 }}>
            jaymark.dev
          </span>
        </div>

        {/* center: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 22,
              fontFamily: "monospace",
              color: "#22d3ee",
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Full-Stack Web Developer
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Jay Mark Borja.</span>
            <span
              style={{
                background:
                  "linear-gradient(135deg, #22d3ee 0%, #a882ff 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              I build for the web.
            </span>
          </div>
        </div>

        {/* bottom: tech stack + location */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#94a3b8",
            fontFamily: "monospace",
          }}
        >
          <div style={{ display: "flex", gap: 16 }}>
            <span>React</span>
            <span style={{ color: "#475569" }}>·</span>
            <span>Next.js</span>
            <span style={{ color: "#475569" }}>·</span>
            <span>Symfony</span>
            <span style={{ color: "#475569" }}>·</span>
            <span>Laravel</span>
            <span style={{ color: "#475569" }}>·</span>
            <span>AWS</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#22c55e",
                boxShadow: "0 0 12px rgba(34, 197, 94, 0.7)",
              }}
            />
            <span>Quezon City, PH</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
