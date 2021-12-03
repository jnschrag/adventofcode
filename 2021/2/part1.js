const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");
let output = text.split("\n").map((d) => {
  let dir = d.split(" ");
  return [dir[0], +dir[1]];
});

let horizontal = 0;
let depth = 0;

output.forEach((d) => {
  if (d[0] == "forward") {
    horizontal += d[1];
  } else if (d[0] == "up") {
    depth -= d[1];
  } else {
    depth += d[1];
  }
});

console.log(horizontal, depth);

console.log(horizontal * depth);
