interface Shape {
  width: number;
  height: number;
  getArea: () => void;
}

class Round implements Shape {
  // public constructor(protected readonly width: number, protected readonly height: number) {}
  width: number = 10;
  height: number = 20;
  public getArea(): void {
    console.log(this.width * this.height);
  }
}

const myRect = new Round();

console.log(myRect.getArea());
