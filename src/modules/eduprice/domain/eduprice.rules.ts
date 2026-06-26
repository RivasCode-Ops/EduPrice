import type { Semaforo } from "./eduprice.types";

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

export function calcularDescontoMaximo(
  margemPct: number,
  tetoPermitidoPct: number,
): number {
  const margemSegura = margemPct > 0 ? Math.floor(margemPct * 0.8) : 0;
  return Math.min(tetoPermitidoPct, margemSegura);
}

export function consolidarCustosFixos(input: {
  aluguel: number;
  salarios: number;
  despesasFixas: number;
}): number {
  return input.aluguel + input.salarios + input.despesasFixas;
}
