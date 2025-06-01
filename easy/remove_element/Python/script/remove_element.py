# Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
# The relative order of the elements may be changed.
# After removal, return the number of elements that are not equal to val.
#
# Do not use extra space; modify the input list directly.
# The first 'k' elements of nums (where k is the number returned) should contain the remaining values.
# You may return any value beyond index k; they are not checked.
# Example 1:
# Input: nums = [3,2,2,3], val = 3
# Output: 2, nums = [2,2,_,_]
# Explanation: Your function should return k = 2, with the first two elements of nums being 2.
# It does not matter what you leave beyond the returned k (hence they are underscores).

# Example 2:
# Input: nums = [0,1,2,2,3,0,4,2], val = 2
# Output: 5, nums = [0,1,4,0,3,_,_,_]
# Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
# Note that the five elements can be returned in any order.
# It does not matter what you leave beyond the returned k (hence they are underscores).

class Solution:
    def removeElement(self, nums: list[int], val: int) -> int:
        p1 = 0 
        while p1 < len(nums):
            if nums[p1] == val:
                del nums[p1]  # Remove element in-place
                continue      # Don't increment, since list has shifted left
            p1 += 1           # Move to next element
        return len(nums)
    def twoPointersRemoveEl(self, nums: list[int], val:int) -> int: 
        p1 = 0 # This slow pointer will keep track of all the elements that != val
        for i in range(len(nums)):
            if nums[i] != val:  # Find the next value that != val 
                nums[p1] = nums[i] # Overwrite the next element on the slow pointer (p1)
                p1 += 1 # Update the slow pointer
        # return nums[:p1] # This would return the list without numbers that == val
        return p1 # Return numbers that == val

sol = Solution()
print(sol.removeElement(nums = [3,2,2,3], val = 3))
print(sol.twoPointersRemoveEl(nums = [3,2,2,3], val = 3))
print(sol.removeElement(nums = [0,1,2,2,3,0,4,2], val = 2))
print(sol.twoPointersRemoveEl(nums = [0,1,2,2,3,0,4,2], val = 2))
