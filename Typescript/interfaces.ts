// type and interfaces are identical
// Type vs Interface
//Type and Interface are very similar. Type have almost all the features of interface. The main differnce is type cannot be reopened to add new properties and interfaces are always extendable and reopned to add new properties 
//Interface is a template for onject, class and arrays

interface User {
    readonly dbid: number // the value of dbid cannot be overwritten because the variable is declared as readonly
    email: string
    id: number
    startTrial: () => string // This is a arrow function and it should return the string
    // startTrial2(): string // Another way of declaring a function
    getCoupon(couponName: string): number // This is a function and it should return the number
}

//This is called reopening of interface which means just adding the new variables in an existing interface
interface User {
    github?: string // ? means optional. When we call the interface, it is not mandatory to use this variable because it is declared optional
}

interface Admin extends User{
    role: string // or role: "admin" | "student" | "learner"
}

const raghu: Admin = {
    dbid:3221, email:"r@r.com", id:2, role: "admin",
startTrial: () => {
return "trial started"},
getCoupon(couponName: "name") {
    return 3
},}
raghu.email = "trr@trr.com" // Overwriting the values
raghu.id = 222
// raghu.dbid = 322 // It throws the error because dbid is readonly

interface TakePhoto {
    name: string
    filter: string
    date: number
}

interface Story{
    createStory(): void
}

class Instagram implements TakePhoto{
    constructor(
        public name: string,
        public filter: string,
        public date: number
    ){}
}

class Youtube implements TakePhoto, Story{
    constructor(
        public name: string,
        public filter: string,
        public date: number,
        public short: string
    ){}

    createStory(): void{
        console.log("story")
    }
}


export{}