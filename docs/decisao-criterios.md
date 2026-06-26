# Opinião por critérios — EduPrice

Documento de decisão para comparar caminhos do produto, escolher a **melhor opção agora** e revisitar quando surgirem novas alternativas.

**Última análise:** 2026-06-26 · **Estado do produto:** v0.1 (Modo Consultor funcional, desacoplado)

---

## 1. Objetivo da decisão

Responder: *qual próximo passo maximiza aprendizado + valor com menor risco, mantendo o EduPrice como produto independente até prova de valor?*

---

## 2. Opções em análise

| ID | Opção | Descrição |
|----|-------|-----------|
| **A** | Validação com gestor | 2–3 entrevistas usando Modo Consultor + roteiro do `VALIDACAO.md` (Calc-Roi) |
| **B** | Publicar GitHub | Repo `EduPrice` público/privado, README, issues |
| **C** | v0.2 — Produto | Projeção anual, cenários nomeados, persistência local |
| **D** | v0.4 — Integração Picos | Embed `core` no Calc-Roi / Picos do Saber |
| **E** | Pacote npm `@rivascode/eduprice-core` | Core publicável, versionado, consumível |
| **F** | Landing + demo shareable | URL pública, link de cenário (estilo SaaS calculator) |
| **G** | SaaS v1.0 | Auth, multi-escola, billing |
| **H** | Parar e só usar internamente | Sem investimento até demanda externa clara |

*Novas opções:* adicione uma linha na tabela e rode a matriz (seção 4) de novo.

---

## 3. Critérios e pesos

Escala **1–5** por opção (5 = melhor). Pesos refletem fase **v0.1 → validação de produto**.

| Critério | Peso | O que mede |
|----------|------|------------|
| **Valor percebido pelo usuário** | 20% | Gestor escolar entende e usaria? |
| **Aprendizado / validação de mercado** | 20% | Reduz incerteza sobre pricing real? |
| **Velocidade de entrega** | 15% | Quanto tempo até resultado útil? |
| **Baixo risco técnico** | 15% | Não quebra Picos, MCP, ou stack atual |
| **Reuso e modularidade** | 10% | Mantém core desacoplado? |
| **Esforço invertido** (5 = pouco esforço) | 10% | Horas/dias, não semanas |
| **Potencial SaaS / receita** | 5% | Caminho para monetização |
| **Visibilidade / portfólio** | 5% | GitHub, demo, credibilidade |

**Fórmula:** `Score = Σ (nota × peso)`

---

## 4. Matriz de scores

| Opção | Valor | Aprendizado | Velocidade | Baixo risco | Modular | Esforço↓ | SaaS | Visibilidade | **Total** |
|-------|-------|-------------|------------|-------------|---------|----------|------|--------------|-----------|
| **A** Validação gestor | 5 | 5 | 4 | 5 | 5 | 4 | 3 | 2 | **4,45** |
| **B** GitHub | 2 | 2 | 5 | 5 | 5 | 5 | 2 | 4 | **3,25** |
| **C** v0.2 produto | 4 | 3 | 3 | 4 | 5 | 3 | 4 | 3 | **3,55** |
| **D** Integração Picos | 3 | 2 | 2 | 2 | 3 | 2 | 3 | 2 | **2,40** |
| **E** Pacote npm | 2 | 1 | 2 | 4 | 5 | 2 | 3 | 3 | **2,45** |
| **F** Landing shareable | 4 | 4 | 3 | 4 | 4 | 3 | 5 | 5 | **3,90** |
| **G** SaaS v1.0 | 3 | 2 | 1 | 2 | 3 | 1 | 5 | 4 | **2,35** |
| **H** Só interno | 1 | 1 | 5 | 5 | 5 | 5 | 1 | 1 | **2,65** |

*Notas são opinião técnica estratégica com base no estado atual do EduPrice.*

---

## 5. Análise por opção

### A — Validação com gestor (vencedora isolada)

**Prós:** Confirma se Modo Consultor resolve dor real; barato; não acopla Picos; informa o que buildar em v0.2.  
**Contras:** Depende de agenda humana; não gera artefato de código.  
**Quando escolher:** Sempre que ainda não houve 2+ conversas com persona-alvo.

### F — Landing + demo shareable (2ª melhor)

**Prós:** Escala validação além de entrevistas; link compartilhável; prova produto SaaS.  
**Contras:** Exige deploy (Vercel), polish mínimo, talvez domínio.  
**Quando escolher:** Logo após ou em paralelo a A, se quiser validação quantitativa.

### C — v0.2 (projeção + cenários nomeados)

**Prós:** Diferencial vs planilha; alinhado ao roadmap Picos V10.  
**Contras:** Risco de feature sem uso se validação A ainda não rodou.  
**Quando escolher:** Depois que A (ou F) confirmar que consultor + cenários importam.

### B — Publicar GitHub

**Prós:** Backup, histórico, CI futuro, colaboração.  
**Contras:** Quase zero valor para gestor escolar.  
**Quando escolher:** A qualquer momento (baixo esforço); não bloqueia A.

### D — Integração Picos

**Prós:** Unifica stack Calc-Roi.  
**Contras:** **Prematuro** — viola diretriz “produto independente primeiro”; mistura camadas; re-trabalho se motor mudar após validação.  
**Quando escolher:** Após v0.2 estável + sinal claro de uso no Picos.

### E — Pacote npm

**Prós:** Contrato formal de integração.  
**Contras:** Overhead de publish/versionamento antes de product-market fit.  
**Quando escolher:** Imediatamente antes de D, não antes.

### G — SaaS v1.0

**Prós:** Receita, escala.  
**Contras:** Auth, billing, suporte — meses de escopo; distrai da validação.  
**Quando escolher:** Após F + métricas (ex.: 10+ simulações/semana por usuários externos).

### H — Só interno

**Prós:** Zero distração.  
**Contras:** Opinião de mercado vira achismo; produto estagna.  
**Quando escolher:** Só se EduPrice for ferramenta pessoal sem ambição de produto.

---

## 6. Decisão recomendada

### Melhor opção **agora**

**Combinação A → B → F** (sequência, não exclusão):

```
1. A  Validação (2–3 gestores)     ← prioridade máxima esta semana
2. B  GitHub (repo + push)         ← 30 min, em paralelo
3. F  Deploy demo shareable        ← após ajustes do feedback de A
4. C  v0.2 cenários + projeção     ← só com evidência de A/F
```

**Não fazer agora:** D (integração Picos), E (npm), G (SaaS).

### Por quê

- EduPrice v0.1 já entrega **Modo Consultor** — falta prova de valor, não mais arquitetura.
- Integrar cedo **aumenta custo de mudança** sem reduzir incerteza de mercado.
- Landing shareable multiplica validação **sem** acoplar ao monolito Calc-Roi.
- GitHub é higiene, não estratégia — mas custa pouco e protege o trabalho.

---

## 7. Como decidir opções **novas**

Para qualquer opção X que surgir, responda:

1. **Reduz incerteza do usuário?** (sim → +2 pontos mental)
2. **Mantém `src/core` isolado?** (não → adiar se integração)
3. **Entrega valor em ≤ 1 semana?** (não → dividir em fase menor)
4. **Depende de Picos/Supabase/auth?** (sim → adiar até v0.3+)
5. **É reversível?** (não → exigir validação A antes)

**Regra de ouro:**  
> *Se a opção adiciona código no Picos antes de 2 validações externas do Modo Consultor, rebaixe a prioridade.*

---

## 8. Roteiro mínimo de validação (Opção A)

Adaptado do Calc-Roi `VALIDACAO.md`:

| # | Pergunta | Sinal verde |
|---|----------|-------------|
| 1 | A mensalidade ideal faz sentido vs. mercado local? | “Usaria na reunião com sócio” |
| 2 | Faltou algum custo na entrada? | Lista clara de campos extras |
| 3 | Planos recomendados são compreensíveis? | Escolhe um plano sem ajuda |
| 4 | Pagaria por isso standalone? | Sim / quanto (faixa) |
| 5 | Preferiria dentro do Picos ou app separado? | Informa D vs F |

**Critério de sucesso A:** ≥ 2 de 3 entrevistas com sinal verde em 1, 3 e 4.

---

## 9. Revisão deste documento

| Gatilho | Ação |
|---------|------|
| Nova opção proposta | Adicionar na tabela §2, pontuar §4, comparar com §6 |
| Validação A concluída | Atualizar §6 — provavelmente priorizar C ou F |
| 10+ usuários externos na demo | Reavaliar G (SaaS) |
| Picos pedir embed formalmente | Reavaliar D + E |

---

## 10. Resumo executivo (1 frase)

**Valide o Modo Consultor com gestores reais, publique o repo e coloque uma demo shareable no ar — só então invista em v0.2 ou integração com Picos.**
