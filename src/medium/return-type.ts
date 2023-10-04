// key point: using infer keyword and conditional type

type MyReturnType<T> = T extends (args: any) => infer U ? U : never;
type Return = MyReturnType<() => "hello world">; // should be "hello world"
