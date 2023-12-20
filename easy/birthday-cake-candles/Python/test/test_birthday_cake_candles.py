from script.birthday_cake_candles import birthdayCakeCandles


def test_two_tallest_candles():
    assert (birthdayCakeCandles([3, 2, 1, 3])) == 2
