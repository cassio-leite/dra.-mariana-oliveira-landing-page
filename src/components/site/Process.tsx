import { BlurFade } from "@/components/ui/blur-fade";
import { MessageCircle, Calendar, HeartHandshake, Sparkles } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Primeiro contato",
    desc: "Uma conversa inicial para compreender sua necessidade e esclarecer dúvidas sobre o atendimento.",
    icon: MessageCircle,
    delay: 0.05,
  },
  {
    n: "02",
    title: "Primeira sessão",
    desc: "Um momento de acolhimento e escuta, onde começamos a construir juntos um espaço de confiança.",
    icon: Calendar,
    delay: 0.1,
  },
  {
    n: "03",
    title: "Processo terapêutico",
    desc: "Ao longo das sessões, trabalhamos emoções, pensamentos e comportamentos com respeito ao seu tempo.",
    icon: HeartHandshake,
    delay: 0.15,
  },
  {
    n: "04",
    title: "Evolução e bem-estar",
    desc: "O objetivo é promover autonomia, autoconhecimento e uma relação mais saudável consigo mesmo.",
    icon: Sparkles,
    delay: 0.2,
  },
];

export function Process() {
  return (
    <section id="atendimento" className="py-32 md:py-36 bg-beige/40">
      <div className="mx-auto max-w-6xl px-6">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <span className="text-xs uppercase tracking-[0.2em] text-sage-deep block mb-4">
            Como funciona o acompanhamento
          </span>
          <BlurFade>
            <h2 className="text-3xl md:text-5xl font-light leading-tight">
              Cada processo é único, mas você não precisa percorrê-lo sozinho.
            </h2>
          </BlurFade>
          <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Um espaço seguro para compreender emoções, desenvolver recursos internos e construir uma
            vida mais equilibrada.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto mt-16 md:mt-24">
          {/* Linha vertical centralizada no desktop, e à esquerda no mobile */}
          <div
            aria-hidden
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-sage/20 -translate-x-1/2"
          />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.n}
                  className="relative grid md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-0 items-center pl-12 md:pl-0"
                >
                  {/* Círculo centralizado com o número */}
                  <div className="absolute left-4 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white border border-sage/25 shadow-sm z-10 flex items-center justify-center">
                    <span className="text-xs font-semibold tracking-wider text-sage-deep">
                      {step.n}
                    </span>
                  </div>

                  {/* Card da etapa */}
                  <div
                    className={`flex w-full ${isEven ? "md:justify-end md:col-start-1" : "md:justify-start md:col-start-2"}`}
                  >
                    <BlurFade delay={step.delay}>
                      <div className="w-full max-w-md rounded-3xl bg-white/50 backdrop-blur-sm border border-border/60 p-8 shadow-soft relative overflow-hidden group">
                        {/* Efeito sutil de brilho no hover */}
                        <div
                          aria-hidden
                          className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-sage-soft/10 blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-150"
                        />

                        {/* Ícone */}
                        <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sage-soft/30 text-sage-deep shadow-sm transition-transform duration-500 group-hover:scale-105">
                          <step.icon size={20} strokeWidth={1.5} />
                        </div>

                        {/* Conteúdo */}
                        <h3 className="text-xl font-medium mb-3 leading-snug text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                      </div>
                    </BlurFade>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
