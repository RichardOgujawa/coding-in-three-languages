package org.example;

import java.util.*;

class GetInput {
    //Set up array to be appended to
    public static List<StudentData> dataset = new ArrayList<>();

    //Create a class which allows the user to input the student data
    public static List<StudentData> getInput(int count, int numberOfEntries) {
        //If the count is still less than the number of entries, ask for another student
        if (count < numberOfEntries) {
            try (Scanner StudentAndScoresInput = new Scanner(System.in)) {
                String[] student = StudentAndScoresInput.nextLine().trim().split(" ");
                if(student.length != 2){
                    System.err.println("Invalid Input. Please enter both the student's first name and their score. For example: Mary 45");
                    getInput(count , numberOfEntries);
                } else {
                    dataset.add(new StudentData(student[0], Integer.parseInt(student[1])));
                    getInput(count + 1, numberOfEntries);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return dataset;
    }
}


public class Main {

    public static void main(String[] args) {
        // Get the users input and store it in an array
        try(Scanner mainScanner = new Scanner(System.in)){
            int n = Integer.parseInt(mainScanner.nextLine());
            List<StudentData> dataset = GetInput.getInput(0, n);
            for (String name : Scores.getLowestGrade(dataset)) {
                System.out.println(name);
            }
        }catch(Exception e){
            System.err.println(e);
        }
//        List<StudentData> dataset = new ArrayList<>(Arrays.asList(
//                new StudentData("Harry", 37.21f),
//                new StudentData("Berry", 37.21f),
//                new StudentData("Tina", 37.2f),
//                new StudentData("Akriti", 41f),
//                new StudentData("Harsh", 39f)
//        ));
    }
}

class Scores {
    public static List<String> getLowestGrade(List<StudentData> grades) {
        //Create a new set and add the grades to it, you could just do new HashSet<>(grades) but you need to get the grades for each nested
        //array not just get a set from the entire array.
        Set<Float> gradesSet = new HashSet<>();
        for (StudentData student : grades) {
            gradesSet.add(student.grade()); //because we're using a record instead of a class, the getter is just the name of the field as opposed getGrade()
        }

        //Find the second-lowest grade
        List<Float> gradesArr = new ArrayList<>(gradesSet);
        // Use Arrays.sort() when dealing with arrays of primitive types or arrays of objects that already implement 'Comparable' interface.
        // Use Collections.sort() when working with 'List' objects, especially if the elements of the list are elements which implement
        // the 'Comparable' interface. Also use it when you want to define custom sorting orders. For example, sorting based on a specific
        // element, like name or grade.
        Collections.sort(gradesArr);
        float secondLowestGrade = gradesArr.get(1);

        // Find all the students who got that grade, order the names alphabetically and then return that array.
        List<String> secondLowestGradedStudent = new ArrayList<>();
        for (StudentData student : grades) {
            if (student.grade()== secondLowestGrade) secondLowestGradedStudent.add(student.name()); // if the grade matches, get the name from that object.
        }

        Collections.sort(secondLowestGradedStudent);

        return secondLowestGradedStudent;
    }
}

// Create a new record for the type of data being stored in the grades array. Since the class is primarily for data storage purpose and has limited behaviour, a record
// can be a better to write it as it's more concise and more easily readable.
record StudentData(String name, float grade) {
}