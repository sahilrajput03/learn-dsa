# Learn DSA

## Quick Links:

- **❤️DSA Course notes on Gist: [Click here](https://gist.github.com/sahilrajput03/1298a80f3097a56b6304bffde8853287)**
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

# Datastructures


## Data structures

1. Array (also known as list) - We can access items using index i.e, 0, 1 ,2, 3 etc.
2. Linked list - Similar to Arrays but each item points to next item in the list.
3. Stack (follows Last in first out principle) - Similar to list, but we use pop to get the last item we pushed to the list.
4. Queue (folows first in first out pinciple) - Similar to list, but we the first item pushed to array is served first i.e., dequeued.
5. Hash (also known as Map or Dictionary) - Similar to array, but we use but instead of index we use key names to access the values of each item so this gives us a colleciton of key-value pairs.
6. Trees (We can have data some nested relation)
7. Graph - Similar to trees but we can use unlimited number of ways to connect the nodes coz each node can have a edge which defines the relation between data points.
