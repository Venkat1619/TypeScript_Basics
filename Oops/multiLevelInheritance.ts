// multi level means one class extends to other class and that class extends to another class
// Ex :  GrandFather, Father ,Child

class CarColor {
  color: string;
  constructor(color: string) {
    // or u can remover color in 5th line and use public color in constructor
    this.color = color;
  }
  displayColor() {
    console.log(this.color, "is car color");
  }
}
class CarPrice extends CarColor {
  constructor(public price: number, color: string) {
    super(color);
  }
  displayPrice() {
    super.displayColor();
    console.log(this.price, "is car price");
  }
}

class CarBrand extends CarPrice {
  constructor(color: string, price: number, public brand: string) {
    super(price, color);
  }
  displayBrand() {
    super.displayPrice();
    // super.displayColor()
    console.log(this.brand, "is  car brand ");
  }
}
const carbrand = new CarBrand("red", 20, "bmw");

carbrand.displayBrand();
