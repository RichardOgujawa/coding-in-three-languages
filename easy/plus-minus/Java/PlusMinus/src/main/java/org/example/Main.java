import java.text.DecimalFormat;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.function.Predicate;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Main {
    private static final Logger logger = Logger.getLogger(Main.class.getName());

    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            // Get the number of rows the user wants
            int numOfEntries = scanner.nextInt();
            scanner.nextLine();
            List<Integer> nums = Arrays.stream(scanner.nextLine().strip().split(" "))
                    .map(Integer::parseInt)
                    .toList();
            DecimalFormat df = new DecimalFormat("0.00000"); // 5 decimal places

            for (String num : iterator.plusMinus(nums)) {
                System.out.println(num);
            }

        } catch (Exception e) {
            // PrintStackTrace is not the best practice for handling exceptions in production code
            logger.log(Level.SEVERE, "Couldn't connect to the input stream", e);
        }
    }
}

@FunctionalInterface
interface LambdaFunc {
    String myMethod(Predicate<Integer> condition);
}

class iterator {
    public static List<String> plusMinus(List<Integer> arr) {
        LambdaFunc count = (condition) -> String.format("%.5f", (float) arr.stream().filter(condition).toList().size() / arr.size());
        return Arrays.asList(
                count.myMethod(num -> num < 0),
                count.myMethod(num -> num > 0),
                count.myMethod(num -> num == 0)
        );
    }
}
