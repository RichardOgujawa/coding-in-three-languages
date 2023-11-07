package org.example;

public class Main {
    public static void main(String[] args) {
        System.out.println(Number.print_to_n(3));
    }
}

class Number {
    public static String print_to_n(int n){
        StringBuilder result = new StringBuilder();
        for(int i = 1; i <= n; i++) {
            result.append(i);
        }
        return result.toString();
}
}