# Learn DSA

## Quick Links:

- **❤️DSA Course notes on Gist: [Click here](https://gist.github.com/sahilrajput03/1298a80f3097a56b6304bffde8853287)**
- **Learn Algorithms: [Click here](/learn-algorithms.md)**
- ❤️ [https://github.com/trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms)
- Motivation:
	- DSA Motivation - I Solved 1583 Leetcode Questions Here's What I Learned | Prime Reacts: [Click here](https://www.youtube.com/watch?v=vHua-t_8hrA)
	- [github.com/mihir0699/DSA-Sheet-Solutions](https://github.com/mihir0699/DSA-Sheet-Solutions)

## What O()?

Lovely Answers: [Click here](https://stackoverflow.com/questions/1909307/what-does-on-mean?answertab=scoredesc#tab-top)

# DSA problem solving in JS

Input reading libraries:
- [inquirer](https://github.com/SBoudrias/Inquirer.js) (17.1k*)
- [readline-sync](https://www.npmjs.com/package/readline-sync) (750*, and its archived on github)
- Using native readline via async code. Source: [nodejs docs - Accept-input-from-the-command-line-in-nodejs](https://nodejs.dev/en/learn/accept-input-from-the-command-line-in-nodejs/)

	```js
	const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout,
	})

	const read = () => new Promise((resolve) => readline.question(``, resolve))

	const main = async () => {
		console.log(await read())
		readline.close() // This is not redundant!

		// do your programming stuff here!
		console.log('program code here....')
	}
	main()
	```
