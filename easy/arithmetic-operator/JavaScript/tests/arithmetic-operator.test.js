//Use npm run test to run the tests
const { add, minus, product } = require('../Code/arithmetic-operator');

describe('Testing for a = 3 and b = 5', () => {
	it('Add() should add 3 and 5 together to get 8', () => {
		expect(add(3, 5)).toBe(8);
	});
	it('Minus() should plus 3 and 5 together to get -2', () => {
		expect(minus(3, 5)).toBe(-2);
	});
	it('Product() should multiply 3 and 5 together to get 15', () => {
		expect(product(3, 5)).toBe(15);
	});
});

describe('Testing for a = 3 and b = 2', () => {
	it('Add() should add 3 and 2 together to get 5', () => {
		expect(add(3, 2)).toBe(5);
	});
	it('Minus() should plus 3 and 2 together to get 1', () => {
		expect(minus(3, 2)).toBe(1);
	});
	it('Product() should multiply 3 and 2 together to get 6', () => {
		expect(product(3, 2)).toBe(6);
	});
});
