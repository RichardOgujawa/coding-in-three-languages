# Time Conversion

Link to challenge [HackerRank Time Conversion Challenge](https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true).

Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.

- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

## **<u>Example</u>**

- s = '12:01:00PM' <br/>
  Return '12:01:00'.
- s = '12:01:00AM' <br/>
  Return '00:01:00'.

## **<u>Function Description</u>**

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

- string s: a time in 12 hour format

## **<u>Input Format</u>**

A single s string that represents a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).

## **<u>Constraints</u>**

- All input times are valid

## **<u>Returns</u>**

- string: the time in 24 hour format

## **<u>Tests</u>**

### **<mark>Test 1</mark>**

_Input_: `07:05:45PM`

_Output_:
`19:05:45`
