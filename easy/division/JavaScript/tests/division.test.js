const { integer_division, float_division } = require('../code/division');

describe('Testing with 3 and 5', () => {
	it('Should return 0 when integer divided', () => {
		expect(integer_division(3, 5)).toBe(0);
	});
	it('Should return 0.6 when float divided', () => {
		expect(float_division(3, 5)).toBe(0.6);
	});
});

describe('Testing with 4 and 3', () => {
	it('Should return 0 when integer divided', () => {
		expect(integer_division(4, 3)).toBe(1);
	});
	it('Should return 1.33333333333 when float divided', () => {
		expect(float_division(4, 3)).toBe(1.3333333333333333);
	});
});
