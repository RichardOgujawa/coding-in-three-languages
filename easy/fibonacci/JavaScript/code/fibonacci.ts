const readline = require('readline');
const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function questionAsync(query: string): Promise<string> {
	return new Promise((resolve) => {
		r1.question(query, (answer: string) => {
			resolve(answer);
		});
	});
}

export function fibonacci(length: number) {
	let i: number = 0;

	let prev: number = 0;
	let current: number = 1;
	let next: number;

	let series: number[] = [0, 1];
	for (i; i < length - 2; i++) {
		next = prev + current;
		prev = current;
		current = next;
		series.push(next);
	}

	return series;
}

async function main() {
	const sequenceLength: string = await questionAsync(
		'How long do you want the series to be? '
	);
	const sequenceLengthInt: number = parseInt(sequenceLength, 10);

	console.log(fibonacci(sequenceLengthInt));
}

main();
