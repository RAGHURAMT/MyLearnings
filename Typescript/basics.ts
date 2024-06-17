// https://www.typescriptlang.org/docs/handbook
// What Typescript does: static checking (It checks the code while writing the code where as javascript does it only after running the code)

//Development process:
// TS -> Compiled or converted to JS
// TS is just a layer on top of the JS. 
// TS is just a development tool

// Types in TS: Built-in types and user-defined types
// Built-in types: number, string, boolean, null, undefined, void, 
// user-defined types: enums, classes, interfaces, object, array, tuples
// any - its a super type

//access modifiers: public, private, protected and read-only

// class constants: readonly, const and readonly static

// null and undefined are not the same. A variable initialized with undefined means that the variable has no value or object assigned to it while null means that the variable has been set to an object whose value is undefined.
// Eg: let test; // On print, it will give undefined as an output
// eg: let test = null; //On print, it will give null as an output

//Operators: Arithmatic(+, -, *, /, %), Assignment operators(+=, -=, *=), comparison operators(<, >, <=, >=, ==, ===), Logical operators(&&, ||), String operators(concatenation)

class FirstProgram{
    firstMethod(greetings: string) {
        console.log(greetings)
    }
}

const fp = new FirstProgram()
fp.firstMethod("hello")

class SecondProgram{
    secondMethod(value: string)
    {
        console.log(value)
    }
}

const sp = new SecondProgram()
sp.secondMethod("test 2")