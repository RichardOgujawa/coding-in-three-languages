# Errors and Troubleshooting

This file comprises a list of errors encountered whilst completing these challenges, along with the troubleshooting/debbugging that followed.

## **<u>ZSH Trace Trap</u>**

This error occured during the execution of loops.js using the terminal command `node loops.js`.

This error occurs when there's an issue with the execution og the program, such as an infinite loop, stack overflow, memory issue (running out of memory), syntax or logical error, etc.

After some investigation it was understood that the problem was indeed an infinite loop which was caused by the while loop not getting incremented, resulting in the while condition being true always.

## **<u>"Collected O Items</u>**

This error occured when running pytest to gather and run the tests in test\_\*.py files.

This particular error was occuring because of the naming convention for tests not being adhered to. According to a [Cewing](https://stackoverflow.com/users/97856/cewing) on Stack Overflow:

> `pytest gathers tests according to a naming convention. By default any file that is to contain tests must be named starting with test_, classes that hold tests must be named starting with Test, and any function in a file that should be treated as a test must also start with test_`

## **<u>LHS must be of type 'any', 'number', ...</u>**

"The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type. "

When using .sort() method make sure that the array is an array of numbers.

## **<u>'set' object is not subscriptable</u>**

Sets can't be indexed into or sliced because it has no inherent order.

## **<u>'ModuleNotFoundError'</u>**

- Naming the directory in which the python script was stored 'code' was producing this error. However, once changed to another name it worked just fine. To make sure this truly was the issue, the coding challenge directory was isolated from the other ones in a new workspace and pytest was run again with the directory being called 'code' and the error remianed, until the dir was renamed.
- This doesn't always necessarily mean that the module isn't there, or has the wrong naming convention, or is improperly imported due to a mismatch in the name of the file and the name of the module imported in the import statement, it can be something as simple as there being a leading or trailing space in the `__init__.py` file. in your test directory.

## **<u>Accepting User Input in JavaScript</u>**

- The readline module from Node.js can be used to accept user input in JavaScript

## **<u>Array Initializer not allowed here.</u>**

Java doesn't directly support array initializers for lists (initializers, in programming languages reger to when initial values are provided for the elements of an array when you declare it. )

If using an ArrayList constructor that accepts a collection, an array initializer cannot be passed in directly, rather to initialise a List like with a predefined set of elements, the Arrays.asList method need to be used to convert the arrat into a list.

```
 List<StudentData> dataset = new ArrayList<>(Arrays.asList(
                new StudentData("Harry", 37.21f),
                new StudentData("Berry", 37.21f),
                new StudentData("Tina", 37.2f),
                new StudentData("Akriti", 41f),
                new StudentData("Harsh", 39f)
));
```

## **<u>Could not be resolved from source</u>**

If you have the library already installed then the issue is that you're using the wring interpreter most likely.

Change the Python Interpreter by pressing CMD + SHIFT + P to open the command palette and the type 'Python Interpreter' and then choose the one with Global beside it.
