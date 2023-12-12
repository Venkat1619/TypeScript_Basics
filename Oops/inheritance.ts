//inheritance : class  aquires another class by using extends
// types : simple , multiLevel , multiple ,Hierarchical

//simple inheritance

class A {
  a: number = 2;
  display() {
    console.log("class A", this.a);
  }
}
class B extends A {
  b: number = 6;
  show() {
    console.log("class B", this.b);
  }
}
const bObj = new B();
console.log(bObj.a);
bObj.display();

// other example

class Employee1 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  emp() {
    console.log("hello Employee", this.name);
  }
}
class Person extends Employee1 {
  constructor(name: string, public age: number) {
    super(name);
  }
  person() {
    super.emp();
    console.log("your age ", this.age);
  }
}
const perObj = new Person("sai", 10);
perObj.person();

//multiLevel inheritancs
