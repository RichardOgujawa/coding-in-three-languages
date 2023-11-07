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
