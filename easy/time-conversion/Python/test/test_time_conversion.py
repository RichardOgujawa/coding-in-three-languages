from script.time_conversion import timeConversion


def test_timeConversion():
    # Test case 1: n = 4
    assert timeConversion('12:01:35:AM') == "00:01:35"
    assert timeConversion('12:01:35:PM') == "12:01:35"
    assert timeConversion('07:01:35:AM') == "07:01:35"
    assert timeConversion('07:01:35:PM') == "19:01:35"
