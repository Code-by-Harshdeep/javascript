let score ="33abc"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber=Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)

let g=null;
let h=undefined

console.log(Number(g))
console.log(Number(h))

let isLoggedIn="harsh"
let booleanisLoggedIn=Boolean(isLoggedIn)
console.log(booleanisLoggedIn)

//1  =  true  and 0 = false
//"" empty string result in false
//"harsh" string result in true

let someNumber=33;
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

/*       Operations       */

let value=3
let negValue =-value
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1="hello"
let str2=" world"

let str3=str1+str2
console.log(str3)

console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")

console.log(true)
console.log(+true)
console.log(+"")

let num1,num2,num3

num1=num2=num3=2+2

let gameCounter=100
gameCounter++;
console.log(gameCounter)