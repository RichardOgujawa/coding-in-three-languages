def list_comp(x, y, z, n) -> list:
    # The for loops in the nested list comprehension iterate over the elements within the ranges specified, returning a ;list of all the possible combinations of i, j and k.
    return [[i, j, k] for i in range(x + 1) for j in range(y + 1) for k in range(z + 1) if i + j + k != n]


if __name__ == '__main__':
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())
    print(list_comp(1, 1, 1, 2))
