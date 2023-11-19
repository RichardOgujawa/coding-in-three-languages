package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MouseChaseTest {
    @Test
    void findWinner(){
        assertEquals(MouseChase.findWinner(1, 2, 3), "Cat B");
    }
}