"use client";

import { useMemo, useState } from "react";
import { calcularModoConsultor } from "@/core/engine";
import { mockConsultorInput } from "@/core/mock-data";
import type { ConsultorInput, ConsultorResultado } from "@/core/types";
import { ConsultorForm } from "@/components/consultor/consultor-form";
import { ConsultorResults } from "@/components/consultor/consultor-results";

export default function HomePage() {
  const [input, setInput] = useState<ConsultorInput>(mockConsultorInput);
  const [resultado, setResultado] = useState<ConsultorResultado | null>(null);

  const preview = useMemo(() => calcularModoConsultor(input), [input]);

  function handleSubmit() {
    setResultado(calcularModoConsultor(input));
  }

  function loadMock() {
    setInput(mockConsultorInput);
    setResultado(calcularModoConsultor(mockConsultorInput));
  }

  return (
    <main className="min-h-screen">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand">
              Produto independente
            </p>
            <h1 className="text-2xl font-bold text-slate-900">EduPrice</h1>
            <p className="text-sm text-slate-600">
              Precificação escolar · Modo Consultor
            </p>
          </div>
          <button
            type="button"
            onClick={loadMock}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Carregar mock
          </button>
        </div>
      </header>

      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-8 lg:grid-cols-2">
        <section aria-label="Entrada">
          <h2 className="mb-4 text-lg font-semibold">Modo Consultor</h2>
          <p className="mb-6 text-sm text-slate-600">
            Informe custos, capacidade e lucro desejado. A lógica roda no motor
            isolado (<code className="text-xs">src/core</code>) — sem Picos do
            Saber.
          </p>
          <ConsultorForm
            value={input}
            onChange={setInput}
            onSubmit={handleSubmit}
          />
        </section>

        <section aria-label="Análise e saída">
          <h2 className="mb-4 text-lg font-semibold">Recomendações</h2>
          <ConsultorResults resultado={resultado ?? preview} isPreview={!resultado} />
        </section>
      </div>

      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        EduPrice v0.1 · Módulo desacoplado · Integração futura com Picos do Saber
      </footer>
    </main>
  );
}
