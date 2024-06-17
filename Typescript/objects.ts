//creating a simple variable
const User = {
    email: "email@email.com",
    name: "raghu",
    id: 2,
    isActive: false
}

function createUser({name: string, id: number}){} //Here, name and id are objects and declared inside the {}

//object returning an object
function courses():{name: string, price: number}{ // Here, we are always returning name and price objects
    return {name: "typesc", price: 30}
}

let newUser = {name: "raghu", id: 1} // Storing the objects into an variable
let courseDetails = {name: "TS", price: 500}

//function calling
createUser({name: "raghu", id: 1})
createUser(newUser)
courses() // Here, courses function is not expecting any arguments

export{}