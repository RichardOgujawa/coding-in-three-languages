const { staircase } = require('../code/staircase');

// Mock console.log to capture the output
const originalConsoleLog = console.log;
let consoleOutput = [];

// Mock console.log to capture the output as an array
beforeEach(() => {
	console.log = jest.fn((...args) => {
		consoleOutput.push(args.join(' '));
	});
});

// Clean Up
afterEach(() => {
	console.log = originalConsoleLog;
	consoleOutput = [];
});

describe('staircase function', () => {
	it('should print the correct output for n = 4', () => {
		staircase(4);
		//Check if the contents of the array which were generated during the test are correct
		expect(consoleOutput).toEqual(['   #', '  ##', ' ###', '####']);
	});

	it('should print the correct output for n = 6', () => {
		staircase(6);
		expect(consoleOutput).toEqual([
			'     #',
			'    ##',
			'   ###',
			'  ####',
			' #####',
			'######',
		]);
	});
});
