package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ListTest {
    @Test
    void TestX1Y1Z1N2(){
        assertArrayEquals(new int[][]{{0, 0, 0}, {0, 0, 1}, {0, 1, 0}, {1, 0, 0}, {1, 1, 1}},
    new List(1, 1, 1, 2).permutationsBeforeN());
    }

    @Test
    void TestX2Y2Z2N2(){
        assertArrayEquals(new int[][]{{0, 0, 0}, {0, 0, 1}, {0, 1, 0}, {0, 1, 2}, {0, 2, 1}, {0, 2, 2}, {1, 0, 0},
                        {1, 0, 2}, {1, 1, 1}, {1, 1, 2}, {1, 2, 0}, {1, 2, 1}, {1, 2, 2}, {2, 0, 1}, {2, 0, 2},
                        {2, 1, 0}, {2, 1, 1}, {2, 1, 2}, {2, 2, 0}, {2, 2, 1}, {2, 2, 2}},
        new List(2, 2, 2, 2).permutationsBeforeN());
    }
}