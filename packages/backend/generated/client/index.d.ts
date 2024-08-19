
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
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model Transcript
 * 
 */
export type Transcript = $Result.DefaultSelection<Prisma.$TranscriptPayload>
/**
 * Model Sentence
 * 
 */
export type Sentence = $Result.DefaultSelection<Prisma.$SentencePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Videos
 * const videos = await prisma.video.findMany()
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
   * // Fetch zero or more Videos
   * const videos = await prisma.video.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs>;

  /**
   * `prisma.transcript`: Exposes CRUD operations for the **Transcript** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transcripts
    * const transcripts = await prisma.transcript.findMany()
    * ```
    */
  get transcript(): Prisma.TranscriptDelegate<ExtArgs>;

  /**
   * `prisma.sentence`: Exposes CRUD operations for the **Sentence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sentences
    * const sentences = await prisma.sentence.findMany()
    * ```
    */
  get sentence(): Prisma.SentenceDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.18.0
   * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Video: 'Video',
    Transcript: 'Transcript',
    Sentence: 'Sentence'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "video" | "transcript" | "sentence"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      Transcript: {
        payload: Prisma.$TranscriptPayload<ExtArgs>
        fields: Prisma.TranscriptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TranscriptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TranscriptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptPayload>
          }
          findFirst: {
            args: Prisma.TranscriptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TranscriptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptPayload>
          }
          findMany: {
            args: Prisma.TranscriptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptPayload>[]
          }
          create: {
            args: Prisma.TranscriptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptPayload>
          }
          createMany: {
            args: Prisma.TranscriptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TranscriptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptPayload>[]
          }
          delete: {
            args: Prisma.TranscriptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptPayload>
          }
          update: {
            args: Prisma.TranscriptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptPayload>
          }
          deleteMany: {
            args: Prisma.TranscriptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TranscriptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TranscriptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptPayload>
          }
          aggregate: {
            args: Prisma.TranscriptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTranscript>
          }
          groupBy: {
            args: Prisma.TranscriptGroupByArgs<ExtArgs>
            result: $Utils.Optional<TranscriptGroupByOutputType>[]
          }
          count: {
            args: Prisma.TranscriptCountArgs<ExtArgs>
            result: $Utils.Optional<TranscriptCountAggregateOutputType> | number
          }
        }
      }
      Sentence: {
        payload: Prisma.$SentencePayload<ExtArgs>
        fields: Prisma.SentenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SentenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SentenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentencePayload>
          }
          findFirst: {
            args: Prisma.SentenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SentenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentencePayload>
          }
          findMany: {
            args: Prisma.SentenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentencePayload>[]
          }
          create: {
            args: Prisma.SentenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentencePayload>
          }
          createMany: {
            args: Prisma.SentenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SentenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentencePayload>[]
          }
          delete: {
            args: Prisma.SentenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentencePayload>
          }
          update: {
            args: Prisma.SentenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentencePayload>
          }
          deleteMany: {
            args: Prisma.SentenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SentenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SentenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentencePayload>
          }
          aggregate: {
            args: Prisma.SentenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSentence>
          }
          groupBy: {
            args: Prisma.SentenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SentenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SentenceCountArgs<ExtArgs>
            result: $Utils.Optional<SentenceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
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
   * Count Type TranscriptCountOutputType
   */

  export type TranscriptCountOutputType = {
    sentences: number
  }

  export type TranscriptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentences?: boolean | TranscriptCountOutputTypeCountSentencesArgs
  }

  // Custom InputTypes
  /**
   * TranscriptCountOutputType without action
   */
  export type TranscriptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptCountOutputType
     */
    select?: TranscriptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TranscriptCountOutputType without action
   */
  export type TranscriptCountOutputTypeCountSentencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SentenceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    id: number | null
  }

  export type VideoSumAggregateOutputType = {
    id: number | null
  }

  export type VideoMinAggregateOutputType = {
    id: number | null
    title: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoMaxAggregateOutputType = {
    id: number | null
    title: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    title: number
    url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    id?: true
  }

  export type VideoSumAggregateInputType = {
    id?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    title?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    title?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    title?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: number
    title: string
    url: string
    createdAt: Date
    updatedAt: Date
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transcript?: boolean | Video$transcriptArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["video"]>

  export type VideoSelectScalar = {
    id?: boolean
    title?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transcript?: boolean | Video$transcriptArgs<ExtArgs>
  }
  export type VideoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      transcript: Prisma.$TranscriptPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      url: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos and returns the data saved in the database.
     * @param {VideoCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
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
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transcript<T extends Video$transcriptArgs<ExtArgs> = {}>(args?: Subset<T, Video$transcriptArgs<ExtArgs>>): Prisma__TranscriptClient<$Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Video model
   */ 
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'Int'>
    readonly title: FieldRef<"Video", 'String'>
    readonly url: FieldRef<"Video", 'String'>
    readonly createdAt: FieldRef<"Video", 'DateTime'>
    readonly updatedAt: FieldRef<"Video", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
  }

  /**
   * Video createManyAndReturn
   */
  export type VideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
  }

  /**
   * Video.transcript
   */
  export type Video$transcriptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcript
     */
    select?: TranscriptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptInclude<ExtArgs> | null
    where?: TranscriptWhereInput
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Model Transcript
   */

  export type AggregateTranscript = {
    _count: TranscriptCountAggregateOutputType | null
    _avg: TranscriptAvgAggregateOutputType | null
    _sum: TranscriptSumAggregateOutputType | null
    _min: TranscriptMinAggregateOutputType | null
    _max: TranscriptMaxAggregateOutputType | null
  }

  export type TranscriptAvgAggregateOutputType = {
    id: number | null
    videoId: number | null
  }

  export type TranscriptSumAggregateOutputType = {
    id: number | null
    videoId: number | null
  }

  export type TranscriptMinAggregateOutputType = {
    id: number | null
    videoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TranscriptMaxAggregateOutputType = {
    id: number | null
    videoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TranscriptCountAggregateOutputType = {
    id: number
    videoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TranscriptAvgAggregateInputType = {
    id?: true
    videoId?: true
  }

  export type TranscriptSumAggregateInputType = {
    id?: true
    videoId?: true
  }

  export type TranscriptMinAggregateInputType = {
    id?: true
    videoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TranscriptMaxAggregateInputType = {
    id?: true
    videoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TranscriptCountAggregateInputType = {
    id?: true
    videoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TranscriptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transcript to aggregate.
     */
    where?: TranscriptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transcripts to fetch.
     */
    orderBy?: TranscriptOrderByWithRelationInput | TranscriptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TranscriptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transcripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transcripts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transcripts
    **/
    _count?: true | TranscriptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TranscriptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TranscriptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TranscriptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TranscriptMaxAggregateInputType
  }

  export type GetTranscriptAggregateType<T extends TranscriptAggregateArgs> = {
        [P in keyof T & keyof AggregateTranscript]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTranscript[P]>
      : GetScalarType<T[P], AggregateTranscript[P]>
  }




  export type TranscriptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranscriptWhereInput
    orderBy?: TranscriptOrderByWithAggregationInput | TranscriptOrderByWithAggregationInput[]
    by: TranscriptScalarFieldEnum[] | TranscriptScalarFieldEnum
    having?: TranscriptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TranscriptCountAggregateInputType | true
    _avg?: TranscriptAvgAggregateInputType
    _sum?: TranscriptSumAggregateInputType
    _min?: TranscriptMinAggregateInputType
    _max?: TranscriptMaxAggregateInputType
  }

  export type TranscriptGroupByOutputType = {
    id: number
    videoId: number
    createdAt: Date
    updatedAt: Date
    _count: TranscriptCountAggregateOutputType | null
    _avg: TranscriptAvgAggregateOutputType | null
    _sum: TranscriptSumAggregateOutputType | null
    _min: TranscriptMinAggregateOutputType | null
    _max: TranscriptMaxAggregateOutputType | null
  }

  type GetTranscriptGroupByPayload<T extends TranscriptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TranscriptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TranscriptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TranscriptGroupByOutputType[P]>
            : GetScalarType<T[P], TranscriptGroupByOutputType[P]>
        }
      >
    >


  export type TranscriptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
    sentences?: boolean | Transcript$sentencesArgs<ExtArgs>
    _count?: boolean | TranscriptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transcript"]>

  export type TranscriptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transcript"]>

  export type TranscriptSelectScalar = {
    id?: boolean
    videoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TranscriptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
    sentences?: boolean | Transcript$sentencesArgs<ExtArgs>
    _count?: boolean | TranscriptCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TranscriptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }

  export type $TranscriptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transcript"
    objects: {
      video: Prisma.$VideoPayload<ExtArgs>
      sentences: Prisma.$SentencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      videoId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transcript"]>
    composites: {}
  }

  type TranscriptGetPayload<S extends boolean | null | undefined | TranscriptDefaultArgs> = $Result.GetResult<Prisma.$TranscriptPayload, S>

  type TranscriptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TranscriptFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TranscriptCountAggregateInputType | true
    }

  export interface TranscriptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transcript'], meta: { name: 'Transcript' } }
    /**
     * Find zero or one Transcript that matches the filter.
     * @param {TranscriptFindUniqueArgs} args - Arguments to find a Transcript
     * @example
     * // Get one Transcript
     * const transcript = await prisma.transcript.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TranscriptFindUniqueArgs>(args: SelectSubset<T, TranscriptFindUniqueArgs<ExtArgs>>): Prisma__TranscriptClient<$Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transcript that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TranscriptFindUniqueOrThrowArgs} args - Arguments to find a Transcript
     * @example
     * // Get one Transcript
     * const transcript = await prisma.transcript.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TranscriptFindUniqueOrThrowArgs>(args: SelectSubset<T, TranscriptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TranscriptClient<$Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transcript that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptFindFirstArgs} args - Arguments to find a Transcript
     * @example
     * // Get one Transcript
     * const transcript = await prisma.transcript.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TranscriptFindFirstArgs>(args?: SelectSubset<T, TranscriptFindFirstArgs<ExtArgs>>): Prisma__TranscriptClient<$Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transcript that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptFindFirstOrThrowArgs} args - Arguments to find a Transcript
     * @example
     * // Get one Transcript
     * const transcript = await prisma.transcript.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TranscriptFindFirstOrThrowArgs>(args?: SelectSubset<T, TranscriptFindFirstOrThrowArgs<ExtArgs>>): Prisma__TranscriptClient<$Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transcripts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transcripts
     * const transcripts = await prisma.transcript.findMany()
     * 
     * // Get first 10 Transcripts
     * const transcripts = await prisma.transcript.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transcriptWithIdOnly = await prisma.transcript.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TranscriptFindManyArgs>(args?: SelectSubset<T, TranscriptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transcript.
     * @param {TranscriptCreateArgs} args - Arguments to create a Transcript.
     * @example
     * // Create one Transcript
     * const Transcript = await prisma.transcript.create({
     *   data: {
     *     // ... data to create a Transcript
     *   }
     * })
     * 
     */
    create<T extends TranscriptCreateArgs>(args: SelectSubset<T, TranscriptCreateArgs<ExtArgs>>): Prisma__TranscriptClient<$Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transcripts.
     * @param {TranscriptCreateManyArgs} args - Arguments to create many Transcripts.
     * @example
     * // Create many Transcripts
     * const transcript = await prisma.transcript.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TranscriptCreateManyArgs>(args?: SelectSubset<T, TranscriptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transcripts and returns the data saved in the database.
     * @param {TranscriptCreateManyAndReturnArgs} args - Arguments to create many Transcripts.
     * @example
     * // Create many Transcripts
     * const transcript = await prisma.transcript.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transcripts and only return the `id`
     * const transcriptWithIdOnly = await prisma.transcript.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TranscriptCreateManyAndReturnArgs>(args?: SelectSubset<T, TranscriptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Transcript.
     * @param {TranscriptDeleteArgs} args - Arguments to delete one Transcript.
     * @example
     * // Delete one Transcript
     * const Transcript = await prisma.transcript.delete({
     *   where: {
     *     // ... filter to delete one Transcript
     *   }
     * })
     * 
     */
    delete<T extends TranscriptDeleteArgs>(args: SelectSubset<T, TranscriptDeleteArgs<ExtArgs>>): Prisma__TranscriptClient<$Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transcript.
     * @param {TranscriptUpdateArgs} args - Arguments to update one Transcript.
     * @example
     * // Update one Transcript
     * const transcript = await prisma.transcript.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TranscriptUpdateArgs>(args: SelectSubset<T, TranscriptUpdateArgs<ExtArgs>>): Prisma__TranscriptClient<$Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transcripts.
     * @param {TranscriptDeleteManyArgs} args - Arguments to filter Transcripts to delete.
     * @example
     * // Delete a few Transcripts
     * const { count } = await prisma.transcript.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TranscriptDeleteManyArgs>(args?: SelectSubset<T, TranscriptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transcripts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transcripts
     * const transcript = await prisma.transcript.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TranscriptUpdateManyArgs>(args: SelectSubset<T, TranscriptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transcript.
     * @param {TranscriptUpsertArgs} args - Arguments to update or create a Transcript.
     * @example
     * // Update or create a Transcript
     * const transcript = await prisma.transcript.upsert({
     *   create: {
     *     // ... data to create a Transcript
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transcript we want to update
     *   }
     * })
     */
    upsert<T extends TranscriptUpsertArgs>(args: SelectSubset<T, TranscriptUpsertArgs<ExtArgs>>): Prisma__TranscriptClient<$Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transcripts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptCountArgs} args - Arguments to filter Transcripts to count.
     * @example
     * // Count the number of Transcripts
     * const count = await prisma.transcript.count({
     *   where: {
     *     // ... the filter for the Transcripts we want to count
     *   }
     * })
    **/
    count<T extends TranscriptCountArgs>(
      args?: Subset<T, TranscriptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TranscriptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transcript.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TranscriptAggregateArgs>(args: Subset<T, TranscriptAggregateArgs>): Prisma.PrismaPromise<GetTranscriptAggregateType<T>>

    /**
     * Group by Transcript.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptGroupByArgs} args - Group by arguments.
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
      T extends TranscriptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TranscriptGroupByArgs['orderBy'] }
        : { orderBy?: TranscriptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TranscriptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTranscriptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transcript model
   */
  readonly fields: TranscriptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transcript.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TranscriptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    sentences<T extends Transcript$sentencesArgs<ExtArgs> = {}>(args?: Subset<T, Transcript$sentencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentencePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Transcript model
   */ 
  interface TranscriptFieldRefs {
    readonly id: FieldRef<"Transcript", 'Int'>
    readonly videoId: FieldRef<"Transcript", 'Int'>
    readonly createdAt: FieldRef<"Transcript", 'DateTime'>
    readonly updatedAt: FieldRef<"Transcript", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transcript findUnique
   */
  export type TranscriptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcript
     */
    select?: TranscriptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptInclude<ExtArgs> | null
    /**
     * Filter, which Transcript to fetch.
     */
    where: TranscriptWhereUniqueInput
  }

  /**
   * Transcript findUniqueOrThrow
   */
  export type TranscriptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcript
     */
    select?: TranscriptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptInclude<ExtArgs> | null
    /**
     * Filter, which Transcript to fetch.
     */
    where: TranscriptWhereUniqueInput
  }

  /**
   * Transcript findFirst
   */
  export type TranscriptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcript
     */
    select?: TranscriptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptInclude<ExtArgs> | null
    /**
     * Filter, which Transcript to fetch.
     */
    where?: TranscriptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transcripts to fetch.
     */
    orderBy?: TranscriptOrderByWithRelationInput | TranscriptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transcripts.
     */
    cursor?: TranscriptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transcripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transcripts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transcripts.
     */
    distinct?: TranscriptScalarFieldEnum | TranscriptScalarFieldEnum[]
  }

  /**
   * Transcript findFirstOrThrow
   */
  export type TranscriptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcript
     */
    select?: TranscriptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptInclude<ExtArgs> | null
    /**
     * Filter, which Transcript to fetch.
     */
    where?: TranscriptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transcripts to fetch.
     */
    orderBy?: TranscriptOrderByWithRelationInput | TranscriptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transcripts.
     */
    cursor?: TranscriptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transcripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transcripts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transcripts.
     */
    distinct?: TranscriptScalarFieldEnum | TranscriptScalarFieldEnum[]
  }

  /**
   * Transcript findMany
   */
  export type TranscriptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcript
     */
    select?: TranscriptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptInclude<ExtArgs> | null
    /**
     * Filter, which Transcripts to fetch.
     */
    where?: TranscriptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transcripts to fetch.
     */
    orderBy?: TranscriptOrderByWithRelationInput | TranscriptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transcripts.
     */
    cursor?: TranscriptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transcripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transcripts.
     */
    skip?: number
    distinct?: TranscriptScalarFieldEnum | TranscriptScalarFieldEnum[]
  }

  /**
   * Transcript create
   */
  export type TranscriptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcript
     */
    select?: TranscriptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptInclude<ExtArgs> | null
    /**
     * The data needed to create a Transcript.
     */
    data: XOR<TranscriptCreateInput, TranscriptUncheckedCreateInput>
  }

  /**
   * Transcript createMany
   */
  export type TranscriptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transcripts.
     */
    data: TranscriptCreateManyInput | TranscriptCreateManyInput[]
  }

  /**
   * Transcript createManyAndReturn
   */
  export type TranscriptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcript
     */
    select?: TranscriptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Transcripts.
     */
    data: TranscriptCreateManyInput | TranscriptCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transcript update
   */
  export type TranscriptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcript
     */
    select?: TranscriptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptInclude<ExtArgs> | null
    /**
     * The data needed to update a Transcript.
     */
    data: XOR<TranscriptUpdateInput, TranscriptUncheckedUpdateInput>
    /**
     * Choose, which Transcript to update.
     */
    where: TranscriptWhereUniqueInput
  }

  /**
   * Transcript updateMany
   */
  export type TranscriptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transcripts.
     */
    data: XOR<TranscriptUpdateManyMutationInput, TranscriptUncheckedUpdateManyInput>
    /**
     * Filter which Transcripts to update
     */
    where?: TranscriptWhereInput
  }

  /**
   * Transcript upsert
   */
  export type TranscriptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcript
     */
    select?: TranscriptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptInclude<ExtArgs> | null
    /**
     * The filter to search for the Transcript to update in case it exists.
     */
    where: TranscriptWhereUniqueInput
    /**
     * In case the Transcript found by the `where` argument doesn't exist, create a new Transcript with this data.
     */
    create: XOR<TranscriptCreateInput, TranscriptUncheckedCreateInput>
    /**
     * In case the Transcript was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TranscriptUpdateInput, TranscriptUncheckedUpdateInput>
  }

  /**
   * Transcript delete
   */
  export type TranscriptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcript
     */
    select?: TranscriptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptInclude<ExtArgs> | null
    /**
     * Filter which Transcript to delete.
     */
    where: TranscriptWhereUniqueInput
  }

  /**
   * Transcript deleteMany
   */
  export type TranscriptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transcripts to delete
     */
    where?: TranscriptWhereInput
  }

  /**
   * Transcript.sentences
   */
  export type Transcript$sentencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sentence
     */
    select?: SentenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentenceInclude<ExtArgs> | null
    where?: SentenceWhereInput
    orderBy?: SentenceOrderByWithRelationInput | SentenceOrderByWithRelationInput[]
    cursor?: SentenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SentenceScalarFieldEnum | SentenceScalarFieldEnum[]
  }

  /**
   * Transcript without action
   */
  export type TranscriptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcript
     */
    select?: TranscriptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptInclude<ExtArgs> | null
  }


  /**
   * Model Sentence
   */

  export type AggregateSentence = {
    _count: SentenceCountAggregateOutputType | null
    _avg: SentenceAvgAggregateOutputType | null
    _sum: SentenceSumAggregateOutputType | null
    _min: SentenceMinAggregateOutputType | null
    _max: SentenceMaxAggregateOutputType | null
  }

  export type SentenceAvgAggregateOutputType = {
    id: number | null
    startTime: number | null
    endTime: number | null
    transcriptId: number | null
  }

  export type SentenceSumAggregateOutputType = {
    id: number | null
    startTime: number | null
    endTime: number | null
    transcriptId: number | null
  }

  export type SentenceMinAggregateOutputType = {
    id: number | null
    content: string | null
    startTime: number | null
    endTime: number | null
    isHighlight: boolean | null
    transcriptId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SentenceMaxAggregateOutputType = {
    id: number | null
    content: string | null
    startTime: number | null
    endTime: number | null
    isHighlight: boolean | null
    transcriptId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SentenceCountAggregateOutputType = {
    id: number
    content: number
    startTime: number
    endTime: number
    isHighlight: number
    transcriptId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SentenceAvgAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    transcriptId?: true
  }

  export type SentenceSumAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    transcriptId?: true
  }

  export type SentenceMinAggregateInputType = {
    id?: true
    content?: true
    startTime?: true
    endTime?: true
    isHighlight?: true
    transcriptId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SentenceMaxAggregateInputType = {
    id?: true
    content?: true
    startTime?: true
    endTime?: true
    isHighlight?: true
    transcriptId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SentenceCountAggregateInputType = {
    id?: true
    content?: true
    startTime?: true
    endTime?: true
    isHighlight?: true
    transcriptId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SentenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sentence to aggregate.
     */
    where?: SentenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sentences to fetch.
     */
    orderBy?: SentenceOrderByWithRelationInput | SentenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SentenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sentences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sentences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sentences
    **/
    _count?: true | SentenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SentenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SentenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SentenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SentenceMaxAggregateInputType
  }

  export type GetSentenceAggregateType<T extends SentenceAggregateArgs> = {
        [P in keyof T & keyof AggregateSentence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSentence[P]>
      : GetScalarType<T[P], AggregateSentence[P]>
  }




  export type SentenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SentenceWhereInput
    orderBy?: SentenceOrderByWithAggregationInput | SentenceOrderByWithAggregationInput[]
    by: SentenceScalarFieldEnum[] | SentenceScalarFieldEnum
    having?: SentenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SentenceCountAggregateInputType | true
    _avg?: SentenceAvgAggregateInputType
    _sum?: SentenceSumAggregateInputType
    _min?: SentenceMinAggregateInputType
    _max?: SentenceMaxAggregateInputType
  }

  export type SentenceGroupByOutputType = {
    id: number
    content: string
    startTime: number
    endTime: number
    isHighlight: boolean
    transcriptId: number
    createdAt: Date
    updatedAt: Date
    _count: SentenceCountAggregateOutputType | null
    _avg: SentenceAvgAggregateOutputType | null
    _sum: SentenceSumAggregateOutputType | null
    _min: SentenceMinAggregateOutputType | null
    _max: SentenceMaxAggregateOutputType | null
  }

  type GetSentenceGroupByPayload<T extends SentenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SentenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SentenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SentenceGroupByOutputType[P]>
            : GetScalarType<T[P], SentenceGroupByOutputType[P]>
        }
      >
    >


  export type SentenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    startTime?: boolean
    endTime?: boolean
    isHighlight?: boolean
    transcriptId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transcript?: boolean | TranscriptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sentence"]>

  export type SentenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    startTime?: boolean
    endTime?: boolean
    isHighlight?: boolean
    transcriptId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transcript?: boolean | TranscriptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sentence"]>

  export type SentenceSelectScalar = {
    id?: boolean
    content?: boolean
    startTime?: boolean
    endTime?: boolean
    isHighlight?: boolean
    transcriptId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SentenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transcript?: boolean | TranscriptDefaultArgs<ExtArgs>
  }
  export type SentenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transcript?: boolean | TranscriptDefaultArgs<ExtArgs>
  }

  export type $SentencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sentence"
    objects: {
      transcript: Prisma.$TranscriptPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      startTime: number
      endTime: number
      isHighlight: boolean
      transcriptId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sentence"]>
    composites: {}
  }

  type SentenceGetPayload<S extends boolean | null | undefined | SentenceDefaultArgs> = $Result.GetResult<Prisma.$SentencePayload, S>

  type SentenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SentenceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SentenceCountAggregateInputType | true
    }

  export interface SentenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sentence'], meta: { name: 'Sentence' } }
    /**
     * Find zero or one Sentence that matches the filter.
     * @param {SentenceFindUniqueArgs} args - Arguments to find a Sentence
     * @example
     * // Get one Sentence
     * const sentence = await prisma.sentence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SentenceFindUniqueArgs>(args: SelectSubset<T, SentenceFindUniqueArgs<ExtArgs>>): Prisma__SentenceClient<$Result.GetResult<Prisma.$SentencePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Sentence that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SentenceFindUniqueOrThrowArgs} args - Arguments to find a Sentence
     * @example
     * // Get one Sentence
     * const sentence = await prisma.sentence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SentenceFindUniqueOrThrowArgs>(args: SelectSubset<T, SentenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SentenceClient<$Result.GetResult<Prisma.$SentencePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Sentence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentenceFindFirstArgs} args - Arguments to find a Sentence
     * @example
     * // Get one Sentence
     * const sentence = await prisma.sentence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SentenceFindFirstArgs>(args?: SelectSubset<T, SentenceFindFirstArgs<ExtArgs>>): Prisma__SentenceClient<$Result.GetResult<Prisma.$SentencePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Sentence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentenceFindFirstOrThrowArgs} args - Arguments to find a Sentence
     * @example
     * // Get one Sentence
     * const sentence = await prisma.sentence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SentenceFindFirstOrThrowArgs>(args?: SelectSubset<T, SentenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SentenceClient<$Result.GetResult<Prisma.$SentencePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sentences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sentences
     * const sentences = await prisma.sentence.findMany()
     * 
     * // Get first 10 Sentences
     * const sentences = await prisma.sentence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sentenceWithIdOnly = await prisma.sentence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SentenceFindManyArgs>(args?: SelectSubset<T, SentenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentencePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Sentence.
     * @param {SentenceCreateArgs} args - Arguments to create a Sentence.
     * @example
     * // Create one Sentence
     * const Sentence = await prisma.sentence.create({
     *   data: {
     *     // ... data to create a Sentence
     *   }
     * })
     * 
     */
    create<T extends SentenceCreateArgs>(args: SelectSubset<T, SentenceCreateArgs<ExtArgs>>): Prisma__SentenceClient<$Result.GetResult<Prisma.$SentencePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sentences.
     * @param {SentenceCreateManyArgs} args - Arguments to create many Sentences.
     * @example
     * // Create many Sentences
     * const sentence = await prisma.sentence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SentenceCreateManyArgs>(args?: SelectSubset<T, SentenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sentences and returns the data saved in the database.
     * @param {SentenceCreateManyAndReturnArgs} args - Arguments to create many Sentences.
     * @example
     * // Create many Sentences
     * const sentence = await prisma.sentence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sentences and only return the `id`
     * const sentenceWithIdOnly = await prisma.sentence.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SentenceCreateManyAndReturnArgs>(args?: SelectSubset<T, SentenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentencePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Sentence.
     * @param {SentenceDeleteArgs} args - Arguments to delete one Sentence.
     * @example
     * // Delete one Sentence
     * const Sentence = await prisma.sentence.delete({
     *   where: {
     *     // ... filter to delete one Sentence
     *   }
     * })
     * 
     */
    delete<T extends SentenceDeleteArgs>(args: SelectSubset<T, SentenceDeleteArgs<ExtArgs>>): Prisma__SentenceClient<$Result.GetResult<Prisma.$SentencePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Sentence.
     * @param {SentenceUpdateArgs} args - Arguments to update one Sentence.
     * @example
     * // Update one Sentence
     * const sentence = await prisma.sentence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SentenceUpdateArgs>(args: SelectSubset<T, SentenceUpdateArgs<ExtArgs>>): Prisma__SentenceClient<$Result.GetResult<Prisma.$SentencePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sentences.
     * @param {SentenceDeleteManyArgs} args - Arguments to filter Sentences to delete.
     * @example
     * // Delete a few Sentences
     * const { count } = await prisma.sentence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SentenceDeleteManyArgs>(args?: SelectSubset<T, SentenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sentences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sentences
     * const sentence = await prisma.sentence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SentenceUpdateManyArgs>(args: SelectSubset<T, SentenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sentence.
     * @param {SentenceUpsertArgs} args - Arguments to update or create a Sentence.
     * @example
     * // Update or create a Sentence
     * const sentence = await prisma.sentence.upsert({
     *   create: {
     *     // ... data to create a Sentence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sentence we want to update
     *   }
     * })
     */
    upsert<T extends SentenceUpsertArgs>(args: SelectSubset<T, SentenceUpsertArgs<ExtArgs>>): Prisma__SentenceClient<$Result.GetResult<Prisma.$SentencePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sentences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentenceCountArgs} args - Arguments to filter Sentences to count.
     * @example
     * // Count the number of Sentences
     * const count = await prisma.sentence.count({
     *   where: {
     *     // ... the filter for the Sentences we want to count
     *   }
     * })
    **/
    count<T extends SentenceCountArgs>(
      args?: Subset<T, SentenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SentenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sentence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SentenceAggregateArgs>(args: Subset<T, SentenceAggregateArgs>): Prisma.PrismaPromise<GetSentenceAggregateType<T>>

    /**
     * Group by Sentence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentenceGroupByArgs} args - Group by arguments.
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
      T extends SentenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SentenceGroupByArgs['orderBy'] }
        : { orderBy?: SentenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SentenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSentenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sentence model
   */
  readonly fields: SentenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sentence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SentenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transcript<T extends TranscriptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TranscriptDefaultArgs<ExtArgs>>): Prisma__TranscriptClient<$Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Sentence model
   */ 
  interface SentenceFieldRefs {
    readonly id: FieldRef<"Sentence", 'Int'>
    readonly content: FieldRef<"Sentence", 'String'>
    readonly startTime: FieldRef<"Sentence", 'Float'>
    readonly endTime: FieldRef<"Sentence", 'Float'>
    readonly isHighlight: FieldRef<"Sentence", 'Boolean'>
    readonly transcriptId: FieldRef<"Sentence", 'Int'>
    readonly createdAt: FieldRef<"Sentence", 'DateTime'>
    readonly updatedAt: FieldRef<"Sentence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sentence findUnique
   */
  export type SentenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sentence
     */
    select?: SentenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentenceInclude<ExtArgs> | null
    /**
     * Filter, which Sentence to fetch.
     */
    where: SentenceWhereUniqueInput
  }

  /**
   * Sentence findUniqueOrThrow
   */
  export type SentenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sentence
     */
    select?: SentenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentenceInclude<ExtArgs> | null
    /**
     * Filter, which Sentence to fetch.
     */
    where: SentenceWhereUniqueInput
  }

  /**
   * Sentence findFirst
   */
  export type SentenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sentence
     */
    select?: SentenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentenceInclude<ExtArgs> | null
    /**
     * Filter, which Sentence to fetch.
     */
    where?: SentenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sentences to fetch.
     */
    orderBy?: SentenceOrderByWithRelationInput | SentenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sentences.
     */
    cursor?: SentenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sentences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sentences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sentences.
     */
    distinct?: SentenceScalarFieldEnum | SentenceScalarFieldEnum[]
  }

  /**
   * Sentence findFirstOrThrow
   */
  export type SentenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sentence
     */
    select?: SentenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentenceInclude<ExtArgs> | null
    /**
     * Filter, which Sentence to fetch.
     */
    where?: SentenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sentences to fetch.
     */
    orderBy?: SentenceOrderByWithRelationInput | SentenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sentences.
     */
    cursor?: SentenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sentences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sentences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sentences.
     */
    distinct?: SentenceScalarFieldEnum | SentenceScalarFieldEnum[]
  }

  /**
   * Sentence findMany
   */
  export type SentenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sentence
     */
    select?: SentenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentenceInclude<ExtArgs> | null
    /**
     * Filter, which Sentences to fetch.
     */
    where?: SentenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sentences to fetch.
     */
    orderBy?: SentenceOrderByWithRelationInput | SentenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sentences.
     */
    cursor?: SentenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sentences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sentences.
     */
    skip?: number
    distinct?: SentenceScalarFieldEnum | SentenceScalarFieldEnum[]
  }

  /**
   * Sentence create
   */
  export type SentenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sentence
     */
    select?: SentenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Sentence.
     */
    data: XOR<SentenceCreateInput, SentenceUncheckedCreateInput>
  }

  /**
   * Sentence createMany
   */
  export type SentenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sentences.
     */
    data: SentenceCreateManyInput | SentenceCreateManyInput[]
  }

  /**
   * Sentence createManyAndReturn
   */
  export type SentenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sentence
     */
    select?: SentenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sentences.
     */
    data: SentenceCreateManyInput | SentenceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sentence update
   */
  export type SentenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sentence
     */
    select?: SentenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Sentence.
     */
    data: XOR<SentenceUpdateInput, SentenceUncheckedUpdateInput>
    /**
     * Choose, which Sentence to update.
     */
    where: SentenceWhereUniqueInput
  }

  /**
   * Sentence updateMany
   */
  export type SentenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sentences.
     */
    data: XOR<SentenceUpdateManyMutationInput, SentenceUncheckedUpdateManyInput>
    /**
     * Filter which Sentences to update
     */
    where?: SentenceWhereInput
  }

  /**
   * Sentence upsert
   */
  export type SentenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sentence
     */
    select?: SentenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Sentence to update in case it exists.
     */
    where: SentenceWhereUniqueInput
    /**
     * In case the Sentence found by the `where` argument doesn't exist, create a new Sentence with this data.
     */
    create: XOR<SentenceCreateInput, SentenceUncheckedCreateInput>
    /**
     * In case the Sentence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SentenceUpdateInput, SentenceUncheckedUpdateInput>
  }

  /**
   * Sentence delete
   */
  export type SentenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sentence
     */
    select?: SentenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentenceInclude<ExtArgs> | null
    /**
     * Filter which Sentence to delete.
     */
    where: SentenceWhereUniqueInput
  }

  /**
   * Sentence deleteMany
   */
  export type SentenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sentences to delete
     */
    where?: SentenceWhereInput
  }

  /**
   * Sentence without action
   */
  export type SentenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sentence
     */
    select?: SentenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentenceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VideoScalarFieldEnum: {
    id: 'id',
    title: 'title',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const TranscriptScalarFieldEnum: {
    id: 'id',
    videoId: 'videoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TranscriptScalarFieldEnum = (typeof TranscriptScalarFieldEnum)[keyof typeof TranscriptScalarFieldEnum]


  export const SentenceScalarFieldEnum: {
    id: 'id',
    content: 'content',
    startTime: 'startTime',
    endTime: 'endTime',
    isHighlight: 'isHighlight',
    transcriptId: 'transcriptId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SentenceScalarFieldEnum = (typeof SentenceScalarFieldEnum)[keyof typeof SentenceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: IntFilter<"Video"> | number
    title?: StringFilter<"Video"> | string
    url?: StringFilter<"Video"> | string
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
    transcript?: XOR<TranscriptNullableRelationFilter, TranscriptWhereInput> | null
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transcript?: TranscriptOrderByWithRelationInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    title?: StringFilter<"Video"> | string
    url?: StringFilter<"Video"> | string
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
    transcript?: XOR<TranscriptNullableRelationFilter, TranscriptWhereInput> | null
  }, "id">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Video"> | number
    title?: StringWithAggregatesFilter<"Video"> | string
    url?: StringWithAggregatesFilter<"Video"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
  }

  export type TranscriptWhereInput = {
    AND?: TranscriptWhereInput | TranscriptWhereInput[]
    OR?: TranscriptWhereInput[]
    NOT?: TranscriptWhereInput | TranscriptWhereInput[]
    id?: IntFilter<"Transcript"> | number
    videoId?: IntFilter<"Transcript"> | number
    createdAt?: DateTimeFilter<"Transcript"> | Date | string
    updatedAt?: DateTimeFilter<"Transcript"> | Date | string
    video?: XOR<VideoRelationFilter, VideoWhereInput>
    sentences?: SentenceListRelationFilter
  }

  export type TranscriptOrderByWithRelationInput = {
    id?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    video?: VideoOrderByWithRelationInput
    sentences?: SentenceOrderByRelationAggregateInput
  }

  export type TranscriptWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    videoId?: number
    AND?: TranscriptWhereInput | TranscriptWhereInput[]
    OR?: TranscriptWhereInput[]
    NOT?: TranscriptWhereInput | TranscriptWhereInput[]
    createdAt?: DateTimeFilter<"Transcript"> | Date | string
    updatedAt?: DateTimeFilter<"Transcript"> | Date | string
    video?: XOR<VideoRelationFilter, VideoWhereInput>
    sentences?: SentenceListRelationFilter
  }, "id" | "videoId">

  export type TranscriptOrderByWithAggregationInput = {
    id?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TranscriptCountOrderByAggregateInput
    _avg?: TranscriptAvgOrderByAggregateInput
    _max?: TranscriptMaxOrderByAggregateInput
    _min?: TranscriptMinOrderByAggregateInput
    _sum?: TranscriptSumOrderByAggregateInput
  }

  export type TranscriptScalarWhereWithAggregatesInput = {
    AND?: TranscriptScalarWhereWithAggregatesInput | TranscriptScalarWhereWithAggregatesInput[]
    OR?: TranscriptScalarWhereWithAggregatesInput[]
    NOT?: TranscriptScalarWhereWithAggregatesInput | TranscriptScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transcript"> | number
    videoId?: IntWithAggregatesFilter<"Transcript"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Transcript"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transcript"> | Date | string
  }

  export type SentenceWhereInput = {
    AND?: SentenceWhereInput | SentenceWhereInput[]
    OR?: SentenceWhereInput[]
    NOT?: SentenceWhereInput | SentenceWhereInput[]
    id?: IntFilter<"Sentence"> | number
    content?: StringFilter<"Sentence"> | string
    startTime?: FloatFilter<"Sentence"> | number
    endTime?: FloatFilter<"Sentence"> | number
    isHighlight?: BoolFilter<"Sentence"> | boolean
    transcriptId?: IntFilter<"Sentence"> | number
    createdAt?: DateTimeFilter<"Sentence"> | Date | string
    updatedAt?: DateTimeFilter<"Sentence"> | Date | string
    transcript?: XOR<TranscriptRelationFilter, TranscriptWhereInput>
  }

  export type SentenceOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isHighlight?: SortOrder
    transcriptId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transcript?: TranscriptOrderByWithRelationInput
  }

  export type SentenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SentenceWhereInput | SentenceWhereInput[]
    OR?: SentenceWhereInput[]
    NOT?: SentenceWhereInput | SentenceWhereInput[]
    content?: StringFilter<"Sentence"> | string
    startTime?: FloatFilter<"Sentence"> | number
    endTime?: FloatFilter<"Sentence"> | number
    isHighlight?: BoolFilter<"Sentence"> | boolean
    transcriptId?: IntFilter<"Sentence"> | number
    createdAt?: DateTimeFilter<"Sentence"> | Date | string
    updatedAt?: DateTimeFilter<"Sentence"> | Date | string
    transcript?: XOR<TranscriptRelationFilter, TranscriptWhereInput>
  }, "id">

  export type SentenceOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isHighlight?: SortOrder
    transcriptId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SentenceCountOrderByAggregateInput
    _avg?: SentenceAvgOrderByAggregateInput
    _max?: SentenceMaxOrderByAggregateInput
    _min?: SentenceMinOrderByAggregateInput
    _sum?: SentenceSumOrderByAggregateInput
  }

  export type SentenceScalarWhereWithAggregatesInput = {
    AND?: SentenceScalarWhereWithAggregatesInput | SentenceScalarWhereWithAggregatesInput[]
    OR?: SentenceScalarWhereWithAggregatesInput[]
    NOT?: SentenceScalarWhereWithAggregatesInput | SentenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sentence"> | number
    content?: StringWithAggregatesFilter<"Sentence"> | string
    startTime?: FloatWithAggregatesFilter<"Sentence"> | number
    endTime?: FloatWithAggregatesFilter<"Sentence"> | number
    isHighlight?: BoolWithAggregatesFilter<"Sentence"> | boolean
    transcriptId?: IntWithAggregatesFilter<"Sentence"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Sentence"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sentence"> | Date | string
  }

  export type VideoCreateInput = {
    title: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transcript?: TranscriptCreateNestedOneWithoutVideoInput
  }

  export type VideoUncheckedCreateInput = {
    id?: number
    title: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transcript?: TranscriptUncheckedCreateNestedOneWithoutVideoInput
  }

  export type VideoUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transcript?: TranscriptUpdateOneWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transcript?: TranscriptUncheckedUpdateOneWithoutVideoNestedInput
  }

  export type VideoCreateManyInput = {
    id?: number
    title: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranscriptCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    video: VideoCreateNestedOneWithoutTranscriptInput
    sentences?: SentenceCreateNestedManyWithoutTranscriptInput
  }

  export type TranscriptUncheckedCreateInput = {
    id?: number
    videoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sentences?: SentenceUncheckedCreateNestedManyWithoutTranscriptInput
  }

  export type TranscriptUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutTranscriptNestedInput
    sentences?: SentenceUpdateManyWithoutTranscriptNestedInput
  }

  export type TranscriptUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentences?: SentenceUncheckedUpdateManyWithoutTranscriptNestedInput
  }

  export type TranscriptCreateManyInput = {
    id?: number
    videoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TranscriptUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranscriptUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentenceCreateInput = {
    content: string
    startTime: number
    endTime: number
    isHighlight?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transcript: TranscriptCreateNestedOneWithoutSentencesInput
  }

  export type SentenceUncheckedCreateInput = {
    id?: number
    content: string
    startTime: number
    endTime: number
    isHighlight?: boolean
    transcriptId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SentenceUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    startTime?: FloatFieldUpdateOperationsInput | number
    endTime?: FloatFieldUpdateOperationsInput | number
    isHighlight?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transcript?: TranscriptUpdateOneRequiredWithoutSentencesNestedInput
  }

  export type SentenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    startTime?: FloatFieldUpdateOperationsInput | number
    endTime?: FloatFieldUpdateOperationsInput | number
    isHighlight?: BoolFieldUpdateOperationsInput | boolean
    transcriptId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentenceCreateManyInput = {
    id?: number
    content: string
    startTime: number
    endTime: number
    isHighlight?: boolean
    transcriptId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SentenceUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    startTime?: FloatFieldUpdateOperationsInput | number
    endTime?: FloatFieldUpdateOperationsInput | number
    isHighlight?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    startTime?: FloatFieldUpdateOperationsInput | number
    endTime?: FloatFieldUpdateOperationsInput | number
    isHighlight?: BoolFieldUpdateOperationsInput | boolean
    transcriptId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TranscriptNullableRelationFilter = {
    is?: TranscriptWhereInput | null
    isNot?: TranscriptWhereInput | null
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type VideoRelationFilter = {
    is?: VideoWhereInput
    isNot?: VideoWhereInput
  }

  export type SentenceListRelationFilter = {
    every?: SentenceWhereInput
    some?: SentenceWhereInput
    none?: SentenceWhereInput
  }

  export type SentenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TranscriptCountOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TranscriptAvgOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
  }

  export type TranscriptMaxOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TranscriptMinOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TranscriptSumOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TranscriptRelationFilter = {
    is?: TranscriptWhereInput
    isNot?: TranscriptWhereInput
  }

  export type SentenceCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isHighlight?: SortOrder
    transcriptId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SentenceAvgOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    transcriptId?: SortOrder
  }

  export type SentenceMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isHighlight?: SortOrder
    transcriptId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SentenceMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isHighlight?: SortOrder
    transcriptId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SentenceSumOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    transcriptId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TranscriptCreateNestedOneWithoutVideoInput = {
    create?: XOR<TranscriptCreateWithoutVideoInput, TranscriptUncheckedCreateWithoutVideoInput>
    connectOrCreate?: TranscriptCreateOrConnectWithoutVideoInput
    connect?: TranscriptWhereUniqueInput
  }

  export type TranscriptUncheckedCreateNestedOneWithoutVideoInput = {
    create?: XOR<TranscriptCreateWithoutVideoInput, TranscriptUncheckedCreateWithoutVideoInput>
    connectOrCreate?: TranscriptCreateOrConnectWithoutVideoInput
    connect?: TranscriptWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TranscriptUpdateOneWithoutVideoNestedInput = {
    create?: XOR<TranscriptCreateWithoutVideoInput, TranscriptUncheckedCreateWithoutVideoInput>
    connectOrCreate?: TranscriptCreateOrConnectWithoutVideoInput
    upsert?: TranscriptUpsertWithoutVideoInput
    disconnect?: TranscriptWhereInput | boolean
    delete?: TranscriptWhereInput | boolean
    connect?: TranscriptWhereUniqueInput
    update?: XOR<XOR<TranscriptUpdateToOneWithWhereWithoutVideoInput, TranscriptUpdateWithoutVideoInput>, TranscriptUncheckedUpdateWithoutVideoInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TranscriptUncheckedUpdateOneWithoutVideoNestedInput = {
    create?: XOR<TranscriptCreateWithoutVideoInput, TranscriptUncheckedCreateWithoutVideoInput>
    connectOrCreate?: TranscriptCreateOrConnectWithoutVideoInput
    upsert?: TranscriptUpsertWithoutVideoInput
    disconnect?: TranscriptWhereInput | boolean
    delete?: TranscriptWhereInput | boolean
    connect?: TranscriptWhereUniqueInput
    update?: XOR<XOR<TranscriptUpdateToOneWithWhereWithoutVideoInput, TranscriptUpdateWithoutVideoInput>, TranscriptUncheckedUpdateWithoutVideoInput>
  }

  export type VideoCreateNestedOneWithoutTranscriptInput = {
    create?: XOR<VideoCreateWithoutTranscriptInput, VideoUncheckedCreateWithoutTranscriptInput>
    connectOrCreate?: VideoCreateOrConnectWithoutTranscriptInput
    connect?: VideoWhereUniqueInput
  }

  export type SentenceCreateNestedManyWithoutTranscriptInput = {
    create?: XOR<SentenceCreateWithoutTranscriptInput, SentenceUncheckedCreateWithoutTranscriptInput> | SentenceCreateWithoutTranscriptInput[] | SentenceUncheckedCreateWithoutTranscriptInput[]
    connectOrCreate?: SentenceCreateOrConnectWithoutTranscriptInput | SentenceCreateOrConnectWithoutTranscriptInput[]
    createMany?: SentenceCreateManyTranscriptInputEnvelope
    connect?: SentenceWhereUniqueInput | SentenceWhereUniqueInput[]
  }

  export type SentenceUncheckedCreateNestedManyWithoutTranscriptInput = {
    create?: XOR<SentenceCreateWithoutTranscriptInput, SentenceUncheckedCreateWithoutTranscriptInput> | SentenceCreateWithoutTranscriptInput[] | SentenceUncheckedCreateWithoutTranscriptInput[]
    connectOrCreate?: SentenceCreateOrConnectWithoutTranscriptInput | SentenceCreateOrConnectWithoutTranscriptInput[]
    createMany?: SentenceCreateManyTranscriptInputEnvelope
    connect?: SentenceWhereUniqueInput | SentenceWhereUniqueInput[]
  }

  export type VideoUpdateOneRequiredWithoutTranscriptNestedInput = {
    create?: XOR<VideoCreateWithoutTranscriptInput, VideoUncheckedCreateWithoutTranscriptInput>
    connectOrCreate?: VideoCreateOrConnectWithoutTranscriptInput
    upsert?: VideoUpsertWithoutTranscriptInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutTranscriptInput, VideoUpdateWithoutTranscriptInput>, VideoUncheckedUpdateWithoutTranscriptInput>
  }

  export type SentenceUpdateManyWithoutTranscriptNestedInput = {
    create?: XOR<SentenceCreateWithoutTranscriptInput, SentenceUncheckedCreateWithoutTranscriptInput> | SentenceCreateWithoutTranscriptInput[] | SentenceUncheckedCreateWithoutTranscriptInput[]
    connectOrCreate?: SentenceCreateOrConnectWithoutTranscriptInput | SentenceCreateOrConnectWithoutTranscriptInput[]
    upsert?: SentenceUpsertWithWhereUniqueWithoutTranscriptInput | SentenceUpsertWithWhereUniqueWithoutTranscriptInput[]
    createMany?: SentenceCreateManyTranscriptInputEnvelope
    set?: SentenceWhereUniqueInput | SentenceWhereUniqueInput[]
    disconnect?: SentenceWhereUniqueInput | SentenceWhereUniqueInput[]
    delete?: SentenceWhereUniqueInput | SentenceWhereUniqueInput[]
    connect?: SentenceWhereUniqueInput | SentenceWhereUniqueInput[]
    update?: SentenceUpdateWithWhereUniqueWithoutTranscriptInput | SentenceUpdateWithWhereUniqueWithoutTranscriptInput[]
    updateMany?: SentenceUpdateManyWithWhereWithoutTranscriptInput | SentenceUpdateManyWithWhereWithoutTranscriptInput[]
    deleteMany?: SentenceScalarWhereInput | SentenceScalarWhereInput[]
  }

  export type SentenceUncheckedUpdateManyWithoutTranscriptNestedInput = {
    create?: XOR<SentenceCreateWithoutTranscriptInput, SentenceUncheckedCreateWithoutTranscriptInput> | SentenceCreateWithoutTranscriptInput[] | SentenceUncheckedCreateWithoutTranscriptInput[]
    connectOrCreate?: SentenceCreateOrConnectWithoutTranscriptInput | SentenceCreateOrConnectWithoutTranscriptInput[]
    upsert?: SentenceUpsertWithWhereUniqueWithoutTranscriptInput | SentenceUpsertWithWhereUniqueWithoutTranscriptInput[]
    createMany?: SentenceCreateManyTranscriptInputEnvelope
    set?: SentenceWhereUniqueInput | SentenceWhereUniqueInput[]
    disconnect?: SentenceWhereUniqueInput | SentenceWhereUniqueInput[]
    delete?: SentenceWhereUniqueInput | SentenceWhereUniqueInput[]
    connect?: SentenceWhereUniqueInput | SentenceWhereUniqueInput[]
    update?: SentenceUpdateWithWhereUniqueWithoutTranscriptInput | SentenceUpdateWithWhereUniqueWithoutTranscriptInput[]
    updateMany?: SentenceUpdateManyWithWhereWithoutTranscriptInput | SentenceUpdateManyWithWhereWithoutTranscriptInput[]
    deleteMany?: SentenceScalarWhereInput | SentenceScalarWhereInput[]
  }

  export type TranscriptCreateNestedOneWithoutSentencesInput = {
    create?: XOR<TranscriptCreateWithoutSentencesInput, TranscriptUncheckedCreateWithoutSentencesInput>
    connectOrCreate?: TranscriptCreateOrConnectWithoutSentencesInput
    connect?: TranscriptWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TranscriptUpdateOneRequiredWithoutSentencesNestedInput = {
    create?: XOR<TranscriptCreateWithoutSentencesInput, TranscriptUncheckedCreateWithoutSentencesInput>
    connectOrCreate?: TranscriptCreateOrConnectWithoutSentencesInput
    upsert?: TranscriptUpsertWithoutSentencesInput
    connect?: TranscriptWhereUniqueInput
    update?: XOR<XOR<TranscriptUpdateToOneWithWhereWithoutSentencesInput, TranscriptUpdateWithoutSentencesInput>, TranscriptUncheckedUpdateWithoutSentencesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TranscriptCreateWithoutVideoInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    sentences?: SentenceCreateNestedManyWithoutTranscriptInput
  }

  export type TranscriptUncheckedCreateWithoutVideoInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sentences?: SentenceUncheckedCreateNestedManyWithoutTranscriptInput
  }

  export type TranscriptCreateOrConnectWithoutVideoInput = {
    where: TranscriptWhereUniqueInput
    create: XOR<TranscriptCreateWithoutVideoInput, TranscriptUncheckedCreateWithoutVideoInput>
  }

  export type TranscriptUpsertWithoutVideoInput = {
    update: XOR<TranscriptUpdateWithoutVideoInput, TranscriptUncheckedUpdateWithoutVideoInput>
    create: XOR<TranscriptCreateWithoutVideoInput, TranscriptUncheckedCreateWithoutVideoInput>
    where?: TranscriptWhereInput
  }

  export type TranscriptUpdateToOneWithWhereWithoutVideoInput = {
    where?: TranscriptWhereInput
    data: XOR<TranscriptUpdateWithoutVideoInput, TranscriptUncheckedUpdateWithoutVideoInput>
  }

  export type TranscriptUpdateWithoutVideoInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentences?: SentenceUpdateManyWithoutTranscriptNestedInput
  }

  export type TranscriptUncheckedUpdateWithoutVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentences?: SentenceUncheckedUpdateManyWithoutTranscriptNestedInput
  }

  export type VideoCreateWithoutTranscriptInput = {
    title: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoUncheckedCreateWithoutTranscriptInput = {
    id?: number
    title: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoCreateOrConnectWithoutTranscriptInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutTranscriptInput, VideoUncheckedCreateWithoutTranscriptInput>
  }

  export type SentenceCreateWithoutTranscriptInput = {
    content: string
    startTime: number
    endTime: number
    isHighlight?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SentenceUncheckedCreateWithoutTranscriptInput = {
    id?: number
    content: string
    startTime: number
    endTime: number
    isHighlight?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SentenceCreateOrConnectWithoutTranscriptInput = {
    where: SentenceWhereUniqueInput
    create: XOR<SentenceCreateWithoutTranscriptInput, SentenceUncheckedCreateWithoutTranscriptInput>
  }

  export type SentenceCreateManyTranscriptInputEnvelope = {
    data: SentenceCreateManyTranscriptInput | SentenceCreateManyTranscriptInput[]
  }

  export type VideoUpsertWithoutTranscriptInput = {
    update: XOR<VideoUpdateWithoutTranscriptInput, VideoUncheckedUpdateWithoutTranscriptInput>
    create: XOR<VideoCreateWithoutTranscriptInput, VideoUncheckedCreateWithoutTranscriptInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutTranscriptInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutTranscriptInput, VideoUncheckedUpdateWithoutTranscriptInput>
  }

  export type VideoUpdateWithoutTranscriptInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateWithoutTranscriptInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentenceUpsertWithWhereUniqueWithoutTranscriptInput = {
    where: SentenceWhereUniqueInput
    update: XOR<SentenceUpdateWithoutTranscriptInput, SentenceUncheckedUpdateWithoutTranscriptInput>
    create: XOR<SentenceCreateWithoutTranscriptInput, SentenceUncheckedCreateWithoutTranscriptInput>
  }

  export type SentenceUpdateWithWhereUniqueWithoutTranscriptInput = {
    where: SentenceWhereUniqueInput
    data: XOR<SentenceUpdateWithoutTranscriptInput, SentenceUncheckedUpdateWithoutTranscriptInput>
  }

  export type SentenceUpdateManyWithWhereWithoutTranscriptInput = {
    where: SentenceScalarWhereInput
    data: XOR<SentenceUpdateManyMutationInput, SentenceUncheckedUpdateManyWithoutTranscriptInput>
  }

  export type SentenceScalarWhereInput = {
    AND?: SentenceScalarWhereInput | SentenceScalarWhereInput[]
    OR?: SentenceScalarWhereInput[]
    NOT?: SentenceScalarWhereInput | SentenceScalarWhereInput[]
    id?: IntFilter<"Sentence"> | number
    content?: StringFilter<"Sentence"> | string
    startTime?: FloatFilter<"Sentence"> | number
    endTime?: FloatFilter<"Sentence"> | number
    isHighlight?: BoolFilter<"Sentence"> | boolean
    transcriptId?: IntFilter<"Sentence"> | number
    createdAt?: DateTimeFilter<"Sentence"> | Date | string
    updatedAt?: DateTimeFilter<"Sentence"> | Date | string
  }

  export type TranscriptCreateWithoutSentencesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    video: VideoCreateNestedOneWithoutTranscriptInput
  }

  export type TranscriptUncheckedCreateWithoutSentencesInput = {
    id?: number
    videoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TranscriptCreateOrConnectWithoutSentencesInput = {
    where: TranscriptWhereUniqueInput
    create: XOR<TranscriptCreateWithoutSentencesInput, TranscriptUncheckedCreateWithoutSentencesInput>
  }

  export type TranscriptUpsertWithoutSentencesInput = {
    update: XOR<TranscriptUpdateWithoutSentencesInput, TranscriptUncheckedUpdateWithoutSentencesInput>
    create: XOR<TranscriptCreateWithoutSentencesInput, TranscriptUncheckedCreateWithoutSentencesInput>
    where?: TranscriptWhereInput
  }

  export type TranscriptUpdateToOneWithWhereWithoutSentencesInput = {
    where?: TranscriptWhereInput
    data: XOR<TranscriptUpdateWithoutSentencesInput, TranscriptUncheckedUpdateWithoutSentencesInput>
  }

  export type TranscriptUpdateWithoutSentencesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutTranscriptNestedInput
  }

  export type TranscriptUncheckedUpdateWithoutSentencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentenceCreateManyTranscriptInput = {
    id?: number
    content: string
    startTime: number
    endTime: number
    isHighlight?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SentenceUpdateWithoutTranscriptInput = {
    content?: StringFieldUpdateOperationsInput | string
    startTime?: FloatFieldUpdateOperationsInput | number
    endTime?: FloatFieldUpdateOperationsInput | number
    isHighlight?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentenceUncheckedUpdateWithoutTranscriptInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    startTime?: FloatFieldUpdateOperationsInput | number
    endTime?: FloatFieldUpdateOperationsInput | number
    isHighlight?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentenceUncheckedUpdateManyWithoutTranscriptInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    startTime?: FloatFieldUpdateOperationsInput | number
    endTime?: FloatFieldUpdateOperationsInput | number
    isHighlight?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TranscriptCountOutputTypeDefaultArgs instead
     */
    export type TranscriptCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TranscriptCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VideoDefaultArgs instead
     */
    export type VideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VideoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TranscriptDefaultArgs instead
     */
    export type TranscriptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TranscriptDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SentenceDefaultArgs instead
     */
    export type SentenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SentenceDefaultArgs<ExtArgs>

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