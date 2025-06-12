# You are climbing a staircase. It takes n steps to reach the top.
# Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

class Solution:
    def climb_stairs(self, n):
    # Base cases
        if n == 0 or n == 1:
            return 1
        
        # Recursive calls
        return self.climb_stairs(n - 1) + self.climb_stairs(n - 2)
    
sol = Solution()
print(sol.climb_stairs(3))