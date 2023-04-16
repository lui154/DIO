"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function printaObj(pessoa) {
    console.log(pessoa);
}
printaObj({
    name: "bruce",
    vulgo: "batman",
});
// Funçoes
function addNum(x, y) {
    return x + y;
}
function addHelo(name) {
    return `Hello ${name}`;
}
let soma = addNum(4, 7);
console.log(soma);
console.log(addHelo("Luisa"));
// Funçoes mult tipos
function callPhone(phone) {
    return phone;
}
console.log(callPhone(9915544));
// Funçoes Async
function getData(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "luisa";
    });
}
const bot = {
    id: "1",
    name: "robbie",
    sayHello() {
        return "Hello World";
    }
};
console.log(bot.id);
console.log(bot.name = "Robert");
class Robo {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello i'm ${this.name}`;
    }
}
const r = new Robo(1, "Elliot");
console.log(r.sayHello());
