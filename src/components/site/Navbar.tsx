import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas" },
  { href: "#processo", label: "Processo" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "Dúvidas" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-20% 0px -70% 0px" },
    );

    links.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
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
        <Link to="/" className="flex items-center gap-2 group" aria-label="Página inicial">
          <span className="h-8 w-8 rounded-full bg-sage/15 grid place-items-center">
            <span className="h-2.5 w-2.5 rounded-full bg-sage" />
          </span>
          <span className="font-medium tracking-tight">Dra. Mariana Oliveira</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`transition-colors duration-300 ${
                  activeSection === l.href
                    ? "text-sage-deep font-medium"
                    : "text-muted-foreground hover:text-sage-deep"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Button
            asChild
            size="sm"
            className="rounded-full px-5 shadow-soft transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <a href="#contato">Agendar consulta</a>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menu de navegação">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-sm pt-20">
              <nav className="flex flex-col gap-6">
                {links.map((l) => (
                  <SheetClose asChild key={l.href}>
                    <a href={l.href} className="text-xl font-medium text-foreground">
                      {l.label}
                    </a>
                  </SheetClose>
                ))}
                <div className="h-px bg-border my-2" />
                <SheetClose asChild>
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full w-full shadow-soft transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <a href="#contato">Agendar consulta</a>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
