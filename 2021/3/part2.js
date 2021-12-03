const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");
let output = text.split("\n");

let oxygen = determineRating({ type: "oxygen", output });
let co2 = determineRating({ type: "co2", output });

function determineRating({ type, output }) {
  let result = [];
  let values = [...output];

  for (let i = 0; i < output[0].length; i++) {
    let bits = [0, 0];

    for (let j = 0; j < values.length; j++) {
      const bit = +values[j][i];
      bits[bit]++;
    }

    result[i] = getMaxValueIndex(bits, type);
    values = values.filter((v) => v[i] == result[i]);

    if (values.length === 1) {
      break;
    }
  }

  return values;
}

console.log(oxygen, co2);

const result = convertToBinaryString(oxygen) * convertToBinaryString(co2);

function getMaxValueIndex(bits, type) {
  // Keep 1 if num of 0s === num of 1s
  if (type === "oxygen") {
    return bits.reduce(
      (iMax, curr, i, arr) => (curr >= arr[iMax] ? i : iMax),
      0
    );
  }
  // Keep 0 if num of 0s === num of 1s
  return bits.reduce((iMax, curr, i, arr) => (curr < arr[iMax] ? i : iMax), 0);
}

function convertToBinaryString(arr) {
  return parseInt(arr.join(""), 2);
}

console.log(result);
