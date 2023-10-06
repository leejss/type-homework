// Key point : Union type and extends
// extends : check if type is assignable to another type
export type MyExclude<T, U> = T extends U ? never : T;

type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'

// "a" | "b" | "c" extends "a"
