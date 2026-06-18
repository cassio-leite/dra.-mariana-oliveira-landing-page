const steps = [
  { n: "01", title: "Primeiro contato", desc: "Você envia uma mensagem e respondo em até 24 horas para combinarmos a sessão inicial." },
  { n: "02", title: "Sessão de acolhimento", desc: "Um encontro para entender sua demanda, expectativas e definir juntos o caminho terapêutico." },
  { n: "03", title: "Sessões semanais", desc: "Encontros de 50 minutos, online ou presenciais, em ambiente acolhedor e sigiloso." },
  { n: "04", title: "Acompanhamento contínuo", desc: "Revisitamos objetivos periodicamente, respeitando seu tempo e processo." },
];

export function Process() {
  return (
    <section id="atendimento" className="py-24 md:py-32 bg-beige/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-sage-deep">Como funciona</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-light leading-tight">
            Um processo simples, do primeiro contato à continuidade.
          </h2>
        </div>
        <ol className="grid md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <li
              key={s.n}
              className="p-8 rounded-3xl bg-card border border-border/70 flex gap-6"
            >
              <span className="text-sm font-medium text-sage-deep tracking-widest">{s.n}</span>
              <div>
                <h3 className="text-lg font-medium mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}