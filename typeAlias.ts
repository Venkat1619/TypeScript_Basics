// type Alias  : TypeScript allows types to be defined separately from the variables that use them.

type Employee = {
  readonly id: number;
  userName: string;
  greet: () => string;
};

const emp: Employee = {
  id: 1,
  userName: "sai",
  greet: () => {
    return `${emp.userName}`;
  },
};
console.log(emp.greet());
console.log(emp);

// by using interface
interface Rectangle {
  height: number;
  width: number;
}
class rectangle implements Rectangle {
  height = 20;
  width = 10;
}
const rec = new rectangle();
console.log(rec.height);
