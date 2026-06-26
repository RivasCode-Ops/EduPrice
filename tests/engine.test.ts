import { describe, expect, it } from "vitest";
import { calcularModoConsultor } from "@/core/engine";
import { mockConsultorInput } from "@/core/mock-data";

describe("calcularModoConsultor", () => {
  it("calcula mensalidade ideal com lucro desejado", () => {
    const r = calcularModoConsultor(mockConsultorInput);
    expect(r.mensalidadeIdeal).toBeGreaterThan(0);
    expect(r.mensalidadeIdeal % 50).toBe(0);
    expect(r.lucroProjetado.lucroMensal).toBeGreaterThan(0);
  });

  it("retorna ponto de equilíbrio dentro da capacidade", () => {
    const r = calcularModoConsultor(mockConsultorInput);
    expect(r.pontoEquilibrio).not.toBeNull();
    expect(r.pontoEquilibrio!.alunos).toBeLessThanOrEqual(mockConsultorInput.capacidadeMaxima);
    expect(r.pontoEquilibrio!.lucroMensal).toBeGreaterThanOrEqual(0);
  });

  it("gera planos recomendados", () => {
    const r = calcularModoConsultor(mockConsultorInput);
    expect(r.planosRecomendados.length).toBe(3);
    expect(r.planosRecomendados[0].nome).toBe("Mensal");
  });

  it("mensalidade mínima é menor ou igual à ideal", () => {
    const r = calcularModoConsultor(mockConsultorInput);
    expect(r.mensalidadeMinima).toBeLessThanOrEqual(r.mensalidadeIdeal);
  });
});
