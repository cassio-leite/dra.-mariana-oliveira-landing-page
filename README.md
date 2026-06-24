# Dra. Mariana Oliveira — Landing Page Premium para Psicologia Clínica

Uma landing page premium, totalmente responsiva e de alta conversão, desenvolvida para a psicóloga clínica **Dra. Mariana Oliveira**. Este é um projeto real de portfólio projetado para demonstrar excelência em desenvolvimento front-end moderno, design voltado à experiência do usuário, acessibilidade e SEO avançado.

O design do site foi planejado em torno de quatro pilares fundamentais: **acolhimento, confiança, conversão e experiência de alto padrão**.

---

## 📸 Preview

*Espaço reservado para capturas de tela e demonstração visual do projeto.*

![Mockup Desktop e Mobile](./public/doc-preview.gif)

---

## 🎯 Objetivo

O propósito central desta landing page é criar uma ponte digital segura e humanizada entre a psicóloga clínica e pacientes em potencial. 

Buscando equilibrar a estética minimalista e elegante (Premium Experience) com gatilhos de usabilidade e conversão (CRO), a página foi estruturada para acolher o visitante, sanar dúvidas comuns sobre o processo de psicoterapia, apresentar as áreas de atuação profissional e direcionar o usuário para o agendamento de consultas via WhatsApp de forma simples, natural e intuitiva.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando o estado da arte do ecossistema React, prezando por máxima performance, type safety e manutenibilidade:

*   **Core & Framework:**
    *   **React 19** – Utilização de recursos modernos de renderização e estado.
    *   **TypeScript** – Tipagem estática em toda a base de código, garantindo segurança e escalabilidade.
    *   **TanStack Start** – Framework full-stack moderno com excelente suporte a SSR (Server-Side Rendering) e hidratação otimizada.
    *   **TanStack Router** – Roteamento baseado em tipos, extremamente rápido e robusto.

*   **Estilização & Componentes UI:**
    *   **Tailwind CSS v4** – Utilização da nova versão do framework CSS utilitário para estilização ultra rápida, limpa e modular.
    *   **Shadcn UI & Radix UI** – Primitivos de componentes altamente acessíveis (WAI-ARIA) e estilizados sob medida.
    *   **Framer Motion** – Criação de animações fluidas, transições de estado e microinterações elegantes.

*   **Lógica de Formulários & Feedbacks:**
    *   **React Hook Form** – Gerenciamento performático do estado do formulário de contato com re-renderizações mínimas.
    *   **Zod** – Validação de esquemas e dados com tipagem estática integrada.
    *   **Sonner** – Notificações toast interativas e elegantes para feedback imediato do usuário.

---

## ✨ Funcionalidades Implementadas

*   **Hero Section Impactante:** Introdução humanizada com fotografia profissional, proposta de valor clara e CTA (Call-to-Action) direto.
*   **Benefícios Estruturados:** Destaque dos diferenciais do atendimento terapêutico individual focado no bem-estar.
*   **Sobre a Profissional:** Seção detalhada sobre a trajetória, formação e abordagem clínica (Terapia Cognitivo-Comportamental / TCC) para gerar autoridade e confiança.
*   **Áreas de Atuação:** Cards elegantes categorizando as principais demandas atendidas (Ansiedade, Autoestima, Relacionamentos, etc.).
*   **Processo Terapêutico:** Linha do tempo visual mostrando o passo a passo desde o primeiro contato até o andamento das sessões.
*   **Depoimentos reais/humanizados:** Slider responsivo que destaca feedbacks de pacientes anteriores com total privacidade.
*   **FAQ Interativo:** Seção de perguntas frequentes estilizada com Accordions para sanar dúvidas burocráticas e clínicas rapidamente.
*   **CTA Final Imersivo:** Seção de fechamento persuasiva com formulário integrado.
*   **Formulário de Contato com Validação:** Validação de campos em tempo real (Nome, E-mail, Celular e Mensagem) integrada ao fluxo do WhatsApp.
*   **Navbar Responsiva Dinâmica:** Menu fixo elegante que altera opacidade e espaçamento ao rolar a página (*glassmorphism*).
*   **Menu Mobile Premium:** Menu hambúrguer lateral desenvolvido sob os padrões de acessibilidade do Radix UI, com transições suaves e sem elementos interativos aninhados.
*   **Destaque de Seção Ativa (Scroll Spy):** Sincronização automática do menu de navegação conforme o usuário rola pelas seções da página (`IntersectionObserver`).
*   **Scroll Suave Customizado:** Navegação interna de âncoras focada em acessibilidade, evitando interrupções no viewport e redirecionando o foco corretamente.
*   **Footer Premium:** Informações de contato detalhadas, CRP profissional e links de acessibilidade rápida.

---

## 📈 SEO, Performance e Acessibilidade

O site foi minuciosamente otimizado para garantir excelentes métricas em SEO (Search Engine Optimization) e velocidade de carregamento em dispositivos móveis:

*   **Meta Tags & Otimização de SEO:** Tags estruturadas nativamente no TanStack Start, incluindo títulos descritivos e descrições semânticas ricas em palavras-chave do nicho de psicologia.
*   **Open Graph & Twitter Cards:** Configuração completa de metadados para compartilhamento rico em redes sociais (WhatsApp, LinkedIn, Instagram e X/Twitter), com imagens de visualização otimizadas (`og-image`).
*   **Canonical URL & Favicon:** Definição correta do domínio canônico para evitar conteúdos duplicados, além de pacote completo de favicons responsivos para múltiplos dispositivos.
*   **Web Manifest:** Arquivo `site.webmanifest` e ícones configurados de forma moderna para assegurar a melhor integração com navegadores mobile.
*   **Otimização de Carregamento:** Estrutura otimizada para hidratação instantânea. Inicialização de recursos de monitoramento e animações de forma assíncrona.
*   **Acessibilidade (WAI-ARIA):** Componentes estruturados de acordo com as diretrizes de acessibilidade. Presença de `sr-only` (visualmente escondido, mas lido por leitores de tela), labels apropriados e gerenciamento correto de foco do teclado em modais e menus.

---

## 📁 Estrutura do Projeto

Abaixo está uma representação simplificada da estrutura de arquivos do projeto:

```text
├── public/                  # Arquivos estáticos (imagens, favicons, manifesto)
├── src/                     # Código-fonte da aplicação
│   ├── assets/              # Imagens e ilustrações internas
│   ├── components/          # Componentes modulares reutilizáveis
│   │   ├── site/            # Seções específicas da Landing Page (Hero, About, Faq, etc.)
│   │   └── ui/              # Componentes primitivos do Shadcn UI (Button, Sheet, etc.)
│   ├── hooks/               # Custom hooks globais (ex: use-mobile)
│   ├── lib/                 # Utilitários de validação, formatação e tratamento de erros
│   ├── routes/              # Definição de rotas e metadados com TanStack Router
│   ├── router.tsx           # Setup global do TanStack Router
│   ├── server.ts            # Entrypoint do servidor para SSR
│   ├── start.ts             # Entrypoint da aplicação TanStack Start
│   └── styles.css           # Estilos globais estruturados com Tailwind CSS v4
├── package.json             # Dependências e scripts do projeto
├── tsconfig.json            # Configurações do compilador TypeScript
└── vite.config.ts           # Configuração de bundler e plugins do Vite
```

---

## 🚀 Como Executar Localmente

Siga as instruções abaixo para executar o projeto em sua máquina local:

### Pré-requisitos
*   **Node.js** (v18.x ou superior recomendado)
*   Gerenciador de pacotes **npm** ou **bun**

### Instalação das Dependências
Clone o repositório e execute a instalação:

```bash
npm install
```

### Modo de Desenvolvimento
Inicie o servidor local de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o resultado.

---

## 📦 Build de Produção

Para gerar o build de produção otimizado da aplicação:

```bash
npm run build
```

O build será compilado na pasta `.output/`, pronto para ser implantado em plataformas de nuvem modernas (como Vercel, Netlify ou Cloudflare Pages) com total suporte a Server-Side Rendering (SSR).

---

## 🧠 Aprendizados Aplicados

Durante o desenvolvimento deste projeto, foram aplicadas e consolidadas práticas fundamentais de engenharia de software front-end:

1.  **Componentização e Reutilização:** Modularização de seções e criação de uma biblioteca de componentes consistentes e previsíveis baseados em Shadcn UI.
2.  **Roteamento e SSR com TanStack:** Implementação prática de TanStack Start para gerar páginas que combinam o carregamento rápido e benefícios de SEO do SSR com a interatividade instantânea do Single Page App (SPA).
3.  **Desenvolvimento Responsivo e "Mobile-First":** Adaptação fina do layout para todas as larguras de tela, especialmente voltado a dispositivos móveis, que representam mais de 80% do tráfego para landing pages deste segmento.
4.  **UX / Usabilidade no Menu Mobile:** Refatoração profunda para corrigir eventos de clique nativos e controle de ciclo de vida do menu lateral, solucionando conflitos comuns de foco de teclado do Radix UI com rolagens suaves.

---

## 🔮 Possíveis Melhorias Futuras

Planejamento de melhorias para elevar ainda mais o nível técnico e comercial da aplicação:

*   **Integração com WhatsApp Business API:** Para envio de mensagens automáticas estruturadas e qualificação inteligente de leads logo após o envio do formulário.
*   **Integração com CMS (Ex: Sanity ou DatoCMS):** Permitindo que a profissional gerencie textos, depoimentos e dúvidas frequentes sem necessidade de alteração de código.
*   **Blog para Inbound Marketing (SEO):** Área dedicada a artigos de psicologia para captação orgânica de clientes por meio do Google.
*   **Métricas e Rastreamento:** Implementação nativa do Google Analytics 4 (GA4) e Meta Pixel para monitorar taxas de conversão de cliques nos botões de agendamento.
*   **Agendamento Online Integrado:** Calendário interativo para marcação e pagamento direto de consultas (via Calendly ou similar).

---

## 👤 Autor

Desenvolvido por **Cássio Leite**.

*   **GitHub:** [https://github.com/cassio-leite](https://github.com/cassio-leite)
*   **LinkedIn:** [https://www.linkedin.com/in/cassio-leite/](https://www.linkedin.com/in/cassio-leite/)
*   **Portfólio:** [https://cassio-leite.github.io/portfolio/](https://cassio-leite.github.io/portfolio/)
