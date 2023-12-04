package org.example;


import java.util.ArrayList;
import java.util.List;

public class Printer{
    public static void stairCase(int n){
        int hash_len = 1;
        int space_len = n - 1 ;
        List<List<String>> final_result  = new ArrayList<>();

        for(int i = 1; i < n + 1; i++){
            List<String> str = new ArrayList<>();
            // Add the appropriate number of spaces
            for(int j = space_len; j >= 1 ; j--) {
                str.add(" ");
            }
            // Then add the appropriate number of hash symbols
            for(int k = 0; k < hash_len; k++) {
                str.add("#");
            }
            hash_len += 1;
            space_len -= 1;
            final_result.add(str);
        }

        int len = final_result.size();

        for (int i = 0; i < len; i++) {
            // For each row
            List<String> row = final_result.get(i);
            // Print each element of the array
            for (String element : row) {
                System.out.print(element);
            }
            // Print a new line only if this is not the last row.
            if (i < len - 1) {
                System.out.println();
            }
        }
    }
}