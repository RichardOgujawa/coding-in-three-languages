from script.plus_minus import betterMethod


def test_betterMethod():
    expected_results = [0.500000, 0.333333, 0.166667]
    assert (betterMethod([-4, 3, -9, 0, 4, 1])
            ) == ["{:.6f}".format(count) for count in expected_results]
