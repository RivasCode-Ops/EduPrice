# Inventário EduPrice

Pasta de **rastreio de decisões**: o que foi pedido, o que foi entregue, e o que **substituir ou acrescentar** quando o produto for para **online/SaaS**.

Use esta pasta no final do ciclo local para revisar gaps antes de reativar deploy, auth, multi-escola, etc.

## Arquivos

| Arquivo | Conteúdo |
|---------|----------|
| [01-pedidos-e-entregas.md](./01-pedidos-e-entregas.md) | Histórico do que foi solicitado vs. implementado |
| [02-substituicoes-local-vs-online.md](./02-substituicoes-local-vs-online.md) | Mapa local → online (o que trocar/adicionar) |
| [03-pendencias-validacao.md](./03-pendencias-validacao.md) | Itens pedidos na spec mas ainda não feitos |
| [04-experimento-vercel.md](./04-experimento-vercel.md) | Deploy experimental (fora de escopo atual) |

## Decisão vigente

**Modo de entrega:** local (`npm run dev` / integração Picos)  
**Não vigente agora:** URL pública, SaaS, auth, billing  

Quando mudar para online, começar por `02-substituicoes-local-vs-online.md` e marcar itens concluídos nesta pasta.
