type age = number | string;

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { lat: 30, long: 400 };

console.log(typeof coordinates.lat);

const printAge = (...age: Array<age>): string => {
  let result: string = "";
  age.forEach((element) => {
    result += `Your age is ${element} `;
  });
  return result;
};
console.log(printAge(12, "123", 124, "three"));

const calculateTaxedPrice = (price: number | string, tax: number): number => {
  return typeof price === "number"
    ? (price * (tax + 100)) / 100
    : (+price.replace("$", "") * (tax + 100)) / 100;
};

console.log(calculateTaxedPrice("$34", 20));
console.log(calculateTaxedPrice("34$", 20));
console.log(calculateTaxedPrice("34$asd", 20));
console.log(calculateTaxedPrice(100, 20));
console.log(calculateTaxedPrice(45, 7));

const stuff: any[] = [1, 2, 3, {}, true, "as"];

const stuffButNotAnyStuff: Array<string | number> = [1, 2, 3, "four"];

const coords: (Point | Loc)[] = [];
coords.push({ x: 20, y: 10 });

let zero: 0 = 0;
// zero = 2

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";

type DayOfWeek = "Monday" | "Sunday" | "Thursday" | "Wednesday" | "Saturday";

let today: DayOfWeek = 'Wednesday'