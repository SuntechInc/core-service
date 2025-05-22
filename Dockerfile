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
    RUN pnpm install --frozen-lockfile
    
    # copia apenas o schema e gera o client
    COPY prisma/schema.prisma ./prisma/
    COPY prisma/models ./prisma/models/
    RUN cat ./prisma/schema.prisma > ./prisma/schema.prisma.tmp && \
        echo "" >> ./prisma/schema.prisma.tmp && \
        cat ./prisma/models/address.prisma >> ./prisma/schema.prisma.tmp && \
        echo "" >> ./prisma/schema.prisma.tmp && \
        cat ./prisma/models/company.prisma >> ./prisma/schema.prisma.tmp && \
        echo "" >> ./prisma/schema.prisma.tmp && \
        cat ./prisma/models/branch.prisma >> ./prisma/schema.prisma.tmp && \
        echo "" >> ./prisma/schema.prisma.tmp && \
        cat ./prisma/models/department.prisma >> ./prisma/schema.prisma.tmp && \
        echo "" >> ./prisma/schema.prisma.tmp && \
        cat ./prisma/models/job.prisma >> ./prisma/schema.prisma.tmp && \
        echo "" >> ./prisma/schema.prisma.tmp && \
        cat ./prisma/models/employee.prisma >> ./prisma/schema.prisma.tmp && \
        mv ./prisma/schema.prisma.tmp ./prisma/schema.prisma && \
        npx prisma generate --schema=./prisma/schema.prisma
    
    # ---- STAGE 2: Build da aplicação ----
    FROM deps AS builder
    # copia resto do código
    COPY . .
    # builda o TS
    RUN pnpm run build
    
    # ---- STAGE 3: Imagem final de produção ----
    FROM node:22-alpine AS runner
    WORKDIR /app
    ENV NODE_ENV=production
    # instala apenas deps de produção
    COPY package.json pnpm-lock.yaml ./
    RUN npm install -g pnpm@10.10.0 \
     && pnpm install --prod --frozen-lockfile
    
    # copia artefatos do build
    COPY --from=builder /app/dist ./dist
    # copia prisma/schema e client gerado
    COPY --from=deps /app/prisma ./prisma
    RUN mkdir -p ./node_modules/.prisma
    COPY --from=deps /app/node_modules/@prisma/client ./node_modules/@prisma/client
    
    EXPOSE 3334
    
    CMD ["sh", "-c", "npx prisma migrate deploy --schema=./prisma/schema.prisma && node dist/main.js"]
    