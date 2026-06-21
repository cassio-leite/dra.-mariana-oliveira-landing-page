Faça uma revisão completa da experiência mobile do projeto.

Existem três problemas:

## 1. Botão CTA da seção final

O botão "Agendar conversa inicial" ainda apresenta um pequeno desalinhamento horizontal no mobile.

Objetivos:

* centralizar perfeitamente;
* manter o design atual;
* evitar margens fixas;
* usar flexbox corretamente;
* limitar a largura do botão com max-width adequado;
* garantir alinhamento correto em 320px, 375px e 425px.

---

## 2. Links da Navbar no mobile

Ao abrir o site no celular, os links do menu não estão funcionando corretamente.

Verificar:

* se os IDs das seções existem;
* se os href correspondem aos IDs;
* se algum overlay ou z-index está bloqueando os cliques;
* se o menu mobile fecha após selecionar um item;
* se o scroll suave está funcionando;
* se algum elemento com position fixed está interceptando eventos.

Corrigir sem alterar o visual atual.

---

## 3. Performance

A página está lenta para carregar em dispositivos móveis.

Faça uma análise e implemente melhorias:

* lazy loading de imagens;
* reduzir animações excessivas;
* otimizar componentes do Framer Motion;
* evitar re-renderizações desnecessárias;
* diminuir custo do BlurFade;
* usar carregamento sob demanda quando possível;
* melhorar a pontuação do Lighthouse Mobile.

Não criar novos arquivos.

Manter o design premium atual.

Prioridade:

1. Navegação mobile.
2. Performance.
3. Centralização do botão.
