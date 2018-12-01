const input = require('./input')
let string = input.input()

var total = 0
var array = string.split('\n')
array.forEach(function(row) {
	row = row.split(' ')
	if ( doesNotHaveDuplicates(row) ) {
		total++
	}
})

console.log(total)

// Checks for duplicates because sets are inherently unique
function doesNotHaveDuplicates(array) {
    return ( new Set(array) ).size == array.length;
}