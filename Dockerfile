# ---- STAGE 1: Build ----
    FROM node:22.13.1-alpine AS builder
    WORKDIR /app
    
    # Instala pnpm globalmente
    RUN npm install -g pnpm@8.14.0
    
    # Copia apenas os arquivos de dependências
    COPY package.json pnpm-lock.yaml ./
    RUN pnpm install --frozen-lockfile
    
    # Copia o restante do código
    COPY . .
    RUN pnpm run build
    
    # ---- STAGE 2: Production ----
    FROM node:22.13.1-alpine
    WORKDIR /app
    
    # Instala PNPM (ou npm/yarn)
    RUN npm install -g pnpm@8.14.0
    
    # Instala openssl pra evitar avisos do Prisma
    RUN apt-get update && apt-get install -y openssl
    
    # Copia arquivos de dependência para instalar só prod
    COPY package.json pnpm-lock.yaml ./
    RUN pnpm install --prod --frozen-lockfile
    
    # Copia o código compilado da 1ª fase
    COPY --from=builder /app/dist ./dist
    
    # Copia a pasta Prisma da 1ª fase
    COPY --from=builder /app/prisma ./prisma
    
    # Expor a porta
    EXPOSE 3334
    
    # Comando final
    CMD ["node", "dist/main.js"]
    