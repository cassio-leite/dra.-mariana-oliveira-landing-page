import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Benefits } from "@/components/site/Benefits";
import { About } from "@/components/site/About";
import { Areas } from "@/components/site/Areas";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { CtaFinal } from "@/components/site/CtaFinal";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Mariana Oliveira | Psicóloga Clínica em São Paulo" },
      {
        name: "description",
        content:
          "Psicoterapia individual para adultos. Atendimento online e presencial em São Paulo. Um espaço seguro para cuidar da ansiedade, autoestima e relacionamentos com acolhimento e escuta especializada.",
      },
      {
        name: "keywords",
        content:
          "psicóloga em São Paulo, psicoterapia online, terapia para ansiedade, terapia para adultos, psicóloga clínica, autoestima, relacionamentos",
      },
      {
        property: "og:title",
        content: "Dra. Mariana Oliveira | Psicóloga Clínica em São Paulo",
      },
      {
        property: "og:description",
        content:
          "Psicoterapia individual para adultos. Atendimento online e presencial em São Paulo.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:locale",
        content: "pt_BR",
      },
      {
        property: "og:site_name",
        content: "Dra. Mariana Oliveira",
      },
      {
        property: "og:url",
        content: "https://dramarianaoliveira.com.br",
      },
      {
        property: "og:image",
        content: "/og-image.jpg",
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:image:alt",
        content: "Dra. Mariana Oliveira | Psicóloga Clínica em São Paulo",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Dra. Mariana Oliveira | Psicóloga Clínica em São Paulo",
      },
      {
        name: "twitter:description",
        content:
          "Psicoterapia individual para adultos. Atendimento online e presencial em São Paulo.",
      },
      {
        name: "twitter:image",
        content: "/og-image.jpg",
      },
      {
        name: "twitter:image:alt",
        content: "Dra. Mariana Oliveira | Psicóloga Clínica em São Paulo",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        name: "author",
        content: "Dra. Mariana Oliveira",
      },
      {
        name: "theme-color",
        content: "#556B5D",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://dramarianaoliveira.com.br",
      },
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
        <Testimonials />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
