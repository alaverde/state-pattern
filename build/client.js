"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Client {
    constructor(id, name) {
        this.id = 0;
        this.name = "";
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
exports.Client = Client;
