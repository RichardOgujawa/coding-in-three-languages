from script.mini_max_sum import miniMaxSum
import sys
from io import StringIO


def capture_stdout(func, *args, **kwargs):
    # Create a new String IO buffer object
    captured_output = StringIO()
    # Set the output to the object, to redirect the console output to the file-like buffer StringIO object.
    sys.stdout = captured_output
    try:
        # Call the created function with the print statement in it with the passed in arguments
        func(*args, **kwargs)
        # Get the value of the print statement
        return captured_output.getvalue()
    finally:
        # Clean up - restore the original value of the sys.stdoout stream
        sys.stdout = sys.__stdout__


def test_10_14():
    assert capture_stdout(miniMaxSum, [1, 2, 3, 4, 5]) == "10 14"
