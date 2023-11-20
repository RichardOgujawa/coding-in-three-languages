from script.compare_the_triplets import compareTriplets


def test_should_be_2_1():
    assert (compareTriplets([17, 28, 30], [99, 16, 8]) == [2, 1])
