var dog = {
    name: "Elton",
    breed: "Shepherd",
    age: 0.5,
};
function printName(person) {
    console.log(person.first, person.last);
}
printName({ first: "Arda", last: "Arslan" });
var coordinate = {
    x: 30,
    y: 10,
};
var randomCoordinate = function () {
    return { x: Math.random(), y: Math.random() };
};
// printName({ first: "Mick", last: "Jagger", age: 30 });
var mick = { first: "Mick", last: "Jagger", age: 30 };
printName(mick);
var coordinate2 = { x: 30, y: 20 };
function printName2(person) {
    return person.first + person.last;
}
var describePerson = function (person) {
    return "".concat(person.name, ", ").concat(person.age, ", mom: ").concat(person.parentName.mom, ", dad: ").concat(person.parentName.dad);
};
