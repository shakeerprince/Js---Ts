
/*
let tuple : [string, number] = ["shaker", 20]

console.log(tuple);

enum Color {
    primary = "Red",
    secondary = "Green"
}

let myColor = Color.primary;
console.log(myColor);

function infinite(message:string){
    throw new Error(message)
}

function add() : void{
    console.log( 2 + 2);
    
}


type Vehicle = {
    make: string,
    model: string,
}

type Car = Vehicle & {
    isElectric: boolean;
};

const myCar: Car = {
    make: "Tesla",
    model: "Model s",
    isElectric: true,
}




interface User {
    name: string,
    age: number,
}

let person1: User = {
    age: 22,
    name: "shaker",
};



let someValue: any = "This is a string";

let strLength: number = (someValue as string).length

console.log(strLength);



function greet(name: string, message? : string): string{
    return `Hello ${name} How are you`
}

console.log(greet("shaker", "Welcome to  typeScript"));


type operation = (a:number, b:number)=> number

let add: operation = (a, b) => a + b



//class 

class Person {
    public name : string;
    public age : number;
    protected address: string;

    //constructor
    constructor(name:string, age: number, address:string ){
        this.name = name;
        this.age = age
        this.address = address
    }
    //getter for age 
public getAge(): number {
    return this.age
}

}



const person1 = new Person("Typescript", 20, "india")
console.log(person1.name);
console.log(person1.age);
console.log(person1.address);

*/

//Generics

//create components that can work with any data type while still maintaining

function identity<T>(arg: T): T {
    return arg;
}