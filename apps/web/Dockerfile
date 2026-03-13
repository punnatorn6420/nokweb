# Development-focused Dockerfile for Nx + Next.js (App Router)
FROM node:22-alpine

WORKDIR /workspace

# Install deps first for better layer caching
COPY package.json package-lock.json nx.json tsconfig.base.json tsconfig.json ./
COPY .eslintrc.json .eslintignore .prettierrc .prettierignore ./

COPY apps/web ./apps/web
COPY libs ./libs

RUN npm ci

EXPOSE 3000

CMD ["npx", "nx", "dev", "web", "--", "--hostname", "0.0.0.0", "--port", "3000"]
