using System;

public delegate void AddDelegate(); //Signature

// Delegates allow methods to be passed as parameters. Delegates can be used to define callback methods. Delegates can be chained together; for example, multiple methods can be called on a single event. Methods don't have to match the delegate type exactly.

// Delegates are used when we need to pass the method as a parameter

class Program{
    public void show(){
        Console.WriteLine("show");
    }

    public void display(){
        Console.WriteLine("display");
    }

    static void Main(){
        Program p = new Program();
        AddDelegate ad1 = new AddDelegate(p.show);
        AddDelegate ad2 = new AddDelegate(p.display);
        AddDelegate ad3 = ad1+ad2; // Multicast delegate
        ad3();
    } 
}