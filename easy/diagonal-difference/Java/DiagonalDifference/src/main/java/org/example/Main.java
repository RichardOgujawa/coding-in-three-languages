package org.example;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;

public class Main {
    private static final Logger logger = Logger.getLogger(Main.class.getName());

    public static void main(String[] args) {
        try(Scanner Scanner = new Scanner(System.in )){
            //Get the number of rows the user wants
            int numOfRows = Scanner.nextInt();
            Scanner.nextLine();
            List<List<Integer>> TwoDimArr = new ArrayList<>();

            //Add them to 2D array
            for(int i = 0; i < numOfRows; i++) {
                String[] row = Scanner.nextLine().trim().split(" ");
                List<Integer> rowAsInts = Arrays.stream(row) // Turn the list into a stream
                        .map(Integer::parseInt) // map each value to an int
                        .toList(); // Turn the stream back into a list
                TwoDimArr.add(rowAsInts);
            }
            System.out.println(Matrix.absDiagonals(TwoDimArr));
        }catch(Exception e){
            // PrintStackTree is not the best practice for handling exceptions in production code
            logger.log(Level.SEVERE, "Couldn't connect to the input stream", e);
        }
    }

}

class Matrix{
    public static int absDiagonals(List<List<Integer>> arr){
        int n = arr.size();
        int rtl_sum = 0;
        int ltr_sum = 0;
        for(int i = 0; i < n; i++){
            rtl_sum += arr.get(i).get(i);
            ltr_sum += arr.get(i).get(n - 1 - i);
        }
        return Math.abs(rtl_sum - ltr_sum);
    }
}