/* 
let message : string = "Hello bob"
console.log(message);

message = "hello james"

let price  : number =  14.2 
console.log(price);


let active : boolean = true;
console.log(active);

/// how to declare array in typescript

let list1 : number[] = [1,2,3,4]
console.log(list1);

let list2 : Array<number> = [1,2,3]
console.log(list2);

//tuple 
let x : [string, number]
x = ["shaker", 23]
console.log(x);

let y : [string, number, boolean]
y = ["shaker", 23, true]
console.log(y);

//function
function greet(name : string, age : number){
    return "Hello " + name + age

}

console.log(greet("shaker ", 23));


// any

let h : any = true
h = "james"
console.log(h);

//objects
function processUser(user : User){
 return `Name: ${user.name}, Age: ${user.age}`

}

interface User{
    name: String,
    age: number,
}

const invalidUser = {
    name: "james"
}

user.age = "ddvfgnh"

const user ={
 name : "shaker",
 age : 23  
}


console.log(processUser(invalidUser));



//enums : Define group related constants having meaningful names
// enum -- string or numeric 

enum Direction{
    North = 1,
    South,
    East,
    West
}

console.log(Direction);


enum color{
    Red,
    Green,
    Blue,
}

console.log(color.Green);




*/


// Type Alias

type StrData = string;

let userName  :  StrData = "james"

console.log(userName);


type float = number;

let price : float = 3.14

console.log(price);


// Union Type Alias

type ID = number | string;

let employeeID : ID =  22;
//employeeID = "employee"

console.log(employeeID);
