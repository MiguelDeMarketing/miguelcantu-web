"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const serviceLinks = [
  { href: "/consultoria/marketing-digital", label: "Marketing Digital" },
  { href: "/consultoria/transformacion-digital", label: "Transformacion Digital" },
  { href: "/consultoria/estrategia-digital", label: "Estrategia Digital" },
  { href: "/consultoria/inteligencia-artificial", label: "Inteligencia Artificial" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-surface border-b border-border">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-heading text-xl font-bold text-primary no-underline tracking-tight"
        >
          Miguel Cantu
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-primary no-underline transition-colors hover:text-accent">
            Home
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-accent">
              Consultoria
              <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="bg-surface border border-border shadow-lg min-w-[240px]">
                  {serviceLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block px-5 py-3 text-sm text-primary no-underline transition-colors hover:bg-accent-light hover:text-accent border-b border-border last:border-b-0"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/sobre-mi" className="text-sm font-medium text-primary no-underline transition-colors hover:text-accent">
            Sobre mi
          </Link>
          <Link href="/blog" className="text-sm font-medium text-primary no-underline transition-colors hover:text-accent">
            Blog
          </Link>
          <Link href="/contacto" className="text-sm font-medium text-primary no-underline transition-colors hover:text-accent">
            Contacto
          </Link>
          <Link href="/contacto" className="btn btn-primary text-xs py-2.5 px-5">
            Agendar Consulta
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="text-primary md:hidden" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-surface px-6 py-4 md:hidden">
          <Link href="/" onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-primary no-underline border-b border-border">
            Home
          </Link>
          <div className="border-b border-border">
            <p className="py-3 text-xs font-semibold uppercase tracking-wider text-text-muted">Consultoria</p>
            {serviceLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 pl-4 text-sm text-primary no-underline hover:text-accent"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Link href="/sobre-mi" onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-primary no-underline border-b border-border">
            Sobre mi
          </Link>
          <Link href="/blog" onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-primary no-underline border-b border-border">
            Blog
          </Link>
          <Link href="/contacto" onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-primary no-underline border-b border-border">
            Contacto
          </Link>
          <Link href="/contacto" onClick={() => setOpen(false)} className="btn btn-primary mt-4 w-full text-xs">
            Agendar Consulta
          </Link>
        </div>
      )}
    </nav>
  );
}
