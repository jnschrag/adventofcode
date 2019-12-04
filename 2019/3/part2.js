const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");
const input = text.split("\n");

const test1 = ["R8,U5,L5,D3", "U7,R6,D4,L4"];
const test2 = [
  "R75,D30,R83,U83,L12,D49,R71,U7,L72",
  "U62,R66,U55,R34,D71,R55,D58,R83"
];
const formatted = convertInput(input);
const intersections = findIntersections(formatted);
const closest = findClosestIntersection(intersections);
console.log(`The closest intersection is: ${closest}`);

function convertInput(string) {
  return string.map(s => s.split(","));
}

function findIntersections(wires) {
  let routes = {};
  let intersections = {};

  for (let wireI = 0; wireI < wires.length; wireI++) {
    const wire = wires[wireI];
    let curr = { x: 0, y: 0 };
    let next = { x: 0, y: 0 };

    for (let i = 0; i < wire.length; i++) {
      const step = wire[i];
      const value = +step.slice(1);
      switch (step[0]) {
        case "U":
          next.y += value;
          break;
        case "D":
          next.y -= value;
          break;
        case "L":
          next.x -= value;
          break;
        case "R":
          next.x += value;
          break;
      }

      const xDist = Math.abs(next.x - curr.x);
      for (let i = 1; i <= xDist; i++) {
        if (next.x > curr.x) {
          curr.x++;
        } else if (next.x < curr.x) {
          curr.x--;
        }
        if (wireI > 0 && routes[curr.x + "_" + curr.y]) {
          intersections[curr.x + "_" + curr.y] = true;
        } else {
          routes[curr.x + "_" + curr.y] = true;
        }
      }

      const yDist = Math.abs(next.y - curr.y);
      for (let i = 1; i <= yDist; i++) {
        if (next.y > curr.y) {
          curr.y++;
        } else if (next.y < curr.y) {
          curr.y--;
        }
        if (wireI > 0 && routes[curr.x + "_" + curr.y]) {
          intersections[curr.x + "_" + curr.y] = true;
        }
        routes[curr.x + "_" + curr.y] = true;
      }
    }
  }
  return intersections;
}

function findClosestIntersection(intersections) {
  const distances = Object.keys(intersections)
    .map(d => {
      let coords = d.split("_");
      return Math.abs(+coords[0]) + Math.abs(+coords[1]);
    })
    .sort((a, b) => a - b);
  return Math.abs(distances[0]);
}
