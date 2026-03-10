"use client";

import { useState, type CSSProperties } from "react";
import {
  Monitor,
  RefreshCw,
  MousePointerClick,
  Wrench,
  ShieldCheck,
  ArrowRightLeft,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Siti vetrina",
    desc: "Pagine eleganti e veloci per professionisti, studi, attività locali e brand personali.",
    icon: Monitor,
  },
  {
    title: "Restyling siti",
    desc: "Rinnovo siti esistenti con un design più moderno, chiaro e credibile.",
    icon: RefreshCw,
  },
  {
    title: "Landing page",
    desc: "Pagine mirate per presentare un servizio, raccogliere contatti o validare un progetto.",
    icon: MousePointerClick,
  },
  {
    title: "Supporto tecnico",
    desc: "Interventi su layout, responsive, contatti, performance, SEO base e piccoli fix mirati.",
    icon: Wrench,
  },
  {
    title: "Manutenzione WordPress",
    desc: "Aggiornamento plugin, sicurezza, backup e manutenzione di siti WordPress e CMS simili.",
    icon: ShieldCheck,
  },
  {
    title: "Migrazione siti",
    desc: "Spostamento siti tra hosting o domini, configurazione tecnica e verifica del corretto funzionamento.",
    icon: ArrowRightLeft,
  },
];

const floatingTags = [
  { label: "Design su misura", radius: 165, angle: 235, duration: 20 },
  { label: "SEO base", radius: 150, angle: 195, duration: 22 },
  { label: "Responsive", radius: 165, angle: 330, duration: 18 },
  { label: "Siti veloci", radius: 145, angle: 150, duration: 16 },
];

const projectSlides = [
  {
    title: "CertifyQuiz",
    category: "Piattaforma quiz",
    image: "/images/projects/certifyquiz.jpg",
  },
  {
    title: "Dentro le Parole",
    category: "Sito editoriale",
    image: "/images/projects/dentro-le-parole.jpg",
  },
  {
    title: "Trattoria Genovese",
    category: "Demo ristorante",
    image: "/images/projects/trattoria-genovese.jpg",
  },
  {
    title: "Hai un progetto?",
    category: "Richiedi un sito",
    image: "/images/projects/start-project.jpg",
  },
];
const duplicatedSlides = [...projectSlides, ...projectSlides];

export default function HomePage() {
  const [heroHovered, setHeroHovered] = useState(false);
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07111f] text-white">
      {/* SFONDO */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-100px] top-28 h-[300px] w-[300px] rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute left-[-80px] bottom-10 h-[260px] w-[260px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:38px_38px]" />
      </div>

      {/* HERO */}
      <section className="relative flex min-h-[60vh] items-center px-6 pb-4 pt-14 md:px-10 md:pb-6 md:pt-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="relative mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/75 backdrop-blur">
              Studio web indipendente · design + sviluppo
            </span>

    <div className="relative mt-3 flex justify-center">
  <div className="relative flex h-[200px] w-full max-w-[900px] items-center justify-center md:h-[240px]">
    {/* ORBITING TAGS */}
    <div className="pointer-events-none absolute inset-0 hidden md:block">
      {floatingTags.map((tag, i) => (
        <div
          key={tag.label}
          className={`orbit ${heroHovered ? "orbit-expanded" : ""}`}
          style={
            {
              "--radius": `${tag.radius}px`,
              "--radius-expanded": `${tag.radius + 34}px`,
              "--angle": `${tag.angle}deg`,
              "--duration": `${tag.duration}s`,
              "--delay": `${i * -2}s`,
            } as CSSProperties
          }
        >
          <div className="orbit-pill">{tag.label}</div>
        </div>
      ))}
    </div>

    {/* TITLE */}
    <h1
      onMouseEnter={() => setHeroHovered(true)}
      onMouseLeave={() => setHeroHovered(false)}
      className="relative z-10 text-balance text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-[5.8rem]">
    
      <span className="martens-shine">MartensLab</span>
    </h1>
  </div>
</div>
            <p className="mx-auto mt-2 max-w-xl text-base leading-7 text-white/75 sm:text-lg md:text-xl">
              Realizzo siti web moderni, curati e veloci per attività,
              professionisti e progetti che vogliono presentarsi bene online e
              lasciare il segno.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contatti"
                className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-[1.03] hover:bg-cyan-300"
              >
                Richiedi un preventivo
              </Link>

              <a
                href="#servizi"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition duration-300 hover:scale-[1.03] hover:bg-white/10"
              >
                Scopri i servizi
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-white/60 md:hidden">
              {["Siti veloci", "Responsive", "SEO base", "WordPress"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERIA PROGETTI SCORREVOLE */}
      <section className="relative overflow-hidden px-6 pb-14 md:px-10 md:pb-18">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              Progetti e collaborazioni
            </p>
          </div>

          <div className="group relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#07111f] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#07111f] to-transparent" />

            <div className="flex w-max gap-5 animate-[marquee_28s_linear_infinite] group-hover:[animation-play-state:paused]">
              {duplicatedSlides.map((project, index) => (
                <Link
                  key={`${project.title}-${index}`}
                  href="/progetti"
                  className="w-[280px] shrink-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07] md:w-[330px]"
                >
                  <div className="h-44 w-full overflow-hidden bg-white/5 md:h-52">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 hover:scale-[1.04]"
                    />
                  </div>

                  <div className="p-5">
                    <span className="inline-flex mb-1 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/75 backdrop-blur">
                      {project.category}
                    </span>

                    <h3 className="mt-4 text-xl font-semibold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/60">
                      Vai al portfolio completo e scopri il progetto.
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section id="servizi" className="relative px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 md:mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
              Servizi
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Soluzioni web essenziali, ma fatte bene
            </h2>
            <p className="mt-3 max-w-2xl text-white/65">
              Realizzo siti chiari, veloci e credibili, ma posso aiutare anche su
              manutenzione, piccoli interventi tecnici, restyling e migrazioni
              di siti WordPress.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 via-blue-400/10 to-emerald-400/20 ring-1 ring-white/10">
                    <Icon className="h-5 w-5 text-cyan-200" />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPROCCIO + CTA */}
      <section className="relative px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-fuchsia-300/80">
              Approccio
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Siti pensati per essere belli, chiari e credibili
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              Un sito deve colpire, ma deve anche farsi capire. Per questo unisco
              design, struttura e attenzione tecnica senza complicare tutto.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="font-semibold">Design curato</h3>
                <p className="mt-2 text-sm text-white/65">
                  Layout moderni, leggibili e coerenti con il tono del progetto.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="font-semibold">Sviluppo pulito</h3>
                <p className="mt-2 text-sm text-white/65">
                  Componenti ordinati, responsive vero e struttura solida.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="font-semibold">Velocità</h3>
                <p className="mt-2 text-sm text-white/65">
                  Pagine leggere, essenziali e senza effetti pesanti inutili.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="font-semibold">Identità</h3>
                <p className="mt-2 text-sm text-white/65">
                  Ogni sito deve trasmettere carattere, non sembrare copiato.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-400/10 via-blue-400/5 to-emerald-400/10 p-7 backdrop-blur md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200/90">
              Hai un progetto?
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Facciamolo partire bene
            </h2>
            <p className="mt-4 text-white/75">
              Che tu parta da zero o abbia già un sito da migliorare, posso aiutarti
              a costruire una presenza online più forte, più chiara e più tua.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <Link
                href="/contatti"
                className="rounded-2xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition duration-300 hover:scale-[1.02] hover:bg-cyan-300"
              >
                Scrivimi ora
              </Link>

              <Link
                href="/chi-sono"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center font-semibold text-white transition duration-300 hover:bg-white/10"
              >
                Scopri chi c’è dietro MartensLab
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="relative px-6 pb-20 pt-10 md:px-10 md:pb-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-10 text-center backdrop-blur md:px-10 md:py-14">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Un sito fatto bene cambia davvero la percezione
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Anche un progetto piccolo può sembrare solido, professionale e curato
            se viene presentato nel modo giusto. È lì che si gioca la prima impressione.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contatti"
              className="rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-[1.03]"
            >
              Richiedi una valutazione
            </Link>

            <Link
              href="/progetti"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white/10"
            >
              Guarda i progetti
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 10px));
          }
        }
      `}</style>
    </main>
  );
}