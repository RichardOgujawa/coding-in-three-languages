from scripts.nested_lists import get_second_lowest_grade


def test_second_lowest_is_Berry_and_Harry():
    assert (get_second_lowest_grade([["Harry", 37.21], ["Berry", 37.21], [
            "Tina", 37.2], ["Akriti", 41], ["Harsh", 39]])) == ["Berry", "Harry"]
