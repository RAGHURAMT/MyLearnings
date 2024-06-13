package sorting;

// https://www.youtube.com/watch?v=v6hmmfIiKu4&list=PLlhM4lkb2sEhY6YLVcRp0YCkstitjw6AI&index=1&t=1785s

public class bubblesort {
    public static void main(String[] args) {
        // bubble sort will have n-1 rounds. If no of elements in an array are 10, then
        // it will sort
        // the array 9 times
        // In bubble sort, it will take 1st element and compare with all the elements
        // one after the other
        int[] a = { 10, 19, 30, 5, 16 };
        int temp; // String temp; --> if array has strings
        for (int i = 0; i < a.length; i++) { // This for loop is for no of rounds
            int flag = 0;
            for (int j = 0; j < a.length - 1 - i; j++) {
                // a.length-1-i to ignore the sorted elements while comparing
                // If the array has strings instead of integers, then use the following if
                // condition to compare the string
                // if(a[j].compareTo(a[j+1])>0) // compareTo converts the string to unicode.
                // We used >0 because after comparing the strings, it gives the output either 1
                // or -1
                if (a[j] > a[j + 1]) {
                    temp = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = temp;
                    flag = 1;
                }
            }
            if (flag == 0) { //flag value is 0 when number swap does not happen. And, number swap will not happen when array is sorted.
                break;
            }
        }
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
    }

}
