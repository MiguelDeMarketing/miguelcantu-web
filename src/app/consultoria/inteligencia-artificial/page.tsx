import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, Bot, Database, Zap, MessageSquare, Eye } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ServiceProcess } from "@/components/ServiceProcess";
import { RadialProgress } from "@/components/RadialProgress";
import { BackgroundPattern } from "@/components/BackgroundPattern";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Consultor en Inteligencia Artificial — IA para Empresas",
  description:
    "Miguel Cantu es consultor en inteligencia artificial. Ayuda a empresas a implementar IA para automatizar procesos, analizar datos y tomar mejores decisiones de negocio.",
};

const capabilities = [
  { icon: Brain, title: "Estrategia de IA", description: "Identificacion de casos de uso de IA con mayor impacto para tu negocio." },
  { icon: Bot, title: "Automatizacion con IA", description: "Chatbots, asistentes y automatizacion de procesos repetitivos con inteligencia artificial." },
  { icon: Database, title: "Analitica Avanzada", description: "Modelos predictivos, segmentacion inteligente y analisis de datos con IA." },
  { icon: MessageSquare, title: "IA Generativa", description: "Implementacion de herramientas de IA generativa para marketing, contenido y operaciones." },
  { icon: Eye, title: "Computer Vision", description: "Soluciones de vision artificial para control de calidad, inventarios y mas." },
  { icon: Zap, title: "Integracion de IA", description: "Conexion de modelos de IA con tus sistemas existentes y flujos de trabajo." },
];

const process = [
  { number: "01", title: "Exploracion", description: "Identificacion de oportunidades de IA y evaluacion de factibilidad tecnica y de negocio." },
  { number: "02", title: "Piloto", description: "Prueba de concepto rapida para validar el impacto antes de escalar." },
  { number: "03", title: "Implementacion", description: "Desarrollo e integracion de la solucion de IA en tu operacion." },
  { number: "04", title: "Escalamiento", description: "Expansion a otros procesos y mejora continua del modelo." },
];

export default function InteligenciaArtificial() {
  return (
    <>
      <div className="page-header">
        <h1>Consultor en Inteligencia Artificial</h1>
        <p className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/">Consultoria</Link>
          <span className="mx-2">/</span>
          <span>Inteligencia Artificial</span>
        </p>
      </div>

      {/* Intro */}
      <section className="relative px-6 py-20 overflow-hidden">
        <BackgroundPattern variant="dots" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
          <FadeIn>
            <span className="section-badge">Inteligencia Artificial</span>
            <h2 className="mb-6">IA que Resuelve Problemas Reales de Negocio</h2>
            <p className="mb-6 text-text-muted leading-relaxed">
              La inteligencia artificial no es magia — es una herramienta
              poderosa cuando se aplica al problema correcto. Como consultor en
              inteligencia artificial, ayudo a empresas a identificar donde la
              IA puede generar el mayor impacto y como implementarla de forma
              practica.
            </p>
            <Link href="/contacto" className="btn btn-primary">
              Explorar Oportunidades de IA <ArrowRight size={16} />
            </Link>
          </FadeIn>
          <FadeIn delay={0.2} direction="right">
            <div className="flex flex-wrap justify-center gap-6">
              <RadialProgress value={40} label="Empresas" sublabel="Con IA implementada" />
              <RadialProgress value={50} label="Proyectos" sublabel="De IA completados" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary px-6 py-12">
        <div className="mx-auto grid max-w-[1200px] grid-cols-3 gap-8">
          <AnimatedCounter end={40} suffix="+" label="Empresas con IA" />
          <AnimatedCounter end={7} suffix="+" label="Anos en tecnologia" />
          <AnimatedCounter end={7} suffix="+" label="Certificaciones" />
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="section-badge">Capacidades</span>
              <h2>Lo que Incluye mi Consultoria en Inteligencia Artificial</h2>
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
              <h2>Proceso de Implementacion de IA</h2>
            </div>
          </FadeIn>
          <ServiceProcess steps={process} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px] bg-primary px-8 py-16 text-center">
          <FadeIn>
            <h2 className="mb-4 text-white">¿Tu empresa esta lista para la IA?</h2>
            <p className="mx-auto mb-8 max-w-lg text-white/60">
              Agenda una sesion exploratoria y descubramos juntos donde la inteligencia artificial puede transformar tu operacion.
            </p>
            <Link href="/contacto" className="btn btn-white">
              Agendar Sesion <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
