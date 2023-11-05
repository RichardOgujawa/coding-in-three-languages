from is_leap_year import is_leap_year


def main():
    test_1990_is_not_leap_year()


def test_1990_is_not_leap_year():
    # Assert that it's falsy
    assert not is_leap_year(1990)


if __name__ == "__main__":
    main()
