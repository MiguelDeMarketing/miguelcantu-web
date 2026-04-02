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

  const cx = 250;
  const cy = 220;

  // Draw radar rings
  const rings = [60, 110, 160];

  return (
    <div ref={ref} className="w-full max-w-[500px] mx-auto">
      <svg viewBox="0 0 500 440" className="w-full h-auto">
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
          const x2 = cx + 160 * Math.cos(rad);
          const y2 = cy + 160 * Math.sin(rad);
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
              const r = 85 + Math.random() * 50; // varied radius for visual interest
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

        {/* Pillar nodes with labels inside */}
        {pillars.map((p, i) => {
          const rad = (p.angle * Math.PI) / 180;
          const nx = cx + 160 * Math.cos(rad);
          const ny = cy + 160 * Math.sin(rad);
          return (
            <motion.g
              key={`label-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
            >
              <circle
                cx={nx}
                cy={ny}
                r={28}
                fill="var(--color-surface)"
                stroke="var(--color-accent)"
                strokeWidth={1.5}
              />
              <text
                x={nx}
                y={ny + 1}
                textAnchor="middle"
                dominantBaseline="middle"
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
          r={28}
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
          fontSize={10}
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
