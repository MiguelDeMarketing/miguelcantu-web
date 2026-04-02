"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function DecorativeChart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Smooth ascending curve points
  const points = [
    [0, 80],
    [10, 75],
    [20, 70],
    [30, 60],
    [40, 55],
    [50, 45],
    [60, 35],
    [70, 28],
    [80, 22],
    [90, 18],
    [100, 12],
  ];

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0] * 4} ${p[1]}`).join(" ");
  const areaPath = `${linePath} L 400 100 L 0 100 Z`;

  return (
    <div ref={ref} className="w-full">
      <svg viewBox="0 0 400 100" className="w-full h-auto" preserveAspectRatio="none">
        {/* Grid lines */}
        {[20, 40, 60, 80].map((y) => (
          <line
            key={y}
            x1={0}
            y1={y}
            x2={400}
            y2={y}
            stroke="var(--color-border)"
            strokeWidth={0.5}
            strokeDasharray="4 4"
          />
        ))}

        {/* Area fill */}
        <motion.path
          d={areaPath}
          fill="var(--color-accent)"
          fillOpacity={0.06}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Main line */}
        <motion.path
          d={linePath}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Dots on key points */}
        {[points[3], points[6], points[10]].map((p, i) => (
          <motion.circle
            key={i}
            cx={p[0] * 4}
            cy={p[1]}
            r={3}
            fill="var(--color-accent)"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.8 + i * 0.2 }}
          />
        ))}
      </svg>
    </div>
  );
}
