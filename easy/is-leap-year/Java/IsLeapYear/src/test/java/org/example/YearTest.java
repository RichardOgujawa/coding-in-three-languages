package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class YearTest {
    @Test
    void Yr1800ReturnIsNotLeapYear(){
        assertFalse(Year.isLeap(1800));
    }
     @Test
    void Yr1900ReturnIsNotLeapYear(){
        assertFalse(Year.isLeap(1990));
    }
     @Test
    void Yr1990ReturnIsNotLeapYear(){
        assertFalse(Year.isLeap(1990));
    }
     @Test
    void Yr2000ReturnIsLeapYear(){
        assertTrue(Year.isLeap(2000));
    }
     @Test
    void Yr2004ReturnIsLeapYear(){
        assertTrue(Year.isLeap(2004));
    }
     @Test
    void Yr2100ReturnIsNotLeapYear(){
        assertFalse(Year.isLeap(2100));
    }
     @Test
    void Yr2200ReturnIsNotLeapYear(){
        assertFalse(Year.isLeap(2200));
    }
     @Test
    void Yr2300ReturnIsNotLeapYear(){
        assertFalse(Year.isLeap(2300));
    }
     @Test
    void Yr2400ReturnIsLeapYear(){
        assertTrue(Year.isLeap(2400));
    }
    @Test
    void Yr2500ReturnIsNotLeapYear(){
        assertFalse(Year.isLeap(2500));
    }

}