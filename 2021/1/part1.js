const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");
let output = text.split("\n").map((d) => +d);

let prevValue;
let numIncreases = 0;

output.forEach((output) => {
  if (!prevValue) {
    prevValue = output;
    return;
  }

  if (prevValue < output) {
    numIncreases++;
  }
  prevValue = output;
});

console.log(numIncreases);
