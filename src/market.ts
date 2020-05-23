import { CheckoutCounter } from "./checkoutCounter";
import { Client } from "./client";

export class Market{
    private checkoutCounter:CheckoutCounter[];

    constructor(checkoutCounter:CheckoutCounter[]){
        this.checkoutCounter = checkoutCounter;
    }

    public attend(client:Client, checkoutCounterIndex:number){
        console.log("Cliente en la fila: ", client.getName(), `[Caja: ${checkoutCounterIndex + 1}]`);
        this.checkoutCounter[checkoutCounterIndex].attend(client);
    }

    public openCounter(checkoutCounterIndex:number):void{
        this.checkoutCounter[checkoutCounterIndex].open();
    }

    public inactivateCounter(checkoutCounterIndex:number):void{
        this.checkoutCounter[checkoutCounterIndex].inactivate();
    }

    public closeCounter(checkoutCounterIndex:number):void{
        this.checkoutCounter[checkoutCounterIndex].close();
    }
}