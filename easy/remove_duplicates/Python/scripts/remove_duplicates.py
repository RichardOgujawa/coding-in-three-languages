# Given an integer array nums sorted in non-decreasing order,
# remove the duplicates in-place such that each unique element appears only once.
# The relative order of the elements should be kept the same.
# After removing the duplicates, return the number of unique elements (k),
# and ensure that the first k elements of nums contain those unique elements.
# 
# Do this with O(1) extra memory — modify the input array in-place.
#
# Example:
# Input:  nums = [1,1,2]
# Output: k = 2, nums[:k] = [1,2]
#
# Constraints:
# - 1 <= nums.length <= 3 * 10^4
# - -100 <= nums[i] <= 100
# - nums is sorted in non-decreasing order

class Solution:  
    def removeDuplicates(self, nums : list[int]) -> int:
        # Edge case: if list is empty, return 0
        if not nums:
            return 0

        p1, p2 = 0, 1 
        count = 1  # First element is always unique in a sorted list

        # Use two pointers to traverse the list
        while p2 < len(nums):
            if nums[p1] != nums[p2]:
                p1 += 1  # Move the slow pointer forward
                nums[p1] = nums[p2]  # Overwrite duplicate with new unique value
                count += 1  # Count the unique value
            p2 += 1  # Always move the fast pointer forward

        return count


sol = Solution()
print(sol.removeDuplicates([1,1,2]))
print(sol.removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
        
        