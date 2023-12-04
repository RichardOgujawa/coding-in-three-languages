def plusMinus(arr):
    # Write your code here
    zero_sum = 0
    positive_sum = 0
    negative_sum = 0
    length = len(arr)
    for num in arr:
        if num == 0:
            zero_sum += 1
        elif num > 0:
            positive_sum += 1
        else:
            negative_sum += 1
    return [
        "{:.6f}".format(positive_sum/length),
        "{:.6f}".format(negative_sum/length),
        "{:.6f}".format(zero_sum/length)
    ]


def betterMethod(arr):
    length = len(arr)
    # arr.count(x) is a method to count the number of occurences of x in an array
    # sum(1 for num in arr if num > 0). Returns 1 for every number in arr that is greater than 0.
    counts = [sum(1 for num in arr if num > 0),
              sum(1 for num in arr if num < 0), arr.count(0)]
    # another list comprehension which takes each count and returns the count turned into a fraction and formatted.
    return ["{:.6f}".format(count / length) for count in counts]


if __name__ == '__main__':
    n = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    for num in plusMinus(arr):
        print(num)
