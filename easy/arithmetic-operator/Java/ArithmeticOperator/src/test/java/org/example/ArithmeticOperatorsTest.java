package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ArithmeticOperatorsTest {

    //Testing for int a = 3 and int b = 5
    @Test
    void threePlusFiveShouldBeEight(){
        var calculator = new ArithmeticOperators(3,5);
        assertEquals(8, calculator.add());
    }
    @Test
    void threeMinusFiveShouldBeMinusTwo(){
        var calculator = new ArithmeticOperators(3,5);
        assertEquals(-2, calculator.minus());
    }
    @Test
    void threeTimesFiveShouldBeFifteen(){
        var calculator = new ArithmeticOperators(3,5);
        assertEquals(15, calculator.product());
    }

    //Testing for int a = 3 and int b = 2
    @Test
    void threePlusTwoShouldBeEight(){
        var calculator = new ArithmeticOperators(3,2);
        assertEquals(5, calculator.add());
    }
    @Test
    void threeMinusTwoShouldBeMinusTwo(){
        var calculator = new ArithmeticOperators(3,2);
        assertEquals(1, calculator.minus());
    }
    @Test
    void threeTimesTwoShouldBeFifteen(){
        var calculator = new ArithmeticOperators(3,2);
        assertEquals(6, calculator.product());
    }
}