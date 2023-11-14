from scripts.finding_the_percentage import find_the_percentage


def test_Malika_avg_56():
    student_marks = {
        'Krishna': [67, 68, 69],
        'Arjun': [70, 98, 63],
        'Malika': [52, 56, 60]
    }
    assert (find_the_percentage(student_marks, 'Malika')) == 56.0


def test_Harsh_avg_2650():
    student_marks = {
        'Harsh': [25, 26.5, 28],
        'Anurag': [26, 28, 30],
    }
    assert (find_the_percentage(student_marks, 'Harsh')) == 26.50
