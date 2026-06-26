/** Cenários de precificação — Fase 4 (stub) */

import type { ConsultorInput } from "../domain/eduprice.types";
import { executarModoConsultor } from "./consultant-mode.service";

export function simularCenarios(alunos: number[], base: ConsultorInput) {
  return alunos.map((n) => ({
    alunos: n,
    resultado: executarModoConsultor({ ...base, alunosAtuais: n }),
  }));
}
