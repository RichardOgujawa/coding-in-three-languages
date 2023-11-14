def get_second_lowest_grade(data) -> []:
    # Get the second lowest score
    second_lowest_grade = sorted(set(grade for name, grade in data))[1]
    second_lowest_students = []
    for name, grade in data:
        if grade == second_lowest_grade:
            second_lowest_students.append(name)
    return sorted(second_lowest_students)


if __name__ == '__main__':
    # Store all the results in a list
    data = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        data.append([name, score])

    # Print the results
    for name in get_second_lowest_grade(data):
        print(name)
