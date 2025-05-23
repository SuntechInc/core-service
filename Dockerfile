# ---- STAGE 0: Dependências de sistema ----
    FROM node:22-alpine AS base
    WORKDIR /app
    # (se precisar de libs nativas, instale aqui)
    RUN apk add --no-cache libc6-compat openssl
    
    # ---- STAGE 1: Instalação de dependências + geração do Prisma Client ----
    FROM base AS deps
    # fixa versão do pnpm
    RUN npm install -g pnpm@10.10.0
    COPY package.json pnpm-lock.yaml ./
    # instala dependências (inclui o client do Prisma gerado)
    RUN pnpm install --frozen-lockfile
    
    # copia schema e migrations para gerar client sem faltar arquivos
    COPY prisma/schema.prisma ./prisma/schema.prisma
    COPY prisma/migrations ./prisma/migrations
    # gera o Prisma Client
    RUN npx prisma generate --schema=./prisma/schema.prisma
    
    # ---- STAGE 2: Build da aplicação ----
    FROM deps AS builder
    # copia o restante do código (inclui prisma/migrations do contexto de build)
    COPY . .
    # compila o TypeScript
    RUN pnpm run build
    
    # ---- STAGE 3: Imagem final de produção ----
    FROM node:22-alpine AS runner
    WORKDIR /app
    ENV NODE_ENV=production
    # instala apenas deps de produção (inclui o Prisma Client)
    COPY package.json pnpm-lock.yaml ./
    RUN npm install -g pnpm@10.10.0 \
        && pnpm install --prod --frozen-lockfile
    
    # copia artefatos do build
    COPY --from=builder /app/dist ./dist
    # copia prisma/schema e migrations
    COPY --from=deps /app/prisma ./prisma
    # copia node_modules com o Prisma Client e outras deps
    COPY --from=deps /app/node_modules ./node_modules
    
    EXPOSE 3334
    
    # comando de startup: aplica migrations e inicia o serviço
    CMD ["sh", "-c", "npx prisma migrate deploy --schema=./prisma/schema.prisma && node dist/main.js"]