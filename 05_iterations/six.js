const coding=["js","python","ruby","cpp"]


const values= coding.forEach((item)=>{
    console.log(item);
    return item
})

console.log(values)

//does not return anything foreach

const myNums=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const j=myNums.filter((item)=>{
    return item>3
})
//if we use {} scope then we manually return
//else if we can simply do 
// const j=myNums.filter((item)=> item>3 )

//filter return a new array with formatting of true
console.log(j)

