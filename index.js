"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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



//Generics

//create components that can work with any data type while still maintaining type

function identity<T>(arg: T): T {
    return arg;
}

let numberIdentity = identity<number>(42)
let string = identity<string>("42")



class Stack<T> {
    private items: T[] = [];
    push(item: T): void{
        this.items.push(item);
    }
    pop(): T | undefined {
        return this.items.pop()
    }
}

const numberStack = new Stack<number>();
numberStack.push(1);
console.log(numberStack);


//literal

//string literal type
type Greeting = "Hello" | 2 | "kya haal chaal"

function greet(greeting : Greeting){
    console.log(greeting);
    
}

greet("kya haal chaal")



//namespaces

namespace registerValidation {
    export function validateName(name:string): boolean{
        return name.length > 0;
    }
}

const isValidName = registerValidation.validateName("sha")
console.log(isValidName);



//Type Guards

function isString(value: any): value is string {
    return typeof value === "string";
}

function checking(value : string | number){
    if(isString(value)){
        console.log("Yes its string");
    }else{
        console.log("number");
        
    }

}
(checking(8));


//index signature

interface stringArray {
    [index: number]: string
}

let myArray = ["shaker", "TypeScript"]

let myStr: string = myArray[0]
let myStr1: string = myArray[1]
console.log(myStr);

*/
//Modules
var MathUtils = require("./mathUtils");
console.log(MathUtils.add(2, 2));
var calc = new MathUtils.Calculator();
console.log(calc.add(2, 2));
