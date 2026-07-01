import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navigationLinks } from "@/lib/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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

    const observeElements = () => {
      navigationLinks.forEach((link) => {
        const element = document.querySelector(link.href);
        if (element) observer.observe(element);
      });
    };

    observeElements();

    // Safe retry once after a short delay to ensure late-hydrated or dynamically-rendered sections are observed
    const retryTimeout = setTimeout(observeElements, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      clearTimeout(retryTimeout);
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
          {navigationLinks.map((l) => (
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
        
        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden border-b border-border/60 absolute top-full left-0 right-0 transition-[max-height,opacity] duration-500 ease-out bg-background ${
          isOpen ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="px-6 py-6 flex flex-col gap-4">
          {navigationLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className={`text-xl py-2 transition-colors duration-300 ${
                activeSection === l.href
                  ? "text-sage-deep font-semibold"
                  : "text-foreground hover:text-sage-deep"
              }`}
            >
              {l.label}
            </a>
          ))}
          <Button asChild className="mt-4 rounded-full w-full">
            <a href="#contato" onClick={() => setIsOpen(false)}>Agendar consulta</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
