def find_the_runner_up(arr) -> list:
    return sorted([*{*arr}])[-2]


if __name__ == '__main__':
    # Turn it into a set and then get the second last item
    print(find_the_runner_up([2, 3, 6, 6, 5]))
