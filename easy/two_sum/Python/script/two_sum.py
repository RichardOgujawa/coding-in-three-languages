class Solution():
    def two_sum(self, list, target):
        hash = dict()
        for index, x in enumerate(list):
            diff = target - x
            if diff in hash:
                return [hash[diff], index]
            else: 
                hash[x] = index


solution = Solution()
print(solution.two_sum([1, 2, 5], 7))
print(solution.two_sum([3, 2, 3], 6))
            

