Analise e corrija os problemas de usabilidade, acessibilidade e performance do menu mobile da Navbar.

Contexto:

* Projeto React + TanStack Start.
* Componentes do Radix UI (Sheet, SheetContent, SheetTrigger, SheetClose).
* O menu funciona de forma inconsistente em dispositivos móveis.
* Em alguns momentos os links não respondem ao toque.
* Após algum tempo ou após recarregar a página, o menu passa a funcionar normalmente.
* O carregamento inicial também parece lento em dispositivos móveis.

Objetivos:

1. Corrigir a estrutura inválida do menu mobile.

* Verifique se existem elementos interativos aninhados.
* Atualmente existe um <button> envolvendo um <SheetClose>, e o SheetClose do Radix também renderiza um botão.
* Isso pode gerar HTML inválido e comportamento inconsistente em navegadores mobile.
* Refatore utilizando corretamente o padrão: <SheetClose asChild> <button>...</button> </SheetClose>
* Não deixe botões dentro de botões.

2. Corrigir a navegação das âncoras.

* Os links do menu devem fechar o Sheet e navegar para a seção correspondente.
* Remover dependência de setTimeout arbitrário.
* Substituir a lógica atual por uma abordagem confiável.
* Garantir que o menu seja fechado antes de iniciar o scroll.
* Utilizar uma solução baseada em estado do Sheet ou callback de fechamento.
* O scroll deve ser suave:
  scrollIntoView({
  behavior: "smooth",
  block: "start"
  });

3. Investigar possíveis overlays bloqueando cliques.

* Verificar se o SheetOverlay continua ativo após o fechamento.
* Verificar z-index dos elementos.
* Garantir que nenhum overlay invisível esteja interceptando eventos de toque.
* Conferir pointer-events dos elementos do menu.

4. Melhorar a acessibilidade.

* Garantir navegação correta por teclado.
* Garantir foco correto ao abrir e fechar o menu.
* Manter aria-labels adequados.
* Garantir que o botão hambúrguer seja acessível.

5. Melhorar a performance inicial.

* Identificar possíveis causas de lentidão durante a hidratação.
* Verificar se há renderizações desnecessárias na Navbar.
* Utilizar useMemo/useCallback apenas se realmente necessário.
* Evitar recriações desnecessárias de funções durante renderizações.
* Garantir que o menu esteja utilizável logo após a hidratação.

6. Melhorar a lógica do IntersectionObserver.

* Garantir que todas as seções sejam observadas corretamente.
* Evitar falhas caso alguma seção ainda não esteja disponível no momento da montagem.
* Tornar a lógica mais robusta.

7. Resultado esperado.

* Menu mobile abre instantaneamente.
* Todos os links respondem ao primeiro toque.
* O menu fecha corretamente.
* O scroll para a seção funciona sempre.
* Nenhum clique é bloqueado.
* Sem elementos interativos aninhados.
* Sem warnings de acessibilidade.
* Melhor experiência em iPhone e Android.

Importante:

* Faça as correções diretamente no componente Navbar.
* Explique cada alteração realizada.
* Mostre o código final completo já corrigido.
* Não apenas sugira mudanças; implemente as correções seguindo as boas práticas do Radix UI e React.
