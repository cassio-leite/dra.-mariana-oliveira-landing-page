import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Benefits } from "@/components/site/Benefits";
import { About } from "@/components/site/About";
import { Areas } from "@/components/site/Areas";
import { Process } from "@/components/site/Process";
import { Faq } from "@/components/site/Faq";
import { CtaFinal } from "@/components/site/CtaFinal";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Mariana Oliveira — Psicóloga Clínica" },
      { name: "description", content: "Psicoterapia individual para adultos. Atendimento online e presencial em São Paulo com a Dra. Mariana Oliveira." },
      { property: "og:title", content: "Dra. Mariana Oliveira — Psicóloga Clínica" },
      { property: "og:description", content: "Um espaço seguro para reencontrar você. Psicoterapia para adultos." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <About />
        <Areas />
        <Process />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
