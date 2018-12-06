const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");
let input = text.split("");

const reactPolymer = polymer => {
  let stack = []

  for (let char of polymer) {
    const current = stack[stack.length - 1]

    if (current && current.toLowerCase() === char.toLowerCase() && current !== char) {
      stack.pop()
    } else {
      stack.push(char)
    }
  }
  return stack.length
}

const upperLetters = [...new Set(input.map(l => l.toUpperCase()))]

let lengths = {}

upperLetters.forEach(letter => {
  let polymer = input.filter(l => l !== letter && l !== letter.toLowerCase())
  lengths[letter] = reactPolymer(polymer)
})

const shortestPolymer = lengths[Object.keys(lengths).reduce((a, b) => lengths[a] < lengths[b] ? a : b)]
console.log(shortestPolymer)