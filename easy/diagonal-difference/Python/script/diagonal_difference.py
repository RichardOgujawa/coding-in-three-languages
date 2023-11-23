import numpy as np

# This is a better method because instead of using nested loop to access the innter arras resulting in a time complexity of O(n^2),
# The array is double indexed to retrieve the contents of the inner arrays.


def bestMethod(arr):
    n = len(arr)  # Number of rows in the element
    rtl_sum = 0  # running total for rtl
    ltr_sum = 0  # running total for ltr

    for i in range(n):  # For each row
        # Add onto the rtl running total each element that is part of the rtl diagonal. I.e. for row 0, this would
        rtl_sum += arr[i][i]
        # be the 0th element, for row 1, this would be the 1st element, etc.
        # Add onto the ltr running total each element that is part of the ltr diagoal. I.e. for row 0, this
        ltr_sum += arr[i][n - 1 - i]
        # would be the element at position (n - 1 - i), which is, a 3 x 3 matrix, element 3 - 1 - 0 which is the second element, and i continues to incremement to incrementally decrease the index.
    return abs(rtl_sum - ltr_sum)


def numpyMethod(arr):
    # Write your code here
    # Convert it into a numpy array
    matrix = np.array(arr)

    # Get the sum of the right to left diagonal
    rtl_sum = np.trace(matrix)

    # Ger the sum of the left to right diagonal
    ltr_sum = np.trace(np.fliplr(matrix))

    # Return the absolute difference between them
    return abs(rtl_sum - ltr_sum)


def initialMethod(arr):
    # Get the rtl diagonal
    # Create a for loop that would get the values for both the rtl sum and ltr sum at the same time
    rtl = []
    ltr = []
    # rtl_indices = [num for num in range(len(arr))]
    ltr_indices = [num for num in range(len(arr))]
    ltr_indices.reverse()
    # For rtl I need the el where i and j are equal
    for row in range(len(arr)):
        for index, value in enumerate(arr[row]):
            if index == row:
                rtl.append(value)
            if index == ltr_indices[row]:
                ltr.append(value)

    return abs(sum(rtl) - sum(ltr))


if __name__ == '__main__':
    n = int(input().strip())

    arr = []

    # For each row the user wants to create, create an arry and apppend it to the main array
    for _ in range(n):
        arr.append(list(map(int, input().rstrip().split())))

    print(f"Method with complexity O(n): ", bestMethod(arr))
    print(f"Method with complexity O(n^2): ",
          initialMethod(arr))
    print(f"Method with complexity O(n): ", numpyMethod(arr))
