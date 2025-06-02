from scripts.sqrt_x import Solution

sol = Solution()

def test_edge_cases():
    assert sol.sqrt_x(0) == 0     
    assert sol.sqrt_x(1) == 1   

def test_perfect_squares():
    assert sol.sqrt_x(4) == 2      
    assert sol.sqrt_x(16) == 4   
    assert sol.sqrt_x(100) == 10   
    assert sol.sqrt_x(2147395600) == 46340  

def test_decimal_squares():
    assert sol.sqrt_x(2) == 1      # sqrt(2) ≈ 1.41
    assert sol.sqrt_x(8) == 2      # sqrt(8) ≈ 2.82
    assert sol.sqrt_x(10) == 3     # sqrt(10) ≈ 3.16
    assert sol.sqrt_x(27) == 5     # sqrt(27) ≈ 5.19
    assert sol.sqrt_x(50) == 7     # sqrt(50) ≈ 7.07
    assert sol.sqrt_x(101) == 10   # sqrt(101) ≈ 10.04
    assert sol.sqrt_x(999) == 31   # sqrt(999) ≈ 31.6
    assert sol.sqrt_x(1000) == 31  # sqrt(1000) ≈ 31.62
    assert sol.sqrt_x(2**31 - 1) == 46340  # sqrt(2147483647) ≈ 46340.95