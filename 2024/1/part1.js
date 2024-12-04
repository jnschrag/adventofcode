const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");

// Turn input text into an array of arrays
let matrix = text.split("\n").map((d) => {
  d = d.split("   ");
  return [+d[0], +d[1]];
});
console.log(matrix);

// Split into sorted left & right lists
let left = matrix.map((d) => d[0]).sort();
let right = matrix.map((d) => d[1]).sort();

console.log(left);
console.log(right);

// Calculate the difference between the left & right values and sum to get the total difference for the entire list.
let difference = left.reduce((acc, curr, currIndex) => {
  const distance = Math.abs(curr - right[currIndex]);
  return acc + distance;
}, 0);

// Answer
console.log(difference);
