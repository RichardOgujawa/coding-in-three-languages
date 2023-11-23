from script.diagonal_difference import bestMethod


def test_should_equal_7():
    matrix = [[1, 2, 3], [4, 5, 6], [9, 8, 9]]
    assert (bestMethod(matrix)) == 2
