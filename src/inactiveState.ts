import { IStateCheckoutCounter } from "./IStateCheckoutCounter";
import { Client } from "./client";

export class InactiveState implements IStateCheckoutCounter{
    public attend(client:Client){
        console.log("Por favor espere");
    }
}