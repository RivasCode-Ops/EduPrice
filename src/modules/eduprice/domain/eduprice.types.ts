/**
 * Contratos de dados EduPrice — entradas, saídas e cenários.
 * Consumíveis por integrações futuras (Picos do Saber, SaaS).
 */

export type Semaforo = "verde" | "amarelo" | "vermelho";

export type ModeloAtendimento =
  | "individual"
  | "grupo"
  | "pacote"
  | "mensalidade";

export type ModuloId =
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

/** Entradas mínimas — Modo Consultor (Fase 2) */
export interface ConsultorInput {
  aluguel: number;
  salarios: number;
  despesasFixas: number;
  custosVariaveisMedios?: number;
  capacidadeMaxima: number;
  alunosAtuais: number;
  lucroDesejadoMensal: number;
  margemAlvoPct: number;
  descontoMaximoPermitidoPct: number;
  modeloAtendimento?: ModeloAtendimento;
}

/** Entradas completas — evolução Fase 1+ */
export interface PricingInput {
  custosFixosMensais: number;
  custosVariaveisPorAluno: number;
  capacidadeMaxima: number;
  alunosEsperados: number;
  margemAlvoPct: number;
  metaLucroMensal: number;
  descontoMaximoPct: number;
  modelos: ModeloAtendimento[];
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

export interface VolumeAnalysis {
  receita: number;
  lucro: number;
  margemPct: number;
  custoPorAluno: number;
  mensalidadeMinima: number;
  semaforo: Semaforo;
  veredito: string;
}

export interface BreakEvenResult {
  alunos: number;
  mensalidade: number;
  receitaMinima: number;
  lucroMensal: number;
}

export interface ConsultorResultado {
  custosFixosMensais: number;
  custoPorAluno: number;
  mensalidadeMinima: number;
  mensalidadeIdeal: number;
  faixaMensalidade: { min: number; ideal: number };
  alunosMinimosEquilibrio: number | null;
  pontoEquilibrio: BreakEvenResult | null;
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

export interface EduPriceApi {
  calcularModoConsultor(input: ConsultorInput): ConsultorResultado;
}
