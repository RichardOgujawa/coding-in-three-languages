package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class TestBirthdayCandleCounter {
    @Test
    void shouldBe3(){
        assertEquals(Counter.BirthdayCandleCounter(new int[] {1, 3, 2, 3, 3}), 3);
    }
}