package org.example;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        for(int square : Loops.print_Squares(5)){
            System.out.println(square);
        }
    }
}

class Loops {
    public static int[] print_Squares(int a){
        int i = 0;
        int[] squares = new int[a];
        while(i < a){
            squares[i] = i*i;
            i++;
        }
        return squares;
    }
}