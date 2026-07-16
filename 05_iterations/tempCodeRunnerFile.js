

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