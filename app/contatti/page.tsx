"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContattiPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("https://formsubmit.co/ajax/contatti@martenslab.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await res.json();

      if (data.success === "true" || data.success === true) {
        setStatus("success");
        setMessage(
          "Grazie, il tuo messaggio è stato inviato correttamente. Ti risponderò appena possibile."
        );
        form.reset();
      } else {
        setStatus("error");
        setMessage(
          "Non sono riuscito a inviare il messaggio in questo momento. Riprova tra poco oppure scrivimi direttamente via email."
        );
      }
    } catch {
      setStatus("error");
      setMessage(
        "C’è stato un problema durante l’invio. Riprova tra poco oppure contattami direttamente via email."
      );
    }
  }

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
      <section className="relative px-6 pb-12 pt-24 md:px-10 md:pb-14 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/75 backdrop-blur">
              Contatti
            </span>

            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              Parliamo del tuo progetto
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Se hai in mente un sito nuovo, un restyling, una landing page o una
              sistemazione tecnica, scrivimi qui. Puoi raccontarmi in breve di cosa
              hai bisogno e ti risponderò appena possibile.
            </p>

            <div className="mt-6 space-y-2 text-white/70">
              <p>
                Oppure puoi scrivermi direttamente a{" "}
                <a
                  href="mailto:contatti@martenslab.com"
                  className="text-cyan-300 transition hover:text-cyan-200"
                >
                  contatti@martenslab.com
                </a>
              </p>

              <p>
                Per contatto diretto:{" "}
                <a
                  href="mailto:lorenzo@martenslab.com"
                  className="text-cyan-300 transition hover:text-cyan-200"
                >
                  lorenzo@martenslab.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENUTO */}
      <section className="relative px-6 pb-20 pt-4 md:px-10 md:pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          {/* BOX INFO */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
              Come posso aiutarti
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Nuovi siti, restyling e supporto tecnico
            </h2>

            <div className="mt-6 space-y-4 text-white/70">
              <p>
                Posso aiutarti a progettare un sito da zero oppure a migliorare una
                presenza online già esistente.
              </p>

              <p>
                Mi occupo di siti vetrina, landing page, manutenzione WordPress,
                piccoli interventi tecnici, ottimizzazione della struttura e migrazione siti.
              </p>

              <p>
                Anche se il progetto è ancora all’inizio, puoi scrivermi senza problemi:
                spesso basta una base chiara per partire nella direzione giusta.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                Siti vetrina e landing page
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                Restyling siti esistenti
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                Supporto tecnico e piccoli fix
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                Manutenzione WordPress e migrazione siti
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/10 via-blue-400/5 to-emerald-400/10 p-7 backdrop-blur md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200/90">
              Scrivimi
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Raccontami di cosa hai bisogno
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <input
                type="hidden"
                name="_subject"
                value="Nuova richiesta dal sito MartensLab"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-white/85"
                >
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-cyan-300/40 focus:bg-white/[0.07]"
                  placeholder="Il tuo nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white/85"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-cyan-300/40 focus:bg-white/[0.07]"
                  placeholder="La tua email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-white/85"
                >
                  Messaggio
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-cyan-300/40 focus:bg-white/[0.07]"
                  placeholder="Dimmi qualcosa sul tuo progetto, sul sito che hai in mente o sul problema che vuoi risolvere"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-[1.01] hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? "Sto inviando il messaggio..." : "Invia messaggio"}
              </button>

              <p className="text-xs leading-5 text-white/45">
                Nessun invio automatico o spam: leggerò personalmente il tuo messaggio.
              </p>

              {message && (
                <div
                  className={`rounded-2xl border px-4 py-3 text-sm leading-6 ${
                    status === "success"
                      ? "border-emerald-300/25 bg-emerald-400/10 text-emerald-200"
                      : "border-red-300/25 bg-red-400/10 text-red-200"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-base font-semibold">
                      {status === "success" ? "✓" : "!"}
                    </span>
                    <p>{message}</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}