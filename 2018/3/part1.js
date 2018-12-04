const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");
const input = text.split("\n").map(line =>
  line
    .split("@")[1]
    .split(":")
    .map(d => d.trim())
);

let coords = {};

input.forEach((line, i) => {
  const start = line[0].split(",");
  const leftStart = +start[0];
  const topStart = +start[1];
  const size = line[1].split("x");
  const width = +size[0] + leftStart;
  const height = +size[1] + topStart;

  for (var x = leftStart; x < width; x++) {
    for (var y = topStart; y < height; y++) {
      let pos = x + "," + y;
      if (coords[pos]) {
        coords[pos] = coords[pos] + 1;
      } else {
        coords[pos] = 1;
      }
    }
  }
});

let result = Object.values(coords).filter(coord => coord > 1).length;

console.log(result);
console.log(coords);
