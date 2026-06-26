# Uso local — EduPrice

**Decisão de produto:** o EduPrice roda **no computador da escola/usuário**, não como serviço online.

Não há dependência de internet após instalação (exceto `npm install` inicial). Integração futura com Picos do Saber também será **embutida no sistema local**.

---

## Requisitos

- Node.js 20+ (testado com 24.x)
- npm

## Instalação (uma vez)

```powershell
cd C:\Users\Nitro\Projects\EduPrice
npm install
```

## Executar

```powershell
npm run dev
```

Abrir no navegador: **http://localhost:3000**

## Build para uso offline (opcional)

Gera versão otimizada; ainda servida localmente:

```powershell
npm run build
npm run start
```

Mesma URL: http://localhost:3000

## Validar cálculos (desenvolvedor)

```powershell
npm run test:run
```

## Demo com gestor de escola

1. Rodar `npm run dev` antes da reunião
2. Compartilhar **tela** (presencial ou videoconferência) — não enviar link público
3. Usar **Carregar mock** ou dados reais da escola
4. Roteiro: `docs/roteiro-validacao-consultor.md`

## Integração futura (Picos do Saber)

O módulo `src/modules/eduprice/` será importado pelo Picos **no mesmo ambiente local** — ver `docs/integration-picos.md`.

Deploy cloud (Vercel etc.) **não faz parte do escopo** atual; ver `docs/DEPLOY-VERCEL.md` apenas como referência histórica.
