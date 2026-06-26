import type { ConsultorInput, ConsultorResultado, Semaforo, PlanoPreco } from "./types";

export function arredondarMensalidade(valor: number): number {
  if (valor <= 0) return 0;
  return Math.ceil(valor / 50) * 50;
}

export function semaforoMargem(
  margemPct: number,
  margemAlvoPct: number,
): { semaforo: Semaforo; veredito: string } {
  if (margemPct >= margemAlvoPct) {
    return { semaforo: "verde", veredito: "Margem saudável" };
  }
  if (margemPct >= margemAlvoPct * 0.6) {
    return { semaforo: "amarelo", veredito: "Margem apertada" };
  }
  return { semaforo: "vermelho", veredito: "Margem insuficiente" };
}

function analisarVolume(
  custosFixos: number,
  numAlunos: number,
  mensalidade: number,
  margemAlvoPct: number,
) {
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

function encontrarEquilibrio(
  custosFixos: number,
  mensalidade: number,
  capacidadeMaxima: number,
) {
  if (mensalidade <= 0) return null;
  for (let n = 1; n <= capacidadeMaxima; n++) {
    const lucro = n * mensalidade - custosFixos;
    if (lucro >= 0) {
      return { alunos: n, mensalidade, lucroMensal: lucro };
    }
  }
  return null;
}

function avaliarPlano(
  precoMensalEquiv: number,
  custoPorAluno: number,
  margemAlvoPct: number,
): Pick<PlanoPreco, "margemPct" | "semaforo" | "veredito"> {
  const margemPct =
    precoMensalEquiv > 0
      ? ((precoMensalEquiv - custoPorAluno) / precoMensalEquiv) * 100
      : -100;
  return { margemPct, ...semaforoMargem(margemPct, margemAlvoPct) };
}

function montarPlanos(
  mensalidadeIdeal: number,
  custoPorAluno: number,
  margemAlvoPct: number,
  descontoAnualVistaPct: number,
): PlanoPreco[] {
  const anualVista = Math.round(mensalidadeIdeal * 12 * (1 - descontoAnualVistaPct / 100));
  const mensalEquivVista = anualVista / 12;

  const planos: Array<Omit<PlanoPreco, "margemPct" | "semaforo" | "veredito"> & { precoMensalEquivalente: number }> = [
    { id: "mensal", nome: "Mensal", preco: mensalidadeIdeal, precoMensalEquivalente: mensalidadeIdeal },
    { id: "anual-12", nome: "Anual 12×", preco: mensalidadeIdeal, precoMensalEquivalente: mensalidadeIdeal },
    {
      id: "anual-vista",
      nome: "Anual à vista",
      preco: anualVista,
      precoMensalEquivalente: mensalEquivVista,
      detalhe: `${descontoAnualVistaPct}% de desconto no pagamento anual`,
    },
  ];

  return planos.map((p) => ({
    ...p,
    ...avaliarPlano(p.precoMensalEquivalente, custoPorAluno, margemAlvoPct),
  }));
}

/** Motor principal — sem dependência de UI ou Picos do Saber */
export function calcularModoConsultor(input: ConsultorInput): ConsultorResultado {
  const custosFixosMensais = input.aluguel + input.salarios + input.despesasFixas;
  const alunosRef = Math.min(
    Math.max(1, input.alunosAtuais || 1),
    input.capacidadeMaxima,
  );

  const mensalidadeIdeal = arredondarMensalidade(
    (custosFixosMensais + input.lucroDesejadoMensal) / alunosRef,
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

  const descontoMaximoPct = Math.min(
    input.descontoMaximoPermitidoPct,
    volIdeal.margemPct > 0 ? Math.floor(volIdeal.margemPct * 0.8) : 0,
  );

  const planosRecomendados = montarPlanos(
    mensalidadeIdeal,
    volIdeal.custoPorAluno,
    input.margemAlvoPct,
    descontoMaximoPct,
  );

  const semaforoGeral = volIdeal.semaforo;

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
    mensalidadeMinima: arredondarMensalidade(volMinimo.mensalidadeMinima),
    mensalidadeIdeal,
    alunosMinimosEquilibrio: pontoEquilibrio?.alunos ?? null,
    pontoEquilibrio,
    lucroProjetado: {
      alunos: alunosRef,
      receita: volIdeal.receita,
      lucroMensal: volIdeal.lucro,
      margemPct: volIdeal.margemPct,
    },
    descontoMaximoPct: descontoMaximoPct,
    planosRecomendados,
    semaforoGeral,
    resumoConsultor,
  };
}
