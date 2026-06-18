import { Heart, UserRound, Users, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Escuta acolhedora",
    description:
      "Um espaço seguro e reservado onde você pode se expressar sem julgamentos, encontrando acolhimento em cada palavra.",
  },
  {
    icon: UserRound,
    title: "Autoconhecimento",
    description:
      "Compreenda suas emoções, padrões e comportamentos com clareza, construindo uma relação mais honesta consigo mesmo.",
  },
  {
    icon: Users,
    title: "Relacionamentos mais saudáveis",
    description:
      "Fortaleça vínculos, melhore a comunicação e aprenda a estabelecer limites com mais leveza e assertividade.",
  },
  {
    icon: Sparkles,
    title: "Desenvolvimento emocional",
    description:
      "Desenvolva ferramentas para lidar melhor com os desafios do dia a dia, cultivando resiliência e equilíbrio.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-28 md:py-36 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="max-w-2xl mb-20 md:mb-24">
          <span className="text-xs uppercase tracking-[0.2em] text-sage-deep block mb-4">
            Por que fazer terapia
          </span>
          <h2 className="text-3xl md:text-5xl font-light leading-tight">
            Um caminho de transformação para a sua vida.
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-[2rem] bg-card border border-border/50 p-8 md:p-10 flex flex-col"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              {/* Icon */}
              <div className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-soft/40 text-sage-deep">
                <item.icon size={22} strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {/* Subtle hover accent */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1 rounded-b-[2rem] bg-gradient-to-r from-sage-soft to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
