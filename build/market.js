"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Market {
    constructor(checkoutCounter) {
        this.checkoutCounter = checkoutCounter;
    }
    attend(client, checkoutCounterIndex) {
        console.log("Cliente en la fila: ", client.getName(), `[Caja: ${checkoutCounterIndex + 1}]`);
        this.checkoutCounter[checkoutCounterIndex].attend(client);
    }
    openCounter(checkoutCounterIndex) {
        this.checkoutCounter[checkoutCounterIndex].open();
    }
    inactivateCounter(checkoutCounterIndex) {
        this.checkoutCounter[checkoutCounterIndex].inactivate();
    }
    closeCounter(checkoutCounterIndex) {
        this.checkoutCounter[checkoutCounterIndex].close();
    }
}
exports.Market = Market;
