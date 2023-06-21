console.log(Math.round(3.1232149134));
const pi: number = 3.14;
const stringVariable: string = "STRING";

let movieTitle: string = "Amadeus";

let newString = "HEY";
// newString = 0;

let nothing = null;
let foo = undefined;

// foo = 12
// foo = 'String'
foo = undefined;

let isFunny = true;
isFunny = false;

let complicated: any = 12;
complicated = "hey";
complicated = function () {
  console.log("hey");
};
complicated();
complicated.toUpperCase();
complicated = "SA";

const movies = ["Arrival", "Amadeus", "Spirited Away"];
let foundMovie: string;

movies.forEach((element) => {
  if (element === "Arrival") {
    foundMovie = element;
  }
});

function square(num: number) {
  return num * num;
}

console.log(square(3));

const greet = (name: string) => {
  return `Hi ${name}`;
};

greet("Arda");

class User {
  name: string;
  age: number;
  isFunny: boolean;

  constructor(name: string, age: number, isFunny: boolean) {
    (this.name = name), (this.age = age), (this.isFunny = isFunny);
  }
}

const arda = new User("Arda", 31, true);

const colors = ["red", "blue", "yellow"];
const capitalizedColors: string[] = colors.map((color) => {
  return color.toUpperCase();
});

const printTwiceVoid = (msg: string): void => {
  console.log(msg);
  console.log(msg);
};

const giveError = (msg: string): never => {
  throw new Error(msg);
};
