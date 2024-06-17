public class sumOfaNumber {
    public static void main(String[] args) {
        int m = 12345, sum = 0;
        while (m > 0) {
            sum = sum + m % 10;
            m = m / 10;
        }
        System.out.println("Sum of Digits:" + sum);
    }
}
