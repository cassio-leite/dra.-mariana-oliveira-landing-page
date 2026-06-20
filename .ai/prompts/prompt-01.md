# Adicionar Loading e Toast de Sucesso ao formulário de contato

Objetivo:

Melhorar a experiência do usuário após o envio do formulário, transmitindo uma sensação de profissionalismo e refinamento.

IMPORTANTE:

- Preservar completamente o layout atual.
- Não alterar a identidade visual.
- Não modificar a estrutura do formulário.
- Não implementar envio real de e-mail.
- Não adicionar backend.
- Não utilizar APIs externas.

---

# Loading no botão

Ao clicar em "Enviar mensagem":

1. Desabilitar o botão.
2. Exibir um spinner.
3. Alterar o texto:

De:

```tsx
Enviar mensagem
```

Para:

```tsx
Enviando...
```

Adicionar:

```tsx
disabled: opacity - 50;
disabled: pointer - events - none;
```

Utilizar:

```tsx
Loader2;
```

do Lucide.

O ícone deve possuir:

```tsx
animate - spin;
```

Estrutura esperada:

```tsx
<Loader2 className="h-4 w-4 animate-spin" />
```

Adicionar espaçamento adequado entre ícone e texto.

---

# Simulação do envio

Como este é um projeto fictício, não implementar envio real.

Simular uma requisição utilizando:

```tsx
await new Promise((resolve) => setTimeout(resolve, 1500));
```

Após 1,5 segundo:

- encerrar loading;
- exibir toast de sucesso;
- limpar todos os campos do formulário utilizando:

```tsx
reset();
```

---

# Toast de sucesso

Utilizar o sistema de toast já existente no projeto.

Caso não exista, utilizar:

```tsx
sonner;
```

ou o toast padrão utilizado no restante do projeto.

Mensagem:

Título:

```text
Mensagem enviada
```

Descrição:

```text
Obrigado pelo contato. Retornarei em breve.
```

Adicionar ícone de sucesso.

O toast deve aparecer no canto inferior direito.

Duração:

4 segundos.

---

# Toast de erro

Criar estrutura preparada para erro.

Mensagem:

Título:

```text
Não foi possível enviar a mensagem
```

Descrição:

```text
Tente novamente em alguns instantes.
```

Embora o erro não aconteça atualmente, deixar o código preparado para futura integração com EmailJS ou Resend.

---

# Botão

Manter o mesmo visual premium atual.

Preservar:

```tsx
rounded-full
shadow-soft
hover:scale-[1.02]
active:scale-[0.98]
transition-all duration-300
```

Durante o loading:

Desabilitar:

```tsx
hover;
active;
```

---

# UX

Depois do sucesso:

- limpar os campos;
- remover mensagens de erro;
- permitir novo envio imediatamente.

---

# Acessibilidade

Garantir:

- botão desabilitado durante loading;
- navegação por teclado preservada;
- foco correto após reset do formulário.

---

# Não implementar

Não adicionar:

- EmailJS;
- Resend;
- Supabase;
- backend;
- persistência;
- captcha;
- armazenamento em banco de dados.

---

# Resultado esperado

O usuário deve perceber uma experiência semelhante à de uma aplicação real.

Mesmo sendo um projeto fictício, o formulário deve transmitir sensação de qualidade, profissionalismo e acabamento premium.

Após concluir, mostrar os diffs dos arquivos modificados.
