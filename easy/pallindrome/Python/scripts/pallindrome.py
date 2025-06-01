"""
LeetCode Problem: Palindrome Number

Description:
Given an integer x, return True if x is a palindrome, and False otherwise.

An integer is considered a palindrome when it reads the same backward as forward.
For example, 121 is a palindrome because "121" reversed is still "121".
However, -121 is not a palindrome because "-121" reversed is "121-", which is not the same.

Examples:
Input: x = 121
Output: True

Input: x = -121
Output: False

Input: x = 10
Output: False

Constraints:
-2^31 <= x <= 2^31 - 1
"""

class Solution:
    @staticmethod
    def isPalindrome(x: int) -> bool:
        str_x = str(x)
        p1, p2 = 0, len(str_x) - 1
        is_palindrome = True

        while p1 < p2 and is_palindrome:
            is_palindrome = str_x[p1] == str_x[p2]
            p1 += 1
            p2 -= 1

        return is_palindrome
    
    @staticmethod
    def isPalindromeBestMethod(x):
        # Best solution - check if string equals reverse of string
        return (str(x) == str(x)[::-1])
        

print(Solution.isPalindrome(121))
print(Solution.isPalindrome(333))
print(Solution.isPalindrome(3445))