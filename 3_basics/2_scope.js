// var c=300

let a =300

if(true){
let a = 10
const b = 20
console.log("Inner:",a)
}


console.log(a)
// console.log(b)
// console.log(c)


function one (){
    const username ="harsh"

    function two(){
        const website ="youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}

one();

//closure - mean child functions can access parent function 
//properties

if(true){
 const username="Harsh"
 if(username ==="Harsh"){
    const website =" youtube"
    console.log(username+website)
}
    // console.log(website)
}

// console.log(username)

//---------------Interesting---------------

addone(5)
function addone(num){
    return num+1
}


addTwo(5)
const addTwo =function(num){
    return num+2
}

//need to cover Hoisting in detail