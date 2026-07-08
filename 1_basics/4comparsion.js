console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2==1)
console.log(2!=1)

console.log("2" > 1)       //true
console.log("02" > 1)      //true

/*we need to avoid these kind of conversions*/
console.log(null>0)
console.log(null==0)
console.log(null>=0)

console.log(undefined>0)
console.log(undefined==0)
console.log(undefined>=0)
/* -------------------------------------- */


console.log("2"==2)
console.log("2"===2)