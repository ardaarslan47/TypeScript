"use strict";
const nums = [];
const inputEl = document.querySelector("#username");
console.dir(inputEl);
inputEl.value = "Arda";
// const button = document.querySelector('.btn') as HTMLButtonElement | null
const button = document.querySelector(".btn");
button === null || button === void 0 ? void 0 : button.addEventListener("click", (e) => {
    e.preventDefault;
});
function numberIdentity(item) {
    return item;
}
// function identity(item: any): any{
//     return item
// }
function identity(item) {
    return typeof item === "number" ? item * 2 : typeof item;
}
console.log(identity("selam"));
console.log(identity(true));
console.log(identity(31));
console.log(identity(inputEl));
console.log(identity(123));
function getRandomElement(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}
const array1 = ["Arda", "Azize"];
const array2 = [1, 312, 125, 124123, 1212];
const array3 = [1];
const array4 = [true, false];
const array5 = [
    { name: "çaki", breed: "orman kedisi" },
    { name: "soso", breed: "tekir" },
];
console.log(getRandomElement(array1), getRandomElement(array2), getRandomElement(array3), getRandomElement(array4), getRandomElement(array5));
// dont neet to write type if clear enough
getRandomElement(array5);
getRandomElement(array4);
const btn2 = document.querySelector("button");
// if not clear enough use type
const btn3 = document.querySelector(".btn");
// arrow function
const itedtify = (element) => {
    return element;
};
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: "colt" }, { pets: ["blue", "eltons"] });
const getLength = (thing) => {
    return thing.length;
};
getLength("Asda");
getLength(["asfa", 31, { name: "arda" }, true]);
// getLength(4124)
//  getLength({ name: true });
const makeEmptyArray = () => {
    return [];
};
const strings = makeEmptyArray();
// strings.push(3)
const nubmers = makeEmptyArray();
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(ell) {
        this.queue.push(ell);
    }
}
const song = new Playlist();
song.add({ title: "asfasf", artist: "asdafs", something: 132412 });
const videos = new Playlist();
videos.add({ title: "asdfs", creator: "afisdasd", resolution: "ajsfan" });
