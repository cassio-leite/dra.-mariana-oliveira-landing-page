import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#faq", label: "Dúvidas" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "pt-4 px-4" : "pt-0 px-0"
      }`}
    >
      <nav
        className={`mx-auto max-w-6xl w-full px-6 h-16 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-soft border border-white/50 rounded-full"
            : "bg-transparent border-transparent"
        }`}
      >
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
