import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { BlurFade } from "@/components/ui/blur-fade";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft organic background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.99 0.008 85) 0%, oklch(0.97 0.015 90) 55%, oklch(0.95 0.02 130) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full -z-10 opacity-70"
        style={{
          background: "radial-gradient(circle, var(--sage-soft) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -right-40 h-[32rem] w-[32rem] rounded-full -z-10 opacity-60"
        style={{
          background: "radial-gradient(circle, var(--beige-deep) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full -z-10 opacity-50"
        style={{
          background: "radial-gradient(circle, var(--sage-soft) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-28 md:pt-36 md:pb-40 grid md:grid-cols-12 gap-16 lg:gap-20 items-center">
        <div className="md:col-span-6 space-y-9">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-sage-deep">
            <span className="h-px w-8 bg-sage" />
            Psicologia Clínica · CRP 06/00000
          </span>
          <BlurFade delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] text-foreground">
              Um espaço seguro para
              <span className="block italic font-normal text-sage-deep"> reencontrar você</span>
            </h1>
          </BlurFade>
          <BlurFade delay={0.25}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed">
              Psicoterapia individual para adultos que buscam clareza,
              equilíbrio emocional e uma vida com mais propósito.
            </p>
          </BlurFade>
          <BlurFade delay={0.4}>
            <div className="flex flex-wrap gap-3 pt-4">
              <Button asChild size="lg" className="rounded-full px-7 h-12">
                <a href="#contato">Agendar primeira sessão</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-7 h-12 border-border bg-card">
                <a href="#sobre">Conhecer meu trabalho</a>
              </Button>
            </div>
          </BlurFade>
          <div className="flex items-center gap-6 pt-8 text-sm text-muted-foreground">
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
        <div className="relative md:col-span-6">
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[2.5rem] -z-10"
            style={{
              background:
                "linear-gradient(135deg, var(--beige) 0%, var(--sage-soft) 100%)",
              filter: "blur(40px)",
              opacity: 0.55,
            }}
          />
          <div
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <img
              src={heroPortrait}
              alt="Retrato da Dra. Mariana Oliveira, psicóloga clínica"
              width={896}
              height={1152}
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="absolute -bottom-8 -left-8 hidden md:block bg-card/90 backdrop-blur rounded-2xl p-5 border border-border max-w-[240px]"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <p className="text-xs text-muted-foreground mb-1">Próximos horários</p>
            <p className="text-sm font-medium">Esta semana disponível</p>
            <p className="text-xs text-sage-deep mt-2">Resposta em até 24h</p>
          </div>
          <div
            className="absolute -top-6 -right-4 hidden md:flex items-center gap-3 bg-card/90 backdrop-blur rounded-full pl-2 pr-5 py-2 border border-border"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <span className="h-8 w-8 rounded-full bg-sage-soft flex items-center justify-center text-sage-deep text-xs font-medium">
              12+
            </span>
            <span className="text-xs text-muted-foreground">anos de experiência</span>
          </div>
        </div>
      </div>
    </section>
  );
}