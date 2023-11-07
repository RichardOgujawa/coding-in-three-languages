package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class WeirdCheckerTest {
    @Test
    void TwentyFourShouldNotBeWeird(){
        var checker = new WeirdChecker(24);
        assertEquals("Not Weird", checker.checkIfWeird());
    }
    @Test
    void ThreeShouldBeWeird(){
        var checker = new WeirdChecker(3);
        assertEquals("Weird", checker.checkIfWeird());
    }
}