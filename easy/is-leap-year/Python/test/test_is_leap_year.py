from is_leap_year import is_leap_year


def test_1800_is_not_leap_year():
    # Equivalent to expect().toBeFalsy() in jest
    assert not is_leap_year(1800)


def test_1900_is_not_leap_year():
    assert not is_leap_year(1900)


def test_1990_is_not_leap_year():
    assert not is_leap_year(1990)


def test_2000_is_a_leap_year():
    assert is_leap_year(2000)


def test_2004_is_a_leap_year():
    assert is_leap_year(2004)


def test_2100_is_not_leap_year():
    assert not is_leap_year(2100)


def test_2200_is_not_leap_year():
    assert not is_leap_year(2200)


def test_2300_is_not_leap_year():
    assert not is_leap_year(2300)


def test_2400_is_a_leap_year():
    assert is_leap_year(2400)


def test_2500_is_not_leap_year():
    assert not is_leap_year(2500)
