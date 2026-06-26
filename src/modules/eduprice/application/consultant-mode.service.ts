import { encontrarEquilibrio } from "../domain/break-even";
import { compararPlanos } from "../domain/plans-comparison";
import {
  analisarVolume,
  calcularMensalidadeIdeal,
} from "../domain/pricing-engine";
import {
  arredondarMensalidade,
  calcularDescontoMaximo,
  consolidarCustosFixos,
} from "../domain/eduprice.rules";
import type { ConsultorInput, ConsultorResultado } from "../domain/eduprice.types";

/**
 * Modo Consultor — camada de recomendação sobre o motor de cálculo.
 * Consome entradas resumidas e retorna decisão orientada.
 */
export function executarModoConsultor(
  input: ConsultorInput,
): ConsultorResultado {
  const custosFixosMensais =
    consolidarCustosFixos(input) + (input.custosVariaveisMedios ?? 0);

  const alunosRef = Math.min(
    Math.max(1, input.alunosAtuais || 1),
    input.capacidadeMaxima,
  );

  const mensalidadeIdeal = arredondarMensalidade(
    calcularMensalidadeIdeal(
      custosFixosMensais,
      alunosRef,
      input.lucroDesejadoMensal,
    ),
  );

  const volIdeal = analisarVolume(
    custosFixosMensais,
    alunosRef,
    mensalidadeIdeal,
    input.margemAlvoPct,
  );

  const volMinimo = analisarVolume(
    custosFixosMensais,
    alunosRef,
    volIdeal.mensalidadeMinima,
    input.margemAlvoPct,
  );

  const pontoEquilibrio = encontrarEquilibrio(
    custosFixosMensais,
    mensalidadeIdeal,
    input.capacidadeMaxima,
  );

  const descontoMaximoPct = calcularDescontoMaximo(
    volIdeal.margemPct,
    input.descontoMaximoPermitidoPct,
  );

  const planosRecomendados = compararPlanos(
    mensalidadeIdeal,
    volIdeal.custoPorAluno,
    input.margemAlvoPct,
    descontoMaximoPct,
  );

  const mensalidadeMinima = arredondarMensalidade(volMinimo.mensalidadeMinima);

  const resumoConsultor = [
    `Mensalidade ideal: R$ ${mensalidadeIdeal.toFixed(0)} (${alunosRef} alunos)`,
    `Lucro projetado: R$ ${volIdeal.lucro.toFixed(0)}/mês`,
    pontoEquilibrio
      ? `Equilíbrio: ${pontoEquilibrio.alunos} alunos`
      : "Equilíbrio: não atingível na capacidade informada",
  ].join(" · ");

  return {
    custosFixosMensais,
    custoPorAluno: volIdeal.custoPorAluno,
    mensalidadeMinima,
    mensalidadeIdeal,
    faixaMensalidade: { min: mensalidadeMinima, ideal: mensalidadeIdeal },
    alunosMinimosEquilibrio: pontoEquilibrio?.alunos ?? null,
    pontoEquilibrio,
    lucroProjetado: {
      alunos: alunosRef,
      receita: volIdeal.receita,
      lucroMensal: volIdeal.lucro,
      margemPct: volIdeal.margemPct,
    },
    descontoMaximoPct,
    planosRecomendados,
    semaforoGeral: volIdeal.semaforo,
    resumoConsultor,
  };
}
