//Reverse of a string
function reverseString(str){
    //Approach 1
    return str.split("").reverse().join("");

    //Approach 2
    // let reversed = "";
    // for(let i = str.length-1;i>=0;i--){
    //     reversed += str[i];
    // }
    // return reversed;
}
console.log("Reverse of a string is: "+reverseString("Raghu, ram"));

//Returns the longest word in the sentense
function findLongestWord(str){
     const words = str.split(" ");
     let longestWord="";
     for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
     }
     return longestWord;
}
console.log("Longest word in the sentense is: "+findLongestWord("This is a Javascript program"));

//Palindrome
function palindrome(str){
    const reverse = str.split("").reverse().join("");
    if(reverse === str){
        console.log("its a palindrome")
    }
    else{
        console.log("Not a palindrome")
    }
}
palindrome("ram");
palindrome("rar");

//Remove duplicate elements
function removeDuplicates(arr){
    //Approach 1
    /*
    const uniqueEle = [];
    for(let i=0;i<arr.length;i++){
        if(uniqueEle.indexOf(arr[i]) === -1){ //When there are no elements in the array, then the value will be -1. Here, uniqueEle is empty array. so the value will be -1 intially.
            uniqueEle.push(arr[i]);
        }
    }
    return uniqueEle;*/

    //Approach 2
    //Step 1. Convert the array to a set becasue set will not have duplicates. So here all the duplicates are removed
    //2. Convert the set back to array
    return[...new Set(arr)]; //Here, ... is the spread operator
}
console.log("Array after removing the duplicates: "+removeDuplicates([1, 2, 3, 4, 4 ,1, 4 , 6, 5]));

//function to check whether two strings are ANAGRAMS or not.
//Anagram is word formed by rearranging the letters of another word. Eg: Listen, silent -> these both have the same alphabets
function areAnagrams(str1, str2){
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
    const sortedStr1 = str1.split("").sort().join(""); //sorting is in ascending order
    const sortedStr2 = str2.split("").sort().join("");

    if(sortedStr1 === sortedStr2){
        console.log("Strings are Anagrams")
    }
    else{
        console.log("Strings are not Anagrams")
    }
}
areAnagrams("Listen", "silent"); 

//Count number of vowels in a string
function countVowels(str){
    const vowels = ['a', 'e','i','o','u'];
    let count = 0;
    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log("No of vowels in a given string is: "+countVowels("Raghuram"));

//Largest number in an array
function largestNum(arr){
    let largest = arr[0];
    for(let i=1;i<arr.length;i++){
        if(largest<arr[i]){
            largest=arr[i];
        }
    }
    return largest;
}
console.log("largest num in an array is: "+largestNum([1, 3, 7, 9, 22, 44, 212, 0]));

//Prime number
function isPrime(num){
    for (let i = 2; i <= num/2; i++) {
        if (num % i === 0) {
            console.log("Entered number is not a prime");
            return;
        }
    }
    console.log("Entered number is a prime number");
}
isPrime(7);
isPrime(6);

//Factorial
function factorial(num){
    if(num === 0){
        return 1;
    }
    let factorial =1;
    for(let i=1; i<=num; i++){
        factorial *= i;
    }
    return factorial;
}
console.log("Factorial is: "+factorial(7));

//Remove whitespace characters from a string
function removeWhiteSpace(str){
    const result = str.replace(/\s/g, ""); //g is to perform a global search and replace all occurances
    // \s matches all the whitespace characters
    return result;
}
console.log("String after removing the white spaces: "+removeWhiteSpace("Raghu Ram"));