export function print_to_n(n: number): string {
	let result: string = '';
	for (let i = 1; i <= n; i++) {
		result += i;
	}
	return result;
}

console.log(print_to_n(3));
