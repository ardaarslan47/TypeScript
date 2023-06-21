var coordinates = { lat: 30, long: 400 };
console.log(typeof coordinates.lat);
var printAge = function () {
    var age = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        age[_i] = arguments[_i];
    }
    var result = "";
    age.forEach(function (element) {
        result += "Your age is ".concat(element, " ");
    });
    return result;
};
console.log(printAge(12, "123", 124, "three"));
var calculateTax = function (price, tax) {
    return typeof price === "number" ? (price * (tax + 100)) / 100 : (+price.replace("$", "") * (tax + 100)) / 100;
};
console.log(calculateTax('$34', 20));
console.log(calculateTax('34$', 20));
console.log(calculateTax('34$asd', 20));
console.log(calculateTax(100, 20));
console.log(calculateTax(45, 7));
