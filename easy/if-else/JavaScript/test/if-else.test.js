const { weird_checker } = require('../code/if-else');

it('Should say that 3 is weird', () => {
	expect(weird_checker(3)).toBe('Weird');
});
it('Should say that 24 is not weird', () => {
	expect(weird_checker(24)).toBe('Not Weird');
});
