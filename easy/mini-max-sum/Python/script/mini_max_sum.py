from typing import List


def miniMaxSum(arr) -> List[int]:
    # Write your code here
    max = sum(sorted(arr, reverse=True)[:-1])
    min = sum(sorted(arr)[:-1])
    print(min, max, end='')


def betterMethod(arr) -> List[int]:
    # Rather than sorting the array twice, just sort it once and change the way it's sliced in the variables
    arr.sort()
    max = sum(arr[1:])
    min = sum(arr[:-1])
    print(min, max, end='')


if __name__ == '__main__':
    arr = list(map(int, input().rstrip().split()))
    betterMethod(arr)
