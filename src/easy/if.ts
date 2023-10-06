export type MyIf<C extends boolean, T, F> = C extends true ? T : F;

type A1 = MyIf<true, "a", "b">; // "a"
