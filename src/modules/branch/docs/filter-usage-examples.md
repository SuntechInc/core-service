# Exemplos de Uso - Sistema de Filtros de Branch

## Endpoint

```
GET /branches/filter?filter={JSON_FILTER}&page=1&size=10
```

## Exemplos de Filtros

### 1. Busca por Nome
```bash
# Buscar branches que contenham "matriz" no nome
GET /branches/filter?filter={"name":{"$contains":"matriz"}}
```

### 2. Busca por Status
```bash
# Buscar branches ativas
GET /branches/filter?filter={"status":{"$eq":"ACTIVE"}}

# Buscar branches inativas
GET /branches/filter?filter={"status":{"$eq":"INACTIVE"}}
```

### 3. Buscar Sedes
```bash
# Buscar apenas sedes
GET /branches/filter?filter={"isHeadquarter":{"$eq":true}}

# Buscar apenas filiais (não sedes)
GET /branches/filter?filter={"isHeadquarter":{"$eq":false}}
```

### 4. Busca por Empresa
```bash
# Buscar branches de uma empresa específica
GET /branches/filter?filter={"companyId":{"$eq":"123e4567-e89b-12d3-a456-426614174000"}}
```

### 5. Busca por Email
```bash
# Buscar branches que contenham "@gmail.com" no email
GET /branches/filter?filter={"email":{"$contains":"@gmail.com"}}
```

### 6. Busca por Telefone
```bash
# Buscar branches que contenham "11" no telefone
GET /branches/filter?filter={"phone":{"$contains":"11"}}
```

### 7. Busca por Responsável
```bash
# Buscar branches onde o responsável contenha "João"
GET /branches/filter?filter={"responsible":{"$contains":"João"}}
```

### 8. Busca por Sigla
```bash
# Buscar branches que contenham "FC" na sigla
GET /branches/filter?filter={"sigla":{"$contains":"FC"}}
```

### 9. Busca por ID Oficial
```bash
# Buscar branches que contenham "FIL" no ID oficial
GET /branches/filter?filter={"officialId":{"$contains":"FIL"}}
```

### 10. Múltiplos Filtros (AND)
```bash
# Buscar branches ativas que são sedes
GET /branches/filter?filter={"$and":[{"status":{"$eq":"ACTIVE"}},{"isHeadquarter":{"$eq":true}}]}

# Buscar branches ativas de uma empresa específica
GET /branches/filter?filter={"$and":[{"status":{"$eq":"ACTIVE"}},{"companyId":{"$eq":"123e4567-e89b-12d3-a456-426614174000"}}]}
```

### 11. Filtros OR
```bash
# Buscar branches que sejam sedes OU tenham status ACTIVE
GET /branches/filter?filter={"$or":[{"isHeadquarter":{"$eq":true}},{"status":{"$eq":"ACTIVE"}}]}
```

### 12. Busca de Texto em Múltiplos Campos
```bash
# Buscar branches que contenham "centro" no nome OU email OU telefone
GET /branches/filter?filter={"$or":[{"name":{"$contains":"centro"}},{"email":{"$contains":"centro"}},{"phone":{"$contains":"centro"}}]}
```

### 13. Busca por Múltiplos Status
```bash
# Buscar branches com status ACTIVE ou SUSPENDED
GET /branches/filter?filter={"status":{"$in":["ACTIVE","SUSPENDED"]}}
```

### 14. Busca por Múltiplas Empresas
```bash
# Buscar branches de múltiplas empresas
GET /branches/filter?filter={"companyId":{"$in":["123e4567-e89b-12d3-a456-426614174000","987fcdeb-51a2-43d1-b789-123456789abc"]}}
```

### 15. Busca por Data de Criação
```bash
# Buscar branches criadas entre 2024-01-01 e 2024-12-31
GET /branches/filter?filter={"createdAt":{"$between":["2024-01-01","2024-12-31"]}}
```

### 16. Branches com Endereço
```bash
# Buscar branches que tenham endereço
GET /branches/filter?filter={"addressId":{"$null":false}}

# Buscar branches sem endereço
GET /branches/filter?filter={"addressId":{"$null":true}}
```

### 17. Combinação Complexa
```bash
# Buscar branches ativas que são sedes OU tenham "matriz" no nome
GET /branches/filter?filter={"$and":[{"status":{"$eq":"ACTIVE"}},{"$or":[{"isHeadquarter":{"$eq":true}},{"name":{"$contains":"matriz"}}]}]}
```

## Exemplos de Uso com Paginação

### Paginação Básica
```bash
# Primeira página com 10 itens
GET /branches/filter?page=1&size=10

# Segunda página com 20 itens
GET /branches/filter?page=2&size=20
```

### Filtro + Paginação
```bash
# Buscar branches ativas, segunda página, 15 itens
GET /branches/filter?filter={"status":{"$eq":"ACTIVE"}}&page=2&size=15
```

## Resposta de Exemplo

```json
{
  "data": [
    {
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "name": "Matriz Centro",
      "officialId": "MAT001",
      "sigla": "MC",
      "email": "centro@empresa.com",
      "phone": "(11) 1234-5678",
      "responsible": "João Silva",
      "isHeadquarter": true,
      "status": "ACTIVE",
      "companyId": "123e4567-e89b-12d3-a456-426614174000",
      "addressId": "123e4567-e89b-12d3-a456-426614174000",
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
    "applied": "{\"status\":{\"$eq\":\"ACTIVE\"}}",
    "parsed": {
      "status": {
        "$eq": "ACTIVE"
      }
    }
  }
}
```

## Vantagens do Sistema

1. **Flexibilidade Total**: Um endpoint para todos os tipos de busca
2. **Performance Otimizada**: Queries SQL eficientes via Prisma
3. **Type Safety**: Filtros tipados e validados
4. **Extensibilidade**: Fácil adicionar novos filtros
5. **Gateway-Friendly**: Fácil de consumir por gateways
6. **Repository Pattern**: Respeita a arquitetura limpa
7. **Reutilização**: Classe BranchFilters pode ser usada em outros contextos 