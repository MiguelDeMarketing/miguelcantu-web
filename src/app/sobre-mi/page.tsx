import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, Award, BookOpen, CheckCircle, Globe } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Sobre Mi — Miguel Cantu, Consultor en Transformacion Digital",
  description:
    "Conoce a Miguel Cantu: consultor en marketing digital, transformacion digital e inteligencia artificial. MBA IEBS, Maestria EGADE, Micromaster Boston University, profesor Tec de Monterrey.",
};

const stats = [
  { end: 7, suffix: "+", label: "Anos de experiencia" },
  { end: 40, suffix: "+", label: "Empresas asesoradas" },
  { end: 50, suffix: "+", label: "Proyectos completados" },
  { end: 2, suffix: "", label: "Maestrias" },
];

const education = [
  {
    icon: GraduationCap,
    title: "MBA en Administracion de Empresas — Transformacion Digital",
    institution: "Universidad IEBS, Espana",
  },
  {
    icon: GraduationCap,
    title: "Maestria en Internet Business Analytics",
    institution: "EGADE Business School — Tecnologico de Monterrey",
  },
  {
    icon: Globe,
    title: "MicroMaster en Liderazgo Digital",
    institution: "Universidad de Boston — Plataforma EdX",
  },
  {
    icon: Award,
    title: "Diplomado en Marketing Digital",
    institution: "Universidad IEBS, Espana",
  },
  {
    icon: Award,
    title: "Certificacion en Estrategia Conectada",
    institution: "Universidad de Wharton — Plataforma EdX",
  },
  {
    icon: Award,
    title: "7+ Certificaciones en Operativa Digital",
    institution: "Diseno web, SEO, PPC, Analitica web y mas",
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
    period: "Presente",
    role: "Representante de Mexico — Foro Mundial de Angeles Inversionistas",
    description:
      "Miembro del comite de Ciencias, Tecnologia e Innovacion, atendiendo temas de Inclusion Digital y Tecnologias Emergentes.",
  },
  {
    period: "2022 — Presente",
    role: "Profesor de Catedra — Tecnologico de Monterrey",
    description:
      "Docente bajo el modelo TEC 21 en programas de carrera y educacion continua en temas de marketing digital y transformacion digital.",
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
        <AnimatedBackground variant="grid" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
          <FadeIn>
            <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-xl ring-1 ring-black/5">
              <img
                src="/miguel-portrait.png"
                alt="Miguel Cantu - Retrato profesional"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <span className="section-badge">Quien Soy</span>
            <h2 className="mb-6">Miguel Cantu</h2>
            <p className="mb-4 text-text-muted leading-relaxed">
              Represento a Mexico en el Foro Mundial de Angeles Inversionistas,
              donde formo parte del comite de Ciencias, Tecnologia e Innovacion
              atendiendo temas de Inclusion Digital y Tecnologias Emergentes.
            </p>
            <p className="mb-4 text-text-muted leading-relaxed">
              Soy Profesor de catedra en el Tecnologico de Monterrey bajo el
              modelo TEC 21, y consultor en marketing digital, transformacion
              digital e inteligencia artificial para empresas que quieren crecer
              con claridad y datos.
            </p>
            <p className="mb-8 text-text-muted leading-relaxed">
              Con un MBA en Transformacion Digital por IEBS (Espana), Maestria
              en Internet Business Analytics por EGADE, MicroMaster en Liderazgo
              Digital por Boston University y certificacion en Estrategia
              Conectada por Wharton, combino formacion de clase mundial con
              experiencia practica en mas de 40 empresas.
            </p>

            <div className="grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <AnimatedCounter key={s.label} end={s.end} suffix={s.suffix} label={s.label} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Education */}
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
        <AnimatedBackground variant="grid" />
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

      {/* Mission navy */}
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
            <div className="aspect-video overflow-hidden rounded-lg shadow-xl ring-1 ring-black/5">
              <img
                src="/miguel-mission.png"
                alt="Miguel Cantu impartiendo clase"
                className="h-full w-full object-cover"
              />
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
              <FadeIn key={t.role} delay={i * 0.1}>
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
      <section className="relative overflow-hidden">
        <div className="bg-primary">
          <div className="mx-auto max-w-[1200px] grid items-center gap-12 px-6 py-20 md:grid-cols-2">
            <FadeIn>
              <h2 className="text-white mb-6">¿Trabajamos juntos?</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Si buscas un consultor en transformacion digital, marketing digital
                o inteligencia artificial con formacion certificada y experiencia
                real, hablemos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contacto" className="btn btn-white">
                  Agendar Consulta <ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "7+", label: "Anos de experiencia" },
                  { number: "40+", label: "Empresas asesoradas" },
                  { number: "2", label: "Maestrias" },
                  { number: "7+", label: "Certificaciones" },
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
