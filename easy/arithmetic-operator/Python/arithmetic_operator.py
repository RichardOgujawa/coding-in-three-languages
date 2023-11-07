def add(a, b) -> int:
    return a + b


def minus(a, b) -> int:
    return a - b


def product(a, b) -> int:
    return a * b


if __name__ == '__main__':
    a = int(input("First number: "))
    b = int(input("Second number: "))

    print(add(a, b))
    print(minus(a, b))
    print(product(a, b))
