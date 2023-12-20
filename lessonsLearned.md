# Errors and Troubleshooting

This file comprises a lessons learned whilst completing these challenges.

## **<u>StringBuilder</u>**

String is immutable, as such to create a string that has the capacity for change StringBuilder is used. It allows for methods similar to that which one would use to update lists in Python, .append(), .insert() and .delete().

An example of where this was used is in the easy/print-function coding challenge, which can be found [here]()

## **<u>Nested Loops</u>**

It's best to avoid using nested loops for a host of reasons including:

- Reduced performance
- It reduces code readability
- The presence of multiple nested loops indicates that there may be a more efficient way to do what you're trying to do
- It increases time complexity

## **<u>Array.from and new Set()</u>**

To create a new set from an array use new Set(arr), but to create a new array from an existing set use Array.from()

## **<u>JSON.Parse()</u>**

Can also be used to convert arrays written as strings to actual arrays

## **<u>Arrays.sort() vs Collections.sort()</u>**

- Use Arrays.sort() when dealing with arrays of primitive types or arrays of objects that already implement 'Comparable' interface.

```
int[] numbers = {5, 2, 8, 1, 3};
Arrays.sort(numbers);
```

- Use Collections.sort() when working with 'List' objects, especially if the elements of the list are elements which implement the 'Comparable' interface.

```
List<Float> floatList = new ArrayList<>();
floatList.add(5.3f);
floatList.add(2.1f);
floatList.add(8.7f);
Collections.sort(floatList);
```

Also use it when you want to define custom sorting orders. For example, sorting based on a specific element, like name or grade.

```
List<Person> peopleList = new ArrayList<>();
// Add people to the list
Collections.sort(peopleList, Comparator.comparing(Person::getName));
```

Essentially if it seems like something simple use Arrays.sort(), but if this doesn't work it's probably a bit more complex than anticipated so try Collections.sort()

## **<u>Non-Null Assertion Operator</u>**

This is used to assert to the TypeScript compiler that the result of an expression is not null. For example:

`name : string = names.shift();`

This will get the first item from the array, however, names may not be defined elsewhere, but rather is something that is going to be defined at a later stage, therefore as of right now, the result of names.shift() would be undefined. However, because it is understood that at this point in the code, names.shift() will hold a string value, and therefore not be undefined, or some null value, a non-null assertion operator '!' can be placed at the end of the expression to tell the TypeScript compiler that.

## **<u>Record vs Class</u>**

A class isn't always required, sometimes a record will suffice especially if the purpose of the class is going to primarily be for data storage, and it doesn't have much complexity in terms of it's behaviour/functionality.

## **<u>map()</u>**

The map function in Python 3 returns an interator, as opposed to a list like it did in Python 2. So if what is required is a list as opposed to just an iterator (to be able to access list specific methods for example), then the map function needs to be wrapped in a list constructor.

## **<u>printStackTree()</u>**

PrintStackTree may not be the best practice for handling exceptions in production code. A logging framework is often recommnded instead for more robust and configurable logging. For example:

```
import java.util.logging.Level;
import java.util.logging.Logger;

public class Example {
    private static final Logger logger = Logger.getLogger(Example.class.getName());

    public static void main(String[] args) {
        try {
            // Your code that might throw an exception
            throw new RuntimeException("Something went wrong!");
        } catch (Exception e) {
            // Logging the exception instead of printing the stack trace
            logger.log(Level.SEVERE, "An exception occurred", e);
        }
    }
}
```

## **<u>Watching TypeScript Files()</u>**

Run this in the terminal:

```
tsc <file-name> --watch
```

## **<u>Double Indexing</u>**

If you have an n x n array, use double indexing ('multi-dimensional indexing') to access elements nested in the array, as it has a lower time complexity than using nested for loops. Double Indexing has a time complexity of O(n), a nested loop has a time complexity of O(n^2)

## **<u>How to Test Print Statements</u>**

### **<u>Python</u>**
At the end of every print statement, unless specific otherwise, is a newline character '\n' so it needs to be taken into consideration.

A new function is created that allows for the print statement to be gotten from the console.

- a new StingIO object is created, which is used to treat strings like file-like buffer objects allowing for them to be read from or written to. The string output (sys.stdout) from the console is treated in this way, in that it's redirected to a StringIO object.
-

The below example shows how this was implemented for the Staircase coding challenge written in Python, which can be found at './easy/staircase/Python/test/test_staircase.py'

```
from script.staircase import staircase
import sys
from io import StringIO

def capture_stdout(func, *args, **kwargs):
    """
    Capture stdout from a function.
    """
    captured_output = StringIO()
    sys.stdout = captured_output
    try:
        # This function calls a function, captures the console output, gets the value, which is returned and therefore able to be compared with another value.
        func(*args, **kwargs)
        return captured_output.getvalue()
    finally:
        # Restore the original value of the sys.stdout stream
        sys.stdout = sys.__stdout__

def test_staircase():
    # Test case 1: n = 4
    assert capture_stdout(staircase, 4) == "   #\n  ##\n ###\n####\n"

    # Test case 2: n = 6
    assert capture_stdout(
        staircase, 6) == "     #\n    ##\n   ###\n  ####\n #####\n######\n"
```

### **<u>JavaScript</u>**

**Use Mock Testing**
jest.fn allows you to make mock functions which are essentially just functions to replace functions in your code. For example, a function to mock the console.log function to print to the console could be something like this:

```
	console.log = jest.fn((...args) => {
		consoleOutput.push(args.join(' '));
	});
```

How it works is that it replaces the console.log function with a mock function created using the jest.fn method.

Then afterwards a simple clean up is performed to reset everything to it's original state, and the process is repeated, before and after each each test.

```
const staircase = require('../code/staircase');

// Mock console.log to capture the output
const originalConsoleLog = console.log; //Used to store the original console.log function
let consoleOutput = []; //Used to capture the output

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
	it('should print the correct output for n = 3', () => {
		staircase(3);
        //Check if the contents of the array which were generated during the test are correct
		expect(consoleOutput).toEqual(['  #', ' ##', '###']);
	});

	it('should print the correct output for n = 5', () => {
		staircase(5);
		expect(consoleOutput).toEqual([
			'    #',
			'   ##',
			'  ###',
			' ####',
			'#####',
		]);
	});

	// Add more test cases as needed
});
```

## **<u>Buffer & Stream</u>**

Buffers are temporary data stores to help with data management whilst processing it.

Streams on the other hand are flows of data, or a sequence of data made available over time. Streams are used to represent a flow of data that can be continuously processed or consumed. The key characteristic of a stream is that it allows data to be processed piece by piece, rather than requiring the entire dataset to be loaded into memory at once.

## **<u>Stream methods</u>**

- .boxed() is used to convert primitives into wrapper objects, i.e. int to Integer
- .mapToInt() is used to go from wrapper objects to primitives, for example `mapToInt(Integer::intValue)`
