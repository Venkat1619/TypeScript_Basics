
// const whileLoop =(num:number)=>{
//       let i=1;
//       while(i<=num){
//         console.log(i) ;
//         i++;
//       }
// }

// whileLoop(10);

// even Num with while loop

function whileEvenNum(num:number):void{
  let i=2;
  while(i<=num){
    if(i%2 == 0){
        console.log(i);
    
    }
    i++
  }
}
whileEvenNum(10)