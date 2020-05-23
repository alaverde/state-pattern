import { IStateCheckoutCounter } from "./IStateCheckoutCounter";
import { OpenState } from "./openState";
import { InactiveState } from "./inactiveState";
import { CloseState } from "./closeState";
import { Client } from "./client";

export class CheckoutCounter{
    private state:IStateCheckoutCounter;

    constructor(){
        this.state = new OpenState();
    }

    public open():void{
        this.state = new OpenState();
    }

    public inactivate():void{
        this.state = new InactiveState();
    }

    public close():void{
        this.state = new CloseState();
    }

    public attend(client:Client){
        this.state.attend(client);
    }
}