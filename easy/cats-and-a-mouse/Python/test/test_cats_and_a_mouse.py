from script.cats_and_a_mouse import catAndMouse


def test_123_catB():
    assert (catAndMouse(1, 2, 3)) == "Cat B"


def test_132_mouseC():
    assert (catAndMouse(1, 3, 2)) == "Mouse C"
