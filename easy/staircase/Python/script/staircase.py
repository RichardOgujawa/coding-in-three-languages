# Complete the 'staircase' function below.
# The function accepts INTEGER n as parameter.

def staircase(n):
    # Print 4 x 4 grid, where you start with n -1 spaces, and 1 hash symbol, and increment the number of hash symbols as you decrement the numbe of spaces.
    for i in range(1, n + 1):
        print(' ' * (n - i) + '#' * i)


if __name__ == '__main__':
    n = int(input().strip())

    staircase(n)
