const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");
let output = text
  .split("\n")
  .map(d => calcFuelPerModule(d))
  .reduce((acc, curr) => acc + curr, 0);
console.log(output);

function calcFuelPerModule(mass) {
  return Math.floor(+mass / 3) - 2;
}
