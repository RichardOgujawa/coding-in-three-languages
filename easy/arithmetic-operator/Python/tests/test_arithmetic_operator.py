from arithmetic_operator import add, product, minus


# Testing a = 3 and b = 5
def test_add_3_and_5():
    assert add(3, 5) == 8


def test_minus_3_and_5():
    assert minus(3, 5) == -2


def test_product_3_and_5():
    assert product(3, 5) == 15


# Testing a = 3 and b = 2
def test_add_3_and_2():
    assert add(3, 2) == 5


def test_minus_3_and_2():
    assert minus(3, 2) == 1


def test_product_3_and_2():
    assert product(3, 2) == 6
