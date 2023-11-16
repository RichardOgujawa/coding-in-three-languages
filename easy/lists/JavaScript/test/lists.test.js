const { checkCommand } = require('../code/lists');

describe('List Operations', () => {
	it('Should insert 5 in the 0th position', () => {
		let user_list = [];
		checkCommand(['insert', '0', '5'], user_list);
		expect(user_list).toStrictEqual([5]);
	});
	it('Should remove the first occurence 6', () => {
		let user_list = [7, 6, 8, 6];
		checkCommand(['remove', '6'], user_list);
		expect(user_list).toStrictEqual([7, 8, 6]);
	});
	it('Should append 9', () => {
		let user_list = [];
		checkCommand(['append', '9'], user_list);
		expect(user_list).toStrictEqual([9]);
	});
	it('Should print the array', () => {
		let user_list = [10, 9, 8];
		checkCommand(['print'], user_list);
		expect(user_list).toStrictEqual([10, 9, 8]);
	});
	it('Should remove the last element of the array', () => {
		let user_list = [10, 5, 9, 1];
		checkCommand(['pop'], user_list);
		expect(user_list).toStrictEqual([10, 5, 9]);
	});
	it('Should reverse the order of the array', () => {
		let user_list = [1, 2, 3];
		checkCommand(['reverse'], user_list);
		expect(user_list).toStrictEqual([3, 2, 1]);
	});
});
