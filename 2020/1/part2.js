const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/test.txt", "utf8");
let output = text
  .split("\n")
  .map(d => +d)
  .sort((a,b) => a - b);


// Not solved. womp womp.

let startIndex = 0
let endIndex = output.length - 1
let result
while (true) {
  console.log({startIndex, endIndex})

  let options = output.slice(startIndex + 1, endIndex)
  let numOptions = options.length
  let tempEndIndex = endIndex

  for (let i = 0; i < numOptions; i++) {
    let sum = output[startIndex] + output[tempEndIndex] + options[i]

    // Winner winner!
    if (sum === 2020 ) {
      result = output[startIndex] * output[tempEndIndex] * options[i]
      break
    }

    if (i == numOptions - 1) {
      tempEndIndex--
      i = 0
      options = output.slice(startIndex + 1, tempEndIndex)
      numOptions = options.length
    }
  }

  startIndex++
}
console.log(result)
