"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openState_1 = require("./openState");
const inactiveState_1 = require("./inactiveState");
const closeState_1 = require("./closeState");
class CheckoutCounter {
    constructor() {
        this.state = new openState_1.OpenState();
    }
    open() {
        this.state = new openState_1.OpenState();
    }
    inactivate() {
        this.state = new inactiveState_1.InactiveState();
    }
    close() {
        this.state = new closeState_1.CloseState();
    }
    attend(client) {
        this.state.attend(client);
    }
}
exports.CheckoutCounter = CheckoutCounter;
