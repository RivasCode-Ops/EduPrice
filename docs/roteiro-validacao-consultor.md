# Roteiro de validação — EduPrice Modo Consultor

**Objetivo:** Confirmar se o Modo Consultor resolve uma dor real antes de investir em v0.2 ou integração Picos.

**Meta:** 2–3 entrevistas · 20–30 min cada · gestor(a) de escola, coordenador(a) ou dono(a)

**Demo:** https://edu-price.vercel.app

---

## Antes da entrevista

- [ ] Abrir EduPrice com **Carregar mock** ou dados próximos da escola da pessoa
- [ ] Ter papel e caneta / notas abertas (não gravar sem consentimento)
- [ ] Explicar: *"Ferramenta em teste, sua opinião muda o produto"*

---

## Abertura (2 min)

> "Estou testando uma calculadora de precificação para escolas — o Modo Consultor. Você informa aluguel, salários, despesas e lucro desejado, e ela sugere mensalidade ideal, ponto de equilíbrio e planos. Quero ver se faz sentido para a sua realidade, não vender nada."

**Pergunta 0:** Qual o perfil da escola? (alunos, cidade, tipo: idiomas, reforço, infantil…)

---

## Bloco 1 — Dor atual (5 min)

| # | Pergunta | Anote |
|---|----------|-------|
| 1 | Como você define a mensalidade hoje? | planilha / feeling / contador / copia concorrente |
| 2 | Com que frequência revisa preços? | |
| 3 | Já teve mês no vermelho sem entender por quê? | sim/não — o quê |
| 4 | Quanto tempo leva para montar um cenário "e se tiver X alunos"? | |

**Sinal verde:** menciona planilha confusa, medo de errar preço, ou não sabe break-even.

---

## Bloco 2 — Teste ao vivo (10 min)

Peça para **pensar em voz alta** enquanto preenche (ou você compartilha tela):

1. Preencher com números **reais ou estimados** da escola dela
2. Clicar **Gerar recomendação**
3. Observar reação nos cards: mensalidade ideal, equilíbrio, planos

| # | Pergunta | Sinal verde |
|---|----------|-------------|
| 5 | A mensalidade ideal está próxima do que você cobra ou considera justo? | "Faz sentido" / "Perto do real" |
| 6 | O número de alunos para equilíbrio bate com sua experiência? | Acena / corrige com lógica |
| 7 | Os planos (mensal, anual à vista) são úteis ou confusos? | Escolhe um plano sem ajuda |
| 8 | O que **faltou** no formulário? (custos, turmas, materiais, impostos…) | Lista concreta de campos |

---

## Bloco 3 — Valor e willingness (5 min)

| # | Pergunta | Anote |
|---|----------|-------|
| 9 | Usaria isso numa reunião com sócio/contador? | sim / talvez / não |
| 10 | Preferiria ferramenta **separada** ou **dentro** de um sistema que já usa? | |
| 11 | Pagaria por isso? Quanto por mês seria justo? | R$ ___ ou "não pagaria" |
| 12 | O que faria você **confiar** na recomendação? | |

**Critério de sucesso:** "sim" ou "talvez" em 9 **e** faixa de preço ou uso claro em 11.

---

## Bloco 4 — Fechamento (3 min)

| # | Pergunta |
|---|----------|
| 13 | Nota de 0 a 10 — quanto isso ajudaria no dia a dia? |
| 14 | Indicaria para outro gestor? |
| 15 | Posso te chamar quando tiver a próxima versão? (contato) |

> "Muito obrigado — vou usar suas respostas para decidir o que construir a seguir."

---

## Planilha de síntese (preencher após cada entrevista)

```
Entrevista #: ___
Data: ___
Perfil: ___
Nota (0-10): ___

Sinais verdes (≥2 necessários):
[ ] Mensalidade ideal faz sentido (P5)
[ ] Planos compreensíveis (P7)
[ ] Usaria com sócio/contador (P9)

Campos faltando (priorizar no produto):
-
-

Citação mais forte:
"..."

Próxima ação sugerida:
[ ] v0.2 cenários  [ ] v0.2 projeção  [ ] mais campos custo  [ ] descartar hipótese
```

---

## Decisão após 2–3 entrevistas

| Resultado | Próximo passo |
|-----------|---------------|
| ≥2 entrevistas com 2+ sinais verdes | Deploy demo (F) + v0.2 cenários nomeados |
| 1 verde, resto morno | Ajustar Modo Consultor (campos faltantes) e repetir 1 entrevista |
| 0 verdes | Pivotar escopo ou pausar integração Picos |

---

## Referências

- Critérios completos: `docs/decisao-criterios.md`
- Produto: `README.md`
- Calc-Roi (contexto Picos): `../Calc-Roi/VALIDACAO.md`
