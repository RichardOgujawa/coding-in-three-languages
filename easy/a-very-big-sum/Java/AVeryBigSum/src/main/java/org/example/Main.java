package org.example;

import java.util.Arrays;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Main {
    private static final Logger logger = Logger.getLogger(Main.class.getName());

    public static void main(String[] args) {
        System.out.println(userInput());
    }

    public static long userInput() {
        int accum = 0;
        long result = 0;
        try (Scanner scanner = new Scanner(System.in)) {
            int numOfEntries = scanner.nextInt();
            scanner.nextLine(); // skip the next line

            String[] arrElems = scanner.nextLine().trim().split(", ");
            var arrElemsInt = Arrays.stream(arrElems).map(Integer::parseInt).toArray();

            if (numOfEntries != arrElemsInt.length) {
                System.out.println("Please make sure the array matches the size specified");
                userInput();
            }

            result = customAccumulator(accum, arrElemsInt);
        } catch (Exception e) {
            // PrintStackTree is not the best practice for handling exceptions in production
            // code
            logger.log(Level.SEVERE, "Couldn't connect to the input stream", e);
        }
        return accum + result;
    }

    public static long customAccumulator(int accum, Object[] arrElemsInt) {
        long result = accum;
        for (Object elem : arrElemsInt) {
            result += (int) elem;
        }
        return result;
    }
}

// Get input