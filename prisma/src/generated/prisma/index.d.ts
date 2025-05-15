
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Institution
 * 
 */
export type Institution = $Result.DefaultSelection<Prisma.$InstitutionPayload>
/**
 * Model ServiceAssignment
 * 
 */
export type ServiceAssignment = $Result.DefaultSelection<Prisma.$ServiceAssignmentPayload>
/**
 * Model WorkPlan
 * 
 */
export type WorkPlan = $Result.DefaultSelection<Prisma.$WorkPlanPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model HoursLog
 * 
 */
export type HoursLog = $Result.DefaultSelection<Prisma.$HoursLogPayload>
/**
 * Model Incident
 * 
 */
export type Incident = $Result.DefaultSelection<Prisma.$IncidentPayload>
/**
 * Model IncidentMessage
 * 
 */
export type IncidentMessage = $Result.DefaultSelection<Prisma.$IncidentMessagePayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const service_status: {
  PENDIENTE: 'PENDIENTE',
  ACTIVO: 'ACTIVO',
  FINALIZADO: 'FINALIZADO',
  CANCELADO: 'CANCELADO'
};

export type service_status = (typeof service_status)[keyof typeof service_status]


export const plan_status: {
  PENDIENTE: 'PENDIENTE',
  APROBADO: 'APROBADO',
  RECHAZADO: 'RECHAZADO'
};

export type plan_status = (typeof plan_status)[keyof typeof plan_status]


export const document_type: {
  CARTA_PRESENTACION: 'CARTA_PRESENTACION',
  CARTA_ACEPTACION: 'CARTA_ACEPTACION',
  CARTA_TERMINACION: 'CARTA_TERMINACION',
  CONSTANCIA_LIBERACION: 'CONSTANCIA_LIBERACION'
};

export type document_type = (typeof document_type)[keyof typeof document_type]


export const report_type: {
  MENSUAL: 'MENSUAL',
  BIMESTRAL: 'BIMESTRAL',
  FINAL: 'FINAL'
};

export type report_type = (typeof report_type)[keyof typeof report_type]


export const report_status: {
  ENVIADO: 'ENVIADO',
  VALIDADO: 'VALIDADO',
  RECHAZADO: 'RECHAZADO'
};

export type report_status = (typeof report_status)[keyof typeof report_status]


export const incident_status: {
  ABIERTA: 'ABIERTA',
  EN_PROCESO: 'EN_PROCESO',
  RESUELTA: 'RESUELTA',
  CERRADA: 'CERRADA'
};

export type incident_status = (typeof incident_status)[keyof typeof incident_status]


export const task_status: {
  PENDIENTE: 'PENDIENTE',
  ENTREGADA: 'ENTREGADA',
  REVISADA: 'REVISADA'
};

export type task_status = (typeof task_status)[keyof typeof task_status]

}

export type service_status = $Enums.service_status

export const service_status: typeof $Enums.service_status

export type plan_status = $Enums.plan_status

export const plan_status: typeof $Enums.plan_status

export type document_type = $Enums.document_type

export const document_type: typeof $Enums.document_type

export type report_type = $Enums.report_type

export const report_type: typeof $Enums.report_type

export type report_status = $Enums.report_status

export const report_status: typeof $Enums.report_status

export type incident_status = $Enums.incident_status

export const incident_status: typeof $Enums.incident_status

export type task_status = $Enums.task_status

export const task_status: typeof $Enums.task_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.institution`: Exposes CRUD operations for the **Institution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Institutions
    * const institutions = await prisma.institution.findMany()
    * ```
    */
  get institution(): Prisma.InstitutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceAssignment`: Exposes CRUD operations for the **ServiceAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceAssignments
    * const serviceAssignments = await prisma.serviceAssignment.findMany()
    * ```
    */
  get serviceAssignment(): Prisma.ServiceAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workPlan`: Exposes CRUD operations for the **WorkPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkPlans
    * const workPlans = await prisma.workPlan.findMany()
    * ```
    */
  get workPlan(): Prisma.WorkPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hoursLog`: Exposes CRUD operations for the **HoursLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HoursLogs
    * const hoursLogs = await prisma.hoursLog.findMany()
    * ```
    */
  get hoursLog(): Prisma.HoursLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incident`: Exposes CRUD operations for the **Incident** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incidents
    * const incidents = await prisma.incident.findMany()
    * ```
    */
  get incident(): Prisma.IncidentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incidentMessage`: Exposes CRUD operations for the **IncidentMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IncidentMessages
    * const incidentMessages = await prisma.incidentMessage.findMany()
    * ```
    */
  get incidentMessage(): Prisma.IncidentMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    Student: 'Student',
    Institution: 'Institution',
    ServiceAssignment: 'ServiceAssignment',
    WorkPlan: 'WorkPlan',
    Document: 'Document',
    Report: 'Report',
    HoursLog: 'HoursLog',
    Incident: 'Incident',
    IncidentMessage: 'IncidentMessage',
    Task: 'Task'
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
      modelProps: "user" | "student" | "institution" | "serviceAssignment" | "workPlan" | "document" | "report" | "hoursLog" | "incident" | "incidentMessage" | "task"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Institution: {
        payload: Prisma.$InstitutionPayload<ExtArgs>
        fields: Prisma.InstitutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstitutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstitutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          findFirst: {
            args: Prisma.InstitutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstitutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          findMany: {
            args: Prisma.InstitutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>[]
          }
          create: {
            args: Prisma.InstitutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          createMany: {
            args: Prisma.InstitutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstitutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>[]
          }
          delete: {
            args: Prisma.InstitutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          update: {
            args: Prisma.InstitutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          deleteMany: {
            args: Prisma.InstitutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstitutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstitutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>[]
          }
          upsert: {
            args: Prisma.InstitutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          aggregate: {
            args: Prisma.InstitutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstitution>
          }
          groupBy: {
            args: Prisma.InstitutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstitutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstitutionCountArgs<ExtArgs>
            result: $Utils.Optional<InstitutionCountAggregateOutputType> | number
          }
        }
      }
      ServiceAssignment: {
        payload: Prisma.$ServiceAssignmentPayload<ExtArgs>
        fields: Prisma.ServiceAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAssignmentPayload>
          }
          findFirst: {
            args: Prisma.ServiceAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAssignmentPayload>
          }
          findMany: {
            args: Prisma.ServiceAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAssignmentPayload>[]
          }
          create: {
            args: Prisma.ServiceAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAssignmentPayload>
          }
          createMany: {
            args: Prisma.ServiceAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAssignmentPayload>[]
          }
          delete: {
            args: Prisma.ServiceAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAssignmentPayload>
          }
          update: {
            args: Prisma.ServiceAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.ServiceAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.ServiceAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAssignmentPayload>
          }
          aggregate: {
            args: Prisma.ServiceAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceAssignment>
          }
          groupBy: {
            args: Prisma.ServiceAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceAssignmentCountAggregateOutputType> | number
          }
        }
      }
      WorkPlan: {
        payload: Prisma.$WorkPlanPayload<ExtArgs>
        fields: Prisma.WorkPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPlanPayload>
          }
          findFirst: {
            args: Prisma.WorkPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPlanPayload>
          }
          findMany: {
            args: Prisma.WorkPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPlanPayload>[]
          }
          create: {
            args: Prisma.WorkPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPlanPayload>
          }
          createMany: {
            args: Prisma.WorkPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPlanPayload>[]
          }
          delete: {
            args: Prisma.WorkPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPlanPayload>
          }
          update: {
            args: Prisma.WorkPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPlanPayload>
          }
          deleteMany: {
            args: Prisma.WorkPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPlanPayload>[]
          }
          upsert: {
            args: Prisma.WorkPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPlanPayload>
          }
          aggregate: {
            args: Prisma.WorkPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkPlan>
          }
          groupBy: {
            args: Prisma.WorkPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkPlanCountArgs<ExtArgs>
            result: $Utils.Optional<WorkPlanCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      HoursLog: {
        payload: Prisma.$HoursLogPayload<ExtArgs>
        fields: Prisma.HoursLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HoursLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoursLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HoursLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoursLogPayload>
          }
          findFirst: {
            args: Prisma.HoursLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoursLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HoursLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoursLogPayload>
          }
          findMany: {
            args: Prisma.HoursLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoursLogPayload>[]
          }
          create: {
            args: Prisma.HoursLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoursLogPayload>
          }
          createMany: {
            args: Prisma.HoursLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HoursLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoursLogPayload>[]
          }
          delete: {
            args: Prisma.HoursLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoursLogPayload>
          }
          update: {
            args: Prisma.HoursLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoursLogPayload>
          }
          deleteMany: {
            args: Prisma.HoursLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HoursLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HoursLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoursLogPayload>[]
          }
          upsert: {
            args: Prisma.HoursLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoursLogPayload>
          }
          aggregate: {
            args: Prisma.HoursLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHoursLog>
          }
          groupBy: {
            args: Prisma.HoursLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<HoursLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.HoursLogCountArgs<ExtArgs>
            result: $Utils.Optional<HoursLogCountAggregateOutputType> | number
          }
        }
      }
      Incident: {
        payload: Prisma.$IncidentPayload<ExtArgs>
        fields: Prisma.IncidentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findFirst: {
            args: Prisma.IncidentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findMany: {
            args: Prisma.IncidentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          create: {
            args: Prisma.IncidentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          createMany: {
            args: Prisma.IncidentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncidentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          delete: {
            args: Prisma.IncidentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          update: {
            args: Prisma.IncidentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          deleteMany: {
            args: Prisma.IncidentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncidentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          upsert: {
            args: Prisma.IncidentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          aggregate: {
            args: Prisma.IncidentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncident>
          }
          groupBy: {
            args: Prisma.IncidentGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidentCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentCountAggregateOutputType> | number
          }
        }
      }
      IncidentMessage: {
        payload: Prisma.$IncidentMessagePayload<ExtArgs>
        fields: Prisma.IncidentMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentMessagePayload>
          }
          findFirst: {
            args: Prisma.IncidentMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentMessagePayload>
          }
          findMany: {
            args: Prisma.IncidentMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentMessagePayload>[]
          }
          create: {
            args: Prisma.IncidentMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentMessagePayload>
          }
          createMany: {
            args: Prisma.IncidentMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncidentMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentMessagePayload>[]
          }
          delete: {
            args: Prisma.IncidentMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentMessagePayload>
          }
          update: {
            args: Prisma.IncidentMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentMessagePayload>
          }
          deleteMany: {
            args: Prisma.IncidentMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncidentMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentMessagePayload>[]
          }
          upsert: {
            args: Prisma.IncidentMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentMessagePayload>
          }
          aggregate: {
            args: Prisma.IncidentMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncidentMessage>
          }
          groupBy: {
            args: Prisma.IncidentMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidentMessageCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentMessageCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
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
    user?: UserOmit
    student?: StudentOmit
    institution?: InstitutionOmit
    serviceAssignment?: ServiceAssignmentOmit
    workPlan?: WorkPlanOmit
    document?: DocumentOmit
    report?: ReportOmit
    hoursLog?: HoursLogOmit
    incident?: IncidentOmit
    incidentMessage?: IncidentMessageOmit
    task?: TaskOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    institutions: number
    incidentsReported: number
    incidentsResolved: number
    documents: number
    reportsValid: number
    tasksReviewed: number
    IncidentMessage: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institutions?: boolean | UserCountOutputTypeCountInstitutionsArgs
    incidentsReported?: boolean | UserCountOutputTypeCountIncidentsReportedArgs
    incidentsResolved?: boolean | UserCountOutputTypeCountIncidentsResolvedArgs
    documents?: boolean | UserCountOutputTypeCountDocumentsArgs
    reportsValid?: boolean | UserCountOutputTypeCountReportsValidArgs
    tasksReviewed?: boolean | UserCountOutputTypeCountTasksReviewedArgs
    IncidentMessage?: boolean | UserCountOutputTypeCountIncidentMessageArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInstitutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstitutionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIncidentsReportedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIncidentsResolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReportsValidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksReviewedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIncidentMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentMessageWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    assignments: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | StudentCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceAssignmentWhereInput
  }


  /**
   * Count Type InstitutionCountOutputType
   */

  export type InstitutionCountOutputType = {
    assignments: number
  }

  export type InstitutionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | InstitutionCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionCountOutputType
     */
    select?: InstitutionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceAssignmentWhereInput
  }


  /**
   * Count Type ServiceAssignmentCountOutputType
   */

  export type ServiceAssignmentCountOutputType = {
    workPlans: number
    documents: number
    reports: number
    hoursLogs: number
    incidents: number
    tasks: number
  }

  export type ServiceAssignmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workPlans?: boolean | ServiceAssignmentCountOutputTypeCountWorkPlansArgs
    documents?: boolean | ServiceAssignmentCountOutputTypeCountDocumentsArgs
    reports?: boolean | ServiceAssignmentCountOutputTypeCountReportsArgs
    hoursLogs?: boolean | ServiceAssignmentCountOutputTypeCountHoursLogsArgs
    incidents?: boolean | ServiceAssignmentCountOutputTypeCountIncidentsArgs
    tasks?: boolean | ServiceAssignmentCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * ServiceAssignmentCountOutputType without action
   */
  export type ServiceAssignmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignmentCountOutputType
     */
    select?: ServiceAssignmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceAssignmentCountOutputType without action
   */
  export type ServiceAssignmentCountOutputTypeCountWorkPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkPlanWhereInput
  }

  /**
   * ServiceAssignmentCountOutputType without action
   */
  export type ServiceAssignmentCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * ServiceAssignmentCountOutputType without action
   */
  export type ServiceAssignmentCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * ServiceAssignmentCountOutputType without action
   */
  export type ServiceAssignmentCountOutputTypeCountHoursLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoursLogWhereInput
  }

  /**
   * ServiceAssignmentCountOutputType without action
   */
  export type ServiceAssignmentCountOutputTypeCountIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }

  /**
   * ServiceAssignmentCountOutputType without action
   */
  export type ServiceAssignmentCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type IncidentCountOutputType
   */

  export type IncidentCountOutputType = {
    messages: number
  }

  export type IncidentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | IncidentCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * IncidentCountOutputType without action
   */
  export type IncidentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentCountOutputType
     */
    select?: IncidentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IncidentCountOutputType without action
   */
  export type IncidentCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | User$studentArgs<ExtArgs>
    institutions?: boolean | User$institutionsArgs<ExtArgs>
    incidentsReported?: boolean | User$incidentsReportedArgs<ExtArgs>
    incidentsResolved?: boolean | User$incidentsResolvedArgs<ExtArgs>
    documents?: boolean | User$documentsArgs<ExtArgs>
    reportsValid?: boolean | User$reportsValidArgs<ExtArgs>
    tasksReviewed?: boolean | User$tasksReviewedArgs<ExtArgs>
    IncidentMessage?: boolean | User$IncidentMessageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | User$studentArgs<ExtArgs>
    institutions?: boolean | User$institutionsArgs<ExtArgs>
    incidentsReported?: boolean | User$incidentsReportedArgs<ExtArgs>
    incidentsResolved?: boolean | User$incidentsResolvedArgs<ExtArgs>
    documents?: boolean | User$documentsArgs<ExtArgs>
    reportsValid?: boolean | User$reportsValidArgs<ExtArgs>
    tasksReviewed?: boolean | User$tasksReviewedArgs<ExtArgs>
    IncidentMessage?: boolean | User$IncidentMessageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs> | null
      institutions: Prisma.$InstitutionPayload<ExtArgs>[]
      incidentsReported: Prisma.$IncidentPayload<ExtArgs>[]
      incidentsResolved: Prisma.$IncidentPayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      reportsValid: Prisma.$ReportPayload<ExtArgs>[]
      tasksReviewed: Prisma.$TaskPayload<ExtArgs>[]
      IncidentMessage: Prisma.$IncidentMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends User$studentArgs<ExtArgs> = {}>(args?: Subset<T, User$studentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    institutions<T extends User$institutionsArgs<ExtArgs> = {}>(args?: Subset<T, User$institutionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incidentsReported<T extends User$incidentsReportedArgs<ExtArgs> = {}>(args?: Subset<T, User$incidentsReportedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incidentsResolved<T extends User$incidentsResolvedArgs<ExtArgs> = {}>(args?: Subset<T, User$incidentsResolvedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends User$documentsArgs<ExtArgs> = {}>(args?: Subset<T, User$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reportsValid<T extends User$reportsValidArgs<ExtArgs> = {}>(args?: Subset<T, User$reportsValidArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasksReviewed<T extends User$tasksReviewedArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksReviewedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    IncidentMessage<T extends User$IncidentMessageArgs<ExtArgs> = {}>(args?: Subset<T, User$IncidentMessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.student
   */
  export type User$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * User.institutions
   */
  export type User$institutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    where?: InstitutionWhereInput
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    cursor?: InstitutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * User.incidentsReported
   */
  export type User$incidentsReportedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * User.incidentsResolved
   */
  export type User$incidentsResolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * User.documents
   */
  export type User$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * User.reportsValid
   */
  export type User$reportsValidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * User.tasksReviewed
   */
  export type User$tasksReviewedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.IncidentMessage
   */
  export type User$IncidentMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentMessage
     */
    select?: IncidentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentMessage
     */
    omit?: IncidentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentMessageInclude<ExtArgs> | null
    where?: IncidentMessageWhereInput
    orderBy?: IncidentMessageOrderByWithRelationInput | IncidentMessageOrderByWithRelationInput[]
    cursor?: IncidentMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentMessageScalarFieldEnum | IncidentMessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    creditosAprobados: number | null
    creditosTotales: number | null
    porcentajeCreditos: number | null
  }

  export type StudentSumAggregateOutputType = {
    creditosAprobados: number | null
    creditosTotales: number | null
    porcentajeCreditos: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    matricula: string | null
    carrera: string | null
    creditosAprobados: number | null
    creditosTotales: number | null
    porcentajeCreditos: number | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    matricula: string | null
    carrera: string | null
    creditosAprobados: number | null
    creditosTotales: number | null
    porcentajeCreditos: number | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    matricula: number
    carrera: number
    creditosAprobados: number
    creditosTotales: number
    porcentajeCreditos: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    creditosAprobados?: true
    creditosTotales?: true
    porcentajeCreditos?: true
  }

  export type StudentSumAggregateInputType = {
    creditosAprobados?: true
    creditosTotales?: true
    porcentajeCreditos?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    matricula?: true
    carrera?: true
    creditosAprobados?: true
    creditosTotales?: true
    porcentajeCreditos?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    matricula?: true
    carrera?: true
    creditosAprobados?: true
    creditosTotales?: true
    porcentajeCreditos?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    matricula?: true
    carrera?: true
    creditosAprobados?: true
    creditosTotales?: true
    porcentajeCreditos?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    matricula: string
    carrera: string
    creditosAprobados: number
    creditosTotales: number
    porcentajeCreditos: number | null
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matricula?: boolean
    carrera?: boolean
    creditosAprobados?: boolean
    creditosTotales?: boolean
    porcentajeCreditos?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignments?: boolean | Student$assignmentsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matricula?: boolean
    carrera?: boolean
    creditosAprobados?: boolean
    creditosTotales?: boolean
    porcentajeCreditos?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matricula?: boolean
    carrera?: boolean
    creditosAprobados?: boolean
    creditosTotales?: boolean
    porcentajeCreditos?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    matricula?: boolean
    carrera?: boolean
    creditosAprobados?: boolean
    creditosTotales?: boolean
    porcentajeCreditos?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "matricula" | "carrera" | "creditosAprobados" | "creditosTotales" | "porcentajeCreditos", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignments?: boolean | Student$assignmentsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      assignments: Prisma.$ServiceAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      matricula: string
      carrera: string
      creditosAprobados: number
      creditosTotales: number
      porcentajeCreditos: number | null
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignments<T extends Student$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Student$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly matricula: FieldRef<"Student", 'String'>
    readonly carrera: FieldRef<"Student", 'String'>
    readonly creditosAprobados: FieldRef<"Student", 'Int'>
    readonly creditosTotales: FieldRef<"Student", 'Int'>
    readonly porcentajeCreditos: FieldRef<"Student", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.assignments
   */
  export type Student$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentInclude<ExtArgs> | null
    where?: ServiceAssignmentWhereInput
    orderBy?: ServiceAssignmentOrderByWithRelationInput | ServiceAssignmentOrderByWithRelationInput[]
    cursor?: ServiceAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceAssignmentScalarFieldEnum | ServiceAssignmentScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Institution
   */

  export type AggregateInstitution = {
    _count: InstitutionCountAggregateOutputType | null
    _avg: InstitutionAvgAggregateOutputType | null
    _sum: InstitutionSumAggregateOutputType | null
    _min: InstitutionMinAggregateOutputType | null
    _max: InstitutionMaxAggregateOutputType | null
  }

  export type InstitutionAvgAggregateOutputType = {
    id: number | null
  }

  export type InstitutionSumAggregateOutputType = {
    id: number | null
  }

  export type InstitutionMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    ciudad: string | null
    estado: string | null
    direccion: string | null
    contactoNombre: string | null
    contactoEmail: string | null
    contactoTelefono: string | null
    incentivoDesc: string | null
    verificada: boolean | null
    adminUserId: string | null
  }

  export type InstitutionMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    ciudad: string | null
    estado: string | null
    direccion: string | null
    contactoNombre: string | null
    contactoEmail: string | null
    contactoTelefono: string | null
    incentivoDesc: string | null
    verificada: boolean | null
    adminUserId: string | null
  }

  export type InstitutionCountAggregateOutputType = {
    id: number
    nombre: number
    ciudad: number
    estado: number
    direccion: number
    contactoNombre: number
    contactoEmail: number
    contactoTelefono: number
    incentivoDesc: number
    verificada: number
    adminUserId: number
    _all: number
  }


  export type InstitutionAvgAggregateInputType = {
    id?: true
  }

  export type InstitutionSumAggregateInputType = {
    id?: true
  }

  export type InstitutionMinAggregateInputType = {
    id?: true
    nombre?: true
    ciudad?: true
    estado?: true
    direccion?: true
    contactoNombre?: true
    contactoEmail?: true
    contactoTelefono?: true
    incentivoDesc?: true
    verificada?: true
    adminUserId?: true
  }

  export type InstitutionMaxAggregateInputType = {
    id?: true
    nombre?: true
    ciudad?: true
    estado?: true
    direccion?: true
    contactoNombre?: true
    contactoEmail?: true
    contactoTelefono?: true
    incentivoDesc?: true
    verificada?: true
    adminUserId?: true
  }

  export type InstitutionCountAggregateInputType = {
    id?: true
    nombre?: true
    ciudad?: true
    estado?: true
    direccion?: true
    contactoNombre?: true
    contactoEmail?: true
    contactoTelefono?: true
    incentivoDesc?: true
    verificada?: true
    adminUserId?: true
    _all?: true
  }

  export type InstitutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Institution to aggregate.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Institutions
    **/
    _count?: true | InstitutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstitutionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstitutionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstitutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstitutionMaxAggregateInputType
  }

  export type GetInstitutionAggregateType<T extends InstitutionAggregateArgs> = {
        [P in keyof T & keyof AggregateInstitution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstitution[P]>
      : GetScalarType<T[P], AggregateInstitution[P]>
  }




  export type InstitutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstitutionWhereInput
    orderBy?: InstitutionOrderByWithAggregationInput | InstitutionOrderByWithAggregationInput[]
    by: InstitutionScalarFieldEnum[] | InstitutionScalarFieldEnum
    having?: InstitutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstitutionCountAggregateInputType | true
    _avg?: InstitutionAvgAggregateInputType
    _sum?: InstitutionSumAggregateInputType
    _min?: InstitutionMinAggregateInputType
    _max?: InstitutionMaxAggregateInputType
  }

  export type InstitutionGroupByOutputType = {
    id: number
    nombre: string
    ciudad: string
    estado: string
    direccion: string | null
    contactoNombre: string | null
    contactoEmail: string
    contactoTelefono: string | null
    incentivoDesc: string | null
    verificada: boolean
    adminUserId: string
    _count: InstitutionCountAggregateOutputType | null
    _avg: InstitutionAvgAggregateOutputType | null
    _sum: InstitutionSumAggregateOutputType | null
    _min: InstitutionMinAggregateOutputType | null
    _max: InstitutionMaxAggregateOutputType | null
  }

  type GetInstitutionGroupByPayload<T extends InstitutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstitutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstitutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstitutionGroupByOutputType[P]>
            : GetScalarType<T[P], InstitutionGroupByOutputType[P]>
        }
      >
    >


  export type InstitutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    ciudad?: boolean
    estado?: boolean
    direccion?: boolean
    contactoNombre?: boolean
    contactoEmail?: boolean
    contactoTelefono?: boolean
    incentivoDesc?: boolean
    verificada?: boolean
    adminUserId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignments?: boolean | Institution$assignmentsArgs<ExtArgs>
    _count?: boolean | InstitutionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institution"]>

  export type InstitutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    ciudad?: boolean
    estado?: boolean
    direccion?: boolean
    contactoNombre?: boolean
    contactoEmail?: boolean
    contactoTelefono?: boolean
    incentivoDesc?: boolean
    verificada?: boolean
    adminUserId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institution"]>

  export type InstitutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    ciudad?: boolean
    estado?: boolean
    direccion?: boolean
    contactoNombre?: boolean
    contactoEmail?: boolean
    contactoTelefono?: boolean
    incentivoDesc?: boolean
    verificada?: boolean
    adminUserId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institution"]>

  export type InstitutionSelectScalar = {
    id?: boolean
    nombre?: boolean
    ciudad?: boolean
    estado?: boolean
    direccion?: boolean
    contactoNombre?: boolean
    contactoEmail?: boolean
    contactoTelefono?: boolean
    incentivoDesc?: boolean
    verificada?: boolean
    adminUserId?: boolean
  }

  export type InstitutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "ciudad" | "estado" | "direccion" | "contactoNombre" | "contactoEmail" | "contactoTelefono" | "incentivoDesc" | "verificada" | "adminUserId", ExtArgs["result"]["institution"]>
  export type InstitutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignments?: boolean | Institution$assignmentsArgs<ExtArgs>
    _count?: boolean | InstitutionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstitutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InstitutionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InstitutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Institution"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      assignments: Prisma.$ServiceAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      ciudad: string
      estado: string
      direccion: string | null
      contactoNombre: string | null
      contactoEmail: string
      contactoTelefono: string | null
      incentivoDesc: string | null
      verificada: boolean
      adminUserId: string
    }, ExtArgs["result"]["institution"]>
    composites: {}
  }

  type InstitutionGetPayload<S extends boolean | null | undefined | InstitutionDefaultArgs> = $Result.GetResult<Prisma.$InstitutionPayload, S>

  type InstitutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstitutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstitutionCountAggregateInputType | true
    }

  export interface InstitutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Institution'], meta: { name: 'Institution' } }
    /**
     * Find zero or one Institution that matches the filter.
     * @param {InstitutionFindUniqueArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstitutionFindUniqueArgs>(args: SelectSubset<T, InstitutionFindUniqueArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Institution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstitutionFindUniqueOrThrowArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstitutionFindUniqueOrThrowArgs>(args: SelectSubset<T, InstitutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Institution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindFirstArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstitutionFindFirstArgs>(args?: SelectSubset<T, InstitutionFindFirstArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Institution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindFirstOrThrowArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstitutionFindFirstOrThrowArgs>(args?: SelectSubset<T, InstitutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Institutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Institutions
     * const institutions = await prisma.institution.findMany()
     * 
     * // Get first 10 Institutions
     * const institutions = await prisma.institution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const institutionWithIdOnly = await prisma.institution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstitutionFindManyArgs>(args?: SelectSubset<T, InstitutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Institution.
     * @param {InstitutionCreateArgs} args - Arguments to create a Institution.
     * @example
     * // Create one Institution
     * const Institution = await prisma.institution.create({
     *   data: {
     *     // ... data to create a Institution
     *   }
     * })
     * 
     */
    create<T extends InstitutionCreateArgs>(args: SelectSubset<T, InstitutionCreateArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Institutions.
     * @param {InstitutionCreateManyArgs} args - Arguments to create many Institutions.
     * @example
     * // Create many Institutions
     * const institution = await prisma.institution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstitutionCreateManyArgs>(args?: SelectSubset<T, InstitutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Institutions and returns the data saved in the database.
     * @param {InstitutionCreateManyAndReturnArgs} args - Arguments to create many Institutions.
     * @example
     * // Create many Institutions
     * const institution = await prisma.institution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Institutions and only return the `id`
     * const institutionWithIdOnly = await prisma.institution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstitutionCreateManyAndReturnArgs>(args?: SelectSubset<T, InstitutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Institution.
     * @param {InstitutionDeleteArgs} args - Arguments to delete one Institution.
     * @example
     * // Delete one Institution
     * const Institution = await prisma.institution.delete({
     *   where: {
     *     // ... filter to delete one Institution
     *   }
     * })
     * 
     */
    delete<T extends InstitutionDeleteArgs>(args: SelectSubset<T, InstitutionDeleteArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Institution.
     * @param {InstitutionUpdateArgs} args - Arguments to update one Institution.
     * @example
     * // Update one Institution
     * const institution = await prisma.institution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstitutionUpdateArgs>(args: SelectSubset<T, InstitutionUpdateArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Institutions.
     * @param {InstitutionDeleteManyArgs} args - Arguments to filter Institutions to delete.
     * @example
     * // Delete a few Institutions
     * const { count } = await prisma.institution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstitutionDeleteManyArgs>(args?: SelectSubset<T, InstitutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Institutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Institutions
     * const institution = await prisma.institution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstitutionUpdateManyArgs>(args: SelectSubset<T, InstitutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Institutions and returns the data updated in the database.
     * @param {InstitutionUpdateManyAndReturnArgs} args - Arguments to update many Institutions.
     * @example
     * // Update many Institutions
     * const institution = await prisma.institution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Institutions and only return the `id`
     * const institutionWithIdOnly = await prisma.institution.updateManyAndReturn({
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
    updateManyAndReturn<T extends InstitutionUpdateManyAndReturnArgs>(args: SelectSubset<T, InstitutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Institution.
     * @param {InstitutionUpsertArgs} args - Arguments to update or create a Institution.
     * @example
     * // Update or create a Institution
     * const institution = await prisma.institution.upsert({
     *   create: {
     *     // ... data to create a Institution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Institution we want to update
     *   }
     * })
     */
    upsert<T extends InstitutionUpsertArgs>(args: SelectSubset<T, InstitutionUpsertArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Institutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionCountArgs} args - Arguments to filter Institutions to count.
     * @example
     * // Count the number of Institutions
     * const count = await prisma.institution.count({
     *   where: {
     *     // ... the filter for the Institutions we want to count
     *   }
     * })
    **/
    count<T extends InstitutionCountArgs>(
      args?: Subset<T, InstitutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstitutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Institution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstitutionAggregateArgs>(args: Subset<T, InstitutionAggregateArgs>): Prisma.PrismaPromise<GetInstitutionAggregateType<T>>

    /**
     * Group by Institution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionGroupByArgs} args - Group by arguments.
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
      T extends InstitutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstitutionGroupByArgs['orderBy'] }
        : { orderBy?: InstitutionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstitutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstitutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Institution model
   */
  readonly fields: InstitutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Institution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstitutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignments<T extends Institution$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Institution$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Institution model
   */
  interface InstitutionFieldRefs {
    readonly id: FieldRef<"Institution", 'Int'>
    readonly nombre: FieldRef<"Institution", 'String'>
    readonly ciudad: FieldRef<"Institution", 'String'>
    readonly estado: FieldRef<"Institution", 'String'>
    readonly direccion: FieldRef<"Institution", 'String'>
    readonly contactoNombre: FieldRef<"Institution", 'String'>
    readonly contactoEmail: FieldRef<"Institution", 'String'>
    readonly contactoTelefono: FieldRef<"Institution", 'String'>
    readonly incentivoDesc: FieldRef<"Institution", 'String'>
    readonly verificada: FieldRef<"Institution", 'Boolean'>
    readonly adminUserId: FieldRef<"Institution", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Institution findUnique
   */
  export type InstitutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution findUniqueOrThrow
   */
  export type InstitutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution findFirst
   */
  export type InstitutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Institutions.
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Institutions.
     */
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * Institution findFirstOrThrow
   */
  export type InstitutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Institutions.
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Institutions.
     */
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * Institution findMany
   */
  export type InstitutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institutions to fetch.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Institutions.
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * Institution create
   */
  export type InstitutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * The data needed to create a Institution.
     */
    data: XOR<InstitutionCreateInput, InstitutionUncheckedCreateInput>
  }

  /**
   * Institution createMany
   */
  export type InstitutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Institutions.
     */
    data: InstitutionCreateManyInput | InstitutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Institution createManyAndReturn
   */
  export type InstitutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * The data used to create many Institutions.
     */
    data: InstitutionCreateManyInput | InstitutionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Institution update
   */
  export type InstitutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * The data needed to update a Institution.
     */
    data: XOR<InstitutionUpdateInput, InstitutionUncheckedUpdateInput>
    /**
     * Choose, which Institution to update.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution updateMany
   */
  export type InstitutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Institutions.
     */
    data: XOR<InstitutionUpdateManyMutationInput, InstitutionUncheckedUpdateManyInput>
    /**
     * Filter which Institutions to update
     */
    where?: InstitutionWhereInput
    /**
     * Limit how many Institutions to update.
     */
    limit?: number
  }

  /**
   * Institution updateManyAndReturn
   */
  export type InstitutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * The data used to update Institutions.
     */
    data: XOR<InstitutionUpdateManyMutationInput, InstitutionUncheckedUpdateManyInput>
    /**
     * Filter which Institutions to update
     */
    where?: InstitutionWhereInput
    /**
     * Limit how many Institutions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Institution upsert
   */
  export type InstitutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * The filter to search for the Institution to update in case it exists.
     */
    where: InstitutionWhereUniqueInput
    /**
     * In case the Institution found by the `where` argument doesn't exist, create a new Institution with this data.
     */
    create: XOR<InstitutionCreateInput, InstitutionUncheckedCreateInput>
    /**
     * In case the Institution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstitutionUpdateInput, InstitutionUncheckedUpdateInput>
  }

  /**
   * Institution delete
   */
  export type InstitutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter which Institution to delete.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution deleteMany
   */
  export type InstitutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Institutions to delete
     */
    where?: InstitutionWhereInput
    /**
     * Limit how many Institutions to delete.
     */
    limit?: number
  }

  /**
   * Institution.assignments
   */
  export type Institution$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentInclude<ExtArgs> | null
    where?: ServiceAssignmentWhereInput
    orderBy?: ServiceAssignmentOrderByWithRelationInput | ServiceAssignmentOrderByWithRelationInput[]
    cursor?: ServiceAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceAssignmentScalarFieldEnum | ServiceAssignmentScalarFieldEnum[]
  }

  /**
   * Institution without action
   */
  export type InstitutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
  }


  /**
   * Model ServiceAssignment
   */

  export type AggregateServiceAssignment = {
    _count: ServiceAssignmentCountAggregateOutputType | null
    _avg: ServiceAssignmentAvgAggregateOutputType | null
    _sum: ServiceAssignmentSumAggregateOutputType | null
    _min: ServiceAssignmentMinAggregateOutputType | null
    _max: ServiceAssignmentMaxAggregateOutputType | null
  }

  export type ServiceAssignmentAvgAggregateOutputType = {
    id: number | null
    institutionId: number | null
    totalHoursRequired: number | null
    hoursCompleted: number | null
  }

  export type ServiceAssignmentSumAggregateOutputType = {
    id: number | null
    institutionId: number | null
    totalHoursRequired: number | null
    hoursCompleted: number | null
  }

  export type ServiceAssignmentMinAggregateOutputType = {
    id: number | null
    studentId: string | null
    institutionId: number | null
    startDate: Date | null
    plannedEndDate: Date | null
    endDate: Date | null
    totalHoursRequired: number | null
    hoursCompleted: number | null
    estado: $Enums.service_status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceAssignmentMaxAggregateOutputType = {
    id: number | null
    studentId: string | null
    institutionId: number | null
    startDate: Date | null
    plannedEndDate: Date | null
    endDate: Date | null
    totalHoursRequired: number | null
    hoursCompleted: number | null
    estado: $Enums.service_status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceAssignmentCountAggregateOutputType = {
    id: number
    studentId: number
    institutionId: number
    startDate: number
    plannedEndDate: number
    endDate: number
    totalHoursRequired: number
    hoursCompleted: number
    estado: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceAssignmentAvgAggregateInputType = {
    id?: true
    institutionId?: true
    totalHoursRequired?: true
    hoursCompleted?: true
  }

  export type ServiceAssignmentSumAggregateInputType = {
    id?: true
    institutionId?: true
    totalHoursRequired?: true
    hoursCompleted?: true
  }

  export type ServiceAssignmentMinAggregateInputType = {
    id?: true
    studentId?: true
    institutionId?: true
    startDate?: true
    plannedEndDate?: true
    endDate?: true
    totalHoursRequired?: true
    hoursCompleted?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceAssignmentMaxAggregateInputType = {
    id?: true
    studentId?: true
    institutionId?: true
    startDate?: true
    plannedEndDate?: true
    endDate?: true
    totalHoursRequired?: true
    hoursCompleted?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceAssignmentCountAggregateInputType = {
    id?: true
    studentId?: true
    institutionId?: true
    startDate?: true
    plannedEndDate?: true
    endDate?: true
    totalHoursRequired?: true
    hoursCompleted?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceAssignment to aggregate.
     */
    where?: ServiceAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceAssignments to fetch.
     */
    orderBy?: ServiceAssignmentOrderByWithRelationInput | ServiceAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceAssignments
    **/
    _count?: true | ServiceAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceAssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceAssignmentMaxAggregateInputType
  }

  export type GetServiceAssignmentAggregateType<T extends ServiceAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceAssignment[P]>
      : GetScalarType<T[P], AggregateServiceAssignment[P]>
  }




  export type ServiceAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceAssignmentWhereInput
    orderBy?: ServiceAssignmentOrderByWithAggregationInput | ServiceAssignmentOrderByWithAggregationInput[]
    by: ServiceAssignmentScalarFieldEnum[] | ServiceAssignmentScalarFieldEnum
    having?: ServiceAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceAssignmentCountAggregateInputType | true
    _avg?: ServiceAssignmentAvgAggregateInputType
    _sum?: ServiceAssignmentSumAggregateInputType
    _min?: ServiceAssignmentMinAggregateInputType
    _max?: ServiceAssignmentMaxAggregateInputType
  }

  export type ServiceAssignmentGroupByOutputType = {
    id: number
    studentId: string
    institutionId: number
    startDate: Date | null
    plannedEndDate: Date | null
    endDate: Date | null
    totalHoursRequired: number
    hoursCompleted: number
    estado: $Enums.service_status
    createdAt: Date
    updatedAt: Date
    _count: ServiceAssignmentCountAggregateOutputType | null
    _avg: ServiceAssignmentAvgAggregateOutputType | null
    _sum: ServiceAssignmentSumAggregateOutputType | null
    _min: ServiceAssignmentMinAggregateOutputType | null
    _max: ServiceAssignmentMaxAggregateOutputType | null
  }

  type GetServiceAssignmentGroupByPayload<T extends ServiceAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type ServiceAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    institutionId?: boolean
    startDate?: boolean
    plannedEndDate?: boolean
    endDate?: boolean
    totalHoursRequired?: boolean
    hoursCompleted?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    workPlans?: boolean | ServiceAssignment$workPlansArgs<ExtArgs>
    documents?: boolean | ServiceAssignment$documentsArgs<ExtArgs>
    reports?: boolean | ServiceAssignment$reportsArgs<ExtArgs>
    hoursLogs?: boolean | ServiceAssignment$hoursLogsArgs<ExtArgs>
    incidents?: boolean | ServiceAssignment$incidentsArgs<ExtArgs>
    tasks?: boolean | ServiceAssignment$tasksArgs<ExtArgs>
    _count?: boolean | ServiceAssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceAssignment"]>

  export type ServiceAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    institutionId?: boolean
    startDate?: boolean
    plannedEndDate?: boolean
    endDate?: boolean
    totalHoursRequired?: boolean
    hoursCompleted?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceAssignment"]>

  export type ServiceAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    institutionId?: boolean
    startDate?: boolean
    plannedEndDate?: boolean
    endDate?: boolean
    totalHoursRequired?: boolean
    hoursCompleted?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceAssignment"]>

  export type ServiceAssignmentSelectScalar = {
    id?: boolean
    studentId?: boolean
    institutionId?: boolean
    startDate?: boolean
    plannedEndDate?: boolean
    endDate?: boolean
    totalHoursRequired?: boolean
    hoursCompleted?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "institutionId" | "startDate" | "plannedEndDate" | "endDate" | "totalHoursRequired" | "hoursCompleted" | "estado" | "createdAt" | "updatedAt", ExtArgs["result"]["serviceAssignment"]>
  export type ServiceAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    workPlans?: boolean | ServiceAssignment$workPlansArgs<ExtArgs>
    documents?: boolean | ServiceAssignment$documentsArgs<ExtArgs>
    reports?: boolean | ServiceAssignment$reportsArgs<ExtArgs>
    hoursLogs?: boolean | ServiceAssignment$hoursLogsArgs<ExtArgs>
    incidents?: boolean | ServiceAssignment$incidentsArgs<ExtArgs>
    tasks?: boolean | ServiceAssignment$tasksArgs<ExtArgs>
    _count?: boolean | ServiceAssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }
  export type ServiceAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }

  export type $ServiceAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceAssignment"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      institution: Prisma.$InstitutionPayload<ExtArgs>
      workPlans: Prisma.$WorkPlanPayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      reports: Prisma.$ReportPayload<ExtArgs>[]
      hoursLogs: Prisma.$HoursLogPayload<ExtArgs>[]
      incidents: Prisma.$IncidentPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: string
      institutionId: number
      startDate: Date | null
      plannedEndDate: Date | null
      endDate: Date | null
      totalHoursRequired: number
      hoursCompleted: number
      estado: $Enums.service_status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["serviceAssignment"]>
    composites: {}
  }

  type ServiceAssignmentGetPayload<S extends boolean | null | undefined | ServiceAssignmentDefaultArgs> = $Result.GetResult<Prisma.$ServiceAssignmentPayload, S>

  type ServiceAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceAssignmentCountAggregateInputType | true
    }

  export interface ServiceAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceAssignment'], meta: { name: 'ServiceAssignment' } }
    /**
     * Find zero or one ServiceAssignment that matches the filter.
     * @param {ServiceAssignmentFindUniqueArgs} args - Arguments to find a ServiceAssignment
     * @example
     * // Get one ServiceAssignment
     * const serviceAssignment = await prisma.serviceAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceAssignmentFindUniqueArgs>(args: SelectSubset<T, ServiceAssignmentFindUniqueArgs<ExtArgs>>): Prisma__ServiceAssignmentClient<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceAssignmentFindUniqueOrThrowArgs} args - Arguments to find a ServiceAssignment
     * @example
     * // Get one ServiceAssignment
     * const serviceAssignment = await prisma.serviceAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceAssignmentClient<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAssignmentFindFirstArgs} args - Arguments to find a ServiceAssignment
     * @example
     * // Get one ServiceAssignment
     * const serviceAssignment = await prisma.serviceAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceAssignmentFindFirstArgs>(args?: SelectSubset<T, ServiceAssignmentFindFirstArgs<ExtArgs>>): Prisma__ServiceAssignmentClient<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAssignmentFindFirstOrThrowArgs} args - Arguments to find a ServiceAssignment
     * @example
     * // Get one ServiceAssignment
     * const serviceAssignment = await prisma.serviceAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceAssignmentClient<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceAssignments
     * const serviceAssignments = await prisma.serviceAssignment.findMany()
     * 
     * // Get first 10 ServiceAssignments
     * const serviceAssignments = await prisma.serviceAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceAssignmentWithIdOnly = await prisma.serviceAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceAssignmentFindManyArgs>(args?: SelectSubset<T, ServiceAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceAssignment.
     * @param {ServiceAssignmentCreateArgs} args - Arguments to create a ServiceAssignment.
     * @example
     * // Create one ServiceAssignment
     * const ServiceAssignment = await prisma.serviceAssignment.create({
     *   data: {
     *     // ... data to create a ServiceAssignment
     *   }
     * })
     * 
     */
    create<T extends ServiceAssignmentCreateArgs>(args: SelectSubset<T, ServiceAssignmentCreateArgs<ExtArgs>>): Prisma__ServiceAssignmentClient<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceAssignments.
     * @param {ServiceAssignmentCreateManyArgs} args - Arguments to create many ServiceAssignments.
     * @example
     * // Create many ServiceAssignments
     * const serviceAssignment = await prisma.serviceAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceAssignmentCreateManyArgs>(args?: SelectSubset<T, ServiceAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceAssignments and returns the data saved in the database.
     * @param {ServiceAssignmentCreateManyAndReturnArgs} args - Arguments to create many ServiceAssignments.
     * @example
     * // Create many ServiceAssignments
     * const serviceAssignment = await prisma.serviceAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceAssignments and only return the `id`
     * const serviceAssignmentWithIdOnly = await prisma.serviceAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceAssignment.
     * @param {ServiceAssignmentDeleteArgs} args - Arguments to delete one ServiceAssignment.
     * @example
     * // Delete one ServiceAssignment
     * const ServiceAssignment = await prisma.serviceAssignment.delete({
     *   where: {
     *     // ... filter to delete one ServiceAssignment
     *   }
     * })
     * 
     */
    delete<T extends ServiceAssignmentDeleteArgs>(args: SelectSubset<T, ServiceAssignmentDeleteArgs<ExtArgs>>): Prisma__ServiceAssignmentClient<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceAssignment.
     * @param {ServiceAssignmentUpdateArgs} args - Arguments to update one ServiceAssignment.
     * @example
     * // Update one ServiceAssignment
     * const serviceAssignment = await prisma.serviceAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceAssignmentUpdateArgs>(args: SelectSubset<T, ServiceAssignmentUpdateArgs<ExtArgs>>): Prisma__ServiceAssignmentClient<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceAssignments.
     * @param {ServiceAssignmentDeleteManyArgs} args - Arguments to filter ServiceAssignments to delete.
     * @example
     * // Delete a few ServiceAssignments
     * const { count } = await prisma.serviceAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceAssignmentDeleteManyArgs>(args?: SelectSubset<T, ServiceAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceAssignments
     * const serviceAssignment = await prisma.serviceAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceAssignmentUpdateManyArgs>(args: SelectSubset<T, ServiceAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceAssignments and returns the data updated in the database.
     * @param {ServiceAssignmentUpdateManyAndReturnArgs} args - Arguments to update many ServiceAssignments.
     * @example
     * // Update many ServiceAssignments
     * const serviceAssignment = await prisma.serviceAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceAssignments and only return the `id`
     * const serviceAssignmentWithIdOnly = await prisma.serviceAssignment.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceAssignment.
     * @param {ServiceAssignmentUpsertArgs} args - Arguments to update or create a ServiceAssignment.
     * @example
     * // Update or create a ServiceAssignment
     * const serviceAssignment = await prisma.serviceAssignment.upsert({
     *   create: {
     *     // ... data to create a ServiceAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceAssignment we want to update
     *   }
     * })
     */
    upsert<T extends ServiceAssignmentUpsertArgs>(args: SelectSubset<T, ServiceAssignmentUpsertArgs<ExtArgs>>): Prisma__ServiceAssignmentClient<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAssignmentCountArgs} args - Arguments to filter ServiceAssignments to count.
     * @example
     * // Count the number of ServiceAssignments
     * const count = await prisma.serviceAssignment.count({
     *   where: {
     *     // ... the filter for the ServiceAssignments we want to count
     *   }
     * })
    **/
    count<T extends ServiceAssignmentCountArgs>(
      args?: Subset<T, ServiceAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAssignmentAggregateArgs>(args: Subset<T, ServiceAssignmentAggregateArgs>): Prisma.PrismaPromise<GetServiceAssignmentAggregateType<T>>

    /**
     * Group by ServiceAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAssignmentGroupByArgs} args - Group by arguments.
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
      T extends ServiceAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: ServiceAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceAssignment model
   */
  readonly fields: ServiceAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    institution<T extends InstitutionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstitutionDefaultArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workPlans<T extends ServiceAssignment$workPlansArgs<ExtArgs> = {}>(args?: Subset<T, ServiceAssignment$workPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends ServiceAssignment$documentsArgs<ExtArgs> = {}>(args?: Subset<T, ServiceAssignment$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reports<T extends ServiceAssignment$reportsArgs<ExtArgs> = {}>(args?: Subset<T, ServiceAssignment$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hoursLogs<T extends ServiceAssignment$hoursLogsArgs<ExtArgs> = {}>(args?: Subset<T, ServiceAssignment$hoursLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoursLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incidents<T extends ServiceAssignment$incidentsArgs<ExtArgs> = {}>(args?: Subset<T, ServiceAssignment$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends ServiceAssignment$tasksArgs<ExtArgs> = {}>(args?: Subset<T, ServiceAssignment$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ServiceAssignment model
   */
  interface ServiceAssignmentFieldRefs {
    readonly id: FieldRef<"ServiceAssignment", 'Int'>
    readonly studentId: FieldRef<"ServiceAssignment", 'String'>
    readonly institutionId: FieldRef<"ServiceAssignment", 'Int'>
    readonly startDate: FieldRef<"ServiceAssignment", 'DateTime'>
    readonly plannedEndDate: FieldRef<"ServiceAssignment", 'DateTime'>
    readonly endDate: FieldRef<"ServiceAssignment", 'DateTime'>
    readonly totalHoursRequired: FieldRef<"ServiceAssignment", 'Int'>
    readonly hoursCompleted: FieldRef<"ServiceAssignment", 'Int'>
    readonly estado: FieldRef<"ServiceAssignment", 'service_status'>
    readonly createdAt: FieldRef<"ServiceAssignment", 'DateTime'>
    readonly updatedAt: FieldRef<"ServiceAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceAssignment findUnique
   */
  export type ServiceAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ServiceAssignment to fetch.
     */
    where: ServiceAssignmentWhereUniqueInput
  }

  /**
   * ServiceAssignment findUniqueOrThrow
   */
  export type ServiceAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ServiceAssignment to fetch.
     */
    where: ServiceAssignmentWhereUniqueInput
  }

  /**
   * ServiceAssignment findFirst
   */
  export type ServiceAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ServiceAssignment to fetch.
     */
    where?: ServiceAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceAssignments to fetch.
     */
    orderBy?: ServiceAssignmentOrderByWithRelationInput | ServiceAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceAssignments.
     */
    cursor?: ServiceAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceAssignments.
     */
    distinct?: ServiceAssignmentScalarFieldEnum | ServiceAssignmentScalarFieldEnum[]
  }

  /**
   * ServiceAssignment findFirstOrThrow
   */
  export type ServiceAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ServiceAssignment to fetch.
     */
    where?: ServiceAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceAssignments to fetch.
     */
    orderBy?: ServiceAssignmentOrderByWithRelationInput | ServiceAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceAssignments.
     */
    cursor?: ServiceAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceAssignments.
     */
    distinct?: ServiceAssignmentScalarFieldEnum | ServiceAssignmentScalarFieldEnum[]
  }

  /**
   * ServiceAssignment findMany
   */
  export type ServiceAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ServiceAssignments to fetch.
     */
    where?: ServiceAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceAssignments to fetch.
     */
    orderBy?: ServiceAssignmentOrderByWithRelationInput | ServiceAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceAssignments.
     */
    cursor?: ServiceAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceAssignments.
     */
    skip?: number
    distinct?: ServiceAssignmentScalarFieldEnum | ServiceAssignmentScalarFieldEnum[]
  }

  /**
   * ServiceAssignment create
   */
  export type ServiceAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceAssignment.
     */
    data: XOR<ServiceAssignmentCreateInput, ServiceAssignmentUncheckedCreateInput>
  }

  /**
   * ServiceAssignment createMany
   */
  export type ServiceAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceAssignments.
     */
    data: ServiceAssignmentCreateManyInput | ServiceAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceAssignment createManyAndReturn
   */
  export type ServiceAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceAssignments.
     */
    data: ServiceAssignmentCreateManyInput | ServiceAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceAssignment update
   */
  export type ServiceAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceAssignment.
     */
    data: XOR<ServiceAssignmentUpdateInput, ServiceAssignmentUncheckedUpdateInput>
    /**
     * Choose, which ServiceAssignment to update.
     */
    where: ServiceAssignmentWhereUniqueInput
  }

  /**
   * ServiceAssignment updateMany
   */
  export type ServiceAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceAssignments.
     */
    data: XOR<ServiceAssignmentUpdateManyMutationInput, ServiceAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ServiceAssignments to update
     */
    where?: ServiceAssignmentWhereInput
    /**
     * Limit how many ServiceAssignments to update.
     */
    limit?: number
  }

  /**
   * ServiceAssignment updateManyAndReturn
   */
  export type ServiceAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update ServiceAssignments.
     */
    data: XOR<ServiceAssignmentUpdateManyMutationInput, ServiceAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ServiceAssignments to update
     */
    where?: ServiceAssignmentWhereInput
    /**
     * Limit how many ServiceAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceAssignment upsert
   */
  export type ServiceAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceAssignment to update in case it exists.
     */
    where: ServiceAssignmentWhereUniqueInput
    /**
     * In case the ServiceAssignment found by the `where` argument doesn't exist, create a new ServiceAssignment with this data.
     */
    create: XOR<ServiceAssignmentCreateInput, ServiceAssignmentUncheckedCreateInput>
    /**
     * In case the ServiceAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceAssignmentUpdateInput, ServiceAssignmentUncheckedUpdateInput>
  }

  /**
   * ServiceAssignment delete
   */
  export type ServiceAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentInclude<ExtArgs> | null
    /**
     * Filter which ServiceAssignment to delete.
     */
    where: ServiceAssignmentWhereUniqueInput
  }

  /**
   * ServiceAssignment deleteMany
   */
  export type ServiceAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceAssignments to delete
     */
    where?: ServiceAssignmentWhereInput
    /**
     * Limit how many ServiceAssignments to delete.
     */
    limit?: number
  }

  /**
   * ServiceAssignment.workPlans
   */
  export type ServiceAssignment$workPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPlan
     */
    select?: WorkPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkPlan
     */
    omit?: WorkPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkPlanInclude<ExtArgs> | null
    where?: WorkPlanWhereInput
    orderBy?: WorkPlanOrderByWithRelationInput | WorkPlanOrderByWithRelationInput[]
    cursor?: WorkPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkPlanScalarFieldEnum | WorkPlanScalarFieldEnum[]
  }

  /**
   * ServiceAssignment.documents
   */
  export type ServiceAssignment$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * ServiceAssignment.reports
   */
  export type ServiceAssignment$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * ServiceAssignment.hoursLogs
   */
  export type ServiceAssignment$hoursLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoursLog
     */
    select?: HoursLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoursLog
     */
    omit?: HoursLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursLogInclude<ExtArgs> | null
    where?: HoursLogWhereInput
    orderBy?: HoursLogOrderByWithRelationInput | HoursLogOrderByWithRelationInput[]
    cursor?: HoursLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HoursLogScalarFieldEnum | HoursLogScalarFieldEnum[]
  }

  /**
   * ServiceAssignment.incidents
   */
  export type ServiceAssignment$incidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * ServiceAssignment.tasks
   */
  export type ServiceAssignment$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * ServiceAssignment without action
   */
  export type ServiceAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model WorkPlan
   */

  export type AggregateWorkPlan = {
    _count: WorkPlanCountAggregateOutputType | null
    _avg: WorkPlanAvgAggregateOutputType | null
    _sum: WorkPlanSumAggregateOutputType | null
    _min: WorkPlanMinAggregateOutputType | null
    _max: WorkPlanMaxAggregateOutputType | null
  }

  export type WorkPlanAvgAggregateOutputType = {
    id: number | null
    assignmentId: number | null
  }

  export type WorkPlanSumAggregateOutputType = {
    id: number | null
    assignmentId: number | null
  }

  export type WorkPlanMinAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    status: $Enums.plan_status | null
    approvedBy: string | null
    approvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkPlanMaxAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    status: $Enums.plan_status | null
    approvedBy: string | null
    approvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkPlanCountAggregateOutputType = {
    id: number
    assignmentId: number
    contenido: number
    status: number
    approvedBy: number
    approvedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkPlanAvgAggregateInputType = {
    id?: true
    assignmentId?: true
  }

  export type WorkPlanSumAggregateInputType = {
    id?: true
    assignmentId?: true
  }

  export type WorkPlanMinAggregateInputType = {
    id?: true
    assignmentId?: true
    status?: true
    approvedBy?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkPlanMaxAggregateInputType = {
    id?: true
    assignmentId?: true
    status?: true
    approvedBy?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkPlanCountAggregateInputType = {
    id?: true
    assignmentId?: true
    contenido?: true
    status?: true
    approvedBy?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkPlan to aggregate.
     */
    where?: WorkPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkPlans to fetch.
     */
    orderBy?: WorkPlanOrderByWithRelationInput | WorkPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkPlans
    **/
    _count?: true | WorkPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkPlanMaxAggregateInputType
  }

  export type GetWorkPlanAggregateType<T extends WorkPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkPlan[P]>
      : GetScalarType<T[P], AggregateWorkPlan[P]>
  }




  export type WorkPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkPlanWhereInput
    orderBy?: WorkPlanOrderByWithAggregationInput | WorkPlanOrderByWithAggregationInput[]
    by: WorkPlanScalarFieldEnum[] | WorkPlanScalarFieldEnum
    having?: WorkPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkPlanCountAggregateInputType | true
    _avg?: WorkPlanAvgAggregateInputType
    _sum?: WorkPlanSumAggregateInputType
    _min?: WorkPlanMinAggregateInputType
    _max?: WorkPlanMaxAggregateInputType
  }

  export type WorkPlanGroupByOutputType = {
    id: number
    assignmentId: number
    contenido: JsonValue
    status: $Enums.plan_status
    approvedBy: string | null
    approvedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: WorkPlanCountAggregateOutputType | null
    _avg: WorkPlanAvgAggregateOutputType | null
    _sum: WorkPlanSumAggregateOutputType | null
    _min: WorkPlanMinAggregateOutputType | null
    _max: WorkPlanMaxAggregateOutputType | null
  }

  type GetWorkPlanGroupByPayload<T extends WorkPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkPlanGroupByOutputType[P]>
            : GetScalarType<T[P], WorkPlanGroupByOutputType[P]>
        }
      >
    >


  export type WorkPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    contenido?: boolean
    status?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workPlan"]>

  export type WorkPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    contenido?: boolean
    status?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workPlan"]>

  export type WorkPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    contenido?: boolean
    status?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workPlan"]>

  export type WorkPlanSelectScalar = {
    id?: boolean
    assignmentId?: boolean
    contenido?: boolean
    status?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assignmentId" | "contenido" | "status" | "approvedBy" | "approvedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["workPlan"]>
  export type WorkPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
  }
  export type WorkPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
  }
  export type WorkPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
  }

  export type $WorkPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkPlan"
    objects: {
      assignment: Prisma.$ServiceAssignmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      assignmentId: number
      contenido: Prisma.JsonValue
      status: $Enums.plan_status
      approvedBy: string | null
      approvedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workPlan"]>
    composites: {}
  }

  type WorkPlanGetPayload<S extends boolean | null | undefined | WorkPlanDefaultArgs> = $Result.GetResult<Prisma.$WorkPlanPayload, S>

  type WorkPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkPlanCountAggregateInputType | true
    }

  export interface WorkPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkPlan'], meta: { name: 'WorkPlan' } }
    /**
     * Find zero or one WorkPlan that matches the filter.
     * @param {WorkPlanFindUniqueArgs} args - Arguments to find a WorkPlan
     * @example
     * // Get one WorkPlan
     * const workPlan = await prisma.workPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkPlanFindUniqueArgs>(args: SelectSubset<T, WorkPlanFindUniqueArgs<ExtArgs>>): Prisma__WorkPlanClient<$Result.GetResult<Prisma.$WorkPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkPlanFindUniqueOrThrowArgs} args - Arguments to find a WorkPlan
     * @example
     * // Get one WorkPlan
     * const workPlan = await prisma.workPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkPlanClient<$Result.GetResult<Prisma.$WorkPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkPlanFindFirstArgs} args - Arguments to find a WorkPlan
     * @example
     * // Get one WorkPlan
     * const workPlan = await prisma.workPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkPlanFindFirstArgs>(args?: SelectSubset<T, WorkPlanFindFirstArgs<ExtArgs>>): Prisma__WorkPlanClient<$Result.GetResult<Prisma.$WorkPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkPlanFindFirstOrThrowArgs} args - Arguments to find a WorkPlan
     * @example
     * // Get one WorkPlan
     * const workPlan = await prisma.workPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkPlanClient<$Result.GetResult<Prisma.$WorkPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkPlans
     * const workPlans = await prisma.workPlan.findMany()
     * 
     * // Get first 10 WorkPlans
     * const workPlans = await prisma.workPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workPlanWithIdOnly = await prisma.workPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkPlanFindManyArgs>(args?: SelectSubset<T, WorkPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkPlan.
     * @param {WorkPlanCreateArgs} args - Arguments to create a WorkPlan.
     * @example
     * // Create one WorkPlan
     * const WorkPlan = await prisma.workPlan.create({
     *   data: {
     *     // ... data to create a WorkPlan
     *   }
     * })
     * 
     */
    create<T extends WorkPlanCreateArgs>(args: SelectSubset<T, WorkPlanCreateArgs<ExtArgs>>): Prisma__WorkPlanClient<$Result.GetResult<Prisma.$WorkPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkPlans.
     * @param {WorkPlanCreateManyArgs} args - Arguments to create many WorkPlans.
     * @example
     * // Create many WorkPlans
     * const workPlan = await prisma.workPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkPlanCreateManyArgs>(args?: SelectSubset<T, WorkPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkPlans and returns the data saved in the database.
     * @param {WorkPlanCreateManyAndReturnArgs} args - Arguments to create many WorkPlans.
     * @example
     * // Create many WorkPlans
     * const workPlan = await prisma.workPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkPlans and only return the `id`
     * const workPlanWithIdOnly = await prisma.workPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkPlan.
     * @param {WorkPlanDeleteArgs} args - Arguments to delete one WorkPlan.
     * @example
     * // Delete one WorkPlan
     * const WorkPlan = await prisma.workPlan.delete({
     *   where: {
     *     // ... filter to delete one WorkPlan
     *   }
     * })
     * 
     */
    delete<T extends WorkPlanDeleteArgs>(args: SelectSubset<T, WorkPlanDeleteArgs<ExtArgs>>): Prisma__WorkPlanClient<$Result.GetResult<Prisma.$WorkPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkPlan.
     * @param {WorkPlanUpdateArgs} args - Arguments to update one WorkPlan.
     * @example
     * // Update one WorkPlan
     * const workPlan = await prisma.workPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkPlanUpdateArgs>(args: SelectSubset<T, WorkPlanUpdateArgs<ExtArgs>>): Prisma__WorkPlanClient<$Result.GetResult<Prisma.$WorkPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkPlans.
     * @param {WorkPlanDeleteManyArgs} args - Arguments to filter WorkPlans to delete.
     * @example
     * // Delete a few WorkPlans
     * const { count } = await prisma.workPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkPlanDeleteManyArgs>(args?: SelectSubset<T, WorkPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkPlans
     * const workPlan = await prisma.workPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkPlanUpdateManyArgs>(args: SelectSubset<T, WorkPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkPlans and returns the data updated in the database.
     * @param {WorkPlanUpdateManyAndReturnArgs} args - Arguments to update many WorkPlans.
     * @example
     * // Update many WorkPlans
     * const workPlan = await prisma.workPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkPlans and only return the `id`
     * const workPlanWithIdOnly = await prisma.workPlan.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkPlan.
     * @param {WorkPlanUpsertArgs} args - Arguments to update or create a WorkPlan.
     * @example
     * // Update or create a WorkPlan
     * const workPlan = await prisma.workPlan.upsert({
     *   create: {
     *     // ... data to create a WorkPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkPlan we want to update
     *   }
     * })
     */
    upsert<T extends WorkPlanUpsertArgs>(args: SelectSubset<T, WorkPlanUpsertArgs<ExtArgs>>): Prisma__WorkPlanClient<$Result.GetResult<Prisma.$WorkPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkPlanCountArgs} args - Arguments to filter WorkPlans to count.
     * @example
     * // Count the number of WorkPlans
     * const count = await prisma.workPlan.count({
     *   where: {
     *     // ... the filter for the WorkPlans we want to count
     *   }
     * })
    **/
    count<T extends WorkPlanCountArgs>(
      args?: Subset<T, WorkPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkPlanAggregateArgs>(args: Subset<T, WorkPlanAggregateArgs>): Prisma.PrismaPromise<GetWorkPlanAggregateType<T>>

    /**
     * Group by WorkPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkPlanGroupByArgs} args - Group by arguments.
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
      T extends WorkPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkPlanGroupByArgs['orderBy'] }
        : { orderBy?: WorkPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkPlan model
   */
  readonly fields: WorkPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends ServiceAssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceAssignmentDefaultArgs<ExtArgs>>): Prisma__ServiceAssignmentClient<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WorkPlan model
   */
  interface WorkPlanFieldRefs {
    readonly id: FieldRef<"WorkPlan", 'Int'>
    readonly assignmentId: FieldRef<"WorkPlan", 'Int'>
    readonly contenido: FieldRef<"WorkPlan", 'Json'>
    readonly status: FieldRef<"WorkPlan", 'plan_status'>
    readonly approvedBy: FieldRef<"WorkPlan", 'String'>
    readonly approvedAt: FieldRef<"WorkPlan", 'DateTime'>
    readonly createdAt: FieldRef<"WorkPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkPlan findUnique
   */
  export type WorkPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPlan
     */
    select?: WorkPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkPlan
     */
    omit?: WorkPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkPlanInclude<ExtArgs> | null
    /**
     * Filter, which WorkPlan to fetch.
     */
    where: WorkPlanWhereUniqueInput
  }

  /**
   * WorkPlan findUniqueOrThrow
   */
  export type WorkPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPlan
     */
    select?: WorkPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkPlan
     */
    omit?: WorkPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkPlanInclude<ExtArgs> | null
    /**
     * Filter, which WorkPlan to fetch.
     */
    where: WorkPlanWhereUniqueInput
  }

  /**
   * WorkPlan findFirst
   */
  export type WorkPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPlan
     */
    select?: WorkPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkPlan
     */
    omit?: WorkPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkPlanInclude<ExtArgs> | null
    /**
     * Filter, which WorkPlan to fetch.
     */
    where?: WorkPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkPlans to fetch.
     */
    orderBy?: WorkPlanOrderByWithRelationInput | WorkPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkPlans.
     */
    cursor?: WorkPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkPlans.
     */
    distinct?: WorkPlanScalarFieldEnum | WorkPlanScalarFieldEnum[]
  }

  /**
   * WorkPlan findFirstOrThrow
   */
  export type WorkPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPlan
     */
    select?: WorkPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkPlan
     */
    omit?: WorkPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkPlanInclude<ExtArgs> | null
    /**
     * Filter, which WorkPlan to fetch.
     */
    where?: WorkPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkPlans to fetch.
     */
    orderBy?: WorkPlanOrderByWithRelationInput | WorkPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkPlans.
     */
    cursor?: WorkPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkPlans.
     */
    distinct?: WorkPlanScalarFieldEnum | WorkPlanScalarFieldEnum[]
  }

  /**
   * WorkPlan findMany
   */
  export type WorkPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPlan
     */
    select?: WorkPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkPlan
     */
    omit?: WorkPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkPlanInclude<ExtArgs> | null
    /**
     * Filter, which WorkPlans to fetch.
     */
    where?: WorkPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkPlans to fetch.
     */
    orderBy?: WorkPlanOrderByWithRelationInput | WorkPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkPlans.
     */
    cursor?: WorkPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkPlans.
     */
    skip?: number
    distinct?: WorkPlanScalarFieldEnum | WorkPlanScalarFieldEnum[]
  }

  /**
   * WorkPlan create
   */
  export type WorkPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPlan
     */
    select?: WorkPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkPlan
     */
    omit?: WorkPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkPlan.
     */
    data: XOR<WorkPlanCreateInput, WorkPlanUncheckedCreateInput>
  }

  /**
   * WorkPlan createMany
   */
  export type WorkPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkPlans.
     */
    data: WorkPlanCreateManyInput | WorkPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkPlan createManyAndReturn
   */
  export type WorkPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPlan
     */
    select?: WorkPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkPlan
     */
    omit?: WorkPlanOmit<ExtArgs> | null
    /**
     * The data used to create many WorkPlans.
     */
    data: WorkPlanCreateManyInput | WorkPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkPlan update
   */
  export type WorkPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPlan
     */
    select?: WorkPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkPlan
     */
    omit?: WorkPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkPlan.
     */
    data: XOR<WorkPlanUpdateInput, WorkPlanUncheckedUpdateInput>
    /**
     * Choose, which WorkPlan to update.
     */
    where: WorkPlanWhereUniqueInput
  }

  /**
   * WorkPlan updateMany
   */
  export type WorkPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkPlans.
     */
    data: XOR<WorkPlanUpdateManyMutationInput, WorkPlanUncheckedUpdateManyInput>
    /**
     * Filter which WorkPlans to update
     */
    where?: WorkPlanWhereInput
    /**
     * Limit how many WorkPlans to update.
     */
    limit?: number
  }

  /**
   * WorkPlan updateManyAndReturn
   */
  export type WorkPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPlan
     */
    select?: WorkPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkPlan
     */
    omit?: WorkPlanOmit<ExtArgs> | null
    /**
     * The data used to update WorkPlans.
     */
    data: XOR<WorkPlanUpdateManyMutationInput, WorkPlanUncheckedUpdateManyInput>
    /**
     * Filter which WorkPlans to update
     */
    where?: WorkPlanWhereInput
    /**
     * Limit how many WorkPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkPlan upsert
   */
  export type WorkPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPlan
     */
    select?: WorkPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkPlan
     */
    omit?: WorkPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkPlan to update in case it exists.
     */
    where: WorkPlanWhereUniqueInput
    /**
     * In case the WorkPlan found by the `where` argument doesn't exist, create a new WorkPlan with this data.
     */
    create: XOR<WorkPlanCreateInput, WorkPlanUncheckedCreateInput>
    /**
     * In case the WorkPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkPlanUpdateInput, WorkPlanUncheckedUpdateInput>
  }

  /**
   * WorkPlan delete
   */
  export type WorkPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPlan
     */
    select?: WorkPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkPlan
     */
    omit?: WorkPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkPlanInclude<ExtArgs> | null
    /**
     * Filter which WorkPlan to delete.
     */
    where: WorkPlanWhereUniqueInput
  }

  /**
   * WorkPlan deleteMany
   */
  export type WorkPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkPlans to delete
     */
    where?: WorkPlanWhereInput
    /**
     * Limit how many WorkPlans to delete.
     */
    limit?: number
  }

  /**
   * WorkPlan without action
   */
  export type WorkPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkPlan
     */
    select?: WorkPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkPlan
     */
    omit?: WorkPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkPlanInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    id: number | null
    assignmentId: number | null
  }

  export type DocumentSumAggregateOutputType = {
    id: number | null
    assignmentId: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    tipo: $Enums.document_type | null
    filePath: string | null
    signedBy: string | null
    signedAt: Date | null
    createdAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    tipo: $Enums.document_type | null
    filePath: string | null
    signedBy: string | null
    signedAt: Date | null
    createdAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    assignmentId: number
    tipo: number
    filePath: number
    signedBy: number
    signedAt: number
    createdAt: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    id?: true
    assignmentId?: true
  }

  export type DocumentSumAggregateInputType = {
    id?: true
    assignmentId?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    assignmentId?: true
    tipo?: true
    filePath?: true
    signedBy?: true
    signedAt?: true
    createdAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    assignmentId?: true
    tipo?: true
    filePath?: true
    signedBy?: true
    signedAt?: true
    createdAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    assignmentId?: true
    tipo?: true
    filePath?: true
    signedBy?: true
    signedAt?: true
    createdAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: number
    assignmentId: number
    tipo: $Enums.document_type
    filePath: string
    signedBy: string | null
    signedAt: Date | null
    createdAt: Date
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    tipo?: boolean
    filePath?: boolean
    signedBy?: boolean
    signedAt?: boolean
    createdAt?: boolean
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
    signedUser?: boolean | Document$signedUserArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    tipo?: boolean
    filePath?: boolean
    signedBy?: boolean
    signedAt?: boolean
    createdAt?: boolean
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
    signedUser?: boolean | Document$signedUserArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    tipo?: boolean
    filePath?: boolean
    signedBy?: boolean
    signedAt?: boolean
    createdAt?: boolean
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
    signedUser?: boolean | Document$signedUserArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    assignmentId?: boolean
    tipo?: boolean
    filePath?: boolean
    signedBy?: boolean
    signedAt?: boolean
    createdAt?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assignmentId" | "tipo" | "filePath" | "signedBy" | "signedAt" | "createdAt", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
    signedUser?: boolean | Document$signedUserArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
    signedUser?: boolean | Document$signedUserArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
    signedUser?: boolean | Document$signedUserArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      assignment: Prisma.$ServiceAssignmentPayload<ExtArgs>
      signedUser: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      assignmentId: number
      tipo: $Enums.document_type
      filePath: string
      signedBy: string | null
      signedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
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
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends ServiceAssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceAssignmentDefaultArgs<ExtArgs>>): Prisma__ServiceAssignmentClient<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    signedUser<T extends Document$signedUserArgs<ExtArgs> = {}>(args?: Subset<T, Document$signedUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'Int'>
    readonly assignmentId: FieldRef<"Document", 'Int'>
    readonly tipo: FieldRef<"Document", 'document_type'>
    readonly filePath: FieldRef<"Document", 'String'>
    readonly signedBy: FieldRef<"Document", 'String'>
    readonly signedAt: FieldRef<"Document", 'DateTime'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document.signedUser
   */
  export type Document$signedUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportAvgAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    horas: number | null
  }

  export type ReportSumAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    horas: number | null
  }

  export type ReportMinAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    tipo: $Enums.report_type | null
    periodoInicio: Date | null
    periodoFin: Date | null
    horas: number | null
    descripcion: string | null
    status: $Enums.report_status | null
    validatedBy: string | null
    validatedAt: Date | null
    filePath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    tipo: $Enums.report_type | null
    periodoInicio: Date | null
    periodoFin: Date | null
    horas: number | null
    descripcion: string | null
    status: $Enums.report_status | null
    validatedBy: string | null
    validatedAt: Date | null
    filePath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    assignmentId: number
    tipo: number
    periodoInicio: number
    periodoFin: number
    horas: number
    descripcion: number
    status: number
    validatedBy: number
    validatedAt: number
    filePath: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReportAvgAggregateInputType = {
    id?: true
    assignmentId?: true
    horas?: true
  }

  export type ReportSumAggregateInputType = {
    id?: true
    assignmentId?: true
    horas?: true
  }

  export type ReportMinAggregateInputType = {
    id?: true
    assignmentId?: true
    tipo?: true
    periodoInicio?: true
    periodoFin?: true
    horas?: true
    descripcion?: true
    status?: true
    validatedBy?: true
    validatedAt?: true
    filePath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    assignmentId?: true
    tipo?: true
    periodoInicio?: true
    periodoFin?: true
    horas?: true
    descripcion?: true
    status?: true
    validatedBy?: true
    validatedAt?: true
    filePath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    assignmentId?: true
    tipo?: true
    periodoInicio?: true
    periodoFin?: true
    horas?: true
    descripcion?: true
    status?: true
    validatedBy?: true
    validatedAt?: true
    filePath?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _avg?: ReportAvgAggregateInputType
    _sum?: ReportSumAggregateInputType
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: number
    assignmentId: number
    tipo: $Enums.report_type
    periodoInicio: Date
    periodoFin: Date
    horas: number
    descripcion: string | null
    status: $Enums.report_status
    validatedBy: string | null
    validatedAt: Date | null
    filePath: string | null
    createdAt: Date
    updatedAt: Date
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    tipo?: boolean
    periodoInicio?: boolean
    periodoFin?: boolean
    horas?: boolean
    descripcion?: boolean
    status?: boolean
    validatedBy?: boolean
    validatedAt?: boolean
    filePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
    validator?: boolean | Report$validatorArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    tipo?: boolean
    periodoInicio?: boolean
    periodoFin?: boolean
    horas?: boolean
    descripcion?: boolean
    status?: boolean
    validatedBy?: boolean
    validatedAt?: boolean
    filePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
    validator?: boolean | Report$validatorArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    tipo?: boolean
    periodoInicio?: boolean
    periodoFin?: boolean
    horas?: boolean
    descripcion?: boolean
    status?: boolean
    validatedBy?: boolean
    validatedAt?: boolean
    filePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
    validator?: boolean | Report$validatorArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    assignmentId?: boolean
    tipo?: boolean
    periodoInicio?: boolean
    periodoFin?: boolean
    horas?: boolean
    descripcion?: boolean
    status?: boolean
    validatedBy?: boolean
    validatedAt?: boolean
    filePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assignmentId" | "tipo" | "periodoInicio" | "periodoFin" | "horas" | "descripcion" | "status" | "validatedBy" | "validatedAt" | "filePath" | "createdAt" | "updatedAt", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
    validator?: boolean | Report$validatorArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
    validator?: boolean | Report$validatorArgs<ExtArgs>
  }
  export type ReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
    validator?: boolean | Report$validatorArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      assignment: Prisma.$ServiceAssignmentPayload<ExtArgs>
      validator: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      assignmentId: number
      tipo: $Enums.report_type
      periodoInicio: Date
      periodoFin: Date
      horas: number
      descripcion: string | null
      status: $Enums.report_status
      validatedBy: string | null
      validatedAt: Date | null
      filePath: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
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
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends ServiceAssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceAssignmentDefaultArgs<ExtArgs>>): Prisma__ServiceAssignmentClient<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    validator<T extends Report$validatorArgs<ExtArgs> = {}>(args?: Subset<T, Report$validatorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'Int'>
    readonly assignmentId: FieldRef<"Report", 'Int'>
    readonly tipo: FieldRef<"Report", 'report_type'>
    readonly periodoInicio: FieldRef<"Report", 'DateTime'>
    readonly periodoFin: FieldRef<"Report", 'DateTime'>
    readonly horas: FieldRef<"Report", 'Int'>
    readonly descripcion: FieldRef<"Report", 'String'>
    readonly status: FieldRef<"Report", 'report_status'>
    readonly validatedBy: FieldRef<"Report", 'String'>
    readonly validatedAt: FieldRef<"Report", 'DateTime'>
    readonly filePath: FieldRef<"Report", 'String'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
    readonly updatedAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report.validator
   */
  export type Report$validatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model HoursLog
   */

  export type AggregateHoursLog = {
    _count: HoursLogCountAggregateOutputType | null
    _avg: HoursLogAvgAggregateOutputType | null
    _sum: HoursLogSumAggregateOutputType | null
    _min: HoursLogMinAggregateOutputType | null
    _max: HoursLogMaxAggregateOutputType | null
  }

  export type HoursLogAvgAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    horas: number | null
  }

  export type HoursLogSumAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    horas: number | null
  }

  export type HoursLogMinAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    dateWorked: Date | null
    horas: number | null
    description: string | null
    validated: boolean | null
  }

  export type HoursLogMaxAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    dateWorked: Date | null
    horas: number | null
    description: string | null
    validated: boolean | null
  }

  export type HoursLogCountAggregateOutputType = {
    id: number
    assignmentId: number
    dateWorked: number
    horas: number
    description: number
    validated: number
    _all: number
  }


  export type HoursLogAvgAggregateInputType = {
    id?: true
    assignmentId?: true
    horas?: true
  }

  export type HoursLogSumAggregateInputType = {
    id?: true
    assignmentId?: true
    horas?: true
  }

  export type HoursLogMinAggregateInputType = {
    id?: true
    assignmentId?: true
    dateWorked?: true
    horas?: true
    description?: true
    validated?: true
  }

  export type HoursLogMaxAggregateInputType = {
    id?: true
    assignmentId?: true
    dateWorked?: true
    horas?: true
    description?: true
    validated?: true
  }

  export type HoursLogCountAggregateInputType = {
    id?: true
    assignmentId?: true
    dateWorked?: true
    horas?: true
    description?: true
    validated?: true
    _all?: true
  }

  export type HoursLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HoursLog to aggregate.
     */
    where?: HoursLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HoursLogs to fetch.
     */
    orderBy?: HoursLogOrderByWithRelationInput | HoursLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HoursLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HoursLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HoursLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HoursLogs
    **/
    _count?: true | HoursLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HoursLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HoursLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HoursLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HoursLogMaxAggregateInputType
  }

  export type GetHoursLogAggregateType<T extends HoursLogAggregateArgs> = {
        [P in keyof T & keyof AggregateHoursLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHoursLog[P]>
      : GetScalarType<T[P], AggregateHoursLog[P]>
  }




  export type HoursLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoursLogWhereInput
    orderBy?: HoursLogOrderByWithAggregationInput | HoursLogOrderByWithAggregationInput[]
    by: HoursLogScalarFieldEnum[] | HoursLogScalarFieldEnum
    having?: HoursLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HoursLogCountAggregateInputType | true
    _avg?: HoursLogAvgAggregateInputType
    _sum?: HoursLogSumAggregateInputType
    _min?: HoursLogMinAggregateInputType
    _max?: HoursLogMaxAggregateInputType
  }

  export type HoursLogGroupByOutputType = {
    id: number
    assignmentId: number
    dateWorked: Date
    horas: number
    description: string | null
    validated: boolean
    _count: HoursLogCountAggregateOutputType | null
    _avg: HoursLogAvgAggregateOutputType | null
    _sum: HoursLogSumAggregateOutputType | null
    _min: HoursLogMinAggregateOutputType | null
    _max: HoursLogMaxAggregateOutputType | null
  }

  type GetHoursLogGroupByPayload<T extends HoursLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HoursLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HoursLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HoursLogGroupByOutputType[P]>
            : GetScalarType<T[P], HoursLogGroupByOutputType[P]>
        }
      >
    >


  export type HoursLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    dateWorked?: boolean
    horas?: boolean
    description?: boolean
    validated?: boolean
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hoursLog"]>

  export type HoursLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    dateWorked?: boolean
    horas?: boolean
    description?: boolean
    validated?: boolean
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hoursLog"]>

  export type HoursLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    dateWorked?: boolean
    horas?: boolean
    description?: boolean
    validated?: boolean
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hoursLog"]>

  export type HoursLogSelectScalar = {
    id?: boolean
    assignmentId?: boolean
    dateWorked?: boolean
    horas?: boolean
    description?: boolean
    validated?: boolean
  }

  export type HoursLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assignmentId" | "dateWorked" | "horas" | "description" | "validated", ExtArgs["result"]["hoursLog"]>
  export type HoursLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
  }
  export type HoursLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
  }
  export type HoursLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
  }

  export type $HoursLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HoursLog"
    objects: {
      assignment: Prisma.$ServiceAssignmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      assignmentId: number
      dateWorked: Date
      horas: number
      description: string | null
      validated: boolean
    }, ExtArgs["result"]["hoursLog"]>
    composites: {}
  }

  type HoursLogGetPayload<S extends boolean | null | undefined | HoursLogDefaultArgs> = $Result.GetResult<Prisma.$HoursLogPayload, S>

  type HoursLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HoursLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HoursLogCountAggregateInputType | true
    }

  export interface HoursLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HoursLog'], meta: { name: 'HoursLog' } }
    /**
     * Find zero or one HoursLog that matches the filter.
     * @param {HoursLogFindUniqueArgs} args - Arguments to find a HoursLog
     * @example
     * // Get one HoursLog
     * const hoursLog = await prisma.hoursLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HoursLogFindUniqueArgs>(args: SelectSubset<T, HoursLogFindUniqueArgs<ExtArgs>>): Prisma__HoursLogClient<$Result.GetResult<Prisma.$HoursLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HoursLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HoursLogFindUniqueOrThrowArgs} args - Arguments to find a HoursLog
     * @example
     * // Get one HoursLog
     * const hoursLog = await prisma.hoursLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HoursLogFindUniqueOrThrowArgs>(args: SelectSubset<T, HoursLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HoursLogClient<$Result.GetResult<Prisma.$HoursLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HoursLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoursLogFindFirstArgs} args - Arguments to find a HoursLog
     * @example
     * // Get one HoursLog
     * const hoursLog = await prisma.hoursLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HoursLogFindFirstArgs>(args?: SelectSubset<T, HoursLogFindFirstArgs<ExtArgs>>): Prisma__HoursLogClient<$Result.GetResult<Prisma.$HoursLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HoursLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoursLogFindFirstOrThrowArgs} args - Arguments to find a HoursLog
     * @example
     * // Get one HoursLog
     * const hoursLog = await prisma.hoursLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HoursLogFindFirstOrThrowArgs>(args?: SelectSubset<T, HoursLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__HoursLogClient<$Result.GetResult<Prisma.$HoursLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HoursLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoursLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HoursLogs
     * const hoursLogs = await prisma.hoursLog.findMany()
     * 
     * // Get first 10 HoursLogs
     * const hoursLogs = await prisma.hoursLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hoursLogWithIdOnly = await prisma.hoursLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HoursLogFindManyArgs>(args?: SelectSubset<T, HoursLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoursLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HoursLog.
     * @param {HoursLogCreateArgs} args - Arguments to create a HoursLog.
     * @example
     * // Create one HoursLog
     * const HoursLog = await prisma.hoursLog.create({
     *   data: {
     *     // ... data to create a HoursLog
     *   }
     * })
     * 
     */
    create<T extends HoursLogCreateArgs>(args: SelectSubset<T, HoursLogCreateArgs<ExtArgs>>): Prisma__HoursLogClient<$Result.GetResult<Prisma.$HoursLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HoursLogs.
     * @param {HoursLogCreateManyArgs} args - Arguments to create many HoursLogs.
     * @example
     * // Create many HoursLogs
     * const hoursLog = await prisma.hoursLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HoursLogCreateManyArgs>(args?: SelectSubset<T, HoursLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HoursLogs and returns the data saved in the database.
     * @param {HoursLogCreateManyAndReturnArgs} args - Arguments to create many HoursLogs.
     * @example
     * // Create many HoursLogs
     * const hoursLog = await prisma.hoursLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HoursLogs and only return the `id`
     * const hoursLogWithIdOnly = await prisma.hoursLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HoursLogCreateManyAndReturnArgs>(args?: SelectSubset<T, HoursLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoursLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HoursLog.
     * @param {HoursLogDeleteArgs} args - Arguments to delete one HoursLog.
     * @example
     * // Delete one HoursLog
     * const HoursLog = await prisma.hoursLog.delete({
     *   where: {
     *     // ... filter to delete one HoursLog
     *   }
     * })
     * 
     */
    delete<T extends HoursLogDeleteArgs>(args: SelectSubset<T, HoursLogDeleteArgs<ExtArgs>>): Prisma__HoursLogClient<$Result.GetResult<Prisma.$HoursLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HoursLog.
     * @param {HoursLogUpdateArgs} args - Arguments to update one HoursLog.
     * @example
     * // Update one HoursLog
     * const hoursLog = await prisma.hoursLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HoursLogUpdateArgs>(args: SelectSubset<T, HoursLogUpdateArgs<ExtArgs>>): Prisma__HoursLogClient<$Result.GetResult<Prisma.$HoursLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HoursLogs.
     * @param {HoursLogDeleteManyArgs} args - Arguments to filter HoursLogs to delete.
     * @example
     * // Delete a few HoursLogs
     * const { count } = await prisma.hoursLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HoursLogDeleteManyArgs>(args?: SelectSubset<T, HoursLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HoursLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoursLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HoursLogs
     * const hoursLog = await prisma.hoursLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HoursLogUpdateManyArgs>(args: SelectSubset<T, HoursLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HoursLogs and returns the data updated in the database.
     * @param {HoursLogUpdateManyAndReturnArgs} args - Arguments to update many HoursLogs.
     * @example
     * // Update many HoursLogs
     * const hoursLog = await prisma.hoursLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HoursLogs and only return the `id`
     * const hoursLogWithIdOnly = await prisma.hoursLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends HoursLogUpdateManyAndReturnArgs>(args: SelectSubset<T, HoursLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoursLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HoursLog.
     * @param {HoursLogUpsertArgs} args - Arguments to update or create a HoursLog.
     * @example
     * // Update or create a HoursLog
     * const hoursLog = await prisma.hoursLog.upsert({
     *   create: {
     *     // ... data to create a HoursLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HoursLog we want to update
     *   }
     * })
     */
    upsert<T extends HoursLogUpsertArgs>(args: SelectSubset<T, HoursLogUpsertArgs<ExtArgs>>): Prisma__HoursLogClient<$Result.GetResult<Prisma.$HoursLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HoursLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoursLogCountArgs} args - Arguments to filter HoursLogs to count.
     * @example
     * // Count the number of HoursLogs
     * const count = await prisma.hoursLog.count({
     *   where: {
     *     // ... the filter for the HoursLogs we want to count
     *   }
     * })
    **/
    count<T extends HoursLogCountArgs>(
      args?: Subset<T, HoursLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HoursLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HoursLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoursLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HoursLogAggregateArgs>(args: Subset<T, HoursLogAggregateArgs>): Prisma.PrismaPromise<GetHoursLogAggregateType<T>>

    /**
     * Group by HoursLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoursLogGroupByArgs} args - Group by arguments.
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
      T extends HoursLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HoursLogGroupByArgs['orderBy'] }
        : { orderBy?: HoursLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HoursLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHoursLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HoursLog model
   */
  readonly fields: HoursLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HoursLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HoursLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends ServiceAssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceAssignmentDefaultArgs<ExtArgs>>): Prisma__ServiceAssignmentClient<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HoursLog model
   */
  interface HoursLogFieldRefs {
    readonly id: FieldRef<"HoursLog", 'Int'>
    readonly assignmentId: FieldRef<"HoursLog", 'Int'>
    readonly dateWorked: FieldRef<"HoursLog", 'DateTime'>
    readonly horas: FieldRef<"HoursLog", 'Int'>
    readonly description: FieldRef<"HoursLog", 'String'>
    readonly validated: FieldRef<"HoursLog", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * HoursLog findUnique
   */
  export type HoursLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoursLog
     */
    select?: HoursLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoursLog
     */
    omit?: HoursLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursLogInclude<ExtArgs> | null
    /**
     * Filter, which HoursLog to fetch.
     */
    where: HoursLogWhereUniqueInput
  }

  /**
   * HoursLog findUniqueOrThrow
   */
  export type HoursLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoursLog
     */
    select?: HoursLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoursLog
     */
    omit?: HoursLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursLogInclude<ExtArgs> | null
    /**
     * Filter, which HoursLog to fetch.
     */
    where: HoursLogWhereUniqueInput
  }

  /**
   * HoursLog findFirst
   */
  export type HoursLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoursLog
     */
    select?: HoursLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoursLog
     */
    omit?: HoursLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursLogInclude<ExtArgs> | null
    /**
     * Filter, which HoursLog to fetch.
     */
    where?: HoursLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HoursLogs to fetch.
     */
    orderBy?: HoursLogOrderByWithRelationInput | HoursLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HoursLogs.
     */
    cursor?: HoursLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HoursLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HoursLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HoursLogs.
     */
    distinct?: HoursLogScalarFieldEnum | HoursLogScalarFieldEnum[]
  }

  /**
   * HoursLog findFirstOrThrow
   */
  export type HoursLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoursLog
     */
    select?: HoursLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoursLog
     */
    omit?: HoursLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursLogInclude<ExtArgs> | null
    /**
     * Filter, which HoursLog to fetch.
     */
    where?: HoursLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HoursLogs to fetch.
     */
    orderBy?: HoursLogOrderByWithRelationInput | HoursLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HoursLogs.
     */
    cursor?: HoursLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HoursLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HoursLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HoursLogs.
     */
    distinct?: HoursLogScalarFieldEnum | HoursLogScalarFieldEnum[]
  }

  /**
   * HoursLog findMany
   */
  export type HoursLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoursLog
     */
    select?: HoursLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoursLog
     */
    omit?: HoursLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursLogInclude<ExtArgs> | null
    /**
     * Filter, which HoursLogs to fetch.
     */
    where?: HoursLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HoursLogs to fetch.
     */
    orderBy?: HoursLogOrderByWithRelationInput | HoursLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HoursLogs.
     */
    cursor?: HoursLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HoursLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HoursLogs.
     */
    skip?: number
    distinct?: HoursLogScalarFieldEnum | HoursLogScalarFieldEnum[]
  }

  /**
   * HoursLog create
   */
  export type HoursLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoursLog
     */
    select?: HoursLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoursLog
     */
    omit?: HoursLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursLogInclude<ExtArgs> | null
    /**
     * The data needed to create a HoursLog.
     */
    data: XOR<HoursLogCreateInput, HoursLogUncheckedCreateInput>
  }

  /**
   * HoursLog createMany
   */
  export type HoursLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HoursLogs.
     */
    data: HoursLogCreateManyInput | HoursLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HoursLog createManyAndReturn
   */
  export type HoursLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoursLog
     */
    select?: HoursLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HoursLog
     */
    omit?: HoursLogOmit<ExtArgs> | null
    /**
     * The data used to create many HoursLogs.
     */
    data: HoursLogCreateManyInput | HoursLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HoursLog update
   */
  export type HoursLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoursLog
     */
    select?: HoursLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoursLog
     */
    omit?: HoursLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursLogInclude<ExtArgs> | null
    /**
     * The data needed to update a HoursLog.
     */
    data: XOR<HoursLogUpdateInput, HoursLogUncheckedUpdateInput>
    /**
     * Choose, which HoursLog to update.
     */
    where: HoursLogWhereUniqueInput
  }

  /**
   * HoursLog updateMany
   */
  export type HoursLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HoursLogs.
     */
    data: XOR<HoursLogUpdateManyMutationInput, HoursLogUncheckedUpdateManyInput>
    /**
     * Filter which HoursLogs to update
     */
    where?: HoursLogWhereInput
    /**
     * Limit how many HoursLogs to update.
     */
    limit?: number
  }

  /**
   * HoursLog updateManyAndReturn
   */
  export type HoursLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoursLog
     */
    select?: HoursLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HoursLog
     */
    omit?: HoursLogOmit<ExtArgs> | null
    /**
     * The data used to update HoursLogs.
     */
    data: XOR<HoursLogUpdateManyMutationInput, HoursLogUncheckedUpdateManyInput>
    /**
     * Filter which HoursLogs to update
     */
    where?: HoursLogWhereInput
    /**
     * Limit how many HoursLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HoursLog upsert
   */
  export type HoursLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoursLog
     */
    select?: HoursLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoursLog
     */
    omit?: HoursLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursLogInclude<ExtArgs> | null
    /**
     * The filter to search for the HoursLog to update in case it exists.
     */
    where: HoursLogWhereUniqueInput
    /**
     * In case the HoursLog found by the `where` argument doesn't exist, create a new HoursLog with this data.
     */
    create: XOR<HoursLogCreateInput, HoursLogUncheckedCreateInput>
    /**
     * In case the HoursLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HoursLogUpdateInput, HoursLogUncheckedUpdateInput>
  }

  /**
   * HoursLog delete
   */
  export type HoursLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoursLog
     */
    select?: HoursLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoursLog
     */
    omit?: HoursLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursLogInclude<ExtArgs> | null
    /**
     * Filter which HoursLog to delete.
     */
    where: HoursLogWhereUniqueInput
  }

  /**
   * HoursLog deleteMany
   */
  export type HoursLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HoursLogs to delete
     */
    where?: HoursLogWhereInput
    /**
     * Limit how many HoursLogs to delete.
     */
    limit?: number
  }

  /**
   * HoursLog without action
   */
  export type HoursLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoursLog
     */
    select?: HoursLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoursLog
     */
    omit?: HoursLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoursLogInclude<ExtArgs> | null
  }


  /**
   * Model Incident
   */

  export type AggregateIncident = {
    _count: IncidentCountAggregateOutputType | null
    _avg: IncidentAvgAggregateOutputType | null
    _sum: IncidentSumAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  export type IncidentAvgAggregateOutputType = {
    id: number | null
    assignmentId: number | null
  }

  export type IncidentSumAggregateOutputType = {
    id: number | null
    assignmentId: number | null
  }

  export type IncidentMinAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    reportedBy: string | null
    reportedAt: Date | null
    tipo: string | null
    descripcion: string | null
    estado: $Enums.incident_status | null
    resolvedBy: string | null
    resolvedAt: Date | null
    resolutionNotes: string | null
  }

  export type IncidentMaxAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    reportedBy: string | null
    reportedAt: Date | null
    tipo: string | null
    descripcion: string | null
    estado: $Enums.incident_status | null
    resolvedBy: string | null
    resolvedAt: Date | null
    resolutionNotes: string | null
  }

  export type IncidentCountAggregateOutputType = {
    id: number
    assignmentId: number
    reportedBy: number
    reportedAt: number
    tipo: number
    descripcion: number
    estado: number
    resolvedBy: number
    resolvedAt: number
    resolutionNotes: number
    _all: number
  }


  export type IncidentAvgAggregateInputType = {
    id?: true
    assignmentId?: true
  }

  export type IncidentSumAggregateInputType = {
    id?: true
    assignmentId?: true
  }

  export type IncidentMinAggregateInputType = {
    id?: true
    assignmentId?: true
    reportedBy?: true
    reportedAt?: true
    tipo?: true
    descripcion?: true
    estado?: true
    resolvedBy?: true
    resolvedAt?: true
    resolutionNotes?: true
  }

  export type IncidentMaxAggregateInputType = {
    id?: true
    assignmentId?: true
    reportedBy?: true
    reportedAt?: true
    tipo?: true
    descripcion?: true
    estado?: true
    resolvedBy?: true
    resolvedAt?: true
    resolutionNotes?: true
  }

  export type IncidentCountAggregateInputType = {
    id?: true
    assignmentId?: true
    reportedBy?: true
    reportedAt?: true
    tipo?: true
    descripcion?: true
    estado?: true
    resolvedBy?: true
    resolvedAt?: true
    resolutionNotes?: true
    _all?: true
  }

  export type IncidentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incident to aggregate.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Incidents
    **/
    _count?: true | IncidentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncidentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncidentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentMaxAggregateInputType
  }

  export type GetIncidentAggregateType<T extends IncidentAggregateArgs> = {
        [P in keyof T & keyof AggregateIncident]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncident[P]>
      : GetScalarType<T[P], AggregateIncident[P]>
  }




  export type IncidentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithAggregationInput | IncidentOrderByWithAggregationInput[]
    by: IncidentScalarFieldEnum[] | IncidentScalarFieldEnum
    having?: IncidentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentCountAggregateInputType | true
    _avg?: IncidentAvgAggregateInputType
    _sum?: IncidentSumAggregateInputType
    _min?: IncidentMinAggregateInputType
    _max?: IncidentMaxAggregateInputType
  }

  export type IncidentGroupByOutputType = {
    id: number
    assignmentId: number | null
    reportedBy: string
    reportedAt: Date
    tipo: string
    descripcion: string
    estado: $Enums.incident_status
    resolvedBy: string | null
    resolvedAt: Date | null
    resolutionNotes: string | null
    _count: IncidentCountAggregateOutputType | null
    _avg: IncidentAvgAggregateOutputType | null
    _sum: IncidentSumAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  type GetIncidentGroupByPayload<T extends IncidentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentGroupByOutputType[P]>
        }
      >
    >


  export type IncidentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    reportedBy?: boolean
    reportedAt?: boolean
    tipo?: boolean
    descripcion?: boolean
    estado?: boolean
    resolvedBy?: boolean
    resolvedAt?: boolean
    resolutionNotes?: boolean
    assignment?: boolean | Incident$assignmentArgs<ExtArgs>
    reporter?: boolean | UserDefaultArgs<ExtArgs>
    resolver?: boolean | Incident$resolverArgs<ExtArgs>
    messages?: boolean | Incident$messagesArgs<ExtArgs>
    _count?: boolean | IncidentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    reportedBy?: boolean
    reportedAt?: boolean
    tipo?: boolean
    descripcion?: boolean
    estado?: boolean
    resolvedBy?: boolean
    resolvedAt?: boolean
    resolutionNotes?: boolean
    assignment?: boolean | Incident$assignmentArgs<ExtArgs>
    reporter?: boolean | UserDefaultArgs<ExtArgs>
    resolver?: boolean | Incident$resolverArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    reportedBy?: boolean
    reportedAt?: boolean
    tipo?: boolean
    descripcion?: boolean
    estado?: boolean
    resolvedBy?: boolean
    resolvedAt?: boolean
    resolutionNotes?: boolean
    assignment?: boolean | Incident$assignmentArgs<ExtArgs>
    reporter?: boolean | UserDefaultArgs<ExtArgs>
    resolver?: boolean | Incident$resolverArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectScalar = {
    id?: boolean
    assignmentId?: boolean
    reportedBy?: boolean
    reportedAt?: boolean
    tipo?: boolean
    descripcion?: boolean
    estado?: boolean
    resolvedBy?: boolean
    resolvedAt?: boolean
    resolutionNotes?: boolean
  }

  export type IncidentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assignmentId" | "reportedBy" | "reportedAt" | "tipo" | "descripcion" | "estado" | "resolvedBy" | "resolvedAt" | "resolutionNotes", ExtArgs["result"]["incident"]>
  export type IncidentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | Incident$assignmentArgs<ExtArgs>
    reporter?: boolean | UserDefaultArgs<ExtArgs>
    resolver?: boolean | Incident$resolverArgs<ExtArgs>
    messages?: boolean | Incident$messagesArgs<ExtArgs>
    _count?: boolean | IncidentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IncidentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | Incident$assignmentArgs<ExtArgs>
    reporter?: boolean | UserDefaultArgs<ExtArgs>
    resolver?: boolean | Incident$resolverArgs<ExtArgs>
  }
  export type IncidentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | Incident$assignmentArgs<ExtArgs>
    reporter?: boolean | UserDefaultArgs<ExtArgs>
    resolver?: boolean | Incident$resolverArgs<ExtArgs>
  }

  export type $IncidentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Incident"
    objects: {
      assignment: Prisma.$ServiceAssignmentPayload<ExtArgs> | null
      reporter: Prisma.$UserPayload<ExtArgs>
      resolver: Prisma.$UserPayload<ExtArgs> | null
      messages: Prisma.$IncidentMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      assignmentId: number | null
      reportedBy: string
      reportedAt: Date
      tipo: string
      descripcion: string
      estado: $Enums.incident_status
      resolvedBy: string | null
      resolvedAt: Date | null
      resolutionNotes: string | null
    }, ExtArgs["result"]["incident"]>
    composites: {}
  }

  type IncidentGetPayload<S extends boolean | null | undefined | IncidentDefaultArgs> = $Result.GetResult<Prisma.$IncidentPayload, S>

  type IncidentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentCountAggregateInputType | true
    }

  export interface IncidentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Incident'], meta: { name: 'Incident' } }
    /**
     * Find zero or one Incident that matches the filter.
     * @param {IncidentFindUniqueArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentFindUniqueArgs>(args: SelectSubset<T, IncidentFindUniqueArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Incident that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentFindUniqueOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentFindFirstArgs>(args?: SelectSubset<T, IncidentFindFirstArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incidents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incidents
     * const incidents = await prisma.incident.findMany()
     * 
     * // Get first 10 Incidents
     * const incidents = await prisma.incident.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentWithIdOnly = await prisma.incident.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentFindManyArgs>(args?: SelectSubset<T, IncidentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Incident.
     * @param {IncidentCreateArgs} args - Arguments to create a Incident.
     * @example
     * // Create one Incident
     * const Incident = await prisma.incident.create({
     *   data: {
     *     // ... data to create a Incident
     *   }
     * })
     * 
     */
    create<T extends IncidentCreateArgs>(args: SelectSubset<T, IncidentCreateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Incidents.
     * @param {IncidentCreateManyArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentCreateManyArgs>(args?: SelectSubset<T, IncidentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Incidents and returns the data saved in the database.
     * @param {IncidentCreateManyAndReturnArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Incidents and only return the `id`
     * const incidentWithIdOnly = await prisma.incident.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncidentCreateManyAndReturnArgs>(args?: SelectSubset<T, IncidentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Incident.
     * @param {IncidentDeleteArgs} args - Arguments to delete one Incident.
     * @example
     * // Delete one Incident
     * const Incident = await prisma.incident.delete({
     *   where: {
     *     // ... filter to delete one Incident
     *   }
     * })
     * 
     */
    delete<T extends IncidentDeleteArgs>(args: SelectSubset<T, IncidentDeleteArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Incident.
     * @param {IncidentUpdateArgs} args - Arguments to update one Incident.
     * @example
     * // Update one Incident
     * const incident = await prisma.incident.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentUpdateArgs>(args: SelectSubset<T, IncidentUpdateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Incidents.
     * @param {IncidentDeleteManyArgs} args - Arguments to filter Incidents to delete.
     * @example
     * // Delete a few Incidents
     * const { count } = await prisma.incident.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentDeleteManyArgs>(args?: SelectSubset<T, IncidentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentUpdateManyArgs>(args: SelectSubset<T, IncidentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents and returns the data updated in the database.
     * @param {IncidentUpdateManyAndReturnArgs} args - Arguments to update many Incidents.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Incidents and only return the `id`
     * const incidentWithIdOnly = await prisma.incident.updateManyAndReturn({
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
    updateManyAndReturn<T extends IncidentUpdateManyAndReturnArgs>(args: SelectSubset<T, IncidentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Incident.
     * @param {IncidentUpsertArgs} args - Arguments to update or create a Incident.
     * @example
     * // Update or create a Incident
     * const incident = await prisma.incident.upsert({
     *   create: {
     *     // ... data to create a Incident
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incident we want to update
     *   }
     * })
     */
    upsert<T extends IncidentUpsertArgs>(args: SelectSubset<T, IncidentUpsertArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentCountArgs} args - Arguments to filter Incidents to count.
     * @example
     * // Count the number of Incidents
     * const count = await prisma.incident.count({
     *   where: {
     *     // ... the filter for the Incidents we want to count
     *   }
     * })
    **/
    count<T extends IncidentCountArgs>(
      args?: Subset<T, IncidentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IncidentAggregateArgs>(args: Subset<T, IncidentAggregateArgs>): Prisma.PrismaPromise<GetIncidentAggregateType<T>>

    /**
     * Group by Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentGroupByArgs} args - Group by arguments.
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
      T extends IncidentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentGroupByArgs['orderBy'] }
        : { orderBy?: IncidentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IncidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Incident model
   */
  readonly fields: IncidentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Incident.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends Incident$assignmentArgs<ExtArgs> = {}>(args?: Subset<T, Incident$assignmentArgs<ExtArgs>>): Prisma__ServiceAssignmentClient<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reporter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resolver<T extends Incident$resolverArgs<ExtArgs> = {}>(args?: Subset<T, Incident$resolverArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    messages<T extends Incident$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Incident$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Incident model
   */
  interface IncidentFieldRefs {
    readonly id: FieldRef<"Incident", 'Int'>
    readonly assignmentId: FieldRef<"Incident", 'Int'>
    readonly reportedBy: FieldRef<"Incident", 'String'>
    readonly reportedAt: FieldRef<"Incident", 'DateTime'>
    readonly tipo: FieldRef<"Incident", 'String'>
    readonly descripcion: FieldRef<"Incident", 'String'>
    readonly estado: FieldRef<"Incident", 'incident_status'>
    readonly resolvedBy: FieldRef<"Incident", 'String'>
    readonly resolvedAt: FieldRef<"Incident", 'DateTime'>
    readonly resolutionNotes: FieldRef<"Incident", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Incident findUnique
   */
  export type IncidentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findUniqueOrThrow
   */
  export type IncidentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findFirst
   */
  export type IncidentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findFirstOrThrow
   */
  export type IncidentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findMany
   */
  export type IncidentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incidents to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident create
   */
  export type IncidentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to create a Incident.
     */
    data: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
  }

  /**
   * Incident createMany
   */
  export type IncidentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Incident createManyAndReturn
   */
  export type IncidentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Incident update
   */
  export type IncidentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to update a Incident.
     */
    data: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
    /**
     * Choose, which Incident to update.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident updateMany
   */
  export type IncidentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
  }

  /**
   * Incident updateManyAndReturn
   */
  export type IncidentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Incident upsert
   */
  export type IncidentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The filter to search for the Incident to update in case it exists.
     */
    where: IncidentWhereUniqueInput
    /**
     * In case the Incident found by the `where` argument doesn't exist, create a new Incident with this data.
     */
    create: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
    /**
     * In case the Incident was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
  }

  /**
   * Incident delete
   */
  export type IncidentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter which Incident to delete.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident deleteMany
   */
  export type IncidentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incidents to delete
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to delete.
     */
    limit?: number
  }

  /**
   * Incident.assignment
   */
  export type Incident$assignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAssignment
     */
    select?: ServiceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAssignment
     */
    omit?: ServiceAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAssignmentInclude<ExtArgs> | null
    where?: ServiceAssignmentWhereInput
  }

  /**
   * Incident.resolver
   */
  export type Incident$resolverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Incident.messages
   */
  export type Incident$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentMessage
     */
    select?: IncidentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentMessage
     */
    omit?: IncidentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentMessageInclude<ExtArgs> | null
    where?: IncidentMessageWhereInput
    orderBy?: IncidentMessageOrderByWithRelationInput | IncidentMessageOrderByWithRelationInput[]
    cursor?: IncidentMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentMessageScalarFieldEnum | IncidentMessageScalarFieldEnum[]
  }

  /**
   * Incident without action
   */
  export type IncidentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
  }


  /**
   * Model IncidentMessage
   */

  export type AggregateIncidentMessage = {
    _count: IncidentMessageCountAggregateOutputType | null
    _avg: IncidentMessageAvgAggregateOutputType | null
    _sum: IncidentMessageSumAggregateOutputType | null
    _min: IncidentMessageMinAggregateOutputType | null
    _max: IncidentMessageMaxAggregateOutputType | null
  }

  export type IncidentMessageAvgAggregateOutputType = {
    id: number | null
    incidentId: number | null
  }

  export type IncidentMessageSumAggregateOutputType = {
    id: number | null
    incidentId: number | null
  }

  export type IncidentMessageMinAggregateOutputType = {
    id: number | null
    incidentId: number | null
    senderId: string | null
    message: string | null
    sentAt: Date | null
  }

  export type IncidentMessageMaxAggregateOutputType = {
    id: number | null
    incidentId: number | null
    senderId: string | null
    message: string | null
    sentAt: Date | null
  }

  export type IncidentMessageCountAggregateOutputType = {
    id: number
    incidentId: number
    senderId: number
    message: number
    sentAt: number
    _all: number
  }


  export type IncidentMessageAvgAggregateInputType = {
    id?: true
    incidentId?: true
  }

  export type IncidentMessageSumAggregateInputType = {
    id?: true
    incidentId?: true
  }

  export type IncidentMessageMinAggregateInputType = {
    id?: true
    incidentId?: true
    senderId?: true
    message?: true
    sentAt?: true
  }

  export type IncidentMessageMaxAggregateInputType = {
    id?: true
    incidentId?: true
    senderId?: true
    message?: true
    sentAt?: true
  }

  export type IncidentMessageCountAggregateInputType = {
    id?: true
    incidentId?: true
    senderId?: true
    message?: true
    sentAt?: true
    _all?: true
  }

  export type IncidentMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidentMessage to aggregate.
     */
    where?: IncidentMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentMessages to fetch.
     */
    orderBy?: IncidentMessageOrderByWithRelationInput | IncidentMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IncidentMessages
    **/
    _count?: true | IncidentMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncidentMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncidentMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentMessageMaxAggregateInputType
  }

  export type GetIncidentMessageAggregateType<T extends IncidentMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateIncidentMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncidentMessage[P]>
      : GetScalarType<T[P], AggregateIncidentMessage[P]>
  }




  export type IncidentMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentMessageWhereInput
    orderBy?: IncidentMessageOrderByWithAggregationInput | IncidentMessageOrderByWithAggregationInput[]
    by: IncidentMessageScalarFieldEnum[] | IncidentMessageScalarFieldEnum
    having?: IncidentMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentMessageCountAggregateInputType | true
    _avg?: IncidentMessageAvgAggregateInputType
    _sum?: IncidentMessageSumAggregateInputType
    _min?: IncidentMessageMinAggregateInputType
    _max?: IncidentMessageMaxAggregateInputType
  }

  export type IncidentMessageGroupByOutputType = {
    id: number
    incidentId: number
    senderId: string
    message: string
    sentAt: Date
    _count: IncidentMessageCountAggregateOutputType | null
    _avg: IncidentMessageAvgAggregateOutputType | null
    _sum: IncidentMessageSumAggregateOutputType | null
    _min: IncidentMessageMinAggregateOutputType | null
    _max: IncidentMessageMaxAggregateOutputType | null
  }

  type GetIncidentMessageGroupByPayload<T extends IncidentMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentMessageGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentMessageGroupByOutputType[P]>
        }
      >
    >


  export type IncidentMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    senderId?: boolean
    message?: boolean
    sentAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incidentMessage"]>

  export type IncidentMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    senderId?: boolean
    message?: boolean
    sentAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incidentMessage"]>

  export type IncidentMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    senderId?: boolean
    message?: boolean
    sentAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incidentMessage"]>

  export type IncidentMessageSelectScalar = {
    id?: boolean
    incidentId?: boolean
    senderId?: boolean
    message?: boolean
    sentAt?: boolean
  }

  export type IncidentMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "incidentId" | "senderId" | "message" | "sentAt", ExtArgs["result"]["incidentMessage"]>
  export type IncidentMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IncidentMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IncidentMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IncidentMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IncidentMessage"
    objects: {
      incident: Prisma.$IncidentPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      incidentId: number
      senderId: string
      message: string
      sentAt: Date
    }, ExtArgs["result"]["incidentMessage"]>
    composites: {}
  }

  type IncidentMessageGetPayload<S extends boolean | null | undefined | IncidentMessageDefaultArgs> = $Result.GetResult<Prisma.$IncidentMessagePayload, S>

  type IncidentMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentMessageCountAggregateInputType | true
    }

  export interface IncidentMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IncidentMessage'], meta: { name: 'IncidentMessage' } }
    /**
     * Find zero or one IncidentMessage that matches the filter.
     * @param {IncidentMessageFindUniqueArgs} args - Arguments to find a IncidentMessage
     * @example
     * // Get one IncidentMessage
     * const incidentMessage = await prisma.incidentMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentMessageFindUniqueArgs>(args: SelectSubset<T, IncidentMessageFindUniqueArgs<ExtArgs>>): Prisma__IncidentMessageClient<$Result.GetResult<Prisma.$IncidentMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IncidentMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentMessageFindUniqueOrThrowArgs} args - Arguments to find a IncidentMessage
     * @example
     * // Get one IncidentMessage
     * const incidentMessage = await prisma.incidentMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentMessageClient<$Result.GetResult<Prisma.$IncidentMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidentMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentMessageFindFirstArgs} args - Arguments to find a IncidentMessage
     * @example
     * // Get one IncidentMessage
     * const incidentMessage = await prisma.incidentMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentMessageFindFirstArgs>(args?: SelectSubset<T, IncidentMessageFindFirstArgs<ExtArgs>>): Prisma__IncidentMessageClient<$Result.GetResult<Prisma.$IncidentMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidentMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentMessageFindFirstOrThrowArgs} args - Arguments to find a IncidentMessage
     * @example
     * // Get one IncidentMessage
     * const incidentMessage = await prisma.incidentMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentMessageClient<$Result.GetResult<Prisma.$IncidentMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IncidentMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IncidentMessages
     * const incidentMessages = await prisma.incidentMessage.findMany()
     * 
     * // Get first 10 IncidentMessages
     * const incidentMessages = await prisma.incidentMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentMessageWithIdOnly = await prisma.incidentMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentMessageFindManyArgs>(args?: SelectSubset<T, IncidentMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IncidentMessage.
     * @param {IncidentMessageCreateArgs} args - Arguments to create a IncidentMessage.
     * @example
     * // Create one IncidentMessage
     * const IncidentMessage = await prisma.incidentMessage.create({
     *   data: {
     *     // ... data to create a IncidentMessage
     *   }
     * })
     * 
     */
    create<T extends IncidentMessageCreateArgs>(args: SelectSubset<T, IncidentMessageCreateArgs<ExtArgs>>): Prisma__IncidentMessageClient<$Result.GetResult<Prisma.$IncidentMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IncidentMessages.
     * @param {IncidentMessageCreateManyArgs} args - Arguments to create many IncidentMessages.
     * @example
     * // Create many IncidentMessages
     * const incidentMessage = await prisma.incidentMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentMessageCreateManyArgs>(args?: SelectSubset<T, IncidentMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IncidentMessages and returns the data saved in the database.
     * @param {IncidentMessageCreateManyAndReturnArgs} args - Arguments to create many IncidentMessages.
     * @example
     * // Create many IncidentMessages
     * const incidentMessage = await prisma.incidentMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IncidentMessages and only return the `id`
     * const incidentMessageWithIdOnly = await prisma.incidentMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncidentMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, IncidentMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IncidentMessage.
     * @param {IncidentMessageDeleteArgs} args - Arguments to delete one IncidentMessage.
     * @example
     * // Delete one IncidentMessage
     * const IncidentMessage = await prisma.incidentMessage.delete({
     *   where: {
     *     // ... filter to delete one IncidentMessage
     *   }
     * })
     * 
     */
    delete<T extends IncidentMessageDeleteArgs>(args: SelectSubset<T, IncidentMessageDeleteArgs<ExtArgs>>): Prisma__IncidentMessageClient<$Result.GetResult<Prisma.$IncidentMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IncidentMessage.
     * @param {IncidentMessageUpdateArgs} args - Arguments to update one IncidentMessage.
     * @example
     * // Update one IncidentMessage
     * const incidentMessage = await prisma.incidentMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentMessageUpdateArgs>(args: SelectSubset<T, IncidentMessageUpdateArgs<ExtArgs>>): Prisma__IncidentMessageClient<$Result.GetResult<Prisma.$IncidentMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IncidentMessages.
     * @param {IncidentMessageDeleteManyArgs} args - Arguments to filter IncidentMessages to delete.
     * @example
     * // Delete a few IncidentMessages
     * const { count } = await prisma.incidentMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentMessageDeleteManyArgs>(args?: SelectSubset<T, IncidentMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncidentMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IncidentMessages
     * const incidentMessage = await prisma.incidentMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentMessageUpdateManyArgs>(args: SelectSubset<T, IncidentMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncidentMessages and returns the data updated in the database.
     * @param {IncidentMessageUpdateManyAndReturnArgs} args - Arguments to update many IncidentMessages.
     * @example
     * // Update many IncidentMessages
     * const incidentMessage = await prisma.incidentMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IncidentMessages and only return the `id`
     * const incidentMessageWithIdOnly = await prisma.incidentMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends IncidentMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, IncidentMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IncidentMessage.
     * @param {IncidentMessageUpsertArgs} args - Arguments to update or create a IncidentMessage.
     * @example
     * // Update or create a IncidentMessage
     * const incidentMessage = await prisma.incidentMessage.upsert({
     *   create: {
     *     // ... data to create a IncidentMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IncidentMessage we want to update
     *   }
     * })
     */
    upsert<T extends IncidentMessageUpsertArgs>(args: SelectSubset<T, IncidentMessageUpsertArgs<ExtArgs>>): Prisma__IncidentMessageClient<$Result.GetResult<Prisma.$IncidentMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IncidentMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentMessageCountArgs} args - Arguments to filter IncidentMessages to count.
     * @example
     * // Count the number of IncidentMessages
     * const count = await prisma.incidentMessage.count({
     *   where: {
     *     // ... the filter for the IncidentMessages we want to count
     *   }
     * })
    **/
    count<T extends IncidentMessageCountArgs>(
      args?: Subset<T, IncidentMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IncidentMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IncidentMessageAggregateArgs>(args: Subset<T, IncidentMessageAggregateArgs>): Prisma.PrismaPromise<GetIncidentMessageAggregateType<T>>

    /**
     * Group by IncidentMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentMessageGroupByArgs} args - Group by arguments.
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
      T extends IncidentMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentMessageGroupByArgs['orderBy'] }
        : { orderBy?: IncidentMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IncidentMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IncidentMessage model
   */
  readonly fields: IncidentMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IncidentMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    incident<T extends IncidentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IncidentDefaultArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the IncidentMessage model
   */
  interface IncidentMessageFieldRefs {
    readonly id: FieldRef<"IncidentMessage", 'Int'>
    readonly incidentId: FieldRef<"IncidentMessage", 'Int'>
    readonly senderId: FieldRef<"IncidentMessage", 'String'>
    readonly message: FieldRef<"IncidentMessage", 'String'>
    readonly sentAt: FieldRef<"IncidentMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IncidentMessage findUnique
   */
  export type IncidentMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentMessage
     */
    select?: IncidentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentMessage
     */
    omit?: IncidentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentMessageInclude<ExtArgs> | null
    /**
     * Filter, which IncidentMessage to fetch.
     */
    where: IncidentMessageWhereUniqueInput
  }

  /**
   * IncidentMessage findUniqueOrThrow
   */
  export type IncidentMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentMessage
     */
    select?: IncidentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentMessage
     */
    omit?: IncidentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentMessageInclude<ExtArgs> | null
    /**
     * Filter, which IncidentMessage to fetch.
     */
    where: IncidentMessageWhereUniqueInput
  }

  /**
   * IncidentMessage findFirst
   */
  export type IncidentMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentMessage
     */
    select?: IncidentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentMessage
     */
    omit?: IncidentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentMessageInclude<ExtArgs> | null
    /**
     * Filter, which IncidentMessage to fetch.
     */
    where?: IncidentMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentMessages to fetch.
     */
    orderBy?: IncidentMessageOrderByWithRelationInput | IncidentMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidentMessages.
     */
    cursor?: IncidentMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidentMessages.
     */
    distinct?: IncidentMessageScalarFieldEnum | IncidentMessageScalarFieldEnum[]
  }

  /**
   * IncidentMessage findFirstOrThrow
   */
  export type IncidentMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentMessage
     */
    select?: IncidentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentMessage
     */
    omit?: IncidentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentMessageInclude<ExtArgs> | null
    /**
     * Filter, which IncidentMessage to fetch.
     */
    where?: IncidentMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentMessages to fetch.
     */
    orderBy?: IncidentMessageOrderByWithRelationInput | IncidentMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidentMessages.
     */
    cursor?: IncidentMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidentMessages.
     */
    distinct?: IncidentMessageScalarFieldEnum | IncidentMessageScalarFieldEnum[]
  }

  /**
   * IncidentMessage findMany
   */
  export type IncidentMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentMessage
     */
    select?: IncidentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentMessage
     */
    omit?: IncidentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentMessageInclude<ExtArgs> | null
    /**
     * Filter, which IncidentMessages to fetch.
     */
    where?: IncidentMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentMessages to fetch.
     */
    orderBy?: IncidentMessageOrderByWithRelationInput | IncidentMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IncidentMessages.
     */
    cursor?: IncidentMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentMessages.
     */
    skip?: number
    distinct?: IncidentMessageScalarFieldEnum | IncidentMessageScalarFieldEnum[]
  }

  /**
   * IncidentMessage create
   */
  export type IncidentMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentMessage
     */
    select?: IncidentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentMessage
     */
    omit?: IncidentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a IncidentMessage.
     */
    data: XOR<IncidentMessageCreateInput, IncidentMessageUncheckedCreateInput>
  }

  /**
   * IncidentMessage createMany
   */
  export type IncidentMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IncidentMessages.
     */
    data: IncidentMessageCreateManyInput | IncidentMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IncidentMessage createManyAndReturn
   */
  export type IncidentMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentMessage
     */
    select?: IncidentMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentMessage
     */
    omit?: IncidentMessageOmit<ExtArgs> | null
    /**
     * The data used to create many IncidentMessages.
     */
    data: IncidentMessageCreateManyInput | IncidentMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncidentMessage update
   */
  export type IncidentMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentMessage
     */
    select?: IncidentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentMessage
     */
    omit?: IncidentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a IncidentMessage.
     */
    data: XOR<IncidentMessageUpdateInput, IncidentMessageUncheckedUpdateInput>
    /**
     * Choose, which IncidentMessage to update.
     */
    where: IncidentMessageWhereUniqueInput
  }

  /**
   * IncidentMessage updateMany
   */
  export type IncidentMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IncidentMessages.
     */
    data: XOR<IncidentMessageUpdateManyMutationInput, IncidentMessageUncheckedUpdateManyInput>
    /**
     * Filter which IncidentMessages to update
     */
    where?: IncidentMessageWhereInput
    /**
     * Limit how many IncidentMessages to update.
     */
    limit?: number
  }

  /**
   * IncidentMessage updateManyAndReturn
   */
  export type IncidentMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentMessage
     */
    select?: IncidentMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentMessage
     */
    omit?: IncidentMessageOmit<ExtArgs> | null
    /**
     * The data used to update IncidentMessages.
     */
    data: XOR<IncidentMessageUpdateManyMutationInput, IncidentMessageUncheckedUpdateManyInput>
    /**
     * Filter which IncidentMessages to update
     */
    where?: IncidentMessageWhereInput
    /**
     * Limit how many IncidentMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncidentMessage upsert
   */
  export type IncidentMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentMessage
     */
    select?: IncidentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentMessage
     */
    omit?: IncidentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the IncidentMessage to update in case it exists.
     */
    where: IncidentMessageWhereUniqueInput
    /**
     * In case the IncidentMessage found by the `where` argument doesn't exist, create a new IncidentMessage with this data.
     */
    create: XOR<IncidentMessageCreateInput, IncidentMessageUncheckedCreateInput>
    /**
     * In case the IncidentMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentMessageUpdateInput, IncidentMessageUncheckedUpdateInput>
  }

  /**
   * IncidentMessage delete
   */
  export type IncidentMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentMessage
     */
    select?: IncidentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentMessage
     */
    omit?: IncidentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentMessageInclude<ExtArgs> | null
    /**
     * Filter which IncidentMessage to delete.
     */
    where: IncidentMessageWhereUniqueInput
  }

  /**
   * IncidentMessage deleteMany
   */
  export type IncidentMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidentMessages to delete
     */
    where?: IncidentMessageWhereInput
    /**
     * Limit how many IncidentMessages to delete.
     */
    limit?: number
  }

  /**
   * IncidentMessage without action
   */
  export type IncidentMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentMessage
     */
    select?: IncidentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentMessage
     */
    omit?: IncidentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentMessageInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    assignmentId: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    assignmentId: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    titulo: string | null
    descripcion: string | null
    fechaLimite: Date | null
    status: $Enums.task_status | null
    entregadaAt: Date | null
    attachmentPath: string | null
    reviewedBy: string | null
    reviewNotes: string | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    titulo: string | null
    descripcion: string | null
    fechaLimite: Date | null
    status: $Enums.task_status | null
    entregadaAt: Date | null
    attachmentPath: string | null
    reviewedBy: string | null
    reviewNotes: string | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    assignmentId: number
    titulo: number
    descripcion: number
    fechaLimite: number
    status: number
    entregadaAt: number
    attachmentPath: number
    reviewedBy: number
    reviewNotes: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    assignmentId?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    assignmentId?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    assignmentId?: true
    titulo?: true
    descripcion?: true
    fechaLimite?: true
    status?: true
    entregadaAt?: true
    attachmentPath?: true
    reviewedBy?: true
    reviewNotes?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    assignmentId?: true
    titulo?: true
    descripcion?: true
    fechaLimite?: true
    status?: true
    entregadaAt?: true
    attachmentPath?: true
    reviewedBy?: true
    reviewNotes?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    assignmentId?: true
    titulo?: true
    descripcion?: true
    fechaLimite?: true
    status?: true
    entregadaAt?: true
    attachmentPath?: true
    reviewedBy?: true
    reviewNotes?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    assignmentId: number
    titulo: string
    descripcion: string | null
    fechaLimite: Date
    status: $Enums.task_status
    entregadaAt: Date | null
    attachmentPath: string | null
    reviewedBy: string | null
    reviewNotes: string | null
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    titulo?: boolean
    descripcion?: boolean
    fechaLimite?: boolean
    status?: boolean
    entregadaAt?: boolean
    attachmentPath?: boolean
    reviewedBy?: boolean
    reviewNotes?: boolean
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
    reviewer?: boolean | Task$reviewerArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    titulo?: boolean
    descripcion?: boolean
    fechaLimite?: boolean
    status?: boolean
    entregadaAt?: boolean
    attachmentPath?: boolean
    reviewedBy?: boolean
    reviewNotes?: boolean
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
    reviewer?: boolean | Task$reviewerArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    titulo?: boolean
    descripcion?: boolean
    fechaLimite?: boolean
    status?: boolean
    entregadaAt?: boolean
    attachmentPath?: boolean
    reviewedBy?: boolean
    reviewNotes?: boolean
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
    reviewer?: boolean | Task$reviewerArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    assignmentId?: boolean
    titulo?: boolean
    descripcion?: boolean
    fechaLimite?: boolean
    status?: boolean
    entregadaAt?: boolean
    attachmentPath?: boolean
    reviewedBy?: boolean
    reviewNotes?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assignmentId" | "titulo" | "descripcion" | "fechaLimite" | "status" | "entregadaAt" | "attachmentPath" | "reviewedBy" | "reviewNotes", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
    reviewer?: boolean | Task$reviewerArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
    reviewer?: boolean | Task$reviewerArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | ServiceAssignmentDefaultArgs<ExtArgs>
    reviewer?: boolean | Task$reviewerArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      assignment: Prisma.$ServiceAssignmentPayload<ExtArgs>
      reviewer: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      assignmentId: number
      titulo: string
      descripcion: string | null
      fechaLimite: Date
      status: $Enums.task_status
      entregadaAt: Date | null
      attachmentPath: string | null
      reviewedBy: string | null
      reviewNotes: string | null
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends ServiceAssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceAssignmentDefaultArgs<ExtArgs>>): Prisma__ServiceAssignmentClient<$Result.GetResult<Prisma.$ServiceAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewer<T extends Task$reviewerArgs<ExtArgs> = {}>(args?: Subset<T, Task$reviewerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'Int'>
    readonly assignmentId: FieldRef<"Task", 'Int'>
    readonly titulo: FieldRef<"Task", 'String'>
    readonly descripcion: FieldRef<"Task", 'String'>
    readonly fechaLimite: FieldRef<"Task", 'DateTime'>
    readonly status: FieldRef<"Task", 'task_status'>
    readonly entregadaAt: FieldRef<"Task", 'DateTime'>
    readonly attachmentPath: FieldRef<"Task", 'String'>
    readonly reviewedBy: FieldRef<"Task", 'String'>
    readonly reviewNotes: FieldRef<"Task", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.reviewer
   */
  export type Task$reviewerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    matricula: 'matricula',
    carrera: 'carrera',
    creditosAprobados: 'creditosAprobados',
    creditosTotales: 'creditosTotales',
    porcentajeCreditos: 'porcentajeCreditos'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const InstitutionScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    ciudad: 'ciudad',
    estado: 'estado',
    direccion: 'direccion',
    contactoNombre: 'contactoNombre',
    contactoEmail: 'contactoEmail',
    contactoTelefono: 'contactoTelefono',
    incentivoDesc: 'incentivoDesc',
    verificada: 'verificada',
    adminUserId: 'adminUserId'
  };

  export type InstitutionScalarFieldEnum = (typeof InstitutionScalarFieldEnum)[keyof typeof InstitutionScalarFieldEnum]


  export const ServiceAssignmentScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    institutionId: 'institutionId',
    startDate: 'startDate',
    plannedEndDate: 'plannedEndDate',
    endDate: 'endDate',
    totalHoursRequired: 'totalHoursRequired',
    hoursCompleted: 'hoursCompleted',
    estado: 'estado',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceAssignmentScalarFieldEnum = (typeof ServiceAssignmentScalarFieldEnum)[keyof typeof ServiceAssignmentScalarFieldEnum]


  export const WorkPlanScalarFieldEnum: {
    id: 'id',
    assignmentId: 'assignmentId',
    contenido: 'contenido',
    status: 'status',
    approvedBy: 'approvedBy',
    approvedAt: 'approvedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkPlanScalarFieldEnum = (typeof WorkPlanScalarFieldEnum)[keyof typeof WorkPlanScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    assignmentId: 'assignmentId',
    tipo: 'tipo',
    filePath: 'filePath',
    signedBy: 'signedBy',
    signedAt: 'signedAt',
    createdAt: 'createdAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    assignmentId: 'assignmentId',
    tipo: 'tipo',
    periodoInicio: 'periodoInicio',
    periodoFin: 'periodoFin',
    horas: 'horas',
    descripcion: 'descripcion',
    status: 'status',
    validatedBy: 'validatedBy',
    validatedAt: 'validatedAt',
    filePath: 'filePath',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const HoursLogScalarFieldEnum: {
    id: 'id',
    assignmentId: 'assignmentId',
    dateWorked: 'dateWorked',
    horas: 'horas',
    description: 'description',
    validated: 'validated'
  };

  export type HoursLogScalarFieldEnum = (typeof HoursLogScalarFieldEnum)[keyof typeof HoursLogScalarFieldEnum]


  export const IncidentScalarFieldEnum: {
    id: 'id',
    assignmentId: 'assignmentId',
    reportedBy: 'reportedBy',
    reportedAt: 'reportedAt',
    tipo: 'tipo',
    descripcion: 'descripcion',
    estado: 'estado',
    resolvedBy: 'resolvedBy',
    resolvedAt: 'resolvedAt',
    resolutionNotes: 'resolutionNotes'
  };

  export type IncidentScalarFieldEnum = (typeof IncidentScalarFieldEnum)[keyof typeof IncidentScalarFieldEnum]


  export const IncidentMessageScalarFieldEnum: {
    id: 'id',
    incidentId: 'incidentId',
    senderId: 'senderId',
    message: 'message',
    sentAt: 'sentAt'
  };

  export type IncidentMessageScalarFieldEnum = (typeof IncidentMessageScalarFieldEnum)[keyof typeof IncidentMessageScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    assignmentId: 'assignmentId',
    titulo: 'titulo',
    descripcion: 'descripcion',
    fechaLimite: 'fechaLimite',
    status: 'status',
    entregadaAt: 'entregadaAt',
    attachmentPath: 'attachmentPath',
    reviewedBy: 'reviewedBy',
    reviewNotes: 'reviewNotes'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'service_status'
   */
  export type Enumservice_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'service_status'>
    


  /**
   * Reference to a field of type 'service_status[]'
   */
  export type ListEnumservice_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'service_status[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'plan_status'
   */
  export type Enumplan_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'plan_status'>
    


  /**
   * Reference to a field of type 'plan_status[]'
   */
  export type ListEnumplan_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'plan_status[]'>
    


  /**
   * Reference to a field of type 'document_type'
   */
  export type Enumdocument_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'document_type'>
    


  /**
   * Reference to a field of type 'document_type[]'
   */
  export type ListEnumdocument_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'document_type[]'>
    


  /**
   * Reference to a field of type 'report_type'
   */
  export type Enumreport_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'report_type'>
    


  /**
   * Reference to a field of type 'report_type[]'
   */
  export type ListEnumreport_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'report_type[]'>
    


  /**
   * Reference to a field of type 'report_status'
   */
  export type Enumreport_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'report_status'>
    


  /**
   * Reference to a field of type 'report_status[]'
   */
  export type ListEnumreport_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'report_status[]'>
    


  /**
   * Reference to a field of type 'incident_status'
   */
  export type Enumincident_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'incident_status'>
    


  /**
   * Reference to a field of type 'incident_status[]'
   */
  export type ListEnumincident_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'incident_status[]'>
    


  /**
   * Reference to a field of type 'task_status'
   */
  export type Enumtask_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'task_status'>
    


  /**
   * Reference to a field of type 'task_status[]'
   */
  export type ListEnumtask_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'task_status[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    institutions?: InstitutionListRelationFilter
    incidentsReported?: IncidentListRelationFilter
    incidentsResolved?: IncidentListRelationFilter
    documents?: DocumentListRelationFilter
    reportsValid?: ReportListRelationFilter
    tasksReviewed?: TaskListRelationFilter
    IncidentMessage?: IncidentMessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    institutions?: InstitutionOrderByRelationAggregateInput
    incidentsReported?: IncidentOrderByRelationAggregateInput
    incidentsResolved?: IncidentOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
    reportsValid?: ReportOrderByRelationAggregateInput
    tasksReviewed?: TaskOrderByRelationAggregateInput
    IncidentMessage?: IncidentMessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    institutions?: InstitutionListRelationFilter
    incidentsReported?: IncidentListRelationFilter
    incidentsResolved?: IncidentListRelationFilter
    documents?: DocumentListRelationFilter
    reportsValid?: ReportListRelationFilter
    tasksReviewed?: TaskListRelationFilter
    IncidentMessage?: IncidentMessageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    matricula?: StringFilter<"Student"> | string
    carrera?: StringFilter<"Student"> | string
    creditosAprobados?: IntFilter<"Student"> | number
    creditosTotales?: IntFilter<"Student"> | number
    porcentajeCreditos?: FloatNullableFilter<"Student"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignments?: ServiceAssignmentListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    matricula?: SortOrder
    carrera?: SortOrder
    creditosAprobados?: SortOrder
    creditosTotales?: SortOrder
    porcentajeCreditos?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    assignments?: ServiceAssignmentOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    matricula?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    carrera?: StringFilter<"Student"> | string
    creditosAprobados?: IntFilter<"Student"> | number
    creditosTotales?: IntFilter<"Student"> | number
    porcentajeCreditos?: FloatNullableFilter<"Student"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignments?: ServiceAssignmentListRelationFilter
  }, "id" | "matricula">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    matricula?: SortOrder
    carrera?: SortOrder
    creditosAprobados?: SortOrder
    creditosTotales?: SortOrder
    porcentajeCreditos?: SortOrderInput | SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    matricula?: StringWithAggregatesFilter<"Student"> | string
    carrera?: StringWithAggregatesFilter<"Student"> | string
    creditosAprobados?: IntWithAggregatesFilter<"Student"> | number
    creditosTotales?: IntWithAggregatesFilter<"Student"> | number
    porcentajeCreditos?: FloatNullableWithAggregatesFilter<"Student"> | number | null
  }

  export type InstitutionWhereInput = {
    AND?: InstitutionWhereInput | InstitutionWhereInput[]
    OR?: InstitutionWhereInput[]
    NOT?: InstitutionWhereInput | InstitutionWhereInput[]
    id?: IntFilter<"Institution"> | number
    nombre?: StringFilter<"Institution"> | string
    ciudad?: StringFilter<"Institution"> | string
    estado?: StringFilter<"Institution"> | string
    direccion?: StringNullableFilter<"Institution"> | string | null
    contactoNombre?: StringNullableFilter<"Institution"> | string | null
    contactoEmail?: StringFilter<"Institution"> | string
    contactoTelefono?: StringNullableFilter<"Institution"> | string | null
    incentivoDesc?: StringNullableFilter<"Institution"> | string | null
    verificada?: BoolFilter<"Institution"> | boolean
    adminUserId?: StringFilter<"Institution"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignments?: ServiceAssignmentListRelationFilter
  }

  export type InstitutionOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    ciudad?: SortOrder
    estado?: SortOrder
    direccion?: SortOrderInput | SortOrder
    contactoNombre?: SortOrderInput | SortOrder
    contactoEmail?: SortOrder
    contactoTelefono?: SortOrderInput | SortOrder
    incentivoDesc?: SortOrderInput | SortOrder
    verificada?: SortOrder
    adminUserId?: SortOrder
    user?: UserOrderByWithRelationInput
    assignments?: ServiceAssignmentOrderByRelationAggregateInput
  }

  export type InstitutionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InstitutionWhereInput | InstitutionWhereInput[]
    OR?: InstitutionWhereInput[]
    NOT?: InstitutionWhereInput | InstitutionWhereInput[]
    nombre?: StringFilter<"Institution"> | string
    ciudad?: StringFilter<"Institution"> | string
    estado?: StringFilter<"Institution"> | string
    direccion?: StringNullableFilter<"Institution"> | string | null
    contactoNombre?: StringNullableFilter<"Institution"> | string | null
    contactoEmail?: StringFilter<"Institution"> | string
    contactoTelefono?: StringNullableFilter<"Institution"> | string | null
    incentivoDesc?: StringNullableFilter<"Institution"> | string | null
    verificada?: BoolFilter<"Institution"> | boolean
    adminUserId?: StringFilter<"Institution"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignments?: ServiceAssignmentListRelationFilter
  }, "id">

  export type InstitutionOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    ciudad?: SortOrder
    estado?: SortOrder
    direccion?: SortOrderInput | SortOrder
    contactoNombre?: SortOrderInput | SortOrder
    contactoEmail?: SortOrder
    contactoTelefono?: SortOrderInput | SortOrder
    incentivoDesc?: SortOrderInput | SortOrder
    verificada?: SortOrder
    adminUserId?: SortOrder
    _count?: InstitutionCountOrderByAggregateInput
    _avg?: InstitutionAvgOrderByAggregateInput
    _max?: InstitutionMaxOrderByAggregateInput
    _min?: InstitutionMinOrderByAggregateInput
    _sum?: InstitutionSumOrderByAggregateInput
  }

  export type InstitutionScalarWhereWithAggregatesInput = {
    AND?: InstitutionScalarWhereWithAggregatesInput | InstitutionScalarWhereWithAggregatesInput[]
    OR?: InstitutionScalarWhereWithAggregatesInput[]
    NOT?: InstitutionScalarWhereWithAggregatesInput | InstitutionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Institution"> | number
    nombre?: StringWithAggregatesFilter<"Institution"> | string
    ciudad?: StringWithAggregatesFilter<"Institution"> | string
    estado?: StringWithAggregatesFilter<"Institution"> | string
    direccion?: StringNullableWithAggregatesFilter<"Institution"> | string | null
    contactoNombre?: StringNullableWithAggregatesFilter<"Institution"> | string | null
    contactoEmail?: StringWithAggregatesFilter<"Institution"> | string
    contactoTelefono?: StringNullableWithAggregatesFilter<"Institution"> | string | null
    incentivoDesc?: StringNullableWithAggregatesFilter<"Institution"> | string | null
    verificada?: BoolWithAggregatesFilter<"Institution"> | boolean
    adminUserId?: StringWithAggregatesFilter<"Institution"> | string
  }

  export type ServiceAssignmentWhereInput = {
    AND?: ServiceAssignmentWhereInput | ServiceAssignmentWhereInput[]
    OR?: ServiceAssignmentWhereInput[]
    NOT?: ServiceAssignmentWhereInput | ServiceAssignmentWhereInput[]
    id?: IntFilter<"ServiceAssignment"> | number
    studentId?: StringFilter<"ServiceAssignment"> | string
    institutionId?: IntFilter<"ServiceAssignment"> | number
    startDate?: DateTimeNullableFilter<"ServiceAssignment"> | Date | string | null
    plannedEndDate?: DateTimeNullableFilter<"ServiceAssignment"> | Date | string | null
    endDate?: DateTimeNullableFilter<"ServiceAssignment"> | Date | string | null
    totalHoursRequired?: IntFilter<"ServiceAssignment"> | number
    hoursCompleted?: IntFilter<"ServiceAssignment"> | number
    estado?: Enumservice_statusFilter<"ServiceAssignment"> | $Enums.service_status
    createdAt?: DateTimeFilter<"ServiceAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceAssignment"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
    workPlans?: WorkPlanListRelationFilter
    documents?: DocumentListRelationFilter
    reports?: ReportListRelationFilter
    hoursLogs?: HoursLogListRelationFilter
    incidents?: IncidentListRelationFilter
    tasks?: TaskListRelationFilter
  }

  export type ServiceAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    institutionId?: SortOrder
    startDate?: SortOrderInput | SortOrder
    plannedEndDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    totalHoursRequired?: SortOrder
    hoursCompleted?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    institution?: InstitutionOrderByWithRelationInput
    workPlans?: WorkPlanOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
    reports?: ReportOrderByRelationAggregateInput
    hoursLogs?: HoursLogOrderByRelationAggregateInput
    incidents?: IncidentOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type ServiceAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uniq_active_assignment?: ServiceAssignmentUniq_active_assignmentCompoundUniqueInput
    AND?: ServiceAssignmentWhereInput | ServiceAssignmentWhereInput[]
    OR?: ServiceAssignmentWhereInput[]
    NOT?: ServiceAssignmentWhereInput | ServiceAssignmentWhereInput[]
    studentId?: StringFilter<"ServiceAssignment"> | string
    institutionId?: IntFilter<"ServiceAssignment"> | number
    startDate?: DateTimeNullableFilter<"ServiceAssignment"> | Date | string | null
    plannedEndDate?: DateTimeNullableFilter<"ServiceAssignment"> | Date | string | null
    endDate?: DateTimeNullableFilter<"ServiceAssignment"> | Date | string | null
    totalHoursRequired?: IntFilter<"ServiceAssignment"> | number
    hoursCompleted?: IntFilter<"ServiceAssignment"> | number
    estado?: Enumservice_statusFilter<"ServiceAssignment"> | $Enums.service_status
    createdAt?: DateTimeFilter<"ServiceAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceAssignment"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
    workPlans?: WorkPlanListRelationFilter
    documents?: DocumentListRelationFilter
    reports?: ReportListRelationFilter
    hoursLogs?: HoursLogListRelationFilter
    incidents?: IncidentListRelationFilter
    tasks?: TaskListRelationFilter
  }, "id" | "uniq_active_assignment">

  export type ServiceAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    institutionId?: SortOrder
    startDate?: SortOrderInput | SortOrder
    plannedEndDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    totalHoursRequired?: SortOrder
    hoursCompleted?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceAssignmentCountOrderByAggregateInput
    _avg?: ServiceAssignmentAvgOrderByAggregateInput
    _max?: ServiceAssignmentMaxOrderByAggregateInput
    _min?: ServiceAssignmentMinOrderByAggregateInput
    _sum?: ServiceAssignmentSumOrderByAggregateInput
  }

  export type ServiceAssignmentScalarWhereWithAggregatesInput = {
    AND?: ServiceAssignmentScalarWhereWithAggregatesInput | ServiceAssignmentScalarWhereWithAggregatesInput[]
    OR?: ServiceAssignmentScalarWhereWithAggregatesInput[]
    NOT?: ServiceAssignmentScalarWhereWithAggregatesInput | ServiceAssignmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ServiceAssignment"> | number
    studentId?: StringWithAggregatesFilter<"ServiceAssignment"> | string
    institutionId?: IntWithAggregatesFilter<"ServiceAssignment"> | number
    startDate?: DateTimeNullableWithAggregatesFilter<"ServiceAssignment"> | Date | string | null
    plannedEndDate?: DateTimeNullableWithAggregatesFilter<"ServiceAssignment"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"ServiceAssignment"> | Date | string | null
    totalHoursRequired?: IntWithAggregatesFilter<"ServiceAssignment"> | number
    hoursCompleted?: IntWithAggregatesFilter<"ServiceAssignment"> | number
    estado?: Enumservice_statusWithAggregatesFilter<"ServiceAssignment"> | $Enums.service_status
    createdAt?: DateTimeWithAggregatesFilter<"ServiceAssignment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServiceAssignment"> | Date | string
  }

  export type WorkPlanWhereInput = {
    AND?: WorkPlanWhereInput | WorkPlanWhereInput[]
    OR?: WorkPlanWhereInput[]
    NOT?: WorkPlanWhereInput | WorkPlanWhereInput[]
    id?: IntFilter<"WorkPlan"> | number
    assignmentId?: IntFilter<"WorkPlan"> | number
    contenido?: JsonFilter<"WorkPlan">
    status?: Enumplan_statusFilter<"WorkPlan"> | $Enums.plan_status
    approvedBy?: StringNullableFilter<"WorkPlan"> | string | null
    approvedAt?: DateTimeNullableFilter<"WorkPlan"> | Date | string | null
    createdAt?: DateTimeFilter<"WorkPlan"> | Date | string
    updatedAt?: DateTimeFilter<"WorkPlan"> | Date | string
    assignment?: XOR<ServiceAssignmentScalarRelationFilter, ServiceAssignmentWhereInput>
  }

  export type WorkPlanOrderByWithRelationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    contenido?: SortOrder
    status?: SortOrder
    approvedBy?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignment?: ServiceAssignmentOrderByWithRelationInput
  }

  export type WorkPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkPlanWhereInput | WorkPlanWhereInput[]
    OR?: WorkPlanWhereInput[]
    NOT?: WorkPlanWhereInput | WorkPlanWhereInput[]
    assignmentId?: IntFilter<"WorkPlan"> | number
    contenido?: JsonFilter<"WorkPlan">
    status?: Enumplan_statusFilter<"WorkPlan"> | $Enums.plan_status
    approvedBy?: StringNullableFilter<"WorkPlan"> | string | null
    approvedAt?: DateTimeNullableFilter<"WorkPlan"> | Date | string | null
    createdAt?: DateTimeFilter<"WorkPlan"> | Date | string
    updatedAt?: DateTimeFilter<"WorkPlan"> | Date | string
    assignment?: XOR<ServiceAssignmentScalarRelationFilter, ServiceAssignmentWhereInput>
  }, "id">

  export type WorkPlanOrderByWithAggregationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    contenido?: SortOrder
    status?: SortOrder
    approvedBy?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkPlanCountOrderByAggregateInput
    _avg?: WorkPlanAvgOrderByAggregateInput
    _max?: WorkPlanMaxOrderByAggregateInput
    _min?: WorkPlanMinOrderByAggregateInput
    _sum?: WorkPlanSumOrderByAggregateInput
  }

  export type WorkPlanScalarWhereWithAggregatesInput = {
    AND?: WorkPlanScalarWhereWithAggregatesInput | WorkPlanScalarWhereWithAggregatesInput[]
    OR?: WorkPlanScalarWhereWithAggregatesInput[]
    NOT?: WorkPlanScalarWhereWithAggregatesInput | WorkPlanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkPlan"> | number
    assignmentId?: IntWithAggregatesFilter<"WorkPlan"> | number
    contenido?: JsonWithAggregatesFilter<"WorkPlan">
    status?: Enumplan_statusWithAggregatesFilter<"WorkPlan"> | $Enums.plan_status
    approvedBy?: StringNullableWithAggregatesFilter<"WorkPlan"> | string | null
    approvedAt?: DateTimeNullableWithAggregatesFilter<"WorkPlan"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkPlan"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: IntFilter<"Document"> | number
    assignmentId?: IntFilter<"Document"> | number
    tipo?: Enumdocument_typeFilter<"Document"> | $Enums.document_type
    filePath?: StringFilter<"Document"> | string
    signedBy?: StringNullableFilter<"Document"> | string | null
    signedAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    createdAt?: DateTimeFilter<"Document"> | Date | string
    assignment?: XOR<ServiceAssignmentScalarRelationFilter, ServiceAssignmentWhereInput>
    signedUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    tipo?: SortOrder
    filePath?: SortOrder
    signedBy?: SortOrderInput | SortOrder
    signedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    assignment?: ServiceAssignmentOrderByWithRelationInput
    signedUser?: UserOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uniq_doc_per_assignment?: DocumentUniq_doc_per_assignmentCompoundUniqueInput
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    assignmentId?: IntFilter<"Document"> | number
    tipo?: Enumdocument_typeFilter<"Document"> | $Enums.document_type
    filePath?: StringFilter<"Document"> | string
    signedBy?: StringNullableFilter<"Document"> | string | null
    signedAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    createdAt?: DateTimeFilter<"Document"> | Date | string
    assignment?: XOR<ServiceAssignmentScalarRelationFilter, ServiceAssignmentWhereInput>
    signedUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "uniq_doc_per_assignment">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    tipo?: SortOrder
    filePath?: SortOrder
    signedBy?: SortOrderInput | SortOrder
    signedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Document"> | number
    assignmentId?: IntWithAggregatesFilter<"Document"> | number
    tipo?: Enumdocument_typeWithAggregatesFilter<"Document"> | $Enums.document_type
    filePath?: StringWithAggregatesFilter<"Document"> | string
    signedBy?: StringNullableWithAggregatesFilter<"Document"> | string | null
    signedAt?: DateTimeNullableWithAggregatesFilter<"Document"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: IntFilter<"Report"> | number
    assignmentId?: IntFilter<"Report"> | number
    tipo?: Enumreport_typeFilter<"Report"> | $Enums.report_type
    periodoInicio?: DateTimeFilter<"Report"> | Date | string
    periodoFin?: DateTimeFilter<"Report"> | Date | string
    horas?: IntFilter<"Report"> | number
    descripcion?: StringNullableFilter<"Report"> | string | null
    status?: Enumreport_statusFilter<"Report"> | $Enums.report_status
    validatedBy?: StringNullableFilter<"Report"> | string | null
    validatedAt?: DateTimeNullableFilter<"Report"> | Date | string | null
    filePath?: StringNullableFilter<"Report"> | string | null
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    assignment?: XOR<ServiceAssignmentScalarRelationFilter, ServiceAssignmentWhereInput>
    validator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    tipo?: SortOrder
    periodoInicio?: SortOrder
    periodoFin?: SortOrder
    horas?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    status?: SortOrder
    validatedBy?: SortOrderInput | SortOrder
    validatedAt?: SortOrderInput | SortOrder
    filePath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignment?: ServiceAssignmentOrderByWithRelationInput
    validator?: UserOrderByWithRelationInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    assignmentId?: IntFilter<"Report"> | number
    tipo?: Enumreport_typeFilter<"Report"> | $Enums.report_type
    periodoInicio?: DateTimeFilter<"Report"> | Date | string
    periodoFin?: DateTimeFilter<"Report"> | Date | string
    horas?: IntFilter<"Report"> | number
    descripcion?: StringNullableFilter<"Report"> | string | null
    status?: Enumreport_statusFilter<"Report"> | $Enums.report_status
    validatedBy?: StringNullableFilter<"Report"> | string | null
    validatedAt?: DateTimeNullableFilter<"Report"> | Date | string | null
    filePath?: StringNullableFilter<"Report"> | string | null
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    assignment?: XOR<ServiceAssignmentScalarRelationFilter, ServiceAssignmentWhereInput>
    validator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    tipo?: SortOrder
    periodoInicio?: SortOrder
    periodoFin?: SortOrder
    horas?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    status?: SortOrder
    validatedBy?: SortOrderInput | SortOrder
    validatedAt?: SortOrderInput | SortOrder
    filePath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _avg?: ReportAvgOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
    _sum?: ReportSumOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Report"> | number
    assignmentId?: IntWithAggregatesFilter<"Report"> | number
    tipo?: Enumreport_typeWithAggregatesFilter<"Report"> | $Enums.report_type
    periodoInicio?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    periodoFin?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    horas?: IntWithAggregatesFilter<"Report"> | number
    descripcion?: StringNullableWithAggregatesFilter<"Report"> | string | null
    status?: Enumreport_statusWithAggregatesFilter<"Report"> | $Enums.report_status
    validatedBy?: StringNullableWithAggregatesFilter<"Report"> | string | null
    validatedAt?: DateTimeNullableWithAggregatesFilter<"Report"> | Date | string | null
    filePath?: StringNullableWithAggregatesFilter<"Report"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type HoursLogWhereInput = {
    AND?: HoursLogWhereInput | HoursLogWhereInput[]
    OR?: HoursLogWhereInput[]
    NOT?: HoursLogWhereInput | HoursLogWhereInput[]
    id?: IntFilter<"HoursLog"> | number
    assignmentId?: IntFilter<"HoursLog"> | number
    dateWorked?: DateTimeFilter<"HoursLog"> | Date | string
    horas?: IntFilter<"HoursLog"> | number
    description?: StringNullableFilter<"HoursLog"> | string | null
    validated?: BoolFilter<"HoursLog"> | boolean
    assignment?: XOR<ServiceAssignmentScalarRelationFilter, ServiceAssignmentWhereInput>
  }

  export type HoursLogOrderByWithRelationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    dateWorked?: SortOrder
    horas?: SortOrder
    description?: SortOrderInput | SortOrder
    validated?: SortOrder
    assignment?: ServiceAssignmentOrderByWithRelationInput
  }

  export type HoursLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HoursLogWhereInput | HoursLogWhereInput[]
    OR?: HoursLogWhereInput[]
    NOT?: HoursLogWhereInput | HoursLogWhereInput[]
    assignmentId?: IntFilter<"HoursLog"> | number
    dateWorked?: DateTimeFilter<"HoursLog"> | Date | string
    horas?: IntFilter<"HoursLog"> | number
    description?: StringNullableFilter<"HoursLog"> | string | null
    validated?: BoolFilter<"HoursLog"> | boolean
    assignment?: XOR<ServiceAssignmentScalarRelationFilter, ServiceAssignmentWhereInput>
  }, "id">

  export type HoursLogOrderByWithAggregationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    dateWorked?: SortOrder
    horas?: SortOrder
    description?: SortOrderInput | SortOrder
    validated?: SortOrder
    _count?: HoursLogCountOrderByAggregateInput
    _avg?: HoursLogAvgOrderByAggregateInput
    _max?: HoursLogMaxOrderByAggregateInput
    _min?: HoursLogMinOrderByAggregateInput
    _sum?: HoursLogSumOrderByAggregateInput
  }

  export type HoursLogScalarWhereWithAggregatesInput = {
    AND?: HoursLogScalarWhereWithAggregatesInput | HoursLogScalarWhereWithAggregatesInput[]
    OR?: HoursLogScalarWhereWithAggregatesInput[]
    NOT?: HoursLogScalarWhereWithAggregatesInput | HoursLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HoursLog"> | number
    assignmentId?: IntWithAggregatesFilter<"HoursLog"> | number
    dateWorked?: DateTimeWithAggregatesFilter<"HoursLog"> | Date | string
    horas?: IntWithAggregatesFilter<"HoursLog"> | number
    description?: StringNullableWithAggregatesFilter<"HoursLog"> | string | null
    validated?: BoolWithAggregatesFilter<"HoursLog"> | boolean
  }

  export type IncidentWhereInput = {
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    id?: IntFilter<"Incident"> | number
    assignmentId?: IntNullableFilter<"Incident"> | number | null
    reportedBy?: StringFilter<"Incident"> | string
    reportedAt?: DateTimeFilter<"Incident"> | Date | string
    tipo?: StringFilter<"Incident"> | string
    descripcion?: StringFilter<"Incident"> | string
    estado?: Enumincident_statusFilter<"Incident"> | $Enums.incident_status
    resolvedBy?: StringNullableFilter<"Incident"> | string | null
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    resolutionNotes?: StringNullableFilter<"Incident"> | string | null
    assignment?: XOR<ServiceAssignmentNullableScalarRelationFilter, ServiceAssignmentWhereInput> | null
    reporter?: XOR<UserScalarRelationFilter, UserWhereInput>
    resolver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    messages?: IncidentMessageListRelationFilter
  }

  export type IncidentOrderByWithRelationInput = {
    id?: SortOrder
    assignmentId?: SortOrderInput | SortOrder
    reportedBy?: SortOrder
    reportedAt?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    resolvedBy?: SortOrderInput | SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    resolutionNotes?: SortOrderInput | SortOrder
    assignment?: ServiceAssignmentOrderByWithRelationInput
    reporter?: UserOrderByWithRelationInput
    resolver?: UserOrderByWithRelationInput
    messages?: IncidentMessageOrderByRelationAggregateInput
  }

  export type IncidentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    assignmentId?: IntNullableFilter<"Incident"> | number | null
    reportedBy?: StringFilter<"Incident"> | string
    reportedAt?: DateTimeFilter<"Incident"> | Date | string
    tipo?: StringFilter<"Incident"> | string
    descripcion?: StringFilter<"Incident"> | string
    estado?: Enumincident_statusFilter<"Incident"> | $Enums.incident_status
    resolvedBy?: StringNullableFilter<"Incident"> | string | null
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    resolutionNotes?: StringNullableFilter<"Incident"> | string | null
    assignment?: XOR<ServiceAssignmentNullableScalarRelationFilter, ServiceAssignmentWhereInput> | null
    reporter?: XOR<UserScalarRelationFilter, UserWhereInput>
    resolver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    messages?: IncidentMessageListRelationFilter
  }, "id">

  export type IncidentOrderByWithAggregationInput = {
    id?: SortOrder
    assignmentId?: SortOrderInput | SortOrder
    reportedBy?: SortOrder
    reportedAt?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    resolvedBy?: SortOrderInput | SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    resolutionNotes?: SortOrderInput | SortOrder
    _count?: IncidentCountOrderByAggregateInput
    _avg?: IncidentAvgOrderByAggregateInput
    _max?: IncidentMaxOrderByAggregateInput
    _min?: IncidentMinOrderByAggregateInput
    _sum?: IncidentSumOrderByAggregateInput
  }

  export type IncidentScalarWhereWithAggregatesInput = {
    AND?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    OR?: IncidentScalarWhereWithAggregatesInput[]
    NOT?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Incident"> | number
    assignmentId?: IntNullableWithAggregatesFilter<"Incident"> | number | null
    reportedBy?: StringWithAggregatesFilter<"Incident"> | string
    reportedAt?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
    tipo?: StringWithAggregatesFilter<"Incident"> | string
    descripcion?: StringWithAggregatesFilter<"Incident"> | string
    estado?: Enumincident_statusWithAggregatesFilter<"Incident"> | $Enums.incident_status
    resolvedBy?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Incident"> | Date | string | null
    resolutionNotes?: StringNullableWithAggregatesFilter<"Incident"> | string | null
  }

  export type IncidentMessageWhereInput = {
    AND?: IncidentMessageWhereInput | IncidentMessageWhereInput[]
    OR?: IncidentMessageWhereInput[]
    NOT?: IncidentMessageWhereInput | IncidentMessageWhereInput[]
    id?: IntFilter<"IncidentMessage"> | number
    incidentId?: IntFilter<"IncidentMessage"> | number
    senderId?: StringFilter<"IncidentMessage"> | string
    message?: StringFilter<"IncidentMessage"> | string
    sentAt?: DateTimeFilter<"IncidentMessage"> | Date | string
    incident?: XOR<IncidentScalarRelationFilter, IncidentWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type IncidentMessageOrderByWithRelationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    senderId?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    incident?: IncidentOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type IncidentMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IncidentMessageWhereInput | IncidentMessageWhereInput[]
    OR?: IncidentMessageWhereInput[]
    NOT?: IncidentMessageWhereInput | IncidentMessageWhereInput[]
    incidentId?: IntFilter<"IncidentMessage"> | number
    senderId?: StringFilter<"IncidentMessage"> | string
    message?: StringFilter<"IncidentMessage"> | string
    sentAt?: DateTimeFilter<"IncidentMessage"> | Date | string
    incident?: XOR<IncidentScalarRelationFilter, IncidentWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type IncidentMessageOrderByWithAggregationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    senderId?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    _count?: IncidentMessageCountOrderByAggregateInput
    _avg?: IncidentMessageAvgOrderByAggregateInput
    _max?: IncidentMessageMaxOrderByAggregateInput
    _min?: IncidentMessageMinOrderByAggregateInput
    _sum?: IncidentMessageSumOrderByAggregateInput
  }

  export type IncidentMessageScalarWhereWithAggregatesInput = {
    AND?: IncidentMessageScalarWhereWithAggregatesInput | IncidentMessageScalarWhereWithAggregatesInput[]
    OR?: IncidentMessageScalarWhereWithAggregatesInput[]
    NOT?: IncidentMessageScalarWhereWithAggregatesInput | IncidentMessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IncidentMessage"> | number
    incidentId?: IntWithAggregatesFilter<"IncidentMessage"> | number
    senderId?: StringWithAggregatesFilter<"IncidentMessage"> | string
    message?: StringWithAggregatesFilter<"IncidentMessage"> | string
    sentAt?: DateTimeWithAggregatesFilter<"IncidentMessage"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: IntFilter<"Task"> | number
    assignmentId?: IntFilter<"Task"> | number
    titulo?: StringFilter<"Task"> | string
    descripcion?: StringNullableFilter<"Task"> | string | null
    fechaLimite?: DateTimeFilter<"Task"> | Date | string
    status?: Enumtask_statusFilter<"Task"> | $Enums.task_status
    entregadaAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    attachmentPath?: StringNullableFilter<"Task"> | string | null
    reviewedBy?: StringNullableFilter<"Task"> | string | null
    reviewNotes?: StringNullableFilter<"Task"> | string | null
    assignment?: XOR<ServiceAssignmentScalarRelationFilter, ServiceAssignmentWhereInput>
    reviewer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    fechaLimite?: SortOrder
    status?: SortOrder
    entregadaAt?: SortOrderInput | SortOrder
    attachmentPath?: SortOrderInput | SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    reviewNotes?: SortOrderInput | SortOrder
    assignment?: ServiceAssignmentOrderByWithRelationInput
    reviewer?: UserOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    assignmentId?: IntFilter<"Task"> | number
    titulo?: StringFilter<"Task"> | string
    descripcion?: StringNullableFilter<"Task"> | string | null
    fechaLimite?: DateTimeFilter<"Task"> | Date | string
    status?: Enumtask_statusFilter<"Task"> | $Enums.task_status
    entregadaAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    attachmentPath?: StringNullableFilter<"Task"> | string | null
    reviewedBy?: StringNullableFilter<"Task"> | string | null
    reviewNotes?: StringNullableFilter<"Task"> | string | null
    assignment?: XOR<ServiceAssignmentScalarRelationFilter, ServiceAssignmentWhereInput>
    reviewer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    fechaLimite?: SortOrder
    status?: SortOrder
    entregadaAt?: SortOrderInput | SortOrder
    attachmentPath?: SortOrderInput | SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    reviewNotes?: SortOrderInput | SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Task"> | number
    assignmentId?: IntWithAggregatesFilter<"Task"> | number
    titulo?: StringWithAggregatesFilter<"Task"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Task"> | string | null
    fechaLimite?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    status?: Enumtask_statusWithAggregatesFilter<"Task"> | $Enums.task_status
    entregadaAt?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    attachmentPath?: StringNullableWithAggregatesFilter<"Task"> | string | null
    reviewedBy?: StringNullableWithAggregatesFilter<"Task"> | string | null
    reviewNotes?: StringNullableWithAggregatesFilter<"Task"> | string | null
  }

  export type UserCreateInput = {
    id: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutUserInput
    institutions?: InstitutionCreateNestedManyWithoutUserInput
    incidentsReported?: IncidentCreateNestedManyWithoutReporterInput
    incidentsResolved?: IncidentCreateNestedManyWithoutResolverInput
    documents?: DocumentCreateNestedManyWithoutSignedUserInput
    reportsValid?: ReportCreateNestedManyWithoutValidatorInput
    tasksReviewed?: TaskCreateNestedManyWithoutReviewerInput
    IncidentMessage?: IncidentMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    institutions?: InstitutionUncheckedCreateNestedManyWithoutUserInput
    incidentsReported?: IncidentUncheckedCreateNestedManyWithoutReporterInput
    incidentsResolved?: IncidentUncheckedCreateNestedManyWithoutResolverInput
    documents?: DocumentUncheckedCreateNestedManyWithoutSignedUserInput
    reportsValid?: ReportUncheckedCreateNestedManyWithoutValidatorInput
    tasksReviewed?: TaskUncheckedCreateNestedManyWithoutReviewerInput
    IncidentMessage?: IncidentMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutUserNestedInput
    institutions?: InstitutionUpdateManyWithoutUserNestedInput
    incidentsReported?: IncidentUpdateManyWithoutReporterNestedInput
    incidentsResolved?: IncidentUpdateManyWithoutResolverNestedInput
    documents?: DocumentUpdateManyWithoutSignedUserNestedInput
    reportsValid?: ReportUpdateManyWithoutValidatorNestedInput
    tasksReviewed?: TaskUpdateManyWithoutReviewerNestedInput
    IncidentMessage?: IncidentMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    institutions?: InstitutionUncheckedUpdateManyWithoutUserNestedInput
    incidentsReported?: IncidentUncheckedUpdateManyWithoutReporterNestedInput
    incidentsResolved?: IncidentUncheckedUpdateManyWithoutResolverNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutSignedUserNestedInput
    reportsValid?: ReportUncheckedUpdateManyWithoutValidatorNestedInput
    tasksReviewed?: TaskUncheckedUpdateManyWithoutReviewerNestedInput
    IncidentMessage?: IncidentMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    matricula: string
    carrera: string
    creditosAprobados: number
    creditosTotales: number
    porcentajeCreditos?: number | null
    user: UserCreateNestedOneWithoutStudentInput
    assignments?: ServiceAssignmentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id: string
    matricula: string
    carrera: string
    creditosAprobados: number
    creditosTotales: number
    porcentajeCreditos?: number | null
    assignments?: ServiceAssignmentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    matricula?: StringFieldUpdateOperationsInput | string
    carrera?: StringFieldUpdateOperationsInput | string
    creditosAprobados?: IntFieldUpdateOperationsInput | number
    creditosTotales?: IntFieldUpdateOperationsInput | number
    porcentajeCreditos?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    assignments?: ServiceAssignmentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    carrera?: StringFieldUpdateOperationsInput | string
    creditosAprobados?: IntFieldUpdateOperationsInput | number
    creditosTotales?: IntFieldUpdateOperationsInput | number
    porcentajeCreditos?: NullableFloatFieldUpdateOperationsInput | number | null
    assignments?: ServiceAssignmentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id: string
    matricula: string
    carrera: string
    creditosAprobados: number
    creditosTotales: number
    porcentajeCreditos?: number | null
  }

  export type StudentUpdateManyMutationInput = {
    matricula?: StringFieldUpdateOperationsInput | string
    carrera?: StringFieldUpdateOperationsInput | string
    creditosAprobados?: IntFieldUpdateOperationsInput | number
    creditosTotales?: IntFieldUpdateOperationsInput | number
    porcentajeCreditos?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    carrera?: StringFieldUpdateOperationsInput | string
    creditosAprobados?: IntFieldUpdateOperationsInput | number
    creditosTotales?: IntFieldUpdateOperationsInput | number
    porcentajeCreditos?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type InstitutionCreateInput = {
    nombre: string
    ciudad: string
    estado: string
    direccion?: string | null
    contactoNombre?: string | null
    contactoEmail: string
    contactoTelefono?: string | null
    incentivoDesc?: string | null
    verificada?: boolean
    user: UserCreateNestedOneWithoutInstitutionsInput
    assignments?: ServiceAssignmentCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUncheckedCreateInput = {
    id?: number
    nombre: string
    ciudad: string
    estado: string
    direccion?: string | null
    contactoNombre?: string | null
    contactoEmail: string
    contactoTelefono?: string | null
    incentivoDesc?: string | null
    verificada?: boolean
    adminUserId: string
    assignments?: ServiceAssignmentUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    contactoNombre?: NullableStringFieldUpdateOperationsInput | string | null
    contactoEmail?: StringFieldUpdateOperationsInput | string
    contactoTelefono?: NullableStringFieldUpdateOperationsInput | string | null
    incentivoDesc?: NullableStringFieldUpdateOperationsInput | string | null
    verificada?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutInstitutionsNestedInput
    assignments?: ServiceAssignmentUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    contactoNombre?: NullableStringFieldUpdateOperationsInput | string | null
    contactoEmail?: StringFieldUpdateOperationsInput | string
    contactoTelefono?: NullableStringFieldUpdateOperationsInput | string | null
    incentivoDesc?: NullableStringFieldUpdateOperationsInput | string | null
    verificada?: BoolFieldUpdateOperationsInput | boolean
    adminUserId?: StringFieldUpdateOperationsInput | string
    assignments?: ServiceAssignmentUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionCreateManyInput = {
    id?: number
    nombre: string
    ciudad: string
    estado: string
    direccion?: string | null
    contactoNombre?: string | null
    contactoEmail: string
    contactoTelefono?: string | null
    incentivoDesc?: string | null
    verificada?: boolean
    adminUserId: string
  }

  export type InstitutionUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    contactoNombre?: NullableStringFieldUpdateOperationsInput | string | null
    contactoEmail?: StringFieldUpdateOperationsInput | string
    contactoTelefono?: NullableStringFieldUpdateOperationsInput | string | null
    incentivoDesc?: NullableStringFieldUpdateOperationsInput | string | null
    verificada?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InstitutionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    contactoNombre?: NullableStringFieldUpdateOperationsInput | string | null
    contactoEmail?: StringFieldUpdateOperationsInput | string
    contactoTelefono?: NullableStringFieldUpdateOperationsInput | string | null
    incentivoDesc?: NullableStringFieldUpdateOperationsInput | string | null
    verificada?: BoolFieldUpdateOperationsInput | boolean
    adminUserId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceAssignmentCreateInput = {
    startDate?: Date | string | null
    plannedEndDate?: Date | string | null
    endDate?: Date | string | null
    totalHoursRequired?: number
    hoursCompleted?: number
    estado?: $Enums.service_status
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutAssignmentsInput
    institution: InstitutionCreateNestedOneWithoutAssignmentsInput
    workPlans?: WorkPlanCreateNestedManyWithoutAssignmentInput
    documents?: DocumentCreateNestedManyWithoutAssignmentInput
    reports?: ReportCreateNestedManyWithoutAssignmentInput
    hoursLogs?: HoursLogCreateNestedManyWithoutAssignmentInput
    incidents?: IncidentCreateNestedManyWithoutAssignmentInput
    tasks?: TaskCreateNestedManyWithoutAssignmentInput
  }

  export type ServiceAssignmentUncheckedCreateInput = {
    id?: number
    studentId: string
    institutionId: number
    startDate?: Date | string | null
    plannedEndDate?: Date | string | null
    endDate?: Date | string | null
    totalHoursRequired?: number
    hoursCompleted?: number
    estado?: $Enums.service_status
    createdAt?: Date | string
    updatedAt?: Date | string
    workPlans?: WorkPlanUncheckedCreateNestedManyWithoutAssignmentInput
    documents?: DocumentUncheckedCreateNestedManyWithoutAssignmentInput
    reports?: ReportUncheckedCreateNestedManyWithoutAssignmentInput
    hoursLogs?: HoursLogUncheckedCreateNestedManyWithoutAssignmentInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutAssignmentInput
    tasks?: TaskUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type ServiceAssignmentUpdateInput = {
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plannedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursRequired?: IntFieldUpdateOperationsInput | number
    hoursCompleted?: IntFieldUpdateOperationsInput | number
    estado?: Enumservice_statusFieldUpdateOperationsInput | $Enums.service_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutAssignmentsNestedInput
    institution?: InstitutionUpdateOneRequiredWithoutAssignmentsNestedInput
    workPlans?: WorkPlanUpdateManyWithoutAssignmentNestedInput
    documents?: DocumentUpdateManyWithoutAssignmentNestedInput
    reports?: ReportUpdateManyWithoutAssignmentNestedInput
    hoursLogs?: HoursLogUpdateManyWithoutAssignmentNestedInput
    incidents?: IncidentUpdateManyWithoutAssignmentNestedInput
    tasks?: TaskUpdateManyWithoutAssignmentNestedInput
  }

  export type ServiceAssignmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    institutionId?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plannedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursRequired?: IntFieldUpdateOperationsInput | number
    hoursCompleted?: IntFieldUpdateOperationsInput | number
    estado?: Enumservice_statusFieldUpdateOperationsInput | $Enums.service_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workPlans?: WorkPlanUncheckedUpdateManyWithoutAssignmentNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutAssignmentNestedInput
    reports?: ReportUncheckedUpdateManyWithoutAssignmentNestedInput
    hoursLogs?: HoursLogUncheckedUpdateManyWithoutAssignmentNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutAssignmentNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type ServiceAssignmentCreateManyInput = {
    id?: number
    studentId: string
    institutionId: number
    startDate?: Date | string | null
    plannedEndDate?: Date | string | null
    endDate?: Date | string | null
    totalHoursRequired?: number
    hoursCompleted?: number
    estado?: $Enums.service_status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceAssignmentUpdateManyMutationInput = {
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plannedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursRequired?: IntFieldUpdateOperationsInput | number
    hoursCompleted?: IntFieldUpdateOperationsInput | number
    estado?: Enumservice_statusFieldUpdateOperationsInput | $Enums.service_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceAssignmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    institutionId?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plannedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursRequired?: IntFieldUpdateOperationsInput | number
    hoursCompleted?: IntFieldUpdateOperationsInput | number
    estado?: Enumservice_statusFieldUpdateOperationsInput | $Enums.service_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkPlanCreateInput = {
    contenido: JsonNullValueInput | InputJsonValue
    status?: $Enums.plan_status
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: ServiceAssignmentCreateNestedOneWithoutWorkPlansInput
  }

  export type WorkPlanUncheckedCreateInput = {
    id?: number
    assignmentId: number
    contenido: JsonNullValueInput | InputJsonValue
    status?: $Enums.plan_status
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkPlanUpdateInput = {
    contenido?: JsonNullValueInput | InputJsonValue
    status?: Enumplan_statusFieldUpdateOperationsInput | $Enums.plan_status
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: ServiceAssignmentUpdateOneRequiredWithoutWorkPlansNestedInput
  }

  export type WorkPlanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    contenido?: JsonNullValueInput | InputJsonValue
    status?: Enumplan_statusFieldUpdateOperationsInput | $Enums.plan_status
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkPlanCreateManyInput = {
    id?: number
    assignmentId: number
    contenido: JsonNullValueInput | InputJsonValue
    status?: $Enums.plan_status
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkPlanUpdateManyMutationInput = {
    contenido?: JsonNullValueInput | InputJsonValue
    status?: Enumplan_statusFieldUpdateOperationsInput | $Enums.plan_status
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkPlanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    contenido?: JsonNullValueInput | InputJsonValue
    status?: Enumplan_statusFieldUpdateOperationsInput | $Enums.plan_status
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    tipo: $Enums.document_type
    filePath: string
    signedAt?: Date | string | null
    createdAt?: Date | string
    assignment: ServiceAssignmentCreateNestedOneWithoutDocumentsInput
    signedUser?: UserCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: number
    assignmentId: number
    tipo: $Enums.document_type
    filePath: string
    signedBy?: string | null
    signedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type DocumentUpdateInput = {
    tipo?: Enumdocument_typeFieldUpdateOperationsInput | $Enums.document_type
    filePath?: StringFieldUpdateOperationsInput | string
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: ServiceAssignmentUpdateOneRequiredWithoutDocumentsNestedInput
    signedUser?: UserUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    tipo?: Enumdocument_typeFieldUpdateOperationsInput | $Enums.document_type
    filePath?: StringFieldUpdateOperationsInput | string
    signedBy?: NullableStringFieldUpdateOperationsInput | string | null
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyInput = {
    id?: number
    assignmentId: number
    tipo: $Enums.document_type
    filePath: string
    signedBy?: string | null
    signedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    tipo?: Enumdocument_typeFieldUpdateOperationsInput | $Enums.document_type
    filePath?: StringFieldUpdateOperationsInput | string
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    tipo?: Enumdocument_typeFieldUpdateOperationsInput | $Enums.document_type
    filePath?: StringFieldUpdateOperationsInput | string
    signedBy?: NullableStringFieldUpdateOperationsInput | string | null
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateInput = {
    tipo: $Enums.report_type
    periodoInicio: Date | string
    periodoFin: Date | string
    horas: number
    descripcion?: string | null
    status?: $Enums.report_status
    validatedAt?: Date | string | null
    filePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: ServiceAssignmentCreateNestedOneWithoutReportsInput
    validator?: UserCreateNestedOneWithoutReportsValidInput
  }

  export type ReportUncheckedCreateInput = {
    id?: number
    assignmentId: number
    tipo: $Enums.report_type
    periodoInicio: Date | string
    periodoFin: Date | string
    horas: number
    descripcion?: string | null
    status?: $Enums.report_status
    validatedBy?: string | null
    validatedAt?: Date | string | null
    filePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateInput = {
    tipo?: Enumreport_typeFieldUpdateOperationsInput | $Enums.report_type
    periodoInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    periodoFin?: DateTimeFieldUpdateOperationsInput | Date | string
    horas?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumreport_statusFieldUpdateOperationsInput | $Enums.report_status
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: ServiceAssignmentUpdateOneRequiredWithoutReportsNestedInput
    validator?: UserUpdateOneWithoutReportsValidNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    tipo?: Enumreport_typeFieldUpdateOperationsInput | $Enums.report_type
    periodoInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    periodoFin?: DateTimeFieldUpdateOperationsInput | Date | string
    horas?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumreport_statusFieldUpdateOperationsInput | $Enums.report_status
    validatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    id?: number
    assignmentId: number
    tipo: $Enums.report_type
    periodoInicio: Date | string
    periodoFin: Date | string
    horas: number
    descripcion?: string | null
    status?: $Enums.report_status
    validatedBy?: string | null
    validatedAt?: Date | string | null
    filePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    tipo?: Enumreport_typeFieldUpdateOperationsInput | $Enums.report_type
    periodoInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    periodoFin?: DateTimeFieldUpdateOperationsInput | Date | string
    horas?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumreport_statusFieldUpdateOperationsInput | $Enums.report_status
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    tipo?: Enumreport_typeFieldUpdateOperationsInput | $Enums.report_type
    periodoInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    periodoFin?: DateTimeFieldUpdateOperationsInput | Date | string
    horas?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumreport_statusFieldUpdateOperationsInput | $Enums.report_status
    validatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoursLogCreateInput = {
    dateWorked: Date | string
    horas: number
    description?: string | null
    validated?: boolean
    assignment: ServiceAssignmentCreateNestedOneWithoutHoursLogsInput
  }

  export type HoursLogUncheckedCreateInput = {
    id?: number
    assignmentId: number
    dateWorked: Date | string
    horas: number
    description?: string | null
    validated?: boolean
  }

  export type HoursLogUpdateInput = {
    dateWorked?: DateTimeFieldUpdateOperationsInput | Date | string
    horas?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    validated?: BoolFieldUpdateOperationsInput | boolean
    assignment?: ServiceAssignmentUpdateOneRequiredWithoutHoursLogsNestedInput
  }

  export type HoursLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    dateWorked?: DateTimeFieldUpdateOperationsInput | Date | string
    horas?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    validated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HoursLogCreateManyInput = {
    id?: number
    assignmentId: number
    dateWorked: Date | string
    horas: number
    description?: string | null
    validated?: boolean
  }

  export type HoursLogUpdateManyMutationInput = {
    dateWorked?: DateTimeFieldUpdateOperationsInput | Date | string
    horas?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    validated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HoursLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    dateWorked?: DateTimeFieldUpdateOperationsInput | Date | string
    horas?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    validated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IncidentCreateInput = {
    reportedAt?: Date | string
    tipo: string
    descripcion: string
    estado?: $Enums.incident_status
    resolvedAt?: Date | string | null
    resolutionNotes?: string | null
    assignment?: ServiceAssignmentCreateNestedOneWithoutIncidentsInput
    reporter: UserCreateNestedOneWithoutIncidentsReportedInput
    resolver?: UserCreateNestedOneWithoutIncidentsResolvedInput
    messages?: IncidentMessageCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUncheckedCreateInput = {
    id?: number
    assignmentId?: number | null
    reportedBy: string
    reportedAt?: Date | string
    tipo: string
    descripcion: string
    estado?: $Enums.incident_status
    resolvedBy?: string | null
    resolvedAt?: Date | string | null
    resolutionNotes?: string | null
    messages?: IncidentMessageUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUpdateInput = {
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    estado?: Enumincident_statusFieldUpdateOperationsInput | $Enums.incident_status
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
    assignment?: ServiceAssignmentUpdateOneWithoutIncidentsNestedInput
    reporter?: UserUpdateOneRequiredWithoutIncidentsReportedNestedInput
    resolver?: UserUpdateOneWithoutIncidentsResolvedNestedInput
    messages?: IncidentMessageUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: NullableIntFieldUpdateOperationsInput | number | null
    reportedBy?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    estado?: Enumincident_statusFieldUpdateOperationsInput | $Enums.incident_status
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: IncidentMessageUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentCreateManyInput = {
    id?: number
    assignmentId?: number | null
    reportedBy: string
    reportedAt?: Date | string
    tipo: string
    descripcion: string
    estado?: $Enums.incident_status
    resolvedBy?: string | null
    resolvedAt?: Date | string | null
    resolutionNotes?: string | null
  }

  export type IncidentUpdateManyMutationInput = {
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    estado?: Enumincident_statusFieldUpdateOperationsInput | $Enums.incident_status
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IncidentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: NullableIntFieldUpdateOperationsInput | number | null
    reportedBy?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    estado?: Enumincident_statusFieldUpdateOperationsInput | $Enums.incident_status
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IncidentMessageCreateInput = {
    message: string
    sentAt?: Date | string
    incident: IncidentCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutIncidentMessageInput
  }

  export type IncidentMessageUncheckedCreateInput = {
    id?: number
    incidentId: number
    senderId: string
    message: string
    sentAt?: Date | string
  }

  export type IncidentMessageUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incident?: IncidentUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutIncidentMessageNestedInput
  }

  export type IncidentMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    incidentId?: IntFieldUpdateOperationsInput | number
    senderId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentMessageCreateManyInput = {
    id?: number
    incidentId: number
    senderId: string
    message: string
    sentAt?: Date | string
  }

  export type IncidentMessageUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    incidentId?: IntFieldUpdateOperationsInput | number
    senderId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    titulo: string
    descripcion?: string | null
    fechaLimite: Date | string
    status?: $Enums.task_status
    entregadaAt?: Date | string | null
    attachmentPath?: string | null
    reviewNotes?: string | null
    assignment: ServiceAssignmentCreateNestedOneWithoutTasksInput
    reviewer?: UserCreateNestedOneWithoutTasksReviewedInput
  }

  export type TaskUncheckedCreateInput = {
    id?: number
    assignmentId: number
    titulo: string
    descripcion?: string | null
    fechaLimite: Date | string
    status?: $Enums.task_status
    entregadaAt?: Date | string | null
    attachmentPath?: string | null
    reviewedBy?: string | null
    reviewNotes?: string | null
  }

  export type TaskUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaLimite?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    entregadaAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    assignment?: ServiceAssignmentUpdateOneRequiredWithoutTasksNestedInput
    reviewer?: UserUpdateOneWithoutTasksReviewedNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaLimite?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    entregadaAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskCreateManyInput = {
    id?: number
    assignmentId: number
    titulo: string
    descripcion?: string | null
    fechaLimite: Date | string
    status?: $Enums.task_status
    entregadaAt?: Date | string | null
    attachmentPath?: string | null
    reviewedBy?: string | null
    reviewNotes?: string | null
  }

  export type TaskUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaLimite?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    entregadaAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaLimite?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    entregadaAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type InstitutionListRelationFilter = {
    every?: InstitutionWhereInput
    some?: InstitutionWhereInput
    none?: InstitutionWhereInput
  }

  export type IncidentListRelationFilter = {
    every?: IncidentWhereInput
    some?: IncidentWhereInput
    none?: IncidentWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type IncidentMessageListRelationFilter = {
    every?: IncidentMessageWhereInput
    some?: IncidentMessageWhereInput
    none?: IncidentMessageWhereInput
  }

  export type InstitutionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncidentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncidentMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ServiceAssignmentListRelationFilter = {
    every?: ServiceAssignmentWhereInput
    some?: ServiceAssignmentWhereInput
    none?: ServiceAssignmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ServiceAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    matricula?: SortOrder
    carrera?: SortOrder
    creditosAprobados?: SortOrder
    creditosTotales?: SortOrder
    porcentajeCreditos?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    creditosAprobados?: SortOrder
    creditosTotales?: SortOrder
    porcentajeCreditos?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    matricula?: SortOrder
    carrera?: SortOrder
    creditosAprobados?: SortOrder
    creditosTotales?: SortOrder
    porcentajeCreditos?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    matricula?: SortOrder
    carrera?: SortOrder
    creditosAprobados?: SortOrder
    creditosTotales?: SortOrder
    porcentajeCreditos?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    creditosAprobados?: SortOrder
    creditosTotales?: SortOrder
    porcentajeCreditos?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type InstitutionCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    ciudad?: SortOrder
    estado?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoEmail?: SortOrder
    contactoTelefono?: SortOrder
    incentivoDesc?: SortOrder
    verificada?: SortOrder
    adminUserId?: SortOrder
  }

  export type InstitutionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InstitutionMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    ciudad?: SortOrder
    estado?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoEmail?: SortOrder
    contactoTelefono?: SortOrder
    incentivoDesc?: SortOrder
    verificada?: SortOrder
    adminUserId?: SortOrder
  }

  export type InstitutionMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    ciudad?: SortOrder
    estado?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoEmail?: SortOrder
    contactoTelefono?: SortOrder
    incentivoDesc?: SortOrder
    verificada?: SortOrder
    adminUserId?: SortOrder
  }

  export type InstitutionSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Enumservice_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.service_status | Enumservice_statusFieldRefInput<$PrismaModel>
    in?: $Enums.service_status[] | ListEnumservice_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.service_status[] | ListEnumservice_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumservice_statusFilter<$PrismaModel> | $Enums.service_status
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type InstitutionScalarRelationFilter = {
    is?: InstitutionWhereInput
    isNot?: InstitutionWhereInput
  }

  export type WorkPlanListRelationFilter = {
    every?: WorkPlanWhereInput
    some?: WorkPlanWhereInput
    none?: WorkPlanWhereInput
  }

  export type HoursLogListRelationFilter = {
    every?: HoursLogWhereInput
    some?: HoursLogWhereInput
    none?: HoursLogWhereInput
  }

  export type WorkPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HoursLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceAssignmentUniq_active_assignmentCompoundUniqueInput = {
    studentId: string
    estado: $Enums.service_status
  }

  export type ServiceAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    institutionId?: SortOrder
    startDate?: SortOrder
    plannedEndDate?: SortOrder
    endDate?: SortOrder
    totalHoursRequired?: SortOrder
    hoursCompleted?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAssignmentAvgOrderByAggregateInput = {
    id?: SortOrder
    institutionId?: SortOrder
    totalHoursRequired?: SortOrder
    hoursCompleted?: SortOrder
  }

  export type ServiceAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    institutionId?: SortOrder
    startDate?: SortOrder
    plannedEndDate?: SortOrder
    endDate?: SortOrder
    totalHoursRequired?: SortOrder
    hoursCompleted?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    institutionId?: SortOrder
    startDate?: SortOrder
    plannedEndDate?: SortOrder
    endDate?: SortOrder
    totalHoursRequired?: SortOrder
    hoursCompleted?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAssignmentSumOrderByAggregateInput = {
    id?: SortOrder
    institutionId?: SortOrder
    totalHoursRequired?: SortOrder
    hoursCompleted?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enumservice_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.service_status | Enumservice_statusFieldRefInput<$PrismaModel>
    in?: $Enums.service_status[] | ListEnumservice_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.service_status[] | ListEnumservice_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumservice_statusWithAggregatesFilter<$PrismaModel> | $Enums.service_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumservice_statusFilter<$PrismaModel>
    _max?: NestedEnumservice_statusFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type Enumplan_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.plan_status | Enumplan_statusFieldRefInput<$PrismaModel>
    in?: $Enums.plan_status[] | ListEnumplan_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.plan_status[] | ListEnumplan_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumplan_statusFilter<$PrismaModel> | $Enums.plan_status
  }

  export type ServiceAssignmentScalarRelationFilter = {
    is?: ServiceAssignmentWhereInput
    isNot?: ServiceAssignmentWhereInput
  }

  export type WorkPlanCountOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    contenido?: SortOrder
    status?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkPlanAvgOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
  }

  export type WorkPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    status?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkPlanMinOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    status?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkPlanSumOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type Enumplan_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.plan_status | Enumplan_statusFieldRefInput<$PrismaModel>
    in?: $Enums.plan_status[] | ListEnumplan_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.plan_status[] | ListEnumplan_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumplan_statusWithAggregatesFilter<$PrismaModel> | $Enums.plan_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumplan_statusFilter<$PrismaModel>
    _max?: NestedEnumplan_statusFilter<$PrismaModel>
  }

  export type Enumdocument_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.document_type | Enumdocument_typeFieldRefInput<$PrismaModel>
    in?: $Enums.document_type[] | ListEnumdocument_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.document_type[] | ListEnumdocument_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumdocument_typeFilter<$PrismaModel> | $Enums.document_type
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type DocumentUniq_doc_per_assignmentCompoundUniqueInput = {
    assignmentId: number
    tipo: $Enums.document_type
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    tipo?: SortOrder
    filePath?: SortOrder
    signedBy?: SortOrder
    signedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    tipo?: SortOrder
    filePath?: SortOrder
    signedBy?: SortOrder
    signedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    tipo?: SortOrder
    filePath?: SortOrder
    signedBy?: SortOrder
    signedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
  }

  export type Enumdocument_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.document_type | Enumdocument_typeFieldRefInput<$PrismaModel>
    in?: $Enums.document_type[] | ListEnumdocument_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.document_type[] | ListEnumdocument_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumdocument_typeWithAggregatesFilter<$PrismaModel> | $Enums.document_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdocument_typeFilter<$PrismaModel>
    _max?: NestedEnumdocument_typeFilter<$PrismaModel>
  }

  export type Enumreport_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.report_type | Enumreport_typeFieldRefInput<$PrismaModel>
    in?: $Enums.report_type[] | ListEnumreport_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.report_type[] | ListEnumreport_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumreport_typeFilter<$PrismaModel> | $Enums.report_type
  }

  export type Enumreport_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.report_status | Enumreport_statusFieldRefInput<$PrismaModel>
    in?: $Enums.report_status[] | ListEnumreport_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.report_status[] | ListEnumreport_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumreport_statusFilter<$PrismaModel> | $Enums.report_status
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    tipo?: SortOrder
    periodoInicio?: SortOrder
    periodoFin?: SortOrder
    horas?: SortOrder
    descripcion?: SortOrder
    status?: SortOrder
    validatedBy?: SortOrder
    validatedAt?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportAvgOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    horas?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    tipo?: SortOrder
    periodoInicio?: SortOrder
    periodoFin?: SortOrder
    horas?: SortOrder
    descripcion?: SortOrder
    status?: SortOrder
    validatedBy?: SortOrder
    validatedAt?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    tipo?: SortOrder
    periodoInicio?: SortOrder
    periodoFin?: SortOrder
    horas?: SortOrder
    descripcion?: SortOrder
    status?: SortOrder
    validatedBy?: SortOrder
    validatedAt?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportSumOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    horas?: SortOrder
  }

  export type Enumreport_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.report_type | Enumreport_typeFieldRefInput<$PrismaModel>
    in?: $Enums.report_type[] | ListEnumreport_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.report_type[] | ListEnumreport_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumreport_typeWithAggregatesFilter<$PrismaModel> | $Enums.report_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumreport_typeFilter<$PrismaModel>
    _max?: NestedEnumreport_typeFilter<$PrismaModel>
  }

  export type Enumreport_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.report_status | Enumreport_statusFieldRefInput<$PrismaModel>
    in?: $Enums.report_status[] | ListEnumreport_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.report_status[] | ListEnumreport_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumreport_statusWithAggregatesFilter<$PrismaModel> | $Enums.report_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumreport_statusFilter<$PrismaModel>
    _max?: NestedEnumreport_statusFilter<$PrismaModel>
  }

  export type HoursLogCountOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    dateWorked?: SortOrder
    horas?: SortOrder
    description?: SortOrder
    validated?: SortOrder
  }

  export type HoursLogAvgOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    horas?: SortOrder
  }

  export type HoursLogMaxOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    dateWorked?: SortOrder
    horas?: SortOrder
    description?: SortOrder
    validated?: SortOrder
  }

  export type HoursLogMinOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    dateWorked?: SortOrder
    horas?: SortOrder
    description?: SortOrder
    validated?: SortOrder
  }

  export type HoursLogSumOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    horas?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Enumincident_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.incident_status | Enumincident_statusFieldRefInput<$PrismaModel>
    in?: $Enums.incident_status[] | ListEnumincident_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.incident_status[] | ListEnumincident_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumincident_statusFilter<$PrismaModel> | $Enums.incident_status
  }

  export type ServiceAssignmentNullableScalarRelationFilter = {
    is?: ServiceAssignmentWhereInput | null
    isNot?: ServiceAssignmentWhereInput | null
  }

  export type IncidentCountOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    reportedBy?: SortOrder
    reportedAt?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    resolvedBy?: SortOrder
    resolvedAt?: SortOrder
    resolutionNotes?: SortOrder
  }

  export type IncidentAvgOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
  }

  export type IncidentMaxOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    reportedBy?: SortOrder
    reportedAt?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    resolvedBy?: SortOrder
    resolvedAt?: SortOrder
    resolutionNotes?: SortOrder
  }

  export type IncidentMinOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    reportedBy?: SortOrder
    reportedAt?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    resolvedBy?: SortOrder
    resolvedAt?: SortOrder
    resolutionNotes?: SortOrder
  }

  export type IncidentSumOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Enumincident_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.incident_status | Enumincident_statusFieldRefInput<$PrismaModel>
    in?: $Enums.incident_status[] | ListEnumincident_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.incident_status[] | ListEnumincident_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumincident_statusWithAggregatesFilter<$PrismaModel> | $Enums.incident_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumincident_statusFilter<$PrismaModel>
    _max?: NestedEnumincident_statusFilter<$PrismaModel>
  }

  export type IncidentScalarRelationFilter = {
    is?: IncidentWhereInput
    isNot?: IncidentWhereInput
  }

  export type IncidentMessageCountOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    senderId?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
  }

  export type IncidentMessageAvgOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
  }

  export type IncidentMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    senderId?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
  }

  export type IncidentMessageMinOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    senderId?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
  }

  export type IncidentMessageSumOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
  }

  export type Enumtask_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.task_status | Enumtask_statusFieldRefInput<$PrismaModel>
    in?: $Enums.task_status[] | ListEnumtask_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.task_status[] | ListEnumtask_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumtask_statusFilter<$PrismaModel> | $Enums.task_status
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    fechaLimite?: SortOrder
    status?: SortOrder
    entregadaAt?: SortOrder
    attachmentPath?: SortOrder
    reviewedBy?: SortOrder
    reviewNotes?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    fechaLimite?: SortOrder
    status?: SortOrder
    entregadaAt?: SortOrder
    attachmentPath?: SortOrder
    reviewedBy?: SortOrder
    reviewNotes?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    fechaLimite?: SortOrder
    status?: SortOrder
    entregadaAt?: SortOrder
    attachmentPath?: SortOrder
    reviewedBy?: SortOrder
    reviewNotes?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
  }

  export type Enumtask_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.task_status | Enumtask_statusFieldRefInput<$PrismaModel>
    in?: $Enums.task_status[] | ListEnumtask_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.task_status[] | ListEnumtask_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumtask_statusWithAggregatesFilter<$PrismaModel> | $Enums.task_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtask_statusFilter<$PrismaModel>
    _max?: NestedEnumtask_statusFilter<$PrismaModel>
  }

  export type StudentCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type InstitutionCreateNestedManyWithoutUserInput = {
    create?: XOR<InstitutionCreateWithoutUserInput, InstitutionUncheckedCreateWithoutUserInput> | InstitutionCreateWithoutUserInput[] | InstitutionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InstitutionCreateOrConnectWithoutUserInput | InstitutionCreateOrConnectWithoutUserInput[]
    createMany?: InstitutionCreateManyUserInputEnvelope
    connect?: InstitutionWhereUniqueInput | InstitutionWhereUniqueInput[]
  }

  export type IncidentCreateNestedManyWithoutReporterInput = {
    create?: XOR<IncidentCreateWithoutReporterInput, IncidentUncheckedCreateWithoutReporterInput> | IncidentCreateWithoutReporterInput[] | IncidentUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutReporterInput | IncidentCreateOrConnectWithoutReporterInput[]
    createMany?: IncidentCreateManyReporterInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type IncidentCreateNestedManyWithoutResolverInput = {
    create?: XOR<IncidentCreateWithoutResolverInput, IncidentUncheckedCreateWithoutResolverInput> | IncidentCreateWithoutResolverInput[] | IncidentUncheckedCreateWithoutResolverInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutResolverInput | IncidentCreateOrConnectWithoutResolverInput[]
    createMany?: IncidentCreateManyResolverInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutSignedUserInput = {
    create?: XOR<DocumentCreateWithoutSignedUserInput, DocumentUncheckedCreateWithoutSignedUserInput> | DocumentCreateWithoutSignedUserInput[] | DocumentUncheckedCreateWithoutSignedUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutSignedUserInput | DocumentCreateOrConnectWithoutSignedUserInput[]
    createMany?: DocumentCreateManySignedUserInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutValidatorInput = {
    create?: XOR<ReportCreateWithoutValidatorInput, ReportUncheckedCreateWithoutValidatorInput> | ReportCreateWithoutValidatorInput[] | ReportUncheckedCreateWithoutValidatorInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutValidatorInput | ReportCreateOrConnectWithoutValidatorInput[]
    createMany?: ReportCreateManyValidatorInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutReviewerInput = {
    create?: XOR<TaskCreateWithoutReviewerInput, TaskUncheckedCreateWithoutReviewerInput> | TaskCreateWithoutReviewerInput[] | TaskUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutReviewerInput | TaskCreateOrConnectWithoutReviewerInput[]
    createMany?: TaskCreateManyReviewerInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type IncidentMessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<IncidentMessageCreateWithoutSenderInput, IncidentMessageUncheckedCreateWithoutSenderInput> | IncidentMessageCreateWithoutSenderInput[] | IncidentMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: IncidentMessageCreateOrConnectWithoutSenderInput | IncidentMessageCreateOrConnectWithoutSenderInput[]
    createMany?: IncidentMessageCreateManySenderInputEnvelope
    connect?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type InstitutionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InstitutionCreateWithoutUserInput, InstitutionUncheckedCreateWithoutUserInput> | InstitutionCreateWithoutUserInput[] | InstitutionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InstitutionCreateOrConnectWithoutUserInput | InstitutionCreateOrConnectWithoutUserInput[]
    createMany?: InstitutionCreateManyUserInputEnvelope
    connect?: InstitutionWhereUniqueInput | InstitutionWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutReporterInput = {
    create?: XOR<IncidentCreateWithoutReporterInput, IncidentUncheckedCreateWithoutReporterInput> | IncidentCreateWithoutReporterInput[] | IncidentUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutReporterInput | IncidentCreateOrConnectWithoutReporterInput[]
    createMany?: IncidentCreateManyReporterInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutResolverInput = {
    create?: XOR<IncidentCreateWithoutResolverInput, IncidentUncheckedCreateWithoutResolverInput> | IncidentCreateWithoutResolverInput[] | IncidentUncheckedCreateWithoutResolverInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutResolverInput | IncidentCreateOrConnectWithoutResolverInput[]
    createMany?: IncidentCreateManyResolverInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutSignedUserInput = {
    create?: XOR<DocumentCreateWithoutSignedUserInput, DocumentUncheckedCreateWithoutSignedUserInput> | DocumentCreateWithoutSignedUserInput[] | DocumentUncheckedCreateWithoutSignedUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutSignedUserInput | DocumentCreateOrConnectWithoutSignedUserInput[]
    createMany?: DocumentCreateManySignedUserInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutValidatorInput = {
    create?: XOR<ReportCreateWithoutValidatorInput, ReportUncheckedCreateWithoutValidatorInput> | ReportCreateWithoutValidatorInput[] | ReportUncheckedCreateWithoutValidatorInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutValidatorInput | ReportCreateOrConnectWithoutValidatorInput[]
    createMany?: ReportCreateManyValidatorInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<TaskCreateWithoutReviewerInput, TaskUncheckedCreateWithoutReviewerInput> | TaskCreateWithoutReviewerInput[] | TaskUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutReviewerInput | TaskCreateOrConnectWithoutReviewerInput[]
    createMany?: TaskCreateManyReviewerInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type IncidentMessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<IncidentMessageCreateWithoutSenderInput, IncidentMessageUncheckedCreateWithoutSenderInput> | IncidentMessageCreateWithoutSenderInput[] | IncidentMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: IncidentMessageCreateOrConnectWithoutSenderInput | IncidentMessageCreateOrConnectWithoutSenderInput[]
    createMany?: IncidentMessageCreateManySenderInputEnvelope
    connect?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StudentUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type InstitutionUpdateManyWithoutUserNestedInput = {
    create?: XOR<InstitutionCreateWithoutUserInput, InstitutionUncheckedCreateWithoutUserInput> | InstitutionCreateWithoutUserInput[] | InstitutionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InstitutionCreateOrConnectWithoutUserInput | InstitutionCreateOrConnectWithoutUserInput[]
    upsert?: InstitutionUpsertWithWhereUniqueWithoutUserInput | InstitutionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InstitutionCreateManyUserInputEnvelope
    set?: InstitutionWhereUniqueInput | InstitutionWhereUniqueInput[]
    disconnect?: InstitutionWhereUniqueInput | InstitutionWhereUniqueInput[]
    delete?: InstitutionWhereUniqueInput | InstitutionWhereUniqueInput[]
    connect?: InstitutionWhereUniqueInput | InstitutionWhereUniqueInput[]
    update?: InstitutionUpdateWithWhereUniqueWithoutUserInput | InstitutionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InstitutionUpdateManyWithWhereWithoutUserInput | InstitutionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InstitutionScalarWhereInput | InstitutionScalarWhereInput[]
  }

  export type IncidentUpdateManyWithoutReporterNestedInput = {
    create?: XOR<IncidentCreateWithoutReporterInput, IncidentUncheckedCreateWithoutReporterInput> | IncidentCreateWithoutReporterInput[] | IncidentUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutReporterInput | IncidentCreateOrConnectWithoutReporterInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutReporterInput | IncidentUpsertWithWhereUniqueWithoutReporterInput[]
    createMany?: IncidentCreateManyReporterInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutReporterInput | IncidentUpdateWithWhereUniqueWithoutReporterInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutReporterInput | IncidentUpdateManyWithWhereWithoutReporterInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type IncidentUpdateManyWithoutResolverNestedInput = {
    create?: XOR<IncidentCreateWithoutResolverInput, IncidentUncheckedCreateWithoutResolverInput> | IncidentCreateWithoutResolverInput[] | IncidentUncheckedCreateWithoutResolverInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutResolverInput | IncidentCreateOrConnectWithoutResolverInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutResolverInput | IncidentUpsertWithWhereUniqueWithoutResolverInput[]
    createMany?: IncidentCreateManyResolverInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutResolverInput | IncidentUpdateWithWhereUniqueWithoutResolverInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutResolverInput | IncidentUpdateManyWithWhereWithoutResolverInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutSignedUserNestedInput = {
    create?: XOR<DocumentCreateWithoutSignedUserInput, DocumentUncheckedCreateWithoutSignedUserInput> | DocumentCreateWithoutSignedUserInput[] | DocumentUncheckedCreateWithoutSignedUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutSignedUserInput | DocumentCreateOrConnectWithoutSignedUserInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutSignedUserInput | DocumentUpsertWithWhereUniqueWithoutSignedUserInput[]
    createMany?: DocumentCreateManySignedUserInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutSignedUserInput | DocumentUpdateWithWhereUniqueWithoutSignedUserInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutSignedUserInput | DocumentUpdateManyWithWhereWithoutSignedUserInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutValidatorNestedInput = {
    create?: XOR<ReportCreateWithoutValidatorInput, ReportUncheckedCreateWithoutValidatorInput> | ReportCreateWithoutValidatorInput[] | ReportUncheckedCreateWithoutValidatorInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutValidatorInput | ReportCreateOrConnectWithoutValidatorInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutValidatorInput | ReportUpsertWithWhereUniqueWithoutValidatorInput[]
    createMany?: ReportCreateManyValidatorInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutValidatorInput | ReportUpdateWithWhereUniqueWithoutValidatorInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutValidatorInput | ReportUpdateManyWithWhereWithoutValidatorInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<TaskCreateWithoutReviewerInput, TaskUncheckedCreateWithoutReviewerInput> | TaskCreateWithoutReviewerInput[] | TaskUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutReviewerInput | TaskCreateOrConnectWithoutReviewerInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutReviewerInput | TaskUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: TaskCreateManyReviewerInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutReviewerInput | TaskUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutReviewerInput | TaskUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type IncidentMessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<IncidentMessageCreateWithoutSenderInput, IncidentMessageUncheckedCreateWithoutSenderInput> | IncidentMessageCreateWithoutSenderInput[] | IncidentMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: IncidentMessageCreateOrConnectWithoutSenderInput | IncidentMessageCreateOrConnectWithoutSenderInput[]
    upsert?: IncidentMessageUpsertWithWhereUniqueWithoutSenderInput | IncidentMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: IncidentMessageCreateManySenderInputEnvelope
    set?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
    disconnect?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
    delete?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
    connect?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
    update?: IncidentMessageUpdateWithWhereUniqueWithoutSenderInput | IncidentMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: IncidentMessageUpdateManyWithWhereWithoutSenderInput | IncidentMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: IncidentMessageScalarWhereInput | IncidentMessageScalarWhereInput[]
  }

  export type StudentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type InstitutionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InstitutionCreateWithoutUserInput, InstitutionUncheckedCreateWithoutUserInput> | InstitutionCreateWithoutUserInput[] | InstitutionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InstitutionCreateOrConnectWithoutUserInput | InstitutionCreateOrConnectWithoutUserInput[]
    upsert?: InstitutionUpsertWithWhereUniqueWithoutUserInput | InstitutionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InstitutionCreateManyUserInputEnvelope
    set?: InstitutionWhereUniqueInput | InstitutionWhereUniqueInput[]
    disconnect?: InstitutionWhereUniqueInput | InstitutionWhereUniqueInput[]
    delete?: InstitutionWhereUniqueInput | InstitutionWhereUniqueInput[]
    connect?: InstitutionWhereUniqueInput | InstitutionWhereUniqueInput[]
    update?: InstitutionUpdateWithWhereUniqueWithoutUserInput | InstitutionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InstitutionUpdateManyWithWhereWithoutUserInput | InstitutionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InstitutionScalarWhereInput | InstitutionScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutReporterNestedInput = {
    create?: XOR<IncidentCreateWithoutReporterInput, IncidentUncheckedCreateWithoutReporterInput> | IncidentCreateWithoutReporterInput[] | IncidentUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutReporterInput | IncidentCreateOrConnectWithoutReporterInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutReporterInput | IncidentUpsertWithWhereUniqueWithoutReporterInput[]
    createMany?: IncidentCreateManyReporterInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutReporterInput | IncidentUpdateWithWhereUniqueWithoutReporterInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutReporterInput | IncidentUpdateManyWithWhereWithoutReporterInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutResolverNestedInput = {
    create?: XOR<IncidentCreateWithoutResolverInput, IncidentUncheckedCreateWithoutResolverInput> | IncidentCreateWithoutResolverInput[] | IncidentUncheckedCreateWithoutResolverInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutResolverInput | IncidentCreateOrConnectWithoutResolverInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutResolverInput | IncidentUpsertWithWhereUniqueWithoutResolverInput[]
    createMany?: IncidentCreateManyResolverInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutResolverInput | IncidentUpdateWithWhereUniqueWithoutResolverInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutResolverInput | IncidentUpdateManyWithWhereWithoutResolverInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutSignedUserNestedInput = {
    create?: XOR<DocumentCreateWithoutSignedUserInput, DocumentUncheckedCreateWithoutSignedUserInput> | DocumentCreateWithoutSignedUserInput[] | DocumentUncheckedCreateWithoutSignedUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutSignedUserInput | DocumentCreateOrConnectWithoutSignedUserInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutSignedUserInput | DocumentUpsertWithWhereUniqueWithoutSignedUserInput[]
    createMany?: DocumentCreateManySignedUserInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutSignedUserInput | DocumentUpdateWithWhereUniqueWithoutSignedUserInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutSignedUserInput | DocumentUpdateManyWithWhereWithoutSignedUserInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutValidatorNestedInput = {
    create?: XOR<ReportCreateWithoutValidatorInput, ReportUncheckedCreateWithoutValidatorInput> | ReportCreateWithoutValidatorInput[] | ReportUncheckedCreateWithoutValidatorInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutValidatorInput | ReportCreateOrConnectWithoutValidatorInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutValidatorInput | ReportUpsertWithWhereUniqueWithoutValidatorInput[]
    createMany?: ReportCreateManyValidatorInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutValidatorInput | ReportUpdateWithWhereUniqueWithoutValidatorInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutValidatorInput | ReportUpdateManyWithWhereWithoutValidatorInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<TaskCreateWithoutReviewerInput, TaskUncheckedCreateWithoutReviewerInput> | TaskCreateWithoutReviewerInput[] | TaskUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutReviewerInput | TaskCreateOrConnectWithoutReviewerInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutReviewerInput | TaskUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: TaskCreateManyReviewerInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutReviewerInput | TaskUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutReviewerInput | TaskUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type IncidentMessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<IncidentMessageCreateWithoutSenderInput, IncidentMessageUncheckedCreateWithoutSenderInput> | IncidentMessageCreateWithoutSenderInput[] | IncidentMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: IncidentMessageCreateOrConnectWithoutSenderInput | IncidentMessageCreateOrConnectWithoutSenderInput[]
    upsert?: IncidentMessageUpsertWithWhereUniqueWithoutSenderInput | IncidentMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: IncidentMessageCreateManySenderInputEnvelope
    set?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
    disconnect?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
    delete?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
    connect?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
    update?: IncidentMessageUpdateWithWhereUniqueWithoutSenderInput | IncidentMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: IncidentMessageUpdateManyWithWhereWithoutSenderInput | IncidentMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: IncidentMessageScalarWhereInput | IncidentMessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStudentInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceAssignmentCreateNestedManyWithoutStudentInput = {
    create?: XOR<ServiceAssignmentCreateWithoutStudentInput, ServiceAssignmentUncheckedCreateWithoutStudentInput> | ServiceAssignmentCreateWithoutStudentInput[] | ServiceAssignmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutStudentInput | ServiceAssignmentCreateOrConnectWithoutStudentInput[]
    createMany?: ServiceAssignmentCreateManyStudentInputEnvelope
    connect?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
  }

  export type ServiceAssignmentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ServiceAssignmentCreateWithoutStudentInput, ServiceAssignmentUncheckedCreateWithoutStudentInput> | ServiceAssignmentCreateWithoutStudentInput[] | ServiceAssignmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutStudentInput | ServiceAssignmentCreateOrConnectWithoutStudentInput[]
    createMany?: ServiceAssignmentCreateManyStudentInputEnvelope
    connect?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    upsert?: UserUpsertWithoutStudentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentInput, UserUpdateWithoutStudentInput>, UserUncheckedUpdateWithoutStudentInput>
  }

  export type ServiceAssignmentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ServiceAssignmentCreateWithoutStudentInput, ServiceAssignmentUncheckedCreateWithoutStudentInput> | ServiceAssignmentCreateWithoutStudentInput[] | ServiceAssignmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutStudentInput | ServiceAssignmentCreateOrConnectWithoutStudentInput[]
    upsert?: ServiceAssignmentUpsertWithWhereUniqueWithoutStudentInput | ServiceAssignmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ServiceAssignmentCreateManyStudentInputEnvelope
    set?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    disconnect?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    delete?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    connect?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    update?: ServiceAssignmentUpdateWithWhereUniqueWithoutStudentInput | ServiceAssignmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ServiceAssignmentUpdateManyWithWhereWithoutStudentInput | ServiceAssignmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ServiceAssignmentScalarWhereInput | ServiceAssignmentScalarWhereInput[]
  }

  export type ServiceAssignmentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ServiceAssignmentCreateWithoutStudentInput, ServiceAssignmentUncheckedCreateWithoutStudentInput> | ServiceAssignmentCreateWithoutStudentInput[] | ServiceAssignmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutStudentInput | ServiceAssignmentCreateOrConnectWithoutStudentInput[]
    upsert?: ServiceAssignmentUpsertWithWhereUniqueWithoutStudentInput | ServiceAssignmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ServiceAssignmentCreateManyStudentInputEnvelope
    set?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    disconnect?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    delete?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    connect?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    update?: ServiceAssignmentUpdateWithWhereUniqueWithoutStudentInput | ServiceAssignmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ServiceAssignmentUpdateManyWithWhereWithoutStudentInput | ServiceAssignmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ServiceAssignmentScalarWhereInput | ServiceAssignmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInstitutionsInput = {
    create?: XOR<UserCreateWithoutInstitutionsInput, UserUncheckedCreateWithoutInstitutionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstitutionsInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceAssignmentCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<ServiceAssignmentCreateWithoutInstitutionInput, ServiceAssignmentUncheckedCreateWithoutInstitutionInput> | ServiceAssignmentCreateWithoutInstitutionInput[] | ServiceAssignmentUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutInstitutionInput | ServiceAssignmentCreateOrConnectWithoutInstitutionInput[]
    createMany?: ServiceAssignmentCreateManyInstitutionInputEnvelope
    connect?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
  }

  export type ServiceAssignmentUncheckedCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<ServiceAssignmentCreateWithoutInstitutionInput, ServiceAssignmentUncheckedCreateWithoutInstitutionInput> | ServiceAssignmentCreateWithoutInstitutionInput[] | ServiceAssignmentUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutInstitutionInput | ServiceAssignmentCreateOrConnectWithoutInstitutionInput[]
    createMany?: ServiceAssignmentCreateManyInstitutionInputEnvelope
    connect?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutInstitutionsNestedInput = {
    create?: XOR<UserCreateWithoutInstitutionsInput, UserUncheckedCreateWithoutInstitutionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstitutionsInput
    upsert?: UserUpsertWithoutInstitutionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInstitutionsInput, UserUpdateWithoutInstitutionsInput>, UserUncheckedUpdateWithoutInstitutionsInput>
  }

  export type ServiceAssignmentUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<ServiceAssignmentCreateWithoutInstitutionInput, ServiceAssignmentUncheckedCreateWithoutInstitutionInput> | ServiceAssignmentCreateWithoutInstitutionInput[] | ServiceAssignmentUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutInstitutionInput | ServiceAssignmentCreateOrConnectWithoutInstitutionInput[]
    upsert?: ServiceAssignmentUpsertWithWhereUniqueWithoutInstitutionInput | ServiceAssignmentUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: ServiceAssignmentCreateManyInstitutionInputEnvelope
    set?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    disconnect?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    delete?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    connect?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    update?: ServiceAssignmentUpdateWithWhereUniqueWithoutInstitutionInput | ServiceAssignmentUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: ServiceAssignmentUpdateManyWithWhereWithoutInstitutionInput | ServiceAssignmentUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: ServiceAssignmentScalarWhereInput | ServiceAssignmentScalarWhereInput[]
  }

  export type ServiceAssignmentUncheckedUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<ServiceAssignmentCreateWithoutInstitutionInput, ServiceAssignmentUncheckedCreateWithoutInstitutionInput> | ServiceAssignmentCreateWithoutInstitutionInput[] | ServiceAssignmentUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutInstitutionInput | ServiceAssignmentCreateOrConnectWithoutInstitutionInput[]
    upsert?: ServiceAssignmentUpsertWithWhereUniqueWithoutInstitutionInput | ServiceAssignmentUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: ServiceAssignmentCreateManyInstitutionInputEnvelope
    set?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    disconnect?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    delete?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    connect?: ServiceAssignmentWhereUniqueInput | ServiceAssignmentWhereUniqueInput[]
    update?: ServiceAssignmentUpdateWithWhereUniqueWithoutInstitutionInput | ServiceAssignmentUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: ServiceAssignmentUpdateManyWithWhereWithoutInstitutionInput | ServiceAssignmentUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: ServiceAssignmentScalarWhereInput | ServiceAssignmentScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<StudentCreateWithoutAssignmentsInput, StudentUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAssignmentsInput
    connect?: StudentWhereUniqueInput
  }

  export type InstitutionCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<InstitutionCreateWithoutAssignmentsInput, InstitutionUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutAssignmentsInput
    connect?: InstitutionWhereUniqueInput
  }

  export type WorkPlanCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<WorkPlanCreateWithoutAssignmentInput, WorkPlanUncheckedCreateWithoutAssignmentInput> | WorkPlanCreateWithoutAssignmentInput[] | WorkPlanUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: WorkPlanCreateOrConnectWithoutAssignmentInput | WorkPlanCreateOrConnectWithoutAssignmentInput[]
    createMany?: WorkPlanCreateManyAssignmentInputEnvelope
    connect?: WorkPlanWhereUniqueInput | WorkPlanWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<DocumentCreateWithoutAssignmentInput, DocumentUncheckedCreateWithoutAssignmentInput> | DocumentCreateWithoutAssignmentInput[] | DocumentUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutAssignmentInput | DocumentCreateOrConnectWithoutAssignmentInput[]
    createMany?: DocumentCreateManyAssignmentInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<ReportCreateWithoutAssignmentInput, ReportUncheckedCreateWithoutAssignmentInput> | ReportCreateWithoutAssignmentInput[] | ReportUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutAssignmentInput | ReportCreateOrConnectWithoutAssignmentInput[]
    createMany?: ReportCreateManyAssignmentInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type HoursLogCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<HoursLogCreateWithoutAssignmentInput, HoursLogUncheckedCreateWithoutAssignmentInput> | HoursLogCreateWithoutAssignmentInput[] | HoursLogUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: HoursLogCreateOrConnectWithoutAssignmentInput | HoursLogCreateOrConnectWithoutAssignmentInput[]
    createMany?: HoursLogCreateManyAssignmentInputEnvelope
    connect?: HoursLogWhereUniqueInput | HoursLogWhereUniqueInput[]
  }

  export type IncidentCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<IncidentCreateWithoutAssignmentInput, IncidentUncheckedCreateWithoutAssignmentInput> | IncidentCreateWithoutAssignmentInput[] | IncidentUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutAssignmentInput | IncidentCreateOrConnectWithoutAssignmentInput[]
    createMany?: IncidentCreateManyAssignmentInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<TaskCreateWithoutAssignmentInput, TaskUncheckedCreateWithoutAssignmentInput> | TaskCreateWithoutAssignmentInput[] | TaskUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignmentInput | TaskCreateOrConnectWithoutAssignmentInput[]
    createMany?: TaskCreateManyAssignmentInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type WorkPlanUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<WorkPlanCreateWithoutAssignmentInput, WorkPlanUncheckedCreateWithoutAssignmentInput> | WorkPlanCreateWithoutAssignmentInput[] | WorkPlanUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: WorkPlanCreateOrConnectWithoutAssignmentInput | WorkPlanCreateOrConnectWithoutAssignmentInput[]
    createMany?: WorkPlanCreateManyAssignmentInputEnvelope
    connect?: WorkPlanWhereUniqueInput | WorkPlanWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<DocumentCreateWithoutAssignmentInput, DocumentUncheckedCreateWithoutAssignmentInput> | DocumentCreateWithoutAssignmentInput[] | DocumentUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutAssignmentInput | DocumentCreateOrConnectWithoutAssignmentInput[]
    createMany?: DocumentCreateManyAssignmentInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<ReportCreateWithoutAssignmentInput, ReportUncheckedCreateWithoutAssignmentInput> | ReportCreateWithoutAssignmentInput[] | ReportUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutAssignmentInput | ReportCreateOrConnectWithoutAssignmentInput[]
    createMany?: ReportCreateManyAssignmentInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type HoursLogUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<HoursLogCreateWithoutAssignmentInput, HoursLogUncheckedCreateWithoutAssignmentInput> | HoursLogCreateWithoutAssignmentInput[] | HoursLogUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: HoursLogCreateOrConnectWithoutAssignmentInput | HoursLogCreateOrConnectWithoutAssignmentInput[]
    createMany?: HoursLogCreateManyAssignmentInputEnvelope
    connect?: HoursLogWhereUniqueInput | HoursLogWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<IncidentCreateWithoutAssignmentInput, IncidentUncheckedCreateWithoutAssignmentInput> | IncidentCreateWithoutAssignmentInput[] | IncidentUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutAssignmentInput | IncidentCreateOrConnectWithoutAssignmentInput[]
    createMany?: IncidentCreateManyAssignmentInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<TaskCreateWithoutAssignmentInput, TaskUncheckedCreateWithoutAssignmentInput> | TaskCreateWithoutAssignmentInput[] | TaskUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignmentInput | TaskCreateOrConnectWithoutAssignmentInput[]
    createMany?: TaskCreateManyAssignmentInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Enumservice_statusFieldUpdateOperationsInput = {
    set?: $Enums.service_status
  }

  export type StudentUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<StudentCreateWithoutAssignmentsInput, StudentUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAssignmentsInput
    upsert?: StudentUpsertWithoutAssignmentsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutAssignmentsInput, StudentUpdateWithoutAssignmentsInput>, StudentUncheckedUpdateWithoutAssignmentsInput>
  }

  export type InstitutionUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<InstitutionCreateWithoutAssignmentsInput, InstitutionUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutAssignmentsInput
    upsert?: InstitutionUpsertWithoutAssignmentsInput
    connect?: InstitutionWhereUniqueInput
    update?: XOR<XOR<InstitutionUpdateToOneWithWhereWithoutAssignmentsInput, InstitutionUpdateWithoutAssignmentsInput>, InstitutionUncheckedUpdateWithoutAssignmentsInput>
  }

  export type WorkPlanUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<WorkPlanCreateWithoutAssignmentInput, WorkPlanUncheckedCreateWithoutAssignmentInput> | WorkPlanCreateWithoutAssignmentInput[] | WorkPlanUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: WorkPlanCreateOrConnectWithoutAssignmentInput | WorkPlanCreateOrConnectWithoutAssignmentInput[]
    upsert?: WorkPlanUpsertWithWhereUniqueWithoutAssignmentInput | WorkPlanUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: WorkPlanCreateManyAssignmentInputEnvelope
    set?: WorkPlanWhereUniqueInput | WorkPlanWhereUniqueInput[]
    disconnect?: WorkPlanWhereUniqueInput | WorkPlanWhereUniqueInput[]
    delete?: WorkPlanWhereUniqueInput | WorkPlanWhereUniqueInput[]
    connect?: WorkPlanWhereUniqueInput | WorkPlanWhereUniqueInput[]
    update?: WorkPlanUpdateWithWhereUniqueWithoutAssignmentInput | WorkPlanUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: WorkPlanUpdateManyWithWhereWithoutAssignmentInput | WorkPlanUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: WorkPlanScalarWhereInput | WorkPlanScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<DocumentCreateWithoutAssignmentInput, DocumentUncheckedCreateWithoutAssignmentInput> | DocumentCreateWithoutAssignmentInput[] | DocumentUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutAssignmentInput | DocumentCreateOrConnectWithoutAssignmentInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutAssignmentInput | DocumentUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: DocumentCreateManyAssignmentInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutAssignmentInput | DocumentUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutAssignmentInput | DocumentUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<ReportCreateWithoutAssignmentInput, ReportUncheckedCreateWithoutAssignmentInput> | ReportCreateWithoutAssignmentInput[] | ReportUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutAssignmentInput | ReportCreateOrConnectWithoutAssignmentInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutAssignmentInput | ReportUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: ReportCreateManyAssignmentInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutAssignmentInput | ReportUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutAssignmentInput | ReportUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type HoursLogUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<HoursLogCreateWithoutAssignmentInput, HoursLogUncheckedCreateWithoutAssignmentInput> | HoursLogCreateWithoutAssignmentInput[] | HoursLogUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: HoursLogCreateOrConnectWithoutAssignmentInput | HoursLogCreateOrConnectWithoutAssignmentInput[]
    upsert?: HoursLogUpsertWithWhereUniqueWithoutAssignmentInput | HoursLogUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: HoursLogCreateManyAssignmentInputEnvelope
    set?: HoursLogWhereUniqueInput | HoursLogWhereUniqueInput[]
    disconnect?: HoursLogWhereUniqueInput | HoursLogWhereUniqueInput[]
    delete?: HoursLogWhereUniqueInput | HoursLogWhereUniqueInput[]
    connect?: HoursLogWhereUniqueInput | HoursLogWhereUniqueInput[]
    update?: HoursLogUpdateWithWhereUniqueWithoutAssignmentInput | HoursLogUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: HoursLogUpdateManyWithWhereWithoutAssignmentInput | HoursLogUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: HoursLogScalarWhereInput | HoursLogScalarWhereInput[]
  }

  export type IncidentUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<IncidentCreateWithoutAssignmentInput, IncidentUncheckedCreateWithoutAssignmentInput> | IncidentCreateWithoutAssignmentInput[] | IncidentUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutAssignmentInput | IncidentCreateOrConnectWithoutAssignmentInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutAssignmentInput | IncidentUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: IncidentCreateManyAssignmentInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutAssignmentInput | IncidentUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutAssignmentInput | IncidentUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<TaskCreateWithoutAssignmentInput, TaskUncheckedCreateWithoutAssignmentInput> | TaskCreateWithoutAssignmentInput[] | TaskUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignmentInput | TaskCreateOrConnectWithoutAssignmentInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignmentInput | TaskUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: TaskCreateManyAssignmentInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignmentInput | TaskUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignmentInput | TaskUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type WorkPlanUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<WorkPlanCreateWithoutAssignmentInput, WorkPlanUncheckedCreateWithoutAssignmentInput> | WorkPlanCreateWithoutAssignmentInput[] | WorkPlanUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: WorkPlanCreateOrConnectWithoutAssignmentInput | WorkPlanCreateOrConnectWithoutAssignmentInput[]
    upsert?: WorkPlanUpsertWithWhereUniqueWithoutAssignmentInput | WorkPlanUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: WorkPlanCreateManyAssignmentInputEnvelope
    set?: WorkPlanWhereUniqueInput | WorkPlanWhereUniqueInput[]
    disconnect?: WorkPlanWhereUniqueInput | WorkPlanWhereUniqueInput[]
    delete?: WorkPlanWhereUniqueInput | WorkPlanWhereUniqueInput[]
    connect?: WorkPlanWhereUniqueInput | WorkPlanWhereUniqueInput[]
    update?: WorkPlanUpdateWithWhereUniqueWithoutAssignmentInput | WorkPlanUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: WorkPlanUpdateManyWithWhereWithoutAssignmentInput | WorkPlanUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: WorkPlanScalarWhereInput | WorkPlanScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<DocumentCreateWithoutAssignmentInput, DocumentUncheckedCreateWithoutAssignmentInput> | DocumentCreateWithoutAssignmentInput[] | DocumentUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutAssignmentInput | DocumentCreateOrConnectWithoutAssignmentInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutAssignmentInput | DocumentUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: DocumentCreateManyAssignmentInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutAssignmentInput | DocumentUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutAssignmentInput | DocumentUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<ReportCreateWithoutAssignmentInput, ReportUncheckedCreateWithoutAssignmentInput> | ReportCreateWithoutAssignmentInput[] | ReportUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutAssignmentInput | ReportCreateOrConnectWithoutAssignmentInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutAssignmentInput | ReportUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: ReportCreateManyAssignmentInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutAssignmentInput | ReportUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutAssignmentInput | ReportUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type HoursLogUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<HoursLogCreateWithoutAssignmentInput, HoursLogUncheckedCreateWithoutAssignmentInput> | HoursLogCreateWithoutAssignmentInput[] | HoursLogUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: HoursLogCreateOrConnectWithoutAssignmentInput | HoursLogCreateOrConnectWithoutAssignmentInput[]
    upsert?: HoursLogUpsertWithWhereUniqueWithoutAssignmentInput | HoursLogUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: HoursLogCreateManyAssignmentInputEnvelope
    set?: HoursLogWhereUniqueInput | HoursLogWhereUniqueInput[]
    disconnect?: HoursLogWhereUniqueInput | HoursLogWhereUniqueInput[]
    delete?: HoursLogWhereUniqueInput | HoursLogWhereUniqueInput[]
    connect?: HoursLogWhereUniqueInput | HoursLogWhereUniqueInput[]
    update?: HoursLogUpdateWithWhereUniqueWithoutAssignmentInput | HoursLogUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: HoursLogUpdateManyWithWhereWithoutAssignmentInput | HoursLogUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: HoursLogScalarWhereInput | HoursLogScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<IncidentCreateWithoutAssignmentInput, IncidentUncheckedCreateWithoutAssignmentInput> | IncidentCreateWithoutAssignmentInput[] | IncidentUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutAssignmentInput | IncidentCreateOrConnectWithoutAssignmentInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutAssignmentInput | IncidentUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: IncidentCreateManyAssignmentInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutAssignmentInput | IncidentUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutAssignmentInput | IncidentUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<TaskCreateWithoutAssignmentInput, TaskUncheckedCreateWithoutAssignmentInput> | TaskCreateWithoutAssignmentInput[] | TaskUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignmentInput | TaskCreateOrConnectWithoutAssignmentInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignmentInput | TaskUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: TaskCreateManyAssignmentInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignmentInput | TaskUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignmentInput | TaskUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ServiceAssignmentCreateNestedOneWithoutWorkPlansInput = {
    create?: XOR<ServiceAssignmentCreateWithoutWorkPlansInput, ServiceAssignmentUncheckedCreateWithoutWorkPlansInput>
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutWorkPlansInput
    connect?: ServiceAssignmentWhereUniqueInput
  }

  export type Enumplan_statusFieldUpdateOperationsInput = {
    set?: $Enums.plan_status
  }

  export type ServiceAssignmentUpdateOneRequiredWithoutWorkPlansNestedInput = {
    create?: XOR<ServiceAssignmentCreateWithoutWorkPlansInput, ServiceAssignmentUncheckedCreateWithoutWorkPlansInput>
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutWorkPlansInput
    upsert?: ServiceAssignmentUpsertWithoutWorkPlansInput
    connect?: ServiceAssignmentWhereUniqueInput
    update?: XOR<XOR<ServiceAssignmentUpdateToOneWithWhereWithoutWorkPlansInput, ServiceAssignmentUpdateWithoutWorkPlansInput>, ServiceAssignmentUncheckedUpdateWithoutWorkPlansInput>
  }

  export type ServiceAssignmentCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<ServiceAssignmentCreateWithoutDocumentsInput, ServiceAssignmentUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutDocumentsInput
    connect?: ServiceAssignmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    connect?: UserWhereUniqueInput
  }

  export type Enumdocument_typeFieldUpdateOperationsInput = {
    set?: $Enums.document_type
  }

  export type ServiceAssignmentUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<ServiceAssignmentCreateWithoutDocumentsInput, ServiceAssignmentUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutDocumentsInput
    upsert?: ServiceAssignmentUpsertWithoutDocumentsInput
    connect?: ServiceAssignmentWhereUniqueInput
    update?: XOR<XOR<ServiceAssignmentUpdateToOneWithWhereWithoutDocumentsInput, ServiceAssignmentUpdateWithoutDocumentsInput>, ServiceAssignmentUncheckedUpdateWithoutDocumentsInput>
  }

  export type UserUpdateOneWithoutDocumentsNestedInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    upsert?: UserUpsertWithoutDocumentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDocumentsInput, UserUpdateWithoutDocumentsInput>, UserUncheckedUpdateWithoutDocumentsInput>
  }

  export type ServiceAssignmentCreateNestedOneWithoutReportsInput = {
    create?: XOR<ServiceAssignmentCreateWithoutReportsInput, ServiceAssignmentUncheckedCreateWithoutReportsInput>
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutReportsInput
    connect?: ServiceAssignmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReportsValidInput = {
    create?: XOR<UserCreateWithoutReportsValidInput, UserUncheckedCreateWithoutReportsValidInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsValidInput
    connect?: UserWhereUniqueInput
  }

  export type Enumreport_typeFieldUpdateOperationsInput = {
    set?: $Enums.report_type
  }

  export type Enumreport_statusFieldUpdateOperationsInput = {
    set?: $Enums.report_status
  }

  export type ServiceAssignmentUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<ServiceAssignmentCreateWithoutReportsInput, ServiceAssignmentUncheckedCreateWithoutReportsInput>
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutReportsInput
    upsert?: ServiceAssignmentUpsertWithoutReportsInput
    connect?: ServiceAssignmentWhereUniqueInput
    update?: XOR<XOR<ServiceAssignmentUpdateToOneWithWhereWithoutReportsInput, ServiceAssignmentUpdateWithoutReportsInput>, ServiceAssignmentUncheckedUpdateWithoutReportsInput>
  }

  export type UserUpdateOneWithoutReportsValidNestedInput = {
    create?: XOR<UserCreateWithoutReportsValidInput, UserUncheckedCreateWithoutReportsValidInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsValidInput
    upsert?: UserUpsertWithoutReportsValidInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReportsValidInput, UserUpdateWithoutReportsValidInput>, UserUncheckedUpdateWithoutReportsValidInput>
  }

  export type ServiceAssignmentCreateNestedOneWithoutHoursLogsInput = {
    create?: XOR<ServiceAssignmentCreateWithoutHoursLogsInput, ServiceAssignmentUncheckedCreateWithoutHoursLogsInput>
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutHoursLogsInput
    connect?: ServiceAssignmentWhereUniqueInput
  }

  export type ServiceAssignmentUpdateOneRequiredWithoutHoursLogsNestedInput = {
    create?: XOR<ServiceAssignmentCreateWithoutHoursLogsInput, ServiceAssignmentUncheckedCreateWithoutHoursLogsInput>
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutHoursLogsInput
    upsert?: ServiceAssignmentUpsertWithoutHoursLogsInput
    connect?: ServiceAssignmentWhereUniqueInput
    update?: XOR<XOR<ServiceAssignmentUpdateToOneWithWhereWithoutHoursLogsInput, ServiceAssignmentUpdateWithoutHoursLogsInput>, ServiceAssignmentUncheckedUpdateWithoutHoursLogsInput>
  }

  export type ServiceAssignmentCreateNestedOneWithoutIncidentsInput = {
    create?: XOR<ServiceAssignmentCreateWithoutIncidentsInput, ServiceAssignmentUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutIncidentsInput
    connect?: ServiceAssignmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutIncidentsReportedInput = {
    create?: XOR<UserCreateWithoutIncidentsReportedInput, UserUncheckedCreateWithoutIncidentsReportedInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncidentsReportedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutIncidentsResolvedInput = {
    create?: XOR<UserCreateWithoutIncidentsResolvedInput, UserUncheckedCreateWithoutIncidentsResolvedInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncidentsResolvedInput
    connect?: UserWhereUniqueInput
  }

  export type IncidentMessageCreateNestedManyWithoutIncidentInput = {
    create?: XOR<IncidentMessageCreateWithoutIncidentInput, IncidentMessageUncheckedCreateWithoutIncidentInput> | IncidentMessageCreateWithoutIncidentInput[] | IncidentMessageUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentMessageCreateOrConnectWithoutIncidentInput | IncidentMessageCreateOrConnectWithoutIncidentInput[]
    createMany?: IncidentMessageCreateManyIncidentInputEnvelope
    connect?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
  }

  export type IncidentMessageUncheckedCreateNestedManyWithoutIncidentInput = {
    create?: XOR<IncidentMessageCreateWithoutIncidentInput, IncidentMessageUncheckedCreateWithoutIncidentInput> | IncidentMessageCreateWithoutIncidentInput[] | IncidentMessageUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentMessageCreateOrConnectWithoutIncidentInput | IncidentMessageCreateOrConnectWithoutIncidentInput[]
    createMany?: IncidentMessageCreateManyIncidentInputEnvelope
    connect?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
  }

  export type Enumincident_statusFieldUpdateOperationsInput = {
    set?: $Enums.incident_status
  }

  export type ServiceAssignmentUpdateOneWithoutIncidentsNestedInput = {
    create?: XOR<ServiceAssignmentCreateWithoutIncidentsInput, ServiceAssignmentUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutIncidentsInput
    upsert?: ServiceAssignmentUpsertWithoutIncidentsInput
    disconnect?: ServiceAssignmentWhereInput | boolean
    delete?: ServiceAssignmentWhereInput | boolean
    connect?: ServiceAssignmentWhereUniqueInput
    update?: XOR<XOR<ServiceAssignmentUpdateToOneWithWhereWithoutIncidentsInput, ServiceAssignmentUpdateWithoutIncidentsInput>, ServiceAssignmentUncheckedUpdateWithoutIncidentsInput>
  }

  export type UserUpdateOneRequiredWithoutIncidentsReportedNestedInput = {
    create?: XOR<UserCreateWithoutIncidentsReportedInput, UserUncheckedCreateWithoutIncidentsReportedInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncidentsReportedInput
    upsert?: UserUpsertWithoutIncidentsReportedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIncidentsReportedInput, UserUpdateWithoutIncidentsReportedInput>, UserUncheckedUpdateWithoutIncidentsReportedInput>
  }

  export type UserUpdateOneWithoutIncidentsResolvedNestedInput = {
    create?: XOR<UserCreateWithoutIncidentsResolvedInput, UserUncheckedCreateWithoutIncidentsResolvedInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncidentsResolvedInput
    upsert?: UserUpsertWithoutIncidentsResolvedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIncidentsResolvedInput, UserUpdateWithoutIncidentsResolvedInput>, UserUncheckedUpdateWithoutIncidentsResolvedInput>
  }

  export type IncidentMessageUpdateManyWithoutIncidentNestedInput = {
    create?: XOR<IncidentMessageCreateWithoutIncidentInput, IncidentMessageUncheckedCreateWithoutIncidentInput> | IncidentMessageCreateWithoutIncidentInput[] | IncidentMessageUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentMessageCreateOrConnectWithoutIncidentInput | IncidentMessageCreateOrConnectWithoutIncidentInput[]
    upsert?: IncidentMessageUpsertWithWhereUniqueWithoutIncidentInput | IncidentMessageUpsertWithWhereUniqueWithoutIncidentInput[]
    createMany?: IncidentMessageCreateManyIncidentInputEnvelope
    set?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
    disconnect?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
    delete?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
    connect?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
    update?: IncidentMessageUpdateWithWhereUniqueWithoutIncidentInput | IncidentMessageUpdateWithWhereUniqueWithoutIncidentInput[]
    updateMany?: IncidentMessageUpdateManyWithWhereWithoutIncidentInput | IncidentMessageUpdateManyWithWhereWithoutIncidentInput[]
    deleteMany?: IncidentMessageScalarWhereInput | IncidentMessageScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IncidentMessageUncheckedUpdateManyWithoutIncidentNestedInput = {
    create?: XOR<IncidentMessageCreateWithoutIncidentInput, IncidentMessageUncheckedCreateWithoutIncidentInput> | IncidentMessageCreateWithoutIncidentInput[] | IncidentMessageUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentMessageCreateOrConnectWithoutIncidentInput | IncidentMessageCreateOrConnectWithoutIncidentInput[]
    upsert?: IncidentMessageUpsertWithWhereUniqueWithoutIncidentInput | IncidentMessageUpsertWithWhereUniqueWithoutIncidentInput[]
    createMany?: IncidentMessageCreateManyIncidentInputEnvelope
    set?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
    disconnect?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
    delete?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
    connect?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
    update?: IncidentMessageUpdateWithWhereUniqueWithoutIncidentInput | IncidentMessageUpdateWithWhereUniqueWithoutIncidentInput[]
    updateMany?: IncidentMessageUpdateManyWithWhereWithoutIncidentInput | IncidentMessageUpdateManyWithWhereWithoutIncidentInput[]
    deleteMany?: IncidentMessageScalarWhereInput | IncidentMessageScalarWhereInput[]
  }

  export type IncidentCreateNestedOneWithoutMessagesInput = {
    create?: XOR<IncidentCreateWithoutMessagesInput, IncidentUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: IncidentCreateOrConnectWithoutMessagesInput
    connect?: IncidentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutIncidentMessageInput = {
    create?: XOR<UserCreateWithoutIncidentMessageInput, UserUncheckedCreateWithoutIncidentMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncidentMessageInput
    connect?: UserWhereUniqueInput
  }

  export type IncidentUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<IncidentCreateWithoutMessagesInput, IncidentUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: IncidentCreateOrConnectWithoutMessagesInput
    upsert?: IncidentUpsertWithoutMessagesInput
    connect?: IncidentWhereUniqueInput
    update?: XOR<XOR<IncidentUpdateToOneWithWhereWithoutMessagesInput, IncidentUpdateWithoutMessagesInput>, IncidentUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutIncidentMessageNestedInput = {
    create?: XOR<UserCreateWithoutIncidentMessageInput, UserUncheckedCreateWithoutIncidentMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncidentMessageInput
    upsert?: UserUpsertWithoutIncidentMessageInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIncidentMessageInput, UserUpdateWithoutIncidentMessageInput>, UserUncheckedUpdateWithoutIncidentMessageInput>
  }

  export type ServiceAssignmentCreateNestedOneWithoutTasksInput = {
    create?: XOR<ServiceAssignmentCreateWithoutTasksInput, ServiceAssignmentUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutTasksInput
    connect?: ServiceAssignmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTasksReviewedInput = {
    create?: XOR<UserCreateWithoutTasksReviewedInput, UserUncheckedCreateWithoutTasksReviewedInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksReviewedInput
    connect?: UserWhereUniqueInput
  }

  export type Enumtask_statusFieldUpdateOperationsInput = {
    set?: $Enums.task_status
  }

  export type ServiceAssignmentUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<ServiceAssignmentCreateWithoutTasksInput, ServiceAssignmentUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ServiceAssignmentCreateOrConnectWithoutTasksInput
    upsert?: ServiceAssignmentUpsertWithoutTasksInput
    connect?: ServiceAssignmentWhereUniqueInput
    update?: XOR<XOR<ServiceAssignmentUpdateToOneWithWhereWithoutTasksInput, ServiceAssignmentUpdateWithoutTasksInput>, ServiceAssignmentUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateOneWithoutTasksReviewedNestedInput = {
    create?: XOR<UserCreateWithoutTasksReviewedInput, UserUncheckedCreateWithoutTasksReviewedInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksReviewedInput
    upsert?: UserUpsertWithoutTasksReviewedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksReviewedInput, UserUpdateWithoutTasksReviewedInput>, UserUncheckedUpdateWithoutTasksReviewedInput>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumservice_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.service_status | Enumservice_statusFieldRefInput<$PrismaModel>
    in?: $Enums.service_status[] | ListEnumservice_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.service_status[] | ListEnumservice_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumservice_statusFilter<$PrismaModel> | $Enums.service_status
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumservice_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.service_status | Enumservice_statusFieldRefInput<$PrismaModel>
    in?: $Enums.service_status[] | ListEnumservice_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.service_status[] | ListEnumservice_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumservice_statusWithAggregatesFilter<$PrismaModel> | $Enums.service_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumservice_statusFilter<$PrismaModel>
    _max?: NestedEnumservice_statusFilter<$PrismaModel>
  }

  export type NestedEnumplan_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.plan_status | Enumplan_statusFieldRefInput<$PrismaModel>
    in?: $Enums.plan_status[] | ListEnumplan_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.plan_status[] | ListEnumplan_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumplan_statusFilter<$PrismaModel> | $Enums.plan_status
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumplan_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.plan_status | Enumplan_statusFieldRefInput<$PrismaModel>
    in?: $Enums.plan_status[] | ListEnumplan_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.plan_status[] | ListEnumplan_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumplan_statusWithAggregatesFilter<$PrismaModel> | $Enums.plan_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumplan_statusFilter<$PrismaModel>
    _max?: NestedEnumplan_statusFilter<$PrismaModel>
  }

  export type NestedEnumdocument_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.document_type | Enumdocument_typeFieldRefInput<$PrismaModel>
    in?: $Enums.document_type[] | ListEnumdocument_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.document_type[] | ListEnumdocument_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumdocument_typeFilter<$PrismaModel> | $Enums.document_type
  }

  export type NestedEnumdocument_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.document_type | Enumdocument_typeFieldRefInput<$PrismaModel>
    in?: $Enums.document_type[] | ListEnumdocument_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.document_type[] | ListEnumdocument_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumdocument_typeWithAggregatesFilter<$PrismaModel> | $Enums.document_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdocument_typeFilter<$PrismaModel>
    _max?: NestedEnumdocument_typeFilter<$PrismaModel>
  }

  export type NestedEnumreport_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.report_type | Enumreport_typeFieldRefInput<$PrismaModel>
    in?: $Enums.report_type[] | ListEnumreport_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.report_type[] | ListEnumreport_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumreport_typeFilter<$PrismaModel> | $Enums.report_type
  }

  export type NestedEnumreport_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.report_status | Enumreport_statusFieldRefInput<$PrismaModel>
    in?: $Enums.report_status[] | ListEnumreport_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.report_status[] | ListEnumreport_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumreport_statusFilter<$PrismaModel> | $Enums.report_status
  }

  export type NestedEnumreport_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.report_type | Enumreport_typeFieldRefInput<$PrismaModel>
    in?: $Enums.report_type[] | ListEnumreport_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.report_type[] | ListEnumreport_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumreport_typeWithAggregatesFilter<$PrismaModel> | $Enums.report_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumreport_typeFilter<$PrismaModel>
    _max?: NestedEnumreport_typeFilter<$PrismaModel>
  }

  export type NestedEnumreport_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.report_status | Enumreport_statusFieldRefInput<$PrismaModel>
    in?: $Enums.report_status[] | ListEnumreport_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.report_status[] | ListEnumreport_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumreport_statusWithAggregatesFilter<$PrismaModel> | $Enums.report_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumreport_statusFilter<$PrismaModel>
    _max?: NestedEnumreport_statusFilter<$PrismaModel>
  }

  export type NestedEnumincident_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.incident_status | Enumincident_statusFieldRefInput<$PrismaModel>
    in?: $Enums.incident_status[] | ListEnumincident_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.incident_status[] | ListEnumincident_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumincident_statusFilter<$PrismaModel> | $Enums.incident_status
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumincident_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.incident_status | Enumincident_statusFieldRefInput<$PrismaModel>
    in?: $Enums.incident_status[] | ListEnumincident_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.incident_status[] | ListEnumincident_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumincident_statusWithAggregatesFilter<$PrismaModel> | $Enums.incident_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumincident_statusFilter<$PrismaModel>
    _max?: NestedEnumincident_statusFilter<$PrismaModel>
  }

  export type NestedEnumtask_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.task_status | Enumtask_statusFieldRefInput<$PrismaModel>
    in?: $Enums.task_status[] | ListEnumtask_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.task_status[] | ListEnumtask_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumtask_statusFilter<$PrismaModel> | $Enums.task_status
  }

  export type NestedEnumtask_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.task_status | Enumtask_statusFieldRefInput<$PrismaModel>
    in?: $Enums.task_status[] | ListEnumtask_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.task_status[] | ListEnumtask_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumtask_statusWithAggregatesFilter<$PrismaModel> | $Enums.task_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtask_statusFilter<$PrismaModel>
    _max?: NestedEnumtask_statusFilter<$PrismaModel>
  }

  export type StudentCreateWithoutUserInput = {
    matricula: string
    carrera: string
    creditosAprobados: number
    creditosTotales: number
    porcentajeCreditos?: number | null
    assignments?: ServiceAssignmentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    matricula: string
    carrera: string
    creditosAprobados: number
    creditosTotales: number
    porcentajeCreditos?: number | null
    assignments?: ServiceAssignmentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type InstitutionCreateWithoutUserInput = {
    nombre: string
    ciudad: string
    estado: string
    direccion?: string | null
    contactoNombre?: string | null
    contactoEmail: string
    contactoTelefono?: string | null
    incentivoDesc?: string | null
    verificada?: boolean
    assignments?: ServiceAssignmentCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUncheckedCreateWithoutUserInput = {
    id?: number
    nombre: string
    ciudad: string
    estado: string
    direccion?: string | null
    contactoNombre?: string | null
    contactoEmail: string
    contactoTelefono?: string | null
    incentivoDesc?: string | null
    verificada?: boolean
    assignments?: ServiceAssignmentUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionCreateOrConnectWithoutUserInput = {
    where: InstitutionWhereUniqueInput
    create: XOR<InstitutionCreateWithoutUserInput, InstitutionUncheckedCreateWithoutUserInput>
  }

  export type InstitutionCreateManyUserInputEnvelope = {
    data: InstitutionCreateManyUserInput | InstitutionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IncidentCreateWithoutReporterInput = {
    reportedAt?: Date | string
    tipo: string
    descripcion: string
    estado?: $Enums.incident_status
    resolvedAt?: Date | string | null
    resolutionNotes?: string | null
    assignment?: ServiceAssignmentCreateNestedOneWithoutIncidentsInput
    resolver?: UserCreateNestedOneWithoutIncidentsResolvedInput
    messages?: IncidentMessageCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUncheckedCreateWithoutReporterInput = {
    id?: number
    assignmentId?: number | null
    reportedAt?: Date | string
    tipo: string
    descripcion: string
    estado?: $Enums.incident_status
    resolvedBy?: string | null
    resolvedAt?: Date | string | null
    resolutionNotes?: string | null
    messages?: IncidentMessageUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentCreateOrConnectWithoutReporterInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutReporterInput, IncidentUncheckedCreateWithoutReporterInput>
  }

  export type IncidentCreateManyReporterInputEnvelope = {
    data: IncidentCreateManyReporterInput | IncidentCreateManyReporterInput[]
    skipDuplicates?: boolean
  }

  export type IncidentCreateWithoutResolverInput = {
    reportedAt?: Date | string
    tipo: string
    descripcion: string
    estado?: $Enums.incident_status
    resolvedAt?: Date | string | null
    resolutionNotes?: string | null
    assignment?: ServiceAssignmentCreateNestedOneWithoutIncidentsInput
    reporter: UserCreateNestedOneWithoutIncidentsReportedInput
    messages?: IncidentMessageCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUncheckedCreateWithoutResolverInput = {
    id?: number
    assignmentId?: number | null
    reportedBy: string
    reportedAt?: Date | string
    tipo: string
    descripcion: string
    estado?: $Enums.incident_status
    resolvedAt?: Date | string | null
    resolutionNotes?: string | null
    messages?: IncidentMessageUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentCreateOrConnectWithoutResolverInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutResolverInput, IncidentUncheckedCreateWithoutResolverInput>
  }

  export type IncidentCreateManyResolverInputEnvelope = {
    data: IncidentCreateManyResolverInput | IncidentCreateManyResolverInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutSignedUserInput = {
    tipo: $Enums.document_type
    filePath: string
    signedAt?: Date | string | null
    createdAt?: Date | string
    assignment: ServiceAssignmentCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateWithoutSignedUserInput = {
    id?: number
    assignmentId: number
    tipo: $Enums.document_type
    filePath: string
    signedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutSignedUserInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutSignedUserInput, DocumentUncheckedCreateWithoutSignedUserInput>
  }

  export type DocumentCreateManySignedUserInputEnvelope = {
    data: DocumentCreateManySignedUserInput | DocumentCreateManySignedUserInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutValidatorInput = {
    tipo: $Enums.report_type
    periodoInicio: Date | string
    periodoFin: Date | string
    horas: number
    descripcion?: string | null
    status?: $Enums.report_status
    validatedAt?: Date | string | null
    filePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: ServiceAssignmentCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateWithoutValidatorInput = {
    id?: number
    assignmentId: number
    tipo: $Enums.report_type
    periodoInicio: Date | string
    periodoFin: Date | string
    horas: number
    descripcion?: string | null
    status?: $Enums.report_status
    validatedAt?: Date | string | null
    filePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutValidatorInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutValidatorInput, ReportUncheckedCreateWithoutValidatorInput>
  }

  export type ReportCreateManyValidatorInputEnvelope = {
    data: ReportCreateManyValidatorInput | ReportCreateManyValidatorInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutReviewerInput = {
    titulo: string
    descripcion?: string | null
    fechaLimite: Date | string
    status?: $Enums.task_status
    entregadaAt?: Date | string | null
    attachmentPath?: string | null
    reviewNotes?: string | null
    assignment: ServiceAssignmentCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutReviewerInput = {
    id?: number
    assignmentId: number
    titulo: string
    descripcion?: string | null
    fechaLimite: Date | string
    status?: $Enums.task_status
    entregadaAt?: Date | string | null
    attachmentPath?: string | null
    reviewNotes?: string | null
  }

  export type TaskCreateOrConnectWithoutReviewerInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutReviewerInput, TaskUncheckedCreateWithoutReviewerInput>
  }

  export type TaskCreateManyReviewerInputEnvelope = {
    data: TaskCreateManyReviewerInput | TaskCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type IncidentMessageCreateWithoutSenderInput = {
    message: string
    sentAt?: Date | string
    incident: IncidentCreateNestedOneWithoutMessagesInput
  }

  export type IncidentMessageUncheckedCreateWithoutSenderInput = {
    id?: number
    incidentId: number
    message: string
    sentAt?: Date | string
  }

  export type IncidentMessageCreateOrConnectWithoutSenderInput = {
    where: IncidentMessageWhereUniqueInput
    create: XOR<IncidentMessageCreateWithoutSenderInput, IncidentMessageUncheckedCreateWithoutSenderInput>
  }

  export type IncidentMessageCreateManySenderInputEnvelope = {
    data: IncidentMessageCreateManySenderInput | IncidentMessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithoutUserInput = {
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateWithoutUserInput = {
    matricula?: StringFieldUpdateOperationsInput | string
    carrera?: StringFieldUpdateOperationsInput | string
    creditosAprobados?: IntFieldUpdateOperationsInput | number
    creditosTotales?: IntFieldUpdateOperationsInput | number
    porcentajeCreditos?: NullableFloatFieldUpdateOperationsInput | number | null
    assignments?: ServiceAssignmentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    matricula?: StringFieldUpdateOperationsInput | string
    carrera?: StringFieldUpdateOperationsInput | string
    creditosAprobados?: IntFieldUpdateOperationsInput | number
    creditosTotales?: IntFieldUpdateOperationsInput | number
    porcentajeCreditos?: NullableFloatFieldUpdateOperationsInput | number | null
    assignments?: ServiceAssignmentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type InstitutionUpsertWithWhereUniqueWithoutUserInput = {
    where: InstitutionWhereUniqueInput
    update: XOR<InstitutionUpdateWithoutUserInput, InstitutionUncheckedUpdateWithoutUserInput>
    create: XOR<InstitutionCreateWithoutUserInput, InstitutionUncheckedCreateWithoutUserInput>
  }

  export type InstitutionUpdateWithWhereUniqueWithoutUserInput = {
    where: InstitutionWhereUniqueInput
    data: XOR<InstitutionUpdateWithoutUserInput, InstitutionUncheckedUpdateWithoutUserInput>
  }

  export type InstitutionUpdateManyWithWhereWithoutUserInput = {
    where: InstitutionScalarWhereInput
    data: XOR<InstitutionUpdateManyMutationInput, InstitutionUncheckedUpdateManyWithoutUserInput>
  }

  export type InstitutionScalarWhereInput = {
    AND?: InstitutionScalarWhereInput | InstitutionScalarWhereInput[]
    OR?: InstitutionScalarWhereInput[]
    NOT?: InstitutionScalarWhereInput | InstitutionScalarWhereInput[]
    id?: IntFilter<"Institution"> | number
    nombre?: StringFilter<"Institution"> | string
    ciudad?: StringFilter<"Institution"> | string
    estado?: StringFilter<"Institution"> | string
    direccion?: StringNullableFilter<"Institution"> | string | null
    contactoNombre?: StringNullableFilter<"Institution"> | string | null
    contactoEmail?: StringFilter<"Institution"> | string
    contactoTelefono?: StringNullableFilter<"Institution"> | string | null
    incentivoDesc?: StringNullableFilter<"Institution"> | string | null
    verificada?: BoolFilter<"Institution"> | boolean
    adminUserId?: StringFilter<"Institution"> | string
  }

  export type IncidentUpsertWithWhereUniqueWithoutReporterInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutReporterInput, IncidentUncheckedUpdateWithoutReporterInput>
    create: XOR<IncidentCreateWithoutReporterInput, IncidentUncheckedCreateWithoutReporterInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutReporterInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutReporterInput, IncidentUncheckedUpdateWithoutReporterInput>
  }

  export type IncidentUpdateManyWithWhereWithoutReporterInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutReporterInput>
  }

  export type IncidentScalarWhereInput = {
    AND?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    OR?: IncidentScalarWhereInput[]
    NOT?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    id?: IntFilter<"Incident"> | number
    assignmentId?: IntNullableFilter<"Incident"> | number | null
    reportedBy?: StringFilter<"Incident"> | string
    reportedAt?: DateTimeFilter<"Incident"> | Date | string
    tipo?: StringFilter<"Incident"> | string
    descripcion?: StringFilter<"Incident"> | string
    estado?: Enumincident_statusFilter<"Incident"> | $Enums.incident_status
    resolvedBy?: StringNullableFilter<"Incident"> | string | null
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    resolutionNotes?: StringNullableFilter<"Incident"> | string | null
  }

  export type IncidentUpsertWithWhereUniqueWithoutResolverInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutResolverInput, IncidentUncheckedUpdateWithoutResolverInput>
    create: XOR<IncidentCreateWithoutResolverInput, IncidentUncheckedCreateWithoutResolverInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutResolverInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutResolverInput, IncidentUncheckedUpdateWithoutResolverInput>
  }

  export type IncidentUpdateManyWithWhereWithoutResolverInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutResolverInput>
  }

  export type DocumentUpsertWithWhereUniqueWithoutSignedUserInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutSignedUserInput, DocumentUncheckedUpdateWithoutSignedUserInput>
    create: XOR<DocumentCreateWithoutSignedUserInput, DocumentUncheckedCreateWithoutSignedUserInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutSignedUserInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutSignedUserInput, DocumentUncheckedUpdateWithoutSignedUserInput>
  }

  export type DocumentUpdateManyWithWhereWithoutSignedUserInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutSignedUserInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: IntFilter<"Document"> | number
    assignmentId?: IntFilter<"Document"> | number
    tipo?: Enumdocument_typeFilter<"Document"> | $Enums.document_type
    filePath?: StringFilter<"Document"> | string
    signedBy?: StringNullableFilter<"Document"> | string | null
    signedAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    createdAt?: DateTimeFilter<"Document"> | Date | string
  }

  export type ReportUpsertWithWhereUniqueWithoutValidatorInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutValidatorInput, ReportUncheckedUpdateWithoutValidatorInput>
    create: XOR<ReportCreateWithoutValidatorInput, ReportUncheckedCreateWithoutValidatorInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutValidatorInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutValidatorInput, ReportUncheckedUpdateWithoutValidatorInput>
  }

  export type ReportUpdateManyWithWhereWithoutValidatorInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutValidatorInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: IntFilter<"Report"> | number
    assignmentId?: IntFilter<"Report"> | number
    tipo?: Enumreport_typeFilter<"Report"> | $Enums.report_type
    periodoInicio?: DateTimeFilter<"Report"> | Date | string
    periodoFin?: DateTimeFilter<"Report"> | Date | string
    horas?: IntFilter<"Report"> | number
    descripcion?: StringNullableFilter<"Report"> | string | null
    status?: Enumreport_statusFilter<"Report"> | $Enums.report_status
    validatedBy?: StringNullableFilter<"Report"> | string | null
    validatedAt?: DateTimeNullableFilter<"Report"> | Date | string | null
    filePath?: StringNullableFilter<"Report"> | string | null
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type TaskUpsertWithWhereUniqueWithoutReviewerInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutReviewerInput, TaskUncheckedUpdateWithoutReviewerInput>
    create: XOR<TaskCreateWithoutReviewerInput, TaskUncheckedCreateWithoutReviewerInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutReviewerInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutReviewerInput, TaskUncheckedUpdateWithoutReviewerInput>
  }

  export type TaskUpdateManyWithWhereWithoutReviewerInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutReviewerInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: IntFilter<"Task"> | number
    assignmentId?: IntFilter<"Task"> | number
    titulo?: StringFilter<"Task"> | string
    descripcion?: StringNullableFilter<"Task"> | string | null
    fechaLimite?: DateTimeFilter<"Task"> | Date | string
    status?: Enumtask_statusFilter<"Task"> | $Enums.task_status
    entregadaAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    attachmentPath?: StringNullableFilter<"Task"> | string | null
    reviewedBy?: StringNullableFilter<"Task"> | string | null
    reviewNotes?: StringNullableFilter<"Task"> | string | null
  }

  export type IncidentMessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: IncidentMessageWhereUniqueInput
    update: XOR<IncidentMessageUpdateWithoutSenderInput, IncidentMessageUncheckedUpdateWithoutSenderInput>
    create: XOR<IncidentMessageCreateWithoutSenderInput, IncidentMessageUncheckedCreateWithoutSenderInput>
  }

  export type IncidentMessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: IncidentMessageWhereUniqueInput
    data: XOR<IncidentMessageUpdateWithoutSenderInput, IncidentMessageUncheckedUpdateWithoutSenderInput>
  }

  export type IncidentMessageUpdateManyWithWhereWithoutSenderInput = {
    where: IncidentMessageScalarWhereInput
    data: XOR<IncidentMessageUpdateManyMutationInput, IncidentMessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type IncidentMessageScalarWhereInput = {
    AND?: IncidentMessageScalarWhereInput | IncidentMessageScalarWhereInput[]
    OR?: IncidentMessageScalarWhereInput[]
    NOT?: IncidentMessageScalarWhereInput | IncidentMessageScalarWhereInput[]
    id?: IntFilter<"IncidentMessage"> | number
    incidentId?: IntFilter<"IncidentMessage"> | number
    senderId?: StringFilter<"IncidentMessage"> | string
    message?: StringFilter<"IncidentMessage"> | string
    sentAt?: DateTimeFilter<"IncidentMessage"> | Date | string
  }

  export type UserCreateWithoutStudentInput = {
    id: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    institutions?: InstitutionCreateNestedManyWithoutUserInput
    incidentsReported?: IncidentCreateNestedManyWithoutReporterInput
    incidentsResolved?: IncidentCreateNestedManyWithoutResolverInput
    documents?: DocumentCreateNestedManyWithoutSignedUserInput
    reportsValid?: ReportCreateNestedManyWithoutValidatorInput
    tasksReviewed?: TaskCreateNestedManyWithoutReviewerInput
    IncidentMessage?: IncidentMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutStudentInput = {
    id: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    institutions?: InstitutionUncheckedCreateNestedManyWithoutUserInput
    incidentsReported?: IncidentUncheckedCreateNestedManyWithoutReporterInput
    incidentsResolved?: IncidentUncheckedCreateNestedManyWithoutResolverInput
    documents?: DocumentUncheckedCreateNestedManyWithoutSignedUserInput
    reportsValid?: ReportUncheckedCreateNestedManyWithoutValidatorInput
    tasksReviewed?: TaskUncheckedCreateNestedManyWithoutReviewerInput
    IncidentMessage?: IncidentMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutStudentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
  }

  export type ServiceAssignmentCreateWithoutStudentInput = {
    startDate?: Date | string | null
    plannedEndDate?: Date | string | null
    endDate?: Date | string | null
    totalHoursRequired?: number
    hoursCompleted?: number
    estado?: $Enums.service_status
    createdAt?: Date | string
    updatedAt?: Date | string
    institution: InstitutionCreateNestedOneWithoutAssignmentsInput
    workPlans?: WorkPlanCreateNestedManyWithoutAssignmentInput
    documents?: DocumentCreateNestedManyWithoutAssignmentInput
    reports?: ReportCreateNestedManyWithoutAssignmentInput
    hoursLogs?: HoursLogCreateNestedManyWithoutAssignmentInput
    incidents?: IncidentCreateNestedManyWithoutAssignmentInput
    tasks?: TaskCreateNestedManyWithoutAssignmentInput
  }

  export type ServiceAssignmentUncheckedCreateWithoutStudentInput = {
    id?: number
    institutionId: number
    startDate?: Date | string | null
    plannedEndDate?: Date | string | null
    endDate?: Date | string | null
    totalHoursRequired?: number
    hoursCompleted?: number
    estado?: $Enums.service_status
    createdAt?: Date | string
    updatedAt?: Date | string
    workPlans?: WorkPlanUncheckedCreateNestedManyWithoutAssignmentInput
    documents?: DocumentUncheckedCreateNestedManyWithoutAssignmentInput
    reports?: ReportUncheckedCreateNestedManyWithoutAssignmentInput
    hoursLogs?: HoursLogUncheckedCreateNestedManyWithoutAssignmentInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutAssignmentInput
    tasks?: TaskUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type ServiceAssignmentCreateOrConnectWithoutStudentInput = {
    where: ServiceAssignmentWhereUniqueInput
    create: XOR<ServiceAssignmentCreateWithoutStudentInput, ServiceAssignmentUncheckedCreateWithoutStudentInput>
  }

  export type ServiceAssignmentCreateManyStudentInputEnvelope = {
    data: ServiceAssignmentCreateManyStudentInput | ServiceAssignmentCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStudentInput = {
    update: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
  }

  export type UserUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institutions?: InstitutionUpdateManyWithoutUserNestedInput
    incidentsReported?: IncidentUpdateManyWithoutReporterNestedInput
    incidentsResolved?: IncidentUpdateManyWithoutResolverNestedInput
    documents?: DocumentUpdateManyWithoutSignedUserNestedInput
    reportsValid?: ReportUpdateManyWithoutValidatorNestedInput
    tasksReviewed?: TaskUpdateManyWithoutReviewerNestedInput
    IncidentMessage?: IncidentMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institutions?: InstitutionUncheckedUpdateManyWithoutUserNestedInput
    incidentsReported?: IncidentUncheckedUpdateManyWithoutReporterNestedInput
    incidentsResolved?: IncidentUncheckedUpdateManyWithoutResolverNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutSignedUserNestedInput
    reportsValid?: ReportUncheckedUpdateManyWithoutValidatorNestedInput
    tasksReviewed?: TaskUncheckedUpdateManyWithoutReviewerNestedInput
    IncidentMessage?: IncidentMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type ServiceAssignmentUpsertWithWhereUniqueWithoutStudentInput = {
    where: ServiceAssignmentWhereUniqueInput
    update: XOR<ServiceAssignmentUpdateWithoutStudentInput, ServiceAssignmentUncheckedUpdateWithoutStudentInput>
    create: XOR<ServiceAssignmentCreateWithoutStudentInput, ServiceAssignmentUncheckedCreateWithoutStudentInput>
  }

  export type ServiceAssignmentUpdateWithWhereUniqueWithoutStudentInput = {
    where: ServiceAssignmentWhereUniqueInput
    data: XOR<ServiceAssignmentUpdateWithoutStudentInput, ServiceAssignmentUncheckedUpdateWithoutStudentInput>
  }

  export type ServiceAssignmentUpdateManyWithWhereWithoutStudentInput = {
    where: ServiceAssignmentScalarWhereInput
    data: XOR<ServiceAssignmentUpdateManyMutationInput, ServiceAssignmentUncheckedUpdateManyWithoutStudentInput>
  }

  export type ServiceAssignmentScalarWhereInput = {
    AND?: ServiceAssignmentScalarWhereInput | ServiceAssignmentScalarWhereInput[]
    OR?: ServiceAssignmentScalarWhereInput[]
    NOT?: ServiceAssignmentScalarWhereInput | ServiceAssignmentScalarWhereInput[]
    id?: IntFilter<"ServiceAssignment"> | number
    studentId?: StringFilter<"ServiceAssignment"> | string
    institutionId?: IntFilter<"ServiceAssignment"> | number
    startDate?: DateTimeNullableFilter<"ServiceAssignment"> | Date | string | null
    plannedEndDate?: DateTimeNullableFilter<"ServiceAssignment"> | Date | string | null
    endDate?: DateTimeNullableFilter<"ServiceAssignment"> | Date | string | null
    totalHoursRequired?: IntFilter<"ServiceAssignment"> | number
    hoursCompleted?: IntFilter<"ServiceAssignment"> | number
    estado?: Enumservice_statusFilter<"ServiceAssignment"> | $Enums.service_status
    createdAt?: DateTimeFilter<"ServiceAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceAssignment"> | Date | string
  }

  export type UserCreateWithoutInstitutionsInput = {
    id: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutUserInput
    incidentsReported?: IncidentCreateNestedManyWithoutReporterInput
    incidentsResolved?: IncidentCreateNestedManyWithoutResolverInput
    documents?: DocumentCreateNestedManyWithoutSignedUserInput
    reportsValid?: ReportCreateNestedManyWithoutValidatorInput
    tasksReviewed?: TaskCreateNestedManyWithoutReviewerInput
    IncidentMessage?: IncidentMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutInstitutionsInput = {
    id: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    incidentsReported?: IncidentUncheckedCreateNestedManyWithoutReporterInput
    incidentsResolved?: IncidentUncheckedCreateNestedManyWithoutResolverInput
    documents?: DocumentUncheckedCreateNestedManyWithoutSignedUserInput
    reportsValid?: ReportUncheckedCreateNestedManyWithoutValidatorInput
    tasksReviewed?: TaskUncheckedCreateNestedManyWithoutReviewerInput
    IncidentMessage?: IncidentMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutInstitutionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInstitutionsInput, UserUncheckedCreateWithoutInstitutionsInput>
  }

  export type ServiceAssignmentCreateWithoutInstitutionInput = {
    startDate?: Date | string | null
    plannedEndDate?: Date | string | null
    endDate?: Date | string | null
    totalHoursRequired?: number
    hoursCompleted?: number
    estado?: $Enums.service_status
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutAssignmentsInput
    workPlans?: WorkPlanCreateNestedManyWithoutAssignmentInput
    documents?: DocumentCreateNestedManyWithoutAssignmentInput
    reports?: ReportCreateNestedManyWithoutAssignmentInput
    hoursLogs?: HoursLogCreateNestedManyWithoutAssignmentInput
    incidents?: IncidentCreateNestedManyWithoutAssignmentInput
    tasks?: TaskCreateNestedManyWithoutAssignmentInput
  }

  export type ServiceAssignmentUncheckedCreateWithoutInstitutionInput = {
    id?: number
    studentId: string
    startDate?: Date | string | null
    plannedEndDate?: Date | string | null
    endDate?: Date | string | null
    totalHoursRequired?: number
    hoursCompleted?: number
    estado?: $Enums.service_status
    createdAt?: Date | string
    updatedAt?: Date | string
    workPlans?: WorkPlanUncheckedCreateNestedManyWithoutAssignmentInput
    documents?: DocumentUncheckedCreateNestedManyWithoutAssignmentInput
    reports?: ReportUncheckedCreateNestedManyWithoutAssignmentInput
    hoursLogs?: HoursLogUncheckedCreateNestedManyWithoutAssignmentInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutAssignmentInput
    tasks?: TaskUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type ServiceAssignmentCreateOrConnectWithoutInstitutionInput = {
    where: ServiceAssignmentWhereUniqueInput
    create: XOR<ServiceAssignmentCreateWithoutInstitutionInput, ServiceAssignmentUncheckedCreateWithoutInstitutionInput>
  }

  export type ServiceAssignmentCreateManyInstitutionInputEnvelope = {
    data: ServiceAssignmentCreateManyInstitutionInput | ServiceAssignmentCreateManyInstitutionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutInstitutionsInput = {
    update: XOR<UserUpdateWithoutInstitutionsInput, UserUncheckedUpdateWithoutInstitutionsInput>
    create: XOR<UserCreateWithoutInstitutionsInput, UserUncheckedCreateWithoutInstitutionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInstitutionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInstitutionsInput, UserUncheckedUpdateWithoutInstitutionsInput>
  }

  export type UserUpdateWithoutInstitutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutUserNestedInput
    incidentsReported?: IncidentUpdateManyWithoutReporterNestedInput
    incidentsResolved?: IncidentUpdateManyWithoutResolverNestedInput
    documents?: DocumentUpdateManyWithoutSignedUserNestedInput
    reportsValid?: ReportUpdateManyWithoutValidatorNestedInput
    tasksReviewed?: TaskUpdateManyWithoutReviewerNestedInput
    IncidentMessage?: IncidentMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutInstitutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    incidentsReported?: IncidentUncheckedUpdateManyWithoutReporterNestedInput
    incidentsResolved?: IncidentUncheckedUpdateManyWithoutResolverNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutSignedUserNestedInput
    reportsValid?: ReportUncheckedUpdateManyWithoutValidatorNestedInput
    tasksReviewed?: TaskUncheckedUpdateManyWithoutReviewerNestedInput
    IncidentMessage?: IncidentMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type ServiceAssignmentUpsertWithWhereUniqueWithoutInstitutionInput = {
    where: ServiceAssignmentWhereUniqueInput
    update: XOR<ServiceAssignmentUpdateWithoutInstitutionInput, ServiceAssignmentUncheckedUpdateWithoutInstitutionInput>
    create: XOR<ServiceAssignmentCreateWithoutInstitutionInput, ServiceAssignmentUncheckedCreateWithoutInstitutionInput>
  }

  export type ServiceAssignmentUpdateWithWhereUniqueWithoutInstitutionInput = {
    where: ServiceAssignmentWhereUniqueInput
    data: XOR<ServiceAssignmentUpdateWithoutInstitutionInput, ServiceAssignmentUncheckedUpdateWithoutInstitutionInput>
  }

  export type ServiceAssignmentUpdateManyWithWhereWithoutInstitutionInput = {
    where: ServiceAssignmentScalarWhereInput
    data: XOR<ServiceAssignmentUpdateManyMutationInput, ServiceAssignmentUncheckedUpdateManyWithoutInstitutionInput>
  }

  export type StudentCreateWithoutAssignmentsInput = {
    matricula: string
    carrera: string
    creditosAprobados: number
    creditosTotales: number
    porcentajeCreditos?: number | null
    user: UserCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutAssignmentsInput = {
    id: string
    matricula: string
    carrera: string
    creditosAprobados: number
    creditosTotales: number
    porcentajeCreditos?: number | null
  }

  export type StudentCreateOrConnectWithoutAssignmentsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAssignmentsInput, StudentUncheckedCreateWithoutAssignmentsInput>
  }

  export type InstitutionCreateWithoutAssignmentsInput = {
    nombre: string
    ciudad: string
    estado: string
    direccion?: string | null
    contactoNombre?: string | null
    contactoEmail: string
    contactoTelefono?: string | null
    incentivoDesc?: string | null
    verificada?: boolean
    user: UserCreateNestedOneWithoutInstitutionsInput
  }

  export type InstitutionUncheckedCreateWithoutAssignmentsInput = {
    id?: number
    nombre: string
    ciudad: string
    estado: string
    direccion?: string | null
    contactoNombre?: string | null
    contactoEmail: string
    contactoTelefono?: string | null
    incentivoDesc?: string | null
    verificada?: boolean
    adminUserId: string
  }

  export type InstitutionCreateOrConnectWithoutAssignmentsInput = {
    where: InstitutionWhereUniqueInput
    create: XOR<InstitutionCreateWithoutAssignmentsInput, InstitutionUncheckedCreateWithoutAssignmentsInput>
  }

  export type WorkPlanCreateWithoutAssignmentInput = {
    contenido: JsonNullValueInput | InputJsonValue
    status?: $Enums.plan_status
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkPlanUncheckedCreateWithoutAssignmentInput = {
    id?: number
    contenido: JsonNullValueInput | InputJsonValue
    status?: $Enums.plan_status
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkPlanCreateOrConnectWithoutAssignmentInput = {
    where: WorkPlanWhereUniqueInput
    create: XOR<WorkPlanCreateWithoutAssignmentInput, WorkPlanUncheckedCreateWithoutAssignmentInput>
  }

  export type WorkPlanCreateManyAssignmentInputEnvelope = {
    data: WorkPlanCreateManyAssignmentInput | WorkPlanCreateManyAssignmentInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutAssignmentInput = {
    tipo: $Enums.document_type
    filePath: string
    signedAt?: Date | string | null
    createdAt?: Date | string
    signedUser?: UserCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateWithoutAssignmentInput = {
    id?: number
    tipo: $Enums.document_type
    filePath: string
    signedBy?: string | null
    signedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutAssignmentInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutAssignmentInput, DocumentUncheckedCreateWithoutAssignmentInput>
  }

  export type DocumentCreateManyAssignmentInputEnvelope = {
    data: DocumentCreateManyAssignmentInput | DocumentCreateManyAssignmentInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutAssignmentInput = {
    tipo: $Enums.report_type
    periodoInicio: Date | string
    periodoFin: Date | string
    horas: number
    descripcion?: string | null
    status?: $Enums.report_status
    validatedAt?: Date | string | null
    filePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    validator?: UserCreateNestedOneWithoutReportsValidInput
  }

  export type ReportUncheckedCreateWithoutAssignmentInput = {
    id?: number
    tipo: $Enums.report_type
    periodoInicio: Date | string
    periodoFin: Date | string
    horas: number
    descripcion?: string | null
    status?: $Enums.report_status
    validatedBy?: string | null
    validatedAt?: Date | string | null
    filePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutAssignmentInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutAssignmentInput, ReportUncheckedCreateWithoutAssignmentInput>
  }

  export type ReportCreateManyAssignmentInputEnvelope = {
    data: ReportCreateManyAssignmentInput | ReportCreateManyAssignmentInput[]
    skipDuplicates?: boolean
  }

  export type HoursLogCreateWithoutAssignmentInput = {
    dateWorked: Date | string
    horas: number
    description?: string | null
    validated?: boolean
  }

  export type HoursLogUncheckedCreateWithoutAssignmentInput = {
    id?: number
    dateWorked: Date | string
    horas: number
    description?: string | null
    validated?: boolean
  }

  export type HoursLogCreateOrConnectWithoutAssignmentInput = {
    where: HoursLogWhereUniqueInput
    create: XOR<HoursLogCreateWithoutAssignmentInput, HoursLogUncheckedCreateWithoutAssignmentInput>
  }

  export type HoursLogCreateManyAssignmentInputEnvelope = {
    data: HoursLogCreateManyAssignmentInput | HoursLogCreateManyAssignmentInput[]
    skipDuplicates?: boolean
  }

  export type IncidentCreateWithoutAssignmentInput = {
    reportedAt?: Date | string
    tipo: string
    descripcion: string
    estado?: $Enums.incident_status
    resolvedAt?: Date | string | null
    resolutionNotes?: string | null
    reporter: UserCreateNestedOneWithoutIncidentsReportedInput
    resolver?: UserCreateNestedOneWithoutIncidentsResolvedInput
    messages?: IncidentMessageCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUncheckedCreateWithoutAssignmentInput = {
    id?: number
    reportedBy: string
    reportedAt?: Date | string
    tipo: string
    descripcion: string
    estado?: $Enums.incident_status
    resolvedBy?: string | null
    resolvedAt?: Date | string | null
    resolutionNotes?: string | null
    messages?: IncidentMessageUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentCreateOrConnectWithoutAssignmentInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutAssignmentInput, IncidentUncheckedCreateWithoutAssignmentInput>
  }

  export type IncidentCreateManyAssignmentInputEnvelope = {
    data: IncidentCreateManyAssignmentInput | IncidentCreateManyAssignmentInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutAssignmentInput = {
    titulo: string
    descripcion?: string | null
    fechaLimite: Date | string
    status?: $Enums.task_status
    entregadaAt?: Date | string | null
    attachmentPath?: string | null
    reviewNotes?: string | null
    reviewer?: UserCreateNestedOneWithoutTasksReviewedInput
  }

  export type TaskUncheckedCreateWithoutAssignmentInput = {
    id?: number
    titulo: string
    descripcion?: string | null
    fechaLimite: Date | string
    status?: $Enums.task_status
    entregadaAt?: Date | string | null
    attachmentPath?: string | null
    reviewedBy?: string | null
    reviewNotes?: string | null
  }

  export type TaskCreateOrConnectWithoutAssignmentInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssignmentInput, TaskUncheckedCreateWithoutAssignmentInput>
  }

  export type TaskCreateManyAssignmentInputEnvelope = {
    data: TaskCreateManyAssignmentInput | TaskCreateManyAssignmentInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithoutAssignmentsInput = {
    update: XOR<StudentUpdateWithoutAssignmentsInput, StudentUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<StudentCreateWithoutAssignmentsInput, StudentUncheckedCreateWithoutAssignmentsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutAssignmentsInput, StudentUncheckedUpdateWithoutAssignmentsInput>
  }

  export type StudentUpdateWithoutAssignmentsInput = {
    matricula?: StringFieldUpdateOperationsInput | string
    carrera?: StringFieldUpdateOperationsInput | string
    creditosAprobados?: IntFieldUpdateOperationsInput | number
    creditosTotales?: IntFieldUpdateOperationsInput | number
    porcentajeCreditos?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    carrera?: StringFieldUpdateOperationsInput | string
    creditosAprobados?: IntFieldUpdateOperationsInput | number
    creditosTotales?: IntFieldUpdateOperationsInput | number
    porcentajeCreditos?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type InstitutionUpsertWithoutAssignmentsInput = {
    update: XOR<InstitutionUpdateWithoutAssignmentsInput, InstitutionUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<InstitutionCreateWithoutAssignmentsInput, InstitutionUncheckedCreateWithoutAssignmentsInput>
    where?: InstitutionWhereInput
  }

  export type InstitutionUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: InstitutionWhereInput
    data: XOR<InstitutionUpdateWithoutAssignmentsInput, InstitutionUncheckedUpdateWithoutAssignmentsInput>
  }

  export type InstitutionUpdateWithoutAssignmentsInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    contactoNombre?: NullableStringFieldUpdateOperationsInput | string | null
    contactoEmail?: StringFieldUpdateOperationsInput | string
    contactoTelefono?: NullableStringFieldUpdateOperationsInput | string | null
    incentivoDesc?: NullableStringFieldUpdateOperationsInput | string | null
    verificada?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutInstitutionsNestedInput
  }

  export type InstitutionUncheckedUpdateWithoutAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    contactoNombre?: NullableStringFieldUpdateOperationsInput | string | null
    contactoEmail?: StringFieldUpdateOperationsInput | string
    contactoTelefono?: NullableStringFieldUpdateOperationsInput | string | null
    incentivoDesc?: NullableStringFieldUpdateOperationsInput | string | null
    verificada?: BoolFieldUpdateOperationsInput | boolean
    adminUserId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkPlanUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: WorkPlanWhereUniqueInput
    update: XOR<WorkPlanUpdateWithoutAssignmentInput, WorkPlanUncheckedUpdateWithoutAssignmentInput>
    create: XOR<WorkPlanCreateWithoutAssignmentInput, WorkPlanUncheckedCreateWithoutAssignmentInput>
  }

  export type WorkPlanUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: WorkPlanWhereUniqueInput
    data: XOR<WorkPlanUpdateWithoutAssignmentInput, WorkPlanUncheckedUpdateWithoutAssignmentInput>
  }

  export type WorkPlanUpdateManyWithWhereWithoutAssignmentInput = {
    where: WorkPlanScalarWhereInput
    data: XOR<WorkPlanUpdateManyMutationInput, WorkPlanUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type WorkPlanScalarWhereInput = {
    AND?: WorkPlanScalarWhereInput | WorkPlanScalarWhereInput[]
    OR?: WorkPlanScalarWhereInput[]
    NOT?: WorkPlanScalarWhereInput | WorkPlanScalarWhereInput[]
    id?: IntFilter<"WorkPlan"> | number
    assignmentId?: IntFilter<"WorkPlan"> | number
    contenido?: JsonFilter<"WorkPlan">
    status?: Enumplan_statusFilter<"WorkPlan"> | $Enums.plan_status
    approvedBy?: StringNullableFilter<"WorkPlan"> | string | null
    approvedAt?: DateTimeNullableFilter<"WorkPlan"> | Date | string | null
    createdAt?: DateTimeFilter<"WorkPlan"> | Date | string
    updatedAt?: DateTimeFilter<"WorkPlan"> | Date | string
  }

  export type DocumentUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutAssignmentInput, DocumentUncheckedUpdateWithoutAssignmentInput>
    create: XOR<DocumentCreateWithoutAssignmentInput, DocumentUncheckedCreateWithoutAssignmentInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutAssignmentInput, DocumentUncheckedUpdateWithoutAssignmentInput>
  }

  export type DocumentUpdateManyWithWhereWithoutAssignmentInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type ReportUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutAssignmentInput, ReportUncheckedUpdateWithoutAssignmentInput>
    create: XOR<ReportCreateWithoutAssignmentInput, ReportUncheckedCreateWithoutAssignmentInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutAssignmentInput, ReportUncheckedUpdateWithoutAssignmentInput>
  }

  export type ReportUpdateManyWithWhereWithoutAssignmentInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type HoursLogUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: HoursLogWhereUniqueInput
    update: XOR<HoursLogUpdateWithoutAssignmentInput, HoursLogUncheckedUpdateWithoutAssignmentInput>
    create: XOR<HoursLogCreateWithoutAssignmentInput, HoursLogUncheckedCreateWithoutAssignmentInput>
  }

  export type HoursLogUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: HoursLogWhereUniqueInput
    data: XOR<HoursLogUpdateWithoutAssignmentInput, HoursLogUncheckedUpdateWithoutAssignmentInput>
  }

  export type HoursLogUpdateManyWithWhereWithoutAssignmentInput = {
    where: HoursLogScalarWhereInput
    data: XOR<HoursLogUpdateManyMutationInput, HoursLogUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type HoursLogScalarWhereInput = {
    AND?: HoursLogScalarWhereInput | HoursLogScalarWhereInput[]
    OR?: HoursLogScalarWhereInput[]
    NOT?: HoursLogScalarWhereInput | HoursLogScalarWhereInput[]
    id?: IntFilter<"HoursLog"> | number
    assignmentId?: IntFilter<"HoursLog"> | number
    dateWorked?: DateTimeFilter<"HoursLog"> | Date | string
    horas?: IntFilter<"HoursLog"> | number
    description?: StringNullableFilter<"HoursLog"> | string | null
    validated?: BoolFilter<"HoursLog"> | boolean
  }

  export type IncidentUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutAssignmentInput, IncidentUncheckedUpdateWithoutAssignmentInput>
    create: XOR<IncidentCreateWithoutAssignmentInput, IncidentUncheckedCreateWithoutAssignmentInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutAssignmentInput, IncidentUncheckedUpdateWithoutAssignmentInput>
  }

  export type IncidentUpdateManyWithWhereWithoutAssignmentInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutAssignmentInput, TaskUncheckedUpdateWithoutAssignmentInput>
    create: XOR<TaskCreateWithoutAssignmentInput, TaskUncheckedCreateWithoutAssignmentInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutAssignmentInput, TaskUncheckedUpdateWithoutAssignmentInput>
  }

  export type TaskUpdateManyWithWhereWithoutAssignmentInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type ServiceAssignmentCreateWithoutWorkPlansInput = {
    startDate?: Date | string | null
    plannedEndDate?: Date | string | null
    endDate?: Date | string | null
    totalHoursRequired?: number
    hoursCompleted?: number
    estado?: $Enums.service_status
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutAssignmentsInput
    institution: InstitutionCreateNestedOneWithoutAssignmentsInput
    documents?: DocumentCreateNestedManyWithoutAssignmentInput
    reports?: ReportCreateNestedManyWithoutAssignmentInput
    hoursLogs?: HoursLogCreateNestedManyWithoutAssignmentInput
    incidents?: IncidentCreateNestedManyWithoutAssignmentInput
    tasks?: TaskCreateNestedManyWithoutAssignmentInput
  }

  export type ServiceAssignmentUncheckedCreateWithoutWorkPlansInput = {
    id?: number
    studentId: string
    institutionId: number
    startDate?: Date | string | null
    plannedEndDate?: Date | string | null
    endDate?: Date | string | null
    totalHoursRequired?: number
    hoursCompleted?: number
    estado?: $Enums.service_status
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutAssignmentInput
    reports?: ReportUncheckedCreateNestedManyWithoutAssignmentInput
    hoursLogs?: HoursLogUncheckedCreateNestedManyWithoutAssignmentInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutAssignmentInput
    tasks?: TaskUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type ServiceAssignmentCreateOrConnectWithoutWorkPlansInput = {
    where: ServiceAssignmentWhereUniqueInput
    create: XOR<ServiceAssignmentCreateWithoutWorkPlansInput, ServiceAssignmentUncheckedCreateWithoutWorkPlansInput>
  }

  export type ServiceAssignmentUpsertWithoutWorkPlansInput = {
    update: XOR<ServiceAssignmentUpdateWithoutWorkPlansInput, ServiceAssignmentUncheckedUpdateWithoutWorkPlansInput>
    create: XOR<ServiceAssignmentCreateWithoutWorkPlansInput, ServiceAssignmentUncheckedCreateWithoutWorkPlansInput>
    where?: ServiceAssignmentWhereInput
  }

  export type ServiceAssignmentUpdateToOneWithWhereWithoutWorkPlansInput = {
    where?: ServiceAssignmentWhereInput
    data: XOR<ServiceAssignmentUpdateWithoutWorkPlansInput, ServiceAssignmentUncheckedUpdateWithoutWorkPlansInput>
  }

  export type ServiceAssignmentUpdateWithoutWorkPlansInput = {
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plannedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursRequired?: IntFieldUpdateOperationsInput | number
    hoursCompleted?: IntFieldUpdateOperationsInput | number
    estado?: Enumservice_statusFieldUpdateOperationsInput | $Enums.service_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutAssignmentsNestedInput
    institution?: InstitutionUpdateOneRequiredWithoutAssignmentsNestedInput
    documents?: DocumentUpdateManyWithoutAssignmentNestedInput
    reports?: ReportUpdateManyWithoutAssignmentNestedInput
    hoursLogs?: HoursLogUpdateManyWithoutAssignmentNestedInput
    incidents?: IncidentUpdateManyWithoutAssignmentNestedInput
    tasks?: TaskUpdateManyWithoutAssignmentNestedInput
  }

  export type ServiceAssignmentUncheckedUpdateWithoutWorkPlansInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    institutionId?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plannedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursRequired?: IntFieldUpdateOperationsInput | number
    hoursCompleted?: IntFieldUpdateOperationsInput | number
    estado?: Enumservice_statusFieldUpdateOperationsInput | $Enums.service_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutAssignmentNestedInput
    reports?: ReportUncheckedUpdateManyWithoutAssignmentNestedInput
    hoursLogs?: HoursLogUncheckedUpdateManyWithoutAssignmentNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutAssignmentNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type ServiceAssignmentCreateWithoutDocumentsInput = {
    startDate?: Date | string | null
    plannedEndDate?: Date | string | null
    endDate?: Date | string | null
    totalHoursRequired?: number
    hoursCompleted?: number
    estado?: $Enums.service_status
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutAssignmentsInput
    institution: InstitutionCreateNestedOneWithoutAssignmentsInput
    workPlans?: WorkPlanCreateNestedManyWithoutAssignmentInput
    reports?: ReportCreateNestedManyWithoutAssignmentInput
    hoursLogs?: HoursLogCreateNestedManyWithoutAssignmentInput
    incidents?: IncidentCreateNestedManyWithoutAssignmentInput
    tasks?: TaskCreateNestedManyWithoutAssignmentInput
  }

  export type ServiceAssignmentUncheckedCreateWithoutDocumentsInput = {
    id?: number
    studentId: string
    institutionId: number
    startDate?: Date | string | null
    plannedEndDate?: Date | string | null
    endDate?: Date | string | null
    totalHoursRequired?: number
    hoursCompleted?: number
    estado?: $Enums.service_status
    createdAt?: Date | string
    updatedAt?: Date | string
    workPlans?: WorkPlanUncheckedCreateNestedManyWithoutAssignmentInput
    reports?: ReportUncheckedCreateNestedManyWithoutAssignmentInput
    hoursLogs?: HoursLogUncheckedCreateNestedManyWithoutAssignmentInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutAssignmentInput
    tasks?: TaskUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type ServiceAssignmentCreateOrConnectWithoutDocumentsInput = {
    where: ServiceAssignmentWhereUniqueInput
    create: XOR<ServiceAssignmentCreateWithoutDocumentsInput, ServiceAssignmentUncheckedCreateWithoutDocumentsInput>
  }

  export type UserCreateWithoutDocumentsInput = {
    id: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutUserInput
    institutions?: InstitutionCreateNestedManyWithoutUserInput
    incidentsReported?: IncidentCreateNestedManyWithoutReporterInput
    incidentsResolved?: IncidentCreateNestedManyWithoutResolverInput
    reportsValid?: ReportCreateNestedManyWithoutValidatorInput
    tasksReviewed?: TaskCreateNestedManyWithoutReviewerInput
    IncidentMessage?: IncidentMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutDocumentsInput = {
    id: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    institutions?: InstitutionUncheckedCreateNestedManyWithoutUserInput
    incidentsReported?: IncidentUncheckedCreateNestedManyWithoutReporterInput
    incidentsResolved?: IncidentUncheckedCreateNestedManyWithoutResolverInput
    reportsValid?: ReportUncheckedCreateNestedManyWithoutValidatorInput
    tasksReviewed?: TaskUncheckedCreateNestedManyWithoutReviewerInput
    IncidentMessage?: IncidentMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutDocumentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
  }

  export type ServiceAssignmentUpsertWithoutDocumentsInput = {
    update: XOR<ServiceAssignmentUpdateWithoutDocumentsInput, ServiceAssignmentUncheckedUpdateWithoutDocumentsInput>
    create: XOR<ServiceAssignmentCreateWithoutDocumentsInput, ServiceAssignmentUncheckedCreateWithoutDocumentsInput>
    where?: ServiceAssignmentWhereInput
  }

  export type ServiceAssignmentUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: ServiceAssignmentWhereInput
    data: XOR<ServiceAssignmentUpdateWithoutDocumentsInput, ServiceAssignmentUncheckedUpdateWithoutDocumentsInput>
  }

  export type ServiceAssignmentUpdateWithoutDocumentsInput = {
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plannedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursRequired?: IntFieldUpdateOperationsInput | number
    hoursCompleted?: IntFieldUpdateOperationsInput | number
    estado?: Enumservice_statusFieldUpdateOperationsInput | $Enums.service_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutAssignmentsNestedInput
    institution?: InstitutionUpdateOneRequiredWithoutAssignmentsNestedInput
    workPlans?: WorkPlanUpdateManyWithoutAssignmentNestedInput
    reports?: ReportUpdateManyWithoutAssignmentNestedInput
    hoursLogs?: HoursLogUpdateManyWithoutAssignmentNestedInput
    incidents?: IncidentUpdateManyWithoutAssignmentNestedInput
    tasks?: TaskUpdateManyWithoutAssignmentNestedInput
  }

  export type ServiceAssignmentUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    institutionId?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plannedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursRequired?: IntFieldUpdateOperationsInput | number
    hoursCompleted?: IntFieldUpdateOperationsInput | number
    estado?: Enumservice_statusFieldUpdateOperationsInput | $Enums.service_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workPlans?: WorkPlanUncheckedUpdateManyWithoutAssignmentNestedInput
    reports?: ReportUncheckedUpdateManyWithoutAssignmentNestedInput
    hoursLogs?: HoursLogUncheckedUpdateManyWithoutAssignmentNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutAssignmentNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type UserUpsertWithoutDocumentsInput = {
    update: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
  }

  export type UserUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutUserNestedInput
    institutions?: InstitutionUpdateManyWithoutUserNestedInput
    incidentsReported?: IncidentUpdateManyWithoutReporterNestedInput
    incidentsResolved?: IncidentUpdateManyWithoutResolverNestedInput
    reportsValid?: ReportUpdateManyWithoutValidatorNestedInput
    tasksReviewed?: TaskUpdateManyWithoutReviewerNestedInput
    IncidentMessage?: IncidentMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    institutions?: InstitutionUncheckedUpdateManyWithoutUserNestedInput
    incidentsReported?: IncidentUncheckedUpdateManyWithoutReporterNestedInput
    incidentsResolved?: IncidentUncheckedUpdateManyWithoutResolverNestedInput
    reportsValid?: ReportUncheckedUpdateManyWithoutValidatorNestedInput
    tasksReviewed?: TaskUncheckedUpdateManyWithoutReviewerNestedInput
    IncidentMessage?: IncidentMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type ServiceAssignmentCreateWithoutReportsInput = {
    startDate?: Date | string | null
    plannedEndDate?: Date | string | null
    endDate?: Date | string | null
    totalHoursRequired?: number
    hoursCompleted?: number
    estado?: $Enums.service_status
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutAssignmentsInput
    institution: InstitutionCreateNestedOneWithoutAssignmentsInput
    workPlans?: WorkPlanCreateNestedManyWithoutAssignmentInput
    documents?: DocumentCreateNestedManyWithoutAssignmentInput
    hoursLogs?: HoursLogCreateNestedManyWithoutAssignmentInput
    incidents?: IncidentCreateNestedManyWithoutAssignmentInput
    tasks?: TaskCreateNestedManyWithoutAssignmentInput
  }

  export type ServiceAssignmentUncheckedCreateWithoutReportsInput = {
    id?: number
    studentId: string
    institutionId: number
    startDate?: Date | string | null
    plannedEndDate?: Date | string | null
    endDate?: Date | string | null
    totalHoursRequired?: number
    hoursCompleted?: number
    estado?: $Enums.service_status
    createdAt?: Date | string
    updatedAt?: Date | string
    workPlans?: WorkPlanUncheckedCreateNestedManyWithoutAssignmentInput
    documents?: DocumentUncheckedCreateNestedManyWithoutAssignmentInput
    hoursLogs?: HoursLogUncheckedCreateNestedManyWithoutAssignmentInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutAssignmentInput
    tasks?: TaskUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type ServiceAssignmentCreateOrConnectWithoutReportsInput = {
    where: ServiceAssignmentWhereUniqueInput
    create: XOR<ServiceAssignmentCreateWithoutReportsInput, ServiceAssignmentUncheckedCreateWithoutReportsInput>
  }

  export type UserCreateWithoutReportsValidInput = {
    id: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutUserInput
    institutions?: InstitutionCreateNestedManyWithoutUserInput
    incidentsReported?: IncidentCreateNestedManyWithoutReporterInput
    incidentsResolved?: IncidentCreateNestedManyWithoutResolverInput
    documents?: DocumentCreateNestedManyWithoutSignedUserInput
    tasksReviewed?: TaskCreateNestedManyWithoutReviewerInput
    IncidentMessage?: IncidentMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutReportsValidInput = {
    id: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    institutions?: InstitutionUncheckedCreateNestedManyWithoutUserInput
    incidentsReported?: IncidentUncheckedCreateNestedManyWithoutReporterInput
    incidentsResolved?: IncidentUncheckedCreateNestedManyWithoutResolverInput
    documents?: DocumentUncheckedCreateNestedManyWithoutSignedUserInput
    tasksReviewed?: TaskUncheckedCreateNestedManyWithoutReviewerInput
    IncidentMessage?: IncidentMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutReportsValidInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportsValidInput, UserUncheckedCreateWithoutReportsValidInput>
  }

  export type ServiceAssignmentUpsertWithoutReportsInput = {
    update: XOR<ServiceAssignmentUpdateWithoutReportsInput, ServiceAssignmentUncheckedUpdateWithoutReportsInput>
    create: XOR<ServiceAssignmentCreateWithoutReportsInput, ServiceAssignmentUncheckedCreateWithoutReportsInput>
    where?: ServiceAssignmentWhereInput
  }

  export type ServiceAssignmentUpdateToOneWithWhereWithoutReportsInput = {
    where?: ServiceAssignmentWhereInput
    data: XOR<ServiceAssignmentUpdateWithoutReportsInput, ServiceAssignmentUncheckedUpdateWithoutReportsInput>
  }

  export type ServiceAssignmentUpdateWithoutReportsInput = {
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plannedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursRequired?: IntFieldUpdateOperationsInput | number
    hoursCompleted?: IntFieldUpdateOperationsInput | number
    estado?: Enumservice_statusFieldUpdateOperationsInput | $Enums.service_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutAssignmentsNestedInput
    institution?: InstitutionUpdateOneRequiredWithoutAssignmentsNestedInput
    workPlans?: WorkPlanUpdateManyWithoutAssignmentNestedInput
    documents?: DocumentUpdateManyWithoutAssignmentNestedInput
    hoursLogs?: HoursLogUpdateManyWithoutAssignmentNestedInput
    incidents?: IncidentUpdateManyWithoutAssignmentNestedInput
    tasks?: TaskUpdateManyWithoutAssignmentNestedInput
  }

  export type ServiceAssignmentUncheckedUpdateWithoutReportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    institutionId?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plannedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursRequired?: IntFieldUpdateOperationsInput | number
    hoursCompleted?: IntFieldUpdateOperationsInput | number
    estado?: Enumservice_statusFieldUpdateOperationsInput | $Enums.service_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workPlans?: WorkPlanUncheckedUpdateManyWithoutAssignmentNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutAssignmentNestedInput
    hoursLogs?: HoursLogUncheckedUpdateManyWithoutAssignmentNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutAssignmentNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type UserUpsertWithoutReportsValidInput = {
    update: XOR<UserUpdateWithoutReportsValidInput, UserUncheckedUpdateWithoutReportsValidInput>
    create: XOR<UserCreateWithoutReportsValidInput, UserUncheckedCreateWithoutReportsValidInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReportsValidInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReportsValidInput, UserUncheckedUpdateWithoutReportsValidInput>
  }

  export type UserUpdateWithoutReportsValidInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutUserNestedInput
    institutions?: InstitutionUpdateManyWithoutUserNestedInput
    incidentsReported?: IncidentUpdateManyWithoutReporterNestedInput
    incidentsResolved?: IncidentUpdateManyWithoutResolverNestedInput
    documents?: DocumentUpdateManyWithoutSignedUserNestedInput
    tasksReviewed?: TaskUpdateManyWithoutReviewerNestedInput
    IncidentMessage?: IncidentMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutReportsValidInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    institutions?: InstitutionUncheckedUpdateManyWithoutUserNestedInput
    incidentsReported?: IncidentUncheckedUpdateManyWithoutReporterNestedInput
    incidentsResolved?: IncidentUncheckedUpdateManyWithoutResolverNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutSignedUserNestedInput
    tasksReviewed?: TaskUncheckedUpdateManyWithoutReviewerNestedInput
    IncidentMessage?: IncidentMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type ServiceAssignmentCreateWithoutHoursLogsInput = {
    startDate?: Date | string | null
    plannedEndDate?: Date | string | null
    endDate?: Date | string | null
    totalHoursRequired?: number
    hoursCompleted?: number
    estado?: $Enums.service_status
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutAssignmentsInput
    institution: InstitutionCreateNestedOneWithoutAssignmentsInput
    workPlans?: WorkPlanCreateNestedManyWithoutAssignmentInput
    documents?: DocumentCreateNestedManyWithoutAssignmentInput
    reports?: ReportCreateNestedManyWithoutAssignmentInput
    incidents?: IncidentCreateNestedManyWithoutAssignmentInput
    tasks?: TaskCreateNestedManyWithoutAssignmentInput
  }

  export type ServiceAssignmentUncheckedCreateWithoutHoursLogsInput = {
    id?: number
    studentId: string
    institutionId: number
    startDate?: Date | string | null
    plannedEndDate?: Date | string | null
    endDate?: Date | string | null
    totalHoursRequired?: number
    hoursCompleted?: number
    estado?: $Enums.service_status
    createdAt?: Date | string
    updatedAt?: Date | string
    workPlans?: WorkPlanUncheckedCreateNestedManyWithoutAssignmentInput
    documents?: DocumentUncheckedCreateNestedManyWithoutAssignmentInput
    reports?: ReportUncheckedCreateNestedManyWithoutAssignmentInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutAssignmentInput
    tasks?: TaskUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type ServiceAssignmentCreateOrConnectWithoutHoursLogsInput = {
    where: ServiceAssignmentWhereUniqueInput
    create: XOR<ServiceAssignmentCreateWithoutHoursLogsInput, ServiceAssignmentUncheckedCreateWithoutHoursLogsInput>
  }

  export type ServiceAssignmentUpsertWithoutHoursLogsInput = {
    update: XOR<ServiceAssignmentUpdateWithoutHoursLogsInput, ServiceAssignmentUncheckedUpdateWithoutHoursLogsInput>
    create: XOR<ServiceAssignmentCreateWithoutHoursLogsInput, ServiceAssignmentUncheckedCreateWithoutHoursLogsInput>
    where?: ServiceAssignmentWhereInput
  }

  export type ServiceAssignmentUpdateToOneWithWhereWithoutHoursLogsInput = {
    where?: ServiceAssignmentWhereInput
    data: XOR<ServiceAssignmentUpdateWithoutHoursLogsInput, ServiceAssignmentUncheckedUpdateWithoutHoursLogsInput>
  }

  export type ServiceAssignmentUpdateWithoutHoursLogsInput = {
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plannedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursRequired?: IntFieldUpdateOperationsInput | number
    hoursCompleted?: IntFieldUpdateOperationsInput | number
    estado?: Enumservice_statusFieldUpdateOperationsInput | $Enums.service_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutAssignmentsNestedInput
    institution?: InstitutionUpdateOneRequiredWithoutAssignmentsNestedInput
    workPlans?: WorkPlanUpdateManyWithoutAssignmentNestedInput
    documents?: DocumentUpdateManyWithoutAssignmentNestedInput
    reports?: ReportUpdateManyWithoutAssignmentNestedInput
    incidents?: IncidentUpdateManyWithoutAssignmentNestedInput
    tasks?: TaskUpdateManyWithoutAssignmentNestedInput
  }

  export type ServiceAssignmentUncheckedUpdateWithoutHoursLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    institutionId?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plannedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursRequired?: IntFieldUpdateOperationsInput | number
    hoursCompleted?: IntFieldUpdateOperationsInput | number
    estado?: Enumservice_statusFieldUpdateOperationsInput | $Enums.service_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workPlans?: WorkPlanUncheckedUpdateManyWithoutAssignmentNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutAssignmentNestedInput
    reports?: ReportUncheckedUpdateManyWithoutAssignmentNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutAssignmentNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type ServiceAssignmentCreateWithoutIncidentsInput = {
    startDate?: Date | string | null
    plannedEndDate?: Date | string | null
    endDate?: Date | string | null
    totalHoursRequired?: number
    hoursCompleted?: number
    estado?: $Enums.service_status
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutAssignmentsInput
    institution: InstitutionCreateNestedOneWithoutAssignmentsInput
    workPlans?: WorkPlanCreateNestedManyWithoutAssignmentInput
    documents?: DocumentCreateNestedManyWithoutAssignmentInput
    reports?: ReportCreateNestedManyWithoutAssignmentInput
    hoursLogs?: HoursLogCreateNestedManyWithoutAssignmentInput
    tasks?: TaskCreateNestedManyWithoutAssignmentInput
  }

  export type ServiceAssignmentUncheckedCreateWithoutIncidentsInput = {
    id?: number
    studentId: string
    institutionId: number
    startDate?: Date | string | null
    plannedEndDate?: Date | string | null
    endDate?: Date | string | null
    totalHoursRequired?: number
    hoursCompleted?: number
    estado?: $Enums.service_status
    createdAt?: Date | string
    updatedAt?: Date | string
    workPlans?: WorkPlanUncheckedCreateNestedManyWithoutAssignmentInput
    documents?: DocumentUncheckedCreateNestedManyWithoutAssignmentInput
    reports?: ReportUncheckedCreateNestedManyWithoutAssignmentInput
    hoursLogs?: HoursLogUncheckedCreateNestedManyWithoutAssignmentInput
    tasks?: TaskUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type ServiceAssignmentCreateOrConnectWithoutIncidentsInput = {
    where: ServiceAssignmentWhereUniqueInput
    create: XOR<ServiceAssignmentCreateWithoutIncidentsInput, ServiceAssignmentUncheckedCreateWithoutIncidentsInput>
  }

  export type UserCreateWithoutIncidentsReportedInput = {
    id: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutUserInput
    institutions?: InstitutionCreateNestedManyWithoutUserInput
    incidentsResolved?: IncidentCreateNestedManyWithoutResolverInput
    documents?: DocumentCreateNestedManyWithoutSignedUserInput
    reportsValid?: ReportCreateNestedManyWithoutValidatorInput
    tasksReviewed?: TaskCreateNestedManyWithoutReviewerInput
    IncidentMessage?: IncidentMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutIncidentsReportedInput = {
    id: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    institutions?: InstitutionUncheckedCreateNestedManyWithoutUserInput
    incidentsResolved?: IncidentUncheckedCreateNestedManyWithoutResolverInput
    documents?: DocumentUncheckedCreateNestedManyWithoutSignedUserInput
    reportsValid?: ReportUncheckedCreateNestedManyWithoutValidatorInput
    tasksReviewed?: TaskUncheckedCreateNestedManyWithoutReviewerInput
    IncidentMessage?: IncidentMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutIncidentsReportedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIncidentsReportedInput, UserUncheckedCreateWithoutIncidentsReportedInput>
  }

  export type UserCreateWithoutIncidentsResolvedInput = {
    id: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutUserInput
    institutions?: InstitutionCreateNestedManyWithoutUserInput
    incidentsReported?: IncidentCreateNestedManyWithoutReporterInput
    documents?: DocumentCreateNestedManyWithoutSignedUserInput
    reportsValid?: ReportCreateNestedManyWithoutValidatorInput
    tasksReviewed?: TaskCreateNestedManyWithoutReviewerInput
    IncidentMessage?: IncidentMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutIncidentsResolvedInput = {
    id: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    institutions?: InstitutionUncheckedCreateNestedManyWithoutUserInput
    incidentsReported?: IncidentUncheckedCreateNestedManyWithoutReporterInput
    documents?: DocumentUncheckedCreateNestedManyWithoutSignedUserInput
    reportsValid?: ReportUncheckedCreateNestedManyWithoutValidatorInput
    tasksReviewed?: TaskUncheckedCreateNestedManyWithoutReviewerInput
    IncidentMessage?: IncidentMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutIncidentsResolvedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIncidentsResolvedInput, UserUncheckedCreateWithoutIncidentsResolvedInput>
  }

  export type IncidentMessageCreateWithoutIncidentInput = {
    message: string
    sentAt?: Date | string
    sender: UserCreateNestedOneWithoutIncidentMessageInput
  }

  export type IncidentMessageUncheckedCreateWithoutIncidentInput = {
    id?: number
    senderId: string
    message: string
    sentAt?: Date | string
  }

  export type IncidentMessageCreateOrConnectWithoutIncidentInput = {
    where: IncidentMessageWhereUniqueInput
    create: XOR<IncidentMessageCreateWithoutIncidentInput, IncidentMessageUncheckedCreateWithoutIncidentInput>
  }

  export type IncidentMessageCreateManyIncidentInputEnvelope = {
    data: IncidentMessageCreateManyIncidentInput | IncidentMessageCreateManyIncidentInput[]
    skipDuplicates?: boolean
  }

  export type ServiceAssignmentUpsertWithoutIncidentsInput = {
    update: XOR<ServiceAssignmentUpdateWithoutIncidentsInput, ServiceAssignmentUncheckedUpdateWithoutIncidentsInput>
    create: XOR<ServiceAssignmentCreateWithoutIncidentsInput, ServiceAssignmentUncheckedCreateWithoutIncidentsInput>
    where?: ServiceAssignmentWhereInput
  }

  export type ServiceAssignmentUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: ServiceAssignmentWhereInput
    data: XOR<ServiceAssignmentUpdateWithoutIncidentsInput, ServiceAssignmentUncheckedUpdateWithoutIncidentsInput>
  }

  export type ServiceAssignmentUpdateWithoutIncidentsInput = {
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plannedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursRequired?: IntFieldUpdateOperationsInput | number
    hoursCompleted?: IntFieldUpdateOperationsInput | number
    estado?: Enumservice_statusFieldUpdateOperationsInput | $Enums.service_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutAssignmentsNestedInput
    institution?: InstitutionUpdateOneRequiredWithoutAssignmentsNestedInput
    workPlans?: WorkPlanUpdateManyWithoutAssignmentNestedInput
    documents?: DocumentUpdateManyWithoutAssignmentNestedInput
    reports?: ReportUpdateManyWithoutAssignmentNestedInput
    hoursLogs?: HoursLogUpdateManyWithoutAssignmentNestedInput
    tasks?: TaskUpdateManyWithoutAssignmentNestedInput
  }

  export type ServiceAssignmentUncheckedUpdateWithoutIncidentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    institutionId?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plannedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursRequired?: IntFieldUpdateOperationsInput | number
    hoursCompleted?: IntFieldUpdateOperationsInput | number
    estado?: Enumservice_statusFieldUpdateOperationsInput | $Enums.service_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workPlans?: WorkPlanUncheckedUpdateManyWithoutAssignmentNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutAssignmentNestedInput
    reports?: ReportUncheckedUpdateManyWithoutAssignmentNestedInput
    hoursLogs?: HoursLogUncheckedUpdateManyWithoutAssignmentNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type UserUpsertWithoutIncidentsReportedInput = {
    update: XOR<UserUpdateWithoutIncidentsReportedInput, UserUncheckedUpdateWithoutIncidentsReportedInput>
    create: XOR<UserCreateWithoutIncidentsReportedInput, UserUncheckedCreateWithoutIncidentsReportedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIncidentsReportedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIncidentsReportedInput, UserUncheckedUpdateWithoutIncidentsReportedInput>
  }

  export type UserUpdateWithoutIncidentsReportedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutUserNestedInput
    institutions?: InstitutionUpdateManyWithoutUserNestedInput
    incidentsResolved?: IncidentUpdateManyWithoutResolverNestedInput
    documents?: DocumentUpdateManyWithoutSignedUserNestedInput
    reportsValid?: ReportUpdateManyWithoutValidatorNestedInput
    tasksReviewed?: TaskUpdateManyWithoutReviewerNestedInput
    IncidentMessage?: IncidentMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutIncidentsReportedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    institutions?: InstitutionUncheckedUpdateManyWithoutUserNestedInput
    incidentsResolved?: IncidentUncheckedUpdateManyWithoutResolverNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutSignedUserNestedInput
    reportsValid?: ReportUncheckedUpdateManyWithoutValidatorNestedInput
    tasksReviewed?: TaskUncheckedUpdateManyWithoutReviewerNestedInput
    IncidentMessage?: IncidentMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserUpsertWithoutIncidentsResolvedInput = {
    update: XOR<UserUpdateWithoutIncidentsResolvedInput, UserUncheckedUpdateWithoutIncidentsResolvedInput>
    create: XOR<UserCreateWithoutIncidentsResolvedInput, UserUncheckedCreateWithoutIncidentsResolvedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIncidentsResolvedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIncidentsResolvedInput, UserUncheckedUpdateWithoutIncidentsResolvedInput>
  }

  export type UserUpdateWithoutIncidentsResolvedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutUserNestedInput
    institutions?: InstitutionUpdateManyWithoutUserNestedInput
    incidentsReported?: IncidentUpdateManyWithoutReporterNestedInput
    documents?: DocumentUpdateManyWithoutSignedUserNestedInput
    reportsValid?: ReportUpdateManyWithoutValidatorNestedInput
    tasksReviewed?: TaskUpdateManyWithoutReviewerNestedInput
    IncidentMessage?: IncidentMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutIncidentsResolvedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    institutions?: InstitutionUncheckedUpdateManyWithoutUserNestedInput
    incidentsReported?: IncidentUncheckedUpdateManyWithoutReporterNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutSignedUserNestedInput
    reportsValid?: ReportUncheckedUpdateManyWithoutValidatorNestedInput
    tasksReviewed?: TaskUncheckedUpdateManyWithoutReviewerNestedInput
    IncidentMessage?: IncidentMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type IncidentMessageUpsertWithWhereUniqueWithoutIncidentInput = {
    where: IncidentMessageWhereUniqueInput
    update: XOR<IncidentMessageUpdateWithoutIncidentInput, IncidentMessageUncheckedUpdateWithoutIncidentInput>
    create: XOR<IncidentMessageCreateWithoutIncidentInput, IncidentMessageUncheckedCreateWithoutIncidentInput>
  }

  export type IncidentMessageUpdateWithWhereUniqueWithoutIncidentInput = {
    where: IncidentMessageWhereUniqueInput
    data: XOR<IncidentMessageUpdateWithoutIncidentInput, IncidentMessageUncheckedUpdateWithoutIncidentInput>
  }

  export type IncidentMessageUpdateManyWithWhereWithoutIncidentInput = {
    where: IncidentMessageScalarWhereInput
    data: XOR<IncidentMessageUpdateManyMutationInput, IncidentMessageUncheckedUpdateManyWithoutIncidentInput>
  }

  export type IncidentCreateWithoutMessagesInput = {
    reportedAt?: Date | string
    tipo: string
    descripcion: string
    estado?: $Enums.incident_status
    resolvedAt?: Date | string | null
    resolutionNotes?: string | null
    assignment?: ServiceAssignmentCreateNestedOneWithoutIncidentsInput
    reporter: UserCreateNestedOneWithoutIncidentsReportedInput
    resolver?: UserCreateNestedOneWithoutIncidentsResolvedInput
  }

  export type IncidentUncheckedCreateWithoutMessagesInput = {
    id?: number
    assignmentId?: number | null
    reportedBy: string
    reportedAt?: Date | string
    tipo: string
    descripcion: string
    estado?: $Enums.incident_status
    resolvedBy?: string | null
    resolvedAt?: Date | string | null
    resolutionNotes?: string | null
  }

  export type IncidentCreateOrConnectWithoutMessagesInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutMessagesInput, IncidentUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutIncidentMessageInput = {
    id: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutUserInput
    institutions?: InstitutionCreateNestedManyWithoutUserInput
    incidentsReported?: IncidentCreateNestedManyWithoutReporterInput
    incidentsResolved?: IncidentCreateNestedManyWithoutResolverInput
    documents?: DocumentCreateNestedManyWithoutSignedUserInput
    reportsValid?: ReportCreateNestedManyWithoutValidatorInput
    tasksReviewed?: TaskCreateNestedManyWithoutReviewerInput
  }

  export type UserUncheckedCreateWithoutIncidentMessageInput = {
    id: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    institutions?: InstitutionUncheckedCreateNestedManyWithoutUserInput
    incidentsReported?: IncidentUncheckedCreateNestedManyWithoutReporterInput
    incidentsResolved?: IncidentUncheckedCreateNestedManyWithoutResolverInput
    documents?: DocumentUncheckedCreateNestedManyWithoutSignedUserInput
    reportsValid?: ReportUncheckedCreateNestedManyWithoutValidatorInput
    tasksReviewed?: TaskUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserCreateOrConnectWithoutIncidentMessageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIncidentMessageInput, UserUncheckedCreateWithoutIncidentMessageInput>
  }

  export type IncidentUpsertWithoutMessagesInput = {
    update: XOR<IncidentUpdateWithoutMessagesInput, IncidentUncheckedUpdateWithoutMessagesInput>
    create: XOR<IncidentCreateWithoutMessagesInput, IncidentUncheckedCreateWithoutMessagesInput>
    where?: IncidentWhereInput
  }

  export type IncidentUpdateToOneWithWhereWithoutMessagesInput = {
    where?: IncidentWhereInput
    data: XOR<IncidentUpdateWithoutMessagesInput, IncidentUncheckedUpdateWithoutMessagesInput>
  }

  export type IncidentUpdateWithoutMessagesInput = {
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    estado?: Enumincident_statusFieldUpdateOperationsInput | $Enums.incident_status
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
    assignment?: ServiceAssignmentUpdateOneWithoutIncidentsNestedInput
    reporter?: UserUpdateOneRequiredWithoutIncidentsReportedNestedInput
    resolver?: UserUpdateOneWithoutIncidentsResolvedNestedInput
  }

  export type IncidentUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: NullableIntFieldUpdateOperationsInput | number | null
    reportedBy?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    estado?: Enumincident_statusFieldUpdateOperationsInput | $Enums.incident_status
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutIncidentMessageInput = {
    update: XOR<UserUpdateWithoutIncidentMessageInput, UserUncheckedUpdateWithoutIncidentMessageInput>
    create: XOR<UserCreateWithoutIncidentMessageInput, UserUncheckedCreateWithoutIncidentMessageInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIncidentMessageInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIncidentMessageInput, UserUncheckedUpdateWithoutIncidentMessageInput>
  }

  export type UserUpdateWithoutIncidentMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutUserNestedInput
    institutions?: InstitutionUpdateManyWithoutUserNestedInput
    incidentsReported?: IncidentUpdateManyWithoutReporterNestedInput
    incidentsResolved?: IncidentUpdateManyWithoutResolverNestedInput
    documents?: DocumentUpdateManyWithoutSignedUserNestedInput
    reportsValid?: ReportUpdateManyWithoutValidatorNestedInput
    tasksReviewed?: TaskUpdateManyWithoutReviewerNestedInput
  }

  export type UserUncheckedUpdateWithoutIncidentMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    institutions?: InstitutionUncheckedUpdateManyWithoutUserNestedInput
    incidentsReported?: IncidentUncheckedUpdateManyWithoutReporterNestedInput
    incidentsResolved?: IncidentUncheckedUpdateManyWithoutResolverNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutSignedUserNestedInput
    reportsValid?: ReportUncheckedUpdateManyWithoutValidatorNestedInput
    tasksReviewed?: TaskUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type ServiceAssignmentCreateWithoutTasksInput = {
    startDate?: Date | string | null
    plannedEndDate?: Date | string | null
    endDate?: Date | string | null
    totalHoursRequired?: number
    hoursCompleted?: number
    estado?: $Enums.service_status
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutAssignmentsInput
    institution: InstitutionCreateNestedOneWithoutAssignmentsInput
    workPlans?: WorkPlanCreateNestedManyWithoutAssignmentInput
    documents?: DocumentCreateNestedManyWithoutAssignmentInput
    reports?: ReportCreateNestedManyWithoutAssignmentInput
    hoursLogs?: HoursLogCreateNestedManyWithoutAssignmentInput
    incidents?: IncidentCreateNestedManyWithoutAssignmentInput
  }

  export type ServiceAssignmentUncheckedCreateWithoutTasksInput = {
    id?: number
    studentId: string
    institutionId: number
    startDate?: Date | string | null
    plannedEndDate?: Date | string | null
    endDate?: Date | string | null
    totalHoursRequired?: number
    hoursCompleted?: number
    estado?: $Enums.service_status
    createdAt?: Date | string
    updatedAt?: Date | string
    workPlans?: WorkPlanUncheckedCreateNestedManyWithoutAssignmentInput
    documents?: DocumentUncheckedCreateNestedManyWithoutAssignmentInput
    reports?: ReportUncheckedCreateNestedManyWithoutAssignmentInput
    hoursLogs?: HoursLogUncheckedCreateNestedManyWithoutAssignmentInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type ServiceAssignmentCreateOrConnectWithoutTasksInput = {
    where: ServiceAssignmentWhereUniqueInput
    create: XOR<ServiceAssignmentCreateWithoutTasksInput, ServiceAssignmentUncheckedCreateWithoutTasksInput>
  }

  export type UserCreateWithoutTasksReviewedInput = {
    id: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutUserInput
    institutions?: InstitutionCreateNestedManyWithoutUserInput
    incidentsReported?: IncidentCreateNestedManyWithoutReporterInput
    incidentsResolved?: IncidentCreateNestedManyWithoutResolverInput
    documents?: DocumentCreateNestedManyWithoutSignedUserInput
    reportsValid?: ReportCreateNestedManyWithoutValidatorInput
    IncidentMessage?: IncidentMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutTasksReviewedInput = {
    id: string
    email: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    institutions?: InstitutionUncheckedCreateNestedManyWithoutUserInput
    incidentsReported?: IncidentUncheckedCreateNestedManyWithoutReporterInput
    incidentsResolved?: IncidentUncheckedCreateNestedManyWithoutResolverInput
    documents?: DocumentUncheckedCreateNestedManyWithoutSignedUserInput
    reportsValid?: ReportUncheckedCreateNestedManyWithoutValidatorInput
    IncidentMessage?: IncidentMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutTasksReviewedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksReviewedInput, UserUncheckedCreateWithoutTasksReviewedInput>
  }

  export type ServiceAssignmentUpsertWithoutTasksInput = {
    update: XOR<ServiceAssignmentUpdateWithoutTasksInput, ServiceAssignmentUncheckedUpdateWithoutTasksInput>
    create: XOR<ServiceAssignmentCreateWithoutTasksInput, ServiceAssignmentUncheckedCreateWithoutTasksInput>
    where?: ServiceAssignmentWhereInput
  }

  export type ServiceAssignmentUpdateToOneWithWhereWithoutTasksInput = {
    where?: ServiceAssignmentWhereInput
    data: XOR<ServiceAssignmentUpdateWithoutTasksInput, ServiceAssignmentUncheckedUpdateWithoutTasksInput>
  }

  export type ServiceAssignmentUpdateWithoutTasksInput = {
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plannedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursRequired?: IntFieldUpdateOperationsInput | number
    hoursCompleted?: IntFieldUpdateOperationsInput | number
    estado?: Enumservice_statusFieldUpdateOperationsInput | $Enums.service_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutAssignmentsNestedInput
    institution?: InstitutionUpdateOneRequiredWithoutAssignmentsNestedInput
    workPlans?: WorkPlanUpdateManyWithoutAssignmentNestedInput
    documents?: DocumentUpdateManyWithoutAssignmentNestedInput
    reports?: ReportUpdateManyWithoutAssignmentNestedInput
    hoursLogs?: HoursLogUpdateManyWithoutAssignmentNestedInput
    incidents?: IncidentUpdateManyWithoutAssignmentNestedInput
  }

  export type ServiceAssignmentUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    institutionId?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plannedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursRequired?: IntFieldUpdateOperationsInput | number
    hoursCompleted?: IntFieldUpdateOperationsInput | number
    estado?: Enumservice_statusFieldUpdateOperationsInput | $Enums.service_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workPlans?: WorkPlanUncheckedUpdateManyWithoutAssignmentNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutAssignmentNestedInput
    reports?: ReportUncheckedUpdateManyWithoutAssignmentNestedInput
    hoursLogs?: HoursLogUncheckedUpdateManyWithoutAssignmentNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type UserUpsertWithoutTasksReviewedInput = {
    update: XOR<UserUpdateWithoutTasksReviewedInput, UserUncheckedUpdateWithoutTasksReviewedInput>
    create: XOR<UserCreateWithoutTasksReviewedInput, UserUncheckedCreateWithoutTasksReviewedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksReviewedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksReviewedInput, UserUncheckedUpdateWithoutTasksReviewedInput>
  }

  export type UserUpdateWithoutTasksReviewedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutUserNestedInput
    institutions?: InstitutionUpdateManyWithoutUserNestedInput
    incidentsReported?: IncidentUpdateManyWithoutReporterNestedInput
    incidentsResolved?: IncidentUpdateManyWithoutResolverNestedInput
    documents?: DocumentUpdateManyWithoutSignedUserNestedInput
    reportsValid?: ReportUpdateManyWithoutValidatorNestedInput
    IncidentMessage?: IncidentMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksReviewedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    institutions?: InstitutionUncheckedUpdateManyWithoutUserNestedInput
    incidentsReported?: IncidentUncheckedUpdateManyWithoutReporterNestedInput
    incidentsResolved?: IncidentUncheckedUpdateManyWithoutResolverNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutSignedUserNestedInput
    reportsValid?: ReportUncheckedUpdateManyWithoutValidatorNestedInput
    IncidentMessage?: IncidentMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type InstitutionCreateManyUserInput = {
    id?: number
    nombre: string
    ciudad: string
    estado: string
    direccion?: string | null
    contactoNombre?: string | null
    contactoEmail: string
    contactoTelefono?: string | null
    incentivoDesc?: string | null
    verificada?: boolean
  }

  export type IncidentCreateManyReporterInput = {
    id?: number
    assignmentId?: number | null
    reportedAt?: Date | string
    tipo: string
    descripcion: string
    estado?: $Enums.incident_status
    resolvedBy?: string | null
    resolvedAt?: Date | string | null
    resolutionNotes?: string | null
  }

  export type IncidentCreateManyResolverInput = {
    id?: number
    assignmentId?: number | null
    reportedBy: string
    reportedAt?: Date | string
    tipo: string
    descripcion: string
    estado?: $Enums.incident_status
    resolvedAt?: Date | string | null
    resolutionNotes?: string | null
  }

  export type DocumentCreateManySignedUserInput = {
    id?: number
    assignmentId: number
    tipo: $Enums.document_type
    filePath: string
    signedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReportCreateManyValidatorInput = {
    id?: number
    assignmentId: number
    tipo: $Enums.report_type
    periodoInicio: Date | string
    periodoFin: Date | string
    horas: number
    descripcion?: string | null
    status?: $Enums.report_status
    validatedAt?: Date | string | null
    filePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateManyReviewerInput = {
    id?: number
    assignmentId: number
    titulo: string
    descripcion?: string | null
    fechaLimite: Date | string
    status?: $Enums.task_status
    entregadaAt?: Date | string | null
    attachmentPath?: string | null
    reviewNotes?: string | null
  }

  export type IncidentMessageCreateManySenderInput = {
    id?: number
    incidentId: number
    message: string
    sentAt?: Date | string
  }

  export type InstitutionUpdateWithoutUserInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    contactoNombre?: NullableStringFieldUpdateOperationsInput | string | null
    contactoEmail?: StringFieldUpdateOperationsInput | string
    contactoTelefono?: NullableStringFieldUpdateOperationsInput | string | null
    incentivoDesc?: NullableStringFieldUpdateOperationsInput | string | null
    verificada?: BoolFieldUpdateOperationsInput | boolean
    assignments?: ServiceAssignmentUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    contactoNombre?: NullableStringFieldUpdateOperationsInput | string | null
    contactoEmail?: StringFieldUpdateOperationsInput | string
    contactoTelefono?: NullableStringFieldUpdateOperationsInput | string | null
    incentivoDesc?: NullableStringFieldUpdateOperationsInput | string | null
    verificada?: BoolFieldUpdateOperationsInput | boolean
    assignments?: ServiceAssignmentUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    contactoNombre?: NullableStringFieldUpdateOperationsInput | string | null
    contactoEmail?: StringFieldUpdateOperationsInput | string
    contactoTelefono?: NullableStringFieldUpdateOperationsInput | string | null
    incentivoDesc?: NullableStringFieldUpdateOperationsInput | string | null
    verificada?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IncidentUpdateWithoutReporterInput = {
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    estado?: Enumincident_statusFieldUpdateOperationsInput | $Enums.incident_status
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
    assignment?: ServiceAssignmentUpdateOneWithoutIncidentsNestedInput
    resolver?: UserUpdateOneWithoutIncidentsResolvedNestedInput
    messages?: IncidentMessageUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateWithoutReporterInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: NullableIntFieldUpdateOperationsInput | number | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    estado?: Enumincident_statusFieldUpdateOperationsInput | $Enums.incident_status
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: IncidentMessageUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateManyWithoutReporterInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: NullableIntFieldUpdateOperationsInput | number | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    estado?: Enumincident_statusFieldUpdateOperationsInput | $Enums.incident_status
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IncidentUpdateWithoutResolverInput = {
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    estado?: Enumincident_statusFieldUpdateOperationsInput | $Enums.incident_status
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
    assignment?: ServiceAssignmentUpdateOneWithoutIncidentsNestedInput
    reporter?: UserUpdateOneRequiredWithoutIncidentsReportedNestedInput
    messages?: IncidentMessageUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateWithoutResolverInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: NullableIntFieldUpdateOperationsInput | number | null
    reportedBy?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    estado?: Enumincident_statusFieldUpdateOperationsInput | $Enums.incident_status
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: IncidentMessageUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateManyWithoutResolverInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: NullableIntFieldUpdateOperationsInput | number | null
    reportedBy?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    estado?: Enumincident_statusFieldUpdateOperationsInput | $Enums.incident_status
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentUpdateWithoutSignedUserInput = {
    tipo?: Enumdocument_typeFieldUpdateOperationsInput | $Enums.document_type
    filePath?: StringFieldUpdateOperationsInput | string
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: ServiceAssignmentUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutSignedUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    tipo?: Enumdocument_typeFieldUpdateOperationsInput | $Enums.document_type
    filePath?: StringFieldUpdateOperationsInput | string
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutSignedUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    tipo?: Enumdocument_typeFieldUpdateOperationsInput | $Enums.document_type
    filePath?: StringFieldUpdateOperationsInput | string
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutValidatorInput = {
    tipo?: Enumreport_typeFieldUpdateOperationsInput | $Enums.report_type
    periodoInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    periodoFin?: DateTimeFieldUpdateOperationsInput | Date | string
    horas?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumreport_statusFieldUpdateOperationsInput | $Enums.report_status
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: ServiceAssignmentUpdateOneRequiredWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateWithoutValidatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    tipo?: Enumreport_typeFieldUpdateOperationsInput | $Enums.report_type
    periodoInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    periodoFin?: DateTimeFieldUpdateOperationsInput | Date | string
    horas?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumreport_statusFieldUpdateOperationsInput | $Enums.report_status
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutValidatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    tipo?: Enumreport_typeFieldUpdateOperationsInput | $Enums.report_type
    periodoInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    periodoFin?: DateTimeFieldUpdateOperationsInput | Date | string
    horas?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumreport_statusFieldUpdateOperationsInput | $Enums.report_status
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutReviewerInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaLimite?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    entregadaAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    assignment?: ServiceAssignmentUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaLimite?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    entregadaAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUncheckedUpdateManyWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaLimite?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    entregadaAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IncidentMessageUpdateWithoutSenderInput = {
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incident?: IncidentUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type IncidentMessageUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    incidentId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentMessageUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    incidentId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceAssignmentCreateManyStudentInput = {
    id?: number
    institutionId: number
    startDate?: Date | string | null
    plannedEndDate?: Date | string | null
    endDate?: Date | string | null
    totalHoursRequired?: number
    hoursCompleted?: number
    estado?: $Enums.service_status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceAssignmentUpdateWithoutStudentInput = {
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plannedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursRequired?: IntFieldUpdateOperationsInput | number
    hoursCompleted?: IntFieldUpdateOperationsInput | number
    estado?: Enumservice_statusFieldUpdateOperationsInput | $Enums.service_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institution?: InstitutionUpdateOneRequiredWithoutAssignmentsNestedInput
    workPlans?: WorkPlanUpdateManyWithoutAssignmentNestedInput
    documents?: DocumentUpdateManyWithoutAssignmentNestedInput
    reports?: ReportUpdateManyWithoutAssignmentNestedInput
    hoursLogs?: HoursLogUpdateManyWithoutAssignmentNestedInput
    incidents?: IncidentUpdateManyWithoutAssignmentNestedInput
    tasks?: TaskUpdateManyWithoutAssignmentNestedInput
  }

  export type ServiceAssignmentUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    institutionId?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plannedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursRequired?: IntFieldUpdateOperationsInput | number
    hoursCompleted?: IntFieldUpdateOperationsInput | number
    estado?: Enumservice_statusFieldUpdateOperationsInput | $Enums.service_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workPlans?: WorkPlanUncheckedUpdateManyWithoutAssignmentNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutAssignmentNestedInput
    reports?: ReportUncheckedUpdateManyWithoutAssignmentNestedInput
    hoursLogs?: HoursLogUncheckedUpdateManyWithoutAssignmentNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutAssignmentNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type ServiceAssignmentUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    institutionId?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plannedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursRequired?: IntFieldUpdateOperationsInput | number
    hoursCompleted?: IntFieldUpdateOperationsInput | number
    estado?: Enumservice_statusFieldUpdateOperationsInput | $Enums.service_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceAssignmentCreateManyInstitutionInput = {
    id?: number
    studentId: string
    startDate?: Date | string | null
    plannedEndDate?: Date | string | null
    endDate?: Date | string | null
    totalHoursRequired?: number
    hoursCompleted?: number
    estado?: $Enums.service_status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceAssignmentUpdateWithoutInstitutionInput = {
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plannedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursRequired?: IntFieldUpdateOperationsInput | number
    hoursCompleted?: IntFieldUpdateOperationsInput | number
    estado?: Enumservice_statusFieldUpdateOperationsInput | $Enums.service_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutAssignmentsNestedInput
    workPlans?: WorkPlanUpdateManyWithoutAssignmentNestedInput
    documents?: DocumentUpdateManyWithoutAssignmentNestedInput
    reports?: ReportUpdateManyWithoutAssignmentNestedInput
    hoursLogs?: HoursLogUpdateManyWithoutAssignmentNestedInput
    incidents?: IncidentUpdateManyWithoutAssignmentNestedInput
    tasks?: TaskUpdateManyWithoutAssignmentNestedInput
  }

  export type ServiceAssignmentUncheckedUpdateWithoutInstitutionInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plannedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursRequired?: IntFieldUpdateOperationsInput | number
    hoursCompleted?: IntFieldUpdateOperationsInput | number
    estado?: Enumservice_statusFieldUpdateOperationsInput | $Enums.service_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workPlans?: WorkPlanUncheckedUpdateManyWithoutAssignmentNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutAssignmentNestedInput
    reports?: ReportUncheckedUpdateManyWithoutAssignmentNestedInput
    hoursLogs?: HoursLogUncheckedUpdateManyWithoutAssignmentNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutAssignmentNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type ServiceAssignmentUncheckedUpdateManyWithoutInstitutionInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plannedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursRequired?: IntFieldUpdateOperationsInput | number
    hoursCompleted?: IntFieldUpdateOperationsInput | number
    estado?: Enumservice_statusFieldUpdateOperationsInput | $Enums.service_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkPlanCreateManyAssignmentInput = {
    id?: number
    contenido: JsonNullValueInput | InputJsonValue
    status?: $Enums.plan_status
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateManyAssignmentInput = {
    id?: number
    tipo: $Enums.document_type
    filePath: string
    signedBy?: string | null
    signedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReportCreateManyAssignmentInput = {
    id?: number
    tipo: $Enums.report_type
    periodoInicio: Date | string
    periodoFin: Date | string
    horas: number
    descripcion?: string | null
    status?: $Enums.report_status
    validatedBy?: string | null
    validatedAt?: Date | string | null
    filePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HoursLogCreateManyAssignmentInput = {
    id?: number
    dateWorked: Date | string
    horas: number
    description?: string | null
    validated?: boolean
  }

  export type IncidentCreateManyAssignmentInput = {
    id?: number
    reportedBy: string
    reportedAt?: Date | string
    tipo: string
    descripcion: string
    estado?: $Enums.incident_status
    resolvedBy?: string | null
    resolvedAt?: Date | string | null
    resolutionNotes?: string | null
  }

  export type TaskCreateManyAssignmentInput = {
    id?: number
    titulo: string
    descripcion?: string | null
    fechaLimite: Date | string
    status?: $Enums.task_status
    entregadaAt?: Date | string | null
    attachmentPath?: string | null
    reviewedBy?: string | null
    reviewNotes?: string | null
  }

  export type WorkPlanUpdateWithoutAssignmentInput = {
    contenido?: JsonNullValueInput | InputJsonValue
    status?: Enumplan_statusFieldUpdateOperationsInput | $Enums.plan_status
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkPlanUncheckedUpdateWithoutAssignmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: JsonNullValueInput | InputJsonValue
    status?: Enumplan_statusFieldUpdateOperationsInput | $Enums.plan_status
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkPlanUncheckedUpdateManyWithoutAssignmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: JsonNullValueInput | InputJsonValue
    status?: Enumplan_statusFieldUpdateOperationsInput | $Enums.plan_status
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpdateWithoutAssignmentInput = {
    tipo?: Enumdocument_typeFieldUpdateOperationsInput | $Enums.document_type
    filePath?: StringFieldUpdateOperationsInput | string
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signedUser?: UserUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutAssignmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: Enumdocument_typeFieldUpdateOperationsInput | $Enums.document_type
    filePath?: StringFieldUpdateOperationsInput | string
    signedBy?: NullableStringFieldUpdateOperationsInput | string | null
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutAssignmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: Enumdocument_typeFieldUpdateOperationsInput | $Enums.document_type
    filePath?: StringFieldUpdateOperationsInput | string
    signedBy?: NullableStringFieldUpdateOperationsInput | string | null
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutAssignmentInput = {
    tipo?: Enumreport_typeFieldUpdateOperationsInput | $Enums.report_type
    periodoInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    periodoFin?: DateTimeFieldUpdateOperationsInput | Date | string
    horas?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumreport_statusFieldUpdateOperationsInput | $Enums.report_status
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validator?: UserUpdateOneWithoutReportsValidNestedInput
  }

  export type ReportUncheckedUpdateWithoutAssignmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: Enumreport_typeFieldUpdateOperationsInput | $Enums.report_type
    periodoInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    periodoFin?: DateTimeFieldUpdateOperationsInput | Date | string
    horas?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumreport_statusFieldUpdateOperationsInput | $Enums.report_status
    validatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutAssignmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: Enumreport_typeFieldUpdateOperationsInput | $Enums.report_type
    periodoInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    periodoFin?: DateTimeFieldUpdateOperationsInput | Date | string
    horas?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumreport_statusFieldUpdateOperationsInput | $Enums.report_status
    validatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoursLogUpdateWithoutAssignmentInput = {
    dateWorked?: DateTimeFieldUpdateOperationsInput | Date | string
    horas?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    validated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HoursLogUncheckedUpdateWithoutAssignmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateWorked?: DateTimeFieldUpdateOperationsInput | Date | string
    horas?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    validated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HoursLogUncheckedUpdateManyWithoutAssignmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateWorked?: DateTimeFieldUpdateOperationsInput | Date | string
    horas?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    validated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IncidentUpdateWithoutAssignmentInput = {
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    estado?: Enumincident_statusFieldUpdateOperationsInput | $Enums.incident_status
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
    reporter?: UserUpdateOneRequiredWithoutIncidentsReportedNestedInput
    resolver?: UserUpdateOneWithoutIncidentsResolvedNestedInput
    messages?: IncidentMessageUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateWithoutAssignmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    reportedBy?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    estado?: Enumincident_statusFieldUpdateOperationsInput | $Enums.incident_status
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: IncidentMessageUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateManyWithoutAssignmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    reportedBy?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    estado?: Enumincident_statusFieldUpdateOperationsInput | $Enums.incident_status
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUpdateWithoutAssignmentInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaLimite?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    entregadaAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewer?: UserUpdateOneWithoutTasksReviewedNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssignmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaLimite?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    entregadaAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUncheckedUpdateManyWithoutAssignmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaLimite?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    entregadaAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IncidentMessageCreateManyIncidentInput = {
    id?: number
    senderId: string
    message: string
    sentAt?: Date | string
  }

  export type IncidentMessageUpdateWithoutIncidentInput = {
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutIncidentMessageNestedInput
  }

  export type IncidentMessageUncheckedUpdateWithoutIncidentInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentMessageUncheckedUpdateManyWithoutIncidentInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
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