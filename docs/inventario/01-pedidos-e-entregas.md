# 01 — Pedidos e entregas

Registro cronológico do que foi pedido e do status atual.

**Última atualização:** 2026-06-26

---

## Spec funcional original (EduPrice)

| # | Pedido | Status | Onde está |
|---|--------|--------|-----------|
| 1 | Módulo independente, desacoplado de Picos | ✅ Feito | `src/modules/eduprice/` |
| 2 | Motor de cálculo puro (sem UI) | ✅ Feito | `domain/` |
| 3 | Modo Consultor (camada application) | ✅ Feito | `application/consultant-mode.service.ts` |
| 4 | UI independente | ✅ Feito | `ui/` |
| 5 | Tipagem clara entrada/saída | ✅ Feito | `domain/eduprice.types.ts` |
| 6 | Testes unitários do núcleo | ⚠️ Parcial | 6 testes — só cenário feliz |
| 7 | Dados mock | ✅ Feito | `mock-data.ts` |
| 8 | Precificação completa (10 módulos) | ⚠️ Parcial | Core + consultor; projeção/relatórios stub |
| 9 | Comparativo de planos | ✅ Feito | `domain/plans-comparison.ts` |
| 10 | Projeção anual | ❌ Stub | `domain/projections.ts` |
| 11 | Relatórios exportáveis | ❌ Stub | `application/reports.service.ts` |
| 12 | Integração Picos do Saber | ❌ Adiado | `docs/integration-picos.md` (contrato only) |
| 13 | SaaS multi-empresa | ❌ Adiado | `docs/roadmap-saas.md` |

---

## Decisões de produto (pós-spec)

| Pedido | Decisão | Data |
|--------|---------|------|
| Produto independente primeiro | ✅ Mantido | 2026-06 |
| Validar motor antes da UI pesada | ✅ Feito (refactor domain/application/ui) | 2026-06 |
| Deploy Vercel para demo | ⚠️ Feito experimentalmente, depois **revertido como escopo** | 2026-06 |
| **App roda local, não online** | ✅ **Decisão vigente** | 2026-06 |
| Entrevistas de validação (2–3 gestores) | ⏳ Pendente | roteiro pronto |
| Bundle analyzer | ✅ Feito | `npm run analyze`, `docs/BUNDLE-BASELINE.md` |
| Pasta inventário (local vs online) | ✅ Este documento | 2026-06 |

---

## Infra / tooling pedido (contexto Calc-Roi + MCP)

| Pedido | Status | Nota |
|--------|--------|------|
| MCP global (filesystem, github, fetch, memory) | ✅ | `~/.cursor/mcp.json` |
| Postgres MCP só por projeto | ✅ | Removido do global |
| Calc-Roi cenários nomeados v0.1 | ✅ | Projeto separado |
| Publicar EduPrice no GitHub | ✅ | RivasCode-Ops/EduPrice |

---

## Fases da spec vs. realidade

| Fase spec | Previsto | Real |
|-----------|----------|------|
| 1 — Motor | Fórmulas + testes | ✅ Core OK, testes incompletos |
| 2 — Modo Consultor | Recomendações automáticas | ✅ |
| 3 — UI independente | Telas + resultados | ✅ |
| 4 — Comparativos e relatórios | Consolidar + export | ⚠️ Planos sim; relatórios não |
| 5 — Integração Picos | Embed sem alterar core | ❌ Aguardando validação local |

---

## Como usar este arquivo

Ao fechar a fase **local**, marque cada linha ⏳→✅ ou anote motivo de ❌.  
Novos pedidos: adicionar linha na tabela com data e link para PR/commit.
