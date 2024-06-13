"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//function calling
one(4);
two("test");
three(2, "test", false);
loginUser("raghu", 1, "raghu@gmail.com");
four(4);
getHello("test");
