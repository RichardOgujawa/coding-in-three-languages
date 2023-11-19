def fibonacci(n) -> int:
    # Starting with zero, add one to it, and then
    prev = 0
    current = 1

    for i in range(n):
        # Store value of next element in previous
        next = prev + current
        # Add previous to next to get next
        prev = current
        current = next
        print(next)


if __name__ == "__main__":
    n = int(input("How many places do you want to calculate to?"))

    fibonacci(n)
