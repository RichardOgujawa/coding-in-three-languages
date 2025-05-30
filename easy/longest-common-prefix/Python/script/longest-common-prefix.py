# LeetCode Problem: Longest Common Prefix
# URL: https://leetcode.com/problems/longest-common-prefix/

# Description:
# Write a function to find the longest common prefix string amongst an array of strings.
# If there is no common prefix, return an empty string "".

# Example 1:
# Input: strs = ["flower","flow","flight"]
# Output: "fl"

# Example 2:
# Input: strs = ["dog","racecar","car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.

# Constraints:
# - 1 <= strs.length <= 200
# - 0 <= strs[i].length <= 200
# - strs[i] consists of only lowercase English letters.

class Solution:
    def recursiveCheck(self, strs, shortest_str):
        for word in strs: 
            if not word.startswith(shortest_str) and shortest_str:
                return self.recursiveCheck(strs, shortest_str[:-1])
        return shortest_str

    def longestCommonPrefix(self, strs) -> str:
        # find the shortest string
        shortest_str = sorted(strs, key=len)[0]
        # check if it's in all of the other strings
        # if not take away one letter from the end and try again
        # if you find a consistent match print the match 
        # else return an emtoy string
        return self.recursiveCheck(strs, shortest_str)
       



sol = Solution()
print("[flower, flow, flight] :", sol.longestCommonPrefix(["flower","flow","flight"]))
print("[dog,racecar,car] :", sol.longestCommonPrefix(["dog","racecar","car"]))
print("[break,bread,breadth] :", sol.longestCommonPrefix(["break","bread","breadth"]))

