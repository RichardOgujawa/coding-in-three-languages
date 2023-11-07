from loops import print_squares


def main():
    test_n_equals_5()


def test_n_equals_5():
    assert (print_squares(5)) == [0, 1, 4, 9, 16]
