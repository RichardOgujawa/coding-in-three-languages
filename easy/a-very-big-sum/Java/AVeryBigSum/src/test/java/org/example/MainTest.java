package org.example;

import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

class MainTest {
    @Test
    void shouldEqual5000000015(){
        String[] arrElems = "1000000001, 1000000002, 1000000003, 1000000004, 1000000005".trim().split(", ");
        var arrElemsInt = Arrays.stream(arrElems).map(Integer::parseInt).toArray();
        assertEquals( 5000000015L, Main.customAccumulator(0, arrElemsInt));
    }
}