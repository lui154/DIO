type Hero = {
    name: string;
    vulgo: string;
};
function printaObj(pessoa: Hero){
    console.log(pessoa);
}
printaObj({
    name:"bruce",
    vulgo: "batman",
});
// Funçoes
function addNum(x: number, y: number){
    return x+y;
}
function addHelo(name: string){
    return `Hello ${name}`;
}
let soma: number = addNum(4,7);
console.log(soma);
console.log(addHelo("Luisa"))
// Funçoes mult tipos
 function callPhone(phone:number|string):number|string{
    return phone;
 }
 console.log(callPhone(9915544));
 // Funçoes Async
async function getData(id:number):Promise<string> {
    return "luisa";
}
//Interface
interface robot{
    readonly id: number|string;
    name: string;
    sayHello():string;
}
const bot:robot={
    id:"1",
    name: "robbie",
    sayHello():string{
        return "Hello World";
    }
}
console.log(bot.id)
console.log(bot.name = "Robert");
class Robo implements robot{
    id: string | number;
    name: string;
    
    constructor(id: string|number, name:string){
        this.id = id;
        this.name = name;
    }
    sayHello():string{
        return `Hello i'm ${this.name}`;
    }
}
const r = new Robo(1, "Elliot");
console.log(r.sayHello());