const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");
const input = text.split(",").map(d => +d);
const output = parse(input);
console.log(output);

function parse(input) {
  const target = 19690720;
  let noun;
  let verb;

  for (let n = 0; n <= 99; n++) {
    for (let v = 0; v <= 99; v++) {
      let modified = [...input];

      // Make modifications to input based on instructions
      modified[1] = n; // noun
      modified[2] = v; // verb

      modified = updateInput(modified);

      if (modified[0] === target) {
        noun = n;
        verb = v;
        break;
      }
    }
  }

  return 100 * noun + verb;
}

function updateInput(input) {
  for (let i = 0; i < input.length; i += 4) {
    const optCode = input[i];
    if (optCode === 99) {
      break;
    }

    const input1Val = input[input[i + 1]];
    const input2Val = input[input[i + 2]];
    let outputVal;

    if (optCode === 1) {
      outputVal = input1Val + input2Val;
    } else if (optCode === 2) {
      outputVal = input1Val * input2Val;
    }

    input[input[i + 3]] = outputVal;
  }
  return input;
}
