Faça uma correção de bug na navegação mobile do projeto.

Problema atual

Quando o menu de navegação mobile (hamburger menu) é aberto, os links não funcionam corretamente:

O usuário precisa segurar o toque para que a ação de clique funcione
Um toque normal não executa o scroll/navegação
O comportamento está diferente do padrão esperado de navegação mobile (tap → navegar imediatamente)
A página não responde corretamente ao evento de clique em dispositivos móveis
Comportamento esperado
Um único toque em qualquer link do menu deve:
Navegar imediatamente para a seção correspondente (#id)
Fechar o menu mobile automaticamente
Ativar scroll suave normalmente
O comportamento deve ser idêntico ao padrão de navegação mobile nativa
Possíveis causas a verificar
Uso incorreto de onTouchStart, onTouchEnd ou eventos duplicados de clique
Algum overlay ou elemento com z-index interceptando eventos de toque
pointer-events: none ou pointer-events: auto mal configurado
Problema com event.preventDefault() bloqueando o comportamento padrão
Estado do menu não sendo fechado corretamente antes da navegação
Conflito entre framer-motion, div overlay ou fixed container
Regras importantes
Não alterar o design visual atual
Não remover animações existentes sem necessidade
Não criar novos arquivos
Corrigir apenas o comportamento de interação/touch
Garantir compatibilidade mobile (iOS Safari e Android Chrome)
Resultado esperado

Menu mobile funcionando normalmente:

Tap único funciona
Scroll suave funciona
Menu fecha automaticamente ao clicar em um link
Nenhum comportamento de “segurar para funcionar”