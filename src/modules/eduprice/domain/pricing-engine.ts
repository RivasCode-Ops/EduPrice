import { semaforoMargem } from "./eduprice.rules";
import type { VolumeAnalysis } from "./eduprice.types";

/** Análise de volume — receita, lucro, margem, custo/aluno */
export function analisarVolume(
  custosFixos: number,
  numAlunos: number,
  mensalidade: number,
  margemAlvoPct: number,
): VolumeAnalysis {
  const receita = numAlunos * mensalidade;
  const lucro = receita - custosFixos;
  const margemPct = receita > 0 ? (lucro / receita) * 100 : -100;
  const custoPorAluno = numAlunos > 0 ? custosFixos / numAlunos : custosFixos;
  const mensalidadeMinima = custoPorAluno * (1 + margemAlvoPct / 100);

  return {
    receita,
    lucro,
    margemPct,
    custoPorAluno,
    mensalidadeMinima,
    ...semaforoMargem(margemPct, margemAlvoPct),
  };
}

export function calcularMensalidadeIdeal(
  custosFixos: number,
  alunos: number,
  lucroDesejado: number,
): number {
  if (alunos <= 0) return 0;
  return (custosFixos + lucroDesejado) / alunos;
}
