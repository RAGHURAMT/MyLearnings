function one(num: number){
    return num+2 // adding 2 to the number
    // return "hello" // This doesnt throw any error because funtion is not forcing to return the same type
}

function two(val: string){
    return val.toUpperCase // converting the string to uppercase
}

function three(val1: number, val2: string, val3: boolean){

}

//Arrow functions - This is just another way to write the functions
let loginUser = (name: string, id: number, email: string) => {}

// Below function accepts return only with number. It will throw error if we return string/boolean/etc
function four(val1: number): number {
    return val1
}
//arrow function
const getHello = (val: string): string => {
    console.log(val)
    return val
}

function errmsg(msg: string):void{ // If we mention void, it means this function does not return anything
    console.log(msg)
    // return msg // This line throws error because we used void as a return type.
}

function throwmsg(msg: string):never{ // The never type represents values which are never observed. This means, the function throws an exception or terminates execution of the program
    throw new Error(msg) 
}


//function calling
one(4)
two("test")
three(2, "test", false)
loginUser("raghu", 1, "raghu@gmail.com")
four(4)
getHello("test")

export{}