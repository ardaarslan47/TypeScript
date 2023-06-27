const nums: Array<number> = [];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
console.dir(inputEl);

inputEl.value = "Arda";

// const button = document.querySelector('.btn') as HTMLButtonElement | null
const button = document.querySelector<HTMLButtonElement>(".btn");

button?.addEventListener("click", (e) => {
  e.preventDefault;
});

function numberIdentity(item: number): number {
  return item;
}

// function identity(item: any): any{
//     return item
// }

function identity<T>(item: T): string | number {
  return typeof item === "number" ? item * 2 : typeof item;
}

console.log(identity<string>("selam"));
console.log(identity<boolean>(true));
console.log(identity<number>(31));
console.log(identity(inputEl));
console.log(identity(123));

function getRandomElement<T>(array: T[]): T {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const array1: string[] = ["Arda", "Azize"];
const array2: number[] = [1, 312, 125, 124123, 1212];
const array3: number[] = [1];
const array4: boolean[] = [true, false];

interface Cat {
  name: string;
  breed: string;
}

const array5: Cat[] = [
  { name: "çaki", breed: "orman kedisi" },
  { name: "soso", breed: "tekir" },
];

console.log(
  getRandomElement<string>(array1),
  getRandomElement<number>(array2),
  getRandomElement<number>(array3),
  getRandomElement<boolean>(array4),
  getRandomElement<Cat>(array5)
);

// dont neet to write type if clear enough
getRandomElement(array5);
getRandomElement(array4);
const btn2 = document.querySelector("button");

// if not clear enough use type
const btn3 = document.querySelector<HTMLButtonElement>(".btn");

// arrow function
const itedtify = <T>(element: T): T => {
  return element;
};

function merge<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}

const comboObj = merge({ name: "colt" }, { pets: ["blue", "eltons"] });
// const comboObj2 = merge({name: 'arda'}, 3)

interface Lengthy {
  length: number;
}

const getLength = <T extends Lengthy>(thing: T): number => {
  return thing.length;
};
getLength("Asda");
getLength(["asfa", 31, { name: "arda" }, true]);
// getLength(4124)
//  getLength({ name: true });

const makeEmptyArray = <T = number>(): T[] => {
  return [];
};
const strings = makeEmptyArray<string>();
// strings.push(3)
const nubmers = makeEmptyArray();

interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class Playlist<T extends object> {
  public queue: T[] = [];
  add(ell: T): void {
    this.queue.push(ell);
  }
}

const song = new Playlist();
song.add({ title: "asfasf", artist: "asdafs", something: 132412 });
const videos = new Playlist<Video>();
videos.add({ title: "asdfs", creator: "afisdasd", resolution: "ajsfan" });
