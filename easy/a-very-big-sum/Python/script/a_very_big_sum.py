def aVeryBigSum(ar):
    accum = 0
    for el in ar:
        accum += el
    return accum


def getUserInput():
    user_arr_size = int(input("What size is the array? "))
    user_arr = list(map(int, input().strip().split(" ")))

    if (user_arr_size == len(user_arr)):
        return user_arr
    else:
        print("Please make sure the array matches the size specified")
        getUserInput()


if __name__ == "__main__":
    arr_elements = getUserInput()
    print(aVeryBigSum(arr_elements))
