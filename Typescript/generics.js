// Generics makes components(functions, arrays etc) reusuable
// In the below funtion, T is generic. Which ever the value user passes, it takes the type(number/boolean/string etc) of that value, and returns the same type. You can use any alphabet in place of T
function genericOne(val) {
    return val;
}
function genericTwo(val) {
    return val;
}
// Same function accepts multiple types whenever it is called. This is an example of resuse
genericOne(3);
genericOne("test");
genericOne(true);
// genericOne<Bottle>({})
// In the below function, we are taking array of products. Hence, it needs to be declared as T[]
function getProducts(products) {
    return products[3]; //Here, we are returning the 4th value of an array.
}
// Arrow functions - Its just another way of writing the functions
var getMoreProducts = function (products) {
    return products[3];
};
function genericThree(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
// In the below U extends number, Which means U will accept only number type
function genericFour(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
genericThree(3, "4");
genericThree(3, 1);
genericThree(3, false);
genericFour(3, 1);
function genericFive(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
genericFive(1, { connection: "101.00.11", username: "raghu", password: "password123" });
genericFive("name", { connection: "101.00.11", username: "raghu", password: "password123" });
genericFive(false, { connection: "101.00.11", username: "raghu", password: "password123" });
// Using class types in generics
