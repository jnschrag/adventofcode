const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");
const input = text.split("\n").map(line => {
  let parts = line.split("@")
  let coords = parts[1]
    .split(":")
    .map(d => d.trim())
  return {id: parts[0].trim(), info: coords, coords: []}
}
);

let coords = {};

input.forEach(line => {
  const start = line.info[0].split(",");
  const leftStart = +start[0];
  const topStart = +start[1];
  const size = line.info[1].split("x");
  const width = +size[0] + leftStart;
  const height = +size[1] + topStart;

  for (var x = leftStart; x < width; x++) {
    for (var y = topStart; y < height; y++) {
      let pos = x + "," + y;
      line.coords.push(pos)
      if (coords[pos]) {
        coords[pos] = coords[pos] + 1;
      } else {
        coords[pos] = 1;
      }
    }
  }
});

for (let line of input) {
  if (line.coords.every(d => coords[d] === 1)) {
    console.log(line.id)
    return;
  }
}

