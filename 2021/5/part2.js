const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/test.txt", "utf8");
let input = text.split("\n").map((d) => {
  let points = d.split(" -> ");
  let arr = [];
  points.forEach((point) => {
    let coord = point.split(",");
    arr.push({
      x: +coord[0],
      y: +coord[1],
    });
  });
  return arr;
});

let lines = input;

let points = {};

lines.forEach((line) => {
  let sameCoord = "x";
  let diffCoord = "y";
  if (line[0].y === line[1].y) {
    sameCoord = "y";
    diffCoord = "x";
  }

  line.sort((a, b) => a[diffCoord] - b[diffCoord]);

  let point1 = line[0][diffCoord];
  let point2 = line[1][diffCoord];

  for (let j = point1; j <= point2; j++) {
    let coord =
      sameCoord == "x"
        ? `${line[0][sameCoord]},${j}`
        : `${j},${line[0][sameCoord]}`;

    if (!points[coord]) {
      points[coord] = 0;
    }
    points[coord]++;
  }
});

const overlaps = Object.values(points).filter((d) => d >= 2).length;
console.log(points);
console.log(overlaps);
