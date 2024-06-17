    class GetterAndSetters {
    private _courseCount: 1
    readonly city: string = "London"
    constructor(
        public email: string,
        public name: string,
        private userid: string
    ){
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get coursesCount(): number{
        return this._courseCount
    }

    set courseCount(CourseNum){ // set will not have any written type. If we try to add return type, it will throw the errors
        if(CourseNum <=1)
        {
            throw new Error("course count should be more than 1");
        }
        this._courseCount = CourseNum
    }
}