def fibonacci(n) :
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
    
def fibonacci_2(n):
    print(n)
    if n == 0 or n == 1:
        return 1
    
    current = fibonacci_2(n - 1) + fibonacci_2(n - 2)
    return current


if __name__ == "__main__":
    n = int(input("How many places do you want to calculate to? "))
    result = fibonacci_2(n)
    print(f"Fibonacci value at position {n} is: {result}")