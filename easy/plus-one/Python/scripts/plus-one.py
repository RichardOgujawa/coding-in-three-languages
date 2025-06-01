# You are given a large integer represented as an integer array `digits`,
# where each `digits[i]` is the ith digit of the integer. The digits are stored such that
# the most significant digit is at the head of the list.
#
# You are to add one to this number and return the resulting array of digits.
#
# Constraints:
# - The input array `digits` will not contain any leading 0s.
# - Each element in `digits` is a single digit between 0 and 9.

class Solution:
    # def plusOne(self, digits: list[int]) -> list[int]:
    #     to_num = int("".join(map(str, digits)))
    #     return list(map(int, list(str(to_num + 1))))
    def plusOne(self, digits: list[int]) -> list[int]:
        # List that adds one to the last one if it ends up being zero, then add one to the previous number
        right = len(digits) - 1
        digits[right] += 1

        if digits[right] != 10:
            return digits
        
        while digits[right] == 10 and right >= 0:
            digits[right] = 0
            if right - 1 >= 0:
                digits[right - 1] += 1
            right -= 1
        if digits[0] == 0:
            digits.insert(0, 1)
        
        return digits
    
sol = Solution()
print(sol.plusOne(digits = [1,2,3]))
print(sol.plusOne(digits = [4,3,2,1]))
print(sol.plusOne(digits = [9, 9]))