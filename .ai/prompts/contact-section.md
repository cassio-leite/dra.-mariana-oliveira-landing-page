# Criar seção Contact (Formulário de Contato Premium)

Objetivo:

Criar uma nova seção chamada Contact, posicionada entre a FAQ e o CTA Final.

Essa seção deve transmitir:

- acolhimento;
- profissionalismo;
- confiança;
- facilidade de contato;
- aparência de clínica premium.

A seção deve parecer uma continuação natural das seções About, Process e Testimonials.

Inspirar-se em:

- Apple;
- Stripe;
- Notion;
- clínicas premium;
- sites modernos de psicólogos.

---

# Estrutura da seção

Criar:

```tsx
export function Contact();
```

e adicionar:

```tsx
<Contact />
```

entre:

```tsx
<Faq />
<Contact />
<CtaFinal />
```

---

# Cabeçalho

Adicionar uma área centralizada.

Label superior:

Contato

utilizando:

```tsx
text-xs uppercase tracking-[0.2em] text-sage-deep
```

Título:

Vamos conversar?

com:

```tsx
text-3xl md:text-5xl
font-light
leading-tight
```

Descrição:

Se você deseja iniciar sua jornada terapêutica ou possui alguma dúvida, entre em contato. Será um prazer acolher você.

com:

```tsx
text-muted-foreground
leading-relaxed
max-w-2xl
mx-auto
```

---

# Layout principal

Desktop:

duas colunas

```text
Informações de contato | Formulário
```

Tablet:

1 coluna.

Mobile:

1 coluna.

Utilizar:

```tsx
grid;
lg: grid - cols - 2;
gap - 10;
items - start;
```

---

# Coluna esquerda

Criar três cards elegantes.

Todos os cards devem possuir:

```tsx
rounded-[2rem]
bg-white/40
backdrop-blur-md
border border-white/60
shadow-soft
p-7
transition-all duration-300
hover:-translate-y-1
```

---

## Card WhatsApp

Ícone:

```tsx
<MessageCircle />
```

Título:

WhatsApp

Texto:

Retorno em até 24 horas.

Subtexto:

Segunda a sexta, das 09h às 18h.

---

## Card Email

Ícone:

```tsx
<Mail />
```

Título:

E-mail

Texto:

Envie sua mensagem a qualquer momento.

Subtexto:

Resposta em horário comercial.

---

## Card Atendimento

Ícone:

```tsx
<Clock3 />
```

Título:

Horários

Texto:

Segunda a sexta

Subtexto:

09h às 18h.

---

Utilizar os ícones do Lucide.

As cores dos ícones devem seguir a identidade sage do projeto.

---

# Coluna direita

Criar um card principal com visual glassmorphism.

Utilizar:

```tsx
rounded-[2rem]
bg-white/40
backdrop-blur-md
border border-white/60
shadow-elegant
p-8
```

---

Adicionar:

Nome

```tsx
<Input />
```

Placeholder:

Seu nome

---

E-mail

```tsx
<Input type="email" />
```

Placeholder:

seuemail@exemplo.com

---

Mensagem

```tsx
<Textarea />
```

Placeholder:

Conte um pouco sobre como posso ajudar.

---

Os campos devem possuir:

```tsx
rounded-2xl
border-border/60
bg-background/60
```

Adicionar:

```tsx
focus-visible:ring-sage
```

para manter a identidade visual.

---

# Botão principal

Texto:

Enviar mensagem

Adicionar:

```tsx
rounded-full
shadow-soft
transition-all duration-300
hover:scale-[1.02]
active:scale-[0.98]
```

Utilizar a mesma identidade visual do botão principal da Hero.

Adicionar ícone:

```tsx
<ArrowRight />
```

---

# Efeito visual

Adicionar uma iluminação suave no fundo do card:

```tsx
absolute
-right-10
-top-10
h-32
w-32
rounded-full
bg-sage-soft/10
blur-3xl
pointer-events-none
```

como já utilizado na seção About.

---

# Espaçamento

Utilizar:

```tsx
py-28 md:py-36
```

Manter consistência com as demais seções do site.

---

# Animações

Utilizar:

```tsx
<BlurFade />
```

nos títulos.

Adicionar pequenas animações de entrada.

Utilizar:

```tsx
transition-all duration-300
```

nos cards.

Não adicionar animações exageradas.

---

# NÃO implementar ainda

Não adicionar:

- React Hook Form;
- Zod;
- EmailJS;
- Resend;
- Supabase;
- Toast;
- Loading;
- Máscaras;
- Validação.

Nesta etapa, criar apenas a interface visual.

---

# Resultado esperado

A seção deve parecer uma continuação natural do restante da landing page.

O visual precisa transmitir a sensação de uma clínica moderna, elegante, acolhedora e de alto padrão.

Após concluir, mostrar os diffs dos arquivos alterados e manter o padrão de código já existente no projeto.
