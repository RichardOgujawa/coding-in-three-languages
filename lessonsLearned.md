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

## **<u>'set' object is not subscriptable</u>**

Sets can't be indexed into or sliced because it has no inherent order.

## **<u>'ModuleNotFoundError'</u>**

This doesn't always necessarily mean that the module isn't there, or has the wrong naming convention, or is improperly imported due to a mismatch in the name of the file and the name of the module imported in the import statement, it can be something as simple as there being a leading or trailing space in the `__init__.py` file. in your test directory.
