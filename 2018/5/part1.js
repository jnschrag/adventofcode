const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");
let input = text.split("");

let deletions = 0

while (true) {
  let newPolymer = []
  let prevChar

  for (let i = 0; i < input.length; i++) {
    const char = input[i]
    if (prevChar == char.toLowerCase() || prevChar == char.toUpperCase()) {
      if (prevChar != char) {
        newPolymer.splice(i, 1)
        newPolymer.splice(i - 1, 1)
        prevChar = ""
        break;
      }
    }
    prevChar = char
  }

  if (input == newPolymer) {
    console.log(newPolymer)
    break
  }
  
  input = newPolymer
}
