const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");

// Get 3 biggest values
let output = text
  .split("\n\n")
  .map((d) => {
    const totalValue = d.split("\n").reduce((acc, curr) => acc + +curr, 0);

    return totalValue;
  })
  .sort((a, b) => b - a);

const total = output[0] + output[1] + output[2];
console.log(total);
