const { betterMethod } = require('../code/birthday-cake-candles');

describe('Birthday Cake Function', () => {
	it('Should equal 2', () => {
		expect(betterMethod([3, 1, 2, 3])).toBe(2);
	});
	it('Should equal 4', () => {
		expect(betterMethod([3, 1, 2, 3, 3, 3, 2])).toBe(4);
	});
});
