# EduPrice

Calculadora **modular** de precificação escolar — produto independente, preparado para integração futura com Picos do Saber (Calc-Roi).

## Arquitetura (3 blocos)

| Bloco | Pasta | Responsabilidade |
|-------|-------|------------------|
| **Entrada** | `src/components/consultor/` | Formulários e UI |
| **Análise** | `src/core/engine.ts` | Motor puro (sem React, sem API) |
| **Saída** | `src/components/consultor/consultor-results.tsx` | Relatórios e recomendações |

## Modo Consultor (v0.1)

Informe: aluguel, salários, despesas fixas, capacidade, lucro desejado.

Retorna: mensalidade mínima/ideal, equilíbrio, lucro projetado, desconto máximo, planos.

## Comandos

```bash
npm install
npm run dev
npm run test:run
npm run build
```

## Integração futura (Picos do Saber)

```typescript
import { EduPrice } from "@/core";

const resultado = EduPrice.calcularModoConsultor({
  aluguel: 8500,
  salarios: 42000,
  despesasFixas: 6800,
  capacidadeMaxima: 120,
  alunosAtuais: 65,
  lucroDesejadoMensal: 15000,
  margemAlvoPct: 25,
  descontoMaximoPermitidoPct: 10,
});
// Embutir resultado.planosRecomendados no módulo Preço do Picos
```

Ver `docs/integration-picos.md` e `docs/roadmap-saas.md`.

## Escopo futuro (não nesta etapa)

Precificação completa · projeção anual · relatórios PDF · multi-escola SaaS · auth · billing.
