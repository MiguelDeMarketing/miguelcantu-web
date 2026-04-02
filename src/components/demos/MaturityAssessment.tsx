"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const dimensions = [
  { id: "strategy", label: "Estrategia Digital", question: "¿Tu empresa tiene una estrategia digital documentada?" },
  { id: "data", label: "Cultura de Datos", question: "¿Las decisiones se toman con datos o por intuicion?" },
  { id: "tech", label: "Tecnologia", question: "¿Que tan actualizadas estan tus herramientas digitales?" },
  { id: "people", label: "Personas", question: "¿Tu equipo tiene habilidades digitales adecuadas?" },
  { id: "process", label: "Procesos", question: "¿Que tan digitalizados estan tus procesos internos?" },
  { id: "cx", label: "Experiencia Cliente", question: "¿Que tan digital es la experiencia de tus clientes?" },
];

const levels = [
  { value: 1, label: "Basico" },
  { value: 2, label: "En desarrollo" },
  { value: 3, label: "Intermedio" },
  { value: 4, label: "Avanzado" },
  { value: 5, label: "Lider" },
];

export function MaturityAssessment() {
  const [scores, setScores] = useState<Record<string, number>>(
    Object.fromEntries(dimensions.map((d) => [d.id, 2]))
  );
  const [step, setStep] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const avg = Object.values(scores).reduce((a, b) => a + b, 0) / dimensions.length;

  const cx = 150;
  const cy = 150;
  const maxR = 110;

  const getPoint = (index: number, value: number) => {
    const angle = (2 * Math.PI * index) / dimensions.length - Math.PI / 2;
    const r = (value / 5) * maxR;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  };

  const radarPoints = dimensions
    .map((_, i) => getPoint(i, scores[dimensions[i].id]))
    .map((p) => `${p.x},${p.y}`)
    .join(" ");

  const maturityLabel =
    avg <= 1.5 ? "Inicial" : avg <= 2.5 ? "En Desarrollo" : avg <= 3.5 ? "Intermedio" : avg <= 4.5 ? "Avanzado" : "Lider Digital";

  if (!showResult) {
    const dim = dimensions[step];
    return (
      <div className="bg-surface border border-border p-8">
        <h3 className="text-lg font-semibold text-primary mb-1">Assessment de Madurez Digital</h3>
        <p className="text-sm text-text-muted mb-6">Responde {dimensions.length} preguntas y descubre tu nivel.</p>

        <div className="mb-2 flex items-center gap-2">
          {dimensions.map((_, i) => (
            <div key={i} className={`h-1 flex-1 ${i <= step ? "bg-accent" : "bg-border"} transition-colors`} />
          ))}
        </div>
        <p className="text-xs text-text-muted mb-6">{step + 1} de {dimensions.length}</p>

        <p className="text-base font-semibold text-primary mb-4">{dim.question}</p>
        <div className="grid grid-cols-5 gap-2 mb-6">
          {levels.map((l) => (
            <button
              key={l.value}
              onClick={() => setScores({ ...scores, [dim.id]: l.value })}
              className={`py-3 text-xs font-semibold border transition-all ${
                scores[dim.id] === l.value
                  ? "bg-accent text-white border-accent"
                  : "bg-surface text-primary border-border hover:border-accent"
              }`}
            >
              {l.value}
              <br />
              <span className="font-normal text-[10px]">{l.label}</span>
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          {step > 0 && (
            <button onClick={() => setStep(step - 1)} className="btn btn-outline text-xs py-2 px-4">
              Anterior
            </button>
          )}
          {step < dimensions.length - 1 ? (
            <button onClick={() => setStep(step + 1)} className="btn btn-primary text-xs py-2 px-4">
              Siguiente
            </button>
          ) : (
            <button onClick={() => setShowResult(true)} className="btn btn-primary text-xs py-2 px-4">
              Ver Resultado
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface border border-border p-8">
      <h3 className="text-lg font-semibold text-primary mb-1">Tu Nivel de Madurez Digital</h3>
      <p className="text-sm text-text-muted mb-6">Basado en tus respuestas, este es tu perfil.</p>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Radar */}
        <div className="flex justify-center">
          <svg viewBox="0 0 300 300" className="w-full max-w-[300px]">
            {/* Rings */}
            {[1, 2, 3, 4, 5].map((ring) => (
              <polygon
                key={ring}
                points={dimensions
                  .map((_, i) => {
                    const p = getPoint(i, ring);
                    return `${p.x},${p.y}`;
                  })
                  .join(" ")}
                fill="none"
                stroke="var(--color-border)"
                strokeWidth={0.5}
              />
            ))}

            {/* Axis lines */}
            {dimensions.map((_, i) => {
              const p = getPoint(i, 5);
              return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="var(--color-border)" strokeWidth={0.5} />;
            })}

            {/* Data polygon */}
            <motion.polygon
              points={radarPoints}
              fill="var(--color-accent)"
              fillOpacity={0.15}
              stroke="var(--color-accent)"
              strokeWidth={2}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
            />

            {/* Labels */}
            {dimensions.map((d, i) => {
              const p = getPoint(i, 6.2);
              return (
                <text key={d.id} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle"
                  fontSize={9} fontWeight={600} fill="var(--color-primary)"
                  style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                  {d.label}
                </text>
              );
            })}
          </svg>
        </div>

        {/* Results */}
        <div>
          <div className="mb-6">
            <p className="text-xs uppercase tracking-wider text-text-muted mb-1">Nivel general</p>
            <p className="text-3xl font-heading font-bold text-accent">{maturityLabel}</p>
            <p className="text-sm text-text-muted">Puntuacion: {avg.toFixed(1)} / 5.0</p>
          </div>

          <div className="space-y-3">
            {dimensions.map((d) => (
              <div key={d.id} className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-primary">{d.label}</span>
                    <span className="text-text-muted">{scores[d.id]}/5</span>
                  </div>
                  <div className="h-1.5 bg-border">
                    <motion.div
                      className="h-full bg-accent"
                      initial={{ width: 0 }}
                      animate={{ width: `${(scores[d.id] / 5) * 100}%` }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => { setShowResult(false); setStep(0); }}
            className="btn btn-outline text-xs py-2 px-4 mt-6">
            Repetir Assessment
          </button>
        </div>
      </div>
    </div>
  );
}
