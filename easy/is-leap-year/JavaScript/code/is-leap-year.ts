export function isLeapYear(year: number): boolean {
	let isLeapYearBool: boolean = false;
	if (!(year % 4)) {
		if (!(year % 400)) {
			isLeapYearBool = true;
		} else if (!(year % 400)) {
			isLeapYearBool = false;
		}
	} else {
		isLeapYearBool = false;
	}
	return isLeapYearBool;
}

console.log(isLeapYear(1990));
