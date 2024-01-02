let arr=[1,2,3,-1]
let alp =['a','g','d']
let apl ='hello'

//sort
console.log(alp.sort())// ['a','d','g']
console.log(alp.sort().join())//[a,d,g]
// console.log(alp.sort().join('')) //[adg]

//reverse for string use split()
console.log(apl.split('').reverse().join(''))
console.log(arr.reverse())

let str:string="hello"
let rev=''

for(let i=str.length-1;i>=0;i--){
      console.log(str[i])
     rev= rev+str[i]
}
console.log(rev)


let revnum=''
for(let i=0; i<arr.length;i++){
     console.log(arr[i]);
        revnum = revnum+ arr[i]
}
console.log(revnum)

