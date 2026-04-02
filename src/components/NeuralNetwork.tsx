"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Node = {
  label: string;
  x: number;
  y: number;
};

type Props = {
  centerLabel: string;
  nodes: string[];
};

export function NeuralNetwork({ centerLabel, nodes }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const cx = 250;
  const cy = 220;
  const radius = 160;

  const positions: Node[] = nodes.map((label, i) => {
    const angle = (2 * Math.PI * i) / nodes.length - Math.PI / 2;
    return {
      label,
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    };
  });

  return (
    <div ref={ref} className="w-full max-w-[500px] mx-auto">
      <svg viewBox="0 0 500 440" className="w-full h-auto">
        {/* Connection lines */}
        {positions.map((node, i) => (
          <motion.line
            key={`line-${i}`}
            x1={cx}
            y1={cy}
            x2={node.x}
            y2={node.y}
            stroke="var(--color-accent)"
            strokeWidth={1.5}
            strokeOpacity={0.3}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
          />
        ))}

        {/* Cross connections between adjacent nodes */}
        {positions.map((node, i) => {
          const next = positions[(i + 1) % positions.length];
          return (
            <motion.line
              key={`cross-${i}`}
              x1={node.x}
              y1={node.y}
              x2={next.x}
              y2={next.y}
              stroke="var(--color-accent)"
              strokeWidth={0.8}
              strokeOpacity={0.15}
              strokeDasharray="4 4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.05 }}
            />
          );
        })}

        {/* Outer nodes */}
        {positions.map((node, i) => (
          <motion.g
            key={`node-${i}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r={28}
              fill="var(--color-surface)"
              stroke="var(--color-accent)"
              strokeWidth={1.5}
            />
            <text
              x={node.x}
              y={node.y + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={9}
              fontWeight={600}
              fill="var(--color-primary)"
              style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
            >
              {node.label}
            </text>
          </motion.g>
        ))}

        {/* Center node - pulse ring */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={42}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={1}
          strokeOpacity={0.2}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: [0.8, 1.3, 0.8], opacity: [0.3, 0, 0.3] } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Center node */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={34}
          fill="var(--color-accent)"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, type: "spring" }}
        />
        <motion.g
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          {centerLabel.includes(" ") ? (
            <>
              <text x={cx} y={cy - 6} textAnchor="middle" dominantBaseline="middle"
                fontSize={10} fontWeight={700} fill="#FFFFFF"
                style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                {centerLabel.split(" ")[0]}
              </text>
              <text x={cx} y={cy + 8} textAnchor="middle" dominantBaseline="middle"
                fontSize={10} fontWeight={700} fill="#FFFFFF"
                style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                {centerLabel.split(" ").slice(1).join(" ")}
              </text>
            </>
          ) : (
            <text x={cx} y={cy + 1} textAnchor="middle" dominantBaseline="middle"
              fontSize={12} fontWeight={700} fill="#FFFFFF"
              style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}>
              {centerLabel}
            </text>
          )}
        </motion.g>
      </svg>
    </div>
  );
}
