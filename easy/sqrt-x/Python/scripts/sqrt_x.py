# Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
# You must not use any built-in exponent function or operator.

class Solution:
    def sqrt_x(self, x: int) -> int:
        if x < 2:
            return x # return 0 for x = 0, and 1 for x = 1
        half_x = x // 2  # The square root is always going to be less than half, except for the edge case x == 1
        arr = range(1, half_x + 1)
        l, r = 0, len(arr) - 1

        while l <= r:
            mid = (l + r) // 2  # Midpoint index
            num = arr[mid]      # Value at midpoint

            if num * num == x:
                return num  # Exact square root found
            elif num * num < x:
                l = mid + 1  # Too low — search the right half
            else:
                r = mid - 1  # Too high — search the left half
        return arr[r] # The right pointer is going to end up on the left-side and the left pointer on the right side, this is when the loop's condition is met and the loop breaks, so in that sense r becomes the floor
    
sol = Solution()
print(sol.sqrt_x(20))

# [1, 2, 3, 4], mid = 2; 2 x 2 is too small so so we move left pointer to mid + 1
# [3, 4], mid = 3 ; 3 x 3 is too big so we move right pointer to mid - 1
# [2], mid = 2;  right pointer is now less than left pointer therefore loop breaks and 2 is returned
