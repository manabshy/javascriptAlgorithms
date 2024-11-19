public class Fibonacci {

  public static void main(String[] args) {
    int n = 10; // number of Fibonacci numbers to generate
    int a = 0, b = 1, c;
    System.out.print(a + " " + b); // printing 0 and 1

    for (int i = 2; i < n; i++) {
      c = a + b;
      System.out.print(" " + c);
      a = b;
      b = c;
    }
  }
}
