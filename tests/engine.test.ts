import { describe, expect, it } from "vitest";
import { executarModoConsultor } from "@/modules/eduprice/application/consultant-mode.service";
import { encontrarEquilibrio } from "@/modules/eduprice/domain/break-even";
import { analisarVolume } from "@/modules/eduprice/domain/pricing-engine";
import { mockConsultorInput } from "@/modules/eduprice/mock-data";

describe("pricing-engine", () => {
  it("calcula margem positiva com receita suficiente", () => {
    const v = analisarVolume(50000, 50, 1200, 25);
    expect(v.receita).toBe(60000);
    expect(v.lucro).toBe(10000);
  });
});

describe("break-even", () => {
  it("encontra alunos mínimos", () => {
    const eq = encontrarEquilibrio(50000, 1000, 100);
    expect(eq?.alunos).toBe(50);
  });
});

describe("consultant-mode.service", () => {
  it("calcula mensalidade ideal com lucro desejado", () => {
    const r = executarModoConsultor(mockConsultorInput);
    expect(r.mensalidadeIdeal).toBeGreaterThan(0);
    expect(r.mensalidadeIdeal % 50).toBe(0);
    expect(r.lucroProjetado.lucroMensal).toBeGreaterThan(0);
  });

  it("retorna ponto de equilíbrio dentro da capacidade", () => {
    const r = executarModoConsultor(mockConsultorInput);
    expect(r.pontoEquilibrio).not.toBeNull();
    expect(r.pontoEquilibrio!.alunos).toBeLessThanOrEqual(
      mockConsultorInput.capacidadeMaxima,
    );
  });

  it("gera planos recomendados", () => {
    const r = executarModoConsultor(mockConsultorInput);
    expect(r.planosRecomendados.length).toBe(3);
  });

  it("expõe faixa de mensalidade", () => {
    const r = executarModoConsultor(mockConsultorInput);
    expect(r.faixaMensalidade.min).toBeLessThanOrEqual(r.faixaMensalidade.ideal);
  });
});
