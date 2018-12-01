var input = 312051;
var width = Math.ceil(Math.sqrt(input))
var farRight = Math.pow(width, 2)
var midpoint = Math.floor(width / 2)
var farLeft = farRight - width

console.log("farRight: " + farRight)
console.log("farLeft: " + farLeft)
console.log("width: " + width)
console.log("midpoint: " + midpoint)

// Calculate the distance between the far right number and the input
var x = (farRight - input) - midpoint
var y = midpoint * -1
console.log([x, y])

// Calculate the distance: |(a - c) + |(b - d)|
var result = Math.abs(0 - x) + Math.abs(0 - y)
console.log(result)