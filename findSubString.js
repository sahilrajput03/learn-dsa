let givenStr = 'abcdef'
let sampleStr1 = 'cde'
let sampleStr2 = 'cdeZZ'

console.log('sampleStr1: found at index:', matchFound(givenStr, sampleStr1))
console.log('sampleStr2: found at index:', matchFound(givenStr, sampleStr2))

function matchFound(givenStr, sampleStr) {
	let given = givenStr.split('') // get chars in array
	let sample = sampleStr.split('') // get chars in array

	for (let i = 0; i < given.length; i++) {
		for (let j = 0; j < sample.length; j++) {
			let g = given[i]
			let s = sample[j]
			let charMatched = g === s
			if (charMatched) {
				const isEnd = j === sample.length - 1
				if (isEnd) {
					return i - sample.length + 1
				} else {
					i++
				}
			} else {
				break
			}
		}
	}
	return -1
}
