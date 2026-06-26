# 02 — Substituições: local → online

Quando o EduPrice for para **online/SaaS**, use esta tabela como checklist de **substituições** (não reescrever do zero).

**Regra:** o núcleo `domain/` e contratos `eduprice.types.ts` **permanecem**; mudanças são principalmente em entrega, persistência e segurança.

---

## Entrega e execução

| Local (agora) | Online (futuro) | Arquivo / ação |
|---------------|-----------------|----------------|
| `npm run dev` → localhost:3000 | Deploy Vercel / VPS / Docker | Reativar `docs/DEPLOY-VERCEL.md` ou CI |
| Demo por **tela compartilhada** | Demo por **URL pública** | Atualizar `roteiro-validacao-consultor.md` |
| Sem domínio | Domínio custom (ex. eduprice.com.br) | DNS + Vercel project settings |
| Build local opcional | Build em CI a cada push | `.github/workflows/` (não criado) |

---

## Documentação

| Local (agora) | Online (futuro) | Arquivo |
|---------------|-----------------|---------|
| `docs/USO-LOCAL.md` **principal** | `docs/DEPLOY-VERCEL.md` ou `docs/DEPLOY.md` **principal** | Inverter destaque no README |
| `DEPLOY-VERCEL.md` = histórico | Guia de deploy ativo + env vars | Reescrever seção "fora de escopo" |
| Roteiro: `npm run dev` | Roteiro: link https://… | `roteiro-validacao-consultor.md` |

---

## Dados e persistência

| Local (agora) | Online (futuro) | Onde implementar |
|---------------|-----------------|------------------|
| Estado só na sessão (React state) | Cenários salvos por usuário | `pricing-scenarios.service.ts` + storage |
| Mock em `mock-data.ts` | Dados da escola no backend | API / Picos DB |
| Sem export | PDF / CSV / link compartilhável | `reports.service.ts` |
| Sem multi-escola | tenant_id por escola | Novo módulo auth + schema |

---

## Segurança e acesso

| Local (agora) | Online (futuro) |
|---------------|-----------------|
| Sem auth | Login (email/OAuth) |
| Sem secrets no repo | `VERCEL_TOKEN`, DB URL em env |
| Token Vercel exposto no chat → revogar | Tokens só em CI secrets |
| CORS irrelevante | CORS + rate limit se API pública |

---

## Produto / módulos (spec)

| Local (agora) | Online (futuro) | Arquivo |
|---------------|-----------------|---------|
| `projections.ts` stub | Projeção 12 meses + sazonalidade | `domain/projections.ts` |
| `reports.service.ts` stub | Relatórios + export | `application/reports.service.ts` |
| Validação Zod no package, não usada | Validação API + formulário | schemas + UI errors |
| 6 testes cenário feliz | Testes borda + E2E | `tests/` |
| Integração Picos adiada | Import `@/modules/eduprice` no Picos | `docs/integration-picos.md` |

---

## Performance (só relevante online)

| Local | Online |
|-------|--------|
| Bundle ~105 kB OK para dev | Revisar `npm run analyze` pós-features |
| Sem CDN | Assets via Vercel edge |
| Sem analytics | Vercel Analytics / Plausible (opcional) |

---

## Checklist “virar online”

Copie e marque quando for a hora:

```
[ ] Decisão formal: SaaS vs demo pública vs só Picos hosted
[ ] Revogar/rotacionar tokens antigos
[ ] Configurar deploy + domínio
[ ] Persistência de cenários (localStorage mínimo ou DB)
[ ] Auth se multi-usuário
[ ] Completar projections + reports
[ ] Testes de borda (capacidade, margem, desconto)
[ ] Atualizar README + inventario (marcar substituições feitas)
[ ] Remover/arquivar docs obsoletos desta pasta
```

---

## O que NÃO substituir

Manter intacto na migração online:

- `domain/pricing-engine.ts`
- `domain/break-even.ts`
- `domain/plans-comparison.ts`
- `domain/eduprice.rules.ts`
- `application/consultant-mode.service.ts` (orquestração)
- Contrato `EduPrice.calcularModoConsultor` em `index.ts`
