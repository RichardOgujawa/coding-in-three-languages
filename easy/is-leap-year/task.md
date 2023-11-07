# Is Leap Year

Link to challenge [HackerRank Is Leap Year Challenge](https://www.hackerrank.com/challenges/write-a-function/problem?isFullScreen=true)

An extra day is added to the calendar almost every four years as February 29, and the day is called a leap day. It corrects the calendar for the fact that our planet takes approximately 365.25 days to orbit the sun. A leap year contains a leap day.

In the Gregorian calendar, three conditions are used to identify leap years:

- The year can be evenly divided by 4, is a leap year, unless:
  - The year can be evenly divided by 100, it is NOT a leap year, unless:
    - The year is also evenly divisible by 400. Then it is a leap year.

This means that in the Gregorian calendar, the years 2000 and 2400 are leap years, while 1800, 1900, 2100, 2200, 2300 and 2500 are NOT leap years. [Source](http://www.timeanddate.com/date/leapyear.html)

Task
Given a year, determine whether it is a leap year. If it is a leap year, return the Boolean True, otherwise return False.
Note that the code stub provided reads from STDIN and passes arguments to the is_leap function. It is only necessary to complete the is_leap function.

## **<u>Input Format</u>**

Read **_year_**, the year to test.

## **<u>Constraints</u>**

1900 <= _**year**_ <= 10^5

## **<u>Output Format</u>**

The function must return a Boolean value (True/False). Output is handled by the provided code stub.

## **<u>Tests</u>**

### **<mark>Test 1</mark>**

_Input_: 1990

_Output_:
`False`
