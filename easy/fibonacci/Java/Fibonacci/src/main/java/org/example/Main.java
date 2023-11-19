package org.example;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

    try(
    java.util.Scanner Scanner = new Scanner(System.in)){
        System.out.println(Math.fibonacci(Scanner.nextInt()));
    } catch(Exception err) {
            err.printStackTrace();
        }
    }
}

class Math{
    public static List<Integer> fibonacci(int n){
        List<Integer> series = new ArrayList<>(Arrays.asList(0, 1)); //The array starts with 0 and 1, and grows from there.
        // create variables to store the prev, current and next and then adjust them in a for loop accordingly
        int prev = 0;
        int current = 1;
        int next;
        for(int i = 0; i < n - 2; i++){
            // The next value is the sum of the previous two
            next = prev + current;
            // The previous value is updated to be what the current value was
            prev = current;
            // The current value is updated to be what the next value was
            current = next;
            // Add the next value to the series
            series.add(next);
        }
        return series;
    }
}
