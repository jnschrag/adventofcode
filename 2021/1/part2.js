const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");
let output = text.split("\n").map((d) => +d);

let prevSum;
let numIncreases = 0;

for (let i = 0; i < output.length - 2; i++) {
  const curr = output[i];
  let sum = curr + output[i + 1] + output[i + 2];

  if (i === 0) {
    prevSum = sum;
    continue;
  }

  if (prevSum < sum) {
    numIncreases++;
  }
  prevSum = sum;
}

console.log(numIncreases);
