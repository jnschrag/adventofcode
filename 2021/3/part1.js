const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");
let output = text.split("\n");

let gamma = [];
let episilon = [];

for (let i = 0; i < output[0].length; i++) {
  let bits = [0, 0];
  for (let j = 0; j < output.length; j++) {
    const bit = +output[j][i];
    bits[bit]++;
  }

  gamma[i] = getMaxValueIndex(bits);
  episilon[i] = gamma[i] === 1 ? 0 : 1;
}

const result = convertToBinaryString(gamma) * convertToBinaryString(episilon);

function getMaxValueIndex(bits) {
  return bits.reduce((iMax, curr, i, arr) => (curr > arr[iMax] ? i : iMax), 0);
}

function convertToBinaryString(arr) {
  return parseInt(arr.join(""), 2);
}

console.log(result);
