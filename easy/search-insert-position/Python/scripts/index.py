# Given a sorted array of distinct integers and a target value, return the index if the target is found.
# If not, return the index where it would be if it were inserted in order.
# You must write an algorithm with O(log n) runtime complexity.
#
# Example 1:
# Input: nums = [1,3,5,6], target = 5
# Output: 2
#
# Example 2:
# Input: nums = [1,3,5,6], target = 2
# Output: 1
#
# Example 3:
# Input: nums = [1,3,5,6], target = 7
# Output: 4
#
# Constraints:
# - 1 <= nums.length <= 10⁴
# - -10⁴ <= nums[i] <= 10⁴
# - nums contains distinct values sorted in ascending order
# - -10⁴ <= target <= 10⁴

class Solution:
    def searchInsert(self, nums: list[int], target: int) -> int:
        left, right = 0, len(nums) - 1 
        while left <= right:
            mid_p = (left + right) // 2 # find floor division
            mid_num = nums[mid_p]
            if mid_num == target:
                print("found target")
                return mid_p
            if mid_num < target:
                print("mid_num is lower")
                left = mid_p + 1
            else:
                print("mid_num is higher")
                right = mid_p - 1
        return left
               

sol = Solution()
print(sol.searchInsert(nums = [1,3,5,6], target = 5))
print(sol.searchInsert(nums = [1,3,5,6], target = 2))
print(sol.searchInsert(nums = [1,3,5,6], target = 7))