export function findRunnerUp(arr: number[]): number {
	let runnerUpScore: number[] = Array.from(new Set<number>(arr)).sort(
		(a, b) => b - a
	);
	return runnerUpScore[1];
}

console.log(findRunnerUp([1, 2, 3, 4, 6, 6, 5]));
