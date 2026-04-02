import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, Users, Cpu, GitBranch, Shield, Workflow } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ServiceProcess } from "@/components/ServiceProcess";
import { NeuralNetwork } from "@/components/NeuralNetwork";
import { BackgroundPattern } from "@/components/BackgroundPattern";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { FadeIn } from "@/components/FadeIn";
import { MaturityAssessment } from "@/components/demos/MaturityAssessment";

export const metadata: Metadata = {
  title: "Consultor en Transformacion Digital — Estrategia y Hoja de Ruta",
  description:
    "Miguel Cantu es consultor en transformacion digital. Ayuda a empresas a disenar e implementar su estrategia de transformacion digital con vision de negocio.",
};

const capabilities = [
  { icon: Layers, title: "Diagnostico de Madurez Digital", description: "Evaluacion integral de donde esta tu empresa en su proceso de transformacion." },
  { icon: Workflow, title: "Hoja de Ruta Digital", description: "Plan estrategico con fases, prioridades, presupuesto y timeline." },
  { icon: Users, title: "Gestion del Cambio", description: "Acompanamiento a equipos para adoptar nuevas tecnologias y procesos." },
  { icon: Cpu, title: "Seleccion de Tecnologia", description: "Evaluacion y recomendacion de plataformas, herramientas y partners." },
  { icon: GitBranch, title: "Optimizacion de Procesos", description: "Rediseno de flujos de trabajo para maximizar eficiencia digital." },
  { icon: Shield, title: "Gobernanza Digital", description: "Estructura de gobierno, KPIs y mecanismos de seguimiento." },
];

const process = [
  { number: "01", title: "Assessment", description: "Evaluacion de madurez digital, entrevistas con stakeholders y analisis del entorno." },
  { number: "02", title: "Vision", description: "Definicion del estado futuro deseado y gaps a cerrar." },
  { number: "03", title: "Roadmap", description: "Hoja de ruta con quick wins, proyectos a mediano y largo plazo." },
  { number: "04", title: "Acompanamiento", description: "Seguimiento, ajustes y aseguramiento de la adopcion." },
];

const networkNodes = [
  "Ventas",
  "Marketing",
  "Operaciones",
  "Finanzas",
  "RRHH",
  "TI",
  "Clientes",
  "Datos",
];

export default function TransformacionDigital() {
  return (
    <>
      <div className="page-header">
        <h1>Consultor en Transformacion Digital</h1>
        <p className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/">Consultoria</Link>
          <span className="mx-2">/</span>
          <span>Transformacion Digital</span>
        </p>
      </div>

      {/* Intro with neural network */}
      <section className="relative px-6 py-20 overflow-hidden">
        <AnimatedBackground variant="waves" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
          <FadeIn>
            <span className="section-badge">Transformacion Digital</span>
            <h2 className="mb-6">La Transformacion Digital No Es un Proyecto de TI</h2>
            <p className="mb-6 text-text-muted leading-relaxed">
              Es una decision de negocio. Como consultor en transformacion
              digital con MBA en Transformacion Digital por IEBS y
              Micromaster por Boston University, ayudo a empresas a disenar su
              estrategia de transformacion con vision de negocio, no de
              tecnologia.
            </p>
            <Link href="/contacto" className="btn btn-primary">
              Solicitar Assessment <ArrowRight size={16} />
            </Link>
          </FadeIn>
          <FadeIn delay={0.2} direction="right">
            <NeuralNetwork centerLabel="CORE DIGITAL" nodes={networkNodes} />
          </FadeIn>
        </div>
      </section>

      {/* Ribbon */}
      <section className="bg-primary px-6 py-8">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-8 md:justify-between">
          {["Tecnologia", "Personas", "Procesos", "Digitalizacion"].map((s) => (
            <span key={s} className="text-sm font-semibold text-white/80">{s}</span>
          ))}
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="relative px-6 py-20 overflow-hidden">
        <AnimatedBackground variant="grid" />
        <div className="relative mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="section-badge">Demo Interactivo</span>
              <h2>Evalua tu Madurez Digital</h2>
              <p className="mt-4 mx-auto max-w-lg text-text-muted">
                Responde 6 preguntas rapidas y descubre en que nivel de transformacion digital se encuentra tu empresa.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <MaturityAssessment />
          </FadeIn>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="section-badge">Hoja de Ruta</span>
              <h2>Alcance del Proyecto de Transformacion Digital</h2>
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
              <h2>Proceso de Transformacion</h2>
            </div>
          </FadeIn>
          <ServiceProcess steps={process} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px] bg-primary px-8 py-16 text-center">
          <FadeIn>
            <h2 className="mb-4 text-white">¿Listo para iniciar tu transformacion digital?</h2>
            <p className="mx-auto mb-8 max-w-lg text-white/60">
              Agenda un assessment y descubre donde esta tu empresa en su camino de transformacion.
            </p>
            <Link href="/contacto" className="btn btn-white">
              Agendar Assessment <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
