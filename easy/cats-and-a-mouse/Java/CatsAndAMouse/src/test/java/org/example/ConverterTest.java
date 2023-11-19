package org.example;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class ConverterTest {
    @Test
    void arrayToInt(){
        String[] stringArr = {"0", "1", "2"};
        assertEquals(Converter.arrayToInt(stringArr), new ArrayList<>(Arrays.asList(0, 1, 2)));
    }
}