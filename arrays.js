var array = [1, 2];
array.push(3, 4, 5);
var names = ["Arda"];
var allCords = [
    { x: 10, y: 20 },
    { x: 20, y: 22, z: 15 },
    { x: 15, y: 124, z: -123 },
];
var getCord = function (cord) {
    return typeof cord.z === "undefined"
        ? { x: cord.x, y: cord.y }
        : { x: cord.x, y: cord.y, z: cord.z };
};
allCords.forEach(function (cord) {
    console.log(getCord(cord).x, getCord(cord).y, typeof cord.z !== "undefined" ? getCord(cord).z : '');
});
