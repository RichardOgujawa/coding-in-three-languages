const { plusMinus } = require('../code/plus-minus');

it('Should return [0.500000, 0.333333, 0.166667]', () => {
	expect(plusMinus([-4, 3, -9, 0, 4, 1])).toStrictEqual([
		'0.500000',
		'0.333333',
		'0.166667',
	]);
});
