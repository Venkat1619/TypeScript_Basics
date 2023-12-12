//class : It is a collection of object and methods
//object : it is a instance of class
//method() : where we can write a code and perform the task

class Car {
  licence: number;
  constructor(num: number) {
    this.licence = num;
  }
  display(): number {
    return this.licence;
  }
}
//myCar is a object
const myCar = new Car(100);
console.log(myCar.display());

class Bike {
  state: string;
  constructor(state: string) {
    this.state = state;
  }
  showState() {
    console.log(this.state);
  }
}
const bike = new Bike("AP");
bike.showState();
