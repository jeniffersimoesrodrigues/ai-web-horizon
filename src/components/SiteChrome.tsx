import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/", label: "Início" },
  { to: "/profissao", label: "Profissão" },
  { to: "/tendencias", label: "Tendências" },
  { to: "/ods", label: "ODS 9" },
  { to: "/contatos", label: "Contatos" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 glass">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--gradient-hero)] text-primary-foreground">
            AI
          </span>
          <span className="text-gradient">IA.Dev</span>
        </Link>
        <nav className="hidden gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm text-foreground bg-secondary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Menu"
          className="md:hidden rounded-md border border-border p-2"
          onClick={() => setOpen(!open)}
        >
          <span className="block h-0.5 w-5 bg-foreground" />
          <span className="mt-1 block h-0.5 w-5 bg-foreground" />
          <span className="mt-1 block h-0.5 w-5 bg-foreground" />
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm text-foreground bg-secondary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-muted-foreground">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} IA.Dev — Projeto acadêmico sobre IA aplicada ao Desenvolvimento Web.</p>
          <p className="text-xs">Construído com TanStack Start · Inspirado pelo ODS 9 da ONU</p>
        </div>
      </div>
    </footer>
  );
}
