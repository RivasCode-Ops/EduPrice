# 03 — Pendências de validação e qualidade

Itens **pedidos na spec ou na análise técnica** que ainda não foram fechados na fase local.

---

## Testes de negócio (pedido explícito)

| Cenário | Status | Arquivo sugerido |
|---------|--------|------------------|
| Break-even na capacidade | ✅ parcial | `break-even.spec` dentro `engine.test.ts` |
| Capacidade < ponto de equilíbrio | ❌ | `tests/break-even.test.ts` |
| Zero alunos / clamp para 1 | ❌ | `tests/consultant-mode.test.ts` |
| Margem impossível (100%+) | ❌ | idem |
| Desconto > margem segura | ❌ | idem |
| Custo negativo (entrada inválida) | ❌ | validação Zod + teste |
| Projeção anual | ❌ | `tests/projections.test.ts` (quando implementar) |

---

## Validação com usuários

| Item | Status |
|------|--------|
| Roteiro escrito | ✅ `docs/roteiro-validacao-consultor.md` |
| 2–3 entrevistas com gestores | ⏳ |
| Ajustes pós-feedback | ⏳ |

---

## v0.2 local (decisão anterior, não online)

| Feature | Status |
|---------|--------|
| Cenários nomeados salvos | ❌ |
| Projeção anual na UI | ❌ |
| Persistência localStorage | ❌ |

---

## Ao passar para online

Revisar também:

- [ ] `docs/BUNDLE-BASELINE.md` — novo baseline após features
- [ ] `docs/decisao-criterios.md` — re-priorizar opções F/G
- [ ] `docs/roadmap-saas.md` — alinhar com substituições em `02-substituicoes-local-vs-online.md`
