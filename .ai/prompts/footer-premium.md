# Melhorar Footer — Footer Premium

Objetivo:

Transformar o footer atual em um footer mais sofisticado, organizado e alinhado com a identidade visual elegante do restante do site.

IMPORTANTE:

- Preservar a identidade visual atual.
- Não alterar as cores principais do projeto.
- Não modificar o CTA final.
- Não alterar a tipografia existente.
- Não refatorar componentes desnecessariamente.
- Modificar somente o Footer.

---

## Objetivo visual

O footer deve transmitir:

- confiança;
- acolhimento;
- profissionalismo;
- sofisticação;
- aparência de clínica premium.

Inspirar-se em:

- Apple;
- Stripe;
- Notion;
- sites de psicólogos e clínicas de alto padrão.

---

# Estrutura desejada

Utilizar uma grade responsiva com quatro colunas.

Desktop:

```text
Logo/Identidade | Navegação | Contato | Atendimento
```

Mobile:

As colunas devem empilhar verticalmente com espaçamento confortável.

---

# Coluna 1 — Identidade

Exibir:

● Dra. Mariana Oliveira

Psicóloga Clínica • CRP 06/00000

Texto complementar:

"Acolhimento, escuta e cuidado em cada etapa do processo terapêutico."

Adicionar um pequeno elemento circular em sage como detalhe visual.

---

# Coluna 2 — Navegação

Adicionar links internos:

- Sobre
- Áreas de atuação
- Processo
- Depoimentos
- Dúvidas frequentes

Os links devem possuir:

```tsx
transition-colors duration-300
hover:text-sage-deep
```

---

# Coluna 3 — Contato

Adicionar:

- WhatsApp
- Email
- Instagram

Utilizar ícones do Lucide.

Exemplos:

- MessageCircle
- Mail
- Instagram

Não utilizar informações reais.

Continuar utilizando os dados fictícios atuais.

---

# Coluna 4 — Atendimento

Exibir:

- Atendimento online
- Atendimento presencial em São Paulo
- Horários flexíveis

Utilizar ícones sutis do Lucide.

Exemplos:

- Laptop
- MapPin
- Clock3

---

# Separador

Adicionar uma linha horizontal discreta:

```tsx
border - border / 50;
```

com espaçamento confortável.

---

# Parte inferior do footer

Lado esquerdo:

```text
© 2026 Dra. Mariana Oliveira. Todos os direitos reservados.
```

Lado direito:

```text
Sigilo profissional garantido conforme o Código de Ética do CFP.
```

No mobile, os textos devem ficar centralizados.

---

# Aparência

Manter a paleta atual.

Utilizar:

- bg-beige/40 ou equivalente;
- bordas suaves;
- bastante espaço em branco;
- visual minimalista.

Adicionar transições suaves:

```tsx
transition-all duration-300
```

---

# Responsividade

Desktop:

4 colunas.

Tablet:

2 colunas.

Mobile:

1 coluna.

Garantir excelente espaçamento em todas as resoluções.

---

# Não implementar

NÃO adicionar:

- formulário de contato;
- mapa;
- newsletter;
- animações complexas;
- carrosséis;
- dependências novas.

---

# Resultado esperado

O footer deve parecer uma extensão natural do restante da landing page, transmitindo a mesma sensação de elegância e confiança presente na Hero, About, Process e CTA final.

Após concluir, mostrar os diffs dos arquivos modificados.
