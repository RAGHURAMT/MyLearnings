//Tuple is also a kind of an special type of an array
const user: string[] = ["ram"] // It accepts only string
const user2: (string | number)[] = ["ram", 2]  // Here array will accepts both string and number. Also, the array can written as [2, "ram"]. There is no restriction on the order

//tuple example
const user3: [string, number, boolean] = ["1", 2, false] // This is the example of tuple. Here, the array order should be same as declaration. In real case scenarios, we use tuples to restrict the user to follow the order. Example: API calls. API's follows specific structure or order. Hence, we use tuples to restrict the order.

type tupleuser = [number, string] 
const newuser: tupleuser = [1, "ram"]
console.log(newuser[0])
console.log(newuser[1])