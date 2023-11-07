export function weird_checker(n: number) {
	if (n % 2) {
		return 'Weird';
	} else {
		if (n >= 2 && n <= 5) {
			return 'Weird';
		}
		if (n >= 6 && n <= 20) {
			return 'Weird';
		} else {
			return 'Not Weird';
		}
	}
}
console.log(weird_checker(3)); //Expected Output: 'Weird'
console.log(weird_checker(24)); //Expected Output: 'Not Weird'
