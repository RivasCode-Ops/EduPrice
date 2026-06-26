import type { ConsultorResultado } from "../domain/eduprice.types";

/** Relatórios — Fase 4 (stub) */

export function gerarRelatorioTexto(r: ConsultorResultado): string {
  return [
    "=== EDUPRICE — RELATÓRIO CONSULTOR ===",
    "",
    r.resumoConsultor,
    "",
    `Mensalidade mínima: R$ ${r.mensalidadeMinima.toFixed(0)}`,
    `Mensalidade ideal: R$ ${r.mensalidadeIdeal.toFixed(0)}`,
    `Custos fixos: R$ ${r.custosFixosMensais.toFixed(0)}/mês`,
    `Lucro projetado: R$ ${r.lucroProjetado.lucroMensal.toFixed(0)}/mês`,
    `Margem: ${r.lucroProjetado.margemPct.toFixed(1)}%`,
    "",
    "Planos:",
    ...r.planosRecomendados.map(
      (p) => `  ${p.nome}: R$ ${p.preco.toFixed(0)} (${p.veredito})`,
    ),
  ].join("\n");
}
