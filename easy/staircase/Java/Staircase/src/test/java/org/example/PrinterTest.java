package org.example;

import org.example.Printer;
import org.junit.jupiter.api.Test;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class PrinterTest {

    @Test
    void printStairCase() {
        // Redirect System.out to capture printed output
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        System.setOut(new PrintStream(outputStream));

        Printer.stairCase(4);

        // Clean up: Restore System.out back to it's original state
        System.setOut(System.out);

        // Convert the captured output to a String
        String printedOutput = outputStream.toString();
        // \\s+: Matches one or more whitespace characters.
        //$: Anchors the pattern to the end of the string.

        // Define the expected output
        String expectedOutput = "   #\n  ##\n ###\n####";

        // Check if the printed output matches the expected output
        assertEquals(expectedOutput, printedOutput);
    }
}
