# Nested Lists

Link to challenge [HackerRank Nested Lists Challenge](https://www.hackerrank.com/challenges/nested-list/problem?isFullScreen=true)
Given the names and grades for each student in a class of students, store them in a nested list and print the name(s) of any student(s) having the second lowest grade.

**Note:** If there are multiple students with the second lowest grade, order their names alphabetically and print each name on a new line.

**Example**

`records = [["chi", 20.0], ["beta", 50.0], ["alpha", 50.0]]`

The ordered list of scores is `[20.0, 50.0]`, so the second lowest score is `50.0`. There are two students with that score: `["beta", "alpha"]`. Ordered alphabetically, the names are printed as:

```
alpha
beta
```

## **<u>Input Format</u>**

The first line contains an integer, N, the number of students.
The 2N subsequent lines describe each student over lines.

- The first line contains a student's name.
- The second line contains their grade.

## **<u>Constraints</u>**

- 2 <= n <= 5
- There will always be one or more students having the second lowest grade.

## **<u>Output Format</u>**

Print the name(s) of any student(s) having the second lowest grade in. If there are multiple students, order their names alphabetically and print each one on a new line.

## **<u>Tests</u>**

### **<mark>Test 1</mark>**

_Input_:

```
5
Harry
37.21
Berry
37.21
Tina
37.2
Akriti
41
Harsh
39
```

_Output_:

```
Berry
Harry
```

_Explanation_:
There are 5 students in this class whose names and grades are assembled to build the following list:

`python students = [['Harry', 37.21], ['Berry', 37.21], ['Tina', 37.2], ['Akriti', 41], ['Harsh', 39]]`

The lowest grade of belongs to Tina. The second lowest grade of belongs to both Harry and Berry, so we order their names alphabetically and print each name on a new line.
