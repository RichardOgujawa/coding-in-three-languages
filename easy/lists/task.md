# Lists

Link to challenge [HackerRank Lists Challenge](https://www.hackerrank.com/challenges/python-lists/problem?isFullScreen=true)
Consider a list (list = []). You can perform the following commands:
insert i e: Insert integer e at position i.
print: Print the list.
remove e: Delete the first occurrence of integer e.
append e: Insert integer e at the end of the list.
sort: Sort the list.
pop: Pop the last element from the list.
reverse: Reverse the list.
Initialize your list and read in the value of n followed by n lines of commands where each command will be of the 7 types listed above. Iterate through each command in order and perform the corresponding operation on your list.

**Example**

N = 4
append 1
append 2
insert 3 1
print

- append 1: Append 1 to the list, arr = [1].
- append 2: Append 2 to the list, arr = [1,2].
- insert 3 1: insert 3 at index 1, arr = [1, 3, 2]
- print: Print the array

Output:
`[1, 3, 2]`

## **<u>Input Format</u>**

The first line contains an integer, n, denoting the number of commands.
Each line i of the n subsequent lines contains one of the commands described above.

## **<u>Constraints</u>**

- The elements added to the list must be integers.

## **<u>Output Format</u>**

For each command of type print, print the list on a new line.

## **<u>Tests</u>**

### **<mark>Test 1</mark>**

_Input_:

```
12
insert 0 5
insert 1 10
insert 0 6
print
remove 6
append 9
append 1
sort
print
pop
reverse
print
```

_Output_:

```
[6, 5, 10]
[1, 5, 9, 10]
[9, 5, 1]
```
