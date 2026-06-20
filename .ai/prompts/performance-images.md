# Otimizar imagens do projeto

Objetivo:

Melhorar a performance da landing page reduzindo o tamanho das imagens e preparando o projeto para obter uma excelente pontuação no Lighthouse.

## O que fazer

Analisar todas as imagens utilizadas no projeto.

Verificar principalmente:

- Hero
- About
- Open Graph
- Qualquer outra imagem importada

## Melhorias

- Converter imagens JPG e PNG para WebP quando possível.
- Reduzir tamanho dos arquivos sem perda perceptível de qualidade.
- Preservar exatamente o visual atual.
- Não alterar proporções.
- Não modificar layout.

## Imagens abaixo da dobra

Garantir:

```tsx
loading = "lazy";
```

em todas as imagens que não aparecem imediatamente ao abrir a página.

## Alt

Garantir descrições adequadas em todos os elementos img.

## Resultado esperado

Manter o mesmo design, porém com imagens mais leves e melhor pontuação no Lighthouse.

Ao terminar, mostrar os diffs dos arquivos alterados.
