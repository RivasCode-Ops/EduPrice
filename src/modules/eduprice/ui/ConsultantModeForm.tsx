import type { ConsultorInput } from "@/modules/eduprice/domain/eduprice.types";

const fields: Array<{
  key: keyof ConsultorInput;
  label: string;
  hint?: string;
  step?: string;
}> = [
  { key: "aluguel", label: "Aluguel (R$/mês)" },
  { key: "salarios", label: "Salários / folha (R$/mês)" },
  { key: "despesasFixas", label: "Despesas fixas (R$/mês)", hint: "Energia, internet, contador, etc." },
  { key: "capacidadeMaxima", label: "Capacidade máxima (alunos)", step: "1" },
  { key: "alunosAtuais", label: "Alunos de referência", step: "1" },
  { key: "lucroDesejadoMensal", label: "Lucro desejado (R$/mês)" },
  { key: "margemAlvoPct", label: "Margem alvo (%)", step: "0.1" },
  { key: "descontoMaximoPermitidoPct", label: "Desconto máximo permitido (%)", step: "0.1" },
];

type Props = {
  value: ConsultorInput;
  onChange: (next: ConsultorInput) => void;
  onSubmit: () => void;
};

export function ConsultantModeForm({ value, onChange, onSubmit }: Props) {
  return (
    <form
      className="space-y-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {fields.map(({ key, label, hint, step }) => (
        <label key={key} className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">{label}</span>
          {hint && <span className="mb-1 block text-xs text-slate-500">{hint}</span>}
          <input
            type="number"
            min={0}
            step={step ?? "100"}
            value={value[key] ?? 0}
            onChange={(e) =>
              onChange({ ...value, [key]: Number(e.target.value) || 0 })
            }
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </label>
      ))}
      <button
        type="submit"
        className="w-full rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
      >
        Gerar recomendação
      </button>
    </form>
  );
}

/** @deprecated use ConsultantModeForm */
export const ConsultorForm = ConsultantModeForm;
