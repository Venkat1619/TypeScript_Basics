// method OverLoading :  A class contains 2 methods with same name but with different parameters is known as method over loading

class MethodOverloading {
  display(a: number, b: number): number;
  display(a: string, b: string): string;
  display(a: any, b: any): any {
    if (typeof a == "number" && typeof b == "number") {
      return a + b;
    }
    if (typeof a == "string" && typeof b == "string") {
      return a + b;
    }
  }
}
const mi = new MethodOverloading();
console.log(mi.display(1, 2));
console.log(mi.display("venkat", "sai"));
