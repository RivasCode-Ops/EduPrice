import type { ConsultorResultado } from "@/core/types";
import { fmtMoeda, fmtPct } from "@/lib/format";

const semaforoClass: Record<string, string> = {
  verde: "border-emerald-300 bg-emerald-50 text-emerald-900",
  amarelo: "border-amber-300 bg-amber-50 text-amber-900",
  vermelho: "border-red-300 bg-red-50 text-red-900",
};

type Props = {
  resultado: ConsultorResultado;
  isPreview?: boolean;
};

export function ConsultorResults({ resultado, isPreview }: Props) {
  const cards = [
    { label: "Mensalidade mínima", value: fmtMoeda(resultado.mensalidadeMinima) },
    { label: "Mensalidade ideal", value: fmtMoeda(resultado.mensalidadeIdeal) },
    {
      label: "Alunos p/ equilíbrio",
      value: resultado.alunosMinimosEquilibrio?.toString() ?? "—",
    },
    {
      label: "Lucro projetado",
      value: `${fmtMoeda(resultado.lucroProjetado.lucroMensal)}/mês`,
    },
    {
      label: "Margem projetada",
      value: fmtPct(resultado.lucroProjetado.margemPct),
    },
    {
      label: "Desconto máximo",
      value: fmtPct(resultado.descontoMaximoPct, 0),
    },
  ];

  return (
    <div className="space-y-4">
      {isPreview && (
        <p className="rounded-lg bg-slate-100 px-3 py-2 text-xs text-slate-600">
          Prévia ao vivo — clique em &quot;Gerar recomendação&quot; para fixar o resultado.
        </p>
      )}

      <div
        className={`rounded-xl border p-4 ${semaforoClass[resultado.semaforoGeral] ?? semaforoClass.amarelo}`}
      >
        <p className="text-xs font-semibold uppercase tracking-wide">Resumo consultor</p>
        <p className="mt-1 text-sm font-medium">{resultado.resumoConsultor}</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {cards.map((c) => (
          <div
            key={c.label}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <p className="text-xs text-slate-500">{c.label}</p>
            <p className="mt-1 text-lg font-bold text-slate-900">{c.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="mb-3 text-sm font-semibold text-slate-800">Planos recomendados</h3>
        <ul className="space-y-3">
          {resultado.planosRecomendados.map((plano) => (
            <li
              key={plano.id}
              className="flex items-start justify-between gap-3 rounded-lg border border-slate-100 p-3"
            >
              <div>
                <p className="font-medium text-slate-900">{plano.nome}</p>
                {plano.detalhe && (
                  <p className="text-xs text-slate-500">{plano.detalhe}</p>
                )}
                <p className="text-xs text-slate-500">{plano.veredito}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{fmtMoeda(plano.preco)}</p>
                <p className="text-xs text-slate-500">
                  {fmtPct(plano.margemPct)} margem
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
