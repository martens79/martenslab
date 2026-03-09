export default function ProgettiPage() {
  const projects = [
    {
      title: "CertifyQuiz",
      tag: "Piattaforma quiz",
      desc: "Piattaforma multi-lingua per quiz e certificazioni IT. Il progetto è stato costruito con attenzione a UX, struttura dei contenuti, performance e crescita SEO.",
      link: "https://www.certifyquiz.com",
    },
    {
      title: "Dentro le Parole",
      tag: "Sito editoriale",
      desc: "Sito d’autore con estetica dark fantasy progettato per comunicare identità narrativa, atmosfera e presenza online professionale.",
      link: "https://www.dentroleparole.com",
    },
    {
      title: "Progetto su misura",
      tag: "Nuovo progetto",
      desc: "Ogni attività ha esigenze diverse: sito vetrina, landing page, restyling o interventi tecnici su siti esistenti. Ogni progetto parte dalla struttura e dagli obiettivi.",
      link: "/contatti",
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
      <section className="relative px-6 pt-24 pb-14 md:px-10 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-6xl">

          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/75 backdrop-blur">
            Portfolio
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Alcuni progetti realizzati
          </h1>

          <p className="mt-6 max-w-2xl text-white/70 text-lg">
            Qui trovi alcuni progetti che rappresentano bene il mio modo di lavorare:
            attenzione al design, struttura chiara e sviluppo pulito.
          </p>

        </div>
      </section>

      {/* PROGETTI */}
      <section className="relative px-6 py-8 md:px-10 md:py-10">
        <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:border-cyan-300/30 hover:bg-white/[0.07]"
            >

              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/55">
                {project.tag}
              </span>

              <h2 className="mt-4 text-2xl font-semibold">
                {project.title}
              </h2>

              <p className="mt-3 text-white/70 text-sm leading-6">
                {project.desc}
              </p>

              <div className="mt-6">
                <a
                  href={project.link}
                  target={project.link.startsWith("http") ? "_blank" : undefined}
                  rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-[1.03] hover:bg-cyan-300"
                >
                  Visita il progetto
                </a>
              </div>

            </article>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 pt-14 pb-24 md:px-10">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-3xl font-bold md:text-4xl">
            Hai un progetto in mente?
          </h2>

          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Che si tratti di un nuovo sito, di un restyling o di una sistemazione tecnica,
            possiamo costruire qualcosa di chiaro, veloce e credibile.
          </p>

          <div className="mt-8">
            <a
              href="/contatti"
              className="rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.03]"
            >
              Contattami
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}