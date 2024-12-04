const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");

// Turn input text into an array of arrays
let matrix = text.split("\n").map((d) => {
  d = d.split("   ");
  return [+d[0], +d[1]];
});
console.log(matrix);

// Split into left & right lists
let left = matrix.map((d) => d[0]).sort();
let right = matrix.map((d) => d[1]).sort();

console.log(left);
console.log(right);

// Create an object of each item in the right list & the number of times it appears
const numberAppearance = right.reduce((acc, curr) => {
  if (!acc[curr]) {
    const appearances = right.filter((d) => d === curr).length;
    acc[curr] = appearances;
  }

  return acc;
}, {});

console.log(numberAppearance);

// Determine how many times each value in the left array appears in the right array and sum that total.
let difference = left.reduce((acc, curr) => {
  const appearances = numberAppearance[curr] || 0;
  const score = curr * appearances;

  return acc + score;
}, 0);

// Answer
console.log(difference);
