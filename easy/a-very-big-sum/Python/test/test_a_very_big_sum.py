from script.a_very_big_sum import aVeryBigSum


def testShouldEqual5000000015():
    assert (aVeryBigSum([1000000001, 1000000002,
            1000000003, 1000000004, 1000000005])) == 5000000015
