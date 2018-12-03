const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input-test.txt", "utf8");
const input = text.split("\n").map(line =>
  line
    .split("@")[1]
    .split(":")
    .map(d => d.trim())
);

let coords = {};

input.forEach(line => {
  const start = line[0].split(",");
  const leftStart = +start[0];
  const topStart = +start[1];
  const size = line[1].split("x");
  const width = +size[0] + leftStart;
  const height = +size[1] + topStart;
  console.log(leftStart, topStart, width, height);

  for (let y = topStart; y <= height; y++) {
    for (let x = leftStart; x <= width; x++) {
      let pos = x + "," + y;
      if (coords[pos]) {
        coords[pos] += 1;
        return;
      }
      coords[pos] = 1;
    }
  }
});

console.log(input);
console.log(coords);
