def print_to_n(n) -> str:
    # Original solution was this:
    #   return ''.join([str(num_before_n) for num_before_n in range(1, n+1)])
    # However the question specifically asks us not to use any string methods.
    # The new method below instead simply concatenates the strings using the += operator.

    result = ''
    for num_before_n in range(1, n + 1):
        result += str(num_before_n)
    return result


if __name__ == "__main__":
    n = int(input("What number would you like to print to?:"))
    print(print_to_n(n))
