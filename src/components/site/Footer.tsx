export function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto max-w-6xl px-6 grid gap-8 md:grid-cols-3 text-sm text-muted-foreground">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="h-8 w-8 rounded-full bg-sage/15 grid place-items-center">
              <span className="h-2.5 w-2.5 rounded-full bg-sage" />
            </span>
            <span className="font-medium text-foreground">Dra. Mariana Oliveira</span>
          </div>
          <p className="leading-relaxed">Psicóloga Clínica · CRP 06/00000</p>
        </div>
        <div>
          <p className="text-foreground font-medium mb-3">Contato</p>
          <p>contato@marianaoliveira.com</p>
          <p>+55 (11) 00000-0000</p>
        </div>
        <div>
          <p className="text-foreground font-medium mb-3">Consultório</p>
          <p>Rua das Acácias, 100 — Sala 12</p>
          <p>Pinheiros, São Paulo — SP</p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 mt-10 pt-6 border-t border-border/60 text-xs text-muted-foreground flex flex-wrap justify-between gap-3">
        <span>© {new Date().getFullYear()} Mariana Oliveira. Todos os direitos reservados.</span>
        <span>Sigilo profissional garantido conforme o Código de Ética do CFP.</span>
      </div>
    </footer>
  );
}
