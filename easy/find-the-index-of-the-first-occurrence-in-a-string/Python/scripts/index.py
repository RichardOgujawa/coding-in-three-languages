# Given two strings `haystack` and `needle`, return the index of the first occurrence
# of `needle` in `haystack`, or -1 if `needle` is not part of `haystack`.
#
# Example:
# Input: haystack = "sadbutsad", needle = "sad"
# Output: 0
#
# Input: haystack = "leetcode", needle = "leeto"
# Output: -1
#
# Constraints:
# - 1 <= haystack.length, needle.length <= 10⁴
# - haystack and needle consist of only lowercase English characters.

class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        p1 = 0
        p2 = len(needle)
        index = -1 
        while p2 < len(haystack) + 1:
            window = haystack[p1:p2]
            print(window)
            if window == needle:
                return p1
            else: 
                p1 +=1 
                p2 += 1
        return index
    # def strStrChatGPT(self, haystack: str, needle: str) -> int:
    #     match = haystack.find(needle)
    #     return match if match != -1 else -1

        
    
sol = Solution()
print(sol.strStr("sadbutsad", "sad"))
# print(sol.strStrChatGPT("sadbutsad", "sad"))
print(sol.strStr("leetcode", "leeto"))
# print(sol.strStrChatGPT("leetcode", "leeto"))