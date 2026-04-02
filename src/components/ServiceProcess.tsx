"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Step = {
  number: string;
  title: string;
  description: string;
};

export function ServiceProcess({ steps }: { steps: Step[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="grid gap-8 md:grid-cols-4">
      {steps.map((step, i) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className="relative"
        >
          {/* Connector line */}
          {i < steps.length - 1 && (
            <div className="hidden md:block absolute top-5 left-[60%] w-[80%] h-px bg-border" />
          )}
          <span className="inline-flex items-center justify-center w-10 h-10 bg-accent text-white text-sm font-bold mb-4">
            {step.number}
          </span>
          <h4 className="text-base font-semibold text-primary mb-2">{step.title}</h4>
          <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
