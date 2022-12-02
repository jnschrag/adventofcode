const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");

console.log(text);

/**
 * A - Rock
 * B - Paper
 * C - Scissors
 *
 * X - Lose
 * Y - Draw
 * Z - Win
 *
 * 0 - Lost
 * 3 - Draw
 * 6 - Won
 */

const scoring = {
  X: 0, // lose
  Y: 3, // draw
  Z: 6, // win
};

const key = {
  // Rock
  A: {
    X: "C", // Scissors
    Y: "A", // Rock
    Z: "B", // Paper
  },
  // Paper
  B: {
    X: "A",
    Y: "B",
    Z: "C",
  },
  // Scissors
  C: {
    X: "B",
    Y: "C",
    Z: "A",
  },
};

const points = {
  A: 1,
  B: 2,
  C: 3,
};

let total = text
  .trimEnd()
  .split("\n")
  .map((d) => d.split(" "))
  .reduce((acc, curr) => {
    const o = curr[0];
    const u = curr[1];

    const round = points[key[o][u]] + scoring[u];

    console.log(curr, round);

    return acc + round;
  }, 0);

console.log(total);
