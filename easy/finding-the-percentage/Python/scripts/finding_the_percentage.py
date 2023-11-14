def find_the_percentage(student_marks, name) -> float:
    accumulator = 0
    for score in student_marks[name]:
        accumulator += score
    return accumulator/3


if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()

    print(find_the_percentage(student_marks, query_name))
