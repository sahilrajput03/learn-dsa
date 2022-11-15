
# DSA problem solving in JS


Input reading libraries: [inquirer](https://github.com/SBoudrias/Inquirer.js), [readline-sync](https://www.npmjs.com/package/readline-sync)

[Source: nodejs docs - Accept-input-from-the-command-line-in-nodejs](https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs)

- Using native readline via async code:

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


## Tree Traversal orders

![tree-traversal--Geeks-post-order](https://user-images.githubusercontent.com/31458531/200115410-78c65161-4768-441c-86ff-109edd14d8f9.png)
