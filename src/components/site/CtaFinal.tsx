import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Check, MessageCircle, ArrowRight } from "lucide-react";
import marianaPortrait from "@/assets/mariana-portrait.jpg";

export function CtaFinal() {
  return (
    <section id="contato" className="relative py-24 md:py-40 overflow-hidden">
      {/* Background Decorativo */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-beige/20 via-transparent to-transparent pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -top-1/2 -right-1/4 h-[800px] w-[800px] rounded-full bg-sage-deep/5 blur-[120px] pointer-events-none"
      />

      <div className="mx-auto max-w-4xl px-6 relative">
        <BlurFade delay={0.1}>
          {/* Card Principal */}
          <div className="rounded-[3rem] bg-white/40 backdrop-blur-md border border-white/60 shadow-elegant p-10 md:p-16 text-center">
            {/* Label superior */}
            <span className="text-xs uppercase tracking-[0.3em] text-sage-deep font-medium">
              PRONTO PARA COMEÇAR?
            </span>

            {/* Headline principal */}
            <h2 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
              Um espaço seguro para cuidar da sua saúde emocional.
            </h2>

            {/* Bloco da profissional */}
            <div className="mt-10 flex flex-col items-center gap-4">
              <Avatar className="h-20 w-20 border-2 border-white shadow-md">
                <AvatarImage src={marianaPortrait} alt="Dra. Mariana Oliveira" />
                <AvatarFallback>MO</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-foreground text-lg">Dra. Mariana Oliveira</p>
                <p className="text-sm text-muted-foreground">
                  CRP 06/00000 • 12 anos de experiência
                </p>
                <p className="text-sm text-muted-foreground">+800 pacientes atendidos</p>
              </div>
            </div>

            {/* Indicadores de confiança */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-foreground max-w-xl mx-auto">
              {[
                "Atendimento online e presencial",
                "Sigilo profissional garantido",
                "Horários flexíveis",
                "Ambiente acolhedor",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 justify-center md:justify-start">
                  <Check className="text-sage-deep" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Botão Principal */}
            <div className="mt-12">
              <Button
                asChild
                size="lg"
                className="rounded-full px-10 py-8 h-auto bg-sage-deep text-white shadow-soft hover:scale-[1.02] transition-all duration-300 text-lg"
              >
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3"
                >
                  <MessageCircle size={24} />
                  Agendar conversa inicial
                </a>
              </Button>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
