const readline = require('readline');
const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function questionAsync(query: string): Promise<string> {
	// Create a new question which takes the answer and resolves it from the promise which becomes the expression which is what questionAsync returns
	return new Promise((resolve) => {
		r1.question(query, (answer: string) => {
			resolve(answer);
		});
	});
}

export function catsAndAMouse(
	catA: number,
	catB: number,
	mouseC: number
): string {
	const distCatA: number = Math.abs(catA - mouseC);
	const distCatB: number = Math.abs(catB - mouseC);

	let result: string;
	if (distCatA < distCatB) {
		result = 'Cat A';
	} else if (distCatA > distCatB) {
		result = 'Cat B';
	} else {
		result = 'Mouse C';
	}
	return result;
}

async function getInput(
	count: number,
	numOfGames: number
): Promise<number[] | undefined> {
	// Then with that information do a for loop that creates that many games for them
	let playerPositions: number[] | undefined;
	if (count < numOfGames) {
		const positions: string = await questionAsync(
			'What are the positions of the players CatA, CatB and MouseC?'
		);
		const positionsArr: number[] = positions
			.split(' ')
			.map((position) => parseInt(position));

		if (positionsArr.length == 3) {
			playerPositions = positionsArr;
			console.log(
				catsAndAMouse(playerPositions[0], positionsArr[1], positionsArr[2])
			);
			await getInput(count + 1, numOfGames);
		} else {
			playerPositions = undefined;
			await getInput(count, numOfGames);
		}
	}

	return playerPositions;
}

async function main() {
	const numOfGames: string = await questionAsync(
		'How many games do you want to play?'
	);
	const numOfGamesInt: number = parseInt(numOfGames, 10);

	await getInput(0, numOfGamesInt);

	r1.close();
}

main();
