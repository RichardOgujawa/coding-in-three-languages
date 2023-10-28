function main(n: number) {
	if (!(n % 2)) {
		console.log('Weird');
	} else {
		if (n >= 2 && n <= 5) {
			console.log('Weird');
		}
		if (n >= 6 && n <= 20) {
			console.log('Weird');
		} else {
			console.log('Not Weird');
		}
	}
}
main(3); //Expected Output: 'Weird'
main(24); //Expected Output: 'Not Weird'
