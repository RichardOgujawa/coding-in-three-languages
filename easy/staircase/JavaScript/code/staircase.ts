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

//Stairase function that prints hash symbols
export function staircase(n: number): void {
	for (let i = 1; i < n + 1; i++) {
		console.log(' '.repeat(n - i) + '#'.repeat(i));
	}
}

async function main(): Promise<void> {
	const n: number = parseInt(await questionAsync(''), 10);
	staircase(n);
	r1.close();
}

main();
