const { miniMaxSum } = require('../code/mini-max-sum');

// Mock console.log to capture the output
const originalConsoleLog = console.log; // Store the original console.log function
let consoleOutput = []; // Used to capture the output in an array so it can be assessed

// Mock console.log to capture the output as an array.
beforeEach(() => {
	// Take the arguments from the console.log function, and join them into a string, and push it into consoleOutput.
	console.log = jest.fn((...args) => {
		consoleOutput.push(args.join(' '));
	});
});

// Clean Up
afterEach(() => {
	console.log = originalConsoleLog; // Restore original console.log function
	consoleOutput = []; // Empty consoleOutput variable
});

describe('mini-max-sum', () => {
	it('should print "10 14"', () => {
		miniMaxSum([1, 2, 3, 4, 5]);
		// Check the contents of the array which the above function generated and stores in consoleOutput
		expect(consoleOutput).toEqual(['10 14']);
	});
	it('should print "299 9271"', () => {
		miniMaxSum([7, 69, 2, 221, 8974]);
		// Check the contents of the array which the above function generated and stores in consoleOutput
		expect(consoleOutput).toEqual(['299 9271']);
	});
});
