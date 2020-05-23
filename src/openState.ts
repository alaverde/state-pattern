import { IStateCheckoutCounter } from "./IStateCheckoutCounter";
import { Client } from "./client";

export class OpenState implements IStateCheckoutCounter{
    public attend(client:Client){
        console.log("Atendiendo el cliente: ", client.getName());
    }
}