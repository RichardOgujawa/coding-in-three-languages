package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class LoopsTest {
    @Test
    void testThatFiveReturns5Squares(){
        assertArrayEquals(new int[]{0, 1, 4, 9, 16}, Loops.print_Squares(5));
    }
}