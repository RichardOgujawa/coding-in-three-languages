# Given two binary strings a and b, return their sum as a binary string.
# Binary strings consist only of characters '0' or '1'.
# The result should not have any leading zeroes unless the result is "0".
# Example 1:
    # Input: a = "11", b = "1"
    # Output: "100"
# Example 2:
    # Input: a = "1010", b = "1011"
    # Output: "10101"

class Solution:     
    def convertToBinary(self, int_a: int) -> str:
        if int_a == 0:
            return "0"
        binary = list()
        while int_a > 0:
            binary.insert(0, str(int_a % 2)) # Add the remainder to the binary at the front, we're buildling the list in reverse, by adding the bits to the beginning of the list
            int_a = int_a // 2 # update the int value so we can calculate the next remainder to add
        return ("".join(binary))
            

    def convertToRegularNumber(self, str_a: str) -> int:
        result = 0
        for digit in str_a:
            result = 2 * result + int(digit)
        return result

    def bitByBitAddition(self, a:str, b:str) -> str:
        """  Logic behind bit-by-bit binary addition   
                1  (carry)
               1011
           +   1101
           --------
              11000
        """

        # Check from the back to the front
        # Add two numbers 
        # If the addition is more than 1
        # Carry is 1, and should be added to the next value
        # it may exceed the size of the list also
        
        # print(sol.bitByBitAddition("11", "1")) # Output: "100"
        carry = 0
        result = []
        a, b = a[::-1], b[::-1]
        sorted_lists = sorted([a, b], key=len)
        longest_str = sorted_lists[-1]
        shortest_str = sorted_lists[0]
        i = 0
        while i < len(longest_str):
            subtotal = str((int(longest_str[i]) + int(shortest_str[i]) if i < len(shortest_str) else int(longest_str[i]))+ carry)
            # print(f"i: {i}, subtotal: {subtotal}, carry: {carry}")
            if int(subtotal) < 2:
                result.append(subtotal)
                carry = 0
                # print("appended subtotal")
            else:
                result.append(str(int(subtotal) % 2))
                carry = 1
                # print("appended 0")
            i += 1
        if carry == 1:
            result.append(str(carry))
        return "".join(result)[::-1]

    
    def addBinary(self, a: str, b:str) -> str:
        # Conver the binary to regular number 
        total = self.convertToRegularNumber(a) + self.convertToRegularNumber(b)
        return str(self.convertToBinary(total))

# An easy way to calculate the binary of a number, the binary of 13 is 1101 (because you read it from the bottom up)
# 13 / 2 = 6 remainder 1
# 6 / 2 = 3 remainder 0 
# 3 / 2 = 1 remainder 1 
# 1 / 2 = 0 remainder 1

#  (1 x 2^3) + (1 x 2^2) + (0 x 2^1) + (1 x 2^0) = 8 + 4 + 0 + 1 = 13
# Another way is the inverse of getting the binary from a regular number, instead of divisions, multiplications, and add back on the remainder, but go from bottom to top, 2 x current sum + remainder (digits from binary)
# sum = 2 x 0 + 1 = 1
# sum = 2 x 1 + 1 = 3
# sum = 2 x 3 + 0 = 6 
# sum = 2 x 6 + 1 = 13

sol = Solution()
# print(sol.convertToBinary(13))
# print(sol.convertToRegularNumber("1101")) 
print(sol.bitByBitAddition("100", "1")) # Output: "100"
# print(sol.addBinary(a = "1010", b = "1011")) # Output: "10101"
print(sol.bitByBitAddition("1011", "1101")) # Output: "11000"

sol = Solution()

# Simple no-carry
print(sol.bitByBitAddition("0", "0"))       # Expected: "0"
print(sol.bitByBitAddition("1", "0"))       # Expected: "1"
print(sol.bitByBitAddition("1", "1"))       # Expected: "10"

# Different lengths
print(sol.bitByBitAddition("10", "1"))      # Expected: "11"
print(sol.bitByBitAddition("101", "10"))    # Expected: "111"
print(sol.bitByBitAddition("1001", "10"))   # Expected: "1011"

# Carry over multiple bits
print(sol.bitByBitAddition("11", "1"))      # Expected: "100"
print(sol.bitByBitAddition("111", "1"))     # Expected: "1000"
print(sol.bitByBitAddition("1111", "1"))    # Expected: "10000"

# Both long
print(sol.bitByBitAddition("1010101", "110110"))   # Expected: "10010011"

# Large binary numbers
print(sol.bitByBitAddition("1111111111111111", "1"))  # Expected: "10000000000000000"

# One number is 0
print(sol.bitByBitAddition("0", "1101"))     # Expected: "1101"
print(sol.bitByBitAddition("1101", "0"))     # Expected: "1101"
