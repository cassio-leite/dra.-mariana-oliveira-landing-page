# Revisar performance do React

Objetivo:

Melhorar Performance e Best Practices do Lighthouse.

## Analisar

Todos os componentes da landing page.

Verificar:

* imports desnecessários;
* código morto;
* componentes que podem utilizar memo();
* listas com keys adequadas;
* renderizações desnecessárias;
* objetos recriados a cada render.

## Não exagerar

Aplicar memo() apenas quando realmente fizer sentido.

Não adicionar complexidade desnecessária.

Preservar completamente o comportamento atual.

Mostrar os diffs ao finalizar.
