// key point: using infer keyword and conditional type

// U: type of return value
// infer U : infer the type of U

type MyReturnType<T> = T extends (args: any) => infer U ? U : never;
type Return = MyReturnType<() => "hello world">; // should be "hello world"
