package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class DivisionTest {

    @Test
    void IntDividesThreeAndFiveToGiveZero(){
        var calculator = new Division(3,5);
        assertEquals(0, calculator.IntegerDivider());
    }
    @Test
    void FloatDividesThreeAndFiveToGivePointSix(){
        var calculator = new Division(3,5);
        assertEquals(0.6, calculator.FloatDivider());
    }
    @Test
    void IntDividesFourAndThreeToGiveZero(){
        var calculator = new Division(4,3);
        assertEquals(1, calculator.IntegerDivider());
    }
    @Test
    void FloatDividesFourAndThreeToGiveOnePointThreeRepeating(){
        var calculator = new Division(4,3);
        assertEquals(1.3333333333333333, calculator.FloatDivider());
    }
}
