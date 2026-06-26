/** Projeção anual — Fase 4 (stub) */

export interface ProjecaoMensal {
  mes: number;
  receita: number;
  custos: number;
  lucro: number;
  saldoAcumulado: number;
}

/** Placeholder até implementação v0.2 */
export function projetarAnual(
  receitaMensal: number,
  custosMensais: number,
  meses = 12,
): ProjecaoMensal[] {
  const lucro = receitaMensal - custosMensais;
  let saldo = 0;
  return Array.from({ length: meses }, (_, i) => {
    const mes = i + 1;
    saldo += lucro;
    return {
      mes,
      receita: receitaMensal,
      custos: custosMensais,
      lucro,
      saldoAcumulado: saldo,
    };
  });
}
