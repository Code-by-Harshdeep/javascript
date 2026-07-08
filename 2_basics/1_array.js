//array

const myArr=[0,2,4,6,8]
const Heros=["Ironman","doctor Strange","Batman"]

//Array Methods
// Heros.push('Superman')
// console.log(Heros)
// Heros.pop()

Heros.unshift("Wolvorine")
console.log(Heros)
Heros.shift()
console.log(Heros)

console.log(Heros.includes("Ironman"))
console.log(Heros.indexOf("Batman"))

const newArr= Heros.join()
console.log(Heros)
console.log(newArr)
console.log(typeof newArr)

// Slice , Splice
console.log("A ",myArr);

const myn1 =myArr.slice(1,3) // return only the portion of array
console.log(myn1)

const myn2 =myArr.splice(1,3)    //splice also includes ending range 
console.log(myn2)           //it also affect the orginal array which means orignal array will lost the portion of range when using splice
/* e.g :---
const mynums=[0,1,2,3,4,5]
const mynum2=mynums.splice(0,2)
console.log(mynum2)
console.log(mynums)*/

// const myArr2= new Array(1,3,5,7)
// console.log(myArr2)

