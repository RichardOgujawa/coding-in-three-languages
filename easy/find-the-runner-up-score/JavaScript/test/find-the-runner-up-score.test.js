const { findRunnerUp } = require('../code/find-the-runner-up-score');

it('Should display 5 when [2, 3, 6, 6, 5] is passed in as the scores', () => {
	expect(findRunnerUp([2, 3, 6, 6, 5])).toBe(5);
});
