// Private can access only in class

import { AB } from "./publicAccess";

export class PrivateExample {
  private a: number = 10;
  public b: number = 20;

  public display() {
    console.log(this.a);
  }
}
const PE = new PrivateExample();
//both can access because they are public
PE.display();
console.log(PE.b);

// can not access because of private
/*
PE.a  
Error : Property 'a' is private and only accessible within class 'PrivateExample'.ts
*/

//Accessing Public method in other file
const ab = new AB(2, 3);
ab.display();
