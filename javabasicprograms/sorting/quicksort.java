package sorting;

public class quicksort {
    public static void main(String[] args){
        int[] arr = {15, 9, 7, 4, 8, 10, 11, 17, 90};
        int leng = arr.length;
        quicksort qs = new quicksort();
        qs.quickSortRecursion(arr, 0, leng-1);
        qs.printArray(arr);
    }

    int partition(int[] arr, int lowerIndex, int higherIndex){
        int pivot = arr[(lowerIndex+higherIndex)/2]; // Here, we are choosing the middle value of an array as pivot. Hence, quick sort will sort the array as all the values which are smaller than the pivot value, will be sorted on the left side of the pivot and bigger values on the right side.

        // The same programs works even if we take pivot element as lower index
        // int pivot = arr[lowerIndex]; // if we want to take lower index value as pivot element 
        while(lowerIndex <= higherIndex)
        {
            while(arr[lowerIndex]<pivot){
                lowerIndex++;
            }
            while(arr[higherIndex]>pivot){
                higherIndex--;
            }
            if(lowerIndex<=higherIndex){
                //swapping
                int temp = arr[lowerIndex];
                arr[lowerIndex] = arr[higherIndex];
                arr[higherIndex] = temp;
                lowerIndex++;
                higherIndex--;
            }
        }
        return lowerIndex;
    }

    void quickSortRecursion(int[] arr, int lowerIndex, int higherIndex){
        int pi = partition(arr, lowerIndex, higherIndex); // pi will have the lowerIndex value which is returned by the above partition method. Line 34 returns lowerIndex
        if(lowerIndex<pi-1){
            quickSortRecursion(arr, lowerIndex, pi-1); // This will sort the left side of the array
        }
        if (pi<higherIndex) {
            quickSortRecursion(arr, pi, higherIndex); // This will sort the right side of the array
        }
    }

    void printArray(int[] arr)
    {
        for(int i:arr)
        {
            System.out.print(i+ " ");
        }
    }
    
}
