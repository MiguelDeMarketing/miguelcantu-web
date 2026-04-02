"use client";

import { motion } from "framer-motion";

/**
 * Subtle animated section backgrounds — 2 variants:
 * - "grid": Soft grid lines that gently pulse in opacity, no scanning/sweeping
 * - "waves": Soft topographic wave lines that breathe slowly
 */
export function AnimatedBackground({ variant = "grid" }: { variant?: "grid" | "waves" }) {
  if (variant === "waves") return <WavesBackground />;
  return <GridBackground />;
}

function GridBackground() {
  const cols = 14;
  const rows = 8;
  const cellW = 100;
  const cellH = 90;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${cols * cellW} ${rows * cellH}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0"
      >
        {/* Vertical lines that pulse gently */}
        {Array.from({ length: cols + 1 }, (_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={i * cellW}
            y1={0}
            x2={i * cellW}
            y2={rows * cellH}
            stroke="var(--color-primary)"
            strokeWidth={0.5}
            initial={{ opacity: 0.03 }}
            animate={{ opacity: [0.03, 0.07, 0.03] }}
            transition={{
              duration: 6 + (i % 3) * 2,
              delay: (i % 4) * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Horizontal lines that pulse gently */}
        {Array.from({ length: rows + 1 }, (_, i) => (
          <motion.line
            key={`h-${i}`}
            x1={0}
            y1={i * cellH}
            x2={cols * cellW}
            y2={i * cellH}
            stroke="var(--color-primary)"
            strokeWidth={0.5}
            initial={{ opacity: 0.03 }}
            animate={{ opacity: [0.03, 0.07, 0.03] }}
            transition={{
              duration: 7 + (i % 3) * 2,
              delay: (i % 3) * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* A few soft glowing intersection points */}
        {[
          { col: 3, row: 2 },
          { col: 8, row: 4 },
          { col: 11, row: 1 },
          { col: 5, row: 6 },
        ].map((p, i) => (
          <motion.circle
            key={`glow-${i}`}
            cx={p.col * cellW}
            cy={p.row * cellH}
            r={2}
            fill="var(--color-accent)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.12, 0] }}
            transition={{
              duration: 5,
              delay: i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

function WavesBackground() {
  const waveCount = 5;
  const width = 1600;
  const height = 800;

  const generateWavePath = (yBase: number, amplitude: number, frequency: number) => {
    const points: string[] = [];
    for (let x = 0; x <= width; x += 10) {
      const y = yBase + amplitude * Math.sin((x / width) * Math.PI * frequency);
      points.push(`${x},${y}`);
    }
    return `M${points.join(" L")}`;
  };

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0"
      >
        {Array.from({ length: waveCount }, (_, i) => {
          const yBase = 100 + i * (height / (waveCount + 1));
          const amplitude = 12 + i * 4;
          const frequency = 2.5 + i * 0.4;
          const path = generateWavePath(yBase, amplitude, frequency);

          return (
            <motion.path
              key={`wave-${i}`}
              d={path}
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth={0.6}
              initial={{ opacity: 0.04 }}
              animate={{
                opacity: [0.04, 0.08, 0.04],
              }}
              transition={{
                duration: 8 + i * 3,
                delay: i * 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
