export class Client {
    private id:number = 0;
    private name:string = "";

    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }

    public getId(){
        return this.id;
    }

    public getName(){
        return this.name;
    }

}