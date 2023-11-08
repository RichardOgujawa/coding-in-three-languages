type coordinate = number[];
export function list_comp(
	x: number,
	y: number,
	z: number,
	n: number
): coordinate[] {
	const results: coordinate[] = [];
	for (let i = 0; i <= x; i++) {
		for (let j = 0; j <= y; j++) {
			for (let k = 0; k <= z; k++) {
				results.push([i, j, k]);
			}
		}
	}
	const filteredResults = results.filter((coordinate) => {
		let sum = coordinate.reduce((accumulator, currentValue) => {
			return accumulator + currentValue;
		}, 0);
		return sum != n;
	});

	return filteredResults;
}

console.log(list_comp(1, 1, 1, 2));
