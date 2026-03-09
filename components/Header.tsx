"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Progetti", href: "/progetti" },
  { label: "Chi sono", href: "/chi-sono" },
  { label: "Contatti", href: "/contatti" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#07111f]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="text-2xl font-black tracking-tight text-white transition hover:text-cyan-300"
        >
          <span className="martens-shine">MartensLab</span>
        </Link>

        {/* DESKTOP */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/75 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contatti"
            className="rounded-2xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition duration-300 hover:scale-[1.03] hover:bg-cyan-300"
          >
            Scrivimi
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10 md:hidden"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-white/10 bg-[#07111f] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contatti"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-2xl bg-cyan-400 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Scrivimi
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}