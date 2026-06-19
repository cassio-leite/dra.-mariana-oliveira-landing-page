import { BlurFade } from "@/components/ui/blur-fade";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Cheguei à terapia em um momento de muita ansiedade e insegurança. Aos poucos, fui aprendendo a compreender minhas emoções e a me tratar com mais gentileza.",
    name: "AC",
    age: "34 anos",
    location: "São Paulo",
    delay: 0.1,
  },
  {
    quote:
      "Um ambiente leve, respeitoso e sem julgamentos. Hoje consigo lidar melhor com a ansiedade e as relações do dia a dia.",
    name: "MR",
    age: "29 anos",
    location: "Atendimento Online",
    delay: 0.2,
  },
  {
    quote:
      "Aprendi a olhar para mim com mais gentileza. Foi um processo transformador e fundamental para o meu crescimento profissional.",
    name: "LF",
    age: "41 anos",
    location: "Executiva",
    delay: 0.3,
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-32 md:py-36 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.2em] text-sage-deep block mb-4">
            Depoimentos
          </span>
          <BlurFade>
            <h2 className="text-3xl md:text-5xl font-light leading-tight mb-6">
              O cuidado começa pela confiança.
            </h2>
          </BlurFade>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Relatos de pessoas que encontraram um espaço seguro para compreender emoções, fortalecer
            a autoestima e construir uma vida mais equilibrada.
          </p>
        </div>

        {/* Prova Social */}
        <div className="flex flex-col items-center gap-6 mb-20 text-center">
          <div className="flex gap-1 text-sage-deep">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base text-muted-foreground">
            <p>Mais de 800 pacientes atendidos</p>
            <p>12 anos de experiência clínica</p>
            <p>Atendimento online e presencial</p>
          </div>
        </div>

        {/* Grade de Depoimentos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <BlurFade key={idx} delay={t.delay}>
              <div className="flex h-full flex-col rounded-3xl bg-white/50 backdrop-blur-sm border border-border/60 p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lg">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1 text-sage-deep/50">
                    <Star size={16} fill="currentColor" strokeWidth={0} />
                    <Star size={16} fill="currentColor" strokeWidth={0} />
                    <Star size={16} fill="currentColor" strokeWidth={0} />
                    <Star size={16} fill="currentColor" strokeWidth={0} />
                    <Star size={16} fill="currentColor" strokeWidth={0} />
                  </div>
                  <Quote className="text-sage-deep/20" size={32} />
                </div>

                <p className="flex-grow text-lg italic text-foreground leading-relaxed mb-8">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <Avatar className="h-12 w-12 bg-sage-deep/10 text-sage-deep">
                    <AvatarFallback className="text-sm font-semibold">{t.name}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.age} • {t.location}
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
