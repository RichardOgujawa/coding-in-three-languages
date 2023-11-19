def catAndMouse(cat_A, cat_B, mouse_C):
    dist_A = abs(mouse_C - cat_A)
    dist_B = abs(mouse_C - cat_B)

    # If the distance between cat A and the mouse is smaller than the distance between cat B and the mouse then cat A will get to the mouse first.
    if dist_A < dist_B:
        return "Cat A"
    elif dist_A > dist_B:
        return "Cat B"
    else:
        return "Mouse C"


if __name__ == "__main__":
    n = int(input())

    for _ in range(n):
        initialArr = input().strip().split(" ")
        cat_A, cat_B, mouse_C = map(lambda x: int(x), initialArr)
        print(catAndMouse(cat_A, cat_B, mouse_C))
