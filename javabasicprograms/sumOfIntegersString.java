public class sumOfIntegersString {
    public static void main(String[] args) {
        String str = "12abv345";
        int sum = 0;
        String str1 = str.replaceAll("[^0-9]", ""); // To get only integers from the String
        System.out.println(str1);
        for (int i = 0; i < str1.length(); i++) {
            sum = sum + str1.charAt(i) - 48; // Since ascii value of numbers starts from 48. so we subtract it from sum.

        }
        System.out.println(sum);
    }
}