// In TypeScript  we declare  : let age:number = 22;
// In JavaScript   we declare :  let age = 22;

//  Here let  is a key-word which says to javascript engine that variable is declared
// age is a variable where we can store the value
// number  is a data-type

// The main  difference between TS and  JS in the above line is :
//      In TS we can not assign any other data types to the variable age once it is declared  because it was strictly typed we can only assign numbers
// In JS we can reassign to other data type because JS is Dynamically types

// In TS
let age: number = 22; // we can store only numbers
console.log(age);
// age='hello'    // Error : Type 'string' is not assignable to type 'number'

//  In Js file with .js extension , i won't throw an error
// let Id = 22;
// Id ='hello'
