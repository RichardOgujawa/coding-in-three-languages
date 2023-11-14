package org.example;

import java.util.*;

public class Main {
    // Get input from the user
    //Create a dictionary to store the values for the students
    static Map<String, int[]> studentMarks = new HashMap<>();
    static String selectedStudent;
    private static void getInput(int count, int numOfEntries) {

        //Get inputs
        if (count <= numOfEntries) {
            try (Scanner getInputScanner = new Scanner(System.in)) { //Open the scanner, and close it after the try-catch statement
                if (count < numOfEntries) {
                    String[] student = getInputScanner.nextLine().trim().split(" ");
                    if (student.length < 4) {
                        System.out.println("Invalid input. Please make sure that your string has only the student's first name followed by exactly three scores. For example 'Harry 45 89 78'");
                        getInput(count, numOfEntries);
                    } else {
                        //Process the user's information and add it to the dictionary created above
                        String name = student[0].trim();
                        String[] scores = Arrays.copyOfRange(student, 1, student.length);
                        int[] arrayOfInts = parseStringsToInts(scores);

                        studentMarks.put(student[0], arrayOfInts);
                        System.out.println("Successfully added " + name);
                        //Go back to the beginning with count incremented
                        getInput(count + 1, numOfEntries);
                    }
                }
                else {
                    System.out.println("Who would you like to check the average score of?");
                    selectedStudent = getInputScanner.nextLine().trim();
                }
            } catch (Exception e) {
                e.printStackTrace(); //A stack trace is a representation of the call stack at a particular point in time during the execution
                //of a program. It shows the sequence of method calls that led to the current point of execution, typically at the point where an exception occurred.
                // This information is very useful for debugging because it helps developers identify where the problem occurred and understand the sequence of
                // method calls that led to the issue.
            }
        }
    }

    public static int[] parseStringsToInts(String[] strings) {
        int[] result = new int[strings.length];

        for (int i = 0; i < strings.length; i++) {
            // Parse the string to an int using Integer.parseInt
            try {
                result[i] = Integer.parseInt(strings[i]);
            } catch (NumberFormatException e) {
                // Handle the case where the string is not a valid integer
                System.err.println("Error parsing string: " + strings[i]);
                result[i] = 0;  // Use a default value or choose appropriate error handling
            }
        }
        return result;
    }
    public static void main(String[] args) {
        // Get the user input for how many students they want to enter info for
        Scanner mainScanner = new Scanner(System.in); //When you create a Scanner object with System.in as its argument, you are telling the Scanner to
        // read input from the standard input stream, which is the console in most cases.
        int n = mainScanner.nextInt();

        //Call the function to get the student data
        getInput(0, n);

        System.out.println(Scores.getAverage(studentMarks.get(selectedStudent)));

        //Implement the logic to get their averages, also you're in the wrong project big man this is NestedLists you need to make a new project for FindingPercentages.


    }
}

class Scores {
    public static float getAverage(int[] scoresArr){
        float accumulator = 0f;
        for (int j : scoresArr) {
            accumulator += j;
        }
        return Math.round(accumulator/3f);
    }
}

