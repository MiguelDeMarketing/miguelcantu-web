"use client";

import { motion } from "framer-motion";

/**
 * Animated section backgrounds.
 * - "scanner": Diagonal lines that slide slowly across, like a digital scanner
 * - "mesh": Hexagonal/triangular geometric mesh that rotates very slowly
 * Place inside a relative + overflow-hidden container.
 */
export function AnimatedBackground({ variant = "scanner" }: { variant?: "scanner" | "mesh" }) {
  if (variant === "mesh") {
    return <MeshBackground />;
  }
  return <ScannerBackground />;
}

function ScannerBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Diagonal sliding lines */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`scan-${i}`}
          className="absolute inset-0"
          style={{ opacity: 0.03 }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 20 + i * 5,
            delay: i * 7,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="200%" height="100%" className="absolute inset-0">
            <defs>
              <pattern
                id={`diag-scan-${i}`}
                x="0"
                y="0"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
                patternTransform={`rotate(${35 + i * 10})`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="80"
                  stroke="var(--color-primary)"
                  strokeWidth={0.8}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#diag-scan-${i})`} />
          </svg>
        </motion.div>
      ))}

      {/* Scanning beam effect */}
      <motion.div
        className="absolute top-0 bottom-0 w-[300px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(29,78,216,0.03) 50%, transparent 100%)",
        }}
        animate={{ x: ["-300px", "calc(100vw + 300px)"] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

function MeshBackground() {
  const hexSize = 60;
  const rows = 8;
  const cols = 14;

  const hexagons: { cx: number; cy: number; delay: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const offset = r % 2 === 0 ? 0 : hexSize * 0.866;
      hexagons.push({
        cx: c * hexSize * 1.732 + offset,
        cy: r * hexSize * 1.5,
        delay: (r + c) * 0.15,
      });
    }
  }

  const hexPath = (cx: number, cy: number, size: number) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      points.push(`${cx + size * Math.cos(angle)},${cy + size * Math.sin(angle)}`);
    }
    return `M${points.join("L")}Z`;
  };

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-[-10%]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
      >
        <svg
          width="120%"
          height="120%"
          viewBox={`0 0 ${cols * hexSize * 1.732 + hexSize} ${rows * hexSize * 1.5 + hexSize}`}
          className="absolute inset-0"
          preserveAspectRatio="xMidYMid slice"
        >
          {hexagons.map((h, i) => (
            <motion.path
              key={i}
              d={hexPath(h.cx, h.cy, hexSize * 0.45)}
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth={0.4}
              initial={{ opacity: 0.02 }}
              animate={{ opacity: [0.02, 0.06, 0.02] }}
              transition={{
                duration: 6,
                delay: h.delay % 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Triangle accents scattered */}
      {[
        { x: "15%", y: "20%", size: 30, dur: 25, rot: 0 },
        { x: "75%", y: "10%", size: 22, dur: 30, rot: 60 },
        { x: "85%", y: "70%", size: 35, dur: 20, rot: 120 },
        { x: "25%", y: "80%", size: 18, dur: 35, rot: 45 },
        { x: "55%", y: "50%", size: 25, dur: 28, rot: 90 },
      ].map((t, i) => (
        <motion.div
          key={`tri-${i}`}
          className="absolute"
          style={{ left: t.x, top: t.y }}
          animate={{ rotate: [t.rot, t.rot + 360] }}
          transition={{ duration: t.dur, repeat: Infinity, ease: "linear" }}
        >
          <svg width={t.size} height={t.size} viewBox="0 0 40 40" style={{ opacity: 0.04 }}>
            <polygon
              points="20,4 36,36 4,36"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth={1}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
