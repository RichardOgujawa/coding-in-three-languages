package org.example;
import java.util.*;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Main {
    private static final Logger logger = Logger.getLogger(Main.class.getName());

    public static void main(String[] args) {
        try (Scanner Scanner = new Scanner(System.in)) {
            // Get the number of candles the user wants to add
            int n = Scanner.nextInt();
            // Eat the next line
            Scanner.nextLine();
            // Get the candle heights
            int[] candleHeights = Arrays.stream(Scanner.nextLine().trim().split(" "))
                    .mapToInt(Integer::parseInt) // Use mapToInt to create an int stream rather than a general object stream
                    .toArray(); // collect to an array
            while (candleHeights.length != n){
                System.out.printf("Number of candle heights (%d) provided doesn't match the expected number of values (%d)%n", candleHeights.length, n);
                candleHeights = Arrays.stream(Scanner.nextLine().trim().split(" "))
                        .mapToInt(Integer::parseInt) // Use mapToInt to create an int stream rather than a general object stream
                        .toArray(); // collect to an array
            }
                System.out.println((Counter.BirthdayCandleCounter(candleHeights)));
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Couldn't connect to the input stream", e);
        }
    }
}

class Counter{
    static public long BirthdayCandleCounter(int[] arr){
        int maxHeight = Arrays.stream(arr).max().orElse(Integer.MIN_VALUE); // Create a streamable object, stream it and then find the max
        // The orElse is to provide another value if there is the array is empty
        return Arrays.stream(arr).filter(height -> height == maxHeight).count(); // Filter the array to find all the instances where the
        // candle height equals the max height. This modifies the stream length. Now you can get the count directly from the stream of all
        // the heights that satisfy that condition.

    }
}