public class Main {
    public static void main(String[] args) {
        Division div1 = new Division(4, 3);
        System.out.println(div1.IntegerDivider());
        System.out.println(div1.FloatDivider());
    }
}
//This can be achieved in a much easier/quicker way, I just wanted to practice OOP.
class Division{
    // Fields
    //The final keyword specifies that these field won't be changed
    private final int int1;
    private final int int2;

    // Constructors
    public Division(int int1, int int2) {
        this.int1 = int1;
        this.int2 = int2;
    }

    // Methods
    public int IntegerDivider(){
        return (int) Math.round((double) int1 / int2);
        // the result of int1/int2 is cast as a double before being rounded, and then it's overall cast into an int
    }
    public double FloatDivider(){
        return (double) int1/int2;
    }
}