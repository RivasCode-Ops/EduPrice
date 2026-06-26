# Especificação funcional + técnica — EduPrice

**Versão:** 0.1 · **Status:** Fase 1–3 parcial · **Integração Picos:** Fase 5 (não iniciar)

---

## 1. Visão do produto

| Campo | Valor |
|-------|-------|
| **Nome** | EduPrice |
| **Tipo** | Calculadora modular de precificação escolar, reutilizável, evolução SaaS |
| **Objetivo** | Simular custos, capacidade, mensalidades, lucro, equilíbrio e projeções para reforço, cursinhos e particulares |
| **Diretriz** | Módulo independente; lógica desacoplada da UI; sem Picos do Saber nesta etapa |

---

## 2. Escopo funcional — módulos

| # | Módulo | Status v0.1 |
|---|--------|-------------|
| 1 | Precificação | Parcial (`pricing-engine.ts`) |
| 2 | Simulador de mensalidades | Parcial (Modo Consultor) |
| 3 | Simulador de custos | Parcial (`eduprice.rules.ts`) |
| 4 | Simulador de lucro | Parcial (`analisarVolume`) |
| 5 | Ponto de equilíbrio | Implementado (`break-even.ts`) |
| 6 | Capacidade de alunos | Parcial (capacidadeMaxima) |
| 7 | Projeção anual | Stub (`projections.ts`) |
| 8 | Comparativo de planos | Implementado (`plans-comparison.ts`) |
| 9 | Relatórios | Stub (`reports.service.ts`) |
| 10 | Configurações | Futuro |

---

## 3. Modo Consultor

### Entradas

- aluguel, salários, despesas fixas, capacidade, lucro desejado
- (+ margem alvo, desconto máximo, alunos referência)

### Saídas

- mensalidade mínima / ideal / faixa
- alunos mínimos, ponto de equilíbrio, receita mínima
- lucro projetado, desconto máximo
- planos recomendados, semáforo, resumo

**Implementação:** `application/consultant-mode.service.ts` → consome `domain/*`

---

## 4. Arquitetura técnica

```
src/modules/eduprice/
  domain/
    eduprice.types.ts      ← contratos
    eduprice.rules.ts      ← regras de negócio
    pricing-engine.ts
    break-even.ts
    plans-comparison.ts
    projections.ts         ← stub Fase 4
  application/
    consultant-mode.service.ts
    pricing-scenarios.service.ts
    reports.service.ts
  ui/
    EduPriceShell.tsx
    ConsultantModeForm.tsx
    ResultsDashboard.tsx
  mock-data.ts
  index.ts                 ← export EduPrice
```

### Princípios obrigatórios

1. Cálculo puro em `domain/` — sem React
2. UI sem fórmulas centrais
3. Sem banco, auth ou Picos (Fase 1–4)
4. Integração por contratos tipados (`ConsultorInput` → `ConsultorResultado`)

---

## 5. Fases de construção

| Fase | Escopo | Status |
|------|--------|--------|
| **1** | Motor de cálculo | Em progresso |
| **2** | Modo Consultor | Implementado |
| **3** | Interface independente | Implementado |
| **4** | Comparativos + relatórios | Stub |
| **5** | Integração Picos | Não iniciar |

---

## 6. Requisitos de qualidade

- [x] Dados mock (`mock-data.ts`)
- [x] Testes unitários (`tests/engine.test.ts`)
- [x] Tipagem entradas/saídas
- [ ] Multi-empresa / SaaS (v1.0)
- [x] Reutilizável via `EduPrice` export

---

## 7. Integração futura (Fase 5)

```typescript
import { EduPrice } from "@/modules/eduprice";

const resultado = EduPrice.calcularModoConsultor(dadosEscola);
// Picos renderiza resultado — sem reescrever domain
```

Ver `docs/integration-picos.md`.

---

## 8. Parecer técnico

A ideia é **viável**. Decisão correta: produto independente primeiro.

**Ajuste essencial:** motor e contratos antes de navegação — **seguido** nesta arquitetura.

**Próximo foco (decisão):** validação com gestores (`docs/roteiro-validacao-consultor.md`) antes de Fase 4.

---

## Referências

- Decisão por critérios: `docs/decisao-criterios.md`
- Roadmap SaaS: `docs/roadmap-saas.md`
- Prompt Cursor: `docs/PROMPT-CURSOR.md`
