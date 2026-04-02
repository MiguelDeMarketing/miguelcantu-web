"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function FunnelDemo() {
  const [traffic, setTraffic] = useState(10000);
  const [convRate, setConvRate] = useState(3);
  const [closeRate, setCloseRate] = useState(25);
  const [avgTicket, setAvgTicket] = useState(15000);

  const leads = Math.round(traffic * (convRate / 100));
  const clients = Math.round(leads * (closeRate / 100));
  const revenue = clients * avgTicket;

  const stages = [
    { label: "Visitantes", value: traffic.toLocaleString(), width: 100, color: "bg-accent/10" },
    { label: "Leads", value: leads.toLocaleString(), width: (leads / traffic) * 100 * 8 + 20, color: "bg-accent/20" },
    { label: "Clientes", value: clients.toLocaleString(), width: (clients / traffic) * 100 * 15 + 10, color: "bg-accent/40" },
    { label: "Revenue", value: `$${(revenue / 1000).toFixed(0)}k`, width: Math.min((clients / traffic) * 100 * 20 + 8, 50), color: "bg-accent" },
  ];

  return (
    <div className="bg-surface border border-border p-8">
      <h3 className="text-lg font-semibold text-primary mb-1">Simulador de Funnel de Conversion</h3>
      <p className="text-sm text-text-muted mb-8">Mueve los sliders y ve como cambian tus resultados.</p>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Controls */}
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-primary">Trafico mensual</label>
              <span className="text-sm font-bold text-accent">{traffic.toLocaleString()}</span>
            </div>
            <input type="range" min={1000} max={100000} step={1000} value={traffic} onChange={(e) => setTraffic(Number(e.target.value))}
              className="w-full h-1.5 bg-border rounded-none appearance-none cursor-pointer accent-accent" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-primary">Tasa de conversion a lead</label>
              <span className="text-sm font-bold text-accent">{convRate}%</span>
            </div>
            <input type="range" min={0.5} max={15} step={0.5} value={convRate} onChange={(e) => setConvRate(Number(e.target.value))}
              className="w-full h-1.5 bg-border rounded-none appearance-none cursor-pointer accent-accent" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-primary">Tasa de cierre</label>
              <span className="text-sm font-bold text-accent">{closeRate}%</span>
            </div>
            <input type="range" min={5} max={60} step={5} value={closeRate} onChange={(e) => setCloseRate(Number(e.target.value))}
              className="w-full h-1.5 bg-border rounded-none appearance-none cursor-pointer accent-accent" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-primary">Ticket promedio (MXN)</label>
              <span className="text-sm font-bold text-accent">${avgTicket.toLocaleString()}</span>
            </div>
            <input type="range" min={1000} max={100000} step={1000} value={avgTicket} onChange={(e) => setAvgTicket(Number(e.target.value))}
              className="w-full h-1.5 bg-border rounded-none appearance-none cursor-pointer accent-accent" />
          </div>
        </div>

        {/* Funnel visual */}
        <div className="flex flex-col justify-center space-y-3">
          {stages.map((s, i) => (
            <div key={s.label} className="flex items-center gap-4">
              <motion.div
                className={`h-12 ${s.color} flex items-center justify-center transition-all`}
                animate={{ width: `${Math.max(s.width, 8)}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {i === 3 && <span className="text-xs font-bold text-white">{s.value}</span>}
              </motion.div>
              <div className="shrink-0">
                <p className="text-xs font-semibold text-primary">{s.label}</p>
                {i < 3 && <p className="text-lg font-heading font-bold text-primary">{s.value}</p>}
                {i === 3 && <p className="text-lg font-heading font-bold text-accent">{s.value}</p>}
              </div>
            </div>
          ))}
          <div className="border-t border-border pt-4 mt-4">
            <p className="text-xs text-text-muted uppercase tracking-wider">Revenue mensual estimado</p>
            <p className="text-2xl font-heading font-bold text-accent">${revenue.toLocaleString()} MXN</p>
          </div>
        </div>
      </div>
    </div>
  );
}
