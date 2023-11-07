package org.example;

public class ArithmeticOperators {
    //Fields
    private final int a;
    private final int b;

    //Constructors

    public ArithmeticOperators(int a, int b) {
        this.a = a;
        this.b = b;
    }

    //Methods
    public int add(){return(a + b);}
    public int minus(){return(a-b);}
    public int product(){return(a*b);}
}
