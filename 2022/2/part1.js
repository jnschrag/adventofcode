const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");

console.log(text);

/**
 * A - Rock
 * B - Paper
 * C - Scissors
 *
 * X - Rock, 1
 * Y - Paper, 2
 * Z - Scissors, 3
 *
 * 0 - Lost
 * 3 - Draw
 * 6 - Won
 */

const key = {
  // Rock
  A: {
    X: 3,
    Y: 6,
    Z: 0,
  },
  // Paper
  B: {
    X: 0,
    Y: 3,
    Z: 6,
  },
  // Scissors
  C: {
    X: 6,
    Y: 0,
    Z: 3,
  },
};

const points = {
  X: 1,
  Y: 2,
  Z: 3,
};

let total = text
  .trimEnd()
  .split("\n")
  .map((d) => d.split(" "))
  .reduce((acc, curr) => {
    const o = curr[0];
    const u = curr[1];

    const round = key[o][u] + points[u];

    console.log(curr, round);

    return acc + round;
  }, 0);

console.log(total);
