from find_the_runner_up_score import find_the_runner_up


def test_runner_up_should_be_5() -> None:
    assert (find_the_runner_up([2, 3, 6, 6, 5])) == 5
