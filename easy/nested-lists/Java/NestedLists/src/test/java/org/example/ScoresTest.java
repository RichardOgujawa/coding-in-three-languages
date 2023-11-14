package org.example;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class ScoresTest {
    @Test
    void BerryAndHarryShouldBeReturned() {
        List<StudentData> dataset = new ArrayList<>(Arrays.asList(
                new StudentData("Harry", 37.21f),
                new StudentData("Berry", 37.21f),
                new StudentData("Tina", 37.2f),
                new StudentData("Akriti", 41f),
                new StudentData("Harsh", 39f)
        ));
        List<String> results = new ArrayList<>(Arrays.asList(
                "Berry",
                "Harry"
        ));
        //assertArrayEquals expects arrays, for lists just use assertEquals
        assertEquals(results, Scores.getLowestGrade(dataset));
    }
}