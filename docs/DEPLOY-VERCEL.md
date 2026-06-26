# Deploy preview — Vercel

Repositório: https://github.com/RivasCode-Ops/EduPrice

## Opção A — Dashboard (recomendada, ~2 min)

1. Acesse https://vercel.com/new
2. **Import Git Repository** → `RivasCode-Ops/EduPrice`
3. Framework: **Next.js** (detectado automaticamente)
4. Root Directory: `.` · Build: `npm run build` · Output: default
5. **Deploy**

Após o deploy, copie a URL (ex.: `https://eduprice-xxx.vercel.app`) para `docs/roteiro-validacao-consultor.md`.

## Opção B — CLI

```powershell
cd C:\Users\Nitro\Projects\EduPrice
npx vercel login
npx vercel --yes          # preview
npx vercel --prod --yes   # produção (opcional)
```

Na primeira execução, confirme:

- Link to existing project? **N** (criar novo)
- Project name: `eduprice`
- Directory: `./`

## Variáveis de ambiente

Nenhuma obrigatória na v0.1 (sem banco, sem auth).

## Pós-deploy

- [ ] Testar Modo Consultor + **Carregar mock**
- [ ] Atualizar URL no roteiro de validação
- [ ] Compartilhar link nas entrevistas (3–5 gestores)
