import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class duplicateElements {
    // SmartProgramming
    public static void main(String[] args) {
        bruteForceMethod();
        setInterfaceMethod();
        hashMap();
    }

    public static void bruteForceMethod(){
        int[] a = {1, 1, 3, 4, 5, 6, 3, 9}; //If any element is repeated more than 2 times, then this will give invalid output like 3,3,3,1,1 
        System.out.print("bruteForceMethod: Duplicate elements are: ");
        for(int i=0; i<a.length-1;i++){
            for(int j=i+1;j<a.length;j++){
                if((a[i]==a[j]) && (i!=j))
                {
                    System.out.print(a[i]+ ", ");
                }
            }
        }
    }

    public static void setInterfaceMethod(){
        int[] a = {3, 5, 4, 3, 2, 2, 2, 1}; //If any element is repeated more than 2 times, then this will give invalid output like 3,2,2
        System.out.print("setInterfaceMethod: Duplicate elements are: ");
        Set<Integer> s = new HashSet<>(); // Here, Set is an interface and HashSet is a class
        for(int num:a){ // foreach loop
        if(s.add(num)==false){ // If num is added, s.add() will return true. If the num already added once, then it will return false.
            System.out.print(num + ", ");
        }
    }
    }

    public static void hashMap(){
        int[] arr = {2, 3, 3, 2, 4, 2, 1};
        Map<Integer, Integer> hm = new HashMap<>(); // Map is an interface and HashMap is a class
        for(int num: arr)
        {
            Integer count = hm.get(num); // Here, hm.get() will return null when the element is not present in the hashmap table. HashMap table wil be empty initially. When the element is present, it will return 1.
            if(count == null){
                hm.put(num, 1); // its (key, value) pair. We are adding the arr[num] to hashmap table with value 1
            }
            else{
                count=count+1;
                hm.put(num, count); // It will update the hashmap table with arr[num] and 2 for the duplicate element
            }
        }
        System.out.print("HashMap: Duplicate elements are: ");
        Set<Map.Entry<Integer, Integer>> es = hm.entrySet(); //Entry is the sub-interface of Map. Set will not have duplicate elements
        for(Map.Entry<Integer, Integer> me : es){
            if(me.getValue() > 1){ // At line no.48, we updated Hashmap table value as 2 for the duplicate element
                System.out.print(me.getKey() + ",");
            }
        }
    }
}
