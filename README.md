# EduPrice

Calculadora **modular** de precificação escolar — produto **local**, preparado para integração futura com Picos do Saber (Calc-Roi).

## Uso local

```powershell
npm install
npm run dev
```

Abrir **http://localhost:3000** · Guia: `docs/USO-LOCAL.md` · Inventário (local vs online): `docs/inventario/`

## Arquitetura (spec modular)

```
src/modules/eduprice/
  domain/        → pricing-engine, break-even, plans-comparison
  application/   → consultant-mode.service
  ui/            → EduPriceShell, ConsultantModeForm, ResultsDashboard
  index.ts       → export EduPrice
```

Spec completa: `docs/ESPECIFICACAO.md` · Prompt Cursor: `docs/PROMPT-CURSOR.md`

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
import { EduPrice } from "@/modules/eduprice";

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
