public class primenumber {
    public static void main(String[] args) {
        int count = 0, n = 7, i;
        for (i = 2; i <= n; i++) {
            if (n % i == 0) {
                count++;
            }
        }
        if (count > 1) {
            System.out.println(n + " is not a prime");
        } else {
            System.out.println(n + " is a prime");
        }
    }

}
