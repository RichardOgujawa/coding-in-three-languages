const { aVeryBigSum } = require('../code/a-very-big-sum');

it('Should return 5000000015', () => {
	expect(
		aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
	).toBe(5000000015);
});
