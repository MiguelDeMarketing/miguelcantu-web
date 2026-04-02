"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Animated strategy compass / radar visual for Estrategia Digital page.
 * Shows interconnected pillars radiating from a central strategy hub.
 */
const pillars = [
  { label: "Tecnologia", angle: -90 },
  { label: "Personas", angle: -30 },
  { label: "Datos", angle: 30 },
  { label: "Procesos", angle: 90 },
  { label: "Canales", angle: 150 },
  { label: "Innovacion", angle: 210 },
];

export function StrategyVisual() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const cx = 200;
  const cy = 175;

  // Draw radar rings
  const rings = [50, 90, 130];

  return (
    <div ref={ref} className="w-full max-w-[400px] mx-auto">
      <svg viewBox="0 0 400 350" className="w-full h-auto">
        {/* Radar rings */}
        {rings.map((r, i) => (
          <motion.circle
            key={`ring-${i}`}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth={0.8}
            strokeOpacity={0.12}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          />
        ))}

        {/* Axis lines */}
        {pillars.map((p, i) => {
          const rad = (p.angle * Math.PI) / 180;
          const x2 = cx + 130 * Math.cos(rad);
          const y2 = cy + 130 * Math.sin(rad);
          return (
            <motion.line
              key={`axis-${i}`}
              x1={cx}
              y1={cy}
              x2={x2}
              y2={y2}
              stroke="var(--color-accent)"
              strokeWidth={1}
              strokeOpacity={0.2}
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
            />
          );
        })}

        {/* Filled radar shape (data polygon) */}
        <motion.polygon
          points={pillars
            .map((p) => {
              const rad = (p.angle * Math.PI) / 180;
              const r = 70 + Math.random() * 40; // varied radius for visual interest
              return `${cx + r * Math.cos(rad)},${cy + r * Math.sin(rad)}`;
            })
            .join(" ")}
          fill="var(--color-accent)"
          fillOpacity={0.08}
          stroke="var(--color-accent)"
          strokeWidth={1.5}
          strokeOpacity={0.4}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        {/* Pillar labels */}
        {pillars.map((p, i) => {
          const rad = (p.angle * Math.PI) / 180;
          const lx = cx + 150 * Math.cos(rad);
          const ly = cy + 150 * Math.sin(rad);
          return (
            <motion.g
              key={`label-${i}`}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
            >
              <circle
                cx={cx + 130 * Math.cos(rad)}
                cy={cy + 130 * Math.sin(rad)}
                r={5}
                fill="var(--color-accent)"
              />
              <text
                x={lx}
                y={ly + 4}
                textAnchor="middle"
                fontSize={9}
                fontWeight={600}
                fill="var(--color-primary)"
                style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
              >
                {p.label}
              </text>
            </motion.g>
          );
        })}

        {/* Center */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={22}
          fill="var(--color-accent)"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, type: "spring", delay: 0.3 }}
        />
        <motion.text
          x={cx}
          y={cy + 1}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={8}
          fontWeight={700}
          fill="#FFFFFF"
          style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          ESTRATEGIA
        </motion.text>
      </svg>
    </div>
  );
}
