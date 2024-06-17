// Union is combination of two or three or more types of data that can include in a variable or an array
let score: number | string = 33 // score can accept number type or a string type
score = 44
score = "54"

type User = {
    name: string,
    id: number
}

type Admin = {
    userName: string,
    isActive: boolean
}

let raghu: User | Admin = {name: "raghu", id: 34} //Here, Raghu can be User or Admin or both
raghu = {userName: "Raghuram", isActive: false}

function getDBId(id: number | string){
    // id.toUpperCase() // This will throw error because the id can be a number or a string
    if(typeof id === "string"){
        id.toUpperCase()
    }
    console.log({id})
}
getDBId(3)
getDBId("test")

//array
const data: number[] = [1, 2, 3]
const date2: string[] = ["1", "2"]
const data3: string[] | number[] = ["1", "2", "3"] // This can have only either string or numbers but it can have both in a signle array
const data4: (string | number)[] = ["1", "2", 3] // Now this can have both number and string in a single array
const data5: (string | number | boolean)[] = ["1", "2", 3, false] 
const data6: any[] = ["1", "2", 3, false] 

let pi:3.14 = 3.14 // Here, pi can have the value only as 3.14... if we overwrite it with another value, it wont allow
// pi = 2.14 --This will throw the error

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle" // This is allowed
// seatAllotment = "crew" -- This throws the error because seatallotment can only have the any of the above 3 values



export{}