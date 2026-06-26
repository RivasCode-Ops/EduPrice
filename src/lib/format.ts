export function fmtMoeda(valor: number): string {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}

export function fmtPct(valor: number, casas = 1): string {
  return valor.toFixed(casas) + "%";
}

export function parseNumero(valor: string): number {
  const n = parseFloat(valor.replace(/\./g, "").replace(",", "."));
  return Number.isFinite(n) ? n : 0;
}
