package org.example;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        //Ask for user input to know how many commands to get from them
            try(Scanner Scanner = new Scanner(System.in)){
                int numberOfCommands = Scanner.nextInt();
                Scanner.nextLine();
                //Check which command that user wants to perform and perform is using the matchCommand function
                for(int i = 0; i < numberOfCommands; i++){
                    List<String> command = new ArrayList<>(Arrays.asList(Scanner.nextLine().trim().split(" ")));
                    var newUserList = new CustomList(new ArrayList<>());
                    newUserList.matchCommand(command);
                }
            }catch(Exception err){
                err.printStackTrace();
            }
    }
}

// Class to convert strings to ints in list user inputs
class Converter{
    public static List<Integer> arrayToInt(List<String> strArray) {
        List<Integer> intArray = new ArrayList<>();
        for(String str : strArray){
            intArray.add(Integer.parseInt(str));
        }
        return intArray;
    }
}

//The list the user generates
class CustomList{
    private List<Integer> userList;

    public CustomList(List<Integer> userList) {
        this.userList = userList;
    }

    public List<Integer> getUserList() {
        return userList;
    }

    public void setUserList(List<Integer> userList) {
        this.userList = userList;
    }

    public List<Integer> matchCommand(List<String> commandArr){
            String operation = commandArr.get(0).trim();
            List<String> justNumbers = new ArrayList<>();
            for(String str : commandArr){
                if(!str.trim().equals(operation)) {
                    justNumbers.add(str);
                }
            }

            List<Integer> justNumbersInt= Converter.arrayToInt(justNumbers);

            switch(operation) {
                case "insert":
                    userList.add(justNumbersInt.get(0), justNumbersInt.get(1));
                    break;
                case "append":
                    userList.add(justNumbersInt.get(0));
                    break;
                case "remove":
                    for (int i = 0; i < userList.size(); i++) {
                        if (Objects.equals(userList.get(i), justNumbersInt.get(0))) {
                            userList.remove(i);
                            break;
                        }
                    }
                    break;
                case "pop":
                    userList.remove(userList.size() - 1);
                    break;
                case "sort":
                    Collections.sort(userList);
                    break;
                case "reverse":
                    Collections.reverse(userList);
                    break;
                case "print":
                    System.out.println(userList);
                    break;

            }
            return userList;
    }

}

