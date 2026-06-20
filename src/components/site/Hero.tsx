import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { BlurFade } from "@/components/ui/blur-fade";
import { ArrowRight, Calendar, Globe, MapPin } from "lucide-react";

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

      {/* Radial ambient glow orbs */}
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

      {/* Elegant organic line paths in background */}
      <div
        className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <svg
          className="absolute top-1/4 right-0 w-[40%] h-[50%] text-sage-soft/15 stroke-current fill-none opacity-40"
          viewBox="0 0 400 600"
          preserveAspectRatio="none"
        >
          <path
            d="M400,100 C300,150 250,50 150,150 C50,250 100,400 0,450"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path d="M400,150 C320,190 280,110 180,200 C80,290 120,440 0,500" strokeWidth="1" />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-[30%] h-[40%] text-beige-deep/20 stroke-current fill-none opacity-30"
          viewBox="0 0 300 400"
          preserveAspectRatio="none"
        >
          <path d="M0,350 C80,300 120,380 200,280 C280,180 180,100 300,50" strokeWidth="1" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-40 pb-32 md:pt-48 md:pb-44 grid md:grid-cols-12 gap-16 lg:gap-20 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="md:col-span-6 flex flex-col justify-center space-y-10 lg:pr-6">
          <div className="space-y-6">
            <BlurFade delay={0.05}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.18em] text-sage-deep bg-sage-soft/20 border border-sage/15 backdrop-blur-sm shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sage"></span>
                </span>
                Psicologia Clínica · CRP 06/00000
              </div>
            </BlurFade>

            <BlurFade delay={0.15}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight text-foreground">
                Um espaço seguro para
                <span className="block italic font-normal text-sage-deep mt-1">
                  {" "}
                  reencontrar você
                </span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.25}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-light">
                Psicoterapia individual para adultos que buscam clareza, equilíbrio emocional e uma
                vida com mais propósito.
              </p>
            </BlurFade>
          </div>

          <BlurFade delay={0.35}>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 h-12 text-sm md:text-base shadow-md shadow-sage/10 hover:shadow-lg hover:shadow-sage/20 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 cursor-pointer"
                aria-label="Agendar primeira sessão com Dra. Mariana Oliveira"
              >
                <a href="#contato" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Agendar primeira sessão
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group rounded-full px-8 h-12 text-sm md:text-base border-border bg-card/50 backdrop-blur-sm hover:bg-card hover:border-sage/40 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 cursor-pointer"
                aria-label="Conhecer trabalho da Dra. Mariana Oliveira"
              >
                <a href="#sobre" className="flex items-center gap-2">
                  Conhecer meu trabalho
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
            </div>
          </BlurFade>

          <BlurFade delay={0.45}>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2.5 bg-sage-soft/10 px-3.5 py-1.5 rounded-full border border-sage/5">
                <Globe className="h-4 w-4 text-sage" />
                Atendimento online
              </div>
              <div className="flex items-center gap-2.5 bg-sage-soft/10 px-3.5 py-1.5 rounded-full border border-sage/5">
                <MapPin className="h-4 w-4 text-sage" />
                Consultório em São Paulo
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Right Column: Hero Image Composition */}
        <div className="relative md:col-span-6 flex justify-center lg:justify-end">
          <BlurFade delay={0.2} className="relative w-full max-w-[480px]">
            {/* Ambient soft glow background */}
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2.5rem] -z-10 animate-pulse duration-[8000ms]"
              style={{
                background: "linear-gradient(135deg, var(--beige-deep) 0%, var(--sage-soft) 100%)",
                filter: "blur(50px)",
                opacity: 0.6,
              }}
            />

            {/* Artistic background frame */}
            <div
              className="absolute inset-0 border border-sage-deep/15 rounded-[2.2rem] translate-x-4 translate-y-4 -z-10"
              aria-hidden="true"
            />

            {/* Main Image Container */}
            <div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/40 transition-all duration-500 hover:shadow-2xl"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <img
                src={heroPortrait}
                alt="Retrato da Dra. Mariana Oliveira, psicóloga clínica"
                width={896}
                height={1152}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Card 1: Próximos horários */}
            <BlurFade
              delay={0.4}
              className="absolute -bottom-8 -left-6 hidden sm:block max-w-[240px]"
            >
              <div
                className="bg-card/95 backdrop-blur-md rounded-2xl p-5 border border-sage/10 shadow-lg"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <p className="text-xs text-muted-foreground mb-1">Próximos horários</p>
                <p className="text-sm font-medium text-foreground flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Esta semana disponível
                </p>
                <p className="text-xs text-sage-deep font-medium mt-2 bg-sage-soft/20 px-2 py-0.5 rounded inline-block">
                  Resposta em até 24h
                </p>
              </div>
            </BlurFade>

            {/* Card 2: Anos de experiência */}
            <BlurFade delay={0.5} className="absolute -top-6 -right-4 hidden sm:block">
              <div
                className="flex items-center gap-3 bg-card/95 backdrop-blur-md rounded-full pl-2 pr-5 py-2 border border-sage/10 shadow-md"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <span className="h-8 w-8 rounded-full bg-sage-soft flex items-center justify-center text-sage-deep text-xs font-semibold">
                  12+
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  anos de experiência
                </span>
              </div>
            </BlurFade>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
