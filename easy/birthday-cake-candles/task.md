# Birthday Cake Candles

Link to challenge [HackerRank Birthday Cake Candles Challenge](https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true)
You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

## **<u>Example</u>**

candles = [4, 4, 1, 3]

The maximum height candles are 4 units high. There are of 2 them, so return 2.

## **<u>Function Description</u>**

Complete the function birthdayCakeCandles in the editor below.
birthdayCakeCandles has the following parameter(s):

- int candles[n]: the candle heights

## **<u>Returns</u>**

- int: the number of candles that are tallest

## **<u>Input Format</u>**

The first line contains a single integer, n, the size of candles.
The second line contains n space-separated integers, where each integer i describes the height of candles[i].

## **<u>Constraints</u>**

- 1 ≤ n ≤ 10^5
- 1 ≤ candle[i] ≤ 10^7

## **<u>Tests</u>**

### **<mark>Test 1</mark>**

_Input_:

```
4
3 2 1 3
```

_Output_:
`2`

_Explanation_:
Candle heights are [3, 2, 1, 3].
The tallest candles are 3 units, and there are 2 of them.
