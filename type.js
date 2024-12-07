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



///Type alias to define arrays

type StringArray = string[]
type NumberArray = Array<number>
let names : StringArray = ['shaker', 'Alice', 'Bob']
let numbers : NumberArray = [1, 2, 3, 4, 5]

console.log(names);
console.log(numbers);



// Type alias to define complex object structure


type User = {
    name : String;
    age : Number;
    isAdmin: boolean;
}

let adminUser : User = {
    name : "alice",
    age : 28,
    isAdmin: true,
}

console.log(adminUser);




type greet = (name : string)=> string;

let greetUser : greet = (name : string)=>{
    return ` Hello ${name}`

}

console.log(greetUser("shaker"));




// Type alias for tuple

type point = [number, number]

let coordinate : point = [10, 20]

console.log(coordinate);



// combine multiple types into one


type HashName = {
    name : string
}

type HashAge = {
    age : number
}
type HashJob ={
    job : string
}

type person = HashName & HashAge & HashJob

let hash : person = {

    name : "Rock",
    age : 45,
    job : "Fighter"
}

console.log(hash);



//Extend Interface

interface user {
    name : string,
    age : number,
    greet() : string
}

interface Employee extends user{
   readonly job : string
}

let admin : Employee ={
    name : "Alice",
    age : 40,
    job : "Dev",
    greet() {
        return `Hello ${this.name}`
    },
    

}
admin.name = "Bob"
admin.age = 34
admin.job = "Developer"
console.log(admin);

 
//readonly :




///Nullable Types :

let a;
console.log(a);

*/
//optional Types
function greet(name) {
    if (name) {
        console.log("Hello ".concat(name));
    }
    else {
        console.log("Hello");
    }
}
greet();
