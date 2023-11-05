def is_leap_year(year) -> bool:
    is_leap_year = False
    if not year % 4:
        if not year % 400:
            is_leap_year = True
        elif not year % 100:
            is_leap_year = False
    return is_leap_year


if __name__ == "__main__":
    print(is_leap_year(1990))
