import { Client } from "./client";
import { Market } from "./market";
import { CheckoutCounter } from "./checkoutCounter";

const james = new Client(1, "James");
const steve = new Client(2, "Steve");
const roger = new Client(3, "Roger");

const checkoutCounter1 = new CheckoutCounter();
const checkoutCounter2 = new CheckoutCounter();
const market = new Market([checkoutCounter1, checkoutCounter2]);

market.inactivateCounter(1);
market.attend(james, 0);
market.attend(steve, 1);

market.openCounter(1);
market.attend(steve, 1);

market.closeCounter(0);
market.closeCounter(1);
market.attend(roger, 0);
market.attend(roger, 1);