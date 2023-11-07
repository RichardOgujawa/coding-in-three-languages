package org.example;

public class Main {
    public static void main(String[] args) {
        System.out.println(Year.isLeap(1604));
        System.out.println(Year.isLeap(2000));
    }
}

class Year{
    public static boolean isLeap(int year){
        boolean isLeapYear = false;
        // The year can be evenly divided by 4, is a leap year, unless:
            if(year % 4 == 0){
                isLeapYear = true;
                // The year is also evenly divisible by 400. Then it is a leap year.
                if(year % 400 == 0){
                    isLeapYear = true;
                }
                // The year can be evenly divided by 100, it is NOT a leap year, unless:
                else if(year % 100 == 0){
                    isLeapYear = false;
                }
            } else {
                isLeapYear = false;
            }
            return isLeapYear;
    }
}