const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");
const input = text.split(",").map(d => +d);
const output = parse(input);
console.log(output);

function parse(input) {
  // Make modifications to input based on instructions
  input[1] = 12;
  input[2] = 2;

  let isRunning = true;
  let i = 0;

  let modified = [...input];

  while (isRunning) {
    const optCode = modified[i];
    if (optCode === 99) {
      isRunning = false;
      break;
    }

    const input1Val = modified[modified[i + 1]];
    const input2Val = modified[modified[i + 2]];
    let outputVal;

    if (optCode === 1) {
      outputVal = input1Val + input2Val;
    } else if (optCode === 2) {
      outputVal = input1Val * input2Val;
    }

    modified[modified[i + 3]] = outputVal;

    i = i + 4;
  }

  // Return first position
  return modified[0];
}
