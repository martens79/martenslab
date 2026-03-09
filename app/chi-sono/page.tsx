export default function ChiSonoPage() {
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
      <section className="relative px-6 pb-14 pt-24 md:px-10 md:pb-16 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/75 backdrop-blur">
              Chi sono
            </span>

            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              Dietro MartensLab c’è un approccio pratico, pulito e concreto
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Mi chiamo Lorenzo e realizzo siti web per professionisti, attività
              e progetti che vogliono presentarsi in modo più credibile, ordinato
              e riconoscibile. MartensLab nasce dall’idea di costruire presenze
              online curate, senza effetti inutili e senza complicazioni superflue.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENUTO PRINCIPALE */}
      <section className="relative px-6 py-8 md:px-10 md:py-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
              Il progetto
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              MartensLab è uno studio web indipendente
            </h2>

            <div className="mt-5 space-y-4 text-white/70">
              <p>
                Non nasce per fare siti tutti uguali, ma per costruire progetti
                con una loro presenza, una loro identità e una struttura chiara.
              </p>

              <p>
                Nel tempo ho lavorato su progetti diversi, dalla piattaforma
                CertifyQuiz a siti editoriali come Dentro le Parole, con un
                obiettivo costante: unire estetica, ordine e funzionalità.
              </p>

              <p>
                Mi interessa creare siti che si carichino bene, si leggano bene
                e trasmettano subito una sensazione di cura. Anche quando il
                progetto è semplice, la differenza la fanno struttura, tono,
                gerarchia visiva e attenzione ai dettagli.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/10 via-blue-400/5 to-emerald-400/10 p-7 backdrop-blur md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200/90">
              Mi occupo di
            </p>

            <div className="mt-5 space-y-3">
              {[
                "Siti vetrina per professionisti e attività",
                "Restyling di siti esistenti",
                "Landing page chiare e orientate al contatto",
                "Supporto tecnico e piccoli fix mirati",
                "Manutenzione WordPress e CMS simili",
                "Migrazione siti tra hosting e domini",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPROCCIO */}
      <section className="relative px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-fuchsia-300/80">
            Come lavoro
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Un approccio semplice: chiarezza, design, struttura
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">Chiarezza</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Ogni pagina deve guidare bene chi legge, senza confusione e senza eccessi.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">Design credibile</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                L’aspetto conta: un sito curato cambia subito la percezione del progetto.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">Sviluppo pulito</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Preferisco strutture ordinate, leggere e facili da gestire nel tempo.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">Soluzioni concrete</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Non tutto deve essere enorme: spesso serve una soluzione semplice ma fatta bene.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 pb-20 pt-10 md:px-10 md:pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/80">
              L’obiettivo
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Costruire siti che facciano una buona prima impressione
            </h2>

            <p className="mt-4 max-w-2xl text-white/70">
              Un sito non deve solo esserci: deve presentare bene quello che fai.
              Deve essere leggibile, ordinato, veloce e coerente con la tua identità.
              È su questo che cerco di lavorare ogni volta.
            </p>
          </div>

          <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/10 via-blue-400/5 to-emerald-400/10 p-7 backdrop-blur md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200/90">
              Vuoi parlarmi del tuo progetto?
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Possiamo partire da una base semplice e farla bene
            </h2>

            <p className="mt-4 text-white/75">
              Nuovo sito, restyling, manutenzione o sistemazione tecnica: si può
              partire anche da poco, purché la direzione sia giusta.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href="/contatti"
                className="rounded-2xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition duration-300 hover:scale-[1.02] hover:bg-cyan-300"
              >
                Scrivimi ora
              </a>

              <a
                href="/progetti"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center font-semibold text-white transition duration-300 hover:bg-white/10"
              >
                Guarda i progetti
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}