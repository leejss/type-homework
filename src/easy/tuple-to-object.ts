// T[number]: get type of element in T

const tuple1 = ["tesla", "sony", "apple"] as const;
type TupleToObject<T extends PropertyKey[]> = {
  [P in T[number]]: P;
};
