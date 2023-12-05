package org.example;
import java.util.*;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;

public class Main {
    private static final Logger logger = Logger.getLogger(Main.class.getName());

    public static void main(String[] args) {
        try (Scanner Scanner = new Scanner(System.in)) {
            String[] arr = Scanner.nextLine().trim().split(" ");
            ArrayFunc arrMain = new ArrayFunc(Arrays.stream(arr).map(Integer::parseInt).collect(Collectors.toList()));
            System.out.println(arrMain.findMinFour() + " " + arrMain.findMaxFour());
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Couldn't connect to the input stream", e);
        }
    }
}

class ArrayFunc{
    private final List<Integer> arrSortedASC;
    private final List<Integer> arrSortedDESC;

    // Constructor
    public ArrayFunc(List<Integer> arr) {
        // Fields
        this.arrSortedASC = arr.stream().sorted().collect(Collectors.toList()); //Sorted array in ascending order
        this.arrSortedDESC = arr.stream().sorted(Collections.reverseOrder()).collect(Collectors.toList()); //Sorted array in ascending order
    }

    // METHODS
    //Find the max
    public int findMaxFour(){
        int maxSum = 0;
        for(int i = 0; i < arrSortedDESC.size() - 1; i++) {
                maxSum += arrSortedDESC.get(i);
        }
        return maxSum;
    }

    //Find the min
    public int findMinFour(){
        int maxSum = 0;
        for(int i = 0; i < arrSortedASC.size() - 1; i++) {
            maxSum += arrSortedASC.get(i);
        }
        return maxSum;
    }
}
