package org.example;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.*;

class ArrayFuncTest {

    @Test
    void findMaxFour() {
        ArrayFunc arrMain = new ArrayFunc(Arrays.asList(1, 4, 3, 2, 5));
        assert (Integer.toString(arrMain.findMinFour())).equals("10");
    }

    @Test
    void findMinFour() {
        ArrayFunc arrMain = new ArrayFunc(Arrays.asList(1, 4, 3, 2, 5));
        assert (Integer.toString(arrMain.findMaxFour())).equals("14");
    }
}