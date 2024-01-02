//public Access-modifiers can access anywhere inside and outside the class and package

export class PublicModifier {
    constructor(public a: number) {
      this.a = a;
    }
    public display() {
      console.log(this.a);
    }
  }
  export class AB extends PublicModifier {
    constructor(public b: number, a: number) {
      super(a);
    }
    public show() {
      console.log(this.b, "AB");
      super.display();
    }
  }
  const ab = new AB(2, 3);
  ab.show();
  