const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");
let output = text
  .split("\n")
  .map(d => calcFuel(d))
  .reduce((acc, curr) => acc + curr, 0);
console.log(output);

function calcFuel(mass) {
  let fuel = calcFuelPerModule(mass);
  if (fuel > 0) {
    let fuelFuel = calcFuel(fuel);
    if (fuelFuel > 0) {
      fuel += calcFuel(fuel);
    }
  }
  return fuel;
}

function calcFuelPerModule(mass) {
  mass = +mass;
  return Math.floor(mass / 3) - 2;
}
