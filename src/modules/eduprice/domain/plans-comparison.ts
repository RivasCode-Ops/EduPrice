import { semaforoMargem } from "./eduprice.rules";
import type { PlanoPreco } from "./eduprice.types";

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

/** Comparativo de planos — mensal, anual, à vista */
export function compararPlanos(
  mensalidadeIdeal: number,
  custoPorAluno: number,
  margemAlvoPct: number,
  descontoAnualVistaPct: number,
): PlanoPreco[] {
  const anualVista = Math.round(
    mensalidadeIdeal * 12 * (1 - descontoAnualVistaPct / 100),
  );
  const mensalEquivVista = anualVista / 12;

  const base = [
    {
      id: "mensal",
      nome: "Mensal",
      preco: mensalidadeIdeal,
      precoMensalEquivalente: mensalidadeIdeal,
    },
    {
      id: "anual-12",
      nome: "Anual 12×",
      preco: mensalidadeIdeal,
      precoMensalEquivalente: mensalidadeIdeal,
    },
    {
      id: "anual-vista",
      nome: "Anual à vista",
      preco: anualVista,
      precoMensalEquivalente: mensalEquivVista,
      detalhe: `${descontoAnualVistaPct}% de desconto no pagamento anual`,
    },
  ];

  return base.map((p) => ({
    ...p,
    ...avaliarPlano(p.precoMensalEquivalente, custoPorAluno, margemAlvoPct),
  }));
}
