import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlurFade } from "@/components/ui/blur-fade";

const faqs = [
  { q: "Como sei se preciso de terapia?", a: "Não há um momento certo. A terapia é um espaço de cuidado para qualquer pessoa que queira se compreender melhor, atravessar uma fase difícil ou desenvolver recursos emocionais." },
  { q: "Qual a duração e frequência das sessões?", a: "As sessões têm 50 minutos e geralmente acontecem uma vez por semana, no mesmo dia e horário. Em alguns casos podemos combinar outra frequência." },
  { q: "Atendimento online é tão eficaz quanto presencial?", a: "Sim. Estudos mostram resultados equivalentes. O atendimento online traz mais flexibilidade e mantém todo o sigilo profissional." },
  { q: "Como funciona o pagamento?", a: "O valor da sessão é combinado no primeiro contato. O pagamento pode ser feito por PIX ou transferência, semanal ou mensalmente." },
  { q: "Você emite recibo para reembolso?", a: "Sim. Emito recibos com todas as informações necessárias para solicitação de reembolso junto ao seu plano de saúde." },
];

export function Faq() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
          <span className="text-xs uppercase tracking-[0.2em] text-sage-deep">Perguntas frequentes</span>
          <BlurFade>
            <h2 className="mt-4 text-3xl md:text-5xl font-light leading-tight">
              Dúvidas comuns antes de começar.
            </h2>
          </BlurFade>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-sm">
            Se restar alguma dúvida, fico à disposição para conversar antes do primeiro encontro.
          </p>
        </div>
        <Accordion type="single" collapsible className="md:col-span-7 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border/70 rounded-2xl px-6 bg-card"
            >
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}