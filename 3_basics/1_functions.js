
function sayMyname(){
console.log("H")
console.log("E")
console.log("L")
console.log("L")
console.log("O")
}

// sayMyname();

// function addTwoNumbers (num1,num2){
//     console.log(num1+num2)
// }

function addTwoNumbers (num1,num2){
    let result= num1+num2
    return result
}

function addTwoNumbers (num1,num2){
    return `Result is : ${num1+num2}`
}

let result =addTwoNumbers(1,4);
console.log(result)

function loginUserMessage(username="Alice"){
    if(!username){
        console.log("please enter a Username")
        return

    }
    return `${username} just logged in`
}
// (username="Alice")
// we can also give a default value if user input is empty
// console.log(loginUserMessage("Harsh"))  
// console.log(loginUserMessage()) 

function caculateCartPrice(...num1){
   return num1
}

console.log(caculateCartPrice( 200, 400, 500, 2000 ))

const user={
    username:"Harsh",
    price:199
}

function handleObject(anyobject){
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`)
}


// handleObject(user);
handleObject({
    username:"Alice",
    price:399
})

const myNewArray =[200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray
}
