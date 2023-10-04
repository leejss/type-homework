// key point: indexing with number in type
// conditional type

// Generic will shape input type
type FirstArray<T> = T extends [infer U, ...any] ? U : never;
type FirstArray2<T extends unknown[]> = T extends [] ? never : T[0];

type First = FirstArray<[1, 2, 3]>; // expected to be 1
type First2 = FirstArray2<[1, 2, 3]>; // expected to be 1
