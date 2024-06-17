"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

//Traditional approach
function add(x, y){
    return x+y;
}

//Arrow function
const add2 = (x, y) => x+y;

const sub = (a, b) => a-b;
const div = (a, b) => a/b;
const mul = (a, b) => a*b;

function one(num) {
    return num + 2; // adding 2 to the number
    // return "hello" // This doesnt throw any error because funtion is not forcing to return the same type
}
function two(val) {
    return val.toUpperCase; // converting the string to uppercase
}
function three(val1, val2, val3) {
}
//Arrow functions - This is just another way to write the functions
var loginUser = function (name, id, email) { };
// Below function accepts return only with number. It will throw error if we return string/boolean/etc
function four(val1) {
    return val1;
}
//arrow function
var getHello = function (val) {
    console.log("test");
    return val;
};
function errmsg(msg) {
    console.log(msg);
    // return msg // This line throws error because we used void as a return type.
}
function throwmsg(msg) {
    throw new Error(msg);
}

//callback functions -  It can be used in Iteration, Event handling, Async operations, Higher-order functions, promises
//display is higher-order function.
function display(x, y, operation){ //Here, operation will perform based on the function(add/sub/div) we call.
    var result = operation(x, y);
    console.log(result);
}

//Promises implementation
const promises = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const randomNum = Math.floor(Math.random() * 10);
        if(randomNum<5){
            resolve(`Success! Random number is ${randomNum}`);
        }
        else{
            reject(`Failed! Random number is ${randomNum}`);
        }
    }, 1000);
});

//function calling
console.log(add(3, 4));
console.log(add2(4, 9));
one(4);
two("test");
three(2, "test", false);
loginUser("raghu", 1, "raghu@gmail.com");
four(4);
getHello("test");

display(10, 5, add); //callback functions -> Another function is passed as an argument. Here, add is an functions
display(10, 5, sub);
display(10, 5, div);
display(5, 2, mul);

promises.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})