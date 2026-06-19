# Objetivo

Transformar Process.tsx em uma timeline elegante e premium.

## NÃO alterar

- Paleta de cores atual
- Tipografia atual
- Componentes já existentes
- Responsividade

## Estrutura

Criar uma seção "Como funciona o acompanhamento".

Título:

"Cada processo é único, mas você não precisa percorrê-lo sozinho."

Subtítulo:

"Um espaço seguro para compreender emoções, desenvolver recursos internos e construir uma vida mais equilibrada."

Adicionar uma timeline com 4 etapas:

### 1. Primeiro contato

Ícone: MessageCircle

Título:
Primeiro contato

Descrição:
Uma conversa inicial para compreender sua necessidade e esclarecer dúvidas sobre o atendimento.

---

### 2. Primeira sessão

Ícone: Calendar

Título:
Primeira sessão

Descrição:
Um momento de acolhimento e escuta, onde começamos a construir juntos um espaço de confiança.

---

### 3. Processo terapêutico

Ícone: HeartHandshake

Título:
Processo terapêutico

Descrição:
Ao longo das sessões, trabalhamos emoções, pensamentos e comportamentos com respeito ao seu tempo.

---

### 4. Evolução e bem-estar

Ícone: Sparkles

Título:
Evolução e bem-estar

Descrição:
O objetivo é promover autonomia, autoconhecimento e uma relação mais saudável consigo mesmo.

## Design

Inspirar-se em timelines editoriais e minimalistas.

Criar:

- linha vertical central usando border-sage/20;
- círculos com números 01, 02, 03 e 04;
- cards com:
  - bg-white/50
  - backdrop-blur-sm
  - border-border/60
  - rounded-3xl
  - shadow-soft

No desktop:

- alternar os cards esquerda e direita da linha.

No mobile:

- empilhar todos verticalmente.

## Espaçamento

Usar muito espaço em branco:

- py-32 ou py-36;
- gap generoso entre elementos.

## Animações

Usar BlurFade.

Cada etapa deve possuir delay progressivo:

0.05
0.10
0.15
0.20

## Código

- Código limpo.
- Criar array com as etapas e renderizar com map().
- Não duplicar JSX.
- Manter TypeScript.
