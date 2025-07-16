# Exemplos de Uso - Sistema de Filtros de JobTitleLevel

## Endpoint

```
GET /job-title-levels/filter?filter={JSON_FILTER}&page=1&size=10
```

## Exemplos de Filtros

### 1. Busca por ID Específico
```bash
# Buscar um nível específico por ID
GET /job-title-levels/filter?filter={"id":{"$eq":"123e4567-e89b-12d3-a456-426614174000"}}

# ⚠️ NOTA: Este endpoint substitui o antigo GET /job-title-levels/:id
```

### 2. Busca por Label (Nome do Nível)
```bash
# Buscar níveis que contenham "Júnior" no label
GET /job-title-levels/filter?filter={"label":{"$contains":"Júnior"}}

# Buscar níveis que contenham "Sênior" no label
GET /job-title-levels/filter?filter={"label":{"$contains":"Sênior"}}
```

### 2. Busca por Rank (Hierarquia)
```bash
# Buscar níveis com rank específico
GET /job-title-levels/filter?filter={"rank":{"$eq":1}}

# Buscar níveis com rank mínimo
GET /job-title-levels/filter?filter={"rank":{"$gte":2}}

# Buscar níveis com rank máximo
GET /job-title-levels/filter?filter={"rank":{"$lte":3}}

# Buscar níveis em faixa de rank
GET /job-title-levels/filter?filter={"rank":{"$between":[1,3]}}
```

### 3. Busca por Salário Mínimo
```bash
# Buscar níveis com salário mínimo específico
GET /job-title-levels/filter?filter={"salaryMin":{"$eq":3000.00}}

# Buscar níveis com salário mínimo maior que
GET /job-title-levels/filter?filter={"salaryMin":{"$gt":5000.00}}

# Buscar níveis com salário mínimo maior ou igual
GET /job-title-levels/filter?filter={"salaryMin":{"$gte":4000.00}}
```

### 4. Busca por Salário Máximo
```bash
# Buscar níveis com salário máximo específico
GET /job-title-levels/filter?filter={"salaryMax":{"$eq":8000.00}}

# Buscar níveis com salário máximo menor que
GET /job-title-levels/filter?filter={"salaryMax":{"$lt":10000.00}}

# Buscar níveis com salário máximo menor ou igual
GET /job-title-levels/filter?filter={"salaryMax":{"$lte":12000.00}}
```

### 5. Busca por Faixa Salarial
```bash
# Buscar níveis que se sobreponham a uma faixa salarial
GET /job-title-levels/filter?filter={"$and":[{"salaryMin":{"$lte":8000.00}},{"salaryMax":{"$gte":5000.00}}]}
```

### 6. Busca por Versão de Cargo
```bash
# Buscar níveis de uma versão específica de cargo
GET /job-title-levels/filter?filter={"jobTitleVersionId":{"$eq":"123e4567-e89b-12d3-a456-426614174000"}}

# Buscar níveis de múltiplas versões de cargo
GET /job-title-levels/filter?filter={"jobTitleVersionId":{"$in":["123e4567-e89b-12d3-a456-426614174000","987fcdeb-51a2-43d1-b789-123456789abc"]}}
```

### 7. Busca por Data de Criação
```bash
# Buscar níveis criados entre datas
GET /job-title-levels/filter?filter={"createdAt":{"$between":["2024-01-01","2024-12-31"]}}

# Buscar níveis criados após uma data
GET /job-title-levels/filter?filter={"createdAt":{"$gte":"2024-06-01"}}
```

### 8. Busca por Data de Atualização
```bash
# Buscar níveis atualizados entre datas
GET /job-title-levels/filter?filter={"updatedAt":{"$between":["2024-01-01","2024-12-31"]}}

# Buscar níveis atualizados recentemente
GET /job-title-levels/filter?filter={"updatedAt":{"$gte":"2024-12-01"}}
```

### 9. Busca por Níveis com Salário Definido
```bash
# Buscar níveis que tenham salário mínimo definido
GET /job-title-levels/filter?filter={"salaryMin":{"$null":false}}

# Buscar níveis que tenham salário máximo definido
GET /job-title-levels/filter?filter={"salaryMax":{"$null":false}}

# Buscar níveis que tenham rank definido
GET /job-title-levels/filter?filter={"rank":{"$null":false}}
```

### 10. Busca por Múltiplos Labels
```bash
# Buscar níveis com labels específicos
GET /job-title-levels/filter?filter={"label":{"$in":["Júnior","Pleno","Sênior"]}}
```

### 11. Múltiplos Filtros (AND)
```bash
# Buscar níveis Júnior com salário mínimo maior que 3000
GET /job-title-levels/filter?filter={"$and":[{"label":{"$contains":"Júnior"}},{"salaryMin":{"$gte":3000.00}}]}

# Buscar níveis Sênior com rank maior que 2
GET /job-title-levels/filter?filter={"$and":[{"label":{"$contains":"Sênior"}},{"rank":{"$gt":2}}]}
```

### 12. Filtros OR
```bash
# Buscar níveis que sejam Júnior OU tenham rank 1
GET /job-title-levels/filter?filter={"$or":[{"label":{"$contains":"Júnior"}},{"rank":{"$eq":1}}]}
```

### 13. Busca de Texto em Múltiplos Campos
```bash
# Buscar níveis que contenham "dev" no label
GET /job-title-levels/filter?filter={"label":{"$contains":"dev"}}
```

### 14. Combinação Complexa
```bash
# Buscar níveis Sênior OU Pleno com salário mínimo maior que 5000
GET /job-title-levels/filter?filter={"$and":[{"$or":[{"label":{"$contains":"Sênior"}},{"label":{"$contains":"Pleno"}}]},{"salaryMin":{"$gte":5000.00}}]}
```

## Exemplos de Uso com Paginação

### Paginação Básica
```bash
# Primeira página com 10 itens
GET /job-title-levels/filter?page=1&size=10

# Segunda página com 20 itens
GET /job-title-levels/filter?page=2&size=20
```

### Filtro + Paginação
```bash
# Buscar níveis Júnior, segunda página, 15 itens
GET /job-title-levels/filter?filter={"label":{"$contains":"Júnior"}}&page=2&size=15
```

### Filtro por Versão de Cargo + Paginação
```bash
# Buscar níveis de uma versão específica, primeira página, 10 itens
GET /job-title-levels/filter?filter={"jobTitleVersionId":{"$eq":"123e4567-e89b-12d3-a456-426614174000"}}&page=1&size=10

# ⚠️ NOTA: Este endpoint substitui o antigo GET /job-title-levels/job-title-version/:jobTitleVersionId
```

## Resposta de Exemplo

```json
{
  "data": [
    {
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "jobTitleVersionId": "987fcdeb-51a2-43d1-b789-123456789abc",
      "label": "Desenvolvedor Júnior",
      "rank": 1,
      "salaryMin": 3000.00,
      "salaryMax": 5000.00,
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    },
    {
      "id": "456e7890-e89b-12d3-a456-426614174001",
      "jobTitleVersionId": "987fcdeb-51a2-43d1-b789-123456789abc",
      "label": "Desenvolvedor Pleno",
      "rank": 2,
      "salaryMin": 5000.00,
      "salaryMax": 8000.00,
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
    "applied": "{\"label\":{\"$contains\":\"Júnior\"}}",
    "parsed": {
      "label": {
        "$contains": "Júnior"
      }
    }
  }
}
```

## Casos de Uso Comuns

### 1. Buscar Nível por ID
```bash
# ✅ NOVO: Usando o endpoint de filtros
GET /job-title-levels/filter?filter={"id":{"$eq":"LEVEL_ID"}}

# ❌ ANTIGO: Endpoint removido
# GET /job-title-levels/LEVEL_ID
```

### 2. Listar Níveis de uma Versão de Cargo
```bash
# ✅ NOVO: Usando o endpoint de filtros (mais flexível)
GET /job-title-levels/filter?filter={"jobTitleVersionId":{"$eq":"VERSION_ID"}}&page=1&size=50

# ❌ ANTIGO: Endpoint removido
# GET /job-title-levels/job-title-version/VERSION_ID
```

### 2. Buscar Níveis por Faixa Salarial
```bash
GET /job-title-levels/filter?filter={"$and":[{"salaryMin":{"$lte":8000.00}},{"salaryMax":{"$gte":5000.00}}]}
```

### 3. Buscar Níveis por Hierarquia
```bash
GET /job-title-levels/filter?filter={"rank":{"$between":[1,3]}}
```

### 4. Buscar Níveis Criados Recentemente
```bash
GET /job-title-levels/filter?filter={"createdAt":{"$gte":"2024-12-01"}}
```

## Migração de Endpoints

### Endpoints Removidos
- ❌ `GET /job-title-levels/job-title-version/:jobTitleVersionId` - Substituído pelo filtro
- ❌ `GET /job-title-levels/:id` - Substituído pelo filtro

### Endpoints Mantidos
- ✅ `GET /job-title-levels/filter` - Busca avançada com filtros (inclui busca por ID)
- ✅ `POST /job-title-levels` - Criar novo nível
- ✅ `PUT /job-title-levels/:id` - Atualizar nível
- ✅ `DELETE /job-title-levels/:id` - Excluir nível

### Como Migrar
```bash
# ❌ ANTIGO - Busca por versão de cargo
GET /job-title-levels/job-title-version/123e4567-e89b-12d3-a456-426614174000

# ✅ NOVO - Busca por versão de cargo (equivalente)
GET /job-title-levels/filter?filter={"jobTitleVersionId":{"$eq":"123e4567-e89b-12d3-a456-426614174000"}}

# ✅ NOVO - Busca por versão de cargo (com paginação)
GET /job-title-levels/filter?filter={"jobTitleVersionId":{"$eq":"123e4567-e89b-12d3-a456-426614174000"}}&page=1&size=20

# ❌ ANTIGO - Busca por ID específico
GET /job-title-levels/123e4567-e89b-12d3-a456-426614174000

# ✅ NOVO - Busca por ID específico (equivalente)
GET /job-title-levels/filter?filter={"id":{"$eq":"123e4567-e89b-12d3-a456-426614174000"}}
```

## Vantagens do Sistema

1. **Flexibilidade Total**: Um endpoint para todos os tipos de busca
2. **Performance Otimizada**: Queries SQL eficientes via Prisma
3. **Type Safety**: Filtros tipados e validados
4. **Extensibilidade**: Fácil adicionar novos filtros
5. **Gateway-Friendly**: Fácil de consumir por gateways
6. **Repository Pattern**: Respeita a arquitetura limpa
7. **Reutilização**: Classe JobTitleLevelFilters pode ser usada em outros contextos
8. **Paginação Inteligente**: Controle total sobre paginação
9. **Filtros Complexos**: Suporte a operadores lógicos AND/OR
10. **Busca por Salários**: Filtros específicos para faixas salariais
11. **API Simplificada**: Menos endpoints para manter
12. **Consistência**: Padrão uniforme com outros módulos 