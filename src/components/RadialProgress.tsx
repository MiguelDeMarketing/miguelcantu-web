"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  value: number;
  label: string;
  sublabel?: string;
  size?: number;
};

export function RadialProgress({ value, label, sublabel, size = 120 }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        {/* Background circle */}
        <svg width={size} height={size} className="rotate-[-90deg]">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="var(--color-border)"
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-heading text-xl font-bold text-primary">
            {value}+
          </span>
        </div>
      </div>
      <p className="mt-3 text-sm font-semibold text-primary">{label}</p>
      {sublabel && (
        <p className="text-xs text-text-muted">{sublabel}</p>
      )}
    </div>
  );
}
