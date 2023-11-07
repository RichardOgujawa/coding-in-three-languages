const { isLeapYear } = require('../code/is-leap-year');

it('Should return false when the year is 1990', () => {
	expect(isLeapYear(1990)).toBeFalsy();
});
