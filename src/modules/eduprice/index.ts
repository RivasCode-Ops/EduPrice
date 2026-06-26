export type {
  ConsultorInput,
  ConsultorResultado,
  EduPriceApi,
  PlanoPreco,
  PricingInput,
  ModuloId,
} from "./domain/eduprice.types";

export { executarModoConsultor } from "./application/consultant-mode.service";
export { simularCenarios } from "./application/pricing-scenarios.service";
export { gerarRelatorioTexto } from "./application/reports.service";
export { mockConsultorInput, mockConsultorInputPequena } from "./mock-data";
export { EduPriceShell } from "./ui/EduPriceShell";

import { executarModoConsultor } from "./application/consultant-mode.service";
import type { EduPriceApi } from "./domain/eduprice.types";

/** Contrato público — importar em Picos do Saber ou SaaS */
export const EduPrice: EduPriceApi = {
  calcularModoConsultor: executarModoConsultor,
};

/** Alias legado */
export const calcularModoConsultor = executarModoConsultor;
