let givenStr = 'abcdcdef'
let sampleStr1 = 'cde'
let sampleStr2 = 'cdeZZ'

console.log('sampleStr1: found at index:', matchFound(givenStr, sampleStr1))
console.log('sampleStr2: found at index:', matchFound(givenStr, sampleStr2))

function matchFound(givenStr, sampleStr) {
	let given = givenStr.split('') // get chars in array
	let sample = sampleStr.split('') // get chars in array

	for (let i = 0; i < given.length; i++) {
		let iTmp = i
		for (let j = 0; j < sample.length; j++) {
			let g = given[iTmp],
				s = sample[j]
			let charMatched = g === s
			if (charMatched) {
				let isEnd = j === sample.length - 1
				if (isEnd) {
					return iTmp - sample.length + 1
				} else {
					iTmp++
				}
			} else {
				break
			}
		}
	}
	return -1
}
