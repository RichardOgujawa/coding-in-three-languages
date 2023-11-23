const { diagonalDiff } = require('../code/diagonal-difference');

it('Should equal 4', () => {
	expect(
		diagonalDiff([
			[1, 2, 3],
			[4, 5, 6],
			[9, 8, 7],
		])
	).toBe(4);
});
