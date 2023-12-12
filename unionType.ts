/*
union : where we can place a group of different data types 
to a single variable  using pipe(|)
*/

function unionType(age: number | string) {
  console.log(age);
}
unionType("10"); //string
unionType(10); // number
