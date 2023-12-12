// there are different data types:
//number(int,float,double,bigInt)
// string
//boolean
//object
//array
//undefined
//null

//special types
//any
//unkmown
//enum
//tuple
//never

//(1) number:
let userId: number = 1;

//(2) string
let userName: string = "Hari Hara";

// (3) boolean
let isLoggedIn: boolean = true;

//(4) object
let objEx = {
  name: "sai",
  age: 25,
  gender: "male",
  accessPermission: true,
};
console.log(objEx.name);

//(5) array // where we can place group of values into a single variable
let arr: Array<number> = [1, 2, 3, 4]; //only numbers allowed
let arrName: Array<string> = ["abc", "def,"]; //only strings allowed

// it is the method called as inference no need to specify type by the values it will directly consider
let arrAny = [1, 2, "abc", true]; // it takes any data type

//(6) undefined  :  variable is declared but value is not assigned
let ageNum;
console.log(ageNum); // ERROR: undefined

//(7) null  // the value is assigned as null to a variable so that no other value is assigend to that variable
let nullExample: null = null;
// nullExample='p' // Error : Type '"p"' is not assignable to type 'null'

//special types
//(1) any  : user  can  able to use any data type
let anyEx: any = "string";
anyEx = 3;
anyEx = true;

// (2) unknown
let unKnownEx: unknown;
console.log(unKnownEx); //undefined

// (3)  tuples
// A tuple is a typed array with a pre-defined length and types for each index.
let user: [number, string, boolean] = [1, "sai", true]; // we have to assign in a order
// let user:[number ,string,boolean] =  ['sai',1,true] // it will throw an error

//(4) enum
// where we can place a group of constants is enum

enum Size {
  Small,
  Medium,
  Large,
}
console.log(Size.Small);
