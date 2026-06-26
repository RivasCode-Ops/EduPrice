/** Contratos públicos do EduPrice — consumíveis por integrações futuras (ex.: Picos do Saber) */

export type Semaforo = "verde" | "amarelo" | "vermelho";

/** Entrada do Modo Consultor */
export interface ConsultorInput {
  aluguel: number;
  salarios: number;
  despesasFixas: number;
  capacidadeMaxima: number;
  alunosAtuais: number;
  lucroDesejadoMensal: number;
  margemAlvoPct: number;
  descontoMaximoPermitidoPct: number;
}

export interface PlanoPreco {
  id: string;
  nome: string;
  preco: number;
  precoMensalEquivalente: number;
  margemPct: number;
  semaforo: Semaforo;
  veredito: string;
  detalhe?: string;
}

export interface ConsultorResultado {
  custosFixosMensais: number;
  custoPorAluno: number;
  mensalidadeMinima: number;
  mensalidadeIdeal: number;
  alunosMinimosEquilibrio: number | null;
  pontoEquilibrio: {
    alunos: number;
    mensalidade: number;
    lucroMensal: number;
  } | null;
  lucroProjetado: {
    alunos: number;
    receita: number;
    lucroMensal: number;
    margemPct: number;
  };
  descontoMaximoPct: number;
  planosRecomendados: PlanoPreco[];
  semaforoGeral: Semaforo;
  resumoConsultor: string;
}

/** API interna para embed futuro */
export interface EduPriceApi {
  calcularModoConsultor(input: ConsultorInput): ConsultorResultado;
}

export type ModuloFuturo =
  | "precificacao"
  | "mensalidades"
  | "custos"
  | "lucro"
  | "equilibrio"
  | "capacidade"
  | "projecao-anual"
  | "comparativo-planos"
  | "relatorios"
  | "configuracoes";
