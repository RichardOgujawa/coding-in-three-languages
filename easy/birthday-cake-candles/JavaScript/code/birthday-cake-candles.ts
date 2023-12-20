// Setting up Readline to take in user input
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

// Function to find the number of tallest candles
export function countTallestCandles(candleHeights: number[]): number {
	let count: number = 0;
	const maxHeight: number = Math.max(...candleHeights);
	for (let candleHeight of candleHeights) {
		if (candleHeight == maxHeight) {
			count += 1;
		}
	}
	return count;
}

export function betterMethod(candleHeights: number[]): number {
	// Return an array of candle heights that equals the max height and get the length of that.
	return candleHeights.filter((candle) => candle == Math.max(...candleHeights))
		.length;
}

// Main function
async function main(): Promise<void> {
	//Get the number of entries the user wants to make
	const n: number = parseInt(await questionAsync('Number of candles: '), 10);
	let candleHeights: number[] = (await questionAsync('Candle Heights: '))
		.trim()
		.split(' ')
		.map((str) => parseInt(str, 10));

	// If the number of candles asked for doesn't equal the number of candles provided, prompt the user again
	while (n != candleHeights.length) {
		console.log(
			`Please enter ${n} candles, ${candleHeights.length} were put in instead`
		);
		console.log(``);
		candleHeights = (await questionAsync('Candle Heights: '))
			.trim()
			.split(' ')
			.map((str) => parseInt(str));
	}

	console.log(betterMethod(candleHeights));
	r1.close();
}

main();
