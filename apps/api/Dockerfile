# Development-focused Dockerfile for Nx + NestJS
FROM node:22-alpine

WORKDIR /workspace

# Install deps first for better layer caching
COPY package.json package-lock.json nx.json tsconfig.base.json tsconfig.json ./
COPY .eslintrc.json .eslintignore .prettierrc .prettierignore ./

COPY apps/api ./apps/api
COPY libs ./libs

RUN npm ci

EXPOSE 3333

# Nest listens on PORT (see apps/api/src/main.ts)
ENV PORT=3333

CMD ["npx", "nx", "serve", "api"]
