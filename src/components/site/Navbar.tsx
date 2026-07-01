import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { navigationLinks } from "@/lib/navigation";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 min-w-0" onClick={() => setOpen(false)}>
          <span className="grid place-items-center w-9 h-9 shrink-0 rounded-full bg-sage/15">
            <span className="h-2.5 w-2.5 rounded-full bg-sage" />
          </span>
          <span className="font-medium tracking-tight text-foreground truncate">
            Dra. Mariana Oliveira
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {navigationLinks.map((l) => (
            <Link
              key={l.hash}
              to={l.to}
              hash={l.hash}
              className="hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex rounded-full px-5 shadow-soft transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Link to="/" hash="contato">Agendar consulta</Link>
          </Button>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center w-10 h-10 rounded-full border border-border/60 text-foreground hover:bg-secondary/60 transition-all duration-300"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden border-b border-border/60 absolute top-full left-0 right-0 transition-[max-height,opacity] duration-500 ease-out bg-background ${
          open ? "max-h-[calc(100vh-80px)] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="px-4 sm:px-6 py-6 flex flex-col gap-1 bg-background">
          {navigationLinks.map((l) => (
            <Link
              key={l.hash}
              to={l.to}
              hash={l.hash}
              onClick={() => setOpen(false)}
              className="py-3 px-3 rounded-xl text-base text-foreground hover:bg-secondary/60 transition"
              activeProps={{ className: "bg-secondary text-primary font-medium" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="contato"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium"
          >
            Agendar consulta
          </Link>
        </nav>
      </div>
    </header>
  );
}
