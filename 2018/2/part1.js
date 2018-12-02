const fs = require("fs");
const path = require('path');
const text = fs.readFileSync(path.join(__dirname) + '/input.txt', 'utf8');
const input = text.split("\n").map(d => d.split(''))

let x2 = 0
let x3 = 0

input.forEach(line => {
  var counted = [...new Set(Object.values(line.reduce((allLetters, letter) => {
    if (letter in allLetters) {
      allLetters[letter]++
    } else {
      allLetters[letter] = 1
    }
    return allLetters
  }, {})))]
  x2 += counted.filter(d => d === 2).length
  x3 += counted.filter(d => d === 3).length
})

let checksum = x2 * x3
console.log(checksum)
