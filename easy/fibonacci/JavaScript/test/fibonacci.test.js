const { fibonacci } = require('../code/fibonacci');

it('should output [0, 1, 1, 2, 3, 5] for series length of 6', () => {
	expect(fibonacci(6)).toStrictEqual([0, 1, 1, 2, 3, 5]);
});
