const dog = {
  name: "Elton",
  breed: "Shepherd",
  age: 0.5,
};

function printName(person: { first: string; last: string }): void {
  console.log(person.first, person.last);
}

printName({ first: "Arda", last: "Arslan" });

let coordinate: { x: number; y: number } = {
  x: 30,
  y: 10,
};

const randomCoordinate = (): { x: number; y: number } => {
  return { x: Math.random(), y: Math.random() };
};

// printName({ first: "Mick", last: "Jagger", age: 30 });
const mick = { first: "Mick", last: "Jagger", age: 30 };
printName(mick);

type Coordinate = {
  x: number;
  y: number;
  z?: number;
};

let coordinate2: Coordinate = { x: 30, y: 20 };

type Name = {
  first: string;
  last: string;
};

function printName2(person: Name): string {
  return person.first + person.last;
}

// printName2({ first: "Mick", last: "Jagger", age: 30 });
// const mick2: Name = { first: "mick", last: "jagger", age: 30 };
// printName2(mick2);

type Person = {
  name: string;
  age: number;
  parentName: {
    mom: string;
    dad: string;
  };
};

const describePerson = (person: Person): string => {
  return `${person.name}, ${person.age}, mom: ${person.parentName.mom}, dad: ${person.parentName.dad}`;
};

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 1203,
  username: "Arda",
};

// user.id = 213079042

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle &
  Colorful & {
    expression?: string;
  };

const angryFace: ColorfulCircle = {
  radius: 4,
  color: "red",
  expression: 'Angry'
};
