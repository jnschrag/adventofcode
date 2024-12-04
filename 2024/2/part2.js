const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/test.txt", "utf8");

// Turn input text into an array of arrays
let reports = text.split("\n").map((d) => {
  return d.split(" ").map((d) => +d);
});

console.log(reports);

/**
 * Check if reports are safe
 * - Levels must all be increasing or all decreasing
 * - Any two adjacent levels differ by at least one and at most three.
 * - Allow for one unsafe level.
 */

const rerunLevel = (levels, levelIndex, unSafeLevels) => {
  if (unSafeLevels > 1) {
    return false;
  }

  let newLevels = [...levels];
  newLevels.splice(levelIndex, 1);
  return checkReportLevels(newLevels);
};

const checkReportLevels = (levels) => {
  let isSafe = true;
  let direction;
  let numLevels = levels.length;
  let unSafeLevels = 0;
  // TODO: need to remove the offending level and then re-rerun to see if the level works, but you can only do this once.

  for (let i = 0; i < numLevels - 1; i++) {
    const level = levels[i];
    const nextLevel = levels[i + 1];

    if (level === nextLevel) {
      unSafeLevels++;
      let reRunIsSafe = rerunLevel(levels, i, unSafeLevels);

      if (!reRunIsSafe) {
        return false;
      }

      // return false;
    }

    const diff = level - nextLevel;
    const diffAbs = Math.abs(diff);

    if (diffAbs < 1 || diffAbs > 3) {
      unSafeLevels++;
      let reRunIsSafe = rerunLevel(levels, i);

      if (!reRunIsSafe) {
        return false;
      }
    }

    const newDirection = diff > 0 ? "decrease" : "increase";
    if (i === 0) {
      direction = newDirection;
    }

    // console.log(level, nextLevel, diff, direction, newDirection);

    if (direction !== newDirection) {
      unSafeLevels++;
      let reRunIsSafe = rerunLevel(levels, i);

      if (!reRunIsSafe) {
        return false;
      }
    }
  }

  // console.log("numUnsafeLevels", levels, unsafeLevels);

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
