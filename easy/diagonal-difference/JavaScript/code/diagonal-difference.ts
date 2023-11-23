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

async function main(): Promise<void> {
	//Get the number of rows
	const numOfRows: number = parseInt(
		await questionAsync('How many rows in your matrix? '),
		10
	);
	//Turn that into a 2d array
	const twoDimArr: number[][] = [];
	let i: number = 0;
	while (i < numOfRows) {
		const newRow: number[] = (await questionAsync(''))
			.trim()
			.split(' ')
			.map((str) => parseInt(str, 10));
		twoDimArr.push(newRow);
		i++;
	}
	console.log(diagonalDiff(twoDimArr));
	r1.close();
	// Get the abs diagonal difference
}

export function diagonalDiff(twoDimArr: number[][]): number {
	const n: number = twoDimArr.length;
	let rtlSum: number = 0;
	let ltrSum: number = 0;

	for (let i = 0; i < n; i++) {
		rtlSum += twoDimArr[i][i];
		ltrSum += twoDimArr[i][n - 1 - i];
	}

	return Math.abs(rtlSum - ltrSum);
}
main();
