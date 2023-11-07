from division import integer_division, float_division

#  Testing for a = 3 and b = 5


def test_int_divide_3_and_5():
    assert (integer_division(3, 5)) == 0


def test_float_divide_3_and_5():
    assert (float_division(3, 5)) == 0.6

#  Testing for a = 4 and b = 3


def test_int_divide_4_and_3():
    assert (integer_division(4, 3)) == 1


def test_float_divide_4_and_3():
    assert (float_division(4, 3)) == 1.3333333333333333
