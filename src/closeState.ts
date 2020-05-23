import { IStateCheckoutCounter } from "./IStateCheckoutCounter";
import { Client } from "./client";

export class CloseState implements IStateCheckoutCounter{
    public attend(client:Client){
        console.log("Esta caja se encuentra cerrada.");
    }
}