import heroBg from "@/assets/hero-bg.jpg";
import { BlurFade } from "@/components/ui/blur-fade";

const steps = [
  { n: "01", title: "Primeiro contato", desc: "Você envia uma mensagem e respondo em até 24 horas para combinarmos a sessão inicial." },
  { n: "02", title: "Sessão de acolhimento", desc: "Um encontro para entender sua demanda, expectativas e definir juntos o caminho terapêutico." },
  { n: "03", title: "Sessões semanais", desc: "Encontros de 50 minutos, online ou presenciais, em ambiente acolhedor e sigiloso." },
  { n: "04", title: "Acompanhamento contínuo", desc: "Revisitamos objetivos periodicamente, respeitando seu tempo e processo." },
];

export function Process() {
  return (
    <section id="atendimento" className="py-28 md:py-36 bg-beige/40">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
          <span className="text-xs uppercase tracking-[0.2em] text-sage-deep">Como funciona</span>
          <BlurFade>
            <h2 className="mt-4 text-3xl md:text-5xl font-light leading-tight">
              Um processo simples, do primeiro contato à continuidade.
            </h2>
          </BlurFade>
          <div
            className="mt-10 aspect-[4/5] w-full rounded-[2rem] bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroBg})`,
              boxShadow: "var(--shadow-soft)",
            }}
          />
        </div>
        <ol className="md:col-span-7 relative md:pl-8">
          <span aria-hidden className="hidden md:block absolute left-0 top-2 bottom-2 w-px bg-border" />
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`relative pb-10 last:pb-0 ${i === 0 ? "" : "pt-2"}`}
            >
              <span
                aria-hidden
                className="hidden md:block absolute -left-[33px] top-3 h-2 w-2 rounded-full bg-sage"
              />
              <div className="flex items-baseline gap-5">
                <span className="text-sm font-medium text-sage-deep tracking-widest">{s.n}</span>
                <div>
                  <h3 className="text-xl font-medium mb-2">{s.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
                    {s.desc}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}