// keyword: using `never` type and mapped type
// Iterating key in T: P in keyof T

// Iterating and chekcing type => Iterating + Condition

// P in keyof T => iterate all keys in T
// as => type assertion, set type of P
// P extends K => check if P is in K
type MyOmit<T, K extends keyof T> = {
  // Remapping the type of key
  [P in keyof T as P extends K ? never : P]: T[P];
};

type Person = {
  id: string;
  name: string;
  species: "earth";
};

type OmitedPerson = MyOmit<Person, "id" | "name">; // {species: "earth"}
