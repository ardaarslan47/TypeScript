const array: number[] = [1, 2];

array.push(3, 4, 5);

let names: Array<string> = ["Arda"];

type Cords = {
  x: number;
  y: number;
  z?: number;
};

let allCords: Array<Cords> = [
  { x: 10, y: 20 },
  { x: 20, y: 22, z: 15 },
  { x: 15, y: 124, z: -123 },
];

const getCord = (cord: Cords): Cords => {
  return typeof cord.z === "undefined"
    ? { x: cord.x, y: cord.y }
    : { x: cord.x, y: cord.y, z: cord.z };
};

allCords.forEach((cord) => {
  console.log(
    getCord(cord).x,
    getCord(cord).y,
    typeof cord.z !== "undefined" ? getCord(cord).z : ""
  );
});

const board: Array<Array<string>> = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];
