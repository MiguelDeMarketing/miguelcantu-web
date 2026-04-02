import Link from "next/link";
import { ArrowRight, BarChart3, Target, TrendingUp, Brain, CheckCircle, GraduationCap, Award, BookOpen, Globe } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { DecorativeChart } from "@/components/DecorativeChart";
import { BackgroundPattern } from "@/components/BackgroundPattern";
import { FadeIn } from "@/components/FadeIn";

const services = [
  {
    icon: Target,
    title: "Marketing Digital",
    href: "/consultoria/marketing-digital",
    description:
      "Estrategias de marketing basadas en datos para posicionar tu marca y generar demanda real.",
  },
  {
    icon: TrendingUp,
    title: "Transformacion Digital",
    href: "/consultoria/transformacion-digital",
    description:
      "Hoja de ruta para llevar a tu empresa al siguiente nivel digital con vision estrategica.",
  },
  {
    icon: BarChart3,
    title: "Estrategia Digital",
    href: "/consultoria/estrategia-digital",
    description:
      "Alineacion de tecnologia, procesos y personas para maximizar el impacto digital en tu negocio.",
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    href: "/consultoria/inteligencia-artificial",
    description:
      "Implementacion de IA para automatizar procesos, analizar datos y tomar mejores decisiones.",
  },
];

const credentials = [
  { icon: GraduationCap, title: "MBA Transformacion Digital", subtitle: "IEBS, Espana" },
  { icon: GraduationCap, title: "Maestria Analitica", subtitle: "EGADE Business School" },
  { icon: Globe, title: "Micromaster", subtitle: "Boston University" },
  { icon: Award, title: "7+ Certificaciones", subtitle: "Analitica Digital" },
  { icon: BookOpen, title: "Profesor de Catedra", subtitle: "Tec de Monterrey" },
];

const certifications = [
  "MBA en Transformacion Digital — IEBS, Espana",
  "Maestria en Internet Business Analytics — EGADE",
  "Micromaster en Liderazgo Digital — Boston University (EdX)",
  "Certificacion en Estrategia Conectada — Wharton (EdX)",
  "Diplomado en Marketing Digital — IEBS",
  "Mas de 7 certificaciones: SEO, PPC, Analitica Web, Diseno Web",
  "Profesor de catedra — Tecnologico de Monterrey (modelo TEC 21)",
  "Representante de Mexico — Foro Mundial de Angeles Inversionistas",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-surface overflow-hidden">
        <BackgroundPattern variant="dots" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <FadeIn>
            <span className="section-badge">Consultor en Transformacion Digital e Inteligencia Artificial</span>
            <h1 className="mb-4">Miguel Cantu</h1>
            <p className="mb-2 text-xl font-heading font-bold text-primary/80">
              Consultoria en Marketing Digital, Estrategia Digital e IA
            </p>
            <p className="mb-8 max-w-lg text-base leading-relaxed text-text-muted">
              Ayudo a directores y C-suite a tomar mejores decisiones digitales.
              Estrategia digital, inteligencia artificial y analitica de datos
              para empresas que quieren crecer con claridad.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contacto" className="btn btn-primary">
                Agendar Consulta
                <ArrowRight size={16} />
              </Link>
              <Link href="/sobre-mi" className="btn btn-outline">
                Mi Trayectoria
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="right">
            <div className="relative">
              <div className="aspect-[4/3] bg-navy/90 flex items-center justify-center">
                <div className="text-center text-white/40 px-8">
                  <p className="text-sm uppercase tracking-wider mb-2">Foto profesional</p>
                  <p className="text-xs">Reemplazar con foto de Miguel</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-4 bg-surface p-5 shadow-lg border border-border">
                <p className="font-heading text-3xl font-bold text-accent">7+</p>
                <p className="text-xs text-text-muted uppercase tracking-wider">Anos de experiencia</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-accent p-4 shadow-lg">
                <p className="font-heading text-2xl font-bold text-white">40+</p>
                <p className="text-xs text-white/80 uppercase tracking-wider">Empresas</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          <AnimatedCounter end={7} suffix="+" label="Anos de experiencia" />
          <AnimatedCounter end={40} suffix="+" label="Empresas asesoradas" />
          <AnimatedCounter end={50} suffix="+" label="Proyectos completados" />
          <AnimatedCounter end={2} label="Maestrias" />
        </div>
      </section>

      {/* Credentials bar */}
      <section className="bg-primary px-6 py-8">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-8 md:justify-between">
          {credentials.map((c) => (
            <div key={c.title} className="flex items-center gap-3">
              <c.icon size={20} className="text-accent" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-semibold text-white">{c.title}</p>
                <p className="text-xs text-white/50">{c.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="relative px-6 py-20 overflow-hidden">
        <BackgroundPattern variant="grid" />
        <div className="relative mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="section-badge">Consultoria</span>
              <h2>Areas de Especializacion</h2>
              <p className="mt-4 mx-auto max-w-lg text-text-muted">
                Consultoria estrategica en las areas que mas impacto generan en
                la transformacion digital de tu empresa.
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <Link href={s.href} className="block card-hover no-underline h-full">
                  <s.icon size={32} className="mb-4 text-accent" strokeWidth={1.5} />
                  <h3 className="mb-3 text-lg">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{s.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-accent">
                    Ver mas <ArrowRight size={12} />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Client growth chart */}
      <section className="bg-surface px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <span className="section-badge">Resultados</span>
                <h2 className="mb-6">Crecimiento en Adquisicion de Clientes</h2>
                <p className="mb-6 text-text-muted leading-relaxed">
                  Mis clientes ven resultados tangibles en los primeros meses.
                  A traves de estrategias de marketing digital, SEO y campanas
                  basadas en datos, aceleramos la adquisicion de clientes de
                  forma sostenible.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <p className="font-heading text-2xl font-bold text-primary">40+</p>
                    <p className="text-xs text-text-muted uppercase tracking-wider">Empresas</p>
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-bold text-primary">50+</p>
                    <p className="text-xs text-text-muted uppercase tracking-wider">Proyectos</p>
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-bold text-primary">7+</p>
                    <p className="text-xs text-text-muted uppercase tracking-wider">Anos</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface p-6 border border-border">
                <p className="text-xs text-text-muted uppercase tracking-wider mb-4">Adquisicion de clientes — Crecimiento anual</p>
                <DecorativeChart />
                <div className="flex justify-between mt-4 text-xs text-text-muted">
                  <span>Enero</span>
                  <span>Junio</span>
                  <span>Diciembre</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Certified knowledge section - Navy */}
      <section className="section-navy px-6 py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
          <FadeIn direction="left">
            <div className="aspect-[4/3] bg-navy-light flex items-center justify-center">
              <div className="text-center text-white/30 px-8">
                <p className="text-sm uppercase tracking-wider mb-2">Imagen</p>
                <p className="text-xs">Conferencia, clase o reunion</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <span className="section-badge section-badge-white">Conocimiento Certificado</span>
            <h2 className="mb-6">
              Formacion de Primer Nivel Aplicada a tu Negocio
            </h2>
            <p className="mb-8 text-white/60">
              Cada recomendacion que hago esta respaldada por formacion academica
              de universidades de clase mundial y experiencia practica en el
              mercado mexicano.
            </p>
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-sm text-white/80">{c}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* CTA - Full width redesign */}
      <section className="relative overflow-hidden">
        <div className="bg-primary">
          <div className="mx-auto max-w-[1200px] grid items-center gap-12 px-6 py-20 md:grid-cols-2">
            <FadeIn>
              <span className="section-badge section-badge-white">Siguiente Paso</span>
              <h2 className="text-white mb-6">
                ¿Listo para Transformar tu Empresa?
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Agenda una consulta sin compromiso. Hablemos de donde esta tu
                empresa hoy y disenemos juntos la estrategia digital que
                necesitas para llegar a donde quieres.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contacto" className="btn btn-white">
                  Agendar Consulta
                  <ArrowRight size={16} />
                </Link>
                <Link href="/sobre-mi" className="btn border-2 border-white/30 text-white hover:bg-white/10">
                  Conoce Mi Trayectoria
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "7+", label: "Anos de experiencia" },
                  { number: "40+", label: "Empresas asesoradas" },
                  { number: "50+", label: "Proyectos completados" },
                  { number: "2", label: "Maestrias" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 border border-white/10 p-6 text-center">
                    <p className="font-heading text-3xl font-bold text-white">{s.number}</p>
                    <p className="text-xs text-white/50 uppercase tracking-wider mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
