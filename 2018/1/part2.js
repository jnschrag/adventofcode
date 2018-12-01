const fs = require("fs");
const path = require('path');
const text = fs.readFileSync(path.join(__dirname) + '/input.txt', 'utf8');
const input = text.split("\n").map(d => +d);

// Checking object keys is faster than checking values in an array
let frequencies = {};
let currentFrequency = 0;

while (true) {
  for (const val of input) {
    currentFrequency += val;
    if (frequencies[currentFrequency]) {
      console.log(currentFrequency);
      return currentFrequency;
    }
    frequencies[currentFrequency] = true;
  }
}
