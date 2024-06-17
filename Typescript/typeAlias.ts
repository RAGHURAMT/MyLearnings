type User = {
    name: string,
    id: number,
    isActive: boolean
}

function createUser(user: User){ // Here, user uses all the objects mentioned in User type

}

function createNewUser(user: User): User{ 
    return {name: "", id: 3, isActive: true}
}

type NewUser = {
    name: string,
    readonly _id: number, //Nobody will be able to manipulate because we used readonly. Objects will accept only _ and $ 
    isActive: boolean,
    creditcard?: number // ? means this is not mandatory value and need not to be called when this function is inherited
}

let myUser: NewUser = {
    name: "Raghu",
    _id: 223,
    isActive: false
}

myUser.name = "RAM" // We are overwriting the value
// myUser._id = 321 // This line throws error because id is readonly

type cardNumber = {
    cardnum: number
}

type cardDate = {
    date: string
}

type cardDetails = cardDate & cardNumber & {
    cvv: number
}

//function calling
createUser({name: "", id: 3, isActive:false})