"use client";

import { useMemo, useState } from "react";
import { executarModoConsultor } from "@/modules/eduprice/application/consultant-mode.service";
import { mockConsultorInput } from "@/modules/eduprice/mock-data";
import type {
  ConsultorInput,
  ConsultorResultado,
} from "@/modules/eduprice/domain/eduprice.types";
import { ConsultantModeForm } from "./ConsultantModeForm";
import { ResultsDashboard } from "./ResultsDashboard";

export function EduPriceShell() {
  const [input, setInput] = useState<ConsultorInput>(mockConsultorInput);
  const [resultado, setResultado] = useState<ConsultorResultado | null>(null);

  const preview = useMemo(() => executarModoConsultor(input), [input]);

  function handleSubmit() {
    setResultado(executarModoConsultor(input));
  }

  function loadMock() {
    setInput(mockConsultorInput);
    setResultado(executarModoConsultor(mockConsultorInput));
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
            Entrada → Análise → Saída. Motor em{" "}
            <code className="text-xs">src/modules/eduprice/domain</code>.
          </p>
          <ConsultantModeForm
            value={input}
            onChange={setInput}
            onSubmit={handleSubmit}
          />
        </section>

        <section aria-label="Análise e saída">
          <h2 className="mb-4 text-lg font-semibold">Recomendações</h2>
          <ResultsDashboard
            resultado={resultado ?? preview}
            isPreview={!resultado}
          />
        </section>
      </div>

      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        EduPrice v0.1 · Spec modular · Integração Picos — Fase 5
      </footer>
    </main>
  );
}
