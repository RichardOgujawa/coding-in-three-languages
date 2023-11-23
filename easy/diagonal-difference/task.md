# Diagonal Difference

Link to challenge [HackerRank Diagonal Difference Challenge](https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true)
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
For example, the square matrix is shown below:

```
1 2 3
4 5 6
9 8 9
```

The left-to-right diagonal = 1 + 5 + 9 = 15. The right-to-left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15 - 17| = 2

## **<u>Function Description</u>**

diagonalDifference takes the following parameter:

- int arr[n][m]: an array of integers

## **<u>Return</u>**

- int: the absolute diagonal difference

## **<u>Input Format</u>**

The first line contains a single integer, n, the number of rows and columns in the square matrix arr.
Each of the next n lines describes a row, arr[i] , and consists of n space-separated integers

## **<u>Constraints</u>**

- -100 ≤ arr[i][j] ≤ 100 (i.e. each value in the array can be anything between -100 and 100)

## **<u>Output Format</u>**

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

## **<u>Tests</u>**

### **<mark>Test 1</mark>**

_Input_:

```
3
11 2 4
4 5 6
10 8 -12
```

_Output_:
`15`
