"""
Given an integer,n, perform the following conditional actions:
If n is odd, print Weird
If n is even and in the inclusive range of  to , print Not Weird
If n is even and in the inclusive range of  to , print Weird
If n is even and greater than , print Not Weird
"""


def check_n(num):
    if num % 2:
        return ('Weird')
    else:
        if num >= 2 and num <= 5:
            return ('Not Weird')
        elif num >= 6 and num <= 20:
            return ('Weird')
        else:
            return ('Not Weird')


if __name__ == '__main__':
    n = int(input('What number do you want to check?').strip())
    print(check_n(n))
