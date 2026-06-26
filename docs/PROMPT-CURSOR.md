# Prompt único — Cursor (EduPrice)

Cole no Cursor para continuar o produto com escopo claro.

---

```text
Contexto: EduPrice em C:\Users\Nitro\Projects\EduPrice
Repo: https://github.com/RivasCode-Ops/EduPrice
Spec: docs/ESPECIFICACAO.md

Produto independente de precificação escolar. NÃO integrar Picos do Saber (Fase 5).

Arquitetura obrigatória:
- src/modules/eduprice/domain/     → lógica pura, sem React
- src/modules/eduprice/application/ → serviços (Modo Consultor)
- src/modules/eduprice/ui/         → componentes React
- src/modules/eduprice/index.ts    → export EduPrice

Princípios:
1. UI nunca contém fórmulas de negócio
2. Entradas/saídas tipadas (ConsultorInput → ConsultorResultado)
3. Modo Consultor consome domain — não é cálculo isolado
4. Testes Vitest para todo código em domain/ e application/
5. Stubs existentes: projections.ts, reports.service.ts, pricing-scenarios.service.ts

Estado atual (v0.1):
- Fase 1–3 parcial: motor, Modo Consultor, UI funcional
- Fase 4 pendente: projeção anual, relatórios PDF, cenários nomeados
- Validação A pendente: docs/roteiro-validacao-consultor.md

Tarefa: [DESCREVA AQUI — ex.: implementar projeção anual em domain/projections.ts + UI]

Restrições:
- Não criar dependência de banco ou auth
- Não importar Calc-Roi ou Picos do Saber
- Manter export EduPrice.calcularModoConsultor compatível
- Commits pequenos; testes passando (npm run test:run && npm run build)

Entregue: código + testes + atualização mínima de docs se contrato mudar.
```

---

## Exemplos de tarefa

**Projeção anual (Fase 4):**
> Implemente projeção 12 meses em domain/projections.ts com sazonalidade simples; exponha via application; card na ResultsDashboard.

**Cenários nomeados:**
> Estenda pricing-scenarios.service.ts com cenários conservador/realista/meta; UI com tabs.

**Validação pós-entrevista:**
> Adicionar campos X e Y ao ConsultorInput conforme feedback da entrevista #1.

---

## Comandos

```powershell
cd C:\Users\Nitro\Projects\EduPrice
npm run dev
npm run test:run
npm run build
```
