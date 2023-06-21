// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
var allProducts = [{ name: 'banana', price: 2.99 }, { name: 'apple', price: 1.99 }];
var getTotal = function (products) {
    return products.reduce(function (total, product) { return total + product.price; }, 0);
};
console.log(getTotal(allProducts));
