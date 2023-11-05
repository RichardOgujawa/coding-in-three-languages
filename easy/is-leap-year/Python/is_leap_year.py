def is_leap_year(year) -> bool:
    is_leap_year = False
    if not year % 4:
        is_leap_year = True
        if not year % 400:
            is_leap_year = True
        elif not year % 100:
            is_leap_year = False
    return is_leap_year


if __name__ == "__main__":
    print(is_leap_year(1800))
    print(is_leap_year(1990))
    print(is_leap_year(2100))
    print(is_leap_year(2300))
    print(is_leap_year(2500))
    print(is_leap_year(2000))
    print(is_leap_year(2004))
    print(is_leap_year(2400))
