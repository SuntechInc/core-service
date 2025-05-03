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
    
    # ✅ Copia o schema.prisma explicitamente (garantia extra)
    COPY prisma ./prisma
    
    EXPOSE 3334
    
    CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main.js"]
    