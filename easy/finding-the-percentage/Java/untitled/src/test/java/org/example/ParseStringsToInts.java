package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ParseStringsToInts {
    @Test
    void ConvertStringsToInts(){
        assertTrue(Main.parseStringsToInts(new String[] {"1", "2", "3"}) instanceof int[]);
    }

}