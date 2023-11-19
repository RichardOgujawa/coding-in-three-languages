package org.example;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import static java.lang.Math.abs;

public class Main {
    public static void main(String[] args) {
        try(Scanner Scanner = new Scanner(System.in)){
            // Number of entries
            int numOfEntries = Scanner.nextInt();

            // Consume the newline character, because nextInt only takes the int, and not the entire line, as such
            // if you don't consume it, it will be consumed during the next time you try and get user input. Alternatively you
            // could do int numOfEntries = Integer.parseInt(Scanner.nextLine());
            Scanner.nextLine();

            // Position of cat A, cat B, and cat C
            for(int j = 0; j < numOfEntries; j++){
                String[] positions = Scanner.nextLine().trim().split(" ");
                List<Integer> positionsInt = Converter.arrayToInt(positions);

                System.out.println(MouseChase.findWinner(positionsInt.get(0), positionsInt.get(1), positionsInt.get(2)));
            }
        }catch(Exception err){
            err.printStackTrace();
        }
    }
}

class Converter {
    public static List<Integer> arrayToInt(String[] arr){
        List<Integer> intArray = new ArrayList<>();
        for (String str : arr) {
            int elToInt = Integer.parseInt(str);
            intArray.add(elToInt);
        }
        return intArray;
    }
}

class MouseChase{
    public static String findWinner(int catA, int catB, int mouseC){
        int distCatA = abs(catA - mouseC);
        int distCatB = abs(catB - mouseC);

        if(distCatA < distCatB){
            return "Cat A";
        } else if(distCatA > distCatB) {
            return "Cat B";
        }
        return "Mouse C";
    }
}

