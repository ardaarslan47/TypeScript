console.log(Math.round(3.1232149134));
var pi = 3.14;
var stringVariable = "STRING";
var movieTitle = "Amadeus";
var newString = "HEY";
// newString = 0;
var nothing = null;
var foo = undefined;
// foo = 12
// foo = 'String'
foo = undefined;
var isFunny = true;
isFunny = false;
var complicated = 12;
complicated = "hey";
complicated = function () {
    console.log("hey");
};
complicated();
complicated.toUpperCase();
complicated = "SA";
var movies = ["Arrival", "Amadeus", "Spirited Away"];
var foundMovie;
movies.forEach(function (element) {
    if (element === "Arrival") {
        foundMovie = element;
    }
});
function square(num) {
    return num * num;
}
console.log(square(3));
