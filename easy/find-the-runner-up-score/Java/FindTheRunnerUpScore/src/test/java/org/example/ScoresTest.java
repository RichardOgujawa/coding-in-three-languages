package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ScoresTest {
    @Test
    void TestThat234665Equals5(){
        assertEquals(5, Scores.findRunnerUp(new int[]{2, 3, 4, 6, 6, 5})[1]);
    }
}