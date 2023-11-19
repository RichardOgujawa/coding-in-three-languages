//Necessary imports
const readline = require('readline');
// The number of commands the user would like to perform
let numOfCommands: number;
//The list the user creates and modifies
let user_list: number[] = [];
const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// Create a function which takes in the query we want to include i the terminal question, and then outuput the resolved answer, which is the user's input
function questionAsync(query: string): Promise<string> {
	return new Promise((resolve) => {
		r1.question(query, (answer: string) => {
			resolve(answer);
		});
	});
}

//Create an async recursive function which calls the question Async for each command the user has to input.
async function getCommands(count: number) {
	if (count < numOfCommands) {
		//If the user inputs doesn't put right/expected kind of data then tell them to input it again.
		const command: string = await questionAsync(
			'What command would you like to execute now?'
		);
		const commandArr = command.trim().split(' ');
		checkCommand(commandArr, user_list);
		await getCommands(count + 1);
	}
}

//Function to perform the command the user wants
export function checkCommand(
	commandArray: string[],
	user_list: number[]
): number[] | string {
	const commandArrayInts: number[] = commandArray
		.slice(1)
		.map((str) => parseInt(str, 10));
	switch (commandArray[0].trim()) {
		case 'insert':
			user_list.splice(commandArrayInts[0], 0, commandArrayInts[1]);
			break;
		case 'remove':
			const index: number = user_list.indexOf(commandArrayInts[0]);
			//If it has an index of anything greater than that means it has a position in the array
			if (index > -1) {
				user_list.splice(index, 1);
			}
			break;
		case 'append':
			user_list.push(commandArrayInts[0]);
			break;
		case 'pop':
			user_list.pop();
			break;
		case 'sort':
			user_list.sort((a, b) => a - b);
			break;
		case 'reverse':
			user_list.reverse();
			break;
		case 'print':
			return user_list;
		default:
			return "Command doesn't exist";
	}
	return user_list;
}

async function main() {
	numOfCommands = parseInt(
		await questionAsync('How many commands do you want to execute?')
	);
	getCommands(0);
}

main();
