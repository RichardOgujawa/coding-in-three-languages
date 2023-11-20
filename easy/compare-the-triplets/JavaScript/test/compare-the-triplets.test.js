const { compareTheTriplets } = require('../code/compare-the-triplets');

it('Should give alice 0 and bob 2', () => {
	expect(compareTheTriplets([5, 6, 6], [5, 9, 10])).toStrictEqual({
		alice_rating: 0,
		bob_rating: 2,
	});
});
