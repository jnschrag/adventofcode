const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");

// Turn input text into an array of arrays
let reports = text.split("\n").map((d) => {
  return d.split(" ").map((d) => +d);
});

console.log(reports);

/**
 * Check if reports are safe
 * - Levels must all be increasing or all decreasing
 * - Any two adjacent levels differ by at least one and at most three.
 */

const checkReportLevels = (levels) => {
  let isSafe = true;
  let direction;
  let numLevels = levels.length;

  for (let i = 0; i < numLevels - 1; i++) {
    const level = levels[i];
    const nextLevel = levels[i + 1];

    if (level === nextLevel) {
      return false;
    }

    const diff = level - nextLevel;
    const diffAbs = Math.abs(diff);

    if (diffAbs < 1 || diffAbs > 3) {
      return false;
    }

    const newDirection = diff > 0 ? "decrease" : "increase";
    if (i === 0) {
      direction = newDirection;
    }

    // console.log(level, nextLevel, diff, direction, newDirection);

    if (direction !== newDirection) {
      return false;
    }
  }

  return isSafe;
};

let safeReports = 0;

for (let i = 0; i < reports.length; i++) {
  const levels = reports[i];
  const isSafe = checkReportLevels(levels);

  if (isSafe) {
    safeReports++;
  }

  // console.log(levels, isSafe);
}

console.log("num safeReports: ", safeReports);
