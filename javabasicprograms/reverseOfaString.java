class reverseOfaString {
    public static void main(String[] args) {
        String original = "ra", reverse = "";
        int lenght = original.length();
        for (int i = lenght - 1; i >= 0; i--) {
            reverse = reverse + original.charAt(i);
        }
        System.out.println(reverse);
        if (original.equals(reverse)) {
            System.out.println("Palindrome");
        } else {
            System.out.println("Not a palindrome");
        }
    }
}