"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const industries = [
  { id: "retail", label: "Retail / E-commerce", benchmarks: { seo: 72, social: 65, automation: 45, analytics: 58, cx: 62 } },
  { id: "manufacturing", label: "Manufactura", benchmarks: { seo: 35, social: 28, automation: 55, analytics: 48, cx: 32 } },
  { id: "services", label: "Servicios Profesionales", benchmarks: { seo: 55, social: 50, automation: 40, analytics: 52, cx: 58 } },
  { id: "healthcare", label: "Salud", benchmarks: { seo: 42, social: 38, automation: 35, analytics: 45, cx: 48 } },
  { id: "finance", label: "Financiero", benchmarks: { seo: 60, social: 45, automation: 65, analytics: 70, cx: 55 } },
];

const sizes = [
  { id: "small", label: "1-50 empleados", multiplier: 0.7 },
  { id: "medium", label: "51-200 empleados", multiplier: 1.0 },
  { id: "large", label: "201-500 empleados", multiplier: 1.2 },
  { id: "enterprise", label: "500+ empleados", multiplier: 1.4 },
];

const metrics = [
  { key: "seo", label: "SEO y Posicionamiento" },
  { key: "social", label: "Redes Sociales" },
  { key: "automation", label: "Automatizacion" },
  { key: "analytics", label: "Analitica de Datos" },
  { key: "cx", label: "Experiencia Digital" },
];

export function ImpactCalculator() {
  const [industry, setIndustry] = useState("services");
  const [size, setSize] = useState("medium");

  const selectedIndustry = industries.find((i) => i.id === industry)!;
  const selectedSize = sizes.find((s) => s.id === size)!;

  const getScore = (key: string) => {
    const base = selectedIndustry.benchmarks[key as keyof typeof selectedIndustry.benchmarks];
    return Math.min(Math.round(base * selectedSize.multiplier), 100);
  };

  const avgScore = Math.round(
    metrics.reduce((sum, m) => sum + getScore(m.key), 0) / metrics.length
  );

  const opportunity = 100 - avgScore;

  return (
    <div className="bg-surface border border-border p-8">
      <h3 className="text-lg font-semibold text-primary mb-1">Calculadora de Impacto Digital</h3>
      <p className="text-sm text-text-muted mb-8">Selecciona tu industria y tamano para ver tu benchmark digital.</p>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Controls */}
        <div className="space-y-6">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-primary mb-3 block">Industria</label>
            <div className="space-y-2">
              {industries.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setIndustry(ind.id)}
                  className={`block w-full text-left px-4 py-2.5 text-sm border transition-all ${
                    industry === ind.id
                      ? "bg-accent text-white border-accent"
                      : "bg-surface text-primary border-border hover:border-accent"
                  }`}
                >
                  {ind.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-primary mb-3 block">Tamano de empresa</label>
            <div className="grid grid-cols-2 gap-2">
              {sizes.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSize(s.id)}
                  className={`px-3 py-2.5 text-xs font-semibold border transition-all ${
                    size === s.id
                      ? "bg-accent text-white border-accent"
                      : "bg-surface text-primary border-border hover:border-accent"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div>
          <div className="mb-6 flex items-end gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-text-muted mb-1">Madurez digital promedio</p>
              <p className="text-4xl font-heading font-bold text-primary">{avgScore}%</p>
            </div>
            <div className="mb-1">
              <p className="text-xs uppercase tracking-wider text-text-muted mb-1">Oportunidad de mejora</p>
              <p className="text-2xl font-heading font-bold text-accent">{opportunity}%</p>
            </div>
          </div>

          <div className="space-y-4">
            {metrics.map((m) => {
              const score = getScore(m.key);
              return (
                <div key={m.key}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-semibold text-primary">{m.label}</span>
                    <span className="text-text-muted">{score}% benchmark</span>
                  </div>
                  <div className="h-2 bg-border relative">
                    <motion.div
                      className="h-full bg-accent"
                      initial={{ width: 0 }}
                      animate={{ width: `${score}%` }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    {/* Target line */}
                    <div className="absolute top-0 bottom-0 w-px bg-primary/30" style={{ left: "80%" }}>
                      <span className="absolute -top-4 -translate-x-1/2 text-[9px] text-text-muted">Meta</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 p-4 bg-accent-light border border-accent/20">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Insight</p>
            <p className="text-sm text-primary">
              {opportunity > 40
                ? `Tu industria tiene un ${opportunity}% de oportunidad de mejora digital. Una estrategia bien ejecutada puede generar ventaja competitiva significativa.`
                : `Tu industria ya tiene buena adopcion digital (${avgScore}%). El diferenciador esta en la optimizacion y la inteligencia artificial aplicada.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
