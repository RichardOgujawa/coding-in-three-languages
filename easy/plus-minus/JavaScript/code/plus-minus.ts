const readline = require('readline');
const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
function questionAsync(query: string): Promise<string> {
	return new Promise((resolve) => {
		r1.question(query, (answer: string) => resolve(answer));
	});
}

// Create a function to generate the necessary result
export function plusMinus(arr: number[]): string[] {
	const len: number = arr.length;
	const positives: string = (arr.filter((i) => i > 0).length / len).toFixed(6);
	const negatives: string = (arr.filter((i) => i < 0).length / len).toFixed(6);
	const zeros: string = (arr.filter((i) => i == 0).length / len).toFixed(6);
	return [positives, negatives, zeros];
}

export function betterMethod(arr: number[]): string[] {
	const len = arr.length;
	// 'arr.filter().length/len' is repeated in each variable, so to make code more DRY, you could put that in an arrow function.
	const count = (condition: any) =>
		(arr.filter(condition).length / len).toFixed(6);
	return [
		count((i: number) => i > 0),
		count((i: number) => i < 0),
		count((i: number) => i === 0),
	];
}
async function main() {
	// Get the user's input
	const numOfEntries: number = parseInt(
		await questionAsync('How many entries do you want to input? '),
		10
	);
	const arr: number[] = (await questionAsync(''))
		.trim()
		.split(' ')
		.map((str) => parseInt(str, 10));
	for (const num of plusMinus(arr)) {
		console.log(num);
	}
	r1.close();
}

main();
