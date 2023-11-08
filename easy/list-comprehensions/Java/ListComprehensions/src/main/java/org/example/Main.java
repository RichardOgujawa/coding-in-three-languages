package org.example;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        var shape1 = new List(1, 1, 1, 2);
        System.out.println(Arrays.deepToString(shape1.permutationsBeforeN()));

    }
}

class List{
    //Fields
    private final int x;
    private final int y;
    private final int z;
    private final int n;

    //Constructor
    public List(int x, int y, int z, int n) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.n = n;
    }
    //Methods
    public int[][] permutationsBeforeN(){
        int[][] permutations = {};
        for(int i=0; i<=x; i++){
            for(int j=0; j<=y ;j++){
                for(int k=0; k<=z; k++){
                    Coordinates coordinates = new Coordinates(i, j, k);
                    if(coordinates.getSum() != n){
                        permutations = Arrays.copyOf(permutations, permutations.length + 1);
                        permutations[permutations.length - 1] = new int[]{i, j, k};
                    }
                }
            }
        }
        return permutations;
    }
}

//The coordinates class to handle all the operations to do with the individual coordinates.
class Coordinates{
    private final int x;
    private final int y;
    private final int z;

    //Constructor
    public Coordinates(int x, int y, int z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }


    //Methods
    public int getSum(){
        return x + y + z;
    }
}