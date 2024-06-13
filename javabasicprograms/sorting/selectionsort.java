package sorting;

public class selectionsort {
    public static void main(String[] args) {
        
        // Selection sort is a combination of searching and sorting. It will pick the
        // first element of an array and compares with the smallest elemnt in the array.
        // Once it finds the smallest number, it will swap the numbers. Then again it
        // will pick the 2nd element and check with the remaining numbers of an array.
        // This goes on until the array is sorted.
        int[] a = { 10, 9, 30, 43, 2, 57, 1 };
        int min, temp = 0;
        for (int i = 0; i < a.length; i++) {
            min = i;
            for (int j = i + 1; j < a.length; j++) {
                if (a[j] < a[min]) {
                    min = j;
                }
                temp = a[i];
                a[i] = a[min];
                a[min] = temp;

            }
        }
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
    }
}
