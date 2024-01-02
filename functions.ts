function add(a: number, b: number) {
  return a + b;
}
const result = add(10, 20);
console.log(result);

// same with anoter way arrow function
const add1 = (a: number, b: number) => {
  return a + b;
};
const response = add1(10, 20);
console.log(response);

//function with optional chaining
/* Basically we have to pass the same no of parameters while we are calling a function but by using optional
chaining  (?) can call without params */

const addition = (a: number, b?: number) => {
  //(a:number ,b=2) or else this way we can pass
  return a + (b || 2); // if b is not defined then it takes default value 2  and execute
};
const res = addition(10);
console.log(res);

// Parameters :: The variables declared between the parenthesis of a function declaration.
// Arguments :: The values passed to a function when the function is called/invoked which become the values of the declared parameters.
 
// function parameters(a,b){}   //parameters while declaring
// parameters(1,2) //arguments while calling
