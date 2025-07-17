# Exemplos de Uso - Sistema de Filtros de JobTitle

## Endpoint

```
GET /job-titles/filter?filter={JSON_FILTER}&page=1&size=10
```

## Exemplos de Filtros

### 1. Busca por ID Específico
```bash
# Buscar um cargo específico por ID
GET /job-titles/filter?filter={"id":{"$eq":"123e4567-e89b-12d3-a456-426614174000"}}

# ⚠️ NOTA: Este endpoint substitui o antigo GET /job-titles/:id
```

### 2. Busca por Nome do Cargo
```bash
# Buscar cargos que contenham "Desenvolvedor" no nome
GET /job-titles/filter?filter={"name":{"$contains":"Desenvolvedor"}}

# Buscar cargos que contenham "Analista" no nome
GET /job-titles/filter?filter={"name":{"$contains":"Analista"}}
```

### 3. Busca por Código do Cargo
```bash
# Buscar cargos que contenham "DEV" no código
GET /job-titles/filter?filter={"code":{"$contains":"DEV"}}

# Buscar cargos que contenham "ANAL" no código
GET /job-titles/filter?filter={"code":{"$contains":"ANAL"}}
```

### 4. Busca por Empresa
```bash
# Buscar cargos de uma empresa específica
GET /job-titles/filter?filter={"companyId":{"$eq":"123e4567-e89b-12d3-a456-426614174000"}}

# Buscar cargos de múltiplas empresas
GET /job-titles/filter?filter={"companyId":{"$in":["123e4567-e89b-12d3-a456-426614174000","987fcdeb-51a2-43d1-b789-123456789abc"]}}
```

### 5. Busca por Filial
```bash
# Buscar cargos de uma filial específica
GET /job-titles/filter?filter={"branchId":{"$eq":"123e4567-e89b-12d3-a456-426614174000"}}

# Buscar cargos de múltiplas filiais
GET /job-titles/filter?filter={"branchId":{"$in":["123e4567-e89b-12d3-a456-426614174000","987fcdeb-51a2-43d1-b789-123456789abc"]}}
```

### 6. Busca por Empresa e Filial
```bash
# Buscar cargos de uma empresa e filial específicas
GET /job-titles/filter?filter={"$and":[{"companyId":{"$eq":"123e4567-e89b-12d3-a456-426614174000"}},{"branchId":{"$eq":"987fcdeb-51a2-43d1-b789-123456789abc"}}]}
```

### 7. Busca por Data de Criação
```bash
# Buscar cargos criados entre datas
GET /job-titles/filter?filter={"createdAt":{"$between":["2024-01-01","2024-12-31"]}}

# Buscar cargos criados após uma data
GET /job-titles/filter?filter={"createdAt":{"$gte":"2024-06-01"}}
```

### 8. Busca por Data de Atualização
```bash
# Buscar cargos atualizados entre datas
GET /job-titles/filter?filter={"updatedAt":{"$between":["2024-01-01","2024-12-31"]}}

# Buscar cargos atualizados recentemente
GET /job-titles/filter?filter={"updatedAt":{"$gte":"2024-12-01"}}
```

### 9. Busca por Cargos com Código Definido
```bash
# Buscar cargos que tenham código definido
GET /job-titles/filter?filter={"code":{"$null":false}}

# Buscar cargos sem código
GET /job-titles/filter?filter={"code":{"$null":true}}
```

### 10. Busca por Múltiplos Nomes de Cargos
```bash
# Buscar cargos com nomes específicos
GET /job-titles/filter?filter={"name":{"$in":["Desenvolvedor","Analista","Gerente"]}}
```

### 11. Busca por Múltiplos Códigos de Cargos
```bash
# Buscar cargos com códigos específicos
GET /job-titles/filter?filter={"code":{"$in":["DEV","ANAL","GER"]}}
```

### 12. Múltiplos Filtros (AND)
```bash
# Buscar cargos Desenvolvedor de uma empresa específica
GET /job-titles/filter?filter={"$and":[{"name":{"$contains":"Desenvolvedor"}},{"companyId":{"$eq":"123e4567-e89b-12d3-a456-426614174000"}}]}

# Buscar cargos Analista com código definido
GET /job-titles/filter?filter={"$and":[{"name":{"$contains":"Analista"}},{"code":{"$null":false}}]}
```

### 13. Filtros OR
```bash
# Buscar cargos que sejam Desenvolvedor OU tenham código "DEV"
GET /job-titles/filter?filter={"$or":[{"name":{"$contains":"Desenvolvedor"}},{"code":{"$contains":"DEV"}}]}
```

### 14. Busca de Texto em Múltiplos Campos
```bash
# Buscar cargos que contenham "dev" no nome OU código
GET /job-titles/filter?filter={"$or":[{"name":{"$contains":"dev"}},{"code":{"$contains":"dev"}}]}
```

### 15. Combinação Complexa
```bash
# Buscar cargos Desenvolvedor OU Analista de uma empresa específica
GET /job-titles/filter?filter={"$and":[{"$or":[{"name":{"$contains":"Desenvolvedor"}},{"name":{"$contains":"Analista"}}]},{"companyId":{"$eq":"123e4567-e89b-12d3-a456-426614174000"}}]}
```

## Exemplos de Uso com Paginação

### Paginação Básica
```bash
# Primeira página com 10 itens
GET /job-titles/filter?page=1&size=10

# Segunda página com 20 itens
GET /job-titles/filter?page=2&size=20
```

### Filtro + Paginação
```bash
# Buscar cargos Desenvolvedor, segunda página, 15 itens
GET /job-titles/filter?filter={"name":{"$contains":"Desenvolvedor"}}&page=2&size=15
```

### Filtro por Empresa + Paginação
```bash
# Buscar cargos de uma empresa específica, primeira página, 10 itens
GET /job-titles/filter?filter={"companyId":{"$eq":"123e4567-e89b-12d3-a456-426614174000"}}&page=1&size=10
```

## Resposta de Exemplo

```json
{
  "data": [
    {
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "companyId": "987fcdeb-51a2-43d1-b789-123456789abc",
      "name": "Desenvolvedor Full Stack",
      "code": "DEV-FS",
      "branchId": "456e7890-e89b-12d3-a456-426614174001",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    },
    {
      "id": "456e7890-e89b-12d3-a456-426614174001",
      "companyId": "987fcdeb-51a2-43d1-b789-123456789abc",
      "name": "Analista de Sistemas",
      "code": "ANAL-SYS",
      "branchId": "456e7890-e89b-12d3-a456-426614174001",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "size": 10,
    "total": 25,
    "totalPages": 3,
    "hasNext": true,
    "hasPrevious": false
  },
  "filter": {
    "applied": "{\"name\":{\"$contains\":\"Desenvolvedor\"}}",
    "parsed": {
      "name": {
        "$contains": "Desenvolvedor"
      }
    }
  }
}
```

## Casos de Uso Comuns

### 1. Buscar Cargo por ID
```bash
# ✅ NOVO: Usando o endpoint de filtros
GET /job-titles/filter?filter={"id":{"$eq":"JOB_TITLE_ID"}}

# ❌ ANTIGO: Endpoint removido
# GET /job-titles/JOB_TITLE_ID
```

### 2. Listar Cargos de uma Empresa
```bash
# ✅ NOVO: Usando o endpoint de filtros (mais flexível)
GET /job-titles/filter?filter={"companyId":{"$eq":"COMPANY_ID"}}&page=1&size=50

# ❌ ANTIGO: Endpoint removido
# GET /job-titles?companyId=COMPANY_ID
```

### 3. Buscar Cargos por Nome
```bash
# Buscar cargos que contenham "Desenvolvedor" no nome
GET /job-titles/filter?filter={"name":{"$contains":"Desenvolvedor"}}
```

### 4. Buscar Cargos Criados Recentemente
```bash
# Buscar cargos criados nos últimos 30 dias
GET /job-titles/filter?filter={"createdAt":{"$gte":"2024-12-01"}}
```

## Migração de Endpoints

### Endpoints Removidos
- ❌ `GET /job-titles/:id` - Substituído pelo filtro
- ❌ `GET /job-titles` - Substituído pelo filtro

### Endpoints Mantidos
- ✅ `GET /job-titles/filter` - Busca avançada com filtros (inclui busca por ID e listagem)
- ✅ `POST /job-titles` - Criar novo cargo
- ✅ `PUT /job-titles/:id` - Atualizar cargo
- ✅ `DELETE /job-titles/:id` - Excluir cargo

### Como Migrar
```bash
# ❌ ANTIGO - Busca por ID
GET /job-titles/123e4567-e89b-12d3-a456-426614174000

# ✅ NOVO - Busca por ID (equivalente)
GET /job-titles/filter?filter={"id":{"$eq":"123e4567-e89b-12d3-a456-426614174000"}}

# ❌ ANTIGO - Listar todos os cargos
GET /job-titles

# ✅ NOVO - Listar todos os cargos (equivalente)
GET /job-titles/filter

# ✅ NOVO - Listar todos os cargos (com paginação)
GET /job-titles/filter?page=1&size=20
```

## Vantagens do Sistema

1. **Flexibilidade Total**: Um endpoint para todos os tipos de busca
2. **Performance Otimizada**: Queries SQL eficientes via Prisma
3. **Type Safety**: Filtros tipados e validados
4. **Extensibilidade**: Fácil adicionar novos filtros
5. **Gateway-Friendly**: Fácil de consumir por gateways
6. **Repository Pattern**: Respeita a arquitetura limpa
7. **Reutilização**: Classe JobTitleFilters pode ser usada em outros contextos
8. **Paginação Inteligente**: Controle total sobre paginação
9. **Filtros Complexos**: Suporte a operadores lógicos AND/OR
10. **Busca por Empresa/Filial**: Filtros específicos para contexto organizacional
11. **API Simplificada**: Menos endpoints para manter
12. **Consistência**: Padrão uniforme com outros módulos 