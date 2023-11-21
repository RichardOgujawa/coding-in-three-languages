const readline = require('readline');
const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
function questionAsync(query: string): Promise<string> {
	return new Promise<string>((resolve) => {
		r1.question(query, (answer: string) => resolve(answer));
	});
}

// Get user input function
async function getUserInput(): Promise<number[]> {
	// Get the number of numbers the user wants to enter
	const numOfNumsStr: string = await questionAsync(
		'How many numbers do you want to add up? '
	);
	const numOfNums: number = parseInt(numOfNumsStr);

	// Allow them to input that many numbers
	const arrElemsStr: string = await questionAsync('');
	const arrElemsIntArr: number[] = arrElemsStr
		.trim()
		.split(' ')
		.map((i) => parseInt(i));

	if (arrElemsIntArr.length != numOfNums) {
		getUserInput();
	}
	r1.close();
	return arrElemsIntArr;
}

export function aVeryBigSum(arr: number[]): number {
	const result = arr.reduce((accum, el) => accum + el, 0);
	return result;
}

async function main() {
	const arr_elems: number[] = await getUserInput();
	console.log(aVeryBigSum(arr_elems));
}
main();
