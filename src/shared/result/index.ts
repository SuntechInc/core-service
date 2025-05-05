// src/shared/result/index.ts
export type Result<E = Error, T = void> = Ok<T, E> | Err<E, T>;

export class Ok<T = void, E = Error> {
  readonly ok = true as const;
  readonly err = false as const;

  constructor(private readonly value: T) {}

  isOk(): this is Ok<T, E>   { return true; }
  isErr(): this is Err<E, T> { return false; }

  unwrap(): T { return this.value; }

  map<U>(fn: (val: T) => U): Result<E, U> {
    return ok(fn(this.value));
  }

  async mapAsync<U>(fn: (val: T) => Promise<U>): Promise<Result<E, U>> {
    return ok(await fn(this.value));
  }
}

export class Err<E = Error, T = void> {
  readonly ok = false as const;
  readonly err = true as const;

  constructor(private readonly error: E) {}

  isOk(): this is Ok<T, E>   { return false; }
  isErr(): this is Err<E, T> { return true; }

  unwrapErr(): E { return this.error; }

  mapErr<F>(fn: (err: E) => F): Result<F, T> {
    return err(fn(this.error));
  }
}

// ---------- Factory helpers ----------
export function ok<T>(value: T): Result<never, T> {
  return new Ok<T, never>(value);
}

export function err<E = Error>(error: E): Result<E, never> {
  return new Err<E, never>(error);
}
