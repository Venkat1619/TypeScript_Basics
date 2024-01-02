// Loops :  loop the code continuously or execute the statement multiple times till it satisfies the condition
// for ,while,do-while
//  Three main thing : Initilization , condition, increment


// function forLoop(num:number){
//        for(let i=0;i<=num;i++){
//              console.log(i)
//        }
// }
// forLoop(10)


// function evenforLoop(num:number){
//     for(let i=2;i<=num;i++){
//         if(i%2==0){
//             console.log(i)
        
//         }
//     }
// }
// evenforLoop(10)

// function  thirdlargest(arr){
//     let first=0;
//     let sec =0;
//     let third =0;
//     for(let i=0;i<=arr.length;i++){
//          if(arr[i] > first){
//             first=arr[i]
//          }
//     }
//     for(let i=0;i<=arr.length;i++){
//         if(arr[i]<first && arr[i]>sec){
//            sec=arr[i]
//         }
//    }
//    for(let i=0;i<=arr.length;i++){
//     if(arr[i]<sec && arr[i]>third){
//        third=arr[i]
//     }
// }
//     return third

// }
// let arr=[1,2,34,5]
// console.log(thirdlargest(arr))

function max_min(arr):number{
    let max= arr[0];
    let min = arr[0];
     for(let i of arr){
       if(arr[i] < min){
        min=arr[i]
       }
       if(arr[i] > max){
        max=arr[i]
       }
     }
     return max;
}


