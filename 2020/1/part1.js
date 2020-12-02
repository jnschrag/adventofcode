const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");
let output = text
  .split("\n")
  .map(d => +d)
  .sort((a,b) => a - b);


// Sort the numbers and start at the ends and work your way in so we can eliminate options quicker than if we looped over them.

let startIndex = 0
let endIndex = output.length - 1
let result
while (true) {
  const sum = output[startIndex] + output[endIndex]

  // Winner winner!
  if (sum === 2020 ) {
    result = output[startIndex] * output[endIndex]
    break
  }

  // Too small, so increment to a larger number. If the sum is too big, we need to bring our larger number down.
  if (sum < 2020) {
    startIndex++
  } 
  else {
    endIndex--
  }
}
console.log(result)
