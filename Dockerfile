# ---- STAGE 1: Build ----
    FROM node:22.13.1-alpine AS builder
    WORKDIR /app
    
    RUN npm install -g pnpm@8.15.4
    
    COPY package.json pnpm-lock.yaml ./
    RUN pnpm install
    
    COPY . .
    RUN pnpm run build
    
    # ---- STAGE 2: Production ----
    FROM node:22.13.1-alpine
    WORKDIR /app
    
    RUN npm install -g pnpm@8.15.4
    RUN apk add --no-cache openssl
    
    COPY package.json pnpm-lock.yaml ./
    RUN pnpm install --prod
    
    COPY --from=builder /app/dist ./dist
    COPY --from=builder /app/prisma ./prisma
    COPY prisma ./prisma
    
    # ✅ Copiar o client gerado
    COPY --from=builder /app/src/infrastructure/persistence/prisma-client ./src/infrastructure/persistence/prisma-client
    
    RUN npx prisma generate --schema ./prisma/schema.prisma
    
    EXPOSE 3334
    
    CMD ["sh", "-c", "npx prisma migrate deploy --schema ./prisma/schema.prisma && node dist/main.js"]
    