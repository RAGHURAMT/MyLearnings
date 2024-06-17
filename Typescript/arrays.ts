const marvel:[] = [] // This is an empty array

const dc:string[] = [] // This is an string array
dc.push("batman")

const numberOfmembers:number[] = []
numberOfmembers.push(2)

//Another way of intializing the array
const heropower: Array<number> = []
heropower.push(3)

type User = {
    name: string,
    id: number
}

const allUsers: User[] = []
allUsers.push({name: "raghu", id: 3}) // objects are always passed inside {}

const MlModals: number[][] =[
    [255, 233, 233],
    [123, 122, 233],
    []
]

var numArray:number[] = [2,3,4,5]
console.log(numArray[0])

var stringArray:string[] = ["1","2","3"]
console.log(stringArray[3])

//Example: Array object
var arrayObj:number[] = new Array(3)
for(let i=0; i<arrayObj.length; i++)
{
    arrayObj[i] = i*2
    console.log(arrayObj[i])
}

//Example: Array Constructor
var stringObj:string[] = new Array("1","2","3")
for(let i=0; i<stringObj.length;i++)
{
    console.log(stringObj[i])
}

export{}