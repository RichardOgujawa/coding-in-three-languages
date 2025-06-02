from script.add_binary import Solution

sol = Solution()

# Testing Convert To Binary Method
def test_convert_to_binary():
    assert sol.convertToBinary(0) == "0"
    assert sol.convertToBinary(1) == "1"
    assert sol.convertToBinary(2) == "10"
    assert sol.convertToBinary(5) == "101"
    assert sol.convertToBinary(13) == "1101"
    assert sol.convertToBinary(255) == "11111111"
    assert sol.convertToBinary(1024) == "10000000000"

# Testing Convert To Regular Number Method
def test_convert_to_regular_number():
    assert sol.convertToRegularNumber("0") == 0
    assert sol.convertToRegularNumber("1") == 1
    assert sol.convertToRegularNumber("10") == 2
    assert sol.convertToRegularNumber("101") == 5
    assert sol.convertToRegularNumber("1101") == 13
    assert sol.convertToRegularNumber("11111111") == 255
    assert sol.convertToRegularNumber("10000000000") == 1024

# Testing Bit By Bit Addition Method
def test_basic_cases():
    assert sol.bitByBitAddition("0", "0") == "0"
    assert sol.bitByBitAddition("1", "0") == "1"
    assert sol.bitByBitAddition("1", "1") == "10"
    assert sol.bitByBitAddition("10", "1") == "11"
    assert sol.bitByBitAddition("11", "1") == "100"

def test_carry_propagation():
    assert sol.bitByBitAddition("1111", "1") == "10000"
    assert sol.bitByBitAddition("1011", "1101") == "11000"
    assert sol.bitByBitAddition("111", "111") == "1110"
    assert sol.bitByBitAddition("111", "1") == "1000"

def test_unequal_lengths():
    assert sol.bitByBitAddition("0", "111") == "111"
    assert sol.bitByBitAddition("1", "111") == "1000"
    assert sol.bitByBitAddition("111", "0") == "111"
    assert sol.bitByBitAddition("101", "11") == "1000"

def test_large_inputs():
    assert sol.bitByBitAddition("101010", "110011") == "1011101"
    assert sol.bitByBitAddition("1" * 50, "1") == "1" + "0" * 50
    assert sol.bitByBitAddition("1010101010101010", "1010101010101010") == "10101010101010100"