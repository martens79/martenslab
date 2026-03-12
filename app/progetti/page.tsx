import Link from "next/link";

export default function ProgettiPage() {
 const projects = [
  {
    title: "CertifyQuiz",
    tag: "Piattaforma quiz",
    desc: "Piattaforma multi-lingua per quiz e certificazioni IT, progettata con attenzione a UX, struttura dei contenuti, performance e crescita SEO.",
    link: "https://www.certifyquiz.com",
    cta: "Visita il progetto",
  },
  {
    title: "Dentro le Parole",
    tag: "Sito editoriale",
    desc: "Sito d’autore con estetica dark fantasy, pensato per comunicare identità narrativa, atmosfera e presenza online professionale.",
    link: "https://www.dentroleparole.com",
    cta: "Visita il progetto",
  },
  {
    title: "Trattoria Genovese",
    tag: "Sito ristorante",
    desc: "Landing page dimostrativa per un ristorante locale, costruita per valorizzare atmosfera, menu, identità visiva e contatto rapido con i clienti.",
    link: "https://www.trattoriagenovese.it/",
    cta: "Visita il progetto",
  },
  {
    title: "Hai un progetto in mente?",
    tag: "Nuovo progetto",
    desc: "Sito vetrina, landing page, restyling o supporto tecnico: ogni lavoro parte da obiettivi chiari, struttura solida e attenzione all’immagine del cliente.",
    link: "/contatti",
    cta: "Parliamone",
  },
];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07111f] text-white">
      {/* SFONDO */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-100px] top-28 h-[300px] w-[300px] rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute left-[-80px] bottom-10 h-[260px] w-[260px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      {/* HERO */}
      <section className="relative px-6 pb-14 pt-24 md:px-10 md:pb-16 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/75 backdrop-blur">
            Portfolio
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Alcuni progetti realizzati
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Una selezione di progetti reali e dimostrativi che raccontano il mio
            approccio: design curato, struttura chiara, sviluppo pulito e
            attenzione ai risultati.
          </p>
        </div>
      </section>

      {/* PROGETTI */}
      <section className="relative px-6 py-8 md:px-10 md:py-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const isExternal = project.link.startsWith("http");

            return (
              <article
                key={project.title}
                className="group flex min-h-[320px] flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07] hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]"
              >
                <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/55">
                  {project.tag}
                </span>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                  {project.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  {project.desc}
                </p>

                <div className="mt-auto pt-8">
                  {isExternal ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-[1.03] hover:bg-cyan-300"
                    >
                      {project.cta}
                    </a>
                  ) : (
                    <Link
                      href={project.link}
                      className="inline-flex rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-[1.03] hover:bg-cyan-300"
                    >
                      {project.cta}
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="relative px-6 pb-24 pt-14 md:px-10">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-12 text-center backdrop-blur md:px-10">
          <h2 className="text-3xl font-bold md:text-4xl">
            Vuoi il prossimo progetto qui?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Posso aiutarti a creare una presenza online chiara, credibile e su
            misura per la tua attività: dal sito vetrina alla landing page fino
            al restyling di un progetto già esistente.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contatti"
              className="rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.03]"
            >
              Contattami
            </Link>

            <Link
              href="/"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Torna alla home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}