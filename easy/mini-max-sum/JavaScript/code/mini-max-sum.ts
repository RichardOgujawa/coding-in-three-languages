const readline = require('readline');
const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
async function questionAsync(query: string): Promise<string> {
	return new Promise((resolve) => {
		r1.question(query, (answer: string) => resolve(answer));
	});
}

export function miniMaxSum(arr: number[]) {
	arr.sort();
	const min: number = arr.slice(0, -1).reduce((accum, num) => accum + num, 0);
	const max: number = arr.slice(1).reduce((accum, num) => accum + num, 0);
	console.log(min, max);
}

async function main() {
	const arr: Array<number> = (await questionAsync(''))
		.trim()
		.split(' ')
		.map((str) => parseInt(str, 10));
	miniMaxSum(arr);
	r1.close();
}

main();
