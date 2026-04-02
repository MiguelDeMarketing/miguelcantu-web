import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, BarChart3, Search, Mail, PenTool, TrendingUp } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ServiceProcess } from "@/components/ServiceProcess";
import { DecorativeChart } from "@/components/DecorativeChart";
import { BackgroundPattern } from "@/components/BackgroundPattern";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Consultor en Marketing Digital — Estrategia, SEO, Campanas y Contenido",
  description:
    "Miguel Cantu es consultor en marketing digital. Estrategias de SEO, campanas digitales, marketing de contenidos y analitica para empresas que buscan resultados medibles.",
};

const capabilities = [
  { icon: Search, title: "SEO y Posicionamiento", description: "Estrategia de posicionamiento organico para que te encuentren quienes te necesitan." },
  { icon: Target, title: "Campanas Digitales", description: "Google Ads, Meta Ads y campanas de performance con enfoque en ROI." },
  { icon: PenTool, title: "Marketing de Contenidos", description: "Estrategia de contenido que posiciona, educa y genera demanda." },
  { icon: Mail, title: "Email Marketing", description: "Automatizacion y nurturing para convertir leads en clientes." },
  { icon: BarChart3, title: "Analitica de Marketing", description: "Dashboards, atribucion y KPIs para saber que funciona y que no." },
  { icon: TrendingUp, title: "Funnel de Ventas", description: "Diseno de embudos de conversion optimizados con datos." },
];

const process = [
  { number: "01", title: "Diagnostico", description: "Analisis de tu presencia digital actual, competidores y oportunidades." },
  { number: "02", title: "Estrategia", description: "Plan de accion con canales, presupuesto, KPIs y calendario." },
  { number: "03", title: "Ejecucion", description: "Implementacion de campanas, contenido y optimizaciones." },
  { number: "04", title: "Medicion", description: "Reportes de resultados, ajustes y escalamiento." },
];

export default function MarketingDigital() {
  return (
    <>
      <div className="page-header">
        <h1>Consultor en Marketing Digital</h1>
        <p className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/">Consultoria</Link>
          <span className="mx-2">/</span>
          <span>Marketing Digital</span>
        </p>
      </div>

      {/* Intro */}
      <section className="relative px-6 py-20 overflow-hidden">
        <BackgroundPattern variant="dots" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
          <FadeIn>
            <span className="section-badge">Marketing Digital</span>
            <h2 className="mb-6">Estrategias de Marketing que Generan Resultados Reales</h2>
            <p className="mb-6 text-text-muted leading-relaxed">
              Como consultor en marketing digital, ayudo a empresas a dejar de
              gastar en tacticas aisladas y empezar a invertir en una estrategia
              integral. SEO, campanas, contenido y analitica — todo alineado a
              tus objetivos de negocio.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contacto" className="btn btn-primary">
                Solicitar Diagnostico <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} direction="right">
            <div className="bg-surface p-6 border border-border">
              <p className="text-xs text-text-muted uppercase tracking-wider mb-4">Crecimiento de clientes</p>
              <DecorativeChart />
              <div className="flex justify-between mt-4 text-xs text-text-muted">
                <span>Mes 1</span>
                <span>Mes 6</span>
                <span>Mes 12</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary px-6 py-12">
        <div className="mx-auto grid max-w-[1200px] grid-cols-3 gap-8">
          <AnimatedCounter end={40} suffix="+" label="Empresas asesoradas" />
          <AnimatedCounter end={7} suffix="+" label="Anos en marketing digital" />
          <AnimatedCounter end={50} suffix="+" label="Campanas gestionadas" />
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="section-badge">Servicios</span>
              <h2>Lo que Incluye mi Consultoria en Marketing Digital</h2>
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
              <span className="section-badge">Proceso</span>
              <h2>Como Trabajo</h2>
            </div>
          </FadeIn>
          <ServiceProcess steps={process} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px] bg-primary px-8 py-16 text-center">
          <FadeIn>
            <h2 className="mb-4 text-white">¿Necesitas un consultor en marketing digital?</h2>
            <p className="mx-auto mb-8 max-w-lg text-white/60">
              Agenda una consulta y exploremos como mejorar tu estrategia de marketing con datos y resultados medibles.
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
