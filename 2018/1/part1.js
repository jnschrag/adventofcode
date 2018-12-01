var fs = require("fs");
var path = require('path');
var text = fs.readFileSync(path.join(__dirname) + '/input.txt', 'utf8');
var textByLine = text.split("\n").map(d => +d).reduce((acc, curr) => acc + curr, 0)
console.log(textByLine)
