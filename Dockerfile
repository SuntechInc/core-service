# ---- STAGE 1: Build ----
    FROM node:22.13.1-alpine AS builder
    WORKDIR /app
    
    RUN npm install -g pnpm@8.14.0
    
    COPY package.json pnpm-lock.yaml ./
    RUN pnpm install --frozen-lockfile
    
    COPY . .
    RUN pnpm run build
    
    # ---- STAGE 2: Production ----
    FROM node:22.13.1-alpine
    WORKDIR /app
    
    RUN npm install -g pnpm@8.14.0
    RUN apk add --no-cache openssl
    
    COPY package.json pnpm-lock.yaml ./
    RUN pnpm install --prod --frozen-lockfile
    
    COPY --from=builder /app/dist ./dist
    COPY --from=builder /app/prisma ./prisma
    
    EXPOSE 3334
    
    # ✅ Aplica as migrations antes de subir a aplicação
    CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main.js"]
    