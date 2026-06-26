import type { ConsultorInput } from "./domain/eduprice.types";

export const mockConsultorInput: ConsultorInput = {
  aluguel: 8500,
  salarios: 42000,
  despesasFixas: 6800,
  capacidadeMaxima: 120,
  alunosAtuais: 65,
  lucroDesejadoMensal: 15000,
  margemAlvoPct: 25,
  descontoMaximoPermitidoPct: 10,
};

export const mockConsultorInputPequena: ConsultorInput = {
  aluguel: 3500,
  salarios: 18000,
  despesasFixas: 2500,
  capacidadeMaxima: 40,
  alunosAtuais: 28,
  lucroDesejadoMensal: 5000,
  margemAlvoPct: 20,
  descontoMaximoPermitidoPct: 8,
};
