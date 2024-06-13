class factiorial {
    public static void main(String[] args) {
        int i, n, prod = 1;
        n = 10;
        for (i = n; i >= 1; i--) {
            prod = prod * i; //5! = 1⋅2⋅3⋅4⋅5 = 120
        }
        System.out.println(prod);
    }
}