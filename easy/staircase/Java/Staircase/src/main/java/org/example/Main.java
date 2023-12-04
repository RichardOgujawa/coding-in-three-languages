package org.example;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Main {
    private static final Logger logger = Logger.getLogger(Main.class.getName());

    public static void main(String[] args) {
        try (Scanner Scanner = new Scanner(System.in)) {
            int n = Scanner.nextInt();
            Scanner.nextLine();
            Printer.stairCase(n);
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Couldn't connect to the input stream", e);
        }
    }
}
