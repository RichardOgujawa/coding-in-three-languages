const { list_comp } = require('../code/list-comprehension');

it('should return 5 arrays', () => {
	expect(list_comp(1, 1, 1, 2)).toStrictEqual([
		[0, 0, 0],
		[0, 0, 1],
		[0, 1, 0],
		[1, 0, 0],
		[1, 1, 1],
	]);
});
it('should return 21 arrays', () => {
	expect(list_comp(2, 2, 2, 2)).toStrictEqual([
		[0, 0, 0],
		[0, 0, 1],
		[0, 1, 0],
		[0, 1, 2],
		[0, 2, 1],
		[0, 2, 2],
		[1, 0, 0],
		[1, 0, 2],
		[1, 1, 1],
		[1, 1, 2],
		[1, 2, 0],
		[1, 2, 1],
		[1, 2, 2],
		[2, 0, 1],
		[2, 0, 2],
		[2, 1, 0],
		[2, 1, 1],
		[2, 1, 2],
		[2, 2, 0],
		[2, 2, 1],
		[2, 2, 2],
	]);
});
