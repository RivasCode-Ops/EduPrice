# Roadmap SaaS — EduPrice

## v0.1 — Produto independente (atual)

- [x] Motor Modo Consultor isolado
- [x] Tipos e contratos públicos
- [x] UI funcional Next.js
- [x] Testes Vitest
- [x] Mock data
- [x] Doc de integração Picos

## v0.2 — Entrada completa

- [ ] Módulos: custos detalhados, capacidade, turmas/professoras
- [ ] Configurações persistidas (localStorage)
- [ ] Exportar relatório (PDF / copiar)

## v0.3 — Análise avançada

- [ ] Projeção anual (12–24 meses)
- [ ] Cenários nomeados (conservador / realista / meta)
- [ ] Comparativo de planos expandido
- [ ] VPL / TIR (paridade com Calc-Roi ROI)

## v0.4 — Integração Picos

- [ ] Pacote `core` consumível pelo Calc-Roi
- [ ] Embed iframe ou componente React no Picos do Saber
- [ ] Sincronizar campos do Painel Mestre → ConsultorInput

## v1.0 — SaaS

- [ ] Auth (Supabase / Clerk)
- [ ] Multi-escola / multi-usuário
- [ ] Histórico de simulações
- [ ] Compartilhar link de cenário (estilo [calculadoras shareable](https://dev.to/charlie_brinicombe/how-we-built-saas-calculators-in-nextjs-and-kept-them-shareable-66o))
- [ ] Planos pagos (Consultor Pro)

## Métricas de validação

- Tempo até primeira recomendação < 2 min
- Usuário entende mensalidade ideal sem explicação
- 3+ escolas testam Modo Consultor antes da integração Picos
