public class palindrome {
    public static void main(String[] args) {
        int n = 101;
        int reverse = 0;
        int m = n;
        while (n != 0) {
            reverse = reverse * 10;
            reverse = reverse + n % 10;
            n = n / 10;
        }
        System.out.println(reverse);
        if (m == reverse) {
            System.out.println("palindrome");
        } else {
            System.out.println("Not a palindrome");
        }
    }

}
