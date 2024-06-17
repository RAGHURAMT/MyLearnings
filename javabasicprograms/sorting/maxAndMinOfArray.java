package sorting;

public class maxAndMinOfArray {

    public static void main(String[] args) {
        maxAndMinOfArray.maxNum();
        maxAndMinOfArray.minNum();
    }

    public static void maxNum(){
        int[] a = {3, 4, 1, 5, 6, 2, 9};
        int max = a[0]; // Assuming maximum value is a[0], which is 3 is the maximum number in array
        for(int i = 1; i<a.length;i++){
            if(a[i]> max){
                max = a[i];
            }
        }
        System.out.println("maximum value is :"+max);
    }

    public static void minNum(){
        int[] a = {3, 4, 1, 5, 6, 2, 9};
        int min = a[0]; // Assuming maximum value is a[0], which is 3 is the maximum number in array
        for(int i = 1; i<a.length;i++){
            if(a[i] < min){
                min = a[i];
            }
        }
        System.out.println("Min value is :"+min);
    }
    
}
