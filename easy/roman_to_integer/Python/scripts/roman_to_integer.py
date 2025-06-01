# LeetCode Problem: Roman to Integer
#
# Roman numerals are represented by seven different symbols:
# I, V, X, L, C, D, and M.
#
# Symbol    Value
#   I         1
#   V         5
#   X         10
#   L         50
#   C         100
#   D         500
#   M         1000
#
# Roman numerals are typically written from largest to smallest left to right.
# However, to represent numbers like 4 and 9, a smaller numeral is placed before a larger one.
#
# Subtractive combinations:
# - I before V (5) and X (10) → 4 and 9
# - X before L (50) and C (100) → 40 and 90
# - C before D (500) and M (1000) → 400 and 900
#
# Given a string s representing a Roman numeral, convert it to an integer.
#
# Constraints:
# - 1 <= s.length <= 15
# - s contains only characters: 'I', 'V', 'X', 'L', 'C', 'D', 'M'
# - It is guaranteed that s is a valid Roman numeral in the range [1, 3999]

class Solution:
    def __init__(self):
        self.roman_dict = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
    def romanToInt(self, s: str) -> int:
        # s = s.upper()
        current_idx = 0
        next_idx = 1
        sum = 0
        # go through the string and add or subtract based on the position of the roman numeral
        while current_idx < len(s):
            current_c = s[current_idx] 
            next_c = s[next_idx]
            current_c_val = self.roman_dict[current_c]
            next_c_val = self.roman_dict[next_c]
            if current_c_val < next_c_val:
                sum -= current_c_val
            else: 
                sum += current_c_val

            current_idx += 1
            # Add one if next_idx is still in range continue to increment it
            if next_idx < len(s) - 1:
                next_idx += 1 
        return sum
            
            


sol = Solution()
print(sol.romanToInt('III'))
print(sol.romanToInt('LVIII'))
print(sol.romanToInt('MCMXCIV'))
        