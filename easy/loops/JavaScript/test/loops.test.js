const { printSquare } = require('../code/loops');

it.only('Should print [0, 1, 4, 9, 16] when the input is 5', () => {
	expect(printSquare(5)).toStrictEqual([0, 1, 4, 9, 16]);
});
