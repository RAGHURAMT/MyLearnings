import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class numberOfOccurances {
    public static void main(String[] args) {
        String str = "raghuram";
        HashMap<Character, Integer> hMap = new HashMap<>();
        for (int i = str.length()-1; i >= 0; i--) {
            if (hMap.containsKey(str.charAt(i))) {
                int count = hMap.get(str.charAt(i));
                hMap.put(str.charAt(i), ++count);
            } else {
                hMap.put(str.charAt(i), 1);
            }
        }
        System.out.println(hMap); // This will print the complete key and values in the hmap table
        //Write the below code only when you want to print only repeated characters with count
        Set<Map.Entry<Character, Integer>> es = hMap.entrySet(); //Entry is the sub-interface of Map. Set will not have duplicate elements
        for(Map.Entry<Character, Integer> me : es){
            if(me.getValue() > 1){ // At line no.48, we updated Hashmap table value as 2 for the duplicate element
                System.out.print(me.getKey() + "=" + me.getValue()+ ", ");
            }
        }
    }

}
