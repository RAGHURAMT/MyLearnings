using System; // This is a namespace. It consists of many classes. For example, console is a class and writeLine is a method inside console class
public class Programs{
    // Variables/DataTypes: containers for storing data variables. Ex: int, long, double, string, bool, char

    // Data types conversion:
    // ImplicitType
    //Explicit
    //parse() and TryParse()
    static void Main(string[] args){
         Console.WriteLine("first program");
         Programs.implicitType();
         Programs.explicitType();
         Programs.parse();
         Programs.forEachloop();

         int totalSum, totalProduct;
         Programs.returnMoreThanOneVariable(3, 4,out totalSum, out totalProduct );
         Console.WriteLine("Total Sum: "+totalSum);
         Console.WriteLine("Total Product: "+totalProduct);

         paramsExample(101,200,321, 145, 566);
    }

    public static void implicitType()
    {
    int i = 133;
    float f = i; // implicit conversion
    Console.WriteLine(f);
    }
    
    public static void explicitType(){
        double d = 1143232.3432;
        int i = (int)(d); // explicit conversion
        Console.WriteLine(i);

        float floatValue = 15.75f;
        // Explicitly convert float to int (loses decimal part)
        int intValue = (int)floatValue;
        Console.WriteLine(intValue);
    }

    public static void parse(){
        string str = "400"; // parse will throw the exception if the string has both integers and characters
        int i = int.Parse(str);
        Console.WriteLine("parse example: "+i);

        //TryParse - It will check if the string has both integers and characters
        string str2 = "123dsfsf";
        int result = 0;
        bool isSuccessful = int.TryParse(str2, out result);
        if(isSuccessful){
            Console.WriteLine(result);
        }
        else{
            Console.WriteLine("Enter a valid number");
        }
    }

    public static void forEachloop(){
        int[] arr = [1, 2, 3, 4, 5];
        foreach(int i in arr){
            Console.WriteLine("forEachloop: "+i);
        }
    }

    public static void returnMoreThanOneVariable(int x, int y, out int sum, out int product){
        sum = x + y;
        product = x * y;
        // Here we need not to use return keyword because we are using out keyword and returning more than one value. This is the example for Output parameters
    }

    public static void paramsExample(params int[] listParameters)
    {
        // params keywod must be the last argument passed.
        //By using Params, we can pass as many as values when the method is called.
        foreach(int i in listParameters){
            Console.WriteLine("paramsExample: "+i);
        }
    }
}


