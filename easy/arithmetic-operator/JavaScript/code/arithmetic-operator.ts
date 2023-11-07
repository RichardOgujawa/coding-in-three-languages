export function add(a: number, b: number): number {
	return a + b;
}
export function minus(a: number, b: number): number {
	return a - b;
}

export function product(a: number, b: number): number {
	return a * b;
}

function arithmeticOperator(a: number, b: number) {
	console.log(add(a, b));
	console.log(minus(a, b));
	console.log(product(a, b));
}
arithmeticOperator(3, 5);
