# You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
# and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

# Merge nums2 into nums1 as one sorted array in-place.

# Note:
# The final sorted array should not be returned by the function,
# but instead be stored inside the array nums1.
# To accommodate this, nums1 has a length of m + n,
# where the first m elements denote the elements that should be merged,
# and the last n elements are set to 0 and should be ignored.
# nums2 has a length of n.

class Solution:
    def mergeSortedArrays(self, nums1: list[int], m: int, nums2: list[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        # Start from the end
        p1 = m - 1  # Last index of valid nums1
        p2 = n - 1  # Last index of nums2
        p = m + n - 1  # Last index of nums1's total capacity
        nums1 += [0] * n

        while p1 >= 0 and p2 >= 0:
            if nums1[p1] > nums2[p2]:
                nums1[p] = nums1[p1]
                p1 -= 1
            else:
                nums1[p] = nums2[p2]
                p2 -= 1
            p -= 1

        # If there are remaining elements in nums2, copy them
        while p2 >= 0:
            nums1[p] = nums2[p2]
            p2 -= 1
            p -= 1


sol = Solution()
print(sol.mergeSortedArrays(nums1 = [1,2,3], m = 3, nums2 = [2,5,6], n = 3))