const { print_to_n } = require('../code/print-function');

it("Should print '123' when n is 3", () => {
	expect(print_to_n(3)).toBe('123');
});
