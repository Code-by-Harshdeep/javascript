const myNums=[1,3,5,7,9,11]

const f=myNums.map((item)=> item+10)
console.log(f)

const j=myNums.forEach((item)=>console.log(item+10))
console.log(j)


//Chaining
const newNums = myNums.map((num)=>num*10)
.map((num)=> num+1 )
.filter((num)=>num=>50)

console.log(newNums)