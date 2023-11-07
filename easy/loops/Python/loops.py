def print_squares(n):
    squares = list()
    for i in range(n):
        squares.append(i**2)
    return squares


if __name__ == "__main__":
    n = int(input("What would you like n to be?: "))
    for square in print_squares(n):
        print(square)
