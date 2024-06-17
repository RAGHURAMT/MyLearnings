// Generics makes components(functions, arrays etc) reusuable

// In the below funtion, T is generic. Which ever the value user passes, it takes the type(number/boolean/string etc) of that value, and returns the same type. You can use any alphabet in place of T
function genericOne<Type>(val: Type): Type {
    return val
}

function genericTwo<T>(val: T): T{
    return val
}
// Same function accepts multiple types whenever it is called. This is an example of resuse
genericOne(3);
genericOne("test");
genericOne(true);

interface Bottle {
    brand: string
    type: number
}

// genericOne<Bottle>({})

// In the below function, we are taking array of products. Hence, it needs to be declared as T[]
function getProducts<T>(products: T[]): T{
    return products[3] //Here, we are returning the 4th value of an array.

}

// Arrow functions - Its just another way of writing the functions

const getMoreProducts = <T>(products: T[]): T => {

    return products[3]
}

function genericThree<T, U>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

// Type Parameters
// In the below U extends number, Which means U will accept only number type
function genericFour<T, U extends number>(valOne: T, valTwo: U): object{
    return {
        valOne,
        valTwo
    }
}

genericThree(3, "4")
genericThree(3, 1)
genericThree(3, false)
genericFour(3,1)
// genericFour(3,"ram") // This throws error because U accepts only number type

// Real time scenario to explain why we use Type Parameters
interface Database {
    connection: string,
    username: string,
    password: string
}

function genericFive<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

genericFive(1, {connection:"101.00.11", username:"raghu", password:"password123"})
genericFive("name", {connection:"101.00.11", username:"raghu", password:"password123"})
genericFive(false, {connection:"101.00.11", username:"raghu", password:"password123"})

// Using class types in generics - This is used to make the classes reusable.

interface Quiz {
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject:string
}

// This is the generic class. It can take both the above interfaces. It will solve the common usecases.
class sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product);
    }
}