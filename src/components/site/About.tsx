import portrait from "@/assets/mariana-portrait.jpg";

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-beige/40">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2">
          <img
            src={portrait}
            alt="Dra. Mariana Oliveira, psicóloga clínica"
            width={896}
            height={1152}
            loading="lazy"
            className="rounded-[2rem] object-cover w-full aspect-[4/5]"
            style={{ boxShadow: "var(--shadow-soft)" }}
          />
        </div>
        <div className="md:col-span-3 space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] text-sage-deep">Sobre mim</span>
          <h2 className="text-3xl md:text-5xl font-light leading-tight">
            Há mais de 12 anos acompanhando pessoas em momentos de transformação.
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Sou Mariana Oliveira, psicóloga clínica formada pela USP, com
              especialização em Terapia Cognitivo-Comportamental e formação em
              Mindfulness aplicado à saúde mental.
            </p>
            <p>
              Acredito em uma escuta sem julgamentos, onde cada história é
              acolhida em seu tempo. Meu trabalho é construir, junto com você,
              um caminho possível em direção ao bem-estar.
            </p>
          </div>
          <dl className="grid grid-cols-3 gap-6 pt-6 border-t border-border/60">
            <div>
              <dt className="text-3xl font-light text-sage-deep">12+</dt>
              <dd className="text-xs text-muted-foreground mt-1">Anos de prática</dd>
            </div>
            <div>
              <dt className="text-3xl font-light text-sage-deep">800+</dt>
              <dd className="text-xs text-muted-foreground mt-1">Pacientes atendidos</dd>
            </div>
            <div>
              <dt className="text-3xl font-light text-sage-deep">CRP</dt>
              <dd className="text-xs text-muted-foreground mt-1">06/00000</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}