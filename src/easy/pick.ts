// key point: using `in` keyword
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Exmaple
type Person = {
  id: string;
  name: string;
  species: "earth";
};

type PickedPerson = MyPick<Person, "id" | "name">; // { id: string, name: string }
