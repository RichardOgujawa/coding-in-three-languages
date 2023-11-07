package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class NumberTest {
    @Test
    void TestThatNEquals3Returns123(){
        assertEquals("123", Number.print_to_n(3));
    }
}