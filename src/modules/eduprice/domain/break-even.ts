import type { BreakEvenResult } from "./eduprice.types";

/** Ponto de equilíbrio — alunos mínimos e receita mínima */
export function encontrarEquilibrio(
  custosFixos: number,
  mensalidade: number,
  capacidadeMaxima: number,
): BreakEvenResult | null {
  if (mensalidade <= 0) return null;

  for (let n = 1; n <= capacidadeMaxima; n++) {
    const lucro = n * mensalidade - custosFixos;
    if (lucro >= 0) {
      return {
        alunos: n,
        mensalidade,
        receitaMinima: n * mensalidade,
        lucroMensal: lucro,
      };
    }
  }
  return null;
}
