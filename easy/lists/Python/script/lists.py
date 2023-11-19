user_list = list()


def matchCommandToCase(userInput):
    full_command = userInput.strip().split(" ")

    match full_command[0]:
        case "insert":
            user_list.insert(int(full_command[1]), int(full_command[2]))
        case "append":
            user_list.append(int(full_command[1]))
        case "remove":
            user_list.remove(int(full_command[1]))
        case "sort":
            user_list.sort()
        case "reverse":
            user_list.reverse()
        case "pop":
            user_list.pop()
        case "print":
            print(user_list)
        case _:
            print("Not a valid command")


if __name__ == '__main__':
    N = int(input("How many commands do you want to perform?"))
    for n in range(N):
        command = input(f"Command #{n + 1} ")
        matchCommandToCase(command)
