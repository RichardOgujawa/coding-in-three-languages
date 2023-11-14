const { averageScore } = require('../code/finding-the-percentage');

describe('Average Score Function', () => {
	test('Should output 56.0 if the scores are 52 56 and 60', () => {
		expect(averageScore([52, 56, 60])).toStrictEqual(56);
	});
	it('Should output 26.50 if the scores are 26 28 30', () => {
		expect(averageScore([26, 28, 30])).toStrictEqual(28);
	});
});
