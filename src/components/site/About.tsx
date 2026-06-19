import portrait from "@/assets/mariana-portrait.jpg";
import { BlurFade } from "@/components/ui/blur-fade";
import { Heart, Compass, ShieldCheck, Leaf, Check } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="py-28 md:py-36 bg-beige/40">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Coluna do Conteúdo */}
        <div className="md:col-span-7 md:pt-6 space-y-8">
          {/* Badge & Título */}
          <div className="space-y-5">
            <BlurFade>
              <div className="inline-flex items-center gap-2 rounded-full border border-sage/20 bg-white/50 backdrop-blur-sm px-4 py-1.5 text-[11px] md:text-xs text-sage-deep tracking-[0.15em] uppercase font-medium shadow-sm">
                <span>Psicóloga Clínica</span>
                <span className="text-sage/40">•</span>
                <span>CRP 06/00000</span>
              </div>
            </BlurFade>

            <BlurFade delay={0.05}>
              <h2 className="text-3xl md:text-5xl font-light leading-tight">
                Há mais de 12 anos acompanhando pessoas em momentos de transformação.
              </h2>
            </BlurFade>
          </div>

          {/* Biografia */}
          <div className="space-y-4 text-muted-foreground leading-relaxed md:pr-8">
            <p>
              Sou Mariana Oliveira, psicóloga clínica formada pela USP, com especialização em
              Terapia Cognitivo-Comportamental e formação em Mindfulness aplicado à saúde mental.
            </p>
            <p>
              Acredito em uma escuta sem julgamentos, onde cada história é acolhida em seu tempo.
              Meu trabalho é construir, junto com você, um caminho possível em direção ao bem-estar.
            </p>
          </div>

          {/* Frase Pessoal */}
          <BlurFade delay={0.1}>
            <blockquote className="border-l-2 border-sage pl-5 my-8 italic text-sage-deep font-light text-base md:text-lg leading-relaxed">
              "Acredito que o cuidado psicológico começa quando existe espaço para ser ouvido com
              respeito e acolhimento."
            </blockquote>
          </BlurFade>

          {/* Estatísticas integradas com maior presença */}
          <BlurFade delay={0.15}>
            <dl className="grid grid-cols-3 gap-6 md:gap-8 py-8 border-y border-border/50 my-8">
              <div className="space-y-1">
                <dt className="text-4xl md:text-5xl font-light tracking-tight text-sage-deep">
                  12+
                </dt>
                <dd className="text-sm text-muted-foreground font-medium">Anos de prática</dd>
              </div>
              <div className="space-y-1">
                <dt className="text-4xl md:text-5xl font-light tracking-tight text-sage-deep">
                  800+
                </dt>
                <dd className="text-sm text-muted-foreground font-medium">Pacientes atendidos</dd>
              </div>
              <div className="space-y-1">
                <dt className="text-4xl md:text-5xl font-light tracking-tight text-sage-deep">
                  CRP
                </dt>
                <dd className="text-sm text-muted-foreground font-medium">06/00000</dd>
              </div>
            </dl>
          </BlurFade>

          {/* Card em Glassmorphism com Valores Profissionais */}
          <BlurFade delay={0.2}>
            <div className="relative overflow-hidden rounded-[2rem] bg-white/40 backdrop-blur-md border border-white/60 p-8 md:p-10 shadow-elegant">
              {/* Efeito sutil de iluminação de fundo no card */}
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sage-soft/10 blur-3xl pointer-events-none"
              />

              <h3 className="text-sm font-semibold tracking-wider text-sage-deep uppercase mb-8">
                Princípios Clínicos
              </h3>

              <div className="grid gap-8 sm:grid-cols-2">
                {/* Empatia */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="p-2.5 rounded-xl bg-sage-soft/30 text-sage-deep shadow-sm">
                      <Heart className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <h4 className="font-semibold text-foreground text-base">Empatia</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Acolhimento genuíno que respeita o seu tempo e o seu ritmo, criando uma conexão
                    segura e livre de julgamentos.
                  </p>
                </div>

                {/* Escuta Ativa */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="p-2.5 rounded-xl bg-sage-soft/30 text-sage-deep shadow-sm">
                      <Compass className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <h4 className="font-semibold text-foreground text-base">Escuta Ativa</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Presença plena e atenção dedicada a cada detalhe, ajudando você a traduzir e
                    compreender sentimentos complexos.
                  </p>
                </div>

                {/* Sigilo */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="p-2.5 rounded-xl bg-sage-soft/30 text-sage-deep shadow-sm">
                      <ShieldCheck className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <h4 className="font-semibold text-foreground text-base">
                      Sigilo & Confidencialidade
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Compromisso ético inegociável que assegura a segurança e a privacidade de cada
                    palavra compartilhada.
                  </p>
                </div>

                {/* Ambiente Acolhedor */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="p-2.5 rounded-xl bg-sage-soft/30 text-sage-deep shadow-sm">
                      <Leaf className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <h4 className="font-semibold text-foreground text-sm">Ambiente Acolhedor</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Espaço físico e digital planejado com sensibilidade para inspirar tranquilidade,
                    conforto e bem-estar absoluto.
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Coluna da Foto e Card de Atendimento */}
        <div className="md:col-span-5 md:-mt-6 space-y-8">
          <div className="relative group">
            {/* Brilho de fundo (glow suave) */}
            <div
              aria-hidden
              className="absolute -inset-8 bg-gradient-to-tr from-sage-soft/20 via-transparent to-beige-deep/10 rounded-[3rem] blur-2xl -z-10 pointer-events-none"
            />

            {/* Linha decorativa de moldura externa */}
            <div
              aria-hidden
              className="absolute -top-4 -right-4 hidden md:block h-48 w-48 rounded-[2.5rem] border border-sage/25 -z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
            />

            {/* Segundo elemento decorativo flutuante e sutil */}
            <div
              aria-hidden
              className="absolute -bottom-4 -left-4 hidden md:block h-24 w-24 rounded-[1.5rem] bg-beige-deep/25 -z-10 transition-transform duration-500 group-hover:-translate-x-1 group-hover:translate-y-1"
            />

            <img
              src={portrait}
              alt="Dra. Mariana Oliveira, psicóloga clínica"
              width={896}
              height={1152}
              loading="lazy"
              className="relative rounded-[2rem] object-cover w-full aspect-[4/5] transition-transform duration-500 group-hover:scale-[1.01]"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            />
          </div>

          {/* Card de Atendimento */}
          <BlurFade delay={0.25}>
            <div className="rounded-[2rem] bg-white/40 backdrop-blur-md border border-white/60 p-8 shadow-elegant relative overflow-hidden group">
              <div
                aria-hidden
                className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-sage-soft/10 blur-3xl pointer-events-none"
              />

              <h3 className="font-semibold text-sage-deep text-lg mb-5 transition-colors duration-300 group-hover:text-sage-deep/80">
                Atendimento Online e Presencial
              </h3>

              <ul className="space-y-3.5">
                {[
                  "Terapia Cognitivo-Comportamental",
                  "Ansiedade e Estresse",
                  "Autoconhecimento",
                  "Desenvolvimento Emocional",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-all duration-300 hover:translate-x-0.5"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage/10 text-sage transition-colors duration-300 group-hover:bg-sage/20">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
