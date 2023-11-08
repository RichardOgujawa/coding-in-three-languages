package org.example;

import java.util.Arrays;
import java.util.Comparator;
import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        Integer[] scoresSet = Scores.findRunnerUp(new int[]{2, 3, 4, 6, 6, 5});
        // toString and deepToString, are used for different things.
        // use toString for on-dimensional arrays and deepToString for nested arrays.
        System.out.println(Arrays.toString(scoresSet));
        System.out.println(scoresSet[1]);
    }
}

class Scores {
    public static Integer[] findRunnerUp(int[] arr) {
        //Create a new hashset
        Set<Integer> scoresSet = new HashSet<>();
        //Add each element of the array to it
        for (int num : arr) {
            scoresSet.add(num);
        }

        // The 'new Integer[0]' part is a way of providing an array of the correct type to the 'toArray' method. Essentially this is you defining
        // the type of the array you want to create.
        // new Integer[0] initially creates an array of size 0, and then the toArray method is able to internally create the
        // correct size of the array.
        Integer[] scoresArray = scoresSet.toArray(new Integer[0]);
        //Reverse the order of the array using the static method .sort(), making sure to set the order to Comparator.reverseOrder()
        Arrays.sort(scoresArray, Comparator.reverseOrder());
        return scoresArray;
    }
}
