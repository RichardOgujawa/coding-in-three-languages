const readline = require('readline');
//function that finds who got better ratings
export function compareTheTriplets(
	a: number[],
	b: number[]
): { [key: string]: number } {
	const ratings: { [key: string]: number } = {
		alice_rating: 0,
		bob_rating: 0,
	};

	if (a.length == b.length && a.length == 3) {
		for (let i = 0; i < a.length; i++) {
			if (a[i] > b[i]) ratings['alice_rating'] += 1;
			else if (b[i] > a[i]) ratings['bob_rating'] += 1;
		}
	} else {
		throw new Error('Please make sure you input 3 review ratings.');
	}
	return ratings;
}

// Make a function to ask the user for two sets of ratings
const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

async function questionAsync(query: string): Promise<string> {
	return new Promise((resolve) => {
		r1.question(query, (answer: string) => {
			resolve(answer);
		});
	});
}

async function getInput() {
	//Ask the user for input twice
	let alice_results: number[] = [];
	let bob_results: number[] = [];

	for (let i = 1; i < 2; i++) {
		if (i == 1) {
			let alice_input = await questionAsync(`What was Alice's Ratings?`);
			alice_results = alice_input
				.trim()
				.split(' ')
				.map((str) => parseInt(str, 10));
		}
		let bob_input = await questionAsync(`What was Bob's Ratings?`);
		bob_results = bob_input
			.trim()
			.split(' ')
			.map((str) => parseInt(str, 10));
	}
	r1.close();
	return [alice_results, bob_results];
}

async function main() {
	let results: number[][] = await getInput();
	for (let result of Object.values(
		compareTheTriplets(results[0], results[1])
	)) {
		console.log(result);
	}
}

main();
