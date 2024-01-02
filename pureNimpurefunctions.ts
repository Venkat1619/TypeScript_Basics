
// getting same output for same input

function pureFunction(name:string):void{
    console.log("Hi "+ name);
}
pureFunction('sai');

//impure function
let name1='venkat';
function impureFunction(){
   console.log("HIII"+ name1);
}
impureFunction();

name1='poorna';
impureFunction();
