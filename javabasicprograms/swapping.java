public class swapping {
    public static void main(String[] args) {
        int a = 1, b = 3;
        a = a + b;
        b = a - b;
        a = a - b;
        System.out.println("After swapping: a=" + a + " b=" + b);
    }
}
