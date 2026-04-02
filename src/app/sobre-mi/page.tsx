import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, Award, BookOpen, CheckCircle } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { BackgroundPattern } from "@/components/BackgroundPattern";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Sobre Mi — Miguel Cantu, Consultor en Transformacion Digital",
  description:
    "Conoce a Miguel Cantu: consultor en marketing digital, transformacion digital e inteligencia artificial. 2 maestrias EGADE, Micromaster Boston University, profesor Tec de Monterrey.",
};

const stats = [
  { end: 7, suffix: "+", label: "Anos de experiencia" },
  { end: 40, suffix: "+", label: "Empresas asesoradas" },
  { end: 50, suffix: "+", label: "Proyectos completados" },
  { end: 2, suffix: "", label: "Maestrias EGADE" },
];

const education = [
  {
    icon: GraduationCap,
    title: "Maestria en Transformacion Digital",
    institution: "EGADE Business School — Tecnologico de Monterrey",
  },
  {
    icon: GraduationCap,
    title: "Maestria en Analitica de Datos",
    institution: "EGADE Business School — Tecnologico de Monterrey",
  },
  {
    icon: GraduationCap,
    title: "Micromaster en Transformacion Digital",
    institution: "Boston University",
  },
  {
    icon: Award,
    title: "7+ Certificaciones en Analitica Digital",
    institution: "Analitica Web, SEO, Marketing Digital y mas",
  },
  {
    icon: BookOpen,
    title: "Profesor de Catedra",
    institution: "Tecnologico de Monterrey — Programas de carrera y educacion continua",
  },
];

const values = [
  {
    number: "01",
    title: "Enfoque Estrategico",
    description:
      "Cada proyecto empieza con una vision clara del negocio. La tecnologia es el medio, no el fin.",
  },
  {
    number: "02",
    title: "Decisiones con Datos",
    description:
      "No recomiendo por intuicion. Cada sugerencia esta respaldada por analitica y evidencia.",
  },
  {
    number: "03",
    title: "Transparencia Total",
    description:
      "Comunicacion directa, sin jerga innecesaria. Sabes exactamente donde estas y a donde vas.",
  },
  {
    number: "04",
    title: "Resultados Medibles",
    description:
      "KPIs claros desde el dia uno. Si no se puede medir, no se puede mejorar.",
  },
];

const timeline = [
  {
    period: "2024 — Presente",
    role: "Founder, De Marketing",
    description:
      "Consultoria AI-First en marketing digital, transformacion digital e inteligencia artificial para empresas medianas en Mexico.",
  },
  {
    period: "2022 — Presente",
    role: "Profesor de Catedra, Tec de Monterrey",
    description:
      "Docente en programas de carrera y educacion continua del Tecnologico de Monterrey en temas de marketing digital y transformacion digital.",
  },
  {
    period: "2019 — 2024",
    role: "Consultoria Independiente",
    description:
      "Proyectos de estrategia digital, SEO, analitica web, campanas digitales y transformacion digital para mas de 40 empresas.",
  },
  {
    period: "2017 — 2019",
    role: "Inicio de Carrera en Marketing Digital",
    description:
      "Primeros anos construyendo experiencia en analitica, posicionamiento, estrategia de contenidos y campanas digitales.",
  },
];

export default function SobreMi() {
  return (
    <>
      <div className="page-header">
        <h1>Sobre Mi</h1>
        <p className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <span>Sobre mi</span>
        </p>
      </div>

      {/* Bio */}
      <section className="relative px-6 py-20 overflow-hidden">
        <BackgroundPattern variant="dots" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
          <FadeIn>
            <div className="aspect-[3/4] bg-navy/90 flex items-center justify-center">
              <div className="text-center text-white/40 px-8">
                <p className="text-sm uppercase tracking-wider mb-2">Foto profesional</p>
                <p className="text-xs">Retrato de Miguel</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <span className="section-badge">Quien Soy</span>
            <h2 className="mb-6">Miguel Cantu</h2>
            <p className="mb-4 text-text-muted leading-relaxed">
              Consultor en marketing digital, transformacion digital e
              inteligencia artificial con sede en Monterrey, Mexico. Ayudo a
              directores y equipos de liderazgo a tomar mejores decisiones
              digitales.
            </p>
            <p className="mb-4 text-text-muted leading-relaxed">
              Con 2 maestrias por EGADE Business School, un Micromaster por
              Boston University y mas de 7 certificaciones en analitica digital,
              combino formacion de primer nivel con experiencia practica en mas
              de 40 empresas.
            </p>
            <p className="mb-8 text-text-muted leading-relaxed">
              Tambien soy profesor de catedra en el Tecnologico de Monterrey,
              donde enseno marketing digital y transformacion digital en
              programas de carrera y educacion continua.
            </p>

            <div className="grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <AnimatedCounter key={s.label} end={s.end} suffix={s.suffix} label={s.label} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="bg-surface px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="section-badge">Formacion</span>
              <h2>Educacion y Credenciales</h2>
            </div>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {education.map((e, i) => (
              <FadeIn key={e.title} delay={i * 0.1}>
                <div className="card-hover h-full">
                  <e.icon size={28} className="mb-4 text-accent" strokeWidth={1.5} />
                  <h3 className="mb-2 text-base font-semibold">{e.title}</h3>
                  <p className="text-sm text-text-muted">{e.institution}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative px-6 py-20 overflow-hidden">
        <BackgroundPattern variant="grid" />
        <div className="relative mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="section-badge">Filosofia</span>
              <h2>Valores que Guian mi Trabajo</h2>
            </div>
          </FadeIn>
          <div className="grid gap-8 sm:grid-cols-2">
            {values.map((v, i) => (
              <FadeIn key={v.number} delay={i * 0.1}>
                <div className="flex gap-5">
                  <span className="font-heading text-4xl font-bold text-accent/20 leading-none">
                    {v.number}
                  </span>
                  <div>
                    <h3 className="mb-2 text-lg">{v.title}</h3>
                    <p className="text-sm leading-relaxed text-text-muted">{v.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Authority navy */}
      <section className="section-navy px-6 py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
          <FadeIn>
            <span className="section-badge section-badge-white">Mision</span>
            <h2 className="mb-6">
              Ayudar a Empresas a Tomar Mejores Decisiones Digitales
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              Creo que cada empresa merece acceso a estrategia digital de primer
              nivel. No necesitas un equipo de 50 personas — necesitas claridad
              en que hacer, por que y cuando.
            </p>
            <ul className="space-y-3">
              {["Consultor en marketing digital", "Consultor en transformacion digital", "Consultor en estrategia digital", "Consultor en inteligencia artificial"].map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-accent shrink-0" />
                  <span className="text-sm text-white/80">{s}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.2} direction="right">
            <div className="aspect-video bg-navy-light flex items-center justify-center">
              <div className="text-center text-white/30 px-8">
                <p className="text-sm uppercase tracking-wider mb-2">Imagen</p>
                <p className="text-xs">Conferencia o clase en el Tec</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[800px]">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="section-badge">Trayectoria</span>
              <h2>Experiencia Profesional</h2>
            </div>
          </FadeIn>
          <div className="space-y-0">
            {timeline.map((t, i) => (
              <FadeIn key={t.period} delay={i * 0.1}>
                <div className="relative flex gap-6 pb-10 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-accent shrink-0 mt-1.5" />
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-border" />}
                  </div>
                  <div className="pb-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">{t.period}</p>
                    <h3 className="text-lg mb-2">{t.role}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{t.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px] bg-primary px-8 py-16 text-center">
          <FadeIn>
            <h2 className="mb-4 text-white">¿Trabajamos juntos?</h2>
            <p className="mx-auto mb-8 max-w-lg text-white/60">
              Si buscas un consultor en transformacion digital, marketing digital
              o inteligencia artificial, hablemos.
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
