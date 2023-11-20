package org.example;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        User.getInput();
    }


}

class User{
    public static void getInput(){
        //get user input here for both alice and bob
        try(Scanner Scanner = new Scanner(System.in)){
            // get the user input here
            List<Integer> aliceResultsArr = new ArrayList<>(Converter.arrStringToInt(Scanner.nextLine().trim().split(" ")));
            List<Integer> bobResultsArr = new ArrayList<>(Converter.arrStringToInt(Scanner.nextLine().trim().split(" ")));
            for (int result : Comparer.compareTheTriplets(aliceResultsArr, bobResultsArr)) {
                System.out.println(result);
            }
        }catch(Exception err){
            err.printStackTrace();
        }
    }
}

class Comparer{

    //Create a function to compare them
    public static int[] compareTheTriplets(List<Integer> a, List<Integer> b){
        int aliceScore = 0;
        int bobScore = 0;
        for(int i = 0; i < a.size() ; i++){
            if (a.get(i) > b.get(i)) {
                aliceScore += 1;
            } else if (a.get(i) < b.get(i)) {
                bobScore += 1;
            }
        }
        return new int[] {aliceScore, bobScore};
    }
}

class Converter{
    public static List<Integer> arrStringToInt(String[] stringArr){
        List<Integer> intArr = new ArrayList<>();

        for(String str : stringArr){
            intArr.add(Integer.parseInt(str));
        }
        return intArr;
    }
}