// key points : use infer to get the first element of the array and use spread

export type Includes<T extends unknown[], U> = T extends [infer Head, ...infer Tail] ? (Head extends U ? true : Includes<Tail, U>) : false;

type A = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
type B = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Santana">; // expected to be `true`
