# Finding The Percentage

Link to challenge [HackerRank Finding The Percentage Challenge]({https://www.hackerrank.com/challenges/finding-the-percentage/problem?isFullScreen=true)
The provided code stub will read in a dictionary containing key/value pairs of name:[marks] for a list of students. Print the average of the marks array for the student name provided, showing 2 places after the decimal.

**Example**

```
marks key:value pairs are
'alpha' : [20, 30, 40]
'beta' : [30, 50, 70]
query_name = 'beta'
```

the **query_name** is 'beta'. beta's average score is `(30 + 50 + 70)/3 = 50.0`

## **<u>Input Format</u>**

The first line contains the integer `n`, the number of students' records. The next `n` lines contain the names and marks obtained by a student, each value separated by a space. The final line contains **query_name**, the name of a student to query.

## **<u>Constraints</u>**

- 2 <= n <= 10
- 0 <= marks[i] <= 100
- length of marks arays = 3

## **<u>Output Format</u>**

Print one line: The average of the marks obtained by the particular student correct to 2 decimal places.

## **<u>Tests</u>**

### **<mark>Test 1</mark>**

_Input_:

```
3
Krishna 67 68 69
Arjun 70 98 63
Malika 52 56 60
Malika
```

_Output_:
`56.0`

_Explanation_:
Marks for Malika are {52, 56, 60} whose average is (52 + 56 + 60)/3 = 56

### **<mark>Test 2</mark>**

_Input_:

```
2
Harsh 25 26.5 28
Anurag 26 28 30
Harsh
```

_Output_:
`28.0`
