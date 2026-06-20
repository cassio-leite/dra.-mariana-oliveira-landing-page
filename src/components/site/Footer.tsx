import { MessageCircle, Mail, Instagram, Laptop, MapPin, Clock3 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-beige/40 border-t border-border/50 pt-20 pb-10">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-16">
        {/* Coluna 1 — Identidade */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-full bg-sage/20 grid place-items-center">
              <span className="h-2 w-2 rounded-full bg-sage" />
            </span>
            <span className="font-semibold text-foreground tracking-tight">
              Dra. Mariana Oliveira
            </span>
          </div>
          <p className="text-sm text-sage-deep">Psicóloga Clínica • CRP 06/00000</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            "Acolhimento, escuta e cuidado em cada etapa do processo terapêutico."
          </p>
        </div>

        {/* Coluna 2 — Navegação */}
        <div className="space-y-4">
          <p className="font-medium text-foreground">Menu</p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {[
              { href: "#sobre", label: "Sobre" },
              { href: "#areas", label: "Áreas de atuação" },
              { href: "#processo", label: "Processo" },
              { href: "#depoimentos", label: "Depoimentos" },
              { href: "#faq", label: "Dúvidas frequentes" },
            ].map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors duration-300 hover:text-sage-deep">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 3 — Contato */}
        <div className="space-y-4">
          <p className="font-medium text-foreground">Contato</p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors duration-300 hover:text-sage-deep"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="mailto:contato@dramarianaoliveira.com.br"
                className="flex items-center gap-2 transition-colors duration-300 hover:text-sage-deep"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="#"
                className="flex items-center gap-2 transition-colors duration-300 hover:text-sage-deep"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 4 — Atendimento */}
        <div className="space-y-4">
          <p className="font-medium text-foreground">Atendimento</p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Laptop className="h-4 w-4" />
              Atendimento online
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Presencial em São Paulo
            </li>
            <li className="flex items-center gap-2">
              <Clock3 className="h-4 w-4" />
              Horários flexíveis
            </li>
          </ul>
        </div>
      </div>

      {/* Separador e Parte inferior */}
      <div className="mx-auto max-w-6xl px-6 pt-10 border-t border-border/50">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Dra. Mariana Oliveira. Todos os direitos reservados.</p>
          <p>Sigilo profissional garantido conforme o Código de Ética do CFP.</p>
        </div>
      </div>
    </footer>
  );
}
