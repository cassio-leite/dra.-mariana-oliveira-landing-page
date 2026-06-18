import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-7">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-sage-deep">
            <span className="h-px w-8 bg-sage" />
            Psicologia Clínica · CRP 06/00000
          </span>
          <h1 className="text-4xl md:text-6xl font-light leading-[1.05] text-foreground">
            Um espaço seguro para
            <span className="block italic font-normal text-sage-deep"> reencontrar você</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            Psicoterapia individual para adultos que buscam clareza,
            equilíbrio emocional e uma vida com mais propósito.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg" className="rounded-full px-7 h-12">
              <a href="#contato">Agendar primeira sessão</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-7 h-12 border-border bg-card">
              <a href="#sobre">Conhecer meu trabalho</a>
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              Atendimento online
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              Consultório em São Paulo
            </div>
          </div>
        </div>
        <div className="relative">
          <div
            className="aspect-[4/5] w-full rounded-[2rem] bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroBg})`,
              boxShadow: "var(--shadow-elegant)",
            }}
          />
          <div className="absolute -bottom-6 -left-6 hidden md:block bg-card rounded-2xl p-5 border border-border max-w-[220px]"
               style={{ boxShadow: "var(--shadow-soft)" }}>
            <p className="text-xs text-muted-foreground mb-1">Próximos horários</p>
            <p className="text-sm font-medium">Esta semana disponível</p>
            <p className="text-xs text-sage-deep mt-2">Resposta em até 24h</p>
          </div>
        </div>
      </div>
    </section>
  );
}