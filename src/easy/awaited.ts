export type MyAwaited<T> = T extends PromiseLike<infer U> ? U : never;
export type MyAwaitedRecursive<T> = T extends PromiseLike<infer U> ? MyAwaitedRecursive<U> : T;

type X = Promise<string>;

type Y = MyAwaited<X>; // string

type Z = MyAwaitedRecursive<Promise<X>>; // string
