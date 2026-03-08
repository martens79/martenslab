"use client";

const services = [
  {
    title: "Siti vetrina",
    desc: "Pagine eleganti e veloci per professionisti, studi, attività locali e brand personali.",
  },
  {
    title: "Restyling siti",
    desc: "Rinnovo siti esistenti con un design più moderno, chiaro e credibile.",
  },
  {
    title: "Landing page",
    desc: "Pagine mirate per presentare un servizio, raccogliere contatti o validare un progetto.",
  },
  {
    title: "Supporto tecnico",
    desc: "Interventi su layout, responsive, contatti, performance, SEO base e piccoli fix mirati.",
  },
];

const projects = [
  {
    title: "CertifyQuiz",
    tag: "Piattaforma quiz",
    desc: "Piattaforma multi-lingua per quiz e certificazioni IT, con focus su UX, struttura e crescita SEO.",
  },
  {
    title: "Dentro le Parole",
    tag: "Sito editoriale",
    desc: "Sito d’autore dal tono dark fantasy, progettato per trasmettere identità, eleganza e atmosfera.",
  },
  {
    title: "Progetto su misura",
    tag: "Placeholder",
    desc: "Ogni attività ha esigenze diverse: struttura, tono, immagini, call to action e obiettivi cambiano.",
  },
];

export default function HomePage() {
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
      <section className="relative px-6 pb-16 pt-24 md:px-10 md:pb-20 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/75 backdrop-blur">
              Studio web indipendente · design + sviluppo
            </span>

            <h1 className="mt-6 text-balance text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="martens-shine">MartensLab</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg md:text-xl">
              Realizzo siti web moderni, curati e veloci per attività, professionisti
              e progetti che vogliono presentarsi bene e lasciare il segno.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contatti"
                className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-[1.03] hover:bg-cyan-300"
              >
                Richiedi un preventivo
              </a>

              <a
                href="/servizi"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition duration-300 hover:scale-[1.03] hover:bg-white/10"
              >
                Scopri i servizi
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-white/55">
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1">
                Next.js
              </span>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1">
                Design su misura
              </span>
              <span className="rounded-full border border-fuchsia-400/20 bg-fuchsia-400/5 px-3 py-1">
                Responsive
              </span>
              <span className="rounded-full border border-yellow-400/20 bg-yellow-400/5 px-3 py-1">
                SEO base
              </span>
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
              Non siti gonfi di effetti inutili. Punto a chiarezza, impatto visivo,
              velocità e una struttura che dia subito un’impressione professionale.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]"
              >
                <div className="mb-4 h-11 w-11 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-blue-400/10 to-emerald-400/20 ring-1 ring-white/10" />
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGETTI */}
      <section className="relative px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 md:mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/80">
              Progetti
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Alcuni lavori e direzioni creative
            </h2>
            <p className="mt-3 max-w-2xl text-white/65">
              Due progetti veri valgono più di dieci promesse. Qui puoi mostrare
              quello che sai fare, con stili diversi e personalità diverse.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:border-emerald-300/30 hover:bg-white/[0.07]"
              >
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/55">
                  {project.tag}
                </span>

                <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{project.desc}</p>

                <a
                  href="/progetti"
                  className="mt-6 inline-flex text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                >
                  Vedi di più →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PERCHE' SCEGLIERMI */}
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
              Dopo aver lavorato su progetti reali, ho capito una cosa semplice:
              un sito deve colpire, ma deve anche farsi capire. Per questo unisco
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
                  Componenti riutilizzabili, responsive vero e struttura ordinata.
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
              Che tu parta da zero o abbia già un sito da migliorare, possiamo
              costruire una presenza online più forte, più chiara e più tua.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href="/contatti"
                className="rounded-2xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition duration-300 hover:scale-[1.02] hover:bg-cyan-300"
              >
                Scrivimi ora
              </a>

              <a
                href="/chi-sono"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center font-semibold text-white transition duration-300 hover:bg-white/10"
              >
                Scopri chi c’è dietro MartensLab
              </a>
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
            <a
              href="/contatti"
              className="rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-[1.03]"
            >
              Richiedi una valutazione
            </a>

            <a
              href="/progetti"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white/10"
            >
              Guarda i progetti
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}