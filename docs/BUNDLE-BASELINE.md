# Bundle baseline — EduPrice v0.1

Gerado em: 2026-06-26 · Next.js 15.5.19 · `npm run analyze`

## Resumo (rota `/`)

| Métrica | Valor |
|---------|-------|
| First Load JS | **105 kB** |
| Página (app code) | **3 kB** |
| Shared chunks | **102 kB** |

## Top chunks (client)

| Chunk | Parsed | Gzip | Origem |
|-------|--------|------|--------|
| `framework-*.js` | ~185 kB | ~58 kB | React + React DOM |
| `255-*.js` | ~169 kB | ~45 kB | Next.js App Router runtime |
| `4bd1b696-*.js` | ~169 kB | ~53 kB | React DOM client (compiled) |
| `main-*.js` | ~119 kB | ~34 kB | Next.js client bootstrap |
| **`app/page-*.js`** | **~8 kB** | **~3 kB** | **EduPrice (UI + domain importado)** |

## Leitura

- O **105 kB de First Load JS** é majoritariamente **framework Next.js + React**, não código EduPrice.
- O módulo EduPrice na rota principal pesa **~8 kB parsed / ~3 kB gzip** — leve para validação.
- Não há otimização urgente antes do preview; qualquer redução futura viria de lazy-load de UI secundária (relatórios, projeção).

## Como regenerar

```powershell
npm run analyze
```

Relatórios HTML em `.next/analyze/`:

- `client.html` — bundle do browser (principal)
- `nodejs.html` — server
- `edge.html` — edge runtime

Abrir `client.html` no navegador para inspeção visual.
