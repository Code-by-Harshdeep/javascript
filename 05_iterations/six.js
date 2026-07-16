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

const newNums=[]

myNums.forEach((num)=>{
if (num>4) {
    newNums.push(num);
}
})

console.log(newNums)



const books=[
    {
     title:'Book One',genre:'Fiction', publish:1997    
    },
    {
    title:'Book Two',genre:'History', publish:2001
    },
    {
     title:'Book Three',genre:'Science', publish:1999  
    },
    {
     title:'Book Four',genre:'Non-Fiction', publish:2005 
    },
]

const userBooks=books.filter((item)=> item.publish>2004)
const userBooksGenre=books.filter((item)=> item.genre==='History'&&item.publish>1995)
// console.log(userBooks)
console.log(userBooksGenre)