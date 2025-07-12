/**
 * Utilitário para trabalhar com enums de forma type-safe
 */
export class EnumUtils {
  /**
   * Extrai os valores de um enum como um objeto
   * @param enumObj - O enum do qual extrair os valores
   * @returns Objeto com chave e valor iguais aos do enum
   */
  static getEnumValues<T extends { [key: string]: string }>(enumObj: T): { [K in keyof T]: T[K] } {
    const result: any = {};
    
    Object.keys(enumObj).forEach(key => {
      if (isNaN(Number(key))) { // Ignora chaves numéricas (índices)
        result[key] = enumObj[key];
      }
    });
    
    return result;
  }

  /**
   * Cria um mapeamento de string para valor do enum
   * @param enumObj - O enum do qual criar o mapeamento
   * @returns Objeto que mapeia strings para valores do enum
   */
  static createEnumMap<T extends { [key: string]: string }>(enumObj: T): { [key: string]: string } {
    const result: { [key: string]: string } = {};
    
    Object.keys(enumObj).forEach(key => {
      if (isNaN(Number(key))) { // Ignora chaves numéricas (índices)
        result[key] = enumObj[key];
      }
    });
    
    return result;
  }
} 