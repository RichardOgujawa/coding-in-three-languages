def integer_division(a, b) -> int:
    # Print Integer Division
    return a//b


def float_division(a, b) -> float or int:
    return a/b


if __name__ == '__main__':
    a = int(input("First number?: "))
    b = int(input("Second number?: "))

    print(integer_division(a, b))
    print(float_division(a, b))
