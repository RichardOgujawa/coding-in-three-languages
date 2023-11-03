export function integer_division(int1: number, int2: number): number {
	//Round down instead or rounding to nearest because for example 3 divided by 5 is 0 Remainder 3, as 5 goes into 3 zero times and there's 3 left over.
	return Math.floor(int1 / int2);
}

export function float_division(int1: number, int2: number): number {
	return int1 / int2;
}

console.log(integer_division(3, 5));
console.log(float_division(3, 5));
console.log(integer_division(4, 3));
console.log(float_division(4, 3));
