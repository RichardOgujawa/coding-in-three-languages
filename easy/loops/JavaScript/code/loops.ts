export function printSquare(n: number): number[] {
	const squares: number[] = [];
	var i = 0;
	while (i < n) {
		squares.push(i * i);
		i++;
	}
	return squares;
}

const results: number[] = printSquare(5);

for (let i = 0; i < results.length; i++) {
	console.log(results[i]);
}
