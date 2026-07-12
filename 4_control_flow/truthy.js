 const userEmail ="h@harsh.ai"

//  if(userEmail){
//     console.log("got user email")
//  }
//  else{
//     console.log("Dont have user email")
//  }
 
//  const userEmail =""
//  if(userEmail){
//     console.log("got user email")
//  }
//  else{
//     console.log("Dont have user email")
//  }
 const userEmail =[];
 if(userEmail){
    console.log("got user email")
 }
 else{
    console.log("Dont have user email")
 }
 
 //falsy values

 //false, 0 ,-0 ,BigInt 0n, "",null,undefined,NaN

 //truthy values
 //"0" ,'false' ," "-space ,[],{},function()


//to check array is Empty
 if (userEmail.length===0) {
    console.log("Array is Empty")
 }

 //to check object is Empty
const empty0bj ={}

if (Object.keys(empty0bj).length===0) {
    console.log("object is Empty")
}

//Nullish Coalescing Operator (??):null undefined

let val1;
// val1 =5??10 
// val1=null ??10
// val1=undefined??15
val1=null??10??15;
console.log(val1)


//Ternary Operator

// condition ?true :false

const iceTeaPrice=80
iceTeaPrice <=50 ? console.log("less then 50") : console.log("More then 80")

