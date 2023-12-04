from script.staircase import staircase
import sys
from io import StringIO


def capture_stdout(func, *args, **kwargs):
    """
    Capture stdout from a function.
    """
    captured_output = StringIO()
    sys.stdout = captured_output
    try:
        # This function calls a function, captures the console output, gets the value, which is returned and therefore able to be compared with another value.
        func(*args, **kwargs)
        return captured_output.getvalue()
    finally:
        # Restore the original value of the sys.stdout stream
        sys.stdout = sys.__stdout__


def test_staircase():
    # Test case 1: n = 4
    assert capture_stdout(staircase, 4) == "   #\n  ##\n ###\n####\n"

    # Test case 2: n = 6
    assert capture_stdout(
        staircase, 6) == "     #\n    ##\n   ###\n  ####\n #####\n######\n"
