import { Client } from "./client";

export interface IStateCheckoutCounter {
    attend(client:Client):void;
}