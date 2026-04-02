import Link from "next/link";
import { ArrowRight, BarChart3, Target, TrendingUp, Brain, CheckCircle, GraduationCap, Award } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { DecorativeChart } from "@/components/DecorativeChart";
import { RadialProgress } from "@/components/RadialProgress";
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

const reasons = [
  "Vision estrategica, no solo ejecucion tactica",
  "2 maestrias por EGADE Business School",
  "Micromaster en Transformacion Digital por Boston University",
  "Mas de 7 certificaciones en analitica digital",
  "Profesor de catedra en el Tecnologico de Monterrey",
  "Experiencia con mas de 40 empresas en Mexico",
];

const credentials = [
  { icon: GraduationCap, title: "2 Maestrias", subtitle: "EGADE Business School" },
  { icon: GraduationCap, title: "Micromaster", subtitle: "Boston University" },
  { icon: Award, title: "7+ Certificaciones", subtitle: "Analitica Digital" },
  { icon: Award, title: "Profesor de Catedra", subtitle: "Tec de Monterrey" },
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
              Consultoria Estrategica en Marketing Digital y Transformacion Digital
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

      {/* Stats bar with animated counters */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          <AnimatedCounter end={7} suffix="+" label="Anos de experiencia" />
          <AnimatedCounter end={40} suffix="+" label="Empresas asesoradas" />
          <AnimatedCounter end={50} suffix="+" label="Proyectos completados" />
          <AnimatedCounter end={2} label="Maestrias EGADE" />
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

      {/* Growth chart section */}
      <section className="bg-surface px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <span className="section-badge">Resultados</span>
                <h2 className="mb-6">Crecimiento Basado en Estrategia y Datos</h2>
                <p className="mb-6 text-text-muted leading-relaxed">
                  Cada proyecto arranca con un diagnostico claro y termina con
                  resultados medibles. No vendo humo — trabajo con KPIs reales
                  desde el dia uno.
                </p>
                <div className="flex gap-8">
                  <RadialProgress value={50} label="Proyectos" sublabel="Completados" />
                  <RadialProgress value={40} label="Empresas" sublabel="Asesoradas" />
                  <RadialProgress value={7} label="Certificaciones" sublabel="Digitales" size={100} />
                </div>
              </div>
              <div className="bg-surface p-6 border border-border">
                <p className="text-xs text-text-muted uppercase tracking-wider mb-4">Impacto en clientes</p>
                <DecorativeChart />
                <div className="flex justify-between mt-4 text-xs text-text-muted">
                  <span>Inicio</span>
                  <span>6 meses</span>
                  <span>12 meses</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Authority section - Navy */}
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
            <span className="section-badge section-badge-white">Por Que Elegirme</span>
            <h2 className="mb-6">
              Estrategia Digital con Respaldo Academico y Experiencia Real
            </h2>
            <p className="mb-8 text-white/60">
              Combino formacion de primer nivel con experiencia practica en mas
              de 40 empresas. No soy una agencia — soy un estratega que trabaja
              codo a codo con tu equipo directivo.
            </p>
            <ul className="space-y-4">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-sm text-white/80">{r}</span>
                </li>
              ))}
            </ul>
            <Link href="/sobre-mi" className="btn btn-white mt-8">
              Conoce Mi Trayectoria
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-20 overflow-hidden">
        <BackgroundPattern variant="lines" />
        <div className="relative mx-auto max-w-[1200px] bg-primary px-8 py-16 text-center">
          <FadeIn>
            <span className="section-badge section-badge-white">Siguiente Paso</span>
            <h2 className="mb-4 text-white">¿Listo para transformar tu empresa?</h2>
            <p className="mx-auto mb-8 max-w-lg text-white/60">
              Agenda una consulta sin compromiso. Hablemos de donde esta tu
              empresa y a donde quieres llevarla.
            </p>
            <Link href="/contacto" className="btn btn-white">
              Agendar Consulta
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
