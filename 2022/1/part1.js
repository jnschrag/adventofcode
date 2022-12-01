const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");

let output = text.split("\n\n").map((d) => {
  const totalValue = d.split("\n").reduce((acc, curr) => acc + +curr, 0);

  return totalValue;
});

// Get largest value
const max = Math.max(...output);
console.log(max);
