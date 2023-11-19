package org.example;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

class MathTest {
    @Test
    void FourProduces0112(){
        assertEquals(Math.fibonacci(4), new ArrayList<>(Arrays.asList(0, 1, 1, 2)));
    }
}