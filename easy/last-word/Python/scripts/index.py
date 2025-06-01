# Given a string s consisting of words and spaces, return the length of the last word in the string.
# A word is defined as a maximal substring consisting of non-space characters only.

class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        s_arr = s.split()
        return len(s_arr[-1])     
    def reverseTraversal(self, s: str) -> int:
        if not s:
            return 0

        right = len(s) - 1

        # Skip trailing spaces
        while right >= 0 and s[right] == ' ':
            right -= 1

        length = 0

        # Count backwards until we hit a space or start of string
        while right >= 0 and s[right] != ' ':
            length += 1
            right -= 1

        return length
            
sol = Solution()
print(sol.lengthOfLastWord("Hello World"))
print(sol.reverseTraversal("Hello Worlds"))