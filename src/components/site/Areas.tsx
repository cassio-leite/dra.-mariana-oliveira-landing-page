import { Heart, Brain, Users, Sunrise, Leaf, Compass } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const areas = [
  { icon: Heart, title: "Ansiedade", desc: "Compreender gatilhos e desenvolver recursos para uma rotina mais leve." },
  { icon: Brain, title: "Depressão", desc: "Acolhimento e estratégias para reencontrar sentido e motivação." },
  { icon: Users, title: "Relacionamentos", desc: "Conflitos afetivos, vínculos familiares e padrões repetitivos." },
  { icon: Sunrise, title: "Autoestima", desc: "Reconstrução da imagem de si e fortalecimento da autoconfiança." },
  { icon: Leaf, title: "Estresse e Burnout", desc: "Equilíbrio entre vida profissional, pessoal e cuidado emocional." },
  { icon: Compass, title: "Transições de vida", desc: "Maternidade, carreira, luto e outros momentos de redefinição." },
];

export function Areas() {
  return (
    <section id="areas" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-12 lg:gap-16">
        <aside className="md:col-span-4 md:sticky md:top-28 md:self-start">
          <span className="text-xs uppercase tracking-[0.2em] text-sage-deep">Áreas de atendimento</span>
          <BlurFade>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
              Cuidado especializado para cada momento da sua vida.
            </h2>
          </BlurFade>
          <div className="mt-8 h-px w-16 bg-sage/60" />
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Cada processo é único. As áreas abaixo são pontos de partida para um trabalho construído a dois.
          </p>
        </aside>
        <div className="md:col-span-8 grid sm:grid-cols-2 gap-5">
          {areas.map(({ icon: Icon, title, desc }, i) => (
            <BlurFade key={title} delay={i * 0.08} className={i % 2 === 1 ? "sm:translate-y-8" : ""}>
              <article
                className="p-8 rounded-3xl bg-card border border-border/70 hover:border-sage/40 transition-colors h-full"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div className="h-11 w-11 rounded-2xl bg-sage/10 grid place-items-center text-sage-deep mb-5">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </article>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}