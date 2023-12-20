# The function is expected to return a STRING.
# The function accepts STRING s as parameter.


def timeConversion(s: str) -> str:
    # If it's PM return 12+ the hour
    timeArr = s[:-2].split(':')
    if s[-2:].upper() == 'AM':
        return "{:02d}:{:02d}:{:02d}".format(int(timeArr[0]) if int(timeArr[0])
                                             < 12 else 0,
                                             int(timeArr[1]),
                                             int(timeArr[2]))
    else:
        return "{:02d}:{:02d}:{:02d}".format(int(timeArr[0]) + 12 if int(timeArr[0]) < 12 else 12,
                                             int(timeArr[1]),
                                             int(timeArr[2]))


if __name__ == '__main__':
    s = input()

    print(timeConversion(s))
