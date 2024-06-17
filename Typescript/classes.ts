class User {
    public name: string
    id: number
    email: string = ""
    constructor(name: string, id: number, public address: string)
    {
        this.name = name
        this.id = id
    }
}

const raghu = new User("raghu", 2, "hounslow")
raghu.email = "raghu@gmail.com"

export{}