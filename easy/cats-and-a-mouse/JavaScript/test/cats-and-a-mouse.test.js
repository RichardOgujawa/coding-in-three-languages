const { catsAndAMouse } = require('../code/cats-and-a-mouse');

it('Should print out Cat B if 1 2 3 is passed in', () => {
	expect(catsAndAMouse(1, 2, 3)).toBe('Cat B');
});
it('Should print out Cat B if 1 3 2 is passed in', () => {
	expect(catsAndAMouse(1, 3, 2)).toBe('Mouse C');
});
