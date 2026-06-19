import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { BlurFade } from "@/components/ui/blur-fade";

export function CtaFinal() {
  return (
    <section id="contato" className="py-24 md:py-32 bg-beige/40">
      <div className="mx-auto max-w-6xl px-6">
        <BlurFade>
          <div
            className="overflow-hidden rounded-[2.5rem] bg-card border border-border grid md:grid-cols-2"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <div className="relative hidden md:block">
              <img
                src={heroPortrait}
                alt=""
                aria-hidden
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="p-10 md:p-14 lg:p-16">
              <span className="text-xs uppercase tracking-[0.2em] text-sage-deep">
                Vamos conversar
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                O primeiro passo pode ser o mais importante.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
                Agende sua sessão de acolhimento. Responderei pessoalmente em até 24 horas para
                combinarmos o melhor horário para você.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full px-8 h-12">
                  <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">
                    Falar pelo WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 h-12 bg-background"
                >
                  <a href="mailto:contato@marianaoliveira.com">Enviar e-mail</a>
                </Button>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
