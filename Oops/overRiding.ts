//MEthod OverRiding : if two classes contains same method with same pqarameters

class A {
  display(): void {
    console.log("from class A");
  }
}
class B extends A {
  display(): void {
    super.display();
    console.log("from class B");
  }
}
const bObj = new B();
bObj.display();
