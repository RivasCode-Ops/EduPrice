export type { ConsultorInput, ConsultorResultado, EduPriceApi, PlanoPreco } from "./types";
export { calcularModoConsultor, arredondarMensalidade } from "./engine";
export { mockConsultorInput, mockConsultorInputPequena } from "./mock-data";

import { calcularModoConsultor } from "./engine";
import type { EduPriceApi } from "./types";

/** Ponto de integração futuro — importar `@/core` ou pacote npm */
export const EduPrice: EduPriceApi = {
  calcularModoConsultor,
};
