const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");
let output = text.split("\n").map((d) => {
  let dir = d.split(" ");
  return [dir[0], +dir[1]];
});

let horizontal = 0;
let depth = 0;
let aim = 0;

output.forEach((d) => {
  // aim
  if (d[0] == "down") {
    aim += d[1];
  } else if (d[0] == "up") {
    aim -= d[1];
  } // horizontal & depth
  else {
    horizontal += d[1];
    depth += d[1] * aim;
  }
});

console.log(horizontal, depth, aim);

console.log(horizontal * depth);
