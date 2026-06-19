import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#faq", label: "Dúvidas" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="h-8 w-8 rounded-full bg-sage/15 grid place-items-center">
            <span className="h-2.5 w-2.5 rounded-full bg-sage" />
          </span>
          <span className="font-medium tracking-tight">Dra. Mariana Oliveira</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <Button asChild size="sm" className="rounded-full px-5">
          <a href="#contato">Agendar consulta</a>
        </Button>
      </nav>
    </header>
  );
}
