const input = require('./input')
let string = input.input()

var total = 0
var array = string.split('\n')
array.forEach(function(row) {
	row = row.split(' ')
	rowSorted = row.map(w => w.split('').sort().join())
	if ( doesNotHaveDuplicates(row) && doesNotHaveDuplicates(rowSorted) ) {
		total++
	}
})

console.log(total)

// Checks for duplicates because sets are inherently unique
function doesNotHaveDuplicates(array) {
    return ( new Set(array) ).size == array.length;
}