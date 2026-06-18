import { Button } from "@/components/ui/button";

export function CtaFinal() {
  return (
    <section id="contato" className="py-24 md:py-32 bg-beige/40">
      <div className="mx-auto max-w-4xl px-6">
        <div
          className="rounded-[2.5rem] bg-card border border-border p-10 md:p-16 text-center"
          style={{ boxShadow: "var(--shadow-elegant)" }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-sage-deep">Vamos conversar</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-light leading-tight max-w-2xl mx-auto">
            O primeiro passo pode ser o mais importante.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Agende sua sessão de acolhimento. Responderei pessoalmente em até 24 horas
            para combinarmos o melhor horário para você.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" className="rounded-full px-8 h-12">
              <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">
                Falar pelo WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 bg-background">
              <a href="mailto:contato@marianaoliveira.com">Enviar e-mail</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}