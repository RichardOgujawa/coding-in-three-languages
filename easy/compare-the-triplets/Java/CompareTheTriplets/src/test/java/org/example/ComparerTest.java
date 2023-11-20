package org.example;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

class ComparerTest {
    @Test
    void AliceWins2_1(){
        Comparer.compareTheTriplets(new ArrayList<>(Arrays.asList(5, 6, 7)), new ArrayList<>(Arrays.asList(3, 4, 9)));
    }
    @Test
    void BobWins0_2(){
        Comparer.compareTheTriplets(new ArrayList<>(Arrays.asList(5, 6, 7)), new ArrayList<>(Arrays.asList(5, 9, 9)));
    }
}