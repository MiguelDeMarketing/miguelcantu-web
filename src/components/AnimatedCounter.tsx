"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
};

export function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  label,
  duration = 2,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <motion.p
        className="stat-number"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {prefix}
        {count}
        {suffix}
      </motion.p>
      <p className="stat-label">{label}</p>
    </div>
  );
}
