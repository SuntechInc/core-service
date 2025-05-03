
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Branch
 * 
 */
export type Branch = $Result.DefaultSelection<Prisma.$BranchPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model JobTitle
 * 
 */
export type JobTitle = $Result.DefaultSelection<Prisma.$JobTitlePayload>
/**
 * Model JobTitleVersion
 * 
 */
export type JobTitleVersion = $Result.DefaultSelection<Prisma.$JobTitleVersionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Industry: {
  HEALTHCORE: 'HEALTHCORE',
  AGRIBUSINESS: 'AGRIBUSINESS',
  TRANSPORTATION_MOBILITY: 'TRANSPORTATION_MOBILITY',
  TECHNOLOGY: 'TECHNOLOGY'
};

export type Industry = (typeof Industry)[keyof typeof Industry]


export const Segment: {
  LABORATORY: 'LABORATORY',
  HOSPITAL: 'HOSPITAL',
  MEDICAL_METALLURGY: 'MEDICAL_METALLURGY',
  ANIMAL_HEALTH: 'ANIMAL_HEALTH',
  VEHICLE_INSPECTION: 'VEHICLE_INSPECTION',
  VEHICLE_REGISTRATION: 'VEHICLE_REGISTRATION',
  DRIVING_SCHOOL: 'DRIVING_SCHOOL'
};

export type Segment = (typeof Segment)[keyof typeof Segment]


export const EmploymentType: {
  FULL_TIME: 'FULL_TIME',
  CONTRACTOR: 'CONTRACTOR'
};

export type EmploymentType = (typeof EmploymentType)[keyof typeof EmploymentType]


export const EmployeeStatus: {
  IN_PROCESS: 'IN_PROCESS',
  ACTIVE: 'ACTIVE',
  ON_LEAVE: 'ON_LEAVE',
  SUSPENDED: 'SUSPENDED',
  TERMINATED: 'TERMINATED'
};

export type EmployeeStatus = (typeof EmployeeStatus)[keyof typeof EmployeeStatus]

}

export type Industry = $Enums.Industry

export const Industry: typeof $Enums.Industry

export type Segment = $Enums.Segment

export const Segment: typeof $Enums.Segment

export type EmploymentType = $Enums.EmploymentType

export const EmploymentType: typeof $Enums.EmploymentType

export type EmployeeStatus = $Enums.EmployeeStatus

export const EmployeeStatus: typeof $Enums.EmployeeStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.branch`: Exposes CRUD operations for the **Branch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches
    * const branches = await prisma.branch.findMany()
    * ```
    */
  get branch(): Prisma.BranchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobTitle`: Exposes CRUD operations for the **JobTitle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobTitles
    * const jobTitles = await prisma.jobTitle.findMany()
    * ```
    */
  get jobTitle(): Prisma.JobTitleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobTitleVersion`: Exposes CRUD operations for the **JobTitleVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobTitleVersions
    * const jobTitleVersions = await prisma.jobTitleVersion.findMany()
    * ```
    */
  get jobTitleVersion(): Prisma.JobTitleVersionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Company: 'Company',
    Branch: 'Branch',
    Department: 'Department',
    Employee: 'Employee',
    JobTitle: 'JobTitle',
    JobTitleVersion: 'JobTitleVersion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "company" | "branch" | "department" | "employee" | "jobTitle" | "jobTitleVersion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Branch: {
        payload: Prisma.$BranchPayload<ExtArgs>
        fields: Prisma.BranchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BranchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BranchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findFirst: {
            args: Prisma.BranchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BranchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findMany: {
            args: Prisma.BranchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          create: {
            args: Prisma.BranchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          createMany: {
            args: Prisma.BranchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BranchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          delete: {
            args: Prisma.BranchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          update: {
            args: Prisma.BranchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          deleteMany: {
            args: Prisma.BranchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BranchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BranchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          upsert: {
            args: Prisma.BranchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          aggregate: {
            args: Prisma.BranchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBranch>
          }
          groupBy: {
            args: Prisma.BranchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BranchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BranchCountArgs<ExtArgs>
            result: $Utils.Optional<BranchCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      JobTitle: {
        payload: Prisma.$JobTitlePayload<ExtArgs>
        fields: Prisma.JobTitleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobTitleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobTitleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitlePayload>
          }
          findFirst: {
            args: Prisma.JobTitleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobTitleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitlePayload>
          }
          findMany: {
            args: Prisma.JobTitleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitlePayload>[]
          }
          create: {
            args: Prisma.JobTitleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitlePayload>
          }
          createMany: {
            args: Prisma.JobTitleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobTitleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitlePayload>[]
          }
          delete: {
            args: Prisma.JobTitleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitlePayload>
          }
          update: {
            args: Prisma.JobTitleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitlePayload>
          }
          deleteMany: {
            args: Prisma.JobTitleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobTitleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobTitleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitlePayload>[]
          }
          upsert: {
            args: Prisma.JobTitleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitlePayload>
          }
          aggregate: {
            args: Prisma.JobTitleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobTitle>
          }
          groupBy: {
            args: Prisma.JobTitleGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobTitleGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobTitleCountArgs<ExtArgs>
            result: $Utils.Optional<JobTitleCountAggregateOutputType> | number
          }
        }
      }
      JobTitleVersion: {
        payload: Prisma.$JobTitleVersionPayload<ExtArgs>
        fields: Prisma.JobTitleVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobTitleVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitleVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobTitleVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitleVersionPayload>
          }
          findFirst: {
            args: Prisma.JobTitleVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitleVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobTitleVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitleVersionPayload>
          }
          findMany: {
            args: Prisma.JobTitleVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitleVersionPayload>[]
          }
          create: {
            args: Prisma.JobTitleVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitleVersionPayload>
          }
          createMany: {
            args: Prisma.JobTitleVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobTitleVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitleVersionPayload>[]
          }
          delete: {
            args: Prisma.JobTitleVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitleVersionPayload>
          }
          update: {
            args: Prisma.JobTitleVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitleVersionPayload>
          }
          deleteMany: {
            args: Prisma.JobTitleVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobTitleVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobTitleVersionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitleVersionPayload>[]
          }
          upsert: {
            args: Prisma.JobTitleVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobTitleVersionPayload>
          }
          aggregate: {
            args: Prisma.JobTitleVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobTitleVersion>
          }
          groupBy: {
            args: Prisma.JobTitleVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobTitleVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobTitleVersionCountArgs<ExtArgs>
            result: $Utils.Optional<JobTitleVersionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    company?: CompanyOmit
    branch?: BranchOmit
    department?: DepartmentOmit
    employee?: EmployeeOmit
    jobTitle?: JobTitleOmit
    jobTitleVersion?: JobTitleVersionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    branches: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branches?: boolean | CompanyCountOutputTypeCountBranchesArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountBranchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
  }


  /**
   * Count Type BranchCountOutputType
   */

  export type BranchCountOutputType = {
    departments: number
    Employee: number
    JobTitle: number
  }

  export type BranchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departments?: boolean | BranchCountOutputTypeCountDepartmentsArgs
    Employee?: boolean | BranchCountOutputTypeCountEmployeeArgs
    JobTitle?: boolean | BranchCountOutputTypeCountJobTitleArgs
  }

  // Custom InputTypes
  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchCountOutputType
     */
    select?: BranchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountJobTitleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobTitleWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    Employee: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employee?: boolean | DepartmentCountOutputTypeCountEmployeeArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Count Type JobTitleCountOutputType
   */

  export type JobTitleCountOutputType = {
    versions: number
  }

  export type JobTitleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    versions?: boolean | JobTitleCountOutputTypeCountVersionsArgs
  }

  // Custom InputTypes
  /**
   * JobTitleCountOutputType without action
   */
  export type JobTitleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitleCountOutputType
     */
    select?: JobTitleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobTitleCountOutputType without action
   */
  export type JobTitleCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobTitleVersionWhereInput
  }


  /**
   * Count Type JobTitleVersionCountOutputType
   */

  export type JobTitleVersionCountOutputType = {
    Employee: number
  }

  export type JobTitleVersionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employee?: boolean | JobTitleVersionCountOutputTypeCountEmployeeArgs
  }

  // Custom InputTypes
  /**
   * JobTitleVersionCountOutputType without action
   */
  export type JobTitleVersionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitleVersionCountOutputType
     */
    select?: JobTitleVersionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobTitleVersionCountOutputType without action
   */
  export type JobTitleVersionCountOutputTypeCountEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    tradingName: string | null
    legalName: string | null
    taxId: string | null
    email: string | null
    phone: string | null
    industry: $Enums.Industry | null
    segment: $Enums.Segment | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    tradingName: string | null
    legalName: string | null
    taxId: string | null
    email: string | null
    phone: string | null
    industry: $Enums.Industry | null
    segment: $Enums.Segment | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    tradingName: number
    legalName: number
    taxId: number
    email: number
    phone: number
    industry: number
    segment: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    tradingName?: true
    legalName?: true
    taxId?: true
    email?: true
    phone?: true
    industry?: true
    segment?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    tradingName?: true
    legalName?: true
    taxId?: true
    email?: true
    phone?: true
    industry?: true
    segment?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    tradingName?: true
    legalName?: true
    taxId?: true
    email?: true
    phone?: true
    industry?: true
    segment?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    tradingName: string
    legalName: string
    taxId: string
    email: string
    phone: string | null
    industry: $Enums.Industry
    segment: $Enums.Segment
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradingName?: boolean
    legalName?: boolean
    taxId?: boolean
    email?: boolean
    phone?: boolean
    industry?: boolean
    segment?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branches?: boolean | Company$branchesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradingName?: boolean
    legalName?: boolean
    taxId?: boolean
    email?: boolean
    phone?: boolean
    industry?: boolean
    segment?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradingName?: boolean
    legalName?: boolean
    taxId?: boolean
    email?: boolean
    phone?: boolean
    industry?: boolean
    segment?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    tradingName?: boolean
    legalName?: boolean
    taxId?: boolean
    email?: boolean
    phone?: boolean
    industry?: boolean
    segment?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tradingName" | "legalName" | "taxId" | "email" | "phone" | "industry" | "segment" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branches?: boolean | Company$branchesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      branches: Prisma.$BranchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tradingName: string
      legalName: string
      taxId: string
      email: string
      phone: string | null
      industry: $Enums.Industry
      segment: $Enums.Segment
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branches<T extends Company$branchesArgs<ExtArgs> = {}>(args?: Subset<T, Company$branchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly tradingName: FieldRef<"Company", 'String'>
    readonly legalName: FieldRef<"Company", 'String'>
    readonly taxId: FieldRef<"Company", 'String'>
    readonly email: FieldRef<"Company", 'String'>
    readonly phone: FieldRef<"Company", 'String'>
    readonly industry: FieldRef<"Company", 'Industry'>
    readonly segment: FieldRef<"Company", 'Segment'>
    readonly isActive: FieldRef<"Company", 'Boolean'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.branches
   */
  export type Company$branchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    cursor?: BranchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model Branch
   */

  export type AggregateBranch = {
    _count: BranchCountAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  export type BranchMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    companyId: string | null
  }

  export type BranchMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    companyId: string | null
  }

  export type BranchCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    companyId: number
    _all: number
  }


  export type BranchMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
  }

  export type BranchMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
  }

  export type BranchCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
    _all?: true
  }

  export type BranchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branch to aggregate.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Branches
    **/
    _count?: true | BranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchMaxAggregateInputType
  }

  export type GetBranchAggregateType<T extends BranchAggregateArgs> = {
        [P in keyof T & keyof AggregateBranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranch[P]>
      : GetScalarType<T[P], AggregateBranch[P]>
  }




  export type BranchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithAggregationInput | BranchOrderByWithAggregationInput[]
    by: BranchScalarFieldEnum[] | BranchScalarFieldEnum
    having?: BranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchCountAggregateInputType | true
    _min?: BranchMinAggregateInputType
    _max?: BranchMaxAggregateInputType
  }

  export type BranchGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    companyId: string
    _count: BranchCountAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  type GetBranchGroupByPayload<T extends BranchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchGroupByOutputType[P]>
            : GetScalarType<T[P], BranchGroupByOutputType[P]>
        }
      >
    >


  export type BranchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    departments?: boolean | Branch$departmentsArgs<ExtArgs>
    Employee?: boolean | Branch$EmployeeArgs<ExtArgs>
    JobTitle?: boolean | Branch$JobTitleArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
  }

  export type BranchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "companyId", ExtArgs["result"]["branch"]>
  export type BranchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    departments?: boolean | Branch$departmentsArgs<ExtArgs>
    Employee?: boolean | Branch$EmployeeArgs<ExtArgs>
    JobTitle?: boolean | Branch$JobTitleArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BranchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type BranchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $BranchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Branch"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      departments: Prisma.$DepartmentPayload<ExtArgs>[]
      Employee: Prisma.$EmployeePayload<ExtArgs>[]
      JobTitle: Prisma.$JobTitlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      companyId: string
    }, ExtArgs["result"]["branch"]>
    composites: {}
  }

  type BranchGetPayload<S extends boolean | null | undefined | BranchDefaultArgs> = $Result.GetResult<Prisma.$BranchPayload, S>

  type BranchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BranchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BranchCountAggregateInputType | true
    }

  export interface BranchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Branch'], meta: { name: 'Branch' } }
    /**
     * Find zero or one Branch that matches the filter.
     * @param {BranchFindUniqueArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BranchFindUniqueArgs>(args: SelectSubset<T, BranchFindUniqueArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Branch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BranchFindUniqueOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BranchFindUniqueOrThrowArgs>(args: SelectSubset<T, BranchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BranchFindFirstArgs>(args?: SelectSubset<T, BranchFindFirstArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BranchFindFirstOrThrowArgs>(args?: SelectSubset<T, BranchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches
     * const branches = await prisma.branch.findMany()
     * 
     * // Get first 10 Branches
     * const branches = await prisma.branch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchWithIdOnly = await prisma.branch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BranchFindManyArgs>(args?: SelectSubset<T, BranchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Branch.
     * @param {BranchCreateArgs} args - Arguments to create a Branch.
     * @example
     * // Create one Branch
     * const Branch = await prisma.branch.create({
     *   data: {
     *     // ... data to create a Branch
     *   }
     * })
     * 
     */
    create<T extends BranchCreateArgs>(args: SelectSubset<T, BranchCreateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Branches.
     * @param {BranchCreateManyArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BranchCreateManyArgs>(args?: SelectSubset<T, BranchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Branches and returns the data saved in the database.
     * @param {BranchCreateManyAndReturnArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Branches and only return the `id`
     * const branchWithIdOnly = await prisma.branch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BranchCreateManyAndReturnArgs>(args?: SelectSubset<T, BranchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Branch.
     * @param {BranchDeleteArgs} args - Arguments to delete one Branch.
     * @example
     * // Delete one Branch
     * const Branch = await prisma.branch.delete({
     *   where: {
     *     // ... filter to delete one Branch
     *   }
     * })
     * 
     */
    delete<T extends BranchDeleteArgs>(args: SelectSubset<T, BranchDeleteArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Branch.
     * @param {BranchUpdateArgs} args - Arguments to update one Branch.
     * @example
     * // Update one Branch
     * const branch = await prisma.branch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BranchUpdateArgs>(args: SelectSubset<T, BranchUpdateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Branches.
     * @param {BranchDeleteManyArgs} args - Arguments to filter Branches to delete.
     * @example
     * // Delete a few Branches
     * const { count } = await prisma.branch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BranchDeleteManyArgs>(args?: SelectSubset<T, BranchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BranchUpdateManyArgs>(args: SelectSubset<T, BranchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches and returns the data updated in the database.
     * @param {BranchUpdateManyAndReturnArgs} args - Arguments to update many Branches.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Branches and only return the `id`
     * const branchWithIdOnly = await prisma.branch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BranchUpdateManyAndReturnArgs>(args: SelectSubset<T, BranchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Branch.
     * @param {BranchUpsertArgs} args - Arguments to update or create a Branch.
     * @example
     * // Update or create a Branch
     * const branch = await prisma.branch.upsert({
     *   create: {
     *     // ... data to create a Branch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branch we want to update
     *   }
     * })
     */
    upsert<T extends BranchUpsertArgs>(args: SelectSubset<T, BranchUpsertArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchCountArgs} args - Arguments to filter Branches to count.
     * @example
     * // Count the number of Branches
     * const count = await prisma.branch.count({
     *   where: {
     *     // ... the filter for the Branches we want to count
     *   }
     * })
    **/
    count<T extends BranchCountArgs>(
      args?: Subset<T, BranchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BranchAggregateArgs>(args: Subset<T, BranchAggregateArgs>): Prisma.PrismaPromise<GetBranchAggregateType<T>>

    /**
     * Group by Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchGroupByArgs['orderBy'] }
        : { orderBy?: BranchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Branch model
   */
  readonly fields: BranchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Branch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BranchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    departments<T extends Branch$departmentsArgs<ExtArgs> = {}>(args?: Subset<T, Branch$departmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Employee<T extends Branch$EmployeeArgs<ExtArgs> = {}>(args?: Subset<T, Branch$EmployeeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    JobTitle<T extends Branch$JobTitleArgs<ExtArgs> = {}>(args?: Subset<T, Branch$JobTitleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Branch model
   */
  interface BranchFieldRefs {
    readonly id: FieldRef<"Branch", 'String'>
    readonly name: FieldRef<"Branch", 'String'>
    readonly createdAt: FieldRef<"Branch", 'DateTime'>
    readonly updatedAt: FieldRef<"Branch", 'DateTime'>
    readonly companyId: FieldRef<"Branch", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Branch findUnique
   */
  export type BranchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findUniqueOrThrow
   */
  export type BranchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findFirst
   */
  export type BranchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findFirstOrThrow
   */
  export type BranchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findMany
   */
  export type BranchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branches to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch create
   */
  export type BranchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to create a Branch.
     */
    data: XOR<BranchCreateInput, BranchUncheckedCreateInput>
  }

  /**
   * Branch createMany
   */
  export type BranchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Branch createManyAndReturn
   */
  export type BranchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Branch update
   */
  export type BranchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to update a Branch.
     */
    data: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
    /**
     * Choose, which Branch to update.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch updateMany
   */
  export type BranchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to update.
     */
    limit?: number
  }

  /**
   * Branch updateManyAndReturn
   */
  export type BranchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Branch upsert
   */
  export type BranchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The filter to search for the Branch to update in case it exists.
     */
    where: BranchWhereUniqueInput
    /**
     * In case the Branch found by the `where` argument doesn't exist, create a new Branch with this data.
     */
    create: XOR<BranchCreateInput, BranchUncheckedCreateInput>
    /**
     * In case the Branch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
  }

  /**
   * Branch delete
   */
  export type BranchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter which Branch to delete.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch deleteMany
   */
  export type BranchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branches to delete
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to delete.
     */
    limit?: number
  }

  /**
   * Branch.departments
   */
  export type Branch$departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    cursor?: DepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Branch.Employee
   */
  export type Branch$EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Branch.JobTitle
   */
  export type Branch$JobTitleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleInclude<ExtArgs> | null
    where?: JobTitleWhereInput
    orderBy?: JobTitleOrderByWithRelationInput | JobTitleOrderByWithRelationInput[]
    cursor?: JobTitleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobTitleScalarFieldEnum | JobTitleScalarFieldEnum[]
  }

  /**
   * Branch without action
   */
  export type BranchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    branchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    branchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    branchId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    name: string
    branchId: string | null
    createdAt: Date
    updatedAt: Date
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Branch?: boolean | Department$BranchArgs<ExtArgs>
    Employee?: boolean | Department$EmployeeArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Branch?: boolean | Department$BranchArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Branch?: boolean | Department$BranchArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "branchId" | "createdAt" | "updatedAt", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Branch?: boolean | Department$BranchArgs<ExtArgs>
    Employee?: boolean | Department$EmployeeArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Branch?: boolean | Department$BranchArgs<ExtArgs>
  }
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Branch?: boolean | Department$BranchArgs<ExtArgs>
  }

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      Branch: Prisma.$BranchPayload<ExtArgs> | null
      Employee: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      branchId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Branch<T extends Department$BranchArgs<ExtArgs> = {}>(args?: Subset<T, Department$BranchArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Employee<T extends Department$EmployeeArgs<ExtArgs> = {}>(args?: Subset<T, Department$EmployeeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'String'>
    readonly name: FieldRef<"Department", 'String'>
    readonly branchId: FieldRef<"Department", 'String'>
    readonly createdAt: FieldRef<"Department", 'DateTime'>
    readonly updatedAt: FieldRef<"Department", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.Branch
   */
  export type Department$BranchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
  }

  /**
   * Department.Employee
   */
  export type Department$EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    departmentId: string | null
    branchId: string | null
    jobTitleVersionId: string | null
    employmentType: $Enums.EmploymentType | null
    status: $Enums.EmployeeStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    departmentId: string | null
    branchId: string | null
    jobTitleVersionId: string | null
    employmentType: $Enums.EmploymentType | null
    status: $Enums.EmployeeStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    departmentId: number
    branchId: number
    jobTitleVersionId: number
    employmentType: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    departmentId?: true
    branchId?: true
    jobTitleVersionId?: true
    employmentType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    departmentId?: true
    branchId?: true
    jobTitleVersionId?: true
    employmentType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    departmentId?: true
    branchId?: true
    jobTitleVersionId?: true
    employmentType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    departmentId: string
    branchId: string
    jobTitleVersionId: string
    employmentType: $Enums.EmploymentType
    status: $Enums.EmployeeStatus
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    departmentId?: boolean
    branchId?: boolean
    jobTitleVersionId?: boolean
    employmentType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobTitleVersion?: boolean | JobTitleVersionDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    departmentId?: boolean
    branchId?: boolean
    jobTitleVersionId?: boolean
    employmentType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobTitleVersion?: boolean | JobTitleVersionDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    departmentId?: boolean
    branchId?: boolean
    jobTitleVersionId?: boolean
    employmentType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobTitleVersion?: boolean | JobTitleVersionDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    departmentId?: boolean
    branchId?: boolean
    jobTitleVersionId?: boolean
    employmentType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "departmentId" | "branchId" | "jobTitleVersionId" | "employmentType" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobTitleVersion?: boolean | JobTitleVersionDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobTitleVersion?: boolean | JobTitleVersionDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobTitleVersion?: boolean | JobTitleVersionDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      jobTitleVersion: Prisma.$JobTitleVersionPayload<ExtArgs>
      branch: Prisma.$BranchPayload<ExtArgs>
      department: Prisma.$DepartmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string | null
      departmentId: string
      branchId: string
      jobTitleVersionId: string
      employmentType: $Enums.EmploymentType
      status: $Enums.EmployeeStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobTitleVersion<T extends JobTitleVersionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobTitleVersionDefaultArgs<ExtArgs>>): Prisma__JobTitleVersionClient<$Result.GetResult<Prisma.$JobTitleVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly name: FieldRef<"Employee", 'String'>
    readonly email: FieldRef<"Employee", 'String'>
    readonly phone: FieldRef<"Employee", 'String'>
    readonly departmentId: FieldRef<"Employee", 'String'>
    readonly branchId: FieldRef<"Employee", 'String'>
    readonly jobTitleVersionId: FieldRef<"Employee", 'String'>
    readonly employmentType: FieldRef<"Employee", 'EmploymentType'>
    readonly status: FieldRef<"Employee", 'EmployeeStatus'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model JobTitle
   */

  export type AggregateJobTitle = {
    _count: JobTitleCountAggregateOutputType | null
    _min: JobTitleMinAggregateOutputType | null
    _max: JobTitleMaxAggregateOutputType | null
  }

  export type JobTitleMinAggregateOutputType = {
    id: string | null
    name: string | null
    branchId: string | null
    currentVersionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobTitleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    branchId: string | null
    currentVersionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobTitleCountAggregateOutputType = {
    id: number
    name: number
    branchId: number
    currentVersionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobTitleMinAggregateInputType = {
    id?: true
    name?: true
    branchId?: true
    currentVersionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobTitleMaxAggregateInputType = {
    id?: true
    name?: true
    branchId?: true
    currentVersionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobTitleCountAggregateInputType = {
    id?: true
    name?: true
    branchId?: true
    currentVersionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobTitleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobTitle to aggregate.
     */
    where?: JobTitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobTitles to fetch.
     */
    orderBy?: JobTitleOrderByWithRelationInput | JobTitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobTitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobTitles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobTitles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobTitles
    **/
    _count?: true | JobTitleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobTitleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobTitleMaxAggregateInputType
  }

  export type GetJobTitleAggregateType<T extends JobTitleAggregateArgs> = {
        [P in keyof T & keyof AggregateJobTitle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobTitle[P]>
      : GetScalarType<T[P], AggregateJobTitle[P]>
  }




  export type JobTitleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobTitleWhereInput
    orderBy?: JobTitleOrderByWithAggregationInput | JobTitleOrderByWithAggregationInput[]
    by: JobTitleScalarFieldEnum[] | JobTitleScalarFieldEnum
    having?: JobTitleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobTitleCountAggregateInputType | true
    _min?: JobTitleMinAggregateInputType
    _max?: JobTitleMaxAggregateInputType
  }

  export type JobTitleGroupByOutputType = {
    id: string
    name: string
    branchId: string
    currentVersionId: string | null
    createdAt: Date
    updatedAt: Date
    _count: JobTitleCountAggregateOutputType | null
    _min: JobTitleMinAggregateOutputType | null
    _max: JobTitleMaxAggregateOutputType | null
  }

  type GetJobTitleGroupByPayload<T extends JobTitleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobTitleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobTitleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobTitleGroupByOutputType[P]>
            : GetScalarType<T[P], JobTitleGroupByOutputType[P]>
        }
      >
    >


  export type JobTitleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    branchId?: boolean
    currentVersionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    currentVersion?: boolean | JobTitle$currentVersionArgs<ExtArgs>
    versions?: boolean | JobTitle$versionsArgs<ExtArgs>
    _count?: boolean | JobTitleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobTitle"]>

  export type JobTitleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    branchId?: boolean
    currentVersionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    currentVersion?: boolean | JobTitle$currentVersionArgs<ExtArgs>
  }, ExtArgs["result"]["jobTitle"]>

  export type JobTitleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    branchId?: boolean
    currentVersionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    currentVersion?: boolean | JobTitle$currentVersionArgs<ExtArgs>
  }, ExtArgs["result"]["jobTitle"]>

  export type JobTitleSelectScalar = {
    id?: boolean
    name?: boolean
    branchId?: boolean
    currentVersionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobTitleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "branchId" | "currentVersionId" | "createdAt" | "updatedAt", ExtArgs["result"]["jobTitle"]>
  export type JobTitleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    currentVersion?: boolean | JobTitle$currentVersionArgs<ExtArgs>
    versions?: boolean | JobTitle$versionsArgs<ExtArgs>
    _count?: boolean | JobTitleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobTitleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    currentVersion?: boolean | JobTitle$currentVersionArgs<ExtArgs>
  }
  export type JobTitleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    currentVersion?: boolean | JobTitle$currentVersionArgs<ExtArgs>
  }

  export type $JobTitlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobTitle"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs>
      currentVersion: Prisma.$JobTitleVersionPayload<ExtArgs> | null
      versions: Prisma.$JobTitleVersionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      branchId: string
      currentVersionId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobTitle"]>
    composites: {}
  }

  type JobTitleGetPayload<S extends boolean | null | undefined | JobTitleDefaultArgs> = $Result.GetResult<Prisma.$JobTitlePayload, S>

  type JobTitleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobTitleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobTitleCountAggregateInputType | true
    }

  export interface JobTitleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobTitle'], meta: { name: 'JobTitle' } }
    /**
     * Find zero or one JobTitle that matches the filter.
     * @param {JobTitleFindUniqueArgs} args - Arguments to find a JobTitle
     * @example
     * // Get one JobTitle
     * const jobTitle = await prisma.jobTitle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobTitleFindUniqueArgs>(args: SelectSubset<T, JobTitleFindUniqueArgs<ExtArgs>>): Prisma__JobTitleClient<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobTitle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobTitleFindUniqueOrThrowArgs} args - Arguments to find a JobTitle
     * @example
     * // Get one JobTitle
     * const jobTitle = await prisma.jobTitle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobTitleFindUniqueOrThrowArgs>(args: SelectSubset<T, JobTitleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobTitleClient<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobTitle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTitleFindFirstArgs} args - Arguments to find a JobTitle
     * @example
     * // Get one JobTitle
     * const jobTitle = await prisma.jobTitle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobTitleFindFirstArgs>(args?: SelectSubset<T, JobTitleFindFirstArgs<ExtArgs>>): Prisma__JobTitleClient<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobTitle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTitleFindFirstOrThrowArgs} args - Arguments to find a JobTitle
     * @example
     * // Get one JobTitle
     * const jobTitle = await prisma.jobTitle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobTitleFindFirstOrThrowArgs>(args?: SelectSubset<T, JobTitleFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobTitleClient<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobTitles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTitleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobTitles
     * const jobTitles = await prisma.jobTitle.findMany()
     * 
     * // Get first 10 JobTitles
     * const jobTitles = await prisma.jobTitle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobTitleWithIdOnly = await prisma.jobTitle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobTitleFindManyArgs>(args?: SelectSubset<T, JobTitleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobTitle.
     * @param {JobTitleCreateArgs} args - Arguments to create a JobTitle.
     * @example
     * // Create one JobTitle
     * const JobTitle = await prisma.jobTitle.create({
     *   data: {
     *     // ... data to create a JobTitle
     *   }
     * })
     * 
     */
    create<T extends JobTitleCreateArgs>(args: SelectSubset<T, JobTitleCreateArgs<ExtArgs>>): Prisma__JobTitleClient<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobTitles.
     * @param {JobTitleCreateManyArgs} args - Arguments to create many JobTitles.
     * @example
     * // Create many JobTitles
     * const jobTitle = await prisma.jobTitle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobTitleCreateManyArgs>(args?: SelectSubset<T, JobTitleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobTitles and returns the data saved in the database.
     * @param {JobTitleCreateManyAndReturnArgs} args - Arguments to create many JobTitles.
     * @example
     * // Create many JobTitles
     * const jobTitle = await prisma.jobTitle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobTitles and only return the `id`
     * const jobTitleWithIdOnly = await prisma.jobTitle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobTitleCreateManyAndReturnArgs>(args?: SelectSubset<T, JobTitleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobTitle.
     * @param {JobTitleDeleteArgs} args - Arguments to delete one JobTitle.
     * @example
     * // Delete one JobTitle
     * const JobTitle = await prisma.jobTitle.delete({
     *   where: {
     *     // ... filter to delete one JobTitle
     *   }
     * })
     * 
     */
    delete<T extends JobTitleDeleteArgs>(args: SelectSubset<T, JobTitleDeleteArgs<ExtArgs>>): Prisma__JobTitleClient<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobTitle.
     * @param {JobTitleUpdateArgs} args - Arguments to update one JobTitle.
     * @example
     * // Update one JobTitle
     * const jobTitle = await prisma.jobTitle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobTitleUpdateArgs>(args: SelectSubset<T, JobTitleUpdateArgs<ExtArgs>>): Prisma__JobTitleClient<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobTitles.
     * @param {JobTitleDeleteManyArgs} args - Arguments to filter JobTitles to delete.
     * @example
     * // Delete a few JobTitles
     * const { count } = await prisma.jobTitle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobTitleDeleteManyArgs>(args?: SelectSubset<T, JobTitleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobTitles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTitleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobTitles
     * const jobTitle = await prisma.jobTitle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobTitleUpdateManyArgs>(args: SelectSubset<T, JobTitleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobTitles and returns the data updated in the database.
     * @param {JobTitleUpdateManyAndReturnArgs} args - Arguments to update many JobTitles.
     * @example
     * // Update many JobTitles
     * const jobTitle = await prisma.jobTitle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobTitles and only return the `id`
     * const jobTitleWithIdOnly = await prisma.jobTitle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobTitleUpdateManyAndReturnArgs>(args: SelectSubset<T, JobTitleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobTitle.
     * @param {JobTitleUpsertArgs} args - Arguments to update or create a JobTitle.
     * @example
     * // Update or create a JobTitle
     * const jobTitle = await prisma.jobTitle.upsert({
     *   create: {
     *     // ... data to create a JobTitle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobTitle we want to update
     *   }
     * })
     */
    upsert<T extends JobTitleUpsertArgs>(args: SelectSubset<T, JobTitleUpsertArgs<ExtArgs>>): Prisma__JobTitleClient<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobTitles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTitleCountArgs} args - Arguments to filter JobTitles to count.
     * @example
     * // Count the number of JobTitles
     * const count = await prisma.jobTitle.count({
     *   where: {
     *     // ... the filter for the JobTitles we want to count
     *   }
     * })
    **/
    count<T extends JobTitleCountArgs>(
      args?: Subset<T, JobTitleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobTitleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobTitle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTitleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobTitleAggregateArgs>(args: Subset<T, JobTitleAggregateArgs>): Prisma.PrismaPromise<GetJobTitleAggregateType<T>>

    /**
     * Group by JobTitle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTitleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobTitleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobTitleGroupByArgs['orderBy'] }
        : { orderBy?: JobTitleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobTitleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobTitleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobTitle model
   */
  readonly fields: JobTitleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobTitle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobTitleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    currentVersion<T extends JobTitle$currentVersionArgs<ExtArgs> = {}>(args?: Subset<T, JobTitle$currentVersionArgs<ExtArgs>>): Prisma__JobTitleVersionClient<$Result.GetResult<Prisma.$JobTitleVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    versions<T extends JobTitle$versionsArgs<ExtArgs> = {}>(args?: Subset<T, JobTitle$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobTitleVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobTitle model
   */
  interface JobTitleFieldRefs {
    readonly id: FieldRef<"JobTitle", 'String'>
    readonly name: FieldRef<"JobTitle", 'String'>
    readonly branchId: FieldRef<"JobTitle", 'String'>
    readonly currentVersionId: FieldRef<"JobTitle", 'String'>
    readonly createdAt: FieldRef<"JobTitle", 'DateTime'>
    readonly updatedAt: FieldRef<"JobTitle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobTitle findUnique
   */
  export type JobTitleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleInclude<ExtArgs> | null
    /**
     * Filter, which JobTitle to fetch.
     */
    where: JobTitleWhereUniqueInput
  }

  /**
   * JobTitle findUniqueOrThrow
   */
  export type JobTitleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleInclude<ExtArgs> | null
    /**
     * Filter, which JobTitle to fetch.
     */
    where: JobTitleWhereUniqueInput
  }

  /**
   * JobTitle findFirst
   */
  export type JobTitleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleInclude<ExtArgs> | null
    /**
     * Filter, which JobTitle to fetch.
     */
    where?: JobTitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobTitles to fetch.
     */
    orderBy?: JobTitleOrderByWithRelationInput | JobTitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobTitles.
     */
    cursor?: JobTitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobTitles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobTitles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobTitles.
     */
    distinct?: JobTitleScalarFieldEnum | JobTitleScalarFieldEnum[]
  }

  /**
   * JobTitle findFirstOrThrow
   */
  export type JobTitleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleInclude<ExtArgs> | null
    /**
     * Filter, which JobTitle to fetch.
     */
    where?: JobTitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobTitles to fetch.
     */
    orderBy?: JobTitleOrderByWithRelationInput | JobTitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobTitles.
     */
    cursor?: JobTitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobTitles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobTitles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobTitles.
     */
    distinct?: JobTitleScalarFieldEnum | JobTitleScalarFieldEnum[]
  }

  /**
   * JobTitle findMany
   */
  export type JobTitleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleInclude<ExtArgs> | null
    /**
     * Filter, which JobTitles to fetch.
     */
    where?: JobTitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobTitles to fetch.
     */
    orderBy?: JobTitleOrderByWithRelationInput | JobTitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobTitles.
     */
    cursor?: JobTitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobTitles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobTitles.
     */
    skip?: number
    distinct?: JobTitleScalarFieldEnum | JobTitleScalarFieldEnum[]
  }

  /**
   * JobTitle create
   */
  export type JobTitleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleInclude<ExtArgs> | null
    /**
     * The data needed to create a JobTitle.
     */
    data: XOR<JobTitleCreateInput, JobTitleUncheckedCreateInput>
  }

  /**
   * JobTitle createMany
   */
  export type JobTitleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobTitles.
     */
    data: JobTitleCreateManyInput | JobTitleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobTitle createManyAndReturn
   */
  export type JobTitleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * The data used to create many JobTitles.
     */
    data: JobTitleCreateManyInput | JobTitleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobTitle update
   */
  export type JobTitleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleInclude<ExtArgs> | null
    /**
     * The data needed to update a JobTitle.
     */
    data: XOR<JobTitleUpdateInput, JobTitleUncheckedUpdateInput>
    /**
     * Choose, which JobTitle to update.
     */
    where: JobTitleWhereUniqueInput
  }

  /**
   * JobTitle updateMany
   */
  export type JobTitleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobTitles.
     */
    data: XOR<JobTitleUpdateManyMutationInput, JobTitleUncheckedUpdateManyInput>
    /**
     * Filter which JobTitles to update
     */
    where?: JobTitleWhereInput
    /**
     * Limit how many JobTitles to update.
     */
    limit?: number
  }

  /**
   * JobTitle updateManyAndReturn
   */
  export type JobTitleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * The data used to update JobTitles.
     */
    data: XOR<JobTitleUpdateManyMutationInput, JobTitleUncheckedUpdateManyInput>
    /**
     * Filter which JobTitles to update
     */
    where?: JobTitleWhereInput
    /**
     * Limit how many JobTitles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobTitle upsert
   */
  export type JobTitleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleInclude<ExtArgs> | null
    /**
     * The filter to search for the JobTitle to update in case it exists.
     */
    where: JobTitleWhereUniqueInput
    /**
     * In case the JobTitle found by the `where` argument doesn't exist, create a new JobTitle with this data.
     */
    create: XOR<JobTitleCreateInput, JobTitleUncheckedCreateInput>
    /**
     * In case the JobTitle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobTitleUpdateInput, JobTitleUncheckedUpdateInput>
  }

  /**
   * JobTitle delete
   */
  export type JobTitleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleInclude<ExtArgs> | null
    /**
     * Filter which JobTitle to delete.
     */
    where: JobTitleWhereUniqueInput
  }

  /**
   * JobTitle deleteMany
   */
  export type JobTitleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobTitles to delete
     */
    where?: JobTitleWhereInput
    /**
     * Limit how many JobTitles to delete.
     */
    limit?: number
  }

  /**
   * JobTitle.currentVersion
   */
  export type JobTitle$currentVersionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitleVersion
     */
    select?: JobTitleVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitleVersion
     */
    omit?: JobTitleVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleVersionInclude<ExtArgs> | null
    where?: JobTitleVersionWhereInput
  }

  /**
   * JobTitle.versions
   */
  export type JobTitle$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitleVersion
     */
    select?: JobTitleVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitleVersion
     */
    omit?: JobTitleVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleVersionInclude<ExtArgs> | null
    where?: JobTitleVersionWhereInput
    orderBy?: JobTitleVersionOrderByWithRelationInput | JobTitleVersionOrderByWithRelationInput[]
    cursor?: JobTitleVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobTitleVersionScalarFieldEnum | JobTitleVersionScalarFieldEnum[]
  }

  /**
   * JobTitle without action
   */
  export type JobTitleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleInclude<ExtArgs> | null
  }


  /**
   * Model JobTitleVersion
   */

  export type AggregateJobTitleVersion = {
    _count: JobTitleVersionCountAggregateOutputType | null
    _avg: JobTitleVersionAvgAggregateOutputType | null
    _sum: JobTitleVersionSumAggregateOutputType | null
    _min: JobTitleVersionMinAggregateOutputType | null
    _max: JobTitleVersionMaxAggregateOutputType | null
  }

  export type JobTitleVersionAvgAggregateOutputType = {
    version: number | null
    salary: Decimal | null
  }

  export type JobTitleVersionSumAggregateOutputType = {
    version: number | null
    salary: Decimal | null
  }

  export type JobTitleVersionMinAggregateOutputType = {
    id: string | null
    jobTitleId: string | null
    version: number | null
    salary: Decimal | null
    requirements: string | null
    effectiveFrom: Date | null
    createdAt: Date | null
  }

  export type JobTitleVersionMaxAggregateOutputType = {
    id: string | null
    jobTitleId: string | null
    version: number | null
    salary: Decimal | null
    requirements: string | null
    effectiveFrom: Date | null
    createdAt: Date | null
  }

  export type JobTitleVersionCountAggregateOutputType = {
    id: number
    jobTitleId: number
    version: number
    salary: number
    requirements: number
    effectiveFrom: number
    createdAt: number
    _all: number
  }


  export type JobTitleVersionAvgAggregateInputType = {
    version?: true
    salary?: true
  }

  export type JobTitleVersionSumAggregateInputType = {
    version?: true
    salary?: true
  }

  export type JobTitleVersionMinAggregateInputType = {
    id?: true
    jobTitleId?: true
    version?: true
    salary?: true
    requirements?: true
    effectiveFrom?: true
    createdAt?: true
  }

  export type JobTitleVersionMaxAggregateInputType = {
    id?: true
    jobTitleId?: true
    version?: true
    salary?: true
    requirements?: true
    effectiveFrom?: true
    createdAt?: true
  }

  export type JobTitleVersionCountAggregateInputType = {
    id?: true
    jobTitleId?: true
    version?: true
    salary?: true
    requirements?: true
    effectiveFrom?: true
    createdAt?: true
    _all?: true
  }

  export type JobTitleVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobTitleVersion to aggregate.
     */
    where?: JobTitleVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobTitleVersions to fetch.
     */
    orderBy?: JobTitleVersionOrderByWithRelationInput | JobTitleVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobTitleVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobTitleVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobTitleVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobTitleVersions
    **/
    _count?: true | JobTitleVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobTitleVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobTitleVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobTitleVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobTitleVersionMaxAggregateInputType
  }

  export type GetJobTitleVersionAggregateType<T extends JobTitleVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateJobTitleVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobTitleVersion[P]>
      : GetScalarType<T[P], AggregateJobTitleVersion[P]>
  }




  export type JobTitleVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobTitleVersionWhereInput
    orderBy?: JobTitleVersionOrderByWithAggregationInput | JobTitleVersionOrderByWithAggregationInput[]
    by: JobTitleVersionScalarFieldEnum[] | JobTitleVersionScalarFieldEnum
    having?: JobTitleVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobTitleVersionCountAggregateInputType | true
    _avg?: JobTitleVersionAvgAggregateInputType
    _sum?: JobTitleVersionSumAggregateInputType
    _min?: JobTitleVersionMinAggregateInputType
    _max?: JobTitleVersionMaxAggregateInputType
  }

  export type JobTitleVersionGroupByOutputType = {
    id: string
    jobTitleId: string
    version: number
    salary: Decimal
    requirements: string | null
    effectiveFrom: Date
    createdAt: Date
    _count: JobTitleVersionCountAggregateOutputType | null
    _avg: JobTitleVersionAvgAggregateOutputType | null
    _sum: JobTitleVersionSumAggregateOutputType | null
    _min: JobTitleVersionMinAggregateOutputType | null
    _max: JobTitleVersionMaxAggregateOutputType | null
  }

  type GetJobTitleVersionGroupByPayload<T extends JobTitleVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobTitleVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobTitleVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobTitleVersionGroupByOutputType[P]>
            : GetScalarType<T[P], JobTitleVersionGroupByOutputType[P]>
        }
      >
    >


  export type JobTitleVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobTitleId?: boolean
    version?: boolean
    salary?: boolean
    requirements?: boolean
    effectiveFrom?: boolean
    createdAt?: boolean
    jobTitle?: boolean | JobTitleDefaultArgs<ExtArgs>
    usedAsCurrentIn?: boolean | JobTitleVersion$usedAsCurrentInArgs<ExtArgs>
    Employee?: boolean | JobTitleVersion$EmployeeArgs<ExtArgs>
    _count?: boolean | JobTitleVersionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobTitleVersion"]>

  export type JobTitleVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobTitleId?: boolean
    version?: boolean
    salary?: boolean
    requirements?: boolean
    effectiveFrom?: boolean
    createdAt?: boolean
    jobTitle?: boolean | JobTitleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobTitleVersion"]>

  export type JobTitleVersionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobTitleId?: boolean
    version?: boolean
    salary?: boolean
    requirements?: boolean
    effectiveFrom?: boolean
    createdAt?: boolean
    jobTitle?: boolean | JobTitleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobTitleVersion"]>

  export type JobTitleVersionSelectScalar = {
    id?: boolean
    jobTitleId?: boolean
    version?: boolean
    salary?: boolean
    requirements?: boolean
    effectiveFrom?: boolean
    createdAt?: boolean
  }

  export type JobTitleVersionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobTitleId" | "version" | "salary" | "requirements" | "effectiveFrom" | "createdAt", ExtArgs["result"]["jobTitleVersion"]>
  export type JobTitleVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobTitle?: boolean | JobTitleDefaultArgs<ExtArgs>
    usedAsCurrentIn?: boolean | JobTitleVersion$usedAsCurrentInArgs<ExtArgs>
    Employee?: boolean | JobTitleVersion$EmployeeArgs<ExtArgs>
    _count?: boolean | JobTitleVersionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobTitleVersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobTitle?: boolean | JobTitleDefaultArgs<ExtArgs>
  }
  export type JobTitleVersionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobTitle?: boolean | JobTitleDefaultArgs<ExtArgs>
  }

  export type $JobTitleVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobTitleVersion"
    objects: {
      jobTitle: Prisma.$JobTitlePayload<ExtArgs>
      usedAsCurrentIn: Prisma.$JobTitlePayload<ExtArgs> | null
      Employee: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobTitleId: string
      version: number
      salary: Prisma.Decimal
      requirements: string | null
      effectiveFrom: Date
      createdAt: Date
    }, ExtArgs["result"]["jobTitleVersion"]>
    composites: {}
  }

  type JobTitleVersionGetPayload<S extends boolean | null | undefined | JobTitleVersionDefaultArgs> = $Result.GetResult<Prisma.$JobTitleVersionPayload, S>

  type JobTitleVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobTitleVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobTitleVersionCountAggregateInputType | true
    }

  export interface JobTitleVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobTitleVersion'], meta: { name: 'JobTitleVersion' } }
    /**
     * Find zero or one JobTitleVersion that matches the filter.
     * @param {JobTitleVersionFindUniqueArgs} args - Arguments to find a JobTitleVersion
     * @example
     * // Get one JobTitleVersion
     * const jobTitleVersion = await prisma.jobTitleVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobTitleVersionFindUniqueArgs>(args: SelectSubset<T, JobTitleVersionFindUniqueArgs<ExtArgs>>): Prisma__JobTitleVersionClient<$Result.GetResult<Prisma.$JobTitleVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobTitleVersion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobTitleVersionFindUniqueOrThrowArgs} args - Arguments to find a JobTitleVersion
     * @example
     * // Get one JobTitleVersion
     * const jobTitleVersion = await prisma.jobTitleVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobTitleVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, JobTitleVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobTitleVersionClient<$Result.GetResult<Prisma.$JobTitleVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobTitleVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTitleVersionFindFirstArgs} args - Arguments to find a JobTitleVersion
     * @example
     * // Get one JobTitleVersion
     * const jobTitleVersion = await prisma.jobTitleVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobTitleVersionFindFirstArgs>(args?: SelectSubset<T, JobTitleVersionFindFirstArgs<ExtArgs>>): Prisma__JobTitleVersionClient<$Result.GetResult<Prisma.$JobTitleVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobTitleVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTitleVersionFindFirstOrThrowArgs} args - Arguments to find a JobTitleVersion
     * @example
     * // Get one JobTitleVersion
     * const jobTitleVersion = await prisma.jobTitleVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobTitleVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, JobTitleVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobTitleVersionClient<$Result.GetResult<Prisma.$JobTitleVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobTitleVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTitleVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobTitleVersions
     * const jobTitleVersions = await prisma.jobTitleVersion.findMany()
     * 
     * // Get first 10 JobTitleVersions
     * const jobTitleVersions = await prisma.jobTitleVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobTitleVersionWithIdOnly = await prisma.jobTitleVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobTitleVersionFindManyArgs>(args?: SelectSubset<T, JobTitleVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobTitleVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobTitleVersion.
     * @param {JobTitleVersionCreateArgs} args - Arguments to create a JobTitleVersion.
     * @example
     * // Create one JobTitleVersion
     * const JobTitleVersion = await prisma.jobTitleVersion.create({
     *   data: {
     *     // ... data to create a JobTitleVersion
     *   }
     * })
     * 
     */
    create<T extends JobTitleVersionCreateArgs>(args: SelectSubset<T, JobTitleVersionCreateArgs<ExtArgs>>): Prisma__JobTitleVersionClient<$Result.GetResult<Prisma.$JobTitleVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobTitleVersions.
     * @param {JobTitleVersionCreateManyArgs} args - Arguments to create many JobTitleVersions.
     * @example
     * // Create many JobTitleVersions
     * const jobTitleVersion = await prisma.jobTitleVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobTitleVersionCreateManyArgs>(args?: SelectSubset<T, JobTitleVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobTitleVersions and returns the data saved in the database.
     * @param {JobTitleVersionCreateManyAndReturnArgs} args - Arguments to create many JobTitleVersions.
     * @example
     * // Create many JobTitleVersions
     * const jobTitleVersion = await prisma.jobTitleVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobTitleVersions and only return the `id`
     * const jobTitleVersionWithIdOnly = await prisma.jobTitleVersion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobTitleVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, JobTitleVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobTitleVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobTitleVersion.
     * @param {JobTitleVersionDeleteArgs} args - Arguments to delete one JobTitleVersion.
     * @example
     * // Delete one JobTitleVersion
     * const JobTitleVersion = await prisma.jobTitleVersion.delete({
     *   where: {
     *     // ... filter to delete one JobTitleVersion
     *   }
     * })
     * 
     */
    delete<T extends JobTitleVersionDeleteArgs>(args: SelectSubset<T, JobTitleVersionDeleteArgs<ExtArgs>>): Prisma__JobTitleVersionClient<$Result.GetResult<Prisma.$JobTitleVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobTitleVersion.
     * @param {JobTitleVersionUpdateArgs} args - Arguments to update one JobTitleVersion.
     * @example
     * // Update one JobTitleVersion
     * const jobTitleVersion = await prisma.jobTitleVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobTitleVersionUpdateArgs>(args: SelectSubset<T, JobTitleVersionUpdateArgs<ExtArgs>>): Prisma__JobTitleVersionClient<$Result.GetResult<Prisma.$JobTitleVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobTitleVersions.
     * @param {JobTitleVersionDeleteManyArgs} args - Arguments to filter JobTitleVersions to delete.
     * @example
     * // Delete a few JobTitleVersions
     * const { count } = await prisma.jobTitleVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobTitleVersionDeleteManyArgs>(args?: SelectSubset<T, JobTitleVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobTitleVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTitleVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobTitleVersions
     * const jobTitleVersion = await prisma.jobTitleVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobTitleVersionUpdateManyArgs>(args: SelectSubset<T, JobTitleVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobTitleVersions and returns the data updated in the database.
     * @param {JobTitleVersionUpdateManyAndReturnArgs} args - Arguments to update many JobTitleVersions.
     * @example
     * // Update many JobTitleVersions
     * const jobTitleVersion = await prisma.jobTitleVersion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobTitleVersions and only return the `id`
     * const jobTitleVersionWithIdOnly = await prisma.jobTitleVersion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobTitleVersionUpdateManyAndReturnArgs>(args: SelectSubset<T, JobTitleVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobTitleVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobTitleVersion.
     * @param {JobTitleVersionUpsertArgs} args - Arguments to update or create a JobTitleVersion.
     * @example
     * // Update or create a JobTitleVersion
     * const jobTitleVersion = await prisma.jobTitleVersion.upsert({
     *   create: {
     *     // ... data to create a JobTitleVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobTitleVersion we want to update
     *   }
     * })
     */
    upsert<T extends JobTitleVersionUpsertArgs>(args: SelectSubset<T, JobTitleVersionUpsertArgs<ExtArgs>>): Prisma__JobTitleVersionClient<$Result.GetResult<Prisma.$JobTitleVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobTitleVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTitleVersionCountArgs} args - Arguments to filter JobTitleVersions to count.
     * @example
     * // Count the number of JobTitleVersions
     * const count = await prisma.jobTitleVersion.count({
     *   where: {
     *     // ... the filter for the JobTitleVersions we want to count
     *   }
     * })
    **/
    count<T extends JobTitleVersionCountArgs>(
      args?: Subset<T, JobTitleVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobTitleVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobTitleVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTitleVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobTitleVersionAggregateArgs>(args: Subset<T, JobTitleVersionAggregateArgs>): Prisma.PrismaPromise<GetJobTitleVersionAggregateType<T>>

    /**
     * Group by JobTitleVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTitleVersionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobTitleVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobTitleVersionGroupByArgs['orderBy'] }
        : { orderBy?: JobTitleVersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobTitleVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobTitleVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobTitleVersion model
   */
  readonly fields: JobTitleVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobTitleVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobTitleVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobTitle<T extends JobTitleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobTitleDefaultArgs<ExtArgs>>): Prisma__JobTitleClient<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usedAsCurrentIn<T extends JobTitleVersion$usedAsCurrentInArgs<ExtArgs> = {}>(args?: Subset<T, JobTitleVersion$usedAsCurrentInArgs<ExtArgs>>): Prisma__JobTitleClient<$Result.GetResult<Prisma.$JobTitlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Employee<T extends JobTitleVersion$EmployeeArgs<ExtArgs> = {}>(args?: Subset<T, JobTitleVersion$EmployeeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobTitleVersion model
   */
  interface JobTitleVersionFieldRefs {
    readonly id: FieldRef<"JobTitleVersion", 'String'>
    readonly jobTitleId: FieldRef<"JobTitleVersion", 'String'>
    readonly version: FieldRef<"JobTitleVersion", 'Int'>
    readonly salary: FieldRef<"JobTitleVersion", 'Decimal'>
    readonly requirements: FieldRef<"JobTitleVersion", 'String'>
    readonly effectiveFrom: FieldRef<"JobTitleVersion", 'DateTime'>
    readonly createdAt: FieldRef<"JobTitleVersion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobTitleVersion findUnique
   */
  export type JobTitleVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitleVersion
     */
    select?: JobTitleVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitleVersion
     */
    omit?: JobTitleVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleVersionInclude<ExtArgs> | null
    /**
     * Filter, which JobTitleVersion to fetch.
     */
    where: JobTitleVersionWhereUniqueInput
  }

  /**
   * JobTitleVersion findUniqueOrThrow
   */
  export type JobTitleVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitleVersion
     */
    select?: JobTitleVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitleVersion
     */
    omit?: JobTitleVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleVersionInclude<ExtArgs> | null
    /**
     * Filter, which JobTitleVersion to fetch.
     */
    where: JobTitleVersionWhereUniqueInput
  }

  /**
   * JobTitleVersion findFirst
   */
  export type JobTitleVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitleVersion
     */
    select?: JobTitleVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitleVersion
     */
    omit?: JobTitleVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleVersionInclude<ExtArgs> | null
    /**
     * Filter, which JobTitleVersion to fetch.
     */
    where?: JobTitleVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobTitleVersions to fetch.
     */
    orderBy?: JobTitleVersionOrderByWithRelationInput | JobTitleVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobTitleVersions.
     */
    cursor?: JobTitleVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobTitleVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobTitleVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobTitleVersions.
     */
    distinct?: JobTitleVersionScalarFieldEnum | JobTitleVersionScalarFieldEnum[]
  }

  /**
   * JobTitleVersion findFirstOrThrow
   */
  export type JobTitleVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitleVersion
     */
    select?: JobTitleVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitleVersion
     */
    omit?: JobTitleVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleVersionInclude<ExtArgs> | null
    /**
     * Filter, which JobTitleVersion to fetch.
     */
    where?: JobTitleVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobTitleVersions to fetch.
     */
    orderBy?: JobTitleVersionOrderByWithRelationInput | JobTitleVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobTitleVersions.
     */
    cursor?: JobTitleVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobTitleVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobTitleVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobTitleVersions.
     */
    distinct?: JobTitleVersionScalarFieldEnum | JobTitleVersionScalarFieldEnum[]
  }

  /**
   * JobTitleVersion findMany
   */
  export type JobTitleVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitleVersion
     */
    select?: JobTitleVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitleVersion
     */
    omit?: JobTitleVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleVersionInclude<ExtArgs> | null
    /**
     * Filter, which JobTitleVersions to fetch.
     */
    where?: JobTitleVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobTitleVersions to fetch.
     */
    orderBy?: JobTitleVersionOrderByWithRelationInput | JobTitleVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobTitleVersions.
     */
    cursor?: JobTitleVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobTitleVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobTitleVersions.
     */
    skip?: number
    distinct?: JobTitleVersionScalarFieldEnum | JobTitleVersionScalarFieldEnum[]
  }

  /**
   * JobTitleVersion create
   */
  export type JobTitleVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitleVersion
     */
    select?: JobTitleVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitleVersion
     */
    omit?: JobTitleVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a JobTitleVersion.
     */
    data: XOR<JobTitleVersionCreateInput, JobTitleVersionUncheckedCreateInput>
  }

  /**
   * JobTitleVersion createMany
   */
  export type JobTitleVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobTitleVersions.
     */
    data: JobTitleVersionCreateManyInput | JobTitleVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobTitleVersion createManyAndReturn
   */
  export type JobTitleVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitleVersion
     */
    select?: JobTitleVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitleVersion
     */
    omit?: JobTitleVersionOmit<ExtArgs> | null
    /**
     * The data used to create many JobTitleVersions.
     */
    data: JobTitleVersionCreateManyInput | JobTitleVersionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleVersionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobTitleVersion update
   */
  export type JobTitleVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitleVersion
     */
    select?: JobTitleVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitleVersion
     */
    omit?: JobTitleVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a JobTitleVersion.
     */
    data: XOR<JobTitleVersionUpdateInput, JobTitleVersionUncheckedUpdateInput>
    /**
     * Choose, which JobTitleVersion to update.
     */
    where: JobTitleVersionWhereUniqueInput
  }

  /**
   * JobTitleVersion updateMany
   */
  export type JobTitleVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobTitleVersions.
     */
    data: XOR<JobTitleVersionUpdateManyMutationInput, JobTitleVersionUncheckedUpdateManyInput>
    /**
     * Filter which JobTitleVersions to update
     */
    where?: JobTitleVersionWhereInput
    /**
     * Limit how many JobTitleVersions to update.
     */
    limit?: number
  }

  /**
   * JobTitleVersion updateManyAndReturn
   */
  export type JobTitleVersionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitleVersion
     */
    select?: JobTitleVersionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitleVersion
     */
    omit?: JobTitleVersionOmit<ExtArgs> | null
    /**
     * The data used to update JobTitleVersions.
     */
    data: XOR<JobTitleVersionUpdateManyMutationInput, JobTitleVersionUncheckedUpdateManyInput>
    /**
     * Filter which JobTitleVersions to update
     */
    where?: JobTitleVersionWhereInput
    /**
     * Limit how many JobTitleVersions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleVersionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobTitleVersion upsert
   */
  export type JobTitleVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitleVersion
     */
    select?: JobTitleVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitleVersion
     */
    omit?: JobTitleVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the JobTitleVersion to update in case it exists.
     */
    where: JobTitleVersionWhereUniqueInput
    /**
     * In case the JobTitleVersion found by the `where` argument doesn't exist, create a new JobTitleVersion with this data.
     */
    create: XOR<JobTitleVersionCreateInput, JobTitleVersionUncheckedCreateInput>
    /**
     * In case the JobTitleVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobTitleVersionUpdateInput, JobTitleVersionUncheckedUpdateInput>
  }

  /**
   * JobTitleVersion delete
   */
  export type JobTitleVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitleVersion
     */
    select?: JobTitleVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitleVersion
     */
    omit?: JobTitleVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleVersionInclude<ExtArgs> | null
    /**
     * Filter which JobTitleVersion to delete.
     */
    where: JobTitleVersionWhereUniqueInput
  }

  /**
   * JobTitleVersion deleteMany
   */
  export type JobTitleVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobTitleVersions to delete
     */
    where?: JobTitleVersionWhereInput
    /**
     * Limit how many JobTitleVersions to delete.
     */
    limit?: number
  }

  /**
   * JobTitleVersion.usedAsCurrentIn
   */
  export type JobTitleVersion$usedAsCurrentInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitle
     */
    select?: JobTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitle
     */
    omit?: JobTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleInclude<ExtArgs> | null
    where?: JobTitleWhereInput
  }

  /**
   * JobTitleVersion.Employee
   */
  export type JobTitleVersion$EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * JobTitleVersion without action
   */
  export type JobTitleVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTitleVersion
     */
    select?: JobTitleVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobTitleVersion
     */
    omit?: JobTitleVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobTitleVersionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    tradingName: 'tradingName',
    legalName: 'legalName',
    taxId: 'taxId',
    email: 'email',
    phone: 'phone',
    industry: 'industry',
    segment: 'segment',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const BranchScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    companyId: 'companyId'
  };

  export type BranchScalarFieldEnum = (typeof BranchScalarFieldEnum)[keyof typeof BranchScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    branchId: 'branchId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    departmentId: 'departmentId',
    branchId: 'branchId',
    jobTitleVersionId: 'jobTitleVersionId',
    employmentType: 'employmentType',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const JobTitleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    branchId: 'branchId',
    currentVersionId: 'currentVersionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobTitleScalarFieldEnum = (typeof JobTitleScalarFieldEnum)[keyof typeof JobTitleScalarFieldEnum]


  export const JobTitleVersionScalarFieldEnum: {
    id: 'id',
    jobTitleId: 'jobTitleId',
    version: 'version',
    salary: 'salary',
    requirements: 'requirements',
    effectiveFrom: 'effectiveFrom',
    createdAt: 'createdAt'
  };

  export type JobTitleVersionScalarFieldEnum = (typeof JobTitleVersionScalarFieldEnum)[keyof typeof JobTitleVersionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Industry'
   */
  export type EnumIndustryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Industry'>
    


  /**
   * Reference to a field of type 'Industry[]'
   */
  export type ListEnumIndustryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Industry[]'>
    


  /**
   * Reference to a field of type 'Segment'
   */
  export type EnumSegmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Segment'>
    


  /**
   * Reference to a field of type 'Segment[]'
   */
  export type ListEnumSegmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Segment[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EmploymentType'
   */
  export type EnumEmploymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmploymentType'>
    


  /**
   * Reference to a field of type 'EmploymentType[]'
   */
  export type ListEnumEmploymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmploymentType[]'>
    


  /**
   * Reference to a field of type 'EmployeeStatus'
   */
  export type EnumEmployeeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmployeeStatus'>
    


  /**
   * Reference to a field of type 'EmployeeStatus[]'
   */
  export type ListEnumEmployeeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmployeeStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    tradingName?: StringFilter<"Company"> | string
    legalName?: StringFilter<"Company"> | string
    taxId?: StringFilter<"Company"> | string
    email?: StringFilter<"Company"> | string
    phone?: StringNullableFilter<"Company"> | string | null
    industry?: EnumIndustryFilter<"Company"> | $Enums.Industry
    segment?: EnumSegmentFilter<"Company"> | $Enums.Segment
    isActive?: BoolFilter<"Company"> | boolean
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    branches?: BranchListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    tradingName?: SortOrder
    legalName?: SortOrder
    taxId?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    industry?: SortOrder
    segment?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    branches?: BranchOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tradingName?: string
    taxId?: string
    email?: string
    legalName_taxId?: CompanyLegalNameTaxIdCompoundUniqueInput
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    legalName?: StringFilter<"Company"> | string
    phone?: StringNullableFilter<"Company"> | string | null
    industry?: EnumIndustryFilter<"Company"> | $Enums.Industry
    segment?: EnumSegmentFilter<"Company"> | $Enums.Segment
    isActive?: BoolFilter<"Company"> | boolean
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    branches?: BranchListRelationFilter
  }, "id" | "tradingName" | "taxId" | "email" | "legalName_taxId">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    tradingName?: SortOrder
    legalName?: SortOrder
    taxId?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    industry?: SortOrder
    segment?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    tradingName?: StringWithAggregatesFilter<"Company"> | string
    legalName?: StringWithAggregatesFilter<"Company"> | string
    taxId?: StringWithAggregatesFilter<"Company"> | string
    email?: StringWithAggregatesFilter<"Company"> | string
    phone?: StringNullableWithAggregatesFilter<"Company"> | string | null
    industry?: EnumIndustryWithAggregatesFilter<"Company"> | $Enums.Industry
    segment?: EnumSegmentWithAggregatesFilter<"Company"> | $Enums.Segment
    isActive?: BoolWithAggregatesFilter<"Company"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type BranchWhereInput = {
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    id?: StringFilter<"Branch"> | string
    name?: StringFilter<"Branch"> | string
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
    companyId?: StringFilter<"Branch"> | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    departments?: DepartmentListRelationFilter
    Employee?: EmployeeListRelationFilter
    JobTitle?: JobTitleListRelationFilter
  }

  export type BranchOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
    company?: CompanyOrderByWithRelationInput
    departments?: DepartmentOrderByRelationAggregateInput
    Employee?: EmployeeOrderByRelationAggregateInput
    JobTitle?: JobTitleOrderByRelationAggregateInput
  }

  export type BranchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_companyId?: BranchNameCompanyIdCompoundUniqueInput
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    name?: StringFilter<"Branch"> | string
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
    companyId?: StringFilter<"Branch"> | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    departments?: DepartmentListRelationFilter
    Employee?: EmployeeListRelationFilter
    JobTitle?: JobTitleListRelationFilter
  }, "id" | "name_companyId">

  export type BranchOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
    _count?: BranchCountOrderByAggregateInput
    _max?: BranchMaxOrderByAggregateInput
    _min?: BranchMinOrderByAggregateInput
  }

  export type BranchScalarWhereWithAggregatesInput = {
    AND?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    OR?: BranchScalarWhereWithAggregatesInput[]
    NOT?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Branch"> | string
    name?: StringWithAggregatesFilter<"Branch"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Branch"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Branch"> | Date | string
    companyId?: StringWithAggregatesFilter<"Branch"> | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    branchId?: StringNullableFilter<"Department"> | string | null
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    Branch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
    Employee?: EmployeeListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    branchId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Branch?: BranchOrderByWithRelationInput
    Employee?: EmployeeOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_branchId?: DepartmentNameBranchIdCompoundUniqueInput
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    name?: StringFilter<"Department"> | string
    branchId?: StringNullableFilter<"Department"> | string | null
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    Branch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
    Employee?: EmployeeListRelationFilter
  }, "id" | "name_branchId">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    branchId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Department"> | string
    name?: StringWithAggregatesFilter<"Department"> | string
    branchId?: StringNullableWithAggregatesFilter<"Department"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    name?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
    phone?: StringNullableFilter<"Employee"> | string | null
    departmentId?: StringFilter<"Employee"> | string
    branchId?: StringFilter<"Employee"> | string
    jobTitleVersionId?: StringFilter<"Employee"> | string
    employmentType?: EnumEmploymentTypeFilter<"Employee"> | $Enums.EmploymentType
    status?: EnumEmployeeStatusFilter<"Employee"> | $Enums.EmployeeStatus
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    jobTitleVersion?: XOR<JobTitleVersionScalarRelationFilter, JobTitleVersionWhereInput>
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    departmentId?: SortOrder
    branchId?: SortOrder
    jobTitleVersionId?: SortOrder
    employmentType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobTitleVersion?: JobTitleVersionOrderByWithRelationInput
    branch?: BranchOrderByWithRelationInput
    department?: DepartmentOrderByWithRelationInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    name?: StringFilter<"Employee"> | string
    phone?: StringNullableFilter<"Employee"> | string | null
    departmentId?: StringFilter<"Employee"> | string
    branchId?: StringFilter<"Employee"> | string
    jobTitleVersionId?: StringFilter<"Employee"> | string
    employmentType?: EnumEmploymentTypeFilter<"Employee"> | $Enums.EmploymentType
    status?: EnumEmployeeStatusFilter<"Employee"> | $Enums.EmployeeStatus
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    jobTitleVersion?: XOR<JobTitleVersionScalarRelationFilter, JobTitleVersionWhereInput>
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
  }, "id" | "email">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    departmentId?: SortOrder
    branchId?: SortOrder
    jobTitleVersionId?: SortOrder
    employmentType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    name?: StringWithAggregatesFilter<"Employee"> | string
    email?: StringWithAggregatesFilter<"Employee"> | string
    phone?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    departmentId?: StringWithAggregatesFilter<"Employee"> | string
    branchId?: StringWithAggregatesFilter<"Employee"> | string
    jobTitleVersionId?: StringWithAggregatesFilter<"Employee"> | string
    employmentType?: EnumEmploymentTypeWithAggregatesFilter<"Employee"> | $Enums.EmploymentType
    status?: EnumEmployeeStatusWithAggregatesFilter<"Employee"> | $Enums.EmployeeStatus
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type JobTitleWhereInput = {
    AND?: JobTitleWhereInput | JobTitleWhereInput[]
    OR?: JobTitleWhereInput[]
    NOT?: JobTitleWhereInput | JobTitleWhereInput[]
    id?: StringFilter<"JobTitle"> | string
    name?: StringFilter<"JobTitle"> | string
    branchId?: StringFilter<"JobTitle"> | string
    currentVersionId?: StringNullableFilter<"JobTitle"> | string | null
    createdAt?: DateTimeFilter<"JobTitle"> | Date | string
    updatedAt?: DateTimeFilter<"JobTitle"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    currentVersion?: XOR<JobTitleVersionNullableScalarRelationFilter, JobTitleVersionWhereInput> | null
    versions?: JobTitleVersionListRelationFilter
  }

  export type JobTitleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
    currentVersionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    branch?: BranchOrderByWithRelationInput
    currentVersion?: JobTitleVersionOrderByWithRelationInput
    versions?: JobTitleVersionOrderByRelationAggregateInput
  }

  export type JobTitleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    currentVersionId?: string
    name_branchId?: JobTitleNameBranchIdCompoundUniqueInput
    AND?: JobTitleWhereInput | JobTitleWhereInput[]
    OR?: JobTitleWhereInput[]
    NOT?: JobTitleWhereInput | JobTitleWhereInput[]
    name?: StringFilter<"JobTitle"> | string
    branchId?: StringFilter<"JobTitle"> | string
    createdAt?: DateTimeFilter<"JobTitle"> | Date | string
    updatedAt?: DateTimeFilter<"JobTitle"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    currentVersion?: XOR<JobTitleVersionNullableScalarRelationFilter, JobTitleVersionWhereInput> | null
    versions?: JobTitleVersionListRelationFilter
  }, "id" | "currentVersionId" | "name_branchId">

  export type JobTitleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
    currentVersionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobTitleCountOrderByAggregateInput
    _max?: JobTitleMaxOrderByAggregateInput
    _min?: JobTitleMinOrderByAggregateInput
  }

  export type JobTitleScalarWhereWithAggregatesInput = {
    AND?: JobTitleScalarWhereWithAggregatesInput | JobTitleScalarWhereWithAggregatesInput[]
    OR?: JobTitleScalarWhereWithAggregatesInput[]
    NOT?: JobTitleScalarWhereWithAggregatesInput | JobTitleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobTitle"> | string
    name?: StringWithAggregatesFilter<"JobTitle"> | string
    branchId?: StringWithAggregatesFilter<"JobTitle"> | string
    currentVersionId?: StringNullableWithAggregatesFilter<"JobTitle"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JobTitle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobTitle"> | Date | string
  }

  export type JobTitleVersionWhereInput = {
    AND?: JobTitleVersionWhereInput | JobTitleVersionWhereInput[]
    OR?: JobTitleVersionWhereInput[]
    NOT?: JobTitleVersionWhereInput | JobTitleVersionWhereInput[]
    id?: StringFilter<"JobTitleVersion"> | string
    jobTitleId?: StringFilter<"JobTitleVersion"> | string
    version?: IntFilter<"JobTitleVersion"> | number
    salary?: DecimalFilter<"JobTitleVersion"> | Decimal | DecimalJsLike | number | string
    requirements?: StringNullableFilter<"JobTitleVersion"> | string | null
    effectiveFrom?: DateTimeFilter<"JobTitleVersion"> | Date | string
    createdAt?: DateTimeFilter<"JobTitleVersion"> | Date | string
    jobTitle?: XOR<JobTitleScalarRelationFilter, JobTitleWhereInput>
    usedAsCurrentIn?: XOR<JobTitleNullableScalarRelationFilter, JobTitleWhereInput> | null
    Employee?: EmployeeListRelationFilter
  }

  export type JobTitleVersionOrderByWithRelationInput = {
    id?: SortOrder
    jobTitleId?: SortOrder
    version?: SortOrder
    salary?: SortOrder
    requirements?: SortOrderInput | SortOrder
    effectiveFrom?: SortOrder
    createdAt?: SortOrder
    jobTitle?: JobTitleOrderByWithRelationInput
    usedAsCurrentIn?: JobTitleOrderByWithRelationInput
    Employee?: EmployeeOrderByRelationAggregateInput
  }

  export type JobTitleVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    jobTitleId_version?: JobTitleVersionJobTitleIdVersionCompoundUniqueInput
    AND?: JobTitleVersionWhereInput | JobTitleVersionWhereInput[]
    OR?: JobTitleVersionWhereInput[]
    NOT?: JobTitleVersionWhereInput | JobTitleVersionWhereInput[]
    jobTitleId?: StringFilter<"JobTitleVersion"> | string
    version?: IntFilter<"JobTitleVersion"> | number
    salary?: DecimalFilter<"JobTitleVersion"> | Decimal | DecimalJsLike | number | string
    requirements?: StringNullableFilter<"JobTitleVersion"> | string | null
    effectiveFrom?: DateTimeFilter<"JobTitleVersion"> | Date | string
    createdAt?: DateTimeFilter<"JobTitleVersion"> | Date | string
    jobTitle?: XOR<JobTitleScalarRelationFilter, JobTitleWhereInput>
    usedAsCurrentIn?: XOR<JobTitleNullableScalarRelationFilter, JobTitleWhereInput> | null
    Employee?: EmployeeListRelationFilter
  }, "id" | "jobTitleId_version">

  export type JobTitleVersionOrderByWithAggregationInput = {
    id?: SortOrder
    jobTitleId?: SortOrder
    version?: SortOrder
    salary?: SortOrder
    requirements?: SortOrderInput | SortOrder
    effectiveFrom?: SortOrder
    createdAt?: SortOrder
    _count?: JobTitleVersionCountOrderByAggregateInput
    _avg?: JobTitleVersionAvgOrderByAggregateInput
    _max?: JobTitleVersionMaxOrderByAggregateInput
    _min?: JobTitleVersionMinOrderByAggregateInput
    _sum?: JobTitleVersionSumOrderByAggregateInput
  }

  export type JobTitleVersionScalarWhereWithAggregatesInput = {
    AND?: JobTitleVersionScalarWhereWithAggregatesInput | JobTitleVersionScalarWhereWithAggregatesInput[]
    OR?: JobTitleVersionScalarWhereWithAggregatesInput[]
    NOT?: JobTitleVersionScalarWhereWithAggregatesInput | JobTitleVersionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobTitleVersion"> | string
    jobTitleId?: StringWithAggregatesFilter<"JobTitleVersion"> | string
    version?: IntWithAggregatesFilter<"JobTitleVersion"> | number
    salary?: DecimalWithAggregatesFilter<"JobTitleVersion"> | Decimal | DecimalJsLike | number | string
    requirements?: StringNullableWithAggregatesFilter<"JobTitleVersion"> | string | null
    effectiveFrom?: DateTimeWithAggregatesFilter<"JobTitleVersion"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"JobTitleVersion"> | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    tradingName: string
    legalName: string
    taxId: string
    email: string
    phone?: string | null
    industry: $Enums.Industry
    segment: $Enums.Segment
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    branches?: BranchCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    tradingName: string
    legalName: string
    taxId: string
    email: string
    phone?: string | null
    industry: $Enums.Industry
    segment: $Enums.Segment
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    branches?: BranchUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradingName?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    segment?: EnumSegmentFieldUpdateOperationsInput | $Enums.Segment
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branches?: BranchUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradingName?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    segment?: EnumSegmentFieldUpdateOperationsInput | $Enums.Segment
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branches?: BranchUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    tradingName: string
    legalName: string
    taxId: string
    email: string
    phone?: string | null
    industry: $Enums.Industry
    segment: $Enums.Segment
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradingName?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    segment?: EnumSegmentFieldUpdateOperationsInput | $Enums.Segment
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradingName?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    segment?: EnumSegmentFieldUpdateOperationsInput | $Enums.Segment
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutBranchesInput
    departments?: DepartmentCreateNestedManyWithoutBranchInput
    Employee?: EmployeeCreateNestedManyWithoutBranchInput
    JobTitle?: JobTitleCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
    departments?: DepartmentUncheckedCreateNestedManyWithoutBranchInput
    Employee?: EmployeeUncheckedCreateNestedManyWithoutBranchInput
    JobTitle?: JobTitleUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutBranchesNestedInput
    departments?: DepartmentUpdateManyWithoutBranchNestedInput
    Employee?: EmployeeUpdateManyWithoutBranchNestedInput
    JobTitle?: JobTitleUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
    departments?: DepartmentUncheckedUpdateManyWithoutBranchNestedInput
    Employee?: EmployeeUncheckedUpdateManyWithoutBranchNestedInput
    JobTitle?: JobTitleUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
  }

  export type BranchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Branch?: BranchCreateNestedOneWithoutDepartmentsInput
    Employee?: EmployeeCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: string
    name: string
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Employee?: EmployeeUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Branch?: BranchUpdateOneWithoutDepartmentsNestedInput
    Employee?: EmployeeUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Employee?: EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: string
    name: string
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    employmentType?: $Enums.EmploymentType
    status?: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    jobTitleVersion: JobTitleVersionCreateNestedOneWithoutEmployeeInput
    branch: BranchCreateNestedOneWithoutEmployeeInput
    department: DepartmentCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    departmentId: string
    branchId: string
    jobTitleVersionId: string
    employmentType?: $Enums.EmploymentType
    status?: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitleVersion?: JobTitleVersionUpdateOneRequiredWithoutEmployeeNestedInput
    branch?: BranchUpdateOneRequiredWithoutEmployeeNestedInput
    department?: DepartmentUpdateOneRequiredWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    jobTitleVersionId?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    departmentId: string
    branchId: string
    jobTitleVersionId: string
    employmentType?: $Enums.EmploymentType
    status?: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    jobTitleVersionId?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobTitleCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutJobTitleInput
    currentVersion?: JobTitleVersionCreateNestedOneWithoutUsedAsCurrentInInput
    versions?: JobTitleVersionCreateNestedManyWithoutJobTitleInput
  }

  export type JobTitleUncheckedCreateInput = {
    id?: string
    name: string
    branchId: string
    currentVersionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: JobTitleVersionUncheckedCreateNestedManyWithoutJobTitleInput
  }

  export type JobTitleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutJobTitleNestedInput
    currentVersion?: JobTitleVersionUpdateOneWithoutUsedAsCurrentInNestedInput
    versions?: JobTitleVersionUpdateManyWithoutJobTitleNestedInput
  }

  export type JobTitleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    currentVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: JobTitleVersionUncheckedUpdateManyWithoutJobTitleNestedInput
  }

  export type JobTitleCreateManyInput = {
    id?: string
    name: string
    branchId: string
    currentVersionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobTitleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobTitleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    currentVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobTitleVersionCreateInput = {
    id?: string
    version?: number
    salary: Decimal | DecimalJsLike | number | string
    requirements?: string | null
    effectiveFrom?: Date | string
    createdAt?: Date | string
    jobTitle: JobTitleCreateNestedOneWithoutVersionsInput
    usedAsCurrentIn?: JobTitleCreateNestedOneWithoutCurrentVersionInput
    Employee?: EmployeeCreateNestedManyWithoutJobTitleVersionInput
  }

  export type JobTitleVersionUncheckedCreateInput = {
    id?: string
    jobTitleId: string
    version?: number
    salary: Decimal | DecimalJsLike | number | string
    requirements?: string | null
    effectiveFrom?: Date | string
    createdAt?: Date | string
    usedAsCurrentIn?: JobTitleUncheckedCreateNestedOneWithoutCurrentVersionInput
    Employee?: EmployeeUncheckedCreateNestedManyWithoutJobTitleVersionInput
  }

  export type JobTitleVersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: JobTitleUpdateOneRequiredWithoutVersionsNestedInput
    usedAsCurrentIn?: JobTitleUpdateOneWithoutCurrentVersionNestedInput
    Employee?: EmployeeUpdateManyWithoutJobTitleVersionNestedInput
  }

  export type JobTitleVersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobTitleId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAsCurrentIn?: JobTitleUncheckedUpdateOneWithoutCurrentVersionNestedInput
    Employee?: EmployeeUncheckedUpdateManyWithoutJobTitleVersionNestedInput
  }

  export type JobTitleVersionCreateManyInput = {
    id?: string
    jobTitleId: string
    version?: number
    salary: Decimal | DecimalJsLike | number | string
    requirements?: string | null
    effectiveFrom?: Date | string
    createdAt?: Date | string
  }

  export type JobTitleVersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobTitleVersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobTitleId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumIndustryFilter<$PrismaModel = never> = {
    equals?: $Enums.Industry | EnumIndustryFieldRefInput<$PrismaModel>
    in?: $Enums.Industry[] | ListEnumIndustryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Industry[] | ListEnumIndustryFieldRefInput<$PrismaModel>
    not?: NestedEnumIndustryFilter<$PrismaModel> | $Enums.Industry
  }

  export type EnumSegmentFilter<$PrismaModel = never> = {
    equals?: $Enums.Segment | EnumSegmentFieldRefInput<$PrismaModel>
    in?: $Enums.Segment[] | ListEnumSegmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Segment[] | ListEnumSegmentFieldRefInput<$PrismaModel>
    not?: NestedEnumSegmentFilter<$PrismaModel> | $Enums.Segment
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BranchListRelationFilter = {
    every?: BranchWhereInput
    some?: BranchWhereInput
    none?: BranchWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BranchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyLegalNameTaxIdCompoundUniqueInput = {
    legalName: string
    taxId: string
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    tradingName?: SortOrder
    legalName?: SortOrder
    taxId?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    industry?: SortOrder
    segment?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    tradingName?: SortOrder
    legalName?: SortOrder
    taxId?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    industry?: SortOrder
    segment?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    tradingName?: SortOrder
    legalName?: SortOrder
    taxId?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    industry?: SortOrder
    segment?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumIndustryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Industry | EnumIndustryFieldRefInput<$PrismaModel>
    in?: $Enums.Industry[] | ListEnumIndustryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Industry[] | ListEnumIndustryFieldRefInput<$PrismaModel>
    not?: NestedEnumIndustryWithAggregatesFilter<$PrismaModel> | $Enums.Industry
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIndustryFilter<$PrismaModel>
    _max?: NestedEnumIndustryFilter<$PrismaModel>
  }

  export type EnumSegmentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Segment | EnumSegmentFieldRefInput<$PrismaModel>
    in?: $Enums.Segment[] | ListEnumSegmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Segment[] | ListEnumSegmentFieldRefInput<$PrismaModel>
    not?: NestedEnumSegmentWithAggregatesFilter<$PrismaModel> | $Enums.Segment
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSegmentFilter<$PrismaModel>
    _max?: NestedEnumSegmentFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type DepartmentListRelationFilter = {
    every?: DepartmentWhereInput
    some?: DepartmentWhereInput
    none?: DepartmentWhereInput
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type JobTitleListRelationFilter = {
    every?: JobTitleWhereInput
    some?: JobTitleWhereInput
    none?: JobTitleWhereInput
  }

  export type DepartmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobTitleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BranchNameCompanyIdCompoundUniqueInput = {
    name: string
    companyId: string
  }

  export type BranchCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type BranchMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type BranchMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type BranchNullableScalarRelationFilter = {
    is?: BranchWhereInput | null
    isNot?: BranchWhereInput | null
  }

  export type DepartmentNameBranchIdCompoundUniqueInput = {
    name: string
    branchId: string
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumEmploymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentTypeFilter<$PrismaModel> | $Enums.EmploymentType
  }

  export type EnumEmployeeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeStatus | EnumEmployeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeStatusFilter<$PrismaModel> | $Enums.EmployeeStatus
  }

  export type JobTitleVersionScalarRelationFilter = {
    is?: JobTitleVersionWhereInput
    isNot?: JobTitleVersionWhereInput
  }

  export type BranchScalarRelationFilter = {
    is?: BranchWhereInput
    isNot?: BranchWhereInput
  }

  export type DepartmentScalarRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    departmentId?: SortOrder
    branchId?: SortOrder
    jobTitleVersionId?: SortOrder
    employmentType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    departmentId?: SortOrder
    branchId?: SortOrder
    jobTitleVersionId?: SortOrder
    employmentType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    departmentId?: SortOrder
    branchId?: SortOrder
    jobTitleVersionId?: SortOrder
    employmentType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumEmploymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmploymentTypeFilter<$PrismaModel>
    _max?: NestedEnumEmploymentTypeFilter<$PrismaModel>
  }

  export type EnumEmployeeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeStatus | EnumEmployeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmployeeStatusFilter<$PrismaModel>
    _max?: NestedEnumEmployeeStatusFilter<$PrismaModel>
  }

  export type JobTitleVersionNullableScalarRelationFilter = {
    is?: JobTitleVersionWhereInput | null
    isNot?: JobTitleVersionWhereInput | null
  }

  export type JobTitleVersionListRelationFilter = {
    every?: JobTitleVersionWhereInput
    some?: JobTitleVersionWhereInput
    none?: JobTitleVersionWhereInput
  }

  export type JobTitleVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobTitleNameBranchIdCompoundUniqueInput = {
    name: string
    branchId: string
  }

  export type JobTitleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
    currentVersionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobTitleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
    currentVersionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobTitleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
    currentVersionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type JobTitleScalarRelationFilter = {
    is?: JobTitleWhereInput
    isNot?: JobTitleWhereInput
  }

  export type JobTitleNullableScalarRelationFilter = {
    is?: JobTitleWhereInput | null
    isNot?: JobTitleWhereInput | null
  }

  export type JobTitleVersionJobTitleIdVersionCompoundUniqueInput = {
    jobTitleId: string
    version: number
  }

  export type JobTitleVersionCountOrderByAggregateInput = {
    id?: SortOrder
    jobTitleId?: SortOrder
    version?: SortOrder
    salary?: SortOrder
    requirements?: SortOrder
    effectiveFrom?: SortOrder
    createdAt?: SortOrder
  }

  export type JobTitleVersionAvgOrderByAggregateInput = {
    version?: SortOrder
    salary?: SortOrder
  }

  export type JobTitleVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    jobTitleId?: SortOrder
    version?: SortOrder
    salary?: SortOrder
    requirements?: SortOrder
    effectiveFrom?: SortOrder
    createdAt?: SortOrder
  }

  export type JobTitleVersionMinOrderByAggregateInput = {
    id?: SortOrder
    jobTitleId?: SortOrder
    version?: SortOrder
    salary?: SortOrder
    requirements?: SortOrder
    effectiveFrom?: SortOrder
    createdAt?: SortOrder
  }

  export type JobTitleVersionSumOrderByAggregateInput = {
    version?: SortOrder
    salary?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BranchCreateNestedManyWithoutCompanyInput = {
    create?: XOR<BranchCreateWithoutCompanyInput, BranchUncheckedCreateWithoutCompanyInput> | BranchCreateWithoutCompanyInput[] | BranchUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutCompanyInput | BranchCreateOrConnectWithoutCompanyInput[]
    createMany?: BranchCreateManyCompanyInputEnvelope
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
  }

  export type BranchUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<BranchCreateWithoutCompanyInput, BranchUncheckedCreateWithoutCompanyInput> | BranchCreateWithoutCompanyInput[] | BranchUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutCompanyInput | BranchCreateOrConnectWithoutCompanyInput[]
    createMany?: BranchCreateManyCompanyInputEnvelope
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumIndustryFieldUpdateOperationsInput = {
    set?: $Enums.Industry
  }

  export type EnumSegmentFieldUpdateOperationsInput = {
    set?: $Enums.Segment
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BranchUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<BranchCreateWithoutCompanyInput, BranchUncheckedCreateWithoutCompanyInput> | BranchCreateWithoutCompanyInput[] | BranchUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutCompanyInput | BranchCreateOrConnectWithoutCompanyInput[]
    upsert?: BranchUpsertWithWhereUniqueWithoutCompanyInput | BranchUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: BranchCreateManyCompanyInputEnvelope
    set?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    disconnect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    delete?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    update?: BranchUpdateWithWhereUniqueWithoutCompanyInput | BranchUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: BranchUpdateManyWithWhereWithoutCompanyInput | BranchUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: BranchScalarWhereInput | BranchScalarWhereInput[]
  }

  export type BranchUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<BranchCreateWithoutCompanyInput, BranchUncheckedCreateWithoutCompanyInput> | BranchCreateWithoutCompanyInput[] | BranchUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutCompanyInput | BranchCreateOrConnectWithoutCompanyInput[]
    upsert?: BranchUpsertWithWhereUniqueWithoutCompanyInput | BranchUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: BranchCreateManyCompanyInputEnvelope
    set?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    disconnect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    delete?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    update?: BranchUpdateWithWhereUniqueWithoutCompanyInput | BranchUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: BranchUpdateManyWithWhereWithoutCompanyInput | BranchUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: BranchScalarWhereInput | BranchScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutBranchesInput = {
    create?: XOR<CompanyCreateWithoutBranchesInput, CompanyUncheckedCreateWithoutBranchesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutBranchesInput
    connect?: CompanyWhereUniqueInput
  }

  export type DepartmentCreateNestedManyWithoutBranchInput = {
    create?: XOR<DepartmentCreateWithoutBranchInput, DepartmentUncheckedCreateWithoutBranchInput> | DepartmentCreateWithoutBranchInput[] | DepartmentUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutBranchInput | DepartmentCreateOrConnectWithoutBranchInput[]
    createMany?: DepartmentCreateManyBranchInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type EmployeeCreateNestedManyWithoutBranchInput = {
    create?: XOR<EmployeeCreateWithoutBranchInput, EmployeeUncheckedCreateWithoutBranchInput> | EmployeeCreateWithoutBranchInput[] | EmployeeUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutBranchInput | EmployeeCreateOrConnectWithoutBranchInput[]
    createMany?: EmployeeCreateManyBranchInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type JobTitleCreateNestedManyWithoutBranchInput = {
    create?: XOR<JobTitleCreateWithoutBranchInput, JobTitleUncheckedCreateWithoutBranchInput> | JobTitleCreateWithoutBranchInput[] | JobTitleUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: JobTitleCreateOrConnectWithoutBranchInput | JobTitleCreateOrConnectWithoutBranchInput[]
    createMany?: JobTitleCreateManyBranchInputEnvelope
    connect?: JobTitleWhereUniqueInput | JobTitleWhereUniqueInput[]
  }

  export type DepartmentUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<DepartmentCreateWithoutBranchInput, DepartmentUncheckedCreateWithoutBranchInput> | DepartmentCreateWithoutBranchInput[] | DepartmentUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutBranchInput | DepartmentCreateOrConnectWithoutBranchInput[]
    createMany?: DepartmentCreateManyBranchInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<EmployeeCreateWithoutBranchInput, EmployeeUncheckedCreateWithoutBranchInput> | EmployeeCreateWithoutBranchInput[] | EmployeeUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutBranchInput | EmployeeCreateOrConnectWithoutBranchInput[]
    createMany?: EmployeeCreateManyBranchInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type JobTitleUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<JobTitleCreateWithoutBranchInput, JobTitleUncheckedCreateWithoutBranchInput> | JobTitleCreateWithoutBranchInput[] | JobTitleUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: JobTitleCreateOrConnectWithoutBranchInput | JobTitleCreateOrConnectWithoutBranchInput[]
    createMany?: JobTitleCreateManyBranchInputEnvelope
    connect?: JobTitleWhereUniqueInput | JobTitleWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutBranchesNestedInput = {
    create?: XOR<CompanyCreateWithoutBranchesInput, CompanyUncheckedCreateWithoutBranchesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutBranchesInput
    upsert?: CompanyUpsertWithoutBranchesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutBranchesInput, CompanyUpdateWithoutBranchesInput>, CompanyUncheckedUpdateWithoutBranchesInput>
  }

  export type DepartmentUpdateManyWithoutBranchNestedInput = {
    create?: XOR<DepartmentCreateWithoutBranchInput, DepartmentUncheckedCreateWithoutBranchInput> | DepartmentCreateWithoutBranchInput[] | DepartmentUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutBranchInput | DepartmentCreateOrConnectWithoutBranchInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutBranchInput | DepartmentUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: DepartmentCreateManyBranchInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutBranchInput | DepartmentUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutBranchInput | DepartmentUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type EmployeeUpdateManyWithoutBranchNestedInput = {
    create?: XOR<EmployeeCreateWithoutBranchInput, EmployeeUncheckedCreateWithoutBranchInput> | EmployeeCreateWithoutBranchInput[] | EmployeeUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutBranchInput | EmployeeCreateOrConnectWithoutBranchInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutBranchInput | EmployeeUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: EmployeeCreateManyBranchInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutBranchInput | EmployeeUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutBranchInput | EmployeeUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type JobTitleUpdateManyWithoutBranchNestedInput = {
    create?: XOR<JobTitleCreateWithoutBranchInput, JobTitleUncheckedCreateWithoutBranchInput> | JobTitleCreateWithoutBranchInput[] | JobTitleUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: JobTitleCreateOrConnectWithoutBranchInput | JobTitleCreateOrConnectWithoutBranchInput[]
    upsert?: JobTitleUpsertWithWhereUniqueWithoutBranchInput | JobTitleUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: JobTitleCreateManyBranchInputEnvelope
    set?: JobTitleWhereUniqueInput | JobTitleWhereUniqueInput[]
    disconnect?: JobTitleWhereUniqueInput | JobTitleWhereUniqueInput[]
    delete?: JobTitleWhereUniqueInput | JobTitleWhereUniqueInput[]
    connect?: JobTitleWhereUniqueInput | JobTitleWhereUniqueInput[]
    update?: JobTitleUpdateWithWhereUniqueWithoutBranchInput | JobTitleUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: JobTitleUpdateManyWithWhereWithoutBranchInput | JobTitleUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: JobTitleScalarWhereInput | JobTitleScalarWhereInput[]
  }

  export type DepartmentUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<DepartmentCreateWithoutBranchInput, DepartmentUncheckedCreateWithoutBranchInput> | DepartmentCreateWithoutBranchInput[] | DepartmentUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutBranchInput | DepartmentCreateOrConnectWithoutBranchInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutBranchInput | DepartmentUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: DepartmentCreateManyBranchInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutBranchInput | DepartmentUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutBranchInput | DepartmentUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<EmployeeCreateWithoutBranchInput, EmployeeUncheckedCreateWithoutBranchInput> | EmployeeCreateWithoutBranchInput[] | EmployeeUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutBranchInput | EmployeeCreateOrConnectWithoutBranchInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutBranchInput | EmployeeUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: EmployeeCreateManyBranchInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutBranchInput | EmployeeUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutBranchInput | EmployeeUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type JobTitleUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<JobTitleCreateWithoutBranchInput, JobTitleUncheckedCreateWithoutBranchInput> | JobTitleCreateWithoutBranchInput[] | JobTitleUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: JobTitleCreateOrConnectWithoutBranchInput | JobTitleCreateOrConnectWithoutBranchInput[]
    upsert?: JobTitleUpsertWithWhereUniqueWithoutBranchInput | JobTitleUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: JobTitleCreateManyBranchInputEnvelope
    set?: JobTitleWhereUniqueInput | JobTitleWhereUniqueInput[]
    disconnect?: JobTitleWhereUniqueInput | JobTitleWhereUniqueInput[]
    delete?: JobTitleWhereUniqueInput | JobTitleWhereUniqueInput[]
    connect?: JobTitleWhereUniqueInput | JobTitleWhereUniqueInput[]
    update?: JobTitleUpdateWithWhereUniqueWithoutBranchInput | JobTitleUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: JobTitleUpdateManyWithWhereWithoutBranchInput | JobTitleUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: JobTitleScalarWhereInput | JobTitleScalarWhereInput[]
  }

  export type BranchCreateNestedOneWithoutDepartmentsInput = {
    create?: XOR<BranchCreateWithoutDepartmentsInput, BranchUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutDepartmentsInput
    connect?: BranchWhereUniqueInput
  }

  export type EmployeeCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type BranchUpdateOneWithoutDepartmentsNestedInput = {
    create?: XOR<BranchCreateWithoutDepartmentsInput, BranchUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutDepartmentsInput
    upsert?: BranchUpsertWithoutDepartmentsInput
    disconnect?: BranchWhereInput | boolean
    delete?: BranchWhereInput | boolean
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutDepartmentsInput, BranchUpdateWithoutDepartmentsInput>, BranchUncheckedUpdateWithoutDepartmentsInput>
  }

  export type EmployeeUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutDepartmentInput | EmployeeUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutDepartmentInput | EmployeeUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutDepartmentInput | EmployeeUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutDepartmentInput | EmployeeUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutDepartmentInput | EmployeeUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutDepartmentInput | EmployeeUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type JobTitleVersionCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<JobTitleVersionCreateWithoutEmployeeInput, JobTitleVersionUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: JobTitleVersionCreateOrConnectWithoutEmployeeInput
    connect?: JobTitleVersionWhereUniqueInput
  }

  export type BranchCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<BranchCreateWithoutEmployeeInput, BranchUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: BranchCreateOrConnectWithoutEmployeeInput
    connect?: BranchWhereUniqueInput
  }

  export type DepartmentCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<DepartmentCreateWithoutEmployeeInput, DepartmentUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutEmployeeInput
    connect?: DepartmentWhereUniqueInput
  }

  export type EnumEmploymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.EmploymentType
  }

  export type EnumEmployeeStatusFieldUpdateOperationsInput = {
    set?: $Enums.EmployeeStatus
  }

  export type JobTitleVersionUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<JobTitleVersionCreateWithoutEmployeeInput, JobTitleVersionUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: JobTitleVersionCreateOrConnectWithoutEmployeeInput
    upsert?: JobTitleVersionUpsertWithoutEmployeeInput
    connect?: JobTitleVersionWhereUniqueInput
    update?: XOR<XOR<JobTitleVersionUpdateToOneWithWhereWithoutEmployeeInput, JobTitleVersionUpdateWithoutEmployeeInput>, JobTitleVersionUncheckedUpdateWithoutEmployeeInput>
  }

  export type BranchUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<BranchCreateWithoutEmployeeInput, BranchUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: BranchCreateOrConnectWithoutEmployeeInput
    upsert?: BranchUpsertWithoutEmployeeInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutEmployeeInput, BranchUpdateWithoutEmployeeInput>, BranchUncheckedUpdateWithoutEmployeeInput>
  }

  export type DepartmentUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<DepartmentCreateWithoutEmployeeInput, DepartmentUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutEmployeeInput
    upsert?: DepartmentUpsertWithoutEmployeeInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutEmployeeInput, DepartmentUpdateWithoutEmployeeInput>, DepartmentUncheckedUpdateWithoutEmployeeInput>
  }

  export type BranchCreateNestedOneWithoutJobTitleInput = {
    create?: XOR<BranchCreateWithoutJobTitleInput, BranchUncheckedCreateWithoutJobTitleInput>
    connectOrCreate?: BranchCreateOrConnectWithoutJobTitleInput
    connect?: BranchWhereUniqueInput
  }

  export type JobTitleVersionCreateNestedOneWithoutUsedAsCurrentInInput = {
    create?: XOR<JobTitleVersionCreateWithoutUsedAsCurrentInInput, JobTitleVersionUncheckedCreateWithoutUsedAsCurrentInInput>
    connectOrCreate?: JobTitleVersionCreateOrConnectWithoutUsedAsCurrentInInput
    connect?: JobTitleVersionWhereUniqueInput
  }

  export type JobTitleVersionCreateNestedManyWithoutJobTitleInput = {
    create?: XOR<JobTitleVersionCreateWithoutJobTitleInput, JobTitleVersionUncheckedCreateWithoutJobTitleInput> | JobTitleVersionCreateWithoutJobTitleInput[] | JobTitleVersionUncheckedCreateWithoutJobTitleInput[]
    connectOrCreate?: JobTitleVersionCreateOrConnectWithoutJobTitleInput | JobTitleVersionCreateOrConnectWithoutJobTitleInput[]
    createMany?: JobTitleVersionCreateManyJobTitleInputEnvelope
    connect?: JobTitleVersionWhereUniqueInput | JobTitleVersionWhereUniqueInput[]
  }

  export type JobTitleVersionUncheckedCreateNestedManyWithoutJobTitleInput = {
    create?: XOR<JobTitleVersionCreateWithoutJobTitleInput, JobTitleVersionUncheckedCreateWithoutJobTitleInput> | JobTitleVersionCreateWithoutJobTitleInput[] | JobTitleVersionUncheckedCreateWithoutJobTitleInput[]
    connectOrCreate?: JobTitleVersionCreateOrConnectWithoutJobTitleInput | JobTitleVersionCreateOrConnectWithoutJobTitleInput[]
    createMany?: JobTitleVersionCreateManyJobTitleInputEnvelope
    connect?: JobTitleVersionWhereUniqueInput | JobTitleVersionWhereUniqueInput[]
  }

  export type BranchUpdateOneRequiredWithoutJobTitleNestedInput = {
    create?: XOR<BranchCreateWithoutJobTitleInput, BranchUncheckedCreateWithoutJobTitleInput>
    connectOrCreate?: BranchCreateOrConnectWithoutJobTitleInput
    upsert?: BranchUpsertWithoutJobTitleInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutJobTitleInput, BranchUpdateWithoutJobTitleInput>, BranchUncheckedUpdateWithoutJobTitleInput>
  }

  export type JobTitleVersionUpdateOneWithoutUsedAsCurrentInNestedInput = {
    create?: XOR<JobTitleVersionCreateWithoutUsedAsCurrentInInput, JobTitleVersionUncheckedCreateWithoutUsedAsCurrentInInput>
    connectOrCreate?: JobTitleVersionCreateOrConnectWithoutUsedAsCurrentInInput
    upsert?: JobTitleVersionUpsertWithoutUsedAsCurrentInInput
    disconnect?: JobTitleVersionWhereInput | boolean
    delete?: JobTitleVersionWhereInput | boolean
    connect?: JobTitleVersionWhereUniqueInput
    update?: XOR<XOR<JobTitleVersionUpdateToOneWithWhereWithoutUsedAsCurrentInInput, JobTitleVersionUpdateWithoutUsedAsCurrentInInput>, JobTitleVersionUncheckedUpdateWithoutUsedAsCurrentInInput>
  }

  export type JobTitleVersionUpdateManyWithoutJobTitleNestedInput = {
    create?: XOR<JobTitleVersionCreateWithoutJobTitleInput, JobTitleVersionUncheckedCreateWithoutJobTitleInput> | JobTitleVersionCreateWithoutJobTitleInput[] | JobTitleVersionUncheckedCreateWithoutJobTitleInput[]
    connectOrCreate?: JobTitleVersionCreateOrConnectWithoutJobTitleInput | JobTitleVersionCreateOrConnectWithoutJobTitleInput[]
    upsert?: JobTitleVersionUpsertWithWhereUniqueWithoutJobTitleInput | JobTitleVersionUpsertWithWhereUniqueWithoutJobTitleInput[]
    createMany?: JobTitleVersionCreateManyJobTitleInputEnvelope
    set?: JobTitleVersionWhereUniqueInput | JobTitleVersionWhereUniqueInput[]
    disconnect?: JobTitleVersionWhereUniqueInput | JobTitleVersionWhereUniqueInput[]
    delete?: JobTitleVersionWhereUniqueInput | JobTitleVersionWhereUniqueInput[]
    connect?: JobTitleVersionWhereUniqueInput | JobTitleVersionWhereUniqueInput[]
    update?: JobTitleVersionUpdateWithWhereUniqueWithoutJobTitleInput | JobTitleVersionUpdateWithWhereUniqueWithoutJobTitleInput[]
    updateMany?: JobTitleVersionUpdateManyWithWhereWithoutJobTitleInput | JobTitleVersionUpdateManyWithWhereWithoutJobTitleInput[]
    deleteMany?: JobTitleVersionScalarWhereInput | JobTitleVersionScalarWhereInput[]
  }

  export type JobTitleVersionUncheckedUpdateManyWithoutJobTitleNestedInput = {
    create?: XOR<JobTitleVersionCreateWithoutJobTitleInput, JobTitleVersionUncheckedCreateWithoutJobTitleInput> | JobTitleVersionCreateWithoutJobTitleInput[] | JobTitleVersionUncheckedCreateWithoutJobTitleInput[]
    connectOrCreate?: JobTitleVersionCreateOrConnectWithoutJobTitleInput | JobTitleVersionCreateOrConnectWithoutJobTitleInput[]
    upsert?: JobTitleVersionUpsertWithWhereUniqueWithoutJobTitleInput | JobTitleVersionUpsertWithWhereUniqueWithoutJobTitleInput[]
    createMany?: JobTitleVersionCreateManyJobTitleInputEnvelope
    set?: JobTitleVersionWhereUniqueInput | JobTitleVersionWhereUniqueInput[]
    disconnect?: JobTitleVersionWhereUniqueInput | JobTitleVersionWhereUniqueInput[]
    delete?: JobTitleVersionWhereUniqueInput | JobTitleVersionWhereUniqueInput[]
    connect?: JobTitleVersionWhereUniqueInput | JobTitleVersionWhereUniqueInput[]
    update?: JobTitleVersionUpdateWithWhereUniqueWithoutJobTitleInput | JobTitleVersionUpdateWithWhereUniqueWithoutJobTitleInput[]
    updateMany?: JobTitleVersionUpdateManyWithWhereWithoutJobTitleInput | JobTitleVersionUpdateManyWithWhereWithoutJobTitleInput[]
    deleteMany?: JobTitleVersionScalarWhereInput | JobTitleVersionScalarWhereInput[]
  }

  export type JobTitleCreateNestedOneWithoutVersionsInput = {
    create?: XOR<JobTitleCreateWithoutVersionsInput, JobTitleUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: JobTitleCreateOrConnectWithoutVersionsInput
    connect?: JobTitleWhereUniqueInput
  }

  export type JobTitleCreateNestedOneWithoutCurrentVersionInput = {
    create?: XOR<JobTitleCreateWithoutCurrentVersionInput, JobTitleUncheckedCreateWithoutCurrentVersionInput>
    connectOrCreate?: JobTitleCreateOrConnectWithoutCurrentVersionInput
    connect?: JobTitleWhereUniqueInput
  }

  export type EmployeeCreateNestedManyWithoutJobTitleVersionInput = {
    create?: XOR<EmployeeCreateWithoutJobTitleVersionInput, EmployeeUncheckedCreateWithoutJobTitleVersionInput> | EmployeeCreateWithoutJobTitleVersionInput[] | EmployeeUncheckedCreateWithoutJobTitleVersionInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutJobTitleVersionInput | EmployeeCreateOrConnectWithoutJobTitleVersionInput[]
    createMany?: EmployeeCreateManyJobTitleVersionInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type JobTitleUncheckedCreateNestedOneWithoutCurrentVersionInput = {
    create?: XOR<JobTitleCreateWithoutCurrentVersionInput, JobTitleUncheckedCreateWithoutCurrentVersionInput>
    connectOrCreate?: JobTitleCreateOrConnectWithoutCurrentVersionInput
    connect?: JobTitleWhereUniqueInput
  }

  export type EmployeeUncheckedCreateNestedManyWithoutJobTitleVersionInput = {
    create?: XOR<EmployeeCreateWithoutJobTitleVersionInput, EmployeeUncheckedCreateWithoutJobTitleVersionInput> | EmployeeCreateWithoutJobTitleVersionInput[] | EmployeeUncheckedCreateWithoutJobTitleVersionInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutJobTitleVersionInput | EmployeeCreateOrConnectWithoutJobTitleVersionInput[]
    createMany?: EmployeeCreateManyJobTitleVersionInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type JobTitleUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<JobTitleCreateWithoutVersionsInput, JobTitleUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: JobTitleCreateOrConnectWithoutVersionsInput
    upsert?: JobTitleUpsertWithoutVersionsInput
    connect?: JobTitleWhereUniqueInput
    update?: XOR<XOR<JobTitleUpdateToOneWithWhereWithoutVersionsInput, JobTitleUpdateWithoutVersionsInput>, JobTitleUncheckedUpdateWithoutVersionsInput>
  }

  export type JobTitleUpdateOneWithoutCurrentVersionNestedInput = {
    create?: XOR<JobTitleCreateWithoutCurrentVersionInput, JobTitleUncheckedCreateWithoutCurrentVersionInput>
    connectOrCreate?: JobTitleCreateOrConnectWithoutCurrentVersionInput
    upsert?: JobTitleUpsertWithoutCurrentVersionInput
    disconnect?: JobTitleWhereInput | boolean
    delete?: JobTitleWhereInput | boolean
    connect?: JobTitleWhereUniqueInput
    update?: XOR<XOR<JobTitleUpdateToOneWithWhereWithoutCurrentVersionInput, JobTitleUpdateWithoutCurrentVersionInput>, JobTitleUncheckedUpdateWithoutCurrentVersionInput>
  }

  export type EmployeeUpdateManyWithoutJobTitleVersionNestedInput = {
    create?: XOR<EmployeeCreateWithoutJobTitleVersionInput, EmployeeUncheckedCreateWithoutJobTitleVersionInput> | EmployeeCreateWithoutJobTitleVersionInput[] | EmployeeUncheckedCreateWithoutJobTitleVersionInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutJobTitleVersionInput | EmployeeCreateOrConnectWithoutJobTitleVersionInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutJobTitleVersionInput | EmployeeUpsertWithWhereUniqueWithoutJobTitleVersionInput[]
    createMany?: EmployeeCreateManyJobTitleVersionInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutJobTitleVersionInput | EmployeeUpdateWithWhereUniqueWithoutJobTitleVersionInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutJobTitleVersionInput | EmployeeUpdateManyWithWhereWithoutJobTitleVersionInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type JobTitleUncheckedUpdateOneWithoutCurrentVersionNestedInput = {
    create?: XOR<JobTitleCreateWithoutCurrentVersionInput, JobTitleUncheckedCreateWithoutCurrentVersionInput>
    connectOrCreate?: JobTitleCreateOrConnectWithoutCurrentVersionInput
    upsert?: JobTitleUpsertWithoutCurrentVersionInput
    disconnect?: JobTitleWhereInput | boolean
    delete?: JobTitleWhereInput | boolean
    connect?: JobTitleWhereUniqueInput
    update?: XOR<XOR<JobTitleUpdateToOneWithWhereWithoutCurrentVersionInput, JobTitleUpdateWithoutCurrentVersionInput>, JobTitleUncheckedUpdateWithoutCurrentVersionInput>
  }

  export type EmployeeUncheckedUpdateManyWithoutJobTitleVersionNestedInput = {
    create?: XOR<EmployeeCreateWithoutJobTitleVersionInput, EmployeeUncheckedCreateWithoutJobTitleVersionInput> | EmployeeCreateWithoutJobTitleVersionInput[] | EmployeeUncheckedCreateWithoutJobTitleVersionInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutJobTitleVersionInput | EmployeeCreateOrConnectWithoutJobTitleVersionInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutJobTitleVersionInput | EmployeeUpsertWithWhereUniqueWithoutJobTitleVersionInput[]
    createMany?: EmployeeCreateManyJobTitleVersionInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutJobTitleVersionInput | EmployeeUpdateWithWhereUniqueWithoutJobTitleVersionInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutJobTitleVersionInput | EmployeeUpdateManyWithWhereWithoutJobTitleVersionInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumIndustryFilter<$PrismaModel = never> = {
    equals?: $Enums.Industry | EnumIndustryFieldRefInput<$PrismaModel>
    in?: $Enums.Industry[] | ListEnumIndustryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Industry[] | ListEnumIndustryFieldRefInput<$PrismaModel>
    not?: NestedEnumIndustryFilter<$PrismaModel> | $Enums.Industry
  }

  export type NestedEnumSegmentFilter<$PrismaModel = never> = {
    equals?: $Enums.Segment | EnumSegmentFieldRefInput<$PrismaModel>
    in?: $Enums.Segment[] | ListEnumSegmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Segment[] | ListEnumSegmentFieldRefInput<$PrismaModel>
    not?: NestedEnumSegmentFilter<$PrismaModel> | $Enums.Segment
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumIndustryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Industry | EnumIndustryFieldRefInput<$PrismaModel>
    in?: $Enums.Industry[] | ListEnumIndustryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Industry[] | ListEnumIndustryFieldRefInput<$PrismaModel>
    not?: NestedEnumIndustryWithAggregatesFilter<$PrismaModel> | $Enums.Industry
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIndustryFilter<$PrismaModel>
    _max?: NestedEnumIndustryFilter<$PrismaModel>
  }

  export type NestedEnumSegmentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Segment | EnumSegmentFieldRefInput<$PrismaModel>
    in?: $Enums.Segment[] | ListEnumSegmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Segment[] | ListEnumSegmentFieldRefInput<$PrismaModel>
    not?: NestedEnumSegmentWithAggregatesFilter<$PrismaModel> | $Enums.Segment
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSegmentFilter<$PrismaModel>
    _max?: NestedEnumSegmentFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumEmploymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentTypeFilter<$PrismaModel> | $Enums.EmploymentType
  }

  export type NestedEnumEmployeeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeStatus | EnumEmployeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeStatusFilter<$PrismaModel> | $Enums.EmployeeStatus
  }

  export type NestedEnumEmploymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmploymentTypeFilter<$PrismaModel>
    _max?: NestedEnumEmploymentTypeFilter<$PrismaModel>
  }

  export type NestedEnumEmployeeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeStatus | EnumEmployeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmployeeStatusFilter<$PrismaModel>
    _max?: NestedEnumEmployeeStatusFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BranchCreateWithoutCompanyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentCreateNestedManyWithoutBranchInput
    Employee?: EmployeeCreateNestedManyWithoutBranchInput
    JobTitle?: JobTitleCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentUncheckedCreateNestedManyWithoutBranchInput
    Employee?: EmployeeUncheckedCreateNestedManyWithoutBranchInput
    JobTitle?: JobTitleUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutCompanyInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutCompanyInput, BranchUncheckedCreateWithoutCompanyInput>
  }

  export type BranchCreateManyCompanyInputEnvelope = {
    data: BranchCreateManyCompanyInput | BranchCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type BranchUpsertWithWhereUniqueWithoutCompanyInput = {
    where: BranchWhereUniqueInput
    update: XOR<BranchUpdateWithoutCompanyInput, BranchUncheckedUpdateWithoutCompanyInput>
    create: XOR<BranchCreateWithoutCompanyInput, BranchUncheckedCreateWithoutCompanyInput>
  }

  export type BranchUpdateWithWhereUniqueWithoutCompanyInput = {
    where: BranchWhereUniqueInput
    data: XOR<BranchUpdateWithoutCompanyInput, BranchUncheckedUpdateWithoutCompanyInput>
  }

  export type BranchUpdateManyWithWhereWithoutCompanyInput = {
    where: BranchScalarWhereInput
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyWithoutCompanyInput>
  }

  export type BranchScalarWhereInput = {
    AND?: BranchScalarWhereInput | BranchScalarWhereInput[]
    OR?: BranchScalarWhereInput[]
    NOT?: BranchScalarWhereInput | BranchScalarWhereInput[]
    id?: StringFilter<"Branch"> | string
    name?: StringFilter<"Branch"> | string
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
    companyId?: StringFilter<"Branch"> | string
  }

  export type CompanyCreateWithoutBranchesInput = {
    id?: string
    tradingName: string
    legalName: string
    taxId: string
    email: string
    phone?: string | null
    industry: $Enums.Industry
    segment: $Enums.Segment
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUncheckedCreateWithoutBranchesInput = {
    id?: string
    tradingName: string
    legalName: string
    taxId: string
    email: string
    phone?: string | null
    industry: $Enums.Industry
    segment: $Enums.Segment
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyCreateOrConnectWithoutBranchesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutBranchesInput, CompanyUncheckedCreateWithoutBranchesInput>
  }

  export type DepartmentCreateWithoutBranchInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Employee?: EmployeeCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutBranchInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Employee?: EmployeeUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutBranchInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutBranchInput, DepartmentUncheckedCreateWithoutBranchInput>
  }

  export type DepartmentCreateManyBranchInputEnvelope = {
    data: DepartmentCreateManyBranchInput | DepartmentCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeCreateWithoutBranchInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    employmentType?: $Enums.EmploymentType
    status?: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    jobTitleVersion: JobTitleVersionCreateNestedOneWithoutEmployeeInput
    department: DepartmentCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutBranchInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    departmentId: string
    jobTitleVersionId: string
    employmentType?: $Enums.EmploymentType
    status?: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeCreateOrConnectWithoutBranchInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutBranchInput, EmployeeUncheckedCreateWithoutBranchInput>
  }

  export type EmployeeCreateManyBranchInputEnvelope = {
    data: EmployeeCreateManyBranchInput | EmployeeCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type JobTitleCreateWithoutBranchInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    currentVersion?: JobTitleVersionCreateNestedOneWithoutUsedAsCurrentInInput
    versions?: JobTitleVersionCreateNestedManyWithoutJobTitleInput
  }

  export type JobTitleUncheckedCreateWithoutBranchInput = {
    id?: string
    name: string
    currentVersionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: JobTitleVersionUncheckedCreateNestedManyWithoutJobTitleInput
  }

  export type JobTitleCreateOrConnectWithoutBranchInput = {
    where: JobTitleWhereUniqueInput
    create: XOR<JobTitleCreateWithoutBranchInput, JobTitleUncheckedCreateWithoutBranchInput>
  }

  export type JobTitleCreateManyBranchInputEnvelope = {
    data: JobTitleCreateManyBranchInput | JobTitleCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutBranchesInput = {
    update: XOR<CompanyUpdateWithoutBranchesInput, CompanyUncheckedUpdateWithoutBranchesInput>
    create: XOR<CompanyCreateWithoutBranchesInput, CompanyUncheckedCreateWithoutBranchesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutBranchesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutBranchesInput, CompanyUncheckedUpdateWithoutBranchesInput>
  }

  export type CompanyUpdateWithoutBranchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradingName?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    segment?: EnumSegmentFieldUpdateOperationsInput | $Enums.Segment
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateWithoutBranchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradingName?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    segment?: EnumSegmentFieldUpdateOperationsInput | $Enums.Segment
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUpsertWithWhereUniqueWithoutBranchInput = {
    where: DepartmentWhereUniqueInput
    update: XOR<DepartmentUpdateWithoutBranchInput, DepartmentUncheckedUpdateWithoutBranchInput>
    create: XOR<DepartmentCreateWithoutBranchInput, DepartmentUncheckedCreateWithoutBranchInput>
  }

  export type DepartmentUpdateWithWhereUniqueWithoutBranchInput = {
    where: DepartmentWhereUniqueInput
    data: XOR<DepartmentUpdateWithoutBranchInput, DepartmentUncheckedUpdateWithoutBranchInput>
  }

  export type DepartmentUpdateManyWithWhereWithoutBranchInput = {
    where: DepartmentScalarWhereInput
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyWithoutBranchInput>
  }

  export type DepartmentScalarWhereInput = {
    AND?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    OR?: DepartmentScalarWhereInput[]
    NOT?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    branchId?: StringNullableFilter<"Department"> | string | null
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
  }

  export type EmployeeUpsertWithWhereUniqueWithoutBranchInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutBranchInput, EmployeeUncheckedUpdateWithoutBranchInput>
    create: XOR<EmployeeCreateWithoutBranchInput, EmployeeUncheckedCreateWithoutBranchInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutBranchInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutBranchInput, EmployeeUncheckedUpdateWithoutBranchInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutBranchInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutBranchInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    id?: StringFilter<"Employee"> | string
    name?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
    phone?: StringNullableFilter<"Employee"> | string | null
    departmentId?: StringFilter<"Employee"> | string
    branchId?: StringFilter<"Employee"> | string
    jobTitleVersionId?: StringFilter<"Employee"> | string
    employmentType?: EnumEmploymentTypeFilter<"Employee"> | $Enums.EmploymentType
    status?: EnumEmployeeStatusFilter<"Employee"> | $Enums.EmployeeStatus
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
  }

  export type JobTitleUpsertWithWhereUniqueWithoutBranchInput = {
    where: JobTitleWhereUniqueInput
    update: XOR<JobTitleUpdateWithoutBranchInput, JobTitleUncheckedUpdateWithoutBranchInput>
    create: XOR<JobTitleCreateWithoutBranchInput, JobTitleUncheckedCreateWithoutBranchInput>
  }

  export type JobTitleUpdateWithWhereUniqueWithoutBranchInput = {
    where: JobTitleWhereUniqueInput
    data: XOR<JobTitleUpdateWithoutBranchInput, JobTitleUncheckedUpdateWithoutBranchInput>
  }

  export type JobTitleUpdateManyWithWhereWithoutBranchInput = {
    where: JobTitleScalarWhereInput
    data: XOR<JobTitleUpdateManyMutationInput, JobTitleUncheckedUpdateManyWithoutBranchInput>
  }

  export type JobTitleScalarWhereInput = {
    AND?: JobTitleScalarWhereInput | JobTitleScalarWhereInput[]
    OR?: JobTitleScalarWhereInput[]
    NOT?: JobTitleScalarWhereInput | JobTitleScalarWhereInput[]
    id?: StringFilter<"JobTitle"> | string
    name?: StringFilter<"JobTitle"> | string
    branchId?: StringFilter<"JobTitle"> | string
    currentVersionId?: StringNullableFilter<"JobTitle"> | string | null
    createdAt?: DateTimeFilter<"JobTitle"> | Date | string
    updatedAt?: DateTimeFilter<"JobTitle"> | Date | string
  }

  export type BranchCreateWithoutDepartmentsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutBranchesInput
    Employee?: EmployeeCreateNestedManyWithoutBranchInput
    JobTitle?: JobTitleCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutDepartmentsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
    Employee?: EmployeeUncheckedCreateNestedManyWithoutBranchInput
    JobTitle?: JobTitleUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutDepartmentsInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutDepartmentsInput, BranchUncheckedCreateWithoutDepartmentsInput>
  }

  export type EmployeeCreateWithoutDepartmentInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    employmentType?: $Enums.EmploymentType
    status?: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    jobTitleVersion: JobTitleVersionCreateNestedOneWithoutEmployeeInput
    branch: BranchCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutDepartmentInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    branchId: string
    jobTitleVersionId: string
    employmentType?: $Enums.EmploymentType
    status?: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeCreateOrConnectWithoutDepartmentInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput>
  }

  export type EmployeeCreateManyDepartmentInputEnvelope = {
    data: EmployeeCreateManyDepartmentInput | EmployeeCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type BranchUpsertWithoutDepartmentsInput = {
    update: XOR<BranchUpdateWithoutDepartmentsInput, BranchUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<BranchCreateWithoutDepartmentsInput, BranchUncheckedCreateWithoutDepartmentsInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutDepartmentsInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutDepartmentsInput, BranchUncheckedUpdateWithoutDepartmentsInput>
  }

  export type BranchUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutBranchesNestedInput
    Employee?: EmployeeUpdateManyWithoutBranchNestedInput
    JobTitle?: JobTitleUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
    Employee?: EmployeeUncheckedUpdateManyWithoutBranchNestedInput
    JobTitle?: JobTitleUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type EmployeeUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutDepartmentInput, EmployeeUncheckedUpdateWithoutDepartmentInput>
    create: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutDepartmentInput, EmployeeUncheckedUpdateWithoutDepartmentInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutDepartmentInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type JobTitleVersionCreateWithoutEmployeeInput = {
    id?: string
    version?: number
    salary: Decimal | DecimalJsLike | number | string
    requirements?: string | null
    effectiveFrom?: Date | string
    createdAt?: Date | string
    jobTitle: JobTitleCreateNestedOneWithoutVersionsInput
    usedAsCurrentIn?: JobTitleCreateNestedOneWithoutCurrentVersionInput
  }

  export type JobTitleVersionUncheckedCreateWithoutEmployeeInput = {
    id?: string
    jobTitleId: string
    version?: number
    salary: Decimal | DecimalJsLike | number | string
    requirements?: string | null
    effectiveFrom?: Date | string
    createdAt?: Date | string
    usedAsCurrentIn?: JobTitleUncheckedCreateNestedOneWithoutCurrentVersionInput
  }

  export type JobTitleVersionCreateOrConnectWithoutEmployeeInput = {
    where: JobTitleVersionWhereUniqueInput
    create: XOR<JobTitleVersionCreateWithoutEmployeeInput, JobTitleVersionUncheckedCreateWithoutEmployeeInput>
  }

  export type BranchCreateWithoutEmployeeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutBranchesInput
    departments?: DepartmentCreateNestedManyWithoutBranchInput
    JobTitle?: JobTitleCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutEmployeeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
    departments?: DepartmentUncheckedCreateNestedManyWithoutBranchInput
    JobTitle?: JobTitleUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutEmployeeInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutEmployeeInput, BranchUncheckedCreateWithoutEmployeeInput>
  }

  export type DepartmentCreateWithoutEmployeeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Branch?: BranchCreateNestedOneWithoutDepartmentsInput
  }

  export type DepartmentUncheckedCreateWithoutEmployeeInput = {
    id?: string
    name: string
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentCreateOrConnectWithoutEmployeeInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutEmployeeInput, DepartmentUncheckedCreateWithoutEmployeeInput>
  }

  export type JobTitleVersionUpsertWithoutEmployeeInput = {
    update: XOR<JobTitleVersionUpdateWithoutEmployeeInput, JobTitleVersionUncheckedUpdateWithoutEmployeeInput>
    create: XOR<JobTitleVersionCreateWithoutEmployeeInput, JobTitleVersionUncheckedCreateWithoutEmployeeInput>
    where?: JobTitleVersionWhereInput
  }

  export type JobTitleVersionUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: JobTitleVersionWhereInput
    data: XOR<JobTitleVersionUpdateWithoutEmployeeInput, JobTitleVersionUncheckedUpdateWithoutEmployeeInput>
  }

  export type JobTitleVersionUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: JobTitleUpdateOneRequiredWithoutVersionsNestedInput
    usedAsCurrentIn?: JobTitleUpdateOneWithoutCurrentVersionNestedInput
  }

  export type JobTitleVersionUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobTitleId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAsCurrentIn?: JobTitleUncheckedUpdateOneWithoutCurrentVersionNestedInput
  }

  export type BranchUpsertWithoutEmployeeInput = {
    update: XOR<BranchUpdateWithoutEmployeeInput, BranchUncheckedUpdateWithoutEmployeeInput>
    create: XOR<BranchCreateWithoutEmployeeInput, BranchUncheckedCreateWithoutEmployeeInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutEmployeeInput, BranchUncheckedUpdateWithoutEmployeeInput>
  }

  export type BranchUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutBranchesNestedInput
    departments?: DepartmentUpdateManyWithoutBranchNestedInput
    JobTitle?: JobTitleUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
    departments?: DepartmentUncheckedUpdateManyWithoutBranchNestedInput
    JobTitle?: JobTitleUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type DepartmentUpsertWithoutEmployeeInput = {
    update: XOR<DepartmentUpdateWithoutEmployeeInput, DepartmentUncheckedUpdateWithoutEmployeeInput>
    create: XOR<DepartmentCreateWithoutEmployeeInput, DepartmentUncheckedCreateWithoutEmployeeInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutEmployeeInput, DepartmentUncheckedUpdateWithoutEmployeeInput>
  }

  export type DepartmentUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Branch?: BranchUpdateOneWithoutDepartmentsNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchCreateWithoutJobTitleInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutBranchesInput
    departments?: DepartmentCreateNestedManyWithoutBranchInput
    Employee?: EmployeeCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutJobTitleInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
    departments?: DepartmentUncheckedCreateNestedManyWithoutBranchInput
    Employee?: EmployeeUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutJobTitleInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutJobTitleInput, BranchUncheckedCreateWithoutJobTitleInput>
  }

  export type JobTitleVersionCreateWithoutUsedAsCurrentInInput = {
    id?: string
    version?: number
    salary: Decimal | DecimalJsLike | number | string
    requirements?: string | null
    effectiveFrom?: Date | string
    createdAt?: Date | string
    jobTitle: JobTitleCreateNestedOneWithoutVersionsInput
    Employee?: EmployeeCreateNestedManyWithoutJobTitleVersionInput
  }

  export type JobTitleVersionUncheckedCreateWithoutUsedAsCurrentInInput = {
    id?: string
    jobTitleId: string
    version?: number
    salary: Decimal | DecimalJsLike | number | string
    requirements?: string | null
    effectiveFrom?: Date | string
    createdAt?: Date | string
    Employee?: EmployeeUncheckedCreateNestedManyWithoutJobTitleVersionInput
  }

  export type JobTitleVersionCreateOrConnectWithoutUsedAsCurrentInInput = {
    where: JobTitleVersionWhereUniqueInput
    create: XOR<JobTitleVersionCreateWithoutUsedAsCurrentInInput, JobTitleVersionUncheckedCreateWithoutUsedAsCurrentInInput>
  }

  export type JobTitleVersionCreateWithoutJobTitleInput = {
    id?: string
    version?: number
    salary: Decimal | DecimalJsLike | number | string
    requirements?: string | null
    effectiveFrom?: Date | string
    createdAt?: Date | string
    usedAsCurrentIn?: JobTitleCreateNestedOneWithoutCurrentVersionInput
    Employee?: EmployeeCreateNestedManyWithoutJobTitleVersionInput
  }

  export type JobTitleVersionUncheckedCreateWithoutJobTitleInput = {
    id?: string
    version?: number
    salary: Decimal | DecimalJsLike | number | string
    requirements?: string | null
    effectiveFrom?: Date | string
    createdAt?: Date | string
    usedAsCurrentIn?: JobTitleUncheckedCreateNestedOneWithoutCurrentVersionInput
    Employee?: EmployeeUncheckedCreateNestedManyWithoutJobTitleVersionInput
  }

  export type JobTitleVersionCreateOrConnectWithoutJobTitleInput = {
    where: JobTitleVersionWhereUniqueInput
    create: XOR<JobTitleVersionCreateWithoutJobTitleInput, JobTitleVersionUncheckedCreateWithoutJobTitleInput>
  }

  export type JobTitleVersionCreateManyJobTitleInputEnvelope = {
    data: JobTitleVersionCreateManyJobTitleInput | JobTitleVersionCreateManyJobTitleInput[]
    skipDuplicates?: boolean
  }

  export type BranchUpsertWithoutJobTitleInput = {
    update: XOR<BranchUpdateWithoutJobTitleInput, BranchUncheckedUpdateWithoutJobTitleInput>
    create: XOR<BranchCreateWithoutJobTitleInput, BranchUncheckedCreateWithoutJobTitleInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutJobTitleInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutJobTitleInput, BranchUncheckedUpdateWithoutJobTitleInput>
  }

  export type BranchUpdateWithoutJobTitleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutBranchesNestedInput
    departments?: DepartmentUpdateManyWithoutBranchNestedInput
    Employee?: EmployeeUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutJobTitleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
    departments?: DepartmentUncheckedUpdateManyWithoutBranchNestedInput
    Employee?: EmployeeUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type JobTitleVersionUpsertWithoutUsedAsCurrentInInput = {
    update: XOR<JobTitleVersionUpdateWithoutUsedAsCurrentInInput, JobTitleVersionUncheckedUpdateWithoutUsedAsCurrentInInput>
    create: XOR<JobTitleVersionCreateWithoutUsedAsCurrentInInput, JobTitleVersionUncheckedCreateWithoutUsedAsCurrentInInput>
    where?: JobTitleVersionWhereInput
  }

  export type JobTitleVersionUpdateToOneWithWhereWithoutUsedAsCurrentInInput = {
    where?: JobTitleVersionWhereInput
    data: XOR<JobTitleVersionUpdateWithoutUsedAsCurrentInInput, JobTitleVersionUncheckedUpdateWithoutUsedAsCurrentInInput>
  }

  export type JobTitleVersionUpdateWithoutUsedAsCurrentInInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: JobTitleUpdateOneRequiredWithoutVersionsNestedInput
    Employee?: EmployeeUpdateManyWithoutJobTitleVersionNestedInput
  }

  export type JobTitleVersionUncheckedUpdateWithoutUsedAsCurrentInInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobTitleId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Employee?: EmployeeUncheckedUpdateManyWithoutJobTitleVersionNestedInput
  }

  export type JobTitleVersionUpsertWithWhereUniqueWithoutJobTitleInput = {
    where: JobTitleVersionWhereUniqueInput
    update: XOR<JobTitleVersionUpdateWithoutJobTitleInput, JobTitleVersionUncheckedUpdateWithoutJobTitleInput>
    create: XOR<JobTitleVersionCreateWithoutJobTitleInput, JobTitleVersionUncheckedCreateWithoutJobTitleInput>
  }

  export type JobTitleVersionUpdateWithWhereUniqueWithoutJobTitleInput = {
    where: JobTitleVersionWhereUniqueInput
    data: XOR<JobTitleVersionUpdateWithoutJobTitleInput, JobTitleVersionUncheckedUpdateWithoutJobTitleInput>
  }

  export type JobTitleVersionUpdateManyWithWhereWithoutJobTitleInput = {
    where: JobTitleVersionScalarWhereInput
    data: XOR<JobTitleVersionUpdateManyMutationInput, JobTitleVersionUncheckedUpdateManyWithoutJobTitleInput>
  }

  export type JobTitleVersionScalarWhereInput = {
    AND?: JobTitleVersionScalarWhereInput | JobTitleVersionScalarWhereInput[]
    OR?: JobTitleVersionScalarWhereInput[]
    NOT?: JobTitleVersionScalarWhereInput | JobTitleVersionScalarWhereInput[]
    id?: StringFilter<"JobTitleVersion"> | string
    jobTitleId?: StringFilter<"JobTitleVersion"> | string
    version?: IntFilter<"JobTitleVersion"> | number
    salary?: DecimalFilter<"JobTitleVersion"> | Decimal | DecimalJsLike | number | string
    requirements?: StringNullableFilter<"JobTitleVersion"> | string | null
    effectiveFrom?: DateTimeFilter<"JobTitleVersion"> | Date | string
    createdAt?: DateTimeFilter<"JobTitleVersion"> | Date | string
  }

  export type JobTitleCreateWithoutVersionsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutJobTitleInput
    currentVersion?: JobTitleVersionCreateNestedOneWithoutUsedAsCurrentInInput
  }

  export type JobTitleUncheckedCreateWithoutVersionsInput = {
    id?: string
    name: string
    branchId: string
    currentVersionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobTitleCreateOrConnectWithoutVersionsInput = {
    where: JobTitleWhereUniqueInput
    create: XOR<JobTitleCreateWithoutVersionsInput, JobTitleUncheckedCreateWithoutVersionsInput>
  }

  export type JobTitleCreateWithoutCurrentVersionInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutJobTitleInput
    versions?: JobTitleVersionCreateNestedManyWithoutJobTitleInput
  }

  export type JobTitleUncheckedCreateWithoutCurrentVersionInput = {
    id?: string
    name: string
    branchId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: JobTitleVersionUncheckedCreateNestedManyWithoutJobTitleInput
  }

  export type JobTitleCreateOrConnectWithoutCurrentVersionInput = {
    where: JobTitleWhereUniqueInput
    create: XOR<JobTitleCreateWithoutCurrentVersionInput, JobTitleUncheckedCreateWithoutCurrentVersionInput>
  }

  export type EmployeeCreateWithoutJobTitleVersionInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    employmentType?: $Enums.EmploymentType
    status?: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutEmployeeInput
    department: DepartmentCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutJobTitleVersionInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    departmentId: string
    branchId: string
    employmentType?: $Enums.EmploymentType
    status?: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeCreateOrConnectWithoutJobTitleVersionInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutJobTitleVersionInput, EmployeeUncheckedCreateWithoutJobTitleVersionInput>
  }

  export type EmployeeCreateManyJobTitleVersionInputEnvelope = {
    data: EmployeeCreateManyJobTitleVersionInput | EmployeeCreateManyJobTitleVersionInput[]
    skipDuplicates?: boolean
  }

  export type JobTitleUpsertWithoutVersionsInput = {
    update: XOR<JobTitleUpdateWithoutVersionsInput, JobTitleUncheckedUpdateWithoutVersionsInput>
    create: XOR<JobTitleCreateWithoutVersionsInput, JobTitleUncheckedCreateWithoutVersionsInput>
    where?: JobTitleWhereInput
  }

  export type JobTitleUpdateToOneWithWhereWithoutVersionsInput = {
    where?: JobTitleWhereInput
    data: XOR<JobTitleUpdateWithoutVersionsInput, JobTitleUncheckedUpdateWithoutVersionsInput>
  }

  export type JobTitleUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutJobTitleNestedInput
    currentVersion?: JobTitleVersionUpdateOneWithoutUsedAsCurrentInNestedInput
  }

  export type JobTitleUncheckedUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    currentVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobTitleUpsertWithoutCurrentVersionInput = {
    update: XOR<JobTitleUpdateWithoutCurrentVersionInput, JobTitleUncheckedUpdateWithoutCurrentVersionInput>
    create: XOR<JobTitleCreateWithoutCurrentVersionInput, JobTitleUncheckedCreateWithoutCurrentVersionInput>
    where?: JobTitleWhereInput
  }

  export type JobTitleUpdateToOneWithWhereWithoutCurrentVersionInput = {
    where?: JobTitleWhereInput
    data: XOR<JobTitleUpdateWithoutCurrentVersionInput, JobTitleUncheckedUpdateWithoutCurrentVersionInput>
  }

  export type JobTitleUpdateWithoutCurrentVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutJobTitleNestedInput
    versions?: JobTitleVersionUpdateManyWithoutJobTitleNestedInput
  }

  export type JobTitleUncheckedUpdateWithoutCurrentVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: JobTitleVersionUncheckedUpdateManyWithoutJobTitleNestedInput
  }

  export type EmployeeUpsertWithWhereUniqueWithoutJobTitleVersionInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutJobTitleVersionInput, EmployeeUncheckedUpdateWithoutJobTitleVersionInput>
    create: XOR<EmployeeCreateWithoutJobTitleVersionInput, EmployeeUncheckedCreateWithoutJobTitleVersionInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutJobTitleVersionInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutJobTitleVersionInput, EmployeeUncheckedUpdateWithoutJobTitleVersionInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutJobTitleVersionInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutJobTitleVersionInput>
  }

  export type BranchCreateManyCompanyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BranchUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUpdateManyWithoutBranchNestedInput
    Employee?: EmployeeUpdateManyWithoutBranchNestedInput
    JobTitle?: JobTitleUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUncheckedUpdateManyWithoutBranchNestedInput
    Employee?: EmployeeUncheckedUpdateManyWithoutBranchNestedInput
    JobTitle?: JobTitleUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateManyBranchInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeCreateManyBranchInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    departmentId: string
    jobTitleVersionId: string
    employmentType?: $Enums.EmploymentType
    status?: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobTitleCreateManyBranchInput = {
    id?: string
    name: string
    currentVersionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Employee?: EmployeeUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Employee?: EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitleVersion?: JobTitleVersionUpdateOneRequiredWithoutEmployeeNestedInput
    department?: DepartmentUpdateOneRequiredWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: StringFieldUpdateOperationsInput | string
    jobTitleVersionId?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: StringFieldUpdateOperationsInput | string
    jobTitleVersionId?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobTitleUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentVersion?: JobTitleVersionUpdateOneWithoutUsedAsCurrentInNestedInput
    versions?: JobTitleVersionUpdateManyWithoutJobTitleNestedInput
  }

  export type JobTitleUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: JobTitleVersionUncheckedUpdateManyWithoutJobTitleNestedInput
  }

  export type JobTitleUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateManyDepartmentInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    branchId: string
    jobTitleVersionId: string
    employmentType?: $Enums.EmploymentType
    status?: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitleVersion?: JobTitleVersionUpdateOneRequiredWithoutEmployeeNestedInput
    branch?: BranchUpdateOneRequiredWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: StringFieldUpdateOperationsInput | string
    jobTitleVersionId?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: StringFieldUpdateOperationsInput | string
    jobTitleVersionId?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobTitleVersionCreateManyJobTitleInput = {
    id?: string
    version?: number
    salary: Decimal | DecimalJsLike | number | string
    requirements?: string | null
    effectiveFrom?: Date | string
    createdAt?: Date | string
  }

  export type JobTitleVersionUpdateWithoutJobTitleInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAsCurrentIn?: JobTitleUpdateOneWithoutCurrentVersionNestedInput
    Employee?: EmployeeUpdateManyWithoutJobTitleVersionNestedInput
  }

  export type JobTitleVersionUncheckedUpdateWithoutJobTitleInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAsCurrentIn?: JobTitleUncheckedUpdateOneWithoutCurrentVersionNestedInput
    Employee?: EmployeeUncheckedUpdateManyWithoutJobTitleVersionNestedInput
  }

  export type JobTitleVersionUncheckedUpdateManyWithoutJobTitleInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateManyJobTitleVersionInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    departmentId: string
    branchId: string
    employmentType?: $Enums.EmploymentType
    status?: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateWithoutJobTitleVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutEmployeeNestedInput
    department?: DepartmentUpdateOneRequiredWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutJobTitleVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyWithoutJobTitleVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}