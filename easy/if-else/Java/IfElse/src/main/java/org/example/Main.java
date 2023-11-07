// Imports
package org.example;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Getting the input in the try block will get the input and then run the
        // code inside the block, which is good practice, because it ensures that
        // the scanner is closed after use, as once we exist the
        // try block any of the scanner's associated resources will be released, preventing
        // resource leakage.
        // It's a common practice in modern Java programming, recommended
        // practice in modern Java programming, especially when dealing with resources
        // that need to be explicitly closed, such as files, network connections, or
        // database connections.
        try (Scanner input = new Scanner(System.in)) {
            System.out.println("Which number do you want to check?:");
            // Get the input from the user
            var checker = new WeirdChecker(input.nextInt());
            System.out.println(checker.checkIfWeird());
        }
    }
}

class WeirdChecker{
    private final int userInput;

    //Constructors
    public WeirdChecker(int userInput) {
        this.userInput = userInput;
    }

    //Methods
    public String checkIfWeird(){
        if (userInput % 2 != 0) {
            return "Weird";
        } else {
            if (userInput >= 2 && userInput <= 5) {
                return "Weird";
            } else if (userInput >= 6 && userInput <= 20) {
                return "Weird";
            } else {
                return "Not Weird";
            }
        }
    }
}