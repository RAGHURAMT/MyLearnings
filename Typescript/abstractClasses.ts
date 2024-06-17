abstract class TakePhoto{
    constructor(
        public cameramode: string,
        public filter: string
    ){}

    abstract getSepia(): void

    // The main difference between Interface and abstract is in abstract we can write the below methods with definition - same as oops
    getreel(): number {
        //code logic
        return 8
    }
}

// const ram1 = new TakePhoto("test", "ram")

class Instagram extends TakePhoto{
    constructor(
        public cameramode: string,
        public filter: string,
        public burst: number 

    ){
        super(cameramode, filter)
    }
    getSepia(): void { 
    }
}

const rr = new Instagram("test", "ram", 3)
rr.getreel()