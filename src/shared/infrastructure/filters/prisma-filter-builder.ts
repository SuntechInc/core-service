import { Prisma } from '@prisma/client';

export type LogicalOperator = '$or' | '$and' | '$not';

export type Operator =
  | '$eq'
  | '$ne'
  | '$gt'
  | '$gte'
  | '$lt'
  | '$lte'
  | '$in'
  | '$nin'
  | '$contains'
  | '$startsWith'
  | '$endsWith'
  | '$null'
  | '$between'
  | '$mode';

type Primitive = string | number | boolean | null;

export type Condition = {
  [field: string]: { [key in Operator]?: Primitive | Primitive[] } | Primitive;
};

export interface LogicalFilter {
  $or?: Filter[];
  $and?: Filter[];
  $not?: Filter;
}

/**
 * O `filter` pode incluir operadores lógicos (`$or`, `$and`, `$not`) bem como operadores
 * de comparação específicos de campo (ex: `$eq`, `$ne`, `$in`, `$contains`, etc.).
 *
 * ### Operadores Lógicos Suportados:
 * - `$or`: Combina múltiplas condições onde qualquer uma pode ser verdadeira
 * - `$and`: Combina múltiplas condições onde todas devem ser verdadeiras
 * - `$not`: Nega uma condição ou grupo de condições
 *
 * ### Operadores de Comparação Suportados:
 * - `$eq`: Igual a um valor
 * - `$ne`: Diferente de um valor
 * - `$gt`: Maior que um valor
 * - `$gte`: Maior ou igual a um valor
 * - `$lt`: Menor que um valor
 * - `$lte`: Menor ou igual a um valor
 * - `$in`: Valor deve estar em um array de valores
 * - `$nin`: Valor não deve estar em um array de valores
 * - `$contains`: String contém um padrão (case insensitive)
 * - `$startsWith`: String começa com um prefixo
 * - `$endsWith`: String termina com um sufixo
 * - `$null`: Verifica se o valor é NULL ou NOT NULL
 * - `$between`: Valor deve estar entre dois valores (inclusivo)
 * - `$mode`: Define o modo de busca (insensitive, sensitive)
 *
 * @example
 * // Igualdade básica
 * const filter = { "name": { "$eq": "John" } };
 *
 * // Diferente de
 * const filter = { "age": { "$ne": 30 } };
 *
 * // Maior que
 * const filter = { "age": { "$gt": 25 } };
 *
 * // Menor ou igual a
 * const filter = { "salary": { "$lte": 50000 } };
 *
 * // Em um array
 * const filter = { "status": { "$in": ["active", "pending"] } };
 *
 * // Não em um array
 * const filter = { "role": { "$nin": ["admin", "moderator"] } };
 *
 * // Contém (case insensitive)
 * const filter = { "name": { "$contains": "Smith" } };
 *
 * // Começa com
 * const filter = { "username": { "$startsWith": "admin" } };
 *
 * // Termina com
 * const filter = { "filename": { "$endsWith": ".jpg" } };
 *
 * // Verificação NULL
 * const filter = { "deletedAt": { "$null": true } };  // verifica se `deletedAt` IS NULL
 * const filter = { "deletedAt": { "$null": false } }; // verifica se `deletedAt` IS NOT NULL
 *
 * // Entre dois valores
 * const filter = { "createdAt": { "$between": ["2023-01-01", "2023-12-31"] } };
 *
 * // Operadores Lógicos
 * const filter = {
 *   "$or": [
 *     { "age": { "$lt": 18 } },
 *     { "age": { "$gt": 60 } }
 *   ]
 * };
 *
 * const filter = {
 *   "$and": [
 *     { "status": { "$eq": "active" } },
 *     { "age": { "$gte": 18 } }
 *   ]
 * };
 *
 * const filter = {
 *   "$not": { "status": { "$eq": "inactive" } }
 * };
 */
export type Filter = string | Condition | LogicalFilter;

export interface Item {
  [key: string]: any;
}

/**
 * Construtor de filtros para Prisma que converte filtros flexíveis em objetos Where do Prisma
 */
export class PrismaFilterBuilder {
  /**
   * Converte um filtro flexível em um objeto Where do Prisma
   *
   * @param filter - O filtro a ser convertido
   * @returns Objeto Where do Prisma
   */
  static buildWhere<T = any>(filter: Filter): Prisma.Sql | Prisma.Enumerable<T> | undefined {
    if (!filter) {
        return undefined;
    } 
    
    const parsedFilter = this.parseFilter(filter);
    if (!parsedFilter) {
        return undefined;
    }
    
    return this.buildWhereFromFilter(parsedFilter);
  }

  /**
   * Converte um filtro em string JSON para objeto Where do Prisma
   *
   * @param filterString - String JSON do filtro
   * @returns Objeto Where do Prisma
   */
  static buildWhereFromString<T = any>(filterString: string): Prisma.Sql | Prisma.Enumerable<T> | undefined {
    try {
      const filter = JSON.parse(filterString);
      return this.buildWhere(filter);
    } catch (error) {
      console.error('Erro ao fazer parse do filtro:', error);
      return undefined;
    }
  }

  private static parseFilter(filter: Filter): Filter | null {
    if (!filter) {
        return null;
    } 
    if (typeof filter === 'string') {
      try {
        filter = JSON.parse(filter);
      } catch {
        return null;
      }
    }
    return filter;
  }

  private static buildWhereFromFilter(filter: Filter): any {
    if (typeof filter === 'string') {
      return this.parseFilter(filter);
    }

    if (this.isLogicalFilter(filter)) {
      return this.buildLogicalFilter(filter);
    }

    if (this.isCondition(filter)) {
      return this.buildConditionFilter(filter);
    }

    return undefined;
  }

  private static isLogicalFilter(filter: any): filter is LogicalFilter {
    return filter && (filter.$or || filter.$and || filter.$not);
  }

  private static isCondition(filter: any): filter is Condition {
    return filter && typeof filter === 'object' && !this.isLogicalFilter(filter);
  }

  private static buildLogicalFilter(filter: LogicalFilter): any {
    const result: any = {};

    if (filter.$or) {
      result.OR = filter.$or.map(subFilter => this.buildWhereFromFilter(subFilter));
    }

    if (filter.$and) {
      result.AND = filter.$and.map(subFilter => this.buildWhereFromFilter(subFilter));
    }

    if (filter.$not) {
      result.NOT = this.buildWhereFromFilter(filter.$not);
    }

    return result;
  }

  private static buildConditionFilter(filter: Condition): any {
    const result: any = {};

    Object.entries(filter).forEach(([field, value]) => {
      const fieldCondition = this.buildFieldCondition(field, value);
      if (fieldCondition !== undefined) {
        result[field] = fieldCondition;
      }
    });

    return result;
  }

  private static buildFieldCondition(field: string, value: any): any {
    if (!this.isOperatorObject(value)) {
      return { equals: value };
    }

    const result: any = {};

    Object.entries(value).forEach(([operator, operatorValue]) => {
      const condition = this.buildOperatorCondition(operator as Operator, operatorValue);
      if (condition !== undefined) {
        Object.assign(result, condition);
      }
    });

    return Object.keys(result).length > 0 ? result : undefined;
  }

  private static isOperatorObject(value: any): boolean {
    return value && typeof value === 'object' && !Array.isArray(value);
  }

  private static buildOperatorCondition(operator: Operator, value: any): any {
    switch (operator) {
      case '$eq':
        return { equals: value };

      case '$ne':
        return { not: value };

      case '$gt':
        return { gt: value };

      case '$gte':
        return { gte: value };

      case '$lt':
        return { lt: value };

      case '$lte':
        return { lte: value };

      case '$in':
        return { in: Array.isArray(value) ? value : [value] };

      case '$nin':
        return { notIn: Array.isArray(value) ? value : [value] };

      case '$contains':
        return { contains: value, mode: 'insensitive' };

      case '$startsWith':
        return { startsWith: value, mode: 'insensitive' };

      case '$endsWith':
        return { endsWith: value, mode: 'insensitive' };

      case '$null':
        return value === true ? { equals: null } : { not: null };

      case '$between':
        if (!Array.isArray(value) || value.length !== 2) {
          throw new Error('Operator $between expects an array of two elements');
        }
        return {
          gte: value[0],
          lte: value[1]
        };

      case '$mode':
        // Este operador é usado internamente para definir o modo
        return undefined;

      default:
        console.warn(`Operador não suportado: ${operator}`);
        return undefined;
    }
  }

  /**
   * Cria um filtro de busca de texto com modo configurável
   *
   * @param field - Campo a ser buscado
   * @param value - Valor a ser buscado
   * @param mode - Modo de busca ('insensitive' | 'sensitive')
   * @returns Objeto de filtro
   */
  static textSearch(field: string, value: string, mode: 'insensitive' | 'sensitive' = 'insensitive'): any {
    return {
      [field]: {
        contains: value,
        mode: mode
      }
    };
  }

  /**
   * Cria um filtro de busca exata
   *
   * @param field - Campo a ser buscado
   * @param value - Valor exato
   * @returns Objeto de filtro
   */
  static exact(field: string, value: any): any {
    return {
      [field]: {
        equals: value
      }
    };
  }

  /**
   * Cria um filtro de busca em array
   *
   * @param field - Campo a ser buscado
   * @param values - Array de valores
   * @returns Objeto de filtro
   */
  static inArray(field: string, values: any[]): any {
    return {
      [field]: {
        in: values
      }
    };
  }

  /**
   * Cria um filtro de busca de intervalo
   *
   * @param field - Campo a ser buscado
   * @param min - Valor mínimo
   * @param max - Valor máximo
   * @returns Objeto de filtro
   */
  static between(field: string, min: any, max: any): any {
    return {
      [field]: {
        gte: min,
        lte: max
      }
    };
  }

  /**
   * Cria um filtro de busca de data
   *
   * @param field - Campo de data
   * @param startDate - Data inicial
   * @param endDate - Data final
   * @returns Objeto de filtro
   */
  static dateRange(field: string, startDate: Date | string, endDate: Date | string): any {
    return this.between(field, startDate, endDate);
  }
} 