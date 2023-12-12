// one child has 2 parents  this method we can do with the help of interface
// interface :where having abstract method
//abstract : contains only declaration not implementation

interface parent1 {
  firstParent: string;
  displayFirstParent(): void;
}
interface parent2 {
  secondParent: string;
  displaySecondParent(): void;
}

class Child implements parent1, parent2 {
  firstParent: string = "first";
  secondParent: string = "second";

  displayFirstParent(): void {
    console.log("Hello iam ", this.firstParent);
  }
  displaySecondParent(): void {
    console.log("Hello iam ", this.secondParent);
  }
}

const childclass = new Child();
childclass.displayFirstParent();
childclass.displaySecondParent();
