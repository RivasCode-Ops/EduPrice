# Integração futura — EduPrice → Picos do Saber

O EduPrice nasce **desacoplado**. A integração não reescreve regras — consome a API interna.

## Contrato

```typescript
// Calc-Roi / Picos do Saber (futuro)
import { EduPrice, type ConsultorResultado } from "eduprice/core";

function moduloPrecoPainelMestre(dadosEscola: DadosEscola): ConsultorResultado {
  return EduPrice.calcularModoConsultor({
    aluguel: dadosEscola.fixos.aluguel,
    salarios: dadosEscola.folhaTotal,
    despesasFixas: dadosEscola.fixos.outros,
    capacidadeMaxima: dadosEscola.capacidade.maxima,
    alunosAtuais: dadosEscola.capacidade.atual,
    lucroDesejadoMensal: dadosEscola.metas.lucroMensal,
    margemAlvoPct: dadosEscola.metas.margemPct,
    descontoMaximoPermitidoPct: dadosEscola.precos.descontoMaxPct,
  });
}
```

## Mapeamento com Calc-Roi hoje

| EduPrice | Picos do Saber (`gestao-engine.js`) |
|----------|-------------------------------------|
| `calcularModoConsultor` | `analisarVolume` + `calcularPlanos` + `calcularEquilibrio` |
| `ConsultorResultado` | subset de `calcularGestao()` |
| `src/core/` | equivalente isolado de `gestao-engine.js` |

## Estratégia de embed

1. **Fase 1 (atual):** produto standalone em `Projects/EduPrice`
2. **Fase 2:** publicar `@rivascode/eduprice-core` ou copiar `src/core/` para Calc-Roi
3. **Fase 3:** aba "Consultor" no Picos importa `EduPrice` sem duplicar motor
4. **Fase 4:** SaaS multi-tenant com mesma engine

## O que NÃO fazer na integração

- Não acoplar UI do EduPrice ao `index.html` monolítico de uma vez
- Não misturar `localStorage` do Picos com estado do EduPrice
- Não acessar Supabase/API do projeto principal nesta fase
