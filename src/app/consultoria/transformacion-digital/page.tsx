import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, Users, Cpu, GitBranch, Shield, Workflow } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ServiceProcess } from "@/components/ServiceProcess";
import { RadialProgress } from "@/components/RadialProgress";
import { BackgroundPattern } from "@/components/BackgroundPattern";
import { FadeIn } from "@/components/FadeIn";

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

      {/* Intro */}
      <section className="relative px-6 py-20 overflow-hidden">
        <BackgroundPattern variant="dots" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
          <FadeIn>
            <span className="section-badge">Transformacion Digital</span>
            <h2 className="mb-6">La Transformacion Digital No Es un Proyecto de TI</h2>
            <p className="mb-6 text-text-muted leading-relaxed">
              Es una decision de negocio. Como consultor en transformacion
              digital con Maestria en Transformacion Digital por EGADE y
              Micromaster por Boston University, ayudo a empresas a disenar su
              estrategia de transformacion con vision de negocio, no de
              tecnologia.
            </p>
            <Link href="/contacto" className="btn btn-primary">
              Solicitar Assessment <ArrowRight size={16} />
            </Link>
          </FadeIn>
          <FadeIn delay={0.2} direction="right">
            <div className="flex flex-wrap justify-center gap-6">
              <RadialProgress value={40} label="Empresas" sublabel="Transformadas" />
              <RadialProgress value={50} label="Proyectos" sublabel="Completados" />
              <RadialProgress value={7} label="Anos" sublabel="De experiencia" size={100} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary px-6 py-12">
        <div className="mx-auto grid max-w-[1200px] grid-cols-3 gap-8">
          <AnimatedCounter end={40} suffix="+" label="Empresas transformadas" />
          <AnimatedCounter end={2} label="Maestrias (EGADE)" />
          <AnimatedCounter end={1} label="Micromaster (Boston U)" />
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="section-badge">Alcance</span>
              <h2>Lo que Incluye mi Consultoria en Transformacion Digital</h2>
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
              Agenda un assessment gratuito y descubre donde esta tu empresa en su camino de transformacion.
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
