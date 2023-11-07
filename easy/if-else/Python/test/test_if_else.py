from if_else import check_n


def main():
    test_if_3_is_weird()
    test_if_24_is_weird()


def test_if_3_is_weird():
    assert (check_n(3)) == "Weird"


def test_if_24_is_weird():
    assert (check_n(24)) == "Not Weird"
