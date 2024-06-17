public class secondLargest {
    public static void main(String[] args) {
        // First method
        secondLargestArr();

        //Second method
        int[] arr = { 1, 10, 30, 2, 60 };
        int largest = 0;
        int secondLargest = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > largest) {
                secondLargest = largest;
                largest = arr[i];
            } else if (arr[i] > secondLargest) {
                secondLargest = arr[i];
            }
        }
        System.out.println("Second largest is: " + secondLargest);
    }

    public static void secondLargestArr(){
        int[] arr = {10, 22, 2, 11, 23, 9, 24};
        int temp = 0;
        for(int i = 0; i<arr.length;i++){
            for(int j=i+1; j<arr.length;j++){
                if(arr[i] < arr[j]){ // here, we are sorting the array in descending order
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
            if(i == 1){ //This is not mandatory to add. We added this to stop sorting the array from 3rd element to save time because the first 2 values are sorted already and we need 2nd element.
                break;
            }
        }
        System.out.println("Second largest is: "+arr[1]);
    }
}
