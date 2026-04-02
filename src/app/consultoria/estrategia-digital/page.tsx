import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, LineChart, Lightbulb, Puzzle, Gauge, Globe, Award, BookOpen, GraduationCap } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ServiceProcess } from "@/components/ServiceProcess";
import { StrategyVisual } from "@/components/StrategyVisual";
import { BackgroundPattern } from "@/components/BackgroundPattern";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Consultor en Estrategia Digital — Alineacion de Tecnologia y Negocio",
  description:
    "Miguel Cantu es consultor en estrategia digital. Alinea tecnologia, procesos y personas para maximizar el impacto digital en tu negocio.",
};

const capabilities = [
  { icon: Compass, title: "Vision Digital", description: "Definicion del norte digital de tu empresa alineado a la estrategia de negocio." },
  { icon: LineChart, title: "Modelo de Datos", description: "Arquitectura de datos y analitica para tomar decisiones informadas." },
  { icon: Lightbulb, title: "Innovacion Digital", description: "Identificacion de oportunidades de innovacion y diferenciacion digital." },
  { icon: Puzzle, title: "Integracion de Canales", description: "Estrategia omnicanal que conecta todos los puntos de contacto digitales." },
  { icon: Gauge, title: "Performance Digital", description: "KPIs, dashboards y mecanismos de medicion para cada iniciativa." },
  { icon: Globe, title: "Presencia Digital", description: "Estrategia de web, SEO, redes sociales y ecosistema digital completo." },
];

const process = [
  { number: "01", title: "Descubrimiento", description: "Entendimiento profundo de tu negocio, mercado y capacidades digitales actuales." },
  { number: "02", title: "Analisis", description: "Benchmarking, gaps, oportunidades y priorizacion de iniciativas." },
  { number: "03", title: "Estrategia", description: "Plan integral con vision, objetivos, iniciativas y metricas de exito." },
  { number: "04", title: "Activacion", description: "Implementacion por fases con acompanamiento y medicion continua." },
];

const certRibbon = [
  { icon: GraduationCap, text: "MBA Transformacion Digital — IEBS" },
  { icon: GraduationCap, text: "Maestria Analitica — EGADE" },
  { icon: Globe, text: "Micromaster — Boston University" },
  { icon: Award, text: "Estrategia Conectada — Wharton" },
  { icon: BookOpen, text: "7+ Certificaciones Digitales" },
];

export default function EstrategiaDigital() {
  return (
    <>
      <div className="page-header">
        <h1>Consultor en Estrategia Digital</h1>
        <p className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/">Consultoria</Link>
          <span className="mx-2">/</span>
          <span>Estrategia Digital</span>
        </p>
      </div>

      {/* Intro with strategy radar */}
      <section className="relative px-6 py-20 overflow-hidden">
        <BackgroundPattern variant="grid" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
          <FadeIn>
            <span className="section-badge">Estrategia Digital</span>
            <h2 className="mb-6">Estrategia Digital que Conecta Tecnologia con Negocio</h2>
            <p className="mb-6 text-text-muted leading-relaxed">
              La mayoria de las empresas tienen herramientas digitales. Pocas
              tienen una estrategia digital. Como consultor en estrategia
              digital, ayudo a alinear tecnologia, procesos y personas para que
              cada inversion digital tenga impacto real.
            </p>
            <Link href="/contacto" className="btn btn-primary">
              Disenar mi Estrategia <ArrowRight size={16} />
            </Link>
          </FadeIn>
          <FadeIn delay={0.2} direction="right">
            <StrategyVisual />
          </FadeIn>
        </div>
      </section>

      {/* Certifications ribbon */}
      <section className="bg-primary px-6 py-8">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-8 md:justify-between">
          {certRibbon.map((c) => (
            <div key={c.text} className="flex items-center gap-2">
              <c.icon size={16} className="text-accent" strokeWidth={1.5} />
              <span className="text-xs font-medium text-white/80">{c.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="section-badge">Alcance</span>
              <h2>Pilares de la Estrategia Digital</h2>
            </div>
          </FadeIn>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.08}>
                <div className="card-hover h-full">
                  <c.icon size={28} className="mb-4 text-accent" strokeWidth={1.5} />
                  <h3 className="mb-2 text-base font-semibold">{c.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{c.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="section-badge">Metodologia</span>
              <h2>Mi Proceso de Estrategia Digital</h2>
            </div>
          </FadeIn>
          <ServiceProcess steps={process} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px] bg-primary px-8 py-16 text-center">
          <FadeIn>
            <h2 className="mb-4 text-white">¿Tu empresa tiene estrategia digital?</h2>
            <p className="mx-auto mb-8 max-w-lg text-white/60">
              Agenda una consulta y definamos juntos la estrategia digital que tu negocio necesita.
            </p>
            <Link href="/contacto" className="btn btn-white">
              Agendar Consulta <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
