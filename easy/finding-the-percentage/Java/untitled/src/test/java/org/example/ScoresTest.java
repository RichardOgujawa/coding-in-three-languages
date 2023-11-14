package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ScoresTest {
    @Test
    void AverageIs50(){
        assertEquals(50, Scores.getAverage(new int[] {0, 50, 100}));
    }
}