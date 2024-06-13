public class fibanocci {
    public static void main(String[] args) {
        int i = 1, j = 1;
        int k;
        for (int n = 1; n < 10; n++) {
            k = i + j;
            i = j;
            j = k;
            System.out.println(k);
        }
    }
}
