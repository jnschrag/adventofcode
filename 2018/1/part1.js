const fs = require("fs");
const path = require('path');
const text = fs.readFileSync(path.join(__dirname) + '/input.txt', 'utf8');
let output = text.split("\n").map(d => +d).reduce((acc, curr) => acc + curr, 0)
console.log(output)
