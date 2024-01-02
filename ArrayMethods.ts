let arrElements:number[] =[1,2,3,4,5]

//Shift() :  It is used to delete the element at first
arrElements.shift();
console.log(arrElements) //[2,3,4,5]

//ushift() : It is used to add the element at first
arrElements.unshift(45);
console.log(arrElements) //[45,2,3,4,5]

//push(); It will add the element at last
arrElements.push(99);
console.log(arrElements) //[45,2,3,4,5,99]

//pop() :  It will delete the element at end
arrElements.pop();
console.log(arrElements) //[45,2,3,4,5]


// in object we can add like this
let myObject:{[key:string]:number} ={
    key1:1,
    key2:2,
    key3:3

}
myObject.key4=4;
console.log(myObject)

// array of objects

let myArrayObj =[
    {key:1},
    {key:2},
]
myArrayObj.push({ key:3 });

// Define an array of objects
let arrayOfObjects = [
    { key: 1 },
    { key: 2 },
  ];
  
  // Push a new object onto the array
  arrayOfObjects.push({ key: 3 });
  
  console.log(arrayOfObjects);
  // Output: [ { key: 1 }, { key: 2 }, { key: 3 } ]
  
 
