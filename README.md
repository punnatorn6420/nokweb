# Nx Monorepo: Next.js (App Router) + NestJS Backend

## Project Structure

```
apps/
  web/   # Next.js frontend (App Router)
  api/   # NestJS backend
libs/
  shared-dtos/ # Shared DTOs/interfaces for end-to-end type safety
```

## Setup

1. **Install dependencies**

```bash
npm ci
```

2. **Build all projects**

```bash
npx nx run-many -t build
```

3. **Lint all projects**

```bash
npx nx run-many -t lint
```

## Start Development

### Option 1: Local (host machine)

- **Frontend (Next.js):**

```bash
npx nx dev web
```

- Open: [http://localhost:3000](http://localhost:3000)

- **Backend (NestJS):**

```bash
npx nx serve api
```

- Open: [http://localhost:3333/api](http://localhost:3333/api)

### Option 2: Docker Compose (live reload)

```bash
docker compose up --build
```

- Web: [http://localhost:3000](http://localhost:3000)
- API: [http://localhost:3333/api](http://localhost:3333/api)

## Start Implementing

### Frontend (Next.js)

- Source: `apps/web/src/`
- Entry: `apps/web/src/app/page.tsx`
- Add new pages/components in `src/app/`
- Import shared types from `libs/shared-dtos`

### Backend (NestJS)

- Source: `apps/api/src/`
- Entry: `apps/api/src/main.ts`
- Add new controllers/services in `src/app/`
- Use DTOs from `libs/shared-dtos` for request validation/type safety

## Shared Libraries

- Place shared interfaces, DTOs, and validators in `libs/shared-dtos`
- Both web and api should import types from here for end-to-end type safety

## Module Boundaries

- Frontend and backend **cannot import each other directly**
- All shared code must go through `libs/shared-dtos`
- Enforced by `eslint-plugin-nx` rules

## CI/CD

- GitHub Actions: `.github/workflows/ci.yml` runs affected builds for efficiency

---

> For more Nx commands and docs, see [Nx Documentation](https://nx.dev/getting-started/intro)
