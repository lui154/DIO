//Decorators
function miniLength(length:number){
    return(target:any, key:string)=>{
        let _value = target[key];
        const getter = () => _value;
        const setter = (value:string)=>{
            if (value.length<length){
                throw new Error(`Tamanho menor que ${length}`);
            }else{
                _value = value;
            }
        };
        Object.defineProperty(target, key,{
            get:getter, set:setter,});
    };
}
class Api{
    @miniLength(3)
    name:string;
    constructor(name: string){
        this.name = name;
    }
}
const api = new Api("prod");
console.log(api.name);
/*//Genericos
function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
}
const numArray = concatArray<number[]>([1,5,6],[3]);
const stgArray = concatArray<string[]>(["bruce", "diana"],["clark"]);
console.log(numArray);
console.log(stgArray);
//Classes
class Character{
    protected name?: string;
    stregth: number;
    skill: number;

    constructor(name:string, stregth:number, skill:number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack():void{
        console.log(`Attack whit ${this.stregth} points`);
    }
}
class Magician extends Character{
    magicPoints: number;
    constructor(name:string, stregth:number, skill:number,magicPoints: number){
        super(name, stregth, skill);
        this.magicPoints = magicPoints;        
    }
}

const p1 = new Character("Ryu", 10, 98);
const p2 = new Magician("Presto", 5, 30, 100);
p1.attack();

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
console.log(r.sayHello());*/