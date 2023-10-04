// keyword: using `never` type and mapped type
// Iterating key in T: P in keyof T

// Iterating and chekcing type => Iterating + Condition

type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type Person = {
  id: string;
  name: string;
  species: "earth";
};

type OmitedPerson = MyOmit<Person, "id" | "name">; // {species: "earth"}
