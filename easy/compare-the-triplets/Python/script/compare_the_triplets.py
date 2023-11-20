def compareTriplets(a, b):
    alice_rating, bob_rating = 0, 0
    for (i, j) in zip(a, b):
        if i > j:
            alice_rating += 1
        elif j > i:
            bob_rating += 1
    return [alice_rating, bob_rating]


if __name__ == '__main__':
    a = list(map(int, input().rstrip().split()))

    b = list(map(int, input().rstrip().split()))

    result = compareTriplets(a, b)

    for rating in result:
        print(rating)
