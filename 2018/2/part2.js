const fs = require("fs");
const path = require('path');
const text = fs.readFileSync(path.join(__dirname) + '/input.txt', 'utf8');
const input = text.split("\n")

let check = true

for (let line of input) {
  const comparisonLines = input.filter(d => d !== line)

  for (let entry of comparisonLines) {
    let result = findDifferences(line, entry)
    if (result.numDiff === 1) {
      let string = line.slice(0, result.posDiff) + line.slice(result.posDiff + 1)
      console.log(string)
      check = false
      break
    }
  }
  if (!check) break
}

function findDifferences(string1, string2) {
  if (string1 === string2) return

  const length = Math.max(string1.length, string2.length)
  let numDiff = 0
  let posDiff = 0

  for (let i = 0; i <= length; i++) {
    if (string1[i] !== string2[i]) {
      numDiff++
      posDiff = i
    }
  }
  return {numDiff: numDiff, posDiff: posDiff}
}
